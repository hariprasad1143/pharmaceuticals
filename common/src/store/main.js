import commonApi from '@common/src/api/common'
import config from '@common/src/config'
import adjustmentUtil from '@common/src/util/adjustment'
import cacheUtil from '@common/src/util/cache'

const state = {
  currentUser: {init: true},
  personalData: {init: true},
  staticConfig: {init: true},
  cart: {
    items: []
  },
  appliedPromocodes: [],
  captchaReserveOrder: {},
  captchaCheckOrder: {},
  checkoutTime: 0,
  products: {},
  productGroups: [],
  gimmicks: [],
  pickupStore: {},
  paymentMethod: {},
  paymentData: {},
  order: {},
  productStocks: {},
  promotions: [],
  promotionsStatus: {},
  isMobile: false,
  isLoading: false,
  backdoorKey: '',
  backdoorInventories: {},
  backdoorPromotions: {},
  remainingTime: 0,
  dashboardInfo: {},
  stores: [],
  storeTypes: [],
  paymentTypes: [],
  payments: [],
  cmsContent: {},
  regions: {},
  shippingAddress: {},
  isFlashSaleExpired: false,
  isPayNowFailed: false,
  isCheckoutFailed: false,
  isConditionalCart: false,
  isOutOfStock: false,
  isTokenFailed: false,
  isOrderHistoryActive: false,
  isSessionEnded: false,
  selectedAddress: [],
  user: {},
  loginModalVisible: false,
  ipAddress: '',
  token: '',
  orderHistories: []
}

const mutations = {
  setStaticConfig (state, value) {
    state.staticConfig = {...value}
  },
  setCurrentUser (state, value) {
    state.currentUser = {...value}
  },
  setPersonalData (state, value) {
    state.personalData = value
  },
  setPersonalDataToShippingAddress (state, value) {
    state.shippingAddress.fullOrLegalName = value.name
    state.shippingAddress.phoneNumber = value.phoneNumber
  },
  setPersonalDataCaptcha (state, value) {
    const tmp = Object.assign({}, state.personalData)
    tmp.captcha = value
    state.personalData = tmp
  },
  removePersonalDataCaptcha (state) {
    delete state.personalData.captcha
  },
  setCart (state, value) {
    state.cart = value
  },
  setCartId (state, value) {
    const tmp = Object.assign({}, state.cart)
    tmp.cartId = value
    state.cart = tmp
  },
  addCartItem (state, value) {
    const items = state.cart.items
    const tmp = Object.assign({}, state.cart)
    tmp.items = items.concat(value)
    state.cart = tmp
  },
  setCartItem (state, value) {
    const tmp = Object.assign({}, state.cart)
    tmp.items = [value]
    state.cart = tmp
  },
  setCartFromOrder (state, value) {
    let cashback = 0
    let sgiPromo = 0
    for (let i in value.adjustments) {
      const adjustment = value.adjustments[i]
      if (adjustment.promoCode) {
        sgiPromo += adjustment.amount
      } else {
        cashback += adjustment.amount
      }
    }
    const newCart = {
      items: value.items,
      cashback: Math.abs(cashback),
      sgiPromo: Math.abs(sgiPromo),
      adjustments: value.adjustments,
      cartId: value.cartId,
      orderIdHash: value.orderIdHash
    }
    state.cart = newCart
  },
  setAppliedPromocodes: (state, value) => {
    state.appliedPromocodes = value ? [value] : []
  },
  setPaymentList (state, value) {
    state.paymentList = value
  },
  setCaptchaReserveOrder (state, value) {
    state.captchaReserveOrder = value
  },
  setCaptchaCheckOrder (state, value) {
    state.captchaCheckOrder = value
  },
  setProducts (state, value) {
    state.products = value
  },
  setProductGroups (state, value) {
    state.productGroups = value
  },
  setGimmicks (state, value) {
    state.gimmicks = value
  },
  setPickupStore (state, value) {
    state.pickupStore = {...value}
  },
  setPaymentMethod (state, value) {
    state.paymentMethod = {...value}
  },
  setPaymentData (state, value) {
    state.paymentData = {...value}
  },
  setOrder (state, value) {
    let order = {...value}
    // items by price desc
    order.cartItems && order.cartItems.sort((a, b) => b.price - a.price)
    state.order = order
  },
  setUserPhoneNumber (state, value) {
    const tmp = Object.assign({}, state.personalData)
    tmp.phoneNumber = value
    state.personalData = tmp
  },
  setProductStocks (state, value) {
    state.productStocks = value
  },
  setIsMobile (state, value) {
    state.isMobile = value
  },
  setPromotions (state, value) {
    state.promotions = value
  },
  setPromotionsStatus (state, value) {
    state.promotionsStatus = value
  },
  setLoading (state, value) {
    state.isLoading = value
  },
  setBackdoorInventories (state, value) {
    state.backdoorInventories = value
  },
  setBackdoorPromotions (state, value) {
    state.backdoorPromotions = value
  },
  setBackdoorKey (state, value) {
    state.backdoorKey = value
  },
  setRemainingTime (state, value) {
    state.remainingTime = value
  },
  setDashboardInfo (state, value) {
    state.dashboardInfo = value
  },
  setStores (state, value) {
    state.stores = value
  },
  setStoreTypes (state, value) {
    state.storeTypes = value
  },
  setPayments (state, value) {
    state.payments = value
  },
  setPaymentTypes (state, value) {
    state.paymentTypes = value
  },
  setCmsContent (state, value) {
    state.cmsContent = value
  },
  setRegions (state, {regionType, value}) {
    var regions = {...state.regions}
    regions[regionType] = value
    state.regions = regions
  },
  setShippingAddress (state, value) {
    state.shippingAddress = value
  },
  setIpAddress (state, value) {
    state.ipAddress = value
  },
  setCheckoutTime (state, value) {
    state.checkoutTime = value
  },
  setIsSessionEnded (state, value) {
    state.isSessionEnded = value
  },
  setIsFlashSaleExpired (state, value) {
    state.isFlashSaleExpired = value
  },
  setIsPayNowFailed (state, value) {
    state.isPayNowFailed = value
  },
  setIsCheckoutFailed (state, value) {
    state.isCheckoutFailed = value
  },
  setIsConditionalCart (state, value) {
    state.isConditionalCart = value
  },
  setIsTokenFailed (state, value) {
    state.isTokenFailed = value
  },
  setIsOrderHistoryActive (state, value) {
    state.isOrderHistoryActive = value
  },
  setIsOutOfStock (state, value) {
    state.isOutOfStock = value
  },
  setUser (state, user) {
    state.user = user
  },
  setLoginModalVisibility (state, visible) {
    state.loginModalVisible = visible
  },
  setToken (state, value) {
    state.token = value
  },
  setOrderHistory (state, value) {
    state.orderHistories = value
  }
}

