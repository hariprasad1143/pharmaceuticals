import config from '@common/src/config'
import {mapGetters} from 'vuex'

export default {
  name: 'HeadSection',
  data () {
    return {
      disabledHomePaths: config.app.disabledHome.paths,
      username: '',
      isDropdownActive: false
    }
  },
  watch: {
    user: function () {
      this.hideUserDropdown()
    }
  },
  computed: {
    ...mapGetters(['user']),
    currentLocation: function () {
      return this.$route.path
    },
    logoPath: function () {
      if (this.disabledHomePaths.indexOf(this.currentLocation) > -1) {
        return '#'
      }
      return '/'
    },
    isLoginPage: function () {
      return (this.$route.path === config.app.pages.login)
    },
    isCheckoutPage: function () {
      return (this.$route.path === config.app.pages.checkout)
    },
    isWaitingPage: function () {
      return (this.$route.path === config.app.pages.waiting)
    },
    isPaymentPage: function () {
      return (this.$route.path === config.app.pages.payment_selection)
    },
    visibleBackToBlibli: function () {
      return !this.isLoginPage && !this.isCheckoutPage & !this.isWaitingPage && !this.isPaymentPage
    }
  },
  methods: {
    showUserDropdown: function () {
      this.isDropdownActive = true
    },
    hideUserDropdown: function () {
      this.isDropdownActive = false
    },
    logoutUser: function () {
      this.hideUserDropdown()
      this.$store.dispatch('logoutUser', {
        success: this.handleLogoutSuccess()
      })
    },
    handleLogoutSuccess: function () {
      this.$router.push('/')
    },
    redirectOrderHistory: function () {
      this.hideUserDropdown()
      this.$router.push(config.app.pages.order_history)
    }
  }
}
