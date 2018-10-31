import {mapGetters} from 'vuex'
import config from '@common/src/config'
import PaymentPunchout from '@/components/PaymentPunchout'
import payHandler from '@common/src/util/pay-handler'

export default {
  components: {
    PaymentPunchout
  },
  created () {
    this.doRepay()
  },
  computed: {
    ...mapGetters(['order', 'orderCustomerDetail'])
  },
  methods: {
    paymentPunchout: function () {
      return this.$refs.paymentPunchout
    },
    doRepay: function () {
      let self = this
      self.$store.dispatch('repay', {
        data: {
          orderId: self.order.orderId,
          identityNumber: self.orderCustomerDetail.identityNumber
        },
        success: this.paySuccess,
        fail: this.payError
      })
    },
    paySuccess: function (response) {
      const data = response.body.data
      if (data.redirectUrl) {
        payHandler.execute(this, data.redirectUrl, data.paymentData.httpMethod,
          data.paymentData.queryData, null, (response) => {
            this.$router.push(config.app.pages.thank_you + '/' + data.orderIdHash + '/failed')
          })
      } else {
        this.$store.dispatch('setPaymentData', data.paymentData)
        this.$router.push(config.app.pages.thank_you + '/' + data.orderIdHash + '/success')
      }
    },
    payError: function (response) {
      if (response.status === 409) {
        this.$router.push(config.app.pages.thank_you + '/' + this.order.orderIdHash + '/success')
      } else {
        this.$router.push(config.app.pages.thank_you + '/' + this.order.orderIdHash + '/failed')
      }
    }
  }
}
