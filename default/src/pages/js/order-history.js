import { mapGetters, mapActions } from 'vuex'
import util from '@common/src/util'
import config from '@common/src/config'

export default {
  created () {
    this.checkUser()
    this.getOrderHistory()
  },
  computed: {
    ...mapGetters(['orderHistories', 'order', 'staticConfig', 'isMobile', 'user', 'isOrderHistoryActive']),
    allOrdersConfirmed () {
      if (!this.orderHistories.length) return
      let index = 0
      this.orderHistories.map(order => {
        if (order.orderStatus === 'C') index++
        return
      })
      return index === this.orderHistories.length
    },
    visibleChangePayment () {
      return this.staticConfig.paymentStatus
    }
  },
  methods: {
    ...mapActions(['getOrderHistory', 'getOrder']),
    orderExpiryDuration (orderTime) {
      let today = new Date()
      let duration = orderTime - today.getTime()
      let minutes = Math.floor(duration / 1000 / 60 % 60)
      let hours = Math.floor(duration / 1000 / 3600)
      return hours + " jam " + minutes + " menit"
    },
    checkUser: function () {
      if (!this.user.username) {
        this.$store.dispatch('setIsOrderHistoryActive', true)
        this.$router.push(config.app.pages.login)
      } else {
        this.$store.dispatch('setIsOrderHistoryActive', false)
      }
    },
    address (streetAddress1, streetAddress2) {
      if (streetAddress2) return streetAddress1 + ', ' + streetAddress2
      return streetAddress1
    },
    doRepay (orderId) {
      let self = this
      self.$store.dispatch('repay', {
        data: {
          orderId: orderId
        },
        success: this.repaySuccess,
        fail: this.$router.replace(config.app.pages.thank_you + '/' + orderId + '/failed')
      })
    },
    repaySuccess (response) {
      const data = response.body.data
      if (data.redirectUrl) {
        util.goUrl(data.redirectUrl)
      }
    },
    changePayment (orderId) {
      this.getOrder({
        hash: orderId,
        success: this.redirectToPaymentSelection
      })
    },
    redirectToPaymentSelection () {
      switch (this.order.orderStatus) {
        case 'C':
          this.$router.push(config.app.pages.thank_you + '/' + this.order.orderId + '/success')
          break
        case 'X':
          this.$router.replace(config.app.pages.thank_you + '/' + this.order.orderId + '/failed')
          break
        case 'M':
          this.$router.replace(config.app.pages.checkout + '?redirect=thankyou')
          break
      }
    },
    isShowVa (payment) {
      return payment.virtualAccountNumber &&
        (payment.paymentMethod !== 'Indomaret' && payment.paymentMethod !== 'AlfaGroup' &&
          payment.paymentMethod !== 'KlikBCA' && payment.paymentMethod !== 'MandiriBillPayment'
        )
    },
    isShowPaymentCode (payment) {
      return (payment.extendedData.BILL_KEY || payment.extendedData.blibliOrderId) &&
        (payment.paymentMethod === 'Indomaret' || payment.paymentMethod === 'AlfaGroup' ||
        payment.paymentMethod === 'MandiriBillPayment')
    },
    paymentLabel (payment) {
      switch (payment.paymentMethod) {
        case 'MandiriBillPayment': return 'Midtrans'
        case 'MandiriVaH2h': return 'Blibli'
        case 'AtmBersama': return 'ATM Bersama / ATMBPLUS'
        case 'VirtualAccountMandiri': return 'Blibli.com'
        default: return payment.description
      }
    },
    isShowAccountNumber (payment) {
      return payment.paymentMethod === 'AtmBersama'
    },
    paymentInstructionUrl (payment, orderId) {
      let url = 'https:' + '//www.blibli.com/payment-instruction?' + 'lang=id&paymentType=' + payment.paymentMethod + '&'
      switch (payment.paymentMethod) {
        case 'VirtualAccountBcaOnline': return url + 'pcode=' + orderId + '&mcode=' + payment.extendedData.VIRTUAL_ACCOUNT_NUMBER
        case 'BcaVaH2h': return url + 'pcode=' + orderId + '&mcode=' + payment.extendedData.VIRTUAL_ACCOUNT_NUMBER
        case 'KlikBCA': return url + 'pcode=' + orderId + '&mcode=' + payment.extendedData.KLIK_BCA_USER_ID
        case 'Indomaret': return url + 'pcode=' + payment.extendedData.blibliOrderId
        case 'AlfaGroup': return url + 'pcode=' + payment.extendedData.blibliOrderId
        case 'AtmBersama': return url + 'pcode=' + payment.virtualAccountNumber + '&mcode=987'
        case 'MandiriBillPayment': return url + 'pcode=' + payment.extendedData.BILL_KEY + '&mcode=' + payment.extendedData.BILLER_CODE
        case 'MandiriVaH2h': return url + 'pcode=' + payment.extendedData.BILL_KEY + '&mcode=' + payment.extendedData.BILLER_CODE
        case 'BRIVA': return url + 'pcode=' + payment.extendedData.VIRTUAL_ACCOUNT_NUMBER
        case 'BNIVA': return url + 'pcode=' + payment.extendedData.VIRTUAL_ACCOUNT_NUMBER
        case 'BNIVANONATM': return url + 'pcode=' + payment.extendedData.VIRTUAL_ACCOUNT_NUMBER
        case 'DanamonVA': return url + 'pcode=' + payment.extendedData.VIRTUAL_ACCOUNT_NUMBER
        default: return 'https:' + '//www.blibli.com/panduan-belanja' + '#hash-side-pembayaran'
      }
    },
    isOfflinePayment (payment) {
      let offlinePayments = ['KlikBCA', 'ATMBCA', 'VirtualAccountBcaOnline', 'MandiriBillPayment', 'AtmBersama',
        'AlfaGroup', 'Indomaret', 'VirtualAccountMandiri', 'BNIVA', 'BRIVA', 'DanamonVA', 'PosPay']
      return offlinePayments.indexOf(payment.paymentMethod) > -1
    }
  }
}
