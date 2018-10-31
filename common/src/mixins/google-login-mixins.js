import { mapGetters } from 'vuex'
import googleLogin from '@common/src/util/google-login'

export default {
  mounted () {
    this.initGoogleLogin()
  },
  computed: {
    ...mapGetters(['staticConfig']),
    googleLoginKey: function () {
      return this.staticConfig.googleLoginKey
    }
  },
  methods: {
    attachAction () {
      googleLogin.attachBtnAction('login__button--google', this.onSuccessGoogleLogin, () => { })
    },
    initGoogleLogin () {
      googleLogin.initGoogleLogin(this.googleLoginKey, this.attachAction)
    },
    onSuccessGoogleLogin (googleUser) {
      var profile = googleUser.getBasicProfile()
      var accessToken = googleUser.getAuthResponse().id_token
      var email = profile.getEmail()

      let loginGoogleData = {
        email: email,
        accessToken: accessToken
      }

      // this.showLoading()
      this.$store.dispatch('loginGoogle', {
        data: loginGoogleData,
        success: this.handleLoginSuccess,
        fail: this.handleLoginError
      })
    }
  }
}
