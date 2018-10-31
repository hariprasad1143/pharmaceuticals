import {mapGetters} from 'vuex'
import Time from '@common/src/mixins/time-mixins'
import config from '@common/src/config'

export default {
  name: 'CheckoutTimer',
  mixins: [Time],
  data () {
    return {
      countdownInterval: config.app.countdownInterval,
      interval: null,
      remainingTime: 0,
      currentTime: 0
    }
  },
  created () {
    this.startCountdown()
    this.assignRemainingTime()
    this.currentTime = Date.now()
  },
  destroyed () {
    clearInterval(this.interval)
  },
  computed: {
    ...mapGetters(['checkoutTime', 'staticConfig', 'order', 'isLoading'])
  },
  methods: {
    assignRemainingTime: function () {
      if (this.checkoutTime && !this.order.orderId) {
        this.remainingTime = this.checkoutTime + (parseInt(this.staticConfig.checkoutExpiryTime) || config.app.checkoutTimeLimit) - Date.now()
      } else {
        this.remainingTime = this.currentTime + (parseInt(this.staticConfig.checkoutExpiryTime) || config.app.checkoutTimeLimit) - Date.now()
      }
      this.remainingTime = this.remainingTime < 0 ? 0 : this.remainingTime
    },
    startCountdown: function () {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.applyCountdownChanges()
      }, this.countdownInterval)
    },
    applyCountdownChanges: function () {
      if (this.isLoading) return
      this.assignRemainingTime()
      if (this.remainingTime > 1000) {
        this.remainingTime -= this.countdownInterval
      } else {
        this.remainingTime = 0
        clearInterval(this.interval)
        this.$store.dispatch('setIsSessionEnded', true)
      }
    }
  }
}
