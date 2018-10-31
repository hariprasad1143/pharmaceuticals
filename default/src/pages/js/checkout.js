import PersonalData from '@/components/PersonalData'
import StoreSelection from '@/components/StoreSelection'
import PaymentMethodSelection from '@/components/PaymentMethodSelection'
import CartPreview from '@/components/CartPreview'
import PayNowButton from '@/components/PayNowButton'
import ModalSessionEnded from '@/components/ModalSessionEnded'
import config from '@common/src/config'
import CheckoutTimer from '@/components/flash-deals/CheckoutTimer'
import {mapGetters, mapActions} from 'vuex'
import Cookie from 'js-cookie'

export default {
  computed: {
    ...mapGetters(['cart', 'order', 'cartCount', 'isSelectedPickupStore', 'isCheckoutComplete', 'isMobile', 'isSessionEnded', ''])
  },
  created () {
    Cookie.remove('itemSku')
    Cookie.remove('orderId')
    this.setToTop()
    this.validateState()
    this.clearSelectedPayment()
    this.getProvinces()
    if (this.$route.query.redirect) {
      if (this.order.orderId) {
        Cookie.set('orderId', this.order.orderId)
        this.getCartForChangePayment()
      } else this.$router.replace(config.app.pages.home)
    }
  },
  components: {
    CartPreview,
    PersonalData,
    StoreSelection,
    PaymentMethodSelection,
    PayNowButton,
    CheckoutTimer,
    ModalSessionEnded
  },
  methods: {
    ...mapActions(['getProvinces']),
    getCartForChangePayment: function () {
      this.$store.dispatch('setOrderId', this.order.orderId)
      this.$store.dispatch('getCartPayment', {
        data:
        {
          orderId: this.order.orderId
        },
        reset: true,
        success: this.successCartForChangePayment,
        fail: this.failedCartForChangePayment
      })
    },
    successCartForChangePayment: function () {
      this.$router.replace(config.app.pages.payment_selection)
    },
    failedCartForChangePayment: function () {
      return false
    },
    savePersonalData: function (data) {
      this.$router.replace(config.app.pages.payment_selection)
    },
    validateState: function () {
      if (this.cartCount < 1 && !Cookie.get('orderId') && !this.$route.query.redirect) {
        this.$router.replace(config.app.pages.product_listing)
      }
    },
    editPickupStore: function () {
      this.$router.replace(config.app.pages.pickup_selection)
    },
    clearSelectedPayment: function () {
      this.$store.dispatch('resetPaymentSelection')
    },
    setToTop: function () {
      window.scrollTo(0, 0)
    }
  }
}
