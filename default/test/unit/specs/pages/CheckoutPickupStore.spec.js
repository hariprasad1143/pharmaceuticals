import Vue from 'vue'
import router from 'src/router'
import CheckoutPickupStore from 'src/pages/CheckoutPickupStore'
import config from '@common/src/config'
import i18n from '@common/src/i18n'
import Vuex from 'vuex'

describe('CheckoutPickupStore.vue', () => {
  const Constructor = Vue.extend(CheckoutPickupStore)
  let getters, actions, store, vm
  beforeEach(() => {
    getters = {
      isLoggedIn: state => state.isLoggedIn
    }

    actions = {
      getStores: sinon.stub(),
      setPickupStore: sinon.stub(),
      resetPaymentSelection: sinon.stub()
    }

    store = new Vuex.Store({
      state: {
        isLoggedIn: true
      },
      getters,
      actions
    })
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
    expect(actions.resetPaymentSelection.called).to.equal(true)
    expect(actions.setPickupStore.called).to.equal(true)
    expect(actions.getStores.called).to.equal(true)
  })

  it('selectStore', () => {
    vm.selectStore()
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.payment_selection)
    })
  })

  it('editPersonalData', () => {
    vm.editPersonalData()
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.checkout)
    })
  })

  it('clearSelectedPickupStore', () => {
    vm.clearSelectedPickupStore()
    expect(actions.setPickupStore.called).to.equal(true)
  })

  it('clearSelectedPayment', () => {
    vm.clearSelectedPayment()
    expect(actions.resetPaymentSelection.called).to.equal(true)
  })

  it('validateState no redirect', () => {
    store.state.isLoggedIn = false
    vm.validateState()
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.product_listing)
    })
  })
})
