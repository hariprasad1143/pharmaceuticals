import PersonalData from '@/components/PersonalData'
import StoreSelection from '@/components/StoreSelection'
import PaymentMethodSelection from '@/components/PaymentMethodSelection'
import CartPreview from '@/components/CartPreview'
import PayNowButton from '@/components/PayNowButton'
import config from '@common/src/config'
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    CartPreview,
    PersonalData,
    StoreSelection,
    PaymentMethodSelection,
    PayNowButton
  },
  created () {
    this.validateState()
    this.clearSelectedPayment()
    this.clearSelectedPickupStore()
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'isMobile'])
  },
  methods: {
    ...mapActions(['getStores']),
    selectStore: function () {
      this.$router.replace(config.app.pages.payment_selection)
    },
    editPersonalData: function () {
      this.$router.replace(config.app.pages.checkout)
    },
    validateState: function () {
      if (!this.isLoggedIn) {
        this.$router.replace(config.app.pages.product_listing)
      }
    },
    clearSelectedPickupStore: function () {
      this.$store.dispatch('setPickupStore', {})
    },
    clearSelectedPayment: function () {
      this.$store.dispatch('resetPaymentSelection')
    }
  }
}
