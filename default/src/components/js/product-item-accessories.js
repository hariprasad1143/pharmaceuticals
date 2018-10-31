import {mapGetters, mapActions} from 'vuex'
import config from '@common/src/config'

export default {
  props: {
    item: {
      type: Object,
      default: function () { return {} }
    }
  },
  created () {
    this.productGroup && this.getCmsContent({id: config.app.cmsContent.ids.gimmickRemark(this.productGroup)})
  },
  computed: {
    ...mapGetters([
      'productStocks',
      'isMobile',
      'cart',
      'cmsContent'
    ]),
    isAvailable: function () {
      return this.productStocks[this.item.sku]
    },
    productGroup: function () {
      if (!this.cart.items || !this.cart.items[0]) return ''
      return this.cart.items[0].group.toLowerCase()
    },
    remarkContent: function () {
      return this.cmsContent[config.app.cmsContent.ids.gimmickRemark(this.productGroup)]
        ? this.cmsContent[config.app.cmsContent.ids.gimmickRemark(this.productGroup)].value : ''
    }
  },
  methods: {
    ...mapActions(['getCmsContent']),
    selectNow: function () {
      this.$emit('selectNow', this.item)
    },
    notifyMe: function () {
      this.$emit('notifyMe', this.item)
    }
  }
}
