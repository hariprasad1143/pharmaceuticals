const PersonalData = () => import('@/components/PersonalData')
const StoreSelection = () => import('@/components/StoreSelection')
const PaymentMethodSelection = () => import('@/components/PaymentMethodSelection')
const PaymentPunchout = () => import('@/components/PaymentPunchout')
import CheckoutFailed from '@/components/flash-deals/CheckoutFailed.vue'
import CartPreview from '@/components/CartPreview'
import PayNowButton from '@/components/PayNowButton'
import {mapGetters} from 'vuex'
import errorHandler from '@common/src/util/error-handler'
import ModalSessionEnded from '@/components/ModalSessionEnded'
import payHandler from '@common/src/util/pay-handler'
import config from '@common/src/config'
import Simplert from 'vue2-simplert'
import navigationUtil from '@common/src/util/navigation'
import Cookie from 'js-cookie'
import CheckoutTimer from '@/components/flash-deals/CheckoutTimer'
import util from '@common/src/util'

export default {
  name: 'CheckoutPaymentMethod',
  components: {
    CartPreview,
    PersonalData,
    StoreSelection,
    PaymentMethodSelection,
    PayNowButton,
    Simplert,
    PaymentPunchout,
    CheckoutTimer,
    CheckoutFailed,
    ModalSessionEnded
  },
  created () {
    this.validateState()
  },
  computed: {
    ...mapGetters([
      'cart',
      'cartPrice',
      'cartCashback',
      'cartSgiPromo',
      'isCheckoutComplete',
      'currentUser',
      'pickupStore',
      'paymentMethod',
      'isMobile',
      'order',
      'appliedPromocodes',
      'shippingAddress',
      'paymentData',
      'orderId',
      'ipAddress',
      'isSessionEnded',
      'isCheckoutFailed',
      'isPayNowFailed',
      'cartCount'])
  },
  methods: {
    validateState: function () {
      if (this.cartCount < 1 && !Cookie.get('orderId')) {
        this.$router.replace(config.app.pages.product_listing)
      }
    },
    selectPayment: function () {
      this.$router.push(config.app.pages.checkout_summary)
    },
    editPersonalData: function () {
      this.$router.replace(config.app.pages.checkout)
    },
    editPickupStore: function () {
      this.$router.replace(config.app.pages.pickup_selection)
    },
    pay: function () {
      this.$store.dispatch('showLoading')
      // detach on before handler
      navigationUtil.clearWindowNavigateWarning()
      const tmp = this.getPaymentRequestData()
      this.$store.dispatch('pay', {
        data: tmp,
        success: this.paySuccess,
        fail: this.payError
      })
      return tmp
    },
    getPaymentRequestData: function () {
      let data = {
        addressRequest: {
          address: this.shippingAddress
        },
        ipAddress: '',
        cartId: this.cart.cartId,
        paymentRequest: {
          paymentMethod: this.paymentMethod.code,
          tenor: this.paymentMethod.tenor || 0,
          installment: false
        }
      }
      if (this.paymentMethod.klikBcaUserId) {
        data.paymentRequest.extendedData = {
          'KLIK_BCA_USER_ID': this.paymentMethod.klikBcaUserId
        }
      }
      if (Cookie.get('orderId')) {
        data.orderId = Cookie.get('orderId')
      }
      if (this.paymentMethod.tenor) {
        data.paymentRequest.installment = true
      }
      return data
    },
    paySuccess: function (response) {
      Cookie.remove('orderId')
      const data = response.body.data
      // if (data.redirectUrl) {
      //   payHandler.execute(this, data.redirectUrl, data.httpMethod, null, (response) => {
      //     this.$router.replace(config.app.pages.thank_you + '/' + data.orderId + '/failed')
      //     this.$store.dispatch('hideLoading')
      //   })
      // } else {
      //   this.$store.dispatch('setPaymentData', this.paymentData)
      //   this.$router.replace(config.app.pages.thank_you + '/' + data.orderId + '/success')
      //   this.$store.dispatch('hideLoading')
      // }
      let timeNow = Date.now()
      if (data) {
        util.goUrl(data.redirectUrl + '&version=' + timeNow)
      } else {
        this.payError(response.body.errors)
      }
    },
    payError: function (response) {
      this.$store.dispatch('hideLoading')
      this.$store.dispatch('setIsPayNowFailed', true)
    },
    paymentPunchout: function () {
      return this.$refs.paymentPunchout
    }
  }
}
