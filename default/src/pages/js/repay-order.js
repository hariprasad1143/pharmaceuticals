import {mapGetters} from 'vuex'
import Simplert from 'vue2-simplert'
import config from '@common/src/config'
import errorHandler from '@common/src/util/error-handler'
import ModalConfirmation from '@/components/ModalConfirmation'
import PaymentPunchout from '@/components/PaymentPunchout'

export default {
  name: 'repay-order',
  components: {
    ModalConfirmation,
    Simplert,
    PaymentPunchout
  },
  data () {
    return {
      visibleNotif: false,
      errorMessage: ''
    }
  },
  created () {
    this.getInitOrder()
  },
  computed: {
    ...mapGetters(['order', 'orderCustomerDetail', 'isWaitingPayment']),
    orderExpiryDuration: function () {
      let today = new Date()
      let duration = this.order.expiredDate - today.getTime()
      let seconds = Math.floor(duration / 1000 % 60)
      let minutes = Math.floor(duration / 1000 / 60 % 60)
      let hours = Math.floor(duration / 1000 / 3600)
      return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    }
  },
  methods: {
    hashCode: function () {
      return encodeURIComponent(this.$route.params.hashCode)
    },
    getInitOrder: function () {
      this.$store.dispatch('getOrder', {
        hash: this.hashCode(),
        success: this.successGetOrder,
        fail: this.failGetOrder
      })
      return true
    },
    successGetOrder: function (response) {
      const data = response.body.data
      if (data.status === 'C') {
        this.$router.replace(config.app.pages.thank_you + '/' + data.orderIdHash + '/success')
        return
      }
      if (data.errorMessage && data.errorMessage !== '') {
        this.errorMessage = data.errorMessage
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
    goToHome: function () {
      this.$router.replace(config.app.pages.home)
    },
    showNotif: function () {
      this.visibleNotif = true
    },
    onClose: function () {
      this.visibleNotif = false
    },
    onConfirm: function () {
      // set all data first
      this.$store.dispatch('setOrderToCheckout', {...this.order, orderIdHash: this.$route.params.hashCode})
      // close modal
      this.visibleNotif = false
      // goes to payment selection
      this.$router.replace(config.app.pages.payment_selection)
    },
    doRepay: function () {
      this.$router.push(config.app.pages.repay)
    },
    getPaymentInstruction: function (paymentMethod) {
      return this.$t('paymentInstruction.' + paymentMethod, {orderId: this.order.orderId, ...this.order.payment.details})
    }
  }
}
