import {mapGetters} from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      default: function () { return {} }
    }
  },
  computed: {
    ...mapGetters([
      'productStocks'
    ]),
    isAvailable: function () {
      return this.productStocks[this.item.itemSku]
    }
  },
  methods: {
    buyNow: function () {
      this.$emit('buyNow', this.item)
    },
    notifyMe: function () {
      this.$emit('notifyMe', this.item)
    }
  }
}
