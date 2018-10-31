import config from '@common/src/config'

export default {
  name: 'unexpected-error',
  methods: {
    goToHome: function () {
      this.$router.replace(config.app.pages.home)
    }
  }
}
