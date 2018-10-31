import config from '@common/src/config'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['isCheckoutComplete', 'isMobile'])
  },
  methods: {
    isCheckoutCompleteAndInCheckoutPaymentSelection: function () {
      return this.isCheckoutComplete && this.$route.path === config.app.pages.payment_selection
    },
    pay: function () {
      this.$emit('pay')
    }
  }
}
