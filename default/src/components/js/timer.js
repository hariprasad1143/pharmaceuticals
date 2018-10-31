import Cookie from 'js-cookie'

export default {
  name: 'Timer',
  props: {
    timeoutInMs: {
      type: Number,
      required: true
    },
    intervalCallBack: {
      type: Number,
      default: 0
    },
    cookieType: {
      type: String,
      default: 'thank-you-success'
    }
  },
  data () {
    return {
      total: this.timeoutInMs,
      seconds: 0,
      minutes: 0,
      hours: 0,
      updateTimer: null
    }
  },
  created () {
    this.updateTimer = setInterval(this.getTimeRemaining, 1000)
  },
  watch: {
    timeoutInMs () {
      this.total = this.timeoutInMs
    }
  },
  methods: {
    getTimeRemaining: function () {
      this.cookieType === 'thank-you-failed'
      ? Cookie.set('pendingThankyouPageTimeFailed', this.total) : Cookie.set('pendingThankyouPageTime', this.total)
      if (this.total < 1000) {
        this.total = 0
        this.$emit('onTimeout')
        clearInterval(this.updateTimer)
      } else {
        this.total -= 1000
      }
      this.seconds = Math.floor((this.total / 1000) % 60)
      this.minutes = Math.floor((this.total / 1000 / 60) % 60)
      this.hours = Math.floor((this.total / 1000) / 3600)
      if (this.intervalCallBack > 0 && this.total % this.intervalCallBack === 0) {
        this.$emit('callbackIntervalFunction')
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.updateTimer)
  }
}
