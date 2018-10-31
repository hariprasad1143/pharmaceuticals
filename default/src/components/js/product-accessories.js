import {mapGetters, mapActions} from 'vuex'
import config from '@common/src/config'
const NotifyMeModal = () => import('@/components/NotifyMeModal')
import ProductItemAccessories from '@/components/ProductItemAccessories'
import errorHandler from '@common/src/util/error-handler'
import Simplert from 'vue2-simplert'

export default {
  data () {
    return {
      visibleNotifyMe: false,
      selectedSku: ''
    }
  },
  created () {
    this.getGimmicks()
  },
  computed: {
    ...mapGetters([
      'cart',
      'productStocks',
      'gimmicks'
    ]),
    gimmicksByGroup: function () {
      if (!this.cart.items || !this.cart.items[0]) return []
      // get accessories by product type
      return this.gimmicks.filter(
        (i) => i.groups.indexOf(this.cart.items[0].group) > -1
      )
    }
  },
  methods: {
    ...mapActions(['showLoading', 'hideLoading']),
    selectNow: function (item) {
      this.$store.dispatch('addCart', {data: item, reset: false})
      this.$router.push(config.app.pages.checkout)
    },
    notifyMe: function (item) {
      this.selectedSku = item.itemSku
      this.visibleNotifyMe = true
    },
    onNotifyMeClose: function () {
      this.visibleNotifyMe = false
    },
    checkAvailableStock: function (item) {
      return this.productStocks[item.itemSku]
    },
    isVisibleAccessories: function (item) {
      return (this.productStocks[item.sku] || item.alwaysShown) && item.active
    },
    getProductStocks: function () {
      let skus = []
      for (const i in this.gimmicks) {
        skus.push(this.gimmicks[i].sku)
      }
      this.$store.dispatch('getProductStocks', {
        data: skus,
        success: this.hideLoading
      })
    },
    getGimmicks: function () {
      this.showLoading()
      this.$store.dispatch('getGimmicks', {
        success: this.getProductStocks,
        fail: this.failGetGimmicks
      })
    },
    failGetGimmicks: function (response) {
      this.hideLoading()
      const errorMessages = errorHandler.getMessagesFromResponse(this, response)
      let errorMessage = ''
      for (const i in errorMessages) {
        errorMessage = errorMessage + '<div>' + errorMessages[i] + '</div>'
      }
      this.$refs.simplert.openSimplert({
        type: 'error',
        title: this.$t('ERRORS.COMMON.Alert.ErrorTitle'),
        message: errorMessage,
        customCloseBtnText: this.$t('ERRORS.COMMON.Alert.CloseText')
      })
    }
  },
  components: {
    NotifyMeModal,
    ProductItemAccessories,
    Simplert
  }
}