const actions = {
  getStaticConfig: ({commit}, {code, success, fail} = {}) => {
    commonApi.getStaticConfig(response => {
            // populate config
      commit('setStaticConfig', response.body.data)
      success && success(response)
    }, code, function () {
      commit('setStaticConfig', {})
      fail && fail({})
    })
  },
  loginGoogle: ({ commit, dispatch }, {success, fail, data} = {}) => {
    commonApi.loginGoogle(response => {
      commit('setUser', response.body.data)
      if (success) {
        success(response)
      }
    }, data, fail)
  },
  loginFb: ({ commit, dispatch }, {success, fail, data} = {}) => {
    commonApi.loginFb(response => {
      commit('setUser', response.body.data)
      if (success) {
        success(response)
      }
    }, data, fail)
  },
  setMobileDeviceStatus: ({commit}, data) => {
    commit('setIsMobile', data)
  },
  resetCheckout: ({commit}) => {
    commit('setCurrentUser', {init: true})
    commit('setPersonalData', {init: true})
    commit('setShippingAddress', {})
    commit('setPaymentMethod', {})
    commit('setPickupStore', {})
    commit('setOrder', {})
    commit('setAppliedPromocodes', '')
    commit('setCart', Object.assign({}, state.cart, {sgiPromo: 0, cartId: '', orderIdHash: ''}))
  },
  // save user data & reserve stock
  saveCurrentUser: ({commit, state}, {data, success, fail} = {}) => {
    let tmp = {
      identityNumber: data.identityNumber,
      identityType: data.identityType,
      items: data.items,
      phoneNumber: data.phoneNumber,
      email: data.email
    }
    if (data.accessToken) {
      tmp.accessToken = data.accessToken
    }
    if (state.captchaReserveOrder) {
      tmp.captcha = data.captcha
    }
    commonApi.saveCurrentUser((res) => {
      commit('setCurrentUser', data)
      commit('setCartId', res.body.data.cartId)
      if (typeof success === 'function') {
        success(res)
      }
    }, tmp, fail)
  },
  savePersonalData: ({commit}, data) => {
    commit('setPersonalData', Object.assign({}, data))
    commit('setPersonalDataToShippingAddress', Object.assign({}, data))
  },
  saveUserPhoneNumber: ({commit}, data) => {
    commit('setUserPhoneNumber', data)
  },
  savePersonalDataCaptcha: ({commit}, data) => {
    commit('setPersonalDataCaptcha', data)
  },
  removePersonalDataCaptcha: ({commit}) => {
    commit('removePersonalDataCaptcha')
  },
  // add cart data
  addCart: ({commit, dispatch}, {data, token, reset = true, success, fail}) => {
    if (reset) {
      commonApi.addToCart(response => {
        if (response.body.data) {
          commit('setCartId', response.body.data.cartId)
          commit('setCartItem', response.body.data.cartItems[0])
          const customerAddress = response.body.data.customer.customerAddress
          const personalData = {
            name: customerAddress.fullOrLegalName,
            phoneNumber: customerAddress.phoneNumber
          }
          commit('setPersonalData', personalData)
          commit('setShippingAddress', customerAddress)
          if (response.body.data.availablePayments) {
            commit('setPayments', response.body.data.availablePayments.payments)
            commit('setPaymentTypes', response.body.data.availablePayments.paymentTypes)
          }
        }
        success && success(response)
      }, data, token, fail)
    } else {
      commit('addCartItem', data)
    }
    dispatch('resetCheckout')
  },
    // Change Payment
  getCartPayment: ({commit, dispatch}, {data, reset = true, success, fail}) => {
    if (reset) {
      commonApi.getCartPayment(response => {
        if (response.body.data) {
          commit('setCartId', response.body.data.cartId)
          commit('setCartItem', response.body.data.cartItems[0])
          const customerAddress = response.body.data.customer.customerAddress
          const personalData = {
            name: customerAddress.fullOrLegalName,
            phoneNumber: customerAddress.phoneNumber
          }
          commit('setPersonalData', personalData)
          commit('setShippingAddress', customerAddress)
          if (response.body.data.availablePayments) {
            commit('setPayments', response.body.data.availablePayments.payments)
            commit('setPaymentTypes', response.body.data.availablePayments.paymentTypes)
          }
          if (response.body.data.payment) {
            commit('setPaymentMethod', response.body.data.payment)
          }
        }
        success && success(response)
      }, data, fail)
    } else {
      commit('addCartItem', data)
    }
    dispatch('resetCheckout')
  },
  getCaptchaReserveOrder: ({commit}, {data, success, fail} = {}) => {
    commonApi.getConfig(response => {
      const data = response.body.data === 'true'
      commit('setCaptchaReserveOrder', data)
      if (success) {
        success(response)
      }
    }, config.app.config.reserve_order, fail)
  },
  getCaptchaCheckOrder: ({commit}, {data, success, fail} = {}) => {
    commonApi.getConfig(response => {
      const data = response.body.data === 'true'
      commit('setCaptchaCheckOrder', data)
      if (success) {
        success(response)
      }
    }, config.app.config.check_order, fail)
  },
  setPickupStore: ({commit}, data) => {
    commit('setPickupStore', data)
  },
  setPaymentMethod: ({commit}, data) => {
    commit('setPaymentMethod', data)
  },
  setPaymentData: ({commit}, data) => {
    commit('setPaymentData', data)
  },
  resetPaymentSelection: ({dispatch}) => {
    dispatch('setPaymentMethod', {})
    dispatch('setPromoToCart', {cashback: 0, promoId: ''})
  },
  setPromotions: ({commit}, data) => {
    commit('setPromotions', data)
  },
  getOrder: ({commit}, {hash, success, fail} = {}) => {
    commonApi.getOrder(response => {
      commit('setOrder', response.body.data)
      if (success) success(response)
    }, decodeURIComponent(hash), fail)
  },
  repay: ({commit}, {data, success, fail} = {}) => {
    commonApi.repay(response => {
      commit('setPaymentData', response.body.data)
      if (success) success(response)
    }, data, fail)
  },
  setOrderToCheckout: ({state, commit}, data = {}) => {
    commit('setCartFromOrder', data)
    commit('setCurrentUser', Object.assign({}, data.customer))
    commit('setPersonalData', Object.assign({}, data.customer))
    commit('setPickupStore', Object.assign({}, data.pickUpStore))
    commit('setAppliedPromocodes', adjustmentUtil.getPromoCodeByPrefix(data.adjustments, config.app.sgiGiftPromoCodePrefix))
    commit('setPaymentMethod', {
      installment: data.payment.installment,
      method: data.payment.method,
      klikBcaUserId: data.payment.details.bankId
    })
    commit('setShippingAddress', Object.assign({}, data.shippingAddress))
  },
  getProductStocks: ({commit}, {data, success, fail} = {}) => {
    commonApi.getProductStocks(response => {
      let stocks = {}
      const data = response.body.data
      for (const i in data) {
        let item = data[i]
        stocks[item.itemSku] = item.available
      }
      commit('setProductStocks', stocks)
      if (success) success(response)
    }, data, fail)
  },
  sendNotifyMe: (obj, {data, success, fail} = {}) => {
    commonApi.sendNotifyMe(success, data, fail)
  },
  getPromotionsStatus: ({state, commit}, {success, fail} = {}) => {
    let promotionList = []
    for (const i in state.promotions) {
      promotionList.push(state.promotions[i].id)
    }
    if (promotionList.length < 1) return
    commonApi.getPromotionsStatus(response => {
      let status = {}
      const data = response.body.data
      for (const i in data) {
        let item = data[i]
        status[item.promoId] = item.available
      }
      commit('setPromotionsStatus', status)
      if (success) success(response)
    }, promotionList, fail)
  },
  setPromoToCart: ({commit}, data) => {
    let newCart = Object.assign({}, state.cart, data)
    commit('setCart', Object.assign({}, newCart))
  },
  pay: ({commit, state}, {data, success, fail} = {}) => {
    commonApi.pay((res) => {
      // success
      commit('setPaymentData', res.body.data)
      if (typeof success === 'function') {
        success(res)
      }
    }, data, fail)
  },
  showLoading: ({commit}) => {
    commit('setLoading', true)
  },
  hideLoading: ({commit}) => {
    commit('setLoading', false)
  },
  checkBackdoorKey: ({commit}, {data, success, fail}) => {
    commonApi.getBackdoorPromotions((res) => {
      commit('setBackdoorKey', data)
      if (typeof success === 'function') {
        success(res)
      }
    }, data, ['1'], fail)
  },
  getBackdoorData: ({dispatch}, {data, success, fail}) => {
    dispatch('getInventoriesFromBackdoor', {data, success, fail})
    dispatch('getPromotionsFromBackdoor', {data, success, fail})
  },
  getRemainingTime: ({commit}, {success, fail}) => {
    commonApi.getRemainingTime((res) => {
      commit('setRemainingTime', res.body.data.remainingTime)
      success && success(res.body.data)
    }, fail)
  },
  setRemainingTime: ({commit}, data) => {
    commit('setRemainingTime', data)
  },
  validateToken: ({commit}, {data, success, fail}) => {
    commonApi.validateToken(response => {
      if (success) success(response)
    }, data, fail)
  },
  validatePromoCode: ({commit}, {data, success, fail}) => {
    commonApi.validatePromoCode(response => {
      commit('setAppliedPromocodes', data.promoCode)
      success && success(response)
    }, data, fail)
  },
  getDashboardInfo: ({commit}, {data, success, fail, key}) => {
    commonApi.getDashboardInfo(response => {
      if (success) {
        commit('setDashboardInfo', response.body.data)
        success(response)
      }
    }, data, fail, key)
  },
  getProducts: ({commit}, {success, fail}) => {
    commonApi.getProducts(response => {
      let products = {}
      const data = response.body.data
      // products by group
      for (let index in data) {
        const item = data[index]
        const group = item.group.match(/-cnc/i) ? 'cnc' : 'delivery'
        if (!products[group]) {
          products[group] = []
        }
        products[group].push(item)
      }
      commit('setProducts', products)
      commit('setProductGroups', response.body.data.productGroups)
      success && success(response)
    }, fail)
  },
  getGimmicks: ({commit}, {success, fail} = {}) => {
    commonApi.getGimmicks(response => {
      commit('setGimmicks', response.body.data)
      success && success(response)
    }, fail)
  },
  getStores: ({commit}, {success, fail} = {}) => {
    commonApi.getStores((res) => {
      commit('setStores', res.body.data.pickupPoints)
      commit('setStoreTypes', res.body.data.pickupPointTypes)
      success && success(res.body.data)
    }, fail)
  },
  getPromotions ({commit}, {success, fail, id}) {
    commonApi.getPromotions((response) => {
      commit('setPromotions', response.body.data)
      success && success(response.body.data)
    }, fail, id)
  },
  getCmsContent ({commit, state}, {id, success, fail} = {}) {
    if (cacheUtil.isExpire(state.cmsContent, id, config.app.cmsContent.expireInterval)) {
      commonApi.getCmsContent(response => {
        const tempObject = {}
        tempObject['timestamp'] = Date.now()
        tempObject['value'] = response.body.data.content
        let cmsContentMap = {...state.cmsContent}
        cmsContentMap[id] = tempObject
        commit('setCmsContent', cmsContentMap)
        success && success(response)
      }, id, fail)
    }
  },
  getProvinces: ({commit, dispatch}, {success, fail} = {}) => {
    dispatch('resetRegions', ['cities', 'districts', 'subdistricts'])
    commonApi.getProvinces(response => {
      commit('setRegions', {regionType: 'provinces', value: response.body.data})
      success && success(response)
    }, fail)
  },
  getCities: ({commit, dispatch}, {success, fail, provinceId} = {}) => {
    dispatch('resetRegions', ['cities', 'districts', 'subdistricts'])
    commonApi.getCities(response => {
      commit('setRegions', {regionType: 'cities', value: response.body.data})
      success && success(response)
    }, fail, provinceId)
  },
  getDistricts: ({commit, dispatch}, {success, fail, cityId} = {}) => {
    dispatch('resetRegions', ['districts', 'subdistricts'])
    commonApi.getDistricts(response => {
      commit('setRegions', {regionType: 'districts', value: response.body.data})
      success && success(response)
    }, fail, cityId)
  },
  getSubdistricts: ({commit, dispatch}, {success, fail, districtId} = {}) => {
    dispatch('resetRegions', ['subdistricts'])
    commonApi.getSubdistricts(response => {
      commit('setRegions', {regionType: 'subdistricts', value: response.body.data})
      success && success(response)
    }, fail, districtId)
  },
  resetRegions: ({commit}, types) => {
    types.forEach(type => commit('setRegions', {regionType: type, value: []}))
  },
  setShippingAddress: ({commit}, data) => {
    commit('setShippingAddress', data)
  },
  getUsers ({commit}, {error}) {
    commonApi.getUsers(response => {
      if (response.body.data && response.body.data.username) {
        commit('setUser', response.body.data)
      } else if (typeof error === 'function') {
        error(response)
      }
    }, error)
  },
  setLoginModalVisibility ({commit}, visible) {
    commit('setLoginModalVisibility', visible)
  },
  login: ({commit}, {data, success, error} = {}) => {
    commonApi.login(response => {
      if (response.body.data) {
        commit('setUser', response.body.data)
        typeof success === 'function' && success(response)
      } else if (typeof error === 'function') {
        error(response)
      }
    }, error, data)
  },
  logoutUser: ({commit}, {success, error} = {}) => {
    commonApi.logoutUser(response => {
      if (response.body) {
        commit('setUser', '')
        typeof success === 'function' && success(response)
      } else if (typeof error === 'function') {
        error(response)
      }
    }, error)
  },
  setCheckoutTime: ({commit}, value) => {
    commit('setCheckoutTime', value)
  },
  setIsSessionEnded: ({commit}, data) => {
    commit('setIsSessionEnded', data)
  },
  setIsFlashSaleExpired: ({commit}, data) => {
    commit('setIsFlashSaleExpired', data)
  },
  setIsPayNowFailed: ({commit}, data) => {
    commit('setIsPayNowFailed', data)
  },
  setIsCheckoutFailed: ({commit}, data) => {
    commit('setIsCheckoutFailed', data)
  },
  setIsConditionalCart: ({commit}, data) => {
    commit('setIsConditionalCart', data)
  },
  setIsTokenFailed: ({commit}, data) => {
    commit('setIsTokenFailed', data)
  },
  setIsOrderHistoryActive: ({commit}, data) => {
    commit('setIsOrderHistoryActive', data)
  },
  setIsOutOfStock: ({commit}, data) => {
    commit('setIsOutOfStock', data)
  },
  setCartItem: ({commit}, value) => {
    commit('setCartItem', value)
  },
  getToken: ({commit}, {data, success} = {}) => {
    commonApi.getToken(response => {
      if (response.body.data) {
        commit('setToken', response.body.data.token)
      }
      success && success(response)
    }, data)
  },
  getOrderHistory: ({commit}, {success, fail} = {}) => {
    commonApi.getOrderHistory(response => {
      commit('setOrderHistory', response.body.data)
      if (success) success(response)
    }, fail)
  }
}

