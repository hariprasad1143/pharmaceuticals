import {mapGetters} from 'vuex'
import VueRecaptcha from 'vue-recaptcha'
import captchaKey from '@common/src/util/recaptcha'
import util from '@common/src/util'

export default {
  name: 'SaveDataConfirmation',
  data: () => {
    return {
      userData: {},
      captchaInvalid: false
    }
  },
  created: function () {
    this.$store.dispatch('getCaptchaReserveOrder')
  },
  computed: {
    ...mapGetters(['personalData', 'isCaptchaReserveOrder', 'shippingAddress', 'isMobile']),
    captchaKey: function () {
      return captchaKey.getCaptchaByEnv()
    }
  },
  methods: {
    onVerify: function (response) {
      this.$store.dispatch('savePersonalDataCaptcha', response)
      this.captchaInvalid = false
    },
    onExpired: function () {
      console.log('Expired')
    },
    onConfirm: function () {
      this.captchaInvalid = this.isCaptchaInvalid()
      if (!this.captchaInvalid) {
        !this.isMobile && util.scrollToTop()
        this.$emit('onConfirm')
      }
    },
    isCaptchaInvalid: function () {
      return this.isCaptchaReserveOrder && !this.personalData.captcha
    },
    onClose: function () {
      this.captchaInvalid = false
      this.$emit('onClose')
    }
  },
  components: {
    VueRecaptcha
  }
}
