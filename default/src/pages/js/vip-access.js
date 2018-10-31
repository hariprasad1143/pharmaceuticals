import VueRecaptcha from 'vue-recaptcha'
import Simplert from 'vue2-simplert'
import captchaKey from '@common/src/util/recaptcha'
import config from '@common/src/config'
import errorHandler from '@common/src/util/error-handler'
import { mapGetters, mapActions } from 'vuex'
import Cookies from 'js-cookie'

export default {
  name: 'VipAccess',

  components: {
    VueRecaptcha,
    Simplert
  },

  data: () => {
    return {
      accessToken: '',
      captcha: ''
    }
  },

  computed: {
    ...mapGetters([
      'isCaptchaCheckOrder'
    ]),

    /**
     * Get captcha key
     * @return {String}
     */
    captchaKey () {
      return captchaKey.getCaptchaByEnv()
    }
  },

  methods: {
    ...mapActions([
      'validateToken'
    ]),

    /**
     * When captcha verified
     * @param {String} response
     */
    onCaptchaVerify (response) {
      this.captcha = response
    },

    /**
     * When captcha expired
     */
    onCaptchaExpired () {
      this.captcha = ''
    },

    /**
     * When user submit VIP token
     */
    submitToken () {
      this.validateToken({
        data: { accessToken: this.accessToken, captcha: this.captcha },
        success: this.handleSuccessTokenSubmit,
        fail: this.handleFailureTokenSubmit
      })
    },

    /**
     * Process success HTTP request
     * @param {Object} response
     */
    handleSuccessTokenSubmit (response) {
      // Set access token to cookie
      const data = response.body.data
      const cookies = config.app.cookies

      Cookies.set(
        cookies.samsungGlp.name,
        cookies.samsungGlp.value,
        cookies.samsungGlp.config
      )

      Cookies.set(
        cookies.samsungAccessToken.name,
        data.accessToken,
        cookies.samsungAccessToken.config
      )

      Cookies.set(
        cookies.samsungAccessTokenType.name,
        data.tokenType,
        cookies.samsungAccessTokenType.config
      )

      // Redirect to product listing page
      this.$router.replace(config.app.pages.home)
    },

    /**
     * Process failure HTTP request
     * @param {Object} response
     */
    handleFailureTokenSubmit (response) {
      // Handle errors
      const errorMessages = errorHandler.getMessagesFromResponse(this, response)
      let errorMessage = ''
      for (const i in errorMessages) {
        errorMessage = errorMessage + '<div>' + errorMessages[i] + '</div>'
      }

      // Display error in popup
      this.$refs.simplert.openSimplert({
        type: 'error',
        title: this.$t('ERRORS.COMMON.Alert.ErrorTitle'),
        message: errorMessage,
        customCloseBtnText: this.$t('ERRORS.COMMON.Alert.CloseText')
      })

      // Reset captcha
      this.captcha = ''
      this.$refs.recaptcha.reset()
    }
  }
}
