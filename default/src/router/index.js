import Vue from 'vue'
import Router from 'vue-router'
import navigationUtil from '@common/src/util/navigation'
import config from '@common/src/config'

const PageNotFound = () => import('@/pages/PageNotFound')
// const ProductListing = () => import('@/pages/ProductListing')
const ProductAccessories = () => import('@/pages/ProductAccessories')
const Checkout = () => import('@/pages/Checkout')
const CheckoutPickupStore = () => import('@/pages/CheckoutPickupStore')
const CheckoutPaymentMethod = () => import('@/pages/CheckoutPaymentMethod')
const ThankYouSuccess = () => import('@/pages/ThankYouSuccess')
const ThankYouFailed = () => import('@/pages/ThankYouFailed')
const CheckoutRepay = () => import('@/pages/CheckoutRepay')
const RepayOrder = () => import('@/pages/RepayOrder')
const UnexpectedError = () => import('@/pages/UnexpectedError')
const Backdoor = () => import('@/pages/Backdoor')
const BackdoorDashboard = () => import('@/pages/BackdoorDashboard')
const Countdown = () => import('@/pages/Countdown')
const VipAccess = () => import('@/pages/VipAccess')
const LandingPage = () => import('@/pages/LandingPage')
const OrderHistory = () => import('@/pages/OrderHistory')
const Waiting = () => import('@/components/flash-deals/Waiting')
const Login = () => import('@/pages/Login')

Vue.use(Router)

let firstLoad = true

let router = new Router({
  routes: [
    {
      path: '*',
      name: 'page-not-found',
      component: PageNotFound
    },
    {
      path: '/galaxylaunchpack',
      name: 'redirect-to-home',
      redirect: config.app.pages.home
    },
    {
      path: config.app.pages.home,
      name: 'home',
      component: LandingPage
    },
    {
      path: config.app.pages.product_listing,
      name: 'product-listing',
      component: LandingPage
    },
    {
      path: config.app.pages.order_history,
      name: 'product-listing',
      component: OrderHistory
    },
    {
      path: config.app.pages.waiting,
      name: 'waiting',
      component: Waiting
    },
    {
      path: config.app.pages.product_accessories,
      name: 'product-accessories',
      component: ProductAccessories
    },
    {
      path: config.app.pages.checkout,
      name: 'checkout',
      component: Checkout
    },
    {
      path: config.app.pages.pickup_selection,
      name: 'checkout-pickup-selection',
      component: CheckoutPickupStore
    },
    {
      path: config.app.pages.payment_selection,
      name: 'checkout-payment-selection',
      component: CheckoutPaymentMethod
    },
    {
      path: config.app.pages.thank_you + '/:hashCode',
      name: 'thank-you',
      redirect: config.app.pages.thank_you + '/:hashCode/success'
    },
    {
      path: config.app.pages.thank_you + '/:hashCode/success',
      name: 'thank-you-success',
      component: ThankYouSuccess
    },
    {
      path: config.app.pages.thank_you + '/:hashCode/failed',
      name: 'thank-you-failed',
      component: ThankYouFailed
    },
    {
      path: config.app.pages.repay,
      name: 'repay',
      component: CheckoutRepay
    },
    {
      path: config.app.pages.repay_order + '/:hashCode',
      name: 'repay-order',
      component: RepayOrder
    },
    {
      path: config.app.pages.unexpected_error,
      name: 'we-are-sorry',
      component: UnexpectedError
    },
    {
      path: config.app.pages.backdoor,
      name: 'backdoor',
      component: Backdoor
    },
    {
      path: config.app.pages.backdoor_dashboard,
      name: 'backdoor-dashboard',
      component: BackdoorDashboard
    },
    {
      path: config.app.pages.countdown,
      name: 'countdown',
      component: Countdown
    },
    {
      path: config.app.pages.vip_access,
      name: 'vip-access',
      component: VipAccess
    },
    {
      path: config.app.pages.login,
      name: 'login',
      component: Login
    }
  ],
  mode: 'history'
})

function triggerUrlChange (path) {
  if (window.ga) {
    window.ga('set', 'page', path)
    window.ga('send', 'pageview')
  }

  if (window._bwaq) {
    const useridparam = config.app.trackers.userIdParam
    const bwamembertype = config.app.trackers.bwaMemberType
    var trackpageview = ['_trackPageView', 'others', useridparam, bwamembertype]
    window._bwaq.push(trackpageview)
  }
}

function isCheckoutPage (path) {
  switch (path) {
    case config.app.pages.checkout:
    case config.app.pages.pickup_selection:
    case config.app.pages.payment_selection:
    case config.app.pages.checkout_summary:
      return true
    default:
      return false
  }
}

function isThankYouPage (path) {
  return path.indexOf(config.app.pages.thank_you) === 0
}

function isWaitingPage (path) {
  return path.indexOf(config.app.pages.waiting) === 0
}

router.beforeEach((to, from, next) => {
  if ((isWaitingPage(from.path) && to.path === config.app.pages.product_listing)) {
    if (navigationUtil.confirmNavigation(config.app.navigateWarning)) {
      next()
    } else {
      next(false)
    }
    return
  }

  if (isCheckoutPage(from.path) && isWaitingPage(to.path)) {
    if (navigationUtil.confirmNavigation(config.app.navigateWarning)) {
      next({path: config.app.pages.product_listing, replace: true})
    } else {
      next(false)
    }
    return
  }

  // attach window before unload
  if ((isCheckoutPage(from.path) || isWaitingPage(from.path)) &&
      !(isCheckoutPage(to.path) || isThankYouPage(to.path)) &&
      firstLoad) {
    firstLoad = false
    next({path: config.app.pages.product_listing, replace: true})
    return
  }
  next()
})

router.afterEach((to, from) => {
  // attach window before unload
  if (isCheckoutPage(to.path) || isWaitingPage(to.path)) {
    navigationUtil.windowNavigateWarning(config.app.navigateWarning)
  } else {
    navigationUtil.clearWindowNavigateWarning()
  }
  triggerUrlChange(to.path)
})

export default router
