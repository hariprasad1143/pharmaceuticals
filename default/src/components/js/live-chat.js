import config from '@common/src/config'
import {mapGetters} from 'vuex'

export default {
  name: 'LiveChat',
  computed: {
    ...mapGetters(['isMobile'])
  },
  data () {
    return {
      currentWindow: {}
    }
  },
  methods: {
    openLiveChat: function () {
      this.currentWindow = window.open(
        'https:' + config.app.livechat.url + '?planId=' + config.app.livechat.planId + '&siteid=' + config.app.livechat.siteId,
        config.app.livechat.name, config.app.livechat.windowConfig)
    },
    openLiveChatMobile: function () {
      this.currentWindow = window.open(
        'https:' + config.app.livechat.url + '?planId=' + config.app.livechat.planId + '&siteid=' + config.app.livechat.siteId, '_blank'
      )
      this.currentWindow.focus()
    }
  }
}
