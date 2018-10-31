import Simplert from 'vue2-simplert'
import config from '@common/src/config'

export default {
  name: 'backdoor',
  components: {
    Simplert
  },
  data () {
    return {
      backdoorKey: ''
    }
  },
  methods: {
    validateBackdoorKey: function () {
      this.$store.dispatch('showLoading')
      let self = this
      this.$store.dispatch('checkBackdoorKey', {
        data: self.backdoorKey,
        success: self.successFunc,
        fail: self.failFunc
      })
    },
    successFunc: function (response) {
      if (response.body.code === 200) {
        this.$store.dispatch('hideLoading')
        this.$router.replace(config.app.pages.backdoor_dashboard)
      }
    },
    failFunc: function (response) {
      this.$store.dispatch('hideLoading')
      this.$refs.simplert.openSimplert({
        type: 'error',
        title: this.$t('ERRORS.COMMON.Alert.ErrorTitle'),
        message: this.$t('ERRORS.COMMON.InvalidBackdoorCode'),
        customCloseBtnText: this.$t('ERRORS.COMMON.Alert.CloseText'),
        disableOverlayClick: true
      })
    }
  }
}
