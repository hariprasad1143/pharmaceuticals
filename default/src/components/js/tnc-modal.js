import {mapGetters, mapActions} from 'vuex'
import config from '@common/src/config'

export default {
  name: 'TncModal',
  created () {
    this.getCmsContent({id: config.app.cmsContent.ids.mainTnc})
  },
  computed: {
    ...mapGetters(['cmsContent']),
    tncContent: function () {
      return this.cmsContent[config.app.cmsContent.ids.mainTnc]
        ? this.cmsContent[config.app.cmsContent.ids.mainTnc].value : ''
    }
  },
  methods: {
    ...mapActions(['getCmsContent']),
    onWrapClose: function (e) {
      if (e.target.classList.contains('wrap')) {
        this.$emit('onClose')
      }
    },
    close: function () {
      this.$emit('onClose')
    }
  }
}
