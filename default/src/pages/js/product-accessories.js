import ProductListSelected from '@/components/ProductListSelected'
import ProductAccessories from '@/components/ProductAccessories'
import sessionUtil from '@common/src/util/session'

export default {
  name: 'Accessories',
  created () {
    sessionUtil.validateSiteOrigin()
    this.setToTop()
  },
  data () {
    return {
      showTopContent: true
    }
  },
  methods: {
    setToTop: function () {
      window.scrollTo(0, 0)
    }
  },
  components: {
    ProductListSelected,
    ProductAccessories
  }
}
