import config from '@common/src/config'
import {mapGetters} from 'vuex'
import util from '@common/src/util'
import sessionUtil from '@common/src/util/session'
import Time from '@common/src/mixins/time-mixins'

export default {
  mixins: [Time],
  data () {
    return {
      countdownInterval: config.app.countdownInterval,
      interval: null
    }
  },
  created () {
    this.init()
  },
  destroyed () {
    clearInterval(this.interval)
  },
  computed: {
    ...mapGetters(['remainingTime']),
    currentLocation: function () {
      return this.$route.path
    },
    referrer: function () {
      return this.$route.query.ref || config.app.pages.home
    },
    background: function () {
      return {
        tablet: require('@/assets/images/countdown-bg-mobile.jpg'),
        desktop: require('@/assets/images/countdown-bg3.jpg')
      }
    }
  },
  watch: {
    remainingTime: function (v) {
      if (v <= 0) {
        this.redirectToHome()
      }
    }
  },
  methods: {
    init: function () {
      sessionUtil.addSamsungGlpCookie()
      this.$store.dispatch('getRemainingTime', {
        success: this.successGetRemainingTime,
        fail: this.reloadPage
      })
    },
    successGetRemainingTime: function () {
      if (this.remainingTime > 0) {
        this.startCountdown()
      } else {
        this.redirectToHome()
      }
    },
    startCountdown: function () {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.$store.dispatch('setRemainingTime', this.remainingTime - this.countdownInterval)
      }, this.countdownInterval)
    },
    redirectToHome: function () {
      util.goUrl(this.referrer)
    },
    reloadPage: function () {
      util.goUrl(this.currentLocation)
    }
  }
}
