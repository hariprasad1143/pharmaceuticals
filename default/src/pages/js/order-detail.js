import {OrderDetail} from 'mixins/OrderDetail'
import printHandler from '@common/src/util/print-handler'
import config from '@common/src/config'
import PrintedReceipt from '@/components/PrintedReceipt'
import errorHandler from '@common/src/util/error-handler'
import Simplert from 'vue2-simplert'

export default {
  name: 'order-detail',
  mixins: [OrderDetail],
  components: {
    PrintedReceipt,
    Simplert
  },
  computed: {
    printArea: function () {
      // return dummy area if not available
      return this.$refs.printReceiptArea || {'$el': {innerHTML: ''}}
    }
  },
  created () {
    this.getInitOrder()
  },
  methods: {
    hashCode: function () {
      return encodeURIComponent(this.$route.params.hashCode)
    },
    printInvoice: function () {
      const content = this.printArea.$el.innerHTML
      printHandler.printContent(content, null, 'Receipt')
      return content
    },
    getInitOrder: function () {
      if (this.order && this.order.orderId) {
        this.checkOrderStatus()
        return false
      }
      this.$store.dispatch('getOrder', {hash: this.hashCode(), success: this.checkOrderStatus, fail: this.failGetOrder})
      return true
    },
    failGetOrder: function (response) {
      const self = this
      let errorList = ''
      let errMessage = errorHandler.getMessages(self, response.errors)
      for (let i in errMessage) {
        errorList = errorList + '<div>' + errMessage[i] + '</div>'
      }
      self.$refs.simplert.openSimplert({
        type: 'error',
        title: self.$t('app.thankYou.errorTitle'),
        message: errorList,
        customCloseBtnText: self.$t('app.thankYou.backToHome'),
        disableOverlayClick: true,
        onClose: self.goToHome
      })
      return errorList
    },
    checkOrderStatus: function () {
      if (this.order.orderStatus !== 'C') {
        this.$router.replace(config.app.pages.not_found)
      }
    },
    goToHome: function () {
      this.$router.replace(config.app.pages.home)
    }
  }
}
