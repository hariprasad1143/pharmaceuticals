import {mapGetters} from 'vuex'
import Simplert from 'vue2-simplert'
import config from '@common/src/config'
import errorHandler from '@common/src/util/error-handler'
import ModalConfirmation from '@/components/ModalConfirmation'
import PaymentPunchout from '@/components/PaymentPunchout'
import Timer from '@/components/Timer'
import {ThankYou} from 'mixins/ThankYou'
import util from '@common/src/util'

export default {
  name: 'thank-you-failed',
  mixins: [ThankYou],
  components: {
    ModalConfirmation,
    Simplert,
    PaymentPunchout,
    Timer
  },
  data () {
    return {
      errorMessage: this.$t('app.thankYou.failedMessage'),
      visibleBackToHome: false
    }
  },
  created () {
    this.getInitOrder()
    this.removeVipCookies()
  },
  computed: {
    ...mapGetters(['cmsContent', 'staticConfig']),
    visibleFailedPayment: function () {
      return (this.order.orderStatus && this.order.orderStatus !== 'X') ||
      (this.order.payment && this.order.payment.paymentStatus === 'INVALID' &&
      this.order.payment.validationMessage !== '')
    },
    canceledOrder: function () {
      return this.order.orderStatus === 'X'
    },
    failedOrder: function () {
      return this.order.payment.paymentStatus === 'INVALID' && this.order.payment.validationMessage !== ''
    }
  },
  methods: {
    getInitOrder: function () {
      this.$store.dispatch('getOrder', {
        hash: this.hashCode(),
        success: this.successGetOrder,
        fail: this.failGetOrder
      })
      return true
    },
    successGetOrder: function (response) {
      const errors = response.body.errors
      if (errors && Object.keys(errors).length > 0) {
        this.errorMessage = this.$t('app.thankYou.errors.' + Object.keys(errors)[0])
        return
      }
      if (!(this.canceledOrder || this.failedOrder)) {
        this.$router.replace(config.app.pages.thank_you + '/' + this.hashCode() + '/success')
        return
      }
    },
    failGetOrder: function (response) {
      let self = this
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
      return errMessage
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
    hideButtonRepay: function () {
      this.visibleBackToHome = true
    },
    redirectOrderHistory: function () {
      this.$router.push(config.app.pages.order_history)
    }
  }
}
