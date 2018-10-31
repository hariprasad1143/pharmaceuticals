import util from '@common/src/util'
import config from '@common/src/config'
import Cookie from 'js-cookie'

export default {
  name: 'ModalSessionEnded',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onConfirm: function () {
      if (!Cookie.get('orderId')) {
        util.goUrl('/')
      } else {
        let orderId = Cookie.get('orderId')
        this.$router.push(config.app.pages.thank_you + '/' + orderId)
      }
    }
  }
}
