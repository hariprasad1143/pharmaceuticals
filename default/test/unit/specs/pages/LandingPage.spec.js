import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import LandingPage from 'src/pages/LandingPage'

describe('LandingPage.vue', () => {
  let vm, actions, getters, store, router, mutations
  const Constructor = Vue.extend(LandingPage)

  beforeEach(() => {
    actions = {
      getProductStocks: sinon.stub(),
      getProducts: sinon.stub(),
      setCheckoutTime: sinon.stub(),
      getUsers: sinon.stub(),
      addCart: sinon.stub(),
      setLoginModalVisibility: sinon.stub()
    }

    mutations = {
      setUser (state, user) {
        state.user = user
      }
    }

    getters = {
      products: state => state.products,
      user: state => state.user
    }

    store = new Vuex.Store({
      state: {
        products: {},
        user: {}
      },
      actions,
      getters,
      mutations
    })

    router = new VueRouter({
      routes: [{
        path: '/flash-sale'
      }]
    })

    vm = new Constructor({
      store,
      router
    }).$mount()
  })

  it('toggleVisibleCncInfo', () => {
    vm.visibleCncInfo = false
    vm.toggleVisibleCncInfo()
    expect(vm.visibleCncInfo).to.equal(true)
  })

  it('getProductStocks', () => {
    store.state.products = {
      'cnc': [{
        name: 'PRODUCT-1',
        sku: 'SKU-1'
      }],
      'delivery': [{
        name: 'PRODUCT-2',
        sku: 'SKU-2'
      }]
    }
    vm.getProductStocks()
    expect(actions.getProductStocks.called).to.equal(true)
  })

  it('getProductStocks empty values', () => {
    store.state.products = {}
    expect(vm.getProductStocks()).to.equal(undefined)
  })

  it('buyNow not login', () => {
    store.commit('setUser', {})
    vm.buyNow()
    expect(actions.getUsers.called).to.equal(true)
  })

  it('buy now login', () => {
    store.commit('setUser', {username: 'abc'})
    vm.buyNow()
    expect(actions.setCheckoutTime.called).to.be.true
    expect(actions.addCart.called).to.be.true
  })

  it('showLoginModal', () => {
    vm.showLoginModal()
    expect(actions.setLoginModalVisibility.called).to.be.true
  })
  it('flashsaleStarted', () => {
    vm.remainingTime = 1000000
    expect(vm.flashsaleStarted).to.equal(false)
  })

  it('clear interval when destroyed', () => {
    const spy = sinon.spy(window, 'clearInterval')
    vm.$destroy()
    expect(spy.called).to.equal(true)
    spy.restore()
  })

  it('startCountdown', () => {
    const spy = sinon.spy(window, 'clearInterval')
    vm.startCountdown()
    expect(spy.called).to.equal(true)
    spy.restore()
  })

  it('applyCountdownChanges remainingTime >= 1', () => {
    let spy = sinon.spy(window, 'clearInterval')
    vm.remainingTime = 100000
    vm.applyCountdownChanges()
    expect(spy.called).to.equal(false)
    spy.restore()
  })

  it('applyCountdownChanges remainingTime < 1', () => {
    let spy = sinon.spy(window, 'clearInterval')
    vm.remainingTime = -100000
    vm.applyCountdownChanges()
    expect(spy.called).to.equal(true)
    spy.restore()
  })
})
