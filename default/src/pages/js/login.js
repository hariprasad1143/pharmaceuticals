import formValidator from '@common/src/util/form-validator.js'
import {mapGetters, mapActions} from 'vuex'
import GoogleLogin from '@common/src/mixins/google-login-mixins'
// import {FBinitialize, loginFacebook} from 'blibli-login-helper'
import Cookie from 'js-cookie'
import config from '@common/src/config'

export default {
  mixins: [
    GoogleLogin
  ],
  data () {
    return {
      loginData: {
        password: '',
        username: '',
        remember: true
      },
      errorData: {
        username: {},
        password: {},
        general: {}
      },
      isVisiblePassword: false
    }
  },
  created: function () {
    // FBinitialize(this.staticConfig.facebookAppId)
    this.checkUser()
  },
  computed: {
    ...mapGetters(['loginModalVisible', 'user', 'cart', 'staticConfig', 'isOrderHistoryActive']),
    passwordType () {
      const type = this.isVisiblePassword ? 'text' : 'password'
      return type
    }
  },
  methods: {
    ...mapActions(['loginGoogle', 'loginFb']),
    checkUser: function () {
      if (this.user.username) {
        if (this.isOrderHistoryActive) {
          this.$router.push(config.app.pages.order_history)
        } else {
          this.$router.push('/')
        }
      }
    },
    checkEmail () {
      const validEmail = formValidator.isValidEmail(this.loginData.username)
      if (!validEmail) {
        this.updateErrorData('username', {error: true, text: this.$t('app.login.error.wrongEmailFormat')})
      } else {
        this.updateErrorData('username', {error: false, text: ''})
      }
    },
    checkPassword () {
      if (!this.loginData.password) {
        this.updateErrorData('password', {error: true, text: this.$t('app.login.error.passwordNotEmpty')})
      } else {
        this.updateErrorData('password', {error: false, text: ''})
      }
    },
    updateErrorData (key, data) {
      this.errorData = {
        ...this.errorData,
        [key]: data
      }
    },
    hasError () {
      this.checkEmail()
      this.checkPassword()
      return this.errorData.username.error || this.errorData.password.error
    },
    doLogin () {
      if (!this.hasError()) {
        this.$store.dispatch('login', {data: this.loginData, success: this.handleLoginSuccess, error: this.handleLoginError})
      }
    },
    doLoginFb () {
      // loginFacebook(this.submitFacebookFn)
    },
    submitFacebookFn: function (response, accessToken) {
      let loginFbData = {
        email: response.email,
        accessToken: accessToken
      }
      this.$store.dispatch('loginFb', {
        data: loginFbData,
        success: this.handleLoginSuccess,
        fail: this.handleLoginError
      })
    },
    handleLoginSuccess () {
      if (this.$route.query.redirect) {
        Cookie.set('itemSku', this.cart.items[0].itemSku)
        this.$router.push('/flash-sale/waiting')
      } else {
        if (this.isOrderHistoryActive) {
          this.$router.push(config.app.pages.order_history)
        } else {
          this.$router.push('/')
        }
      }
    },
    handleLoginError (response) {
      if (response.body.code === 401) {
        this.updateErrorData('general', {error: true, text: this.$t('app.login.error.wrongPasswordOrEmail')})
      } else if (response.status === 429) {
        this.updateErrorData('general', {error: true, text: this.$t('app.login.error.rateLimiterError')})
      } else {
        this.updateErrorData('general', {error: true, text: this.$t('app.login.error.systemError')})
      }
    },
    togglePassword () {
      this.isVisiblePassword = !this.isVisiblePassword
    }
  }
}
