import {mapGetters} from 'vuex'
import config from '@common/src/config'

const TncModal = () => import('@/components/TncModal')

export default {
  components: {
    TncModal
  },
  data () {
    return {
      visibleTnc: false
    }
  },
  computed: {
    ...mapGetters(['cart', 'isCheckoutComplete', 'isMobile', 'cartPrice', 'cartCashback', 'cartSgiPromo']),
    discount: function () {
      return Math.abs(this.cartCashback) + Math.abs(this.cartSgiPromo)
    },
    paidAmount: function () {
      return this.cartPrice - this.discount
    }
  },
  methods: {
    isCheckoutCompleteAndInCheckoutPaymentSelection: function () {
      return this.isCheckoutComplete && this.$route.path === config.app.pages.payment_selection
    },
    pay: function () {
      this.$emit('pay')
    },
    priceItemCartPreview: function (price) {
      return price === 0 ? this.$t('app.order.preOrderGiftText') : this.$options.filters.currencyFormat(price)
    },
    openTncModal: function () {
      this.visibleTnc = true
    },
    onCloseTncModal: function () {
      this.visibleTnc = false
    }
  }
}
