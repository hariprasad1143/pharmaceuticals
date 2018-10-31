import {mapGetters} from 'vuex'
import config from '@common/src/config'

export default {
  computed: {
    ...mapGetters([
      'cart'
    ]),
    accItem () {
      return this.cart.items[0] || {}
    }
  },
  created () {
    this.validateState()
  },
  methods: {
    validateState: function () {
      if (this.cart.items.length < 1) {
        this.$router.replace(config.app.pages.product_listing)
      }
    }
  }
}
