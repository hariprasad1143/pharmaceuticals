import { mapGetters, mapActions } from 'vuex'
import Modal from '@/components/Modal.vue'
import config from '@common/src/config'
import Cookie from 'js-cookie'

export default {
  name: 'flash-deals-product-list',
  props: ['productType', 'flashsaleStarted'],
  components: {
    Modal
  },
  data () {
    return {
      visibleOosModal: false,
      isFlashSaleEnded: false
    }
  },
  created () {
    Cookie.remove('itemSku')
    this.flashSaleEnd()
  },
  computed: {
    ...mapGetters(['products', 'cart', 'staticConfig']),
    productListing () {
      let products = this.products || {}
      return products[this.productType]
    }
  },
  watch: {
    staticConfig: function () {
      this.flashSaleEnd()
    }
  },
  methods: {
    ...mapActions(['getProductStocks']),
    flashSaleEnd: function () {
      this.isFlashSaleEnded = this.staticConfig.flashSaleEndTime ? this.staticConfig.flashSaleEndTime - Date.now() < 30000 : config.app.flashsaleEndTime - Date.now() < 30000
    },
    buyNow: function (item) {
      if (Object.values(this.products).length < 1) return
      if (!this.isFlashSaleEnded) {
        this.$emit('buyNow', item)
      } else {
        this.toggleOosModal()
      }
    },
    toggleOosModal: function () {
      this.visibleOosModal = !this.visibleOosModal
    }
  }
}
