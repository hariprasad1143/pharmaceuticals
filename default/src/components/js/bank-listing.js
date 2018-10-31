const TncModal = () => import('@/components/TncModal')
import { mapActions, mapGetters } from 'vuex'
import Cookies from 'js-cookie'
import config from '@common/src/config'

export default {
  data () {
    return {
      visibleTnc: false
    }
  },
  computed: {
    ...mapGetters(['promotions']),

    promotionsSorted () {
      return this.promotions
        .slice(0)
        .sort((a, b) => a.sequence === b.sequence ? 0 : a.sequence < b.sequence ? -1 : 1)
    }
  },
  components: {
    TncModal
  },
  mounted () {
    const cookies = Cookies.get(config.app.cookies.samsungAccessTokenType.name) || config.app.accessType.regular
    this.getPromotions({id: cookies})
  },
  methods: {
    ...mapActions(['getPromotions']),

    openTncModal () {
      this.visibleTnc = true
    },

    onCloseTncModal () {
      this.visibleTnc = false
    }
  }
}
