import config from '@common/src/config'
import Cookies from 'js-cookie'

const banners = {}
banners[config.app.accessType.vip] = {
  tablet: require('@/assets/images/banner-mobile-v.png'),
  desktop: require('@/assets/images/banner-desktop-v.png')
}
banners[config.app.accessType.spc] = {
  tablet: require('@/assets/images/banner-mobile-s.png'),
  desktop: require('@/assets/images/banner-desktop-s.png')
}
banners[config.app.accessType.spc_exhibition] = {
  tablet: require('@/assets/images/banner-mobile-e.png'),
  desktop: require('@/assets/images/banner-desktop-e.png')
}
banners['default'] = {
  tablet: require('@/assets/images/banner-mobile.png'),
  desktop: require('@/assets/images/banner-desktop.png')
}

export default {
  name: 'main-banner',
  computed: {
    banners: function () {
      let accessType = Cookies.get(config.app.cookies.samsungAccessTokenType.name) || 'default'
      return banners[accessType]
    }
  }
}
