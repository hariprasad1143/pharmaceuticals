import { mapGetters, mapActions } from 'vuex'
import config from '@common/src/config'
import ProductList from '@/components/flash-deals/ProductList.vue'
import CheckoutFailed from '@/components/flash-deals/CheckoutFailed.vue'
import Time from '@common/src/mixins/time-mixins'
import Cookie from 'js-cookie'

export default {
  name: 'home-page-lite',
  mixins: [Time],
  data () {
    return {
      countdownInterval: config.app.countdownInterval,
      interval: null,
      endInterval: null,
      remainingTime: 1,
      visibleCncInfo: false
    }
  },
  created () {
    if (!this.staticConfig.flashSaleStartTime) {
      this.$store.dispatch('getStaticConfig', {
        success: this.successGetConfig
      })
    } else {
      this.successGetConfig()
    }
    this.watchSaleEndTime()
    this.getProducts({
      accessType: config.app.accessType.xiaomi
    })
  },
  destroyed () {
    clearInterval(this.interval)
  },
  computed: {
    ...mapGetters(['products', 'user', 'staticConfig', 'isCheckoutFailed', 'isConditionalCart', 'isOutOfStock', 'isTokenFailed', 'isMobile', 'isFlashSaleExpired']),
    flashsaleStarted: function () {
      return this.remainingTime < 1
    },
    flashsaleEnded: function () {
      return this.staticConfig.flashSaleEndTime - Date.now() < 1
    },
    isShowFailPopup: function () {
      return this.isCheckoutFailed || this.isConditionalCart || this.isOutOfStock || this.isTokenFailed || this.isFlashSaleExpired
    }
  },
  components: {
    ProductList,
    CheckoutFailed
  },
  methods: {
    ...mapActions(['getProductStocks', 'getProducts', 'setCartItem', 'isMobile']),
    watchSaleEndTime: function () {
      this.endInterval = setInterval(() => {
        if (this.staticConfig.flashSaleEndTime - Date.now() < 1 && !this.flashsaleEnded &&
            this.$route.path === config.app.pages.waiting && this.$route.path === config.app.pages.product_listing) {
          window.location.reload()
        }
      }, this.countdownInterval)
    },
    toggleVisibleCncInfo: function () {
      this.visibleCncInfo = !this.visibleCncInfo
    },
    buyNow: function (item) {
      this.$store.dispatch('setCartItem', item)
      if (this.user.username) {
        this.addToCart(item)
      } else {
        this.redirectToLogin()
      }
    },
    redirectToLogin () {
      this.$router.push(config.app.pages.login + '?redirect=checkout')
    },
    addToCart (item) {
      Cookie.set('itemSku', item.itemSku)
      this.$router.push('/flash-sale/waiting')
    },
    getProductStocks: function () {
      if (Object.values(this.products).length < 1) return
      let skus = Object.values(this.products).reduce((a, b) => a.concat(b)).map(product => product.sku)
      this.$store.dispatch('getProductStocks', {
        data: skus
      })
    },
    startCountdown: function () {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.applyCountdownChanges()
      }, this.countdownInterval)
    },
    applyCountdownChanges: function () {
      this.remainingTime = this.staticConfig.flashSaleStartTime - Date.now()
      if (this.remainingTime < 1) {
        clearInterval(this.interval)
      }
    },
    successGetConfig: function () {
      this.remainingTime = this.staticConfig.flashSaleStartTime - Date.now()
      this.startCountdown()
    }
  }
}
