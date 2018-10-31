import MainBanner from '@/components/MainBanner'
const ProductListing = () => import('@/components/ProductListing')
import BankListing from '@/components/BankListing'

export default {
  name: 'home-product-list',
  data () {
    return {
      showTopContent: true
    }
  },
  components: {
    MainBanner,
    ProductListing,
    BankListing
  }
}

