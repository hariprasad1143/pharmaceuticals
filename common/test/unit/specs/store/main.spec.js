import store from '@common/src/store'
import Dummy from '@/pages/Dummy.vue'
import Vue from 'vue'
import config from '@common/src/config'
import apiRoutes from '@common/src/api-mock/mock/api-routes'

// inject start
const mainStoreInject = require('inject-loader!@common/src/store/main')

// var mutations = store.mutations

var allRoutes = apiRoutes

// map the routes with key from url
var mappedCommonRoutes = {}
for (var i in allRoutes) {
  mappedCommonRoutes[allRoutes[i].method + allRoutes[i].url] = allRoutes[i]
}

/* eslint no-useless-computed-key: "off" */
// create the module with our mocks
const mainStore = mainStoreInject({
  ['@common/src/api/common']: {
    getConfig (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.configs + '/' + config.app.config.reserve_order].response})
      }, 100)
    },
    getOrder (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.orders + '/ABCDEFG'].response})
      }, 100)
    },
    getOrderStatus (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['POST' + config.api.common.check_order].response})
      }, 100)
    },
    repay (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['POST' + config.api.common.repay].response})
      }, 100)
    },
    saveCurrentUser (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['POST' + config.api.common.reserve_stock].response})
      }, 100)
    },
    getProductStocks (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.inventories_stock + '?sku=ABC'].response})
      }, 100)
    },
    sendNotifyMe (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['POST' + config.api.common.notify_me].response})
      }, 100)
    },
    getPromotionsStatus (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.promotion_availables + '?promoId=123'].response})
      }, 100)
    },
    pay (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['POST' + config.api.common.pay].response})
      }, 100)
    },
    getBackdoorInventories (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.inventories_backdoor + '?sku=ABC'].response})
      }, 100)
    },
    getBackdoorPromotions (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.promotion_backdoor + '?promoId=ABC'].response})
      }, 100)
    },
    getRemainingTime (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.remaining_time].response})
      }, 100)
    },
    validateToken (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['POST' + config.api.common.validate_token].response})
      }, 100)
    },
    validatePromoCode (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['POST' + config.api.common.validate_promo_code].response})
      }, 100)
    },
    getDashboardInfo (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['POST' + config.api.common.dashboard_info].response})
      }, 100)
    },
    getProducts (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.products + '/regular'].response})
      }, 100)
    },
    getGimmicks (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.gimmicks].response})
      }, 100)
    },
    getStores (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.pickup_points].response})
      }, 100)
    },
    getPromotions (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.promotions('regular')].response})
      }, 100)
    },
    getPayments (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.payments].response})
      }, 100)
    },
    getCmsContent (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.content + '/' + config.app.cmsContent.ids.mainTnc].response})
      }, 100)
    },
    getProvinces (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.provinces].response})
      }, 100)
    },
    getCities (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.cities('ID-6')].response})
      }, 100)
    },
    getDistricts (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.districs('ID-6-7')].response})
      }, 100)
    },
    getSubdistricts (cb) {
      setTimeout(() => {
        cb({body: mappedCommonRoutes['GET' + config.api.common.subdistricts('ID-6-7-6')].response})
      }, 100)
    },
    getUsers (cb) {
      setTimeout(() => {
        cb({body: {data: {username: 'username'}}})
      }, 100)
    },
    login (cb) {
      setTimeout(() => {
        cb({body: {data: {username: 'username'}}})
      }, 100)
    }
  }
}).default

