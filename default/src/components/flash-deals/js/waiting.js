import { mapGetters, mapActions } from 'vuex'
import Time from '@common/src/mixins/time-mixins'
import config from '@common/src/config'
import Cookie from 'js-cookie'

export default {
  name: 'waiting',
  mixins: [Time],
  data () {
    return {
      countdownInterval: config.app.countdownInterval,
      interval: null,
      remainingTime: config.app.queueRefreshTime,
      itemSku: '',
      waitingFlag: false
    }
  },
  created () {
    this.scrollToTop()
    this.itemSku = Cookie.get('itemSku')
    this.checkToken()
    this.startCountdown()
  },
  destroyed () {
    clearInterval(this.interval)
  },
  computed: {
    ...mapGetters(['staticConfig', 'cart', 'token', 'isFlashSaleExpired']),
    disableCloseButton: function () {
      return this.remainingTime > 0
    }
  },
  methods: {
    ...mapActions(['setCheckoutTime', 'setIsFlashSaleExpired']),
    startCountdown: function () {
      if (this.staticConfig.queuerefreshTime) {
        this.remainingTime = this.staticConfig.queuerefreshTime
      }
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.applyCountdownChanges()
      }, this.countdownInterval)
    },
    applyCountdownChanges: function () {
      this.remainingTime -= this.countdownInterval
      if (this.remainingTime < 1) {
        if (!this.waitingFlag) {
          this.waitingFlag = true
        }
        if (this.staticConfig.flashSaleEndTime - Date.now() < 30000) {
          this.$router.push('/')
        }
      }
    },
    refreshTimer () {
      this.remainingTime = this.staticConfig.queuerefreshTime
      this.checkToken()
      this.startCountdown()
      this.waitingFlag = false
    },
    checkToken () {
      this.$store.dispatch('getToken',
        {
          data: this.itemSku,
          success: this.handleSuccessGetToken
        }
      )
    },
    handleSuccessGetToken (res) {
      if (res.body.data) {
        this.setCheckoutTime(Date.now())
        this.$store.dispatch('addCart', {
          data:
          {
            'sku': this.itemSku,
            'quantity': 1
          },
          token: this.token,
          reset: true,
          success: this.redirectToCheckout,
          fail: this.failedCheckout
        })
      }
    },
    redirectToCheckout: function (res) {
      if (res.body.data && window.location.pathname === config.app.pages.waiting) {
        this.$router.push(config.app.pages.checkout)
      } else this.failedCheckout(res)
    },
    failedCheckout: function (e) {
      if (e.body.errors.CONDITIONAL_CART_ERROR) {
        this.$store.dispatch('setIsConditionalCart', true)
      } else if (e.body.errors.OUT_OF_STOCK) {
        this.$store.dispatch('setIsOutOfStock', true)
      } else if (e.body.errors.EXPIRED_FLASH_SALE) {
        this.$store.dispatch('setIsFlashSaleExpired', true)
      } else {
        this.$store.dispatch('setIsCheckoutFailed', true)
      }
      this.$router.push(config.app.pages.home)
    },
    scrollToTop: function () {
      window.scrollTo(0, 0)
    }
  }
}
