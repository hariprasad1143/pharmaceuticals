import {mapGetters, mapActions} from 'vuex'
import config from '@common/src/config'
import NotifyMeModal from '@/components/NotifyMeModal'
import ProductItem from '@/components/ProductItem'
import Cookies from 'js-cookie'
import Simplert from 'vue2-simplert'
import errorHandler from '@common/src/util/error-handler'

export const ProductListing = {
  data () {
    return {
      visibleNotifyMe: false,
      selectedSku: ''
    }
  },
  created () {
    this.getProducts()
  },
  computed: {
    ...mapGetters([
      'productStocks',
      'productGroups',
      'products'
    ]),
    accessType: function () {
      return Cookies.get(config.app.cookies.samsungAccessTokenType.name) || config.app.accessType.regular
    },
    sortedProductGroups: function () {
      let groups = this.productGroups.slice(0)
      return groups.sort((a, b) => a.sequence === b.sequence ? 0 : a.sequence < b.sequence ? -1 : 1)
    }
  },
  methods: {
    ...mapActions(['showLoading', 'hideLoading']),
    buyNow: function (item) {
      this.$store.dispatch('addCart', {data: item})
      this.$router.push(config.app.pages.checkout)
    },
    notifyMe: function (item) {
      this.selectedSku = item.sku
      this.visibleNotifyMe = true
    },
    onNotifyMeClose: function () {
      this.visibleNotifyMe = false
    },
    checkAvailableStock: function (item) {
      let hasStock = false
      for (const i in item) {
        hasStock = this.productStocks[item[i].sku]
        if (hasStock) break
      }
      return hasStock
    },
    getProductStocks: function () {
      let skus = []
      for (const i in this.productGroups) {
        let group = this.productGroups[i].code
        for (const j in this.products[group]) {
          skus.push(this.products[group][j].itemSku)
        }
      }
      this.$store.dispatch('getProductStocks', {
        data: skus,
        success: this.hideLoading
      })
    },
    getProducts: function () {
      this.showLoading()
      this.$store.dispatch('getProducts', {
        success: this.getProductStocks,
        fail: this.failGetProducts
      })
    },
    failGetProducts: function (response) {
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
    ProductItem,
    Simplert
  }
}