/* eslint no-useless-computed-key: "off" */
// create the module with our mocks
const mainStoreFail = mainStoreInject({
  ['@common/src/api/common']: {
    getOrder (cb, a, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getConfig (cb, a, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getOrderStatus (cb, a, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getProductStocks (cb, a, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getPromotionsStatus (cb, a, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getBackdoorInventories (cb, a, b, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getBackdoorPromotions (cb, a, b, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getRemainingTime (cb, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    validateToken (cb, a, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    validatePromoCode (cb, a, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getDashboardInfo (cb, a, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getProducts (cb, a, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getGimmicks (cb, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getStores (cb, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getPromotions (cb, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getPayments (cb, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getCmsContent (cb, a, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getProvinces (cb, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getCities (cb, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getDistricts (cb, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getSubdistricts (cb, fail) {
      setTimeout(() => {
        fail({code: 400})
      }, 100)
    },
    getUsers (cb) {
      setTimeout(() => {
        cb({body: {data: null}})
      })
    },
    login (cb) {
      setTimeout(() => {
        cb({body: {data: null}})
      })
    }
  }
}).default

// helper for testing action with expected mutations
const testAction = (action, payload, state, expectedMutations, done, expectedDispatches) => {
  let count = 0
  let countDispatch = 0
  const success = payload.success
  const fail = payload.fail

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.type).to.equal(type)
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++
    if (count >= expectedMutations.length &&
      (!expectedDispatches || expectedDispatches.length === 0)) {
      if (success) {
        success(done)
      } else if (fail) {
        fail(done)
      } else {
        done()
      }
    }
  }

  // mock dispatch
  const dispatch = (type) => {
    const dispatching = expectedDispatches[countDispatch]
    expect(dispatching.type).to.equal(type)
    countDispatch++
    if (countDispatch >= expectedDispatches.length) {
      if (success) {
        success(done)
      } else {
        done()
      }
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state, dispatch }, payload)

  // commented for now, since no action require no mutation
  // // check if no mutations should have been dispatched
  // if (expectedMutations.length === 0) {
  //   expect(count).to.equal(0)
  //   done()
  // }
}

function mockDateNow () {
  return 1521718331838
}

describe('main store', () => {
  const Constructor = Vue.extend(Dummy)
  var vm = null
  var state = {}
  var originalDateNow = {}

  beforeEach(() => {
    vm = new Constructor({
      store
    })
    vm.$mount()
    originalDateNow = Date.now
    Date.now = mockDateNow

    state = {
      currentUser: {},
      cart: {},
      paymentList: [],
      paymentData: {},
      order: {},
      promotions: [],
      cmsContent: {}
    }
  })

  afterEach(function () {
    Date.now = originalDateNow
  })

  it('mutations', () => {
    // commit
    vm.$store.commit('setCurrentUser', {'a': 1})
    expect(vm.$store.state.currentUser.a).to.equal(1)

    // personalData
    vm.$store.commit('setPersonalData', {'a': 1})
    expect(vm.$store.state.personalData.a).to.equal(1)

    // personalDataCaptcha
    vm.$store.commit('setPersonalDataCaptcha', {'a': 1})
    expect(vm.$store.state.personalData.captcha.a).to.equal(1)

    // remove personalDataCaptcha
    vm.$store.commit('removePersonalDataCaptcha')
    expect(vm.$store.state.personalData.captcha).to.equal(undefined)

    // cart
    vm.$store.commit('setCart', {'b': 2})
    expect(vm.$store.state.cart.b).to.equal(2)

    vm.$store.commit('setCartItem', {'b': 2})
    expect(vm.$store.state.cart.items).to.deep.equal([{'b': 2}])
    vm.$store.commit('addCartItem', {'b': 4})
    expect(vm.$store.state.cart.items).to.deep.equal([{'b': 2}, {'b': 4}])

    // payment list
    vm.$store.commit('setPaymentList', {'b': 5})
    expect(vm.$store.state.paymentList.b).to.equal(5)

    // paymentData
    vm.$store.commit('setPaymentData', {'c': 5})
    expect(vm.$store.state.paymentData.c).to.equal(5)

    // order
    vm.$store.commit('setOrder', {'d': 5})
    expect(vm.$store.state.order.d).to.equal(5)
    vm.$store.commit('setOrder', {'items': [{price: 0}, {price: 10000}]})
    expect(vm.$store.state.order).to.deep.equal({'items': [{price: 10000}, {price: 0}]})
    vm.$store.commit('setOrder', {})
    expect(vm.$store.state.order).to.deep.equal({})

    // cartId
    vm.$store.commit('setCartId', {'d': 5})
    expect(vm.$store.state.cart.cartId.d).to.equal(5)

    // phone number
    vm.$store.commit('setUserPhoneNumber', {'e': 1})
    expect(vm.$store.state.personalData.phoneNumber.e).to.equal(1)

    // product stocks
    vm.$store.commit('setProductStocks', {a: false})
    expect(vm.$store.state.productStocks).to.deep.equal({a: false})

    // is mobile
    vm.$store.commit('setIsMobile', false)
    expect(vm.$store.state.isMobile).to.equal(false)
    // promotions
    vm.$store.commit('setPromotions', [{a: 1}])
    expect(vm.$store.state.promotions).to.deep.equal([{a: 1}])

    // promotions status
    vm.$store.commit('setPromotionsStatus', {x: false})
    expect(vm.$store.state.promotionsStatus).to.deep.equal({x: false})

    // loading state
    vm.$store.commit('setLoading', {x: false})
    expect(vm.$store.state.isLoading).to.deep.equal({x: false})

    // backdoor inventories
    vm.$store.commit('setBackdoorInventories', {x: 'abc'})
    expect(vm.$store.state.backdoorInventories).to.deep.equal({x: 'abc'})

    // backdoor promotions
    vm.$store.commit('setBackdoorPromotions', {x: 'abc'})
    expect(vm.$store.state.backdoorPromotions).to.deep.equal({x: 'abc'})

    // backdoor key
    vm.$store.commit('setBackdoorKey', {x: 'abc'})
    expect(vm.$store.state.backdoorKey).to.deep.equal({x: 'abc'})

    // remaining time
    vm.$store.commit('setRemainingTime', 1516329725133)
    expect(vm.$store.state.remainingTime).to.equal(1516329725133)

    // dashboardinfo
    vm.$store.commit('setDashboardInfo', [{a: 'b'}])
    expect(vm.$store.state.dashboardInfo).to.deep.equal([{a: 'b'}])

    // products and productGroups
    vm.$store.commit('setProducts', {a: 'b'})
    expect(vm.$store.state.products).to.deep.equal({a: 'b'})
    vm.$store.commit('setProductGroups', [{a: 'b'}])
    expect(vm.$store.state.productGroups).to.deep.equal([{a: 'b'}])

    // gimmicks
    vm.$store.commit('setGimmicks', [{a: 'b'}])
    expect(vm.$store.state.gimmicks).to.deep.equal([{a: 'b'}])

    // stores and storeTypes
    vm.$store.commit('setStores', [{a: 'b'}])
    expect(vm.$store.state.stores).to.deep.equal([{a: 'b'}])
    vm.$store.commit('setStoreTypes', [{a: 'b'}])
    expect(vm.$store.state.storeTypes).to.deep.equal([{a: 'b'}])

    // payments and paymentTypes
    vm.$store.commit('setPayments', [{a: 'b'}])
    expect(vm.$store.state.payments).to.deep.equal([{a: 'b'}])
    vm.$store.commit('setPaymentTypes', [{a: 'b'}])
    expect(vm.$store.state.paymentTypes).to.deep.equal([{a: 'b'}])

    // cmsContent
    vm.$store.commit('setCmsContent', {a: 'b'})
    expect(vm.$store.state.cmsContent).to.deep.equal({a: 'b'})

    // regions
    vm.$store.commit('setRegions', {regionType: 'province', value: [{a: 'b'}]})
    expect(vm.$store.state.regions).to.deep.equal({province: [{a: 'b'}]})

    // shippingAddress
    vm.$store.commit('setShippingAddress', {a: 'b'})
    expect(vm.$store.state.shippingAddress).to.deep.equal({a: 'b'})

    // checkoutTime
    vm.$store.commit('setCheckoutTime', {a: 'b'})
    expect(vm.$store.state.checkoutTime).to.deep.equal({a: 'b'})
    
    // visibleWaitingPage
    vm.$store.commit('setVisibleWaitingPage', {a: 'b'})
    expect(vm.$store.state.visibleWaitingPage).to.deep.equal({a: 'b'})

    vm.$store.commit('setUser', {username: 'username'})
    expect(vm.$store.state.user).to.deep.equal({username: 'username'})

    vm.$store.commit('setLoginModalVisibility', true)
    expect(vm.$store.state.loginModalVisible).to.be.true

    // setCartFromOrder
    let expectedItem = [{ sku: 'a', price: 0 }, { sku: 'b', price: 10000 }]
    vm.$store.commit('setCartFromOrder', {
      adjustments: [],
      items: [{ sku: 'a', price: 0 }, { sku: 'b', price: 10000 }]})
    expect(vm.$store.state.cart.items).to.deep.equal(expectedItem)
  })

  it('getters', () => {
    // currentUser
    vm.$store.commit('setCurrentUser', {'a': 3})
    expect(vm.$store.getters.currentUser.a).to.equal(3)
    vm.$store.commit('setCurrentUser', undefined)
    expect(vm.$store.getters.currentUser).to.deep.equal({})
    vm.$store.commit('setPersonalData', {'a': 3})
    expect(vm.$store.getters.personalData.a).to.equal(3)
    vm.$store.commit('setPersonalData', undefined)
    expect(vm.$store.getters.personalData).to.deep.equal({})

    // currentUserFullName
    // not logged in
    vm.$store.commit('setCurrentUser', {})
    expect(vm.$store.getters.currentUserFullName).to.equal('')
    vm.$store.commit('setCurrentUser', undefined)
    expect(vm.$store.getters.currentUserFullName).to.equal('')
    vm.$store.commit('setCurrentUser', {id: 1})
    expect(vm.$store.getters.currentUserFullName).to.equal(' ')
    vm.$store.commit('setCurrentUser', {undefined})
    expect(vm.$store.getters.currentUserFullName).to.equal('')
    // logged in
    vm.$store.commit('setCurrentUser', {id: 1, firstName: ' abc ', lastName: '  def  '})
    expect(vm.$store.getters.currentUserFullName).to.equal('abc def')
    vm.$store.commit('setCurrentUser', {id: 1, firstName: ' abc ', lastName: '.'})
    expect(vm.$store.getters.currentUserFullName).to.equal('abc')

    // cart
    vm.$store.commit('setCart', {'b': 4})
    expect(vm.$store.getters.cart.b).to.equal(4)
    vm.$store.commit('setCart', undefined)
    expect(vm.$store.getters.cart).to.deep.equal({})
    vm.$store.commit('setCartItem', {price: 1000})
    expect(vm.$store.getters.cartPrice).to.deep.equal(1000)
    expect(vm.$store.getters.cartCashback).to.deep.equal(0)
    expect(vm.$store.getters.cartSgiPromo).to.deep.equal(0)

    // isLoggedin
    vm.$store.commit('setCart', {})
    expect(vm.$store.getters.isLoggedIn).to.equal(false)
    vm.$store.commit('setCartId', {id: 1})
    expect(vm.$store.getters.isLoggedIn).to.equal(true)
    vm.$store.commit('setCart', false)
    expect(vm.$store.getters.isLoggedIn).to.equal(false)

    // isSelectedPickupStore
    vm.$store.commit('setPickupStore', {})
    expect(vm.$store.getters.isSelectedPickupStore).to.equal(false)
    vm.$store.commit('setPickupStore', {id: 'C006540761'})
    expect(vm.$store.getters.isSelectedPickupStore).to.equal(true)
    vm.$store.commit('setPickupStore', false)
    expect(vm.$store.getters.isSelectedPickupStore).to.equal(false)

    // undefined pickupstore
    vm.$store.commit('setPickupStore', null)
    expect(vm.$store.getters.isSelectedPickupStore).to.equal(false)

    // isSelectedPaymentMethod
    vm.$store.commit('setPaymentMethod', {})
    expect(vm.$store.getters.isSelectedPaymentMethod).to.equal(false)
    vm.$store.commit('setPaymentMethod', {method: 'BNIDebitOnline'})
    expect(vm.$store.getters.isSelectedPaymentMethod).to.equal(true)
    vm.$store.commit('setPaymentMethod', false)
    expect(vm.$store.getters.isSelectedPaymentMethod).to.equal(false)

    // undefined payment method
    vm.$store.commit('setPaymentMethod', null)
    expect(vm.$store.getters.isSelectedPaymentMethod).to.equal(false)

    // isCheckoutComplete
    vm.$store.commit('setPaymentMethod', {})
    expect(vm.$store.getters.isCheckoutComplete).to.equal(false)
    vm.$store.commit('setPickupStore', {})
    expect(vm.$store.getters.isCheckoutComplete).to.equal(false)
    vm.$store.commit('setPaymentMethod', {})
    expect(vm.$store.getters.isCheckoutComplete).to.equal(false)
    vm.$store.commit('setCartId', {id: 1})
    vm.$store.commit('setPickupStore', {id: 'C006540761'})
    vm.$store.commit('setPaymentMethod', {method: 'BNIDebitOnline'})
    expect(vm.$store.getters.isCheckoutComplete).to.equal('BNIDebitOnline')
    vm.$store.commit('setCart', false)
    expect(vm.$store.getters.isCheckoutComplete).to.equal(false)
    vm.$store.commit('setPickupStore', false)
    expect(vm.$store.getters.isCheckoutComplete).to.equal(false)
    vm.$store.commit('setPaymentMethod', false)
    expect(vm.$store.getters.isCheckoutComplete).to.equal(false)

    // captchaReserveOrder
    vm.$store.commit('setCaptchaReserveOrder', [{a: 'c'}])
    expect(vm.$store.getters.captchaReserveOrder).to.deep.equal([{a: 'c'}])

    // cart count
    expect(vm.$store.getters.cartCount).to.equal(0)
    vm.$store.commit('setCartItem', {sku: '1'})
    expect(vm.$store.getters.cartCount).to.equal(1)
    expect(vm.$store.getters.cartItemSkus).to.deep.equal(['1'])

    // products
    vm.$store.commit('setProducts', [{a: 'c'}])
    expect(vm.$store.getters.products).to.deep.equal([{a: 'c'}])

    // pickup store
    vm.$store.commit('setPickupStore', {a: 'x'})
    expect(vm.$store.getters.pickupStore).to.deep.equal({a: 'x'})

    // payment method
    vm.$store.commit('setPaymentMethod', {a: 'm'})
    expect(vm.$store.getters.paymentMethod).to.deep.equal({a: 'm'})

    // payment data
    vm.$store.commit('setPaymentData', {a: 'm'})
    expect(vm.$store.getters.paymentData).to.deep.equal({a: 'm'})
    vm.$store.commit('setPaymentData', undefined)
    expect(vm.$store.getters.paymentData).to.deep.equal({})

    // isWaitingPayment
    vm.$store.commit('setOrder', {payment: {method: 'KlikBCA'}, status: 'M'})
    expect(vm.$store.getters.isWaitingPayment).to.equal(true)
    vm.$store.commit('setOrder', {payment: {method: 'KlikBCA'}, status: 'C'})
    expect(vm.$store.getters.isWaitingPayment).to.equal(false)
    vm.$store.commit('setOrder', {payment: {method: 'SpeedOrder'}})
    expect(vm.$store.getters.isWaitingPayment).to.equal(false)
    vm.$store.commit('setOrder', {})
    expect(vm.$store.getters.isWaitingPayment).to.equal(false)

    // reserveOrder
    vm.$store.commit('setCaptchaReserveOrder', true)
    expect(vm.$store.getters.isCaptchaReserveOrder).to.deep.equal(true)
    vm.$store.commit('setCaptchaReserveOrder', false)
    expect(vm.$store.getters.isCaptchaReserveOrder).to.deep.equal(false)

    // checkOrder
    vm.$store.commit('setCaptchaCheckOrder', true)
    expect(vm.$store.getters.isCaptchaCheckOrder).to.deep.equal(true)
    vm.$store.commit('setCaptchaCheckOrder', false)
    expect(vm.$store.getters.isCaptchaCheckOrder).to.deep.equal(false)

    // order
    vm.$store.commit('setOrder', {a: 'm'})
    expect(vm.$store.getters.order).to.deep.equal({a: 'm'})
    vm.$store.commit('setOrder', undefined)
    expect(vm.$store.getters.order).to.deep.equal({})

    // order customer detail
    vm.$store.commit('setOrder', {customer: {a: 'b'}})
    expect(vm.$store.getters.orderCustomerDetail).to.deep.equal({a: 'b'})
    vm.$store.commit('setOrder', {})
    expect(vm.$store.getters.orderCustomerDetail).to.deep.equal({})

    // order pickupstore
    vm.$store.commit('setOrder', {pickUpStore: {a: 'c'}})
    expect(vm.$store.getters.orderPickupStore).to.deep.equal({a: 'c'})
    vm.$store.commit('setOrder', {})
    expect(vm.$store.getters.orderPickupStore).to.deep.equal({})

    // product stocks
    vm.$store.commit('setProductStocks', {b: true})
    expect(vm.$store.getters.productStocks).to.deep.equal({b: true})

    // is mobile
    vm.$store.commit('setIsMobile', false)
    expect(vm.$store.getters.isMobile).to.equal(false)

    // promotions status
    vm.$store.commit('setPromotions', [{a: 2}])
    expect(vm.$store.getters.promotions).to.deep.equal([{a: 2}])

    // promotions status
    vm.$store.commit('setPromotionsStatus', {y: false})
    expect(vm.$store.getters.promotionsStatus).to.deep.equal({y: false})

    // available promotions and not available promotions
    vm.$store.commit('setPromotions', [
      { id: 1, sequence: 1 },
      { id: 2, sequence: 2 },
      { id: 3, sequence: 0 },
      { id: 4, sequence: 1 }
    ])
    vm.$store.commit('setPromotionsStatus', {
      1: true,
      2: false,
      3: true,
      4: true
    })
    expect(vm.$store.getters.availablePromotions).to.deep.equal([{ id: 3, sequence: 0 }, { id: 1, sequence: 1 }, { id: 4, sequence: 1 }])
    expect(vm.$store.getters.unAvailablePromotions).to.deep.equal([{ id: 2, sequence: 2 }])

    // is loading
    vm.$store.commit('setLoading', {y: false})
    expect(vm.$store.getters.isLoading).to.deep.equal({y: false})

    // backdoor key
    vm.$store.commit('setBackdoorKey', {x: 'abc'})
    expect(vm.$store.getters.backdoorKey).to.deep.equal({x: 'abc'})

    // backdoor inventories
    vm.$store.commit('setBackdoorInventories', {x: 'abc'})
    expect(vm.$store.getters.backdoorInventories).to.deep.equal({x: 'abc'})

    // backdoor promotions
    vm.$store.commit('setBackdoorPromotions', {x: 'abc'})
    expect(vm.$store.getters.backdoorPromotions).to.deep.equal({x: 'abc'})

    // remaining time
    vm.$store.commit('setRemainingTime', 123456789098765432)
    expect(vm.$store.getters.remainingTime).to.equal(123456789098765432)

    // orderCashbackAmount
    vm.$store.commit('setOrder', {})
    expect(vm.$store.getters.orderCashbackAmount).to.equal(0)
    vm.$store.commit('setOrder', {
      adjustments: []
    })
    expect(vm.$store.getters.orderCashbackAmount).to.equal(0)
    vm.$store.commit('setOrder', {
      adjustments: [{
        amount: -1000000,
        name: 'GLP S9 REG bank MANDIRI'
      }]
    })
    expect(vm.$store.getters.orderCashbackAmount).to.equal(1000000)
    vm.$store.commit('setOrder', {
      adjustments: [{
        amount: -250000,
        name: 'GLP S9 REG bank MANDIRI',
        promoCode: 'SGI-GIFT'
      }]
    })
    expect(vm.$store.getters.orderCashbackAmount).to.equal(0)

    // products and productGroups
    vm.$store.commit('setProducts', {a: 'b'})
    expect(vm.$store.getters.products).to.deep.equal({a: 'b'})
    vm.$store.commit('setProductGroups', [{a: 'b'}])
    expect(vm.$store.getters.productGroups).to.deep.equal([{a: 'b'}])

    // gimmicks
    vm.$store.commit('setGimmicks', [{a: 'b'}])
    expect(vm.$store.getters.gimmicks).to.deep.equal([{a: 'b'}])

    // stores and store types
    vm.$store.commit('setStores', [{a: 'b'}])
    expect(vm.$store.getters.stores).to.deep.equal([{a: 'b'}])
    vm.$store.commit('setStoreTypes', [{a: 'b'}])
    expect(vm.$store.getters.storeTypes).to.deep.equal([{a: 'b'}])

    // Dashboard info
    const dashboardInfoValue = {
      soldOrders: [1, 2],
      stocks: [1, 2],
      adjustmentUsages: [1, 2],
      cashbackDeposit: 1,
      products: [1, 2],
      promotions: [1, 2],
      gimmicks: [1, 2]
    }
    vm.$store.commit('setDashboardInfo', dashboardInfoValue)
    expect(vm.$store.getters.dashboardSoldOrders).to.deep.equal(dashboardInfoValue.soldOrders)
    expect(vm.$store.getters.dashboardStocks).to.deep.equal(dashboardInfoValue.stocks)
    expect(vm.$store.getters.dashboardAdjustmentUsages).to.deep.equal(dashboardInfoValue.adjustmentUsages)
    expect(vm.$store.getters.dashboardCashbackDeposit).to.deep.equal(dashboardInfoValue.cashbackDeposit)
    expect(vm.$store.getters.dashboardProducts).to.deep.equal(dashboardInfoValue.products)
    expect(vm.$store.getters.dashboardPromotions).to.deep.equal(dashboardInfoValue.promotions)
    expect(vm.$store.getters.dashboardGimmicks).to.deep.equal(dashboardInfoValue.gimmicks)

    // cmsContent
    vm.$store.commit('setCmsContent', {a: 'b'})
    expect(vm.$store.getters.cmsContent).to.deep.equal({a: 'b'})

    // regions
    vm.$store.commit('setRegions', {regionType: 'province', value: [{a: 'b'}]})
    expect(vm.$store.getters.regions).to.deep.equal({province: [{a: 'b'}]})

    // shippingAddress
    vm.$store.commit('setShippingAddress', {a: 'b'})
    expect(vm.$store.getters.shippingAddress).to.deep.equal({a: 'b'})

    // checkoutTime
    vm.$store.commit('setCheckoutTime', {a: 'b'})
    expect(vm.$store.getters.checkoutTime).to.deep.equal({a: 'b'})

    // visibleWaitingPage
    vm.$store.commit('setVisibleWaitingPage', {a: 'b'})
    expect(vm.$store.getters.visibleWaitingPage).to.deep.equal({a: 'b'})

     // user
    vm.$store.commit('setUser', {username: 'username'})
    expect(vm.$store.getters.user).to.deep.equal({username: 'username'})
 
     // login modal
    vm.$store.commit('setLoginModalVisible', true)
    expect(vm.$store.getters.loginModalVisible).to.be.true
  })

  it('setMobileDeviceStatus', (done) => {
    testAction(mainStore.actions.setMobileDeviceStatus, false, state, [
      {type: 'setIsMobile', payload: false}
    ], done)
  })

  it('resetCheckout', (done) => {
    testAction(mainStore.actions.resetCheckout, {}, state, [
      {type: 'setCurrentUser', payload: {init: true}},
      {type: 'setPersonalData', payload: {init: true}},
      {type: 'setShippingAddress', payload: {}},
      {type: 'setPaymentMethod', payload: {}},
      {type: 'setPickupStore', payload: {}},
      {type: 'setOrder', payload: {}},
      {type: 'setAppliedPromocodes', payload: ''}
    ], done)
  })

  it('saveCurrentUser with success', (done) => {
    var key = 'POST' + config.api.common.reserve_stock
    var res = mappedCommonRoutes[key].response
    let tmp = {
      identityNumber: '234234',
      identityType: 'sdsdf',
      sku: 3434,
      phoneNumber: '+62862616121',
      email: 'apa@apa.com',
      accessToken: '123'
    }
    if (state.captchaReserveOrder) {
      tmp.captha = 23423234
    }
    testAction(mainStore.actions.saveCurrentUser, {
      data: tmp,
      success: (d) => {
        d()
      }
    }, state, [
      {type: 'setCurrentUser', payload: tmp},
      {type: 'setCartId', payload: res.data.cartId}
    ], done)
  })
  it('saveCurrentUser no success', (done) => {
    var key = 'POST' + config.api.common.reserve_stock
    var res = mappedCommonRoutes[key].response
    let tmp = {
      identityNumber: '234234',
      identityType: 'sdsdf',
      sku: 3434,
      phoneNumber: '+62862616121',
      email: 'apa@apa.com',
      accessToken: '123'
    }
    if (state.captchaReserveOrder) {
      tmp.captha = 23423234
    }
    testAction(mainStore.actions.saveCurrentUser, {
      data: tmp
    }, state, [
      {type: 'setCurrentUser', payload: tmp},
      {type: 'setCartId', payload: res.data.cartId}
    ], done)
  })

  it('savePersonalData', (done) => {
    testAction(mainStore.actions.savePersonalData, {a: 'c'}, state, [
      {type: 'setPersonalData', payload: {a: 'c'}}
    ], done)
  })

  it('saveUserPhoneNumber', (done) => {
    testAction(mainStore.actions.saveUserPhoneNumber, {a: 'c'}, state, [
      {type: 'setUserPhoneNumber', payload: {a: 'c'}}
    ], done)
  })

  it('savePersonalDataCaptcha', (done) => {
    testAction(mainStore.actions.savePersonalDataCaptcha, {a: 'c'}, state, [
      {type: 'setPersonalDataCaptcha', payload: {a: 'c'}}
    ], done)
  })

  it('removePersonalDataCaptcha', (done) => {
    testAction(mainStore.actions.removePersonalDataCaptcha, {}, state, [
      {type: 'removePersonalDataCaptcha'}
    ], done)
  })

  it('addCart', (done) => {
    testAction(mainStore.actions.addCart, {data: {a: 'c'}}, state, [
      {type: 'setCartItem', payload: {a: 'c'}}
    ], done, [{type: 'resetCheckout'}])
  })

  it('addCart not reset', (done) => {
    testAction(mainStore.actions.addCart, {data: {a: 'c'}, reset: false}, state, [
      {type: 'addCartItem', payload: {a: 'c'}}
    ], done, [{type: 'resetCheckout'}])
  })

  it('getCaptchaReserveOrder with success', (done) => {
    var key = 'GET' + config.api.common.configs + '/' + config.app.config.reserve_order
    var value = mappedCommonRoutes[key].response.data === 'true'

    testAction(mainStore.actions.getCaptchaReserveOrder, {
      data: 'true',
      success: (d) => {
        d()
      }
    }, state, [
      {type: 'setCaptchaReserveOrder', payload: value}
    ], done)
  })

  it('getCaptchaReserveOrder with no success func', (done) => {
    var key = 'GET' + config.api.common.configs + '/' + config.app.config.reserve_order
    var configs = mappedCommonRoutes[key].response.data === 'true'

    testAction(mainStore.actions.getCaptchaReserveOrder, {
      data: 'false'
    }, state, [
      {type: 'setCaptchaReserveOrder', payload: configs}
    ], done)
  })

  it('getCaptchaReserveOrder fail', () => {
    testAction(mainStoreFail.actions.getCaptchaReserveOrder, {
      data: {},
      fail: (d) => {}
    }, state, [
      {type: 'setCaptchaReserveOrder', payload: {}}
    ], () => {})
  })

  it('getCaptchaCheckOrder with success', (done) => {
    var key = 'GET' + config.api.common.configs + '/' + config.app.config.check_order
    var value = mappedCommonRoutes[key].response.data === 'false'

    testAction(mainStore.actions.getCaptchaCheckOrder, {
      data: 'true',
      success: (d) => {
        d()
      }
    }, state, [
      {type: 'setCaptchaCheckOrder', payload: value}
    ], done)
  })

  it('getCaptchaCheckOrder with no success', (done) => {
    var key = 'GET' + config.api.common.configs + '/' + config.app.config.check_order
    var value = mappedCommonRoutes[key].response.data === 'false'

    testAction(mainStore.actions.getCaptchaCheckOrder, {
      data: 'true',
      success: (d) => {
        d()
      }
    }, state, [
      {type: 'setCaptchaCheckOrder', payload: value}
    ], done)
  })

  it('getCaptchaCheckOrder fail', () => {
    testAction(mainStoreFail.actions.getCaptchaCheckOrder, {
      data: {},
      fail: (d) => {}
    }, state, [
      {type: 'setCaptchaCheckOrder', payload: {}}
    ], () => {})
  })

  it('getOrder with success', (done) => {
    var key = 'GET' + config.api.common.orders + '/ABCDEFG'
    var configs = mappedCommonRoutes[key].response.data
    testAction(mainStore.actions.getOrder, {
      data: 'ABCDEFG',
      success: (d) => {
        d()
      }
    }, state, [
      {type: 'setOrder', payload: configs}
    ], done)
  })

  it('getOrder with no success func', (done) => {
    var key = 'GET' + config.api.common.orders + '/ABCDEFG'
    var configs = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getOrder, {
      data: 'ABCDEFG'
    }, state, [
      {type: 'setOrder', payload: configs}
    ], done)
  })

  it('getOrder fail', () => {
    testAction(mainStoreFail.actions.getOrder, {
      data: {},
      fail: (d) => {}
    }, state, [
      {type: 'setOrder', payload: {}}
    ], () => {})
  })

  it('setPickupStore', (done) => {
    testAction(mainStore.actions.setPickupStore, {a: '1'}, state, [
            {type: 'setPickupStore', payload: {a: '1'}}
    ], done)
  })

  it('setPaymentMethod', (done) => {
    testAction(mainStore.actions.setPaymentMethod, {a: '2'}, state, [
            {type: 'setPaymentMethod', payload: {a: '2'}}
    ], done)
  })

  it('setPaymentData', (done) => {
    testAction(mainStore.actions.setPaymentData, {a: '2'}, state, [
            {type: 'setPaymentData', payload: {a: '2'}}
    ], done)
  })

  it('resetPaymentSelection', (done) => {
    testAction(mainStore.actions.resetPaymentSelection, {a: 'c'}, state, [],
    done, [{type: 'setPaymentMethod', payload: {}},
    {type: 'setPromoToCart', payload: {discount: 0, promoId: ''}}])
  })

  it('repay with success', (done) => {
    var key = 'POST' + config.api.common.repay
    var configs = mappedCommonRoutes[key].response
    testAction(mainStore.actions.repay, {
      data: {
        orderId: 'order',
        identityNumber: 'identity'
      },
      success: (d) => {
        d()
        done
      }
    }, state, [
      {type: 'setPaymentData', payload: configs}
    ], done)
  })
  it('repay with no success func', (done) => {
    var key = 'POST' + config.api.common.repay
    var configs = mappedCommonRoutes[key].response
    testAction(mainStore.actions.repay, {
      data: {
        orderId: 'order',
        identityNumber: 'identity'
      }
    }, state, [
      {type: 'setPaymentData', payload: configs}
    ], done)
  })

  it('setOrderToCheckout', () => {
    vm.$store.commit('setCurrentUser', {})
    vm.$store.commit('setPickupStore', {})
    vm.$store.commit('setPaymentMethod', {})
    vm.$store.commit('setAppliedPromocodes', '')
    vm.$store.commit('setShippingAddress', {})

    let order = {
      customer: {a: 0},
      payment: {method: 2, installment: 0, details: {}},
      items: [{'sku': 'SAD-60001-00002-00001', 'name': 'Samsung Note8 Emas Gold', 'amount': 14000000, 'quantity': 1}],
      pickUpStore: {
        'active': true,
        'address': 'JL.KARTINI NO.44',
        'city': 'TEGAL',
        'description': '',
        'id': '8bbeabbe-1950-42fd-849b-01dd67843ed6',
        'name': 'SAMSUNG EXCLUSIVE PARTNER - KARTINI STORE',
        'province': 'JAWA TENGAH',
        'type': 'SEP'
      },
      adjustments: [
        {
          amount: -250000,
          name: 'Galaxy Launch Pack SGI S4 Promo',
          promoCode: 'S4GL4Z4Z7CCG'
        },
        {
          amount: 0,
          name: 'Galaxy Launch Pack VIP Access Code',
          promoCode: 'VDJU9ZB46RV'
        }
      ],
      shippingAddress: {
        'address': 'Jl. Kebon Melati No.1234 RT.1 RW.10',
        'province': 'DKI Jakarta',
        'city': 'Jakarta Pusat',
        'district': 'Tanah Abang',
        'subdistrict': 'Kebon Melati',
        'postalCode': '11230'
      }
    }

    vm.$store.dispatch('setOrderToCheckout', order)

    expect(vm.$store.getters.currentUser).to.deep.equal({a: 0})
    expect(vm.$store.getters.pickupStore.id).to.deep.equal(order.pickUpStore.id)
    expect(vm.$store.getters.paymentMethod).to.deep.equal({
      installment: 0,
      method: 2,
      klikBcaUserId: undefined
    })
    expect(vm.$store.getters.cart.items[0].sku).to.deep.equal(order.items[0].sku)
    expect(vm.$store.getters.appliedPromocodes).to.deep.equal(['S4GL4Z4Z7CCG'])
    expect(vm.$store.getters.shippingAddress.address).to.deep.equal(order.shippingAddress.address)
  })

  it('setOrderToCheckout', () => {
    vm.$store.commit('setCurrentUser', {})
    vm.$store.commit('setPickupStore', {})
    vm.$store.commit('setPaymentMethod', {})
    vm.$store.commit('setPaymentList', {
      id: 'BankLainnya',
      name: 'Bank Lainnya',
      type: 'Transfer',
      description: 'Bank Lainnya',
      icon: require('assets/images/banks/permata.png'),
      active: true,
      transferTypes: [
        {
          paymentMethod: 'AtmBersama',
          name: 'ATM'
        },
        {
          paymentMethod: 'VirtualAccountMandiri',
          name: 'Non ATM'
        }
      ],
      availableForChangePayment: true
    })
    let order = {
      customer: {a: 0},
      payment: {method: 'AtmBersama', installment: 0, details: {}},
      items: [{'sku': 'SAD-60001-00002-00001', 'name': 'Samsung Note8 Emas Gold', 'amount': 14000000, 'quantity': 1}],
      pickUpStore: {
        'active': true,
        'address': 'JL.KARTINI NO.44',
        'city': 'TEGAL',
        'description': '',
        'id': '8bbeabbe-1950-42fd-849b-01dd67843ed6',
        'name': 'SAMSUNG EXCLUSIVE PARTNER - KARTINI STORE',
        'province': 'JAWA TENGAH',
        'type': 'SEP'
      },
      adjustments: [
        {
          name: 'SGI Gift',
          amount: 25000,
          promoCode: 'PROMOCODE'
        },
        {
          name: 'token',
          amount: 0,
          promoCode: ''
        }
      ]
    }

    vm.$store.dispatch('setOrderToCheckout', order)

    expect(vm.$store.getters.currentUser).to.deep.equal({a: 0})
    expect(vm.$store.getters.pickupStore.id).to.deep.equal(order.pickUpStore.id)
    expect(vm.$store.getters.paymentMethod.method).to.equal('AtmBersama')
    expect(vm.$store.getters.cart.items[0].sku).to.deep.equal(order.items[0].sku)
  })

  it('getOrderStatus with success', (done) => {
    var key = 'POST' + config.api.common.check_order
    var configs = mappedCommonRoutes[key].response.data
    testAction(mainStore.actions.getOrderStatus, {
      data: {
        email: 'email@example.com',
        identityNumber: '0980980980',
        orderId: '234234234',
        captcha: '898908as098d09a8sd',
        phoneNumber: '09876556788'
      },
      success: (d) => {
        d()
        done
      }
    }, state, [
      {type: 'setOrder', payload: configs}
    ], done)
  })

  it('getOrderStatus with no success func', (done) => {
    var key = 'POST' + config.api.common.check_order
    var configs = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getOrderStatus, {
      data: {
        email: 'email@example.com',
        identityNumber: '0980980980',
        orderId: '234234234',
        captcha: '898908as098d09a8sd',
        phoneNumber: '09876556788'
      }
    }, state, [
      {type: 'setOrder', payload: configs}
    ], done)
  })

  it('getOrderStatus fail', () => {
    var key = 'POST' + config.api.common.check_order
    var configs = mappedCommonRoutes[key].response.data

    testAction(mainStoreFail.actions.getOrderStatus, {
      data: {
        email: 'email@example.com',
        identityNumber: '0980980980',
        orderId: '234234234',
        captcha: '898908as098d09a8sd',
        phoneNumber: '09876556788'
      },
      fail: (d) => {}
    }, state, [
      {type: 'setOrder', payload: configs}
    ])
  })

  // product stocks
  it('getProductStocks with success', (done) => {
    var key = 'GET' + config.api.common.inventories_stock + '?sku=ABC'
    var res = mappedCommonRoutes[key].response.data

    let stocks = {}
    for (const i in res) {
      let item = res[i]
      stocks[item.itemSku] = item.available
    }

    testAction(mainStore.actions.getProductStocks, {
      data: ['ABC'],
      success: (d) => {
        d()
      }
    }, state, [
      {type: 'setProductStocks', payload: stocks}
    ], done)
  })

  it('getProductStocks with no success func', (done) => {
    var key = 'GET' + config.api.common.inventories_stock + '?sku=ABC'
    var res = mappedCommonRoutes[key].response.data

    let stocks = {}
    for (const i in res) {
      let item = res[i]
      stocks[item.itemSku] = item.available
    }

    testAction(mainStore.actions.getProductStocks, {
      data: ['ABC']
    }, state, [
      {type: 'setProductStocks', payload: stocks}
    ], done)
  })

  it('getProductStocks fail', () => {
    testAction(mainStoreFail.actions.getProductStocks, {
      data: {},
      fail: (d) => {}
    }, state, [
      {type: 'setProductStocks', payload: {}}
    ], () => {})
  })

  it('sendNotifyMe', (done) => {
    testAction(mainStore.actions.sendNotifyMe, {
      data: {},
      success: () => { done() }
    }, state, [], () => {})
  })

  // promotions status
  it('getPromotionsStatus with success', (done) => {
    var key = 'GET' + config.api.common.promotion_availables + '?promoId=123'
    var res = mappedCommonRoutes[key].response.data

    let status = {}
    for (const i in res) {
      let item = res[i]
      status[item.promoId] = item.available
    }

    state.promotions = [
      {id: 123}
    ]

    testAction(mainStore.actions.getPromotionsStatus, {
      data: ['123'],
      success: (d) => {
        d()
      }
    }, state, [
      {type: 'setPromotionsStatus', payload: status}
    ], done)
  })

  it('getPromotionsStatus with no success func', (done) => {
    var key = 'GET' + config.api.common.promotion_availables + '?promoId=123'
    var res = mappedCommonRoutes[key].response.data

    let status = {}
    for (const i in res) {
      let item = res[i]
      status[item.promoId] = item.available
    }

    state.promotions = [
      {id: 123}
    ]

    testAction(mainStore.actions.getPromotionsStatus, {
      data: ['123']
    }, state, [
      {type: 'setPromotionsStatus', payload: status}
    ], done)
  })

  it('getProductStocks fail', () => {
    testAction(mainStoreFail.actions.getPromotionsStatus, {
      data: {},
      fail: (d) => {}
    }, state, [
      {type: 'setPromotionsStatus', payload: {}}
    ], () => {})
  })

  it('pay', (done) => {
    var key = 'POST' + config.api.common.pay
    var res = mappedCommonRoutes[key].response
    let tmp = {
      pickupStoreId: 'abc',
      customerDetail: {
        name: 'tes'
      },
      payment: {
        method: 'BCACreditCard'
      },
      promoId: '123',
      totalAmount: '10000',
      discount: '1000',
      paidAmount: '9000',
      cartId: 'abc12345'
    }
    if (state.captchaReserveOrder) {
      tmp.captha = 23423234
    }
    testAction(mainStore.actions.pay, tmp, state, [
      {type: 'setPaymentData', payload: res.data}
    ], done)
  })

  it('pay', (done) => {
    var key = 'POST' + config.api.common.pay
    var res = mappedCommonRoutes[key].response
    let tmp = {
      pickupStoreId: 'abc',
      customerDetail: {
        name: 'tes'
      },
      payment: {
        method: 'BCACreditCard'
      },
      promoId: '123',
      totalAmount: '10000',
      discount: '1000',
      paidAmount: '9000',
      cartId: 'abc12345'
    }
    testAction(mainStore.actions.pay, {
      tmp,
      success: (d) => {
        d()
      }
    }, state, [
      {type: 'setPaymentData', payload: res.data}
    ], done)
  })

  it('setPromoToCart', (done) => {
    testAction(mainStore.actions.setPromoToCart, {a: '1'}, state, [
            {type: 'setCart', payload: {items: [], a: '1'}}
    ], done)
  })

  it('showLoading', (done) => {
    testAction(mainStore.actions.showLoading, true, state, [
            {type: 'setLoading', payload: true}
    ], done)
  })

  it('hideLoading', (done) => {
    testAction(mainStore.actions.hideLoading, false, state, [
            {type: 'setLoading', payload: false}
    ], done)
  })

  it('checkBackdoorKey with success', (done) => {
    testAction(mainStore.actions.checkBackdoorKey, {
      data: 'ABCDEFGH',
      success: (d) => {
        d()
        done
      }
    }, state, [
      {type: 'setBackdoorKey', payload: 'ABCDEFGH'}
    ], done)
  })

  it('checkBackdoorKey with no success func', (done) => {
    testAction(mainStore.actions.checkBackdoorKey, {
      data: 'ABCDEFGH'
    }, state, [
      {type: 'setBackdoorKey', payload: 'ABCDEFGH'}
    ], done)
  })

  it('getBackdoorData', (done) => {
    testAction(mainStore.actions.getBackdoorData, {a: 'c'}, state, [], done, [
      {type: 'getInventoriesFromBackdoor'},
      {type: 'getPromotionsFromBackdoor'}
    ])
  })

  it('getRemainingTime with success', (done) => {
    var key = 'GET' + config.api.common.remaining_time
    var res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getRemainingTime, {
      success: (d) => {
        d()
      }
    }, state, [
      {type: 'setRemainingTime', payload: res.remainingTime}
    ], done)
  })

  it('getRemainingTime with no success func', (done) => {
    var key = 'GET' + config.api.common.remaining_time
    var res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getRemainingTime, {}
    , state, [
      {type: 'setRemainingTime', payload: res.remainingTime}
    ], done)
  })

  it('getRemainingTime fail', (done) => {
    testAction(mainStoreFail.actions.getRemainingTime, {
      fail: (d) => { done() }
    }, state, [
      {type: 'setRemainingTime', payload: {}}
    ], () => {})
  })

  it('setRemainingTime', (done) => {
    testAction(mainStore.actions.setRemainingTime, 111, state, [
      {type: 'setRemainingTime', payload: 111}
    ], done)
  })

  it('validate token with success', done => {
    testAction(mainStore.actions.validateToken, {
      data: {
        accessToken: '123456789',
        captcha: '12345'
      },
      success: () => { done() }
    }, state, [], () => {})
  })

  it('validate token with failure', done => {
    testAction(mainStoreFail.actions.validateToken, {
      data: {},
      fail: (d) => { done() }
    }, state, [], () => {})
  })

  it('validate promo code success', done => {
    testAction(mainStore.actions.validatePromoCode, {
      data: {
        promoCode: 'SAMSUNG-25',
        items: ['1', '2']
      },
      success: (d) => { d() }
    }, state, [
      {type: 'setAppliedPromocodes', payload: 'SAMSUNG-25'}
    ], done)
  })

  it('validate promo failed', done => {
    testAction(mainStoreFail.actions.validatePromoCode, {
      data: {},
      fail: (d) => { done() }
    }, state, [], () => {})
  })

  it('get dashboard info success', done => {
    var key = 'POST' + config.api.common.dashboard_info
    var res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getDashboardInfo, {
      success: (d) => { d() }
    }, state, [
      {type: 'setDashboardInfo', payload: res}
    ], done)
  })

  it('get dasboard info failed', done => {
    testAction(mainStoreFail.actions.getDashboardInfo, {
      data: {},
      fail: (d) => { done() }
    }, state, [], () => {})
  })

  it('getProducts success', done => {
    let key = 'GET' + config.api.common.products + '/regular'
    let res = mappedCommonRoutes[key].response.data
    let productRes = res.products
    let products = {}
    for (let index in productRes) {
      const item = productRes[index]
      const group = item.group.match('/-cnc/i') ? 'cnc' : 'delivery'
      if (!products[group]) {
        products[group] = []
      }
      products[group].push(item)
    }
    testAction(mainStore.actions.getProducts, {
      success: (d) => { d() }
    }, state, [
      {type: 'setProducts', payload: products},
      {type: 'setProductGroups', payload: res.productGroups}
    ], done)
  })

  it('getProducts failed', done => {
    testAction(mainStoreFail.actions.getProducts, {
      data: {},
      fail: (d) => { done() }
    }, state, [], () => {})
  })

  it('getGimmicks success', done => {
    let key = 'GET' + config.api.common.gimmicks
    let res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getGimmicks, {
      success: (d) => { d() }
    }, state, [
      {type: 'setGimmicks', payload: res}
    ], done)
  })

  it('getGimmicks failed', done => {
    testAction(mainStoreFail.actions.getGimmicks, {
      fail: (d) => { done() }
    }, state, [], () => {})
  })

  it('getStores with success', (done) => {
    var key = 'GET' + config.api.common.pickup_points
    var res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getStores, {
      success: (d) => {
        d()
      }
    }, state, [
      {type: 'setStores', payload: res.pickupPoints},
      {type: 'setStoreTypes', payload: res.pickupPointTypes}
    ], done)
  })

  it('getStores with no success func', (done) => {
    var key = 'GET' + config.api.common.pickup_points
    var res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getStores, {}
      , state, [
        {type: 'setStores', payload: res.pickupPoints},
        {type: 'setStoreTypes', payload: res.pickupPointTypes}
      ], done)
  })

  it('getStores fail', (done) => {
    testAction(mainStoreFail.actions.getStores, {
      fail: (d) => { done() }
    }, state, [], () => {})
  })

  it('getPromotion with success', (done) => {
    const key = 'GET' + config.api.common.promotions('regular')
    const response = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getPromotions, {
      success: (d) => { d() }
    }, state, [
      {type: 'setPromotions', payload: response}
    ], done)
  })

  it('getPromotion with failure', (done) => {
    testAction(mainStoreFail.actions.getPromotions, {
      fail: (d) => { done() }
    }, state, [], () => {})
  })

  it('getPayments success', done => {
    let key = 'GET' + config.api.common.payments
    let res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getPayments, {
      success: (d) => { d() }
    }, state, [
      {type: 'setPayments', payload: res.payments},
      {type: 'setPaymentTypes', payload: res.paymentTypes}
    ], done)
  })

  it('getPayments failed', done => {
    testAction(mainStoreFail.actions.getPayments, {
      fail: (d) => { done() }
    }, state, [], () => {})
  })

  it('getCmsContent', (done) => {
    let id = config.app.cmsContent.ids.mainTnc
    var key = 'GET' + config.api.common.content + '/' + id

    let tempObject = {}
    tempObject['timestamp'] = Date.now()
    tempObject['value'] = mappedCommonRoutes[key].response.data.content
    let cmsContentMap = {...state.cmsContent}
    cmsContentMap[id] = Object.assign({}, tempObject)
    testAction(mainStore.actions.getCmsContent, {
      id: id,
      success: (d) => { d() }
    }, state, [
      {type: 'setCmsContent', payload: cmsContentMap}
    ], done)
  })

  it('getCmsContent failed', done => {
    testAction(mainStoreFail.actions.getCmsContent, {
      data: {},
      fail: (d) => { done() }
    }, state, [], () => {})
  })

  it('getProvinces success', () => {
    let key = 'GET' + config.api.common.provinces
    let res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getProvinces, {
      success: (d) => {}
    }, state, [
      {type: 'setRegions', payload: {regionType: 'provinces', value: res}}
    ], () => {}, [
      {type: 'resetRegions'}
    ])
  })

  it('getProvinces failed', () => {
    testAction(mainStoreFail.actions.getProvinces, {
      fail: (d) => {}
    }, state, [], () => {}, [
      {type: 'resetRegions'}
    ])
  })

  it('getCities success', () => {
    let key = 'GET' + config.api.common.cities('ID-6')
    let res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getCities, {
      success: (d) => { }
    }, state, [
      {type: 'setRegions', payload: {regionType: 'cities', value: res}}
    ], () => {}, [
      {type: 'resetRegions'}
    ])
  })

  it('getCities failed', () => {
    testAction(mainStoreFail.actions.getCities, {
      fail: (d) => {}
    }, state, [], () => {}, [
      {type: 'resetRegions'}
    ])
  })

  it('getDistricts success', () => {
    let key = 'GET' + config.api.common.districs('ID-6-7')
    let res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getDistricts, {
      success: (d) => { }
    }, state, [
      {type: 'setRegions', payload: {regionType: 'districts', value: res}}
    ], () => {}, [
      {type: 'resetRegions'}
    ])
  })

  it('getDistricts failed', () => {
    testAction(mainStoreFail.actions.getDistricts, {
      fail: (d) => {}
    }, state, [], () => {}, [
      {type: 'resetRegions'}
    ])
  })

  it('getSubdistricts success', () => {
    let key = 'GET' + config.api.common.subdistricts('ID-6-7-6')
    let res = mappedCommonRoutes[key].response.data

    testAction(mainStore.actions.getSubdistricts, {
      success: (d) => { }
    }, state, [
      {type: 'setRegions', payload: {regionType: 'subdistricts', value: res}}
    ], () => {}, [
      {type: 'resetRegions'}
    ])
  })

  it('getSubdistricts failed', () => {
    testAction(mainStoreFail.actions.getSubdistricts, {
      fail: (d) => { }
    }, state, [], () => {}, [
      {type: 'resetRegions'}
    ])
  })

  it('setShippingAddress', (done) => {
    testAction(mainStore.actions.setShippingAddress, {a: 'b'}, state, [
      {type: 'setShippingAddress', payload: {a: 'b'}}
    ], done)
  })

  it('setCheckoutTime', done => {
    const time = 1000000
    const mutation = [
      {type: 'setCheckoutTime', payload: time}
    ]
    testAction(mainStore.actions.setCheckoutTime, time, state, mutation, done)
  })

  it('setVisibleWaitingPage', done => {
    const mutation = [
      {type: 'setVisibleWaitingPage', payload: false}
    ]
    testAction(mainStore.actions.setVisibleWaitingPage, false, state, mutation, done)
  })

  it('setSelectedAddress', done => {
    const address = 'address'
    const mutation = [
      {type: 'setSelectedAddress', payload: address}
    ]
    testAction(mainStore.actions.setSelectedAddress, address, state, mutation, done)
  })
  it('getUsers', done => {
    const mutations = [
      {
        type: 'setUser',
        payload: {username: 'username'}
      }
    ]
    testAction(mainStore.actions.getUsers, {}, state, mutations, done)
  })

  it('getUsers failed', done => {
    testAction(mainStoreFail.actions.getUsers, {error: () => done()}, state, [], done)
  })

  it('set login modal visibility', done => {
    const mutations = [
      {
        type: 'setLoginModalVisibility',
        payload: true
      }
    ]
    testAction(mainStore.actions.setLoginModalVisibility, true, state, mutations, done)
  })

  it('login success', done => {
    const payload = {
      username: 'username',
      password: 'password'
    }
    const mutations = [
      {
        type: 'setUser',
        payload: {
          username: 'username'
        }
      }
    ]
    testAction(mainStore.actions.login, {payload}, state, mutations, done)
  })

  it('login failed', done => {
    const payload = {
      username: 'username',
      password: 'password'
    }
    testAction(mainStoreFail.actions.login, {payload, error: () => done()}, state, [], done)
  })
})