const getters = {
  staticConfig: (state) => {
    return state.staticConfig
  },
  isMobile: (state) => {
    return state.isMobile
  },
  isLoggedIn: (state) => {
    return state.cart && !!state.cart.cartId
  },
  isSelectedPickupStore: (state) => {
    return state && state.pickupStore && typeof state.pickupStore.id !== 'undefined'
  },
  isSelectedPaymentMethod: (state) => {
    return state && state.paymentMethod && typeof state.paymentMethod.method !== 'undefined'
  },
  isCheckoutComplete: (state) => {
    return state && state.cart && !!state.cart.cartId &&
      state.paymentMethod && state.paymentMethod.name && !state.isSessionEnded
  },
  isCaptchaReserveOrder: (state) => {
    return !!state.captchaReserveOrder
  },
  isCaptchaCheckOrder: (state) => {
    return !!state.captchaCheckOrder
  },
  currentUser: (state) => {
    return state.currentUser || {}
  },
  personalData: (state) => {
    return state.personalData || {}
  },
  currentUserFullName: (state) => {
    var u = state.currentUser
    if (u && typeof u.id !== 'undefined') {
      var f = u.firstName ? u.firstName.trim() : ''
      var l = u.lastName ? u.lastName.trim() : ''
      return f + (l === '.' ? '' : ' ' + l)
    }
    return ''
  },
  cart: (state) => {
    return state.cart ? state.cart : {}
  },
  cartCount: (state) => {
    if (!state.cart || !state.cart.items) {
      return 0
    }
    return Object.keys(state.cart.items).length
  },
  cartItemSkus: () => {
    if (!state.cart.items) return []
    return state.cart.items.map(i => i.sku)
  },
  cartCashback: () => {
    return state.cart.cashback || 0
  },
  cartSgiPromo: () => {
    return state.cart.sgiPromo || 0
  },
  cartPrice: () => {
    return state.cart.items.reduce((acc, item) => acc + item.price, 0)
  },
  appliedPromocodes: (state) => {
    return state.appliedPromocodes || []
  },
  captchaReserveOrder: (state) => {
    return state.captchaReserveOrder
  },
  products: (state) => {
    return state.products
  },
  productGroups: (state) => {
    return state.productGroups
  },
  gimmicks: (state) => {
    return state.gimmicks
  },
  pickupStore: (state) => {
    return state.pickupStore
  },
  paymentMethod: (state) => {
    return state.paymentMethod
  },
  paymentData: (state) => {
    return state.paymentData ? state.paymentData : {}
  },
  availablePromotions: (state) => {
    const tmp = []
    for (let i in state.promotions) {
      const p = state.promotions[i]
      if (state.promotionsStatus[p.id]) {
        tmp.push(p)
      }
    }
    return tmp.sort((a, b) => a.sequence === b.sequence ? 0 : a.sequence < b.sequence ? -1 : 1)
  },
  unAvailablePromotions: (state) => {
    const tmp = []
    for (let i in state.promotions) {
      const p = state.promotions[i]
      if (!state.promotionsStatus[p.id]) {
        tmp.push(p)
      }
    }
    return tmp.sort((a, b) => a.sequence === b.sequence ? 0 : a.sequence < b.sequence ? -1 : 1)
  },
  order: (state) => {
    return state.order ? state.order : {}
  },
  orderCashbackAmount: (state) => {
    return (state.order && state.order.adjustments) ? adjustmentUtil.getCashbackAmount(state.order.adjustments) : 0
  },
  orderCustomerDetail: (state) => {
    return (state.order && state.order.customer) ? state.order.customer : {}
  },
  orderPickupStore: (state) => {
    return (state.order && state.order.pickUpStore) ? state.order.pickUpStore : {}
  },
  orderShippingAddress: (state) => {
    return (state.order && state.order.customer.customerAddress) ? state.order.customer.customerAddress : {}
  },
  isWaitingPayment: (state) => {
    // return !!state.paymentData.orderId
    // TODO move this to somewhere
    let offlinePayments = ['KlikBCA', 'ATMBCA', 'VirtualAccountBcaOnline', 'MandiriBillPayment', 'AtmBersama',
      'AlfaGroup', 'Indomaret', 'VirtualAccountMandiri', 'BNIVA', 'BRIVA', 'DanamonVA', 'PosPay']
    return !!state.order.payment && offlinePayments.indexOf(state.order.payment.paymentMethod) > -1 && state.order.orderStatus === 'M'
  },
  productStocks: (state) => {
    return state.productStocks
  },
  promotions: (state) => {
    return state.promotions
  },
  promotionsStatus: (state) => {
    return state.promotionsStatus
  },
  isLoading: (state) => {
    return state.isLoading
  },
  backdoorKey: (state) => {
    return state.backdoorKey
  },
  backdoorInventories: (state) => {
    return state.backdoorInventories ? state.backdoorInventories : {}
  },
  backdoorPromotions: (state) => {
    return state.backdoorPromotions ? state.backdoorPromotions : {}
  },
  remainingTime: function (state) {
    return state.remainingTime
  },
  dashboardSoldOrders: (state) => {
    return state.dashboardInfo.soldOrders || []
  },
  dashboardStocks: (state) => {
    return state.dashboardInfo.stocks || []
  },
  dashboardAdjustmentUsages: (state) => {
    return state.dashboardInfo.adjustmentUsages || []
  },
  dashboardCashbackDeposit: (state) => {
    return state.dashboardInfo.cashbackDeposit || 0
  },
  dashboardProducts: (state) => {
    return state.dashboardInfo.products || []
  },
  dashboardPromotions: (state) => {
    return state.dashboardInfo.promotions || []
  },
  dashboardGimmicks: (state) => {
    return state.dashboardInfo.gimmicks || []
  },
  stores: (state) => {
    return state.stores
  },
  storeTypes: (state) => {
    return state.storeTypes
  },
  payments: (state) => {
    return state.payments
  },
  paymentTypes: (state) => {
    return state.paymentTypes
  },
  cmsContent: (state) => {
    return state.cmsContent || {}
  },
  regions: (state) => {
    return state.regions || {}
  },
  shippingAddress: (state) => {
    return state.shippingAddress || {}
  },
  ipAddress: (state) => {
    return state.ipAddress || {}
  },
  checkoutTime: (state) => {
    return state.checkoutTime || 0
  },
  user (state) {
    return state.user
  },
  loginModalVisible (state) {
    return state.loginModalVisible
  },
  isSessionEnded: (state) => {
    return state.isSessionEnded
  },
  isFlashSaleExpired: (state) => {
    return state.isFlashSaleExpired
  },
  isPayNowFailed: (state) => {
    return state.isPayNowFailed
  },
  isCheckoutFailed: (state) => {
    return state.isCheckoutFailed
  },
  isConditionalCart: (state) => {
    return state.isConditionalCart
  },
  isOutOfStock: (state) => {
    return state.isOutOfStock
  },
  isTokenFailed: (state) => {
    return state.isTokenFailed
  },
  isOrderHistoryActive: (state) => {
    return state.isOrderHistoryActive
  },
  token: (state) => {
    return state.token
  },
  orderHistories: (state) => {
    return state.orderHistories
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}
