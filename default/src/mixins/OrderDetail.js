import {mapGetters, mapActions} from 'vuex'
import config from '@common/src/config'

export const OrderDetail = {
  created () {
    this.getCmsContent({id: config.app.cmsContent.ids.receiptTnc})
  },
  computed: {
    ...mapGetters(['order', 'orderCustomerDetail', 'orderPickupStore', 'orderShippingAddress', 'cmsContent']),
    installment: function () {
      return this.$options.filters.currencyFormat(Math.round(this.order.paidAmount / this.order.payment.installment))
    },
    cashbackValue: function () {
      return this.$options.filters.currencyFormat(config.app.cashback)
    },
    visibleCashbackText: function () {
      var result = false
      let cashback = this.order.adjustments.filter(adjustment => !adjustment.promoCode)
      cashback.forEach(function (item) {
        if (Math.abs(item.amount) === 1) {
          result = true
        }
      })
      return result
    },
    isShownStar: function () {
      return this.order.adjustments.map(adjustment => {
        return Math.abs(adjustment.amount) === 1
      })
    },
    receiptTncContent: function () {
      return this.cmsContent[config.app.cmsContent.ids.receiptTnc]
        ? this.cmsContent[config.app.cmsContent.ids.receiptTnc].value : ''
    }
  },
  methods: {
    ...mapActions(['getCmsContent'])
  }
}
