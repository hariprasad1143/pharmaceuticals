import HeadSection from 'components/HeadSection.vue'
import FootSection from 'components/FootSection.vue'
import LiveChat from 'components/LiveChat.vue'
import LoadingScreen from '@/components/LoadingScreen'
import Waiting from '@/components/flash-deals/Waiting'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      showOverlay: false,
      windowWidth: document.documentElement.clientWidth
    }
  },
  components: {HeadSection, FootSection, LiveChat, LoadingScreen, Waiting},
  created: function () {
    // Handle resize
    this.$store.dispatch('getUsers', {error: () => ({})})
    this.$store.dispatch('getStaticConfig')
    this.handleResize()
  },
  computed: {
    ...mapGetters(['isLoading']),
    isDevelopmentMode: function () {
      return process.env.NODE_ENV !== 'production'
    }
  },
  mounted: function () {
    this.attachResizeHandler()
  },
  destroyed: function () {
    this.detachResizeHandler()
  },
  methods: {
    attachResizeHandler: function () {
      window.addEventListener('resize', this.handleResize)
    },
    detachResizeHandler: function () {
      window.removeEventListener('resize', this.handleResize)
    },
    handleResize: function (dummyWidth) {
      this.windowWidth = typeof dummyWidth === 'number' ? dummyWidth : document.documentElement.clientWidth
      if (this.windowWidth < 769) {
        this.$store.dispatch('setMobileDeviceStatus', true)
      } else {
        this.$store.dispatch('setMobileDeviceStatus', false)
      }
    }
  }
}
