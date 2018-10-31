import {mapGetters, mapActions} from 'vuex'
import config from '@common/src/config'
import Cookies from 'js-cookie'
import adjustmentUtil from '@common/src/util/adjustment'

export const ThankYou = {
  created () {
    this.$store.dispatch('getUsers', {error: () => ({})})
  },
  data () {
    return {
      visibleNotif: false
    }
  },
  computed: {
    ...mapGetters(['order', 'orderCustomerDetail', 'orderShippingAddress']),
    dateExpireFormatted: function () {
      if (this.order.payment.orderExpirationDisplayCustomer) {
        return new Date(this.order.payment.orderExpirationDisplayCustomer).format('D MMMM YYYY')
      } else return ''
    },
    timeExpireFormatted: function () {
      if (this.order.payment.orderExpirationDisplayCustomer) {
        return new Date(this.order.payment.orderExpirationDisplayCustomer).format('hh:mm')
      } else return ''
    },
    orderStatus: function () {
      return this.order.orderStatus
    }
  },
  methods: {
    ...mapActions(['getOrder', 'setIsSessionEnded']),
    hashCode: function () {
      return encodeURIComponent(this.$route.params.hashCode)
    },
    goToHome: function () {
      this.$router.replace(config.app.pages.home)
    },
    redirectToPaymentSelection: function () {
      // this.visibleNotif = true
      switch (this.order.orderStatus) {
        case 'C':
          this.$router.push(config.app.pages.thank_you + '/' + this.hashCode() + '/success')
          break
        case 'X':
          this.$router.replace(config.app.pages.thank_you + '/' + this.hashCode() + '/failed')
          break
        case 'M':
          this.$router.replace(config.app.pages.checkout + '?redirect=thankyou')
          break
      }
    },
    getOrderDetail: function () {
      this.setIsSessionEnded(false)
      this.getOrder({
        hash: this.hashCode(),
        success: this.redirectToPaymentSelection
      })
    },
    onClose: function () {
      this.visibleNotif = false
    },
    onConfirm: function () {
      // set all data first
      this.$store.dispatch('setOrderToCheckout', {...this.order, orderIdHash: this.$route.params.hashCode})
      // set vip or spc cookies
      this.setAccessTypeCookie()
      // close modal
      this.visibleNotif = false
      // goes to payment selection
      this.$router.replace(config.app.pages.payment_selection)
    },
    removeVipCookies () {
      const cookie = config.app.cookies
      if (Cookies.get(cookie.samsungAccessTokenType.name) === config.app.accessType.vip) {
        Cookies.remove(cookie.samsungAccessToken.name)
        Cookies.remove(cookie.samsungAccessTokenType.name)
      }
    },
    setAccessTypeCookie () {
      Object.keys(config.app.tokenPrefixes).forEach(key => this.setCookies(key))
    },
    setCookies (type) {
      const cookies = config.app.cookies
      const accessTokenType = config.app.accessType[type]
      let token = adjustmentUtil.getPromoCodeByPrefix(this.order.adjustments, config.app.tokenPrefixes[type])
      if (token && !Cookies.get(cookies.samsungAccessToken.name)) {
        Cookies.set(
          cookies.samsungAccessToken.name,
          token,
          cookies.samsungAccessToken.config
        )

        Cookies.set(
          cookies.samsungAccessTokenType.name,
          accessTokenType,
          cookies.samsungAccessTokenType.config
        )
        return true
      }
      return false
    }
  }
}
