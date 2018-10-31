import {mapGetters, mapActions} from 'vuex'
import config from '@common/src/config'

export default {
  name: 'SgiTncModal',
  created () {
    this.getCmsContent({id: config.app.cmsContent.ids.promoTnc})
  },
  computed: {
    ...mapGetters(['cmsContent']),
    tncContent: function () {
      return this.cmsContent[config.app.cmsContent.ids.promoTnc]
        ? this.cmsContent[config.app.cmsContent.ids.promoTnc].value : ''
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
