import config from '@common/src/config'

export default {
  name: 'notfound',
  methods: {
    goToHome: function () {
      this.$router.replace(config.app.pages.home)
    }
  }
}
