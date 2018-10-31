import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import Checkout from 'src/pages/Checkout'
import config from '@common/src/config'
import i18n from '@common/src/i18n'

describe('Checkout.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(Checkout)
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })

  it('checkout savePersonalData to payment page', () => {
    vm.$store.commit('setPickupStore', {id: 'toko1'})
    vm.savePersonalData()
    expect(vm.$route.path).to.equal(config.app.pages.payment_selection)
  })

  // it('checkout savePersonalData to pickupPage', done => {
  //   vm.$store.commit('setPickupStore', {})
  //   vm.savePersonalData()
  //   vm.$nextTick(() => {
  //     expect(vm.$route.path).to.equal(config.app.pages.pickup_selection)
  //     done()
  //   })
  // })

  it('validateState valid', (done) => {
    expect(vm.$route.path).to.equal(config.app.pages.payment_selection)
    vm.$store.commit('setCartItem', {sku: 1})
    vm.$store.commit('addCartItem', {sku: 2})
    vm.validateState()
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.payment_selection)
      done()
    })
  })

  it('validateState invalid', (done) => {
    vm.$store.commit('setCartItem', [{sku: 1}])
    vm.validateState()
    vm.$nextTick(() => {
      expect(vm.cartCount).to.be.below(2)
      done()
    })
  })

  it('editPickupStore', (done) => {
    vm.editPickupStore()
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.pickup_selection)
      done()
    })
  })

  it('clearSelectedPayment', (done) => {
    const oldDispatch = vm.$store.dispatch
    vm.$store.dispatch = (action) => {
      expect(action).to.equal('resetPaymentSelection')
      vm.$store.dispatch = oldDispatch
      done()
    }
    vm.clearSelectedPayment()
  })
})
