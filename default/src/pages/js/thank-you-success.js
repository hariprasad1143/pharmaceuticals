import {mapGetters, mapActions} from 'vuex'
import Simplert from 'vue2-simplert'
import config from '@common/src/config'
import errorHandler from '@common/src/util/error-handler'
import ModalConfirmation from '@/components/ModalConfirmation'
import Loading from '@/components/flash-deals/Loading'
import {ThankYou} from 'mixins/ThankYou'
import Timer from '@/components/Timer'
import util from '@common/src/util'
import Cookie from 'js-cookie'

export default {
  name: 'thank-you-success',
  mixins: [ThankYou],
  data () {
    return ({
      isWaitingOrderResponse: false,
      hasReachMaxWaitingTime: false,
      vaCopied: false,
      vaCopiedFail: false,
      paymentCodeCopied: false,
      paymentCodeCopiedFail: false,
      isLoadingContent: true,
      pendingThankyouPageTimer: 0
    })
  },
  components: {
    ModalConfirmation,
    Simplert,
    Loading,
    Timer
  },
  created () {
    this.getInitOrder()
    this.removeVipCookies()
    if (!this.staticConfig.pendingThankyouPageTime) {
      this.$store.dispatch('getStaticConfig', {
        success: this.getInitTimer
      })
    }
    else{
        this.getInitTimer()
    }
  },
  computed: {
    ...mapGetters(['isWaitingPayment', 'cmsContent', 'staticConfig']),
    canceledOrder: function () {
      return this.order.orderStatus === 'X'
    },
    failedOrder: function () {
      return this.order.payment.paymentStatus === 'INVALID' && this.order.payment.validationMessage !== ''
    },
    isShowVa: function () {
      return this.order.payment.virtualAccountNumber &&
        (this.order.payment.paymentMethod !== 'Indomaret' && this.order.payment.paymentMethod !== 'AlfaGroup' &&
          this.order.payment.paymentMethod !== 'KlikBCA' && this.order.payment.paymentMethod !== 'MandiriBillPayment'
        )
    },
    isShowPaymentCode: function () {
      return (this.order.payment.extendedData.BILL_KEY || this.order.payment.extendedData.blibliOrderId) &&
          (this.order.payment.paymentMethod === 'Indomaret' || this.order.payment.paymentMethod === 'AlfaGroup' ||
          this.order.payment.paymentMethod === 'MandiriBillPayment')
    },
    isShowTenor: function () {
      return (
          !this.isWaitingPayment &&
          (typeof this.order.payment.extendedData.CARD_NO !== 'undefined' ||
          typeof this.order.payment.extendedData.MASKED_CARD !== 'undefined'))
    }
  },
  methods: {
    ...mapActions(['getCmsContent']),
    getInitTimer: function () {
      if (Cookie.get('pendingThankyouPageTime') < 1) Cookie.remove('pendingThankyouPageTime')
      !isNaN(Cookie.get('pendingThankyouPageTime')) && Cookie.get('pendingThankyouPageTime') > 0
      ? this.pendingThankyouPageTimer = Cookie.get('pendingThankyouPageTime')
      : this.pendingThankyouPageTimer = parseFloat(this.staticConfig.pendingThankyouPageTime)
    },
    getInitOrder: function () {
      let self = this
      let fail = function (response) {
        let errorList = ''
        let errMessage = errorHandler.getMessages(self, response.errors)
        for (let i in errMessage) {
          errorList = errorList + '<div>' + errMessage[i] + '</div>'
        }
        self.$refs.simplert.openSimplert({
          type: 'error',
          title: self.$t('app.thankYou.errorTitle'),
          message: errorList,
          customCloseBtnText: self.$t('app.thankYou.backToHome'),
          disableOverlayClick: true,
          onClose: self.goToHome
        })
      }
      self.$store.dispatch('getOrder', {
        hash: self.hashCode(),
        success: self.successGetInitOrder,
        fail: self.failGetInitOrder
      })
    },
    successGetInitOrder: function (res) {
      if (res.data.errors || this.canceledOrder || this.failedOrder) {
        this.$router.replace(config.app.pages.thank_you + '/' + this.hashCode() + '/failed')
        return
      }
      if (this.order.payment.paymentStatus === 'PENDING' && !this.isWaitingPayment) {
        this.isWaitingOrderResponse = true
      }
      this.isLoadingContent = false
    },
    failGetInitOrder: function () {
      this.$router.replace(config.app.pages.thank_you + '/' + this.hashCode() + '/failed')
    },
    getPaymentInstruction: function (paymentMethod) {
      return this.$t('paymentInstruction.' + paymentMethod, {
        orderId: this.order.orderId,
        ...this.order.payment,
        klikBcaId: this.order.payment.extendedData.KLIK_BCA_USER_ID || '',
        billKey: this.order.payment.extendedData.BILL_KEY || '',
        blibliOrderId: this.order.payment.extendedData.blibliOrderId || ''})
    },
    setToWaitingPage: function () {
      this.hasReachMaxWaitingTime = true
    },
    doRepay: function () {
      let self = this
      self.$store.dispatch('repay', {
        data: {
          orderId: self.order.orderId
        },
        success: this.repaySuccess,
        fail: this.$router.replace(config.app.pages.thank_you + '/' + this.hashCode() + '/failed')
      })
    },
    repaySuccess: function (response) {
      const data = response.body.data
      if (data.redirectUrl) {
        util.goUrl(data.redirectUrl)
      }
    },
    copyVa: function () {
      if (this.$clipboard(this.order.payment.virtualAccountNumber)) {
        this.vaCopied = true
      } else {
        this.vaCopiedFail = true
      }
    },
    copyPaymentCode: function () {
      if (this.$clipboard(this.order.payment.extendedData.BILL_KEY || this.order.payment.extendedData.blibliOrderId)) {
        this.paymentCodeCopied = true
      } else {
        this.paymentCodeCopiedFail = true
      }
    },
    redirectOrderHistory: function () {
      this.$router.push(config.app.pages.order_history)
    }
  }
}
