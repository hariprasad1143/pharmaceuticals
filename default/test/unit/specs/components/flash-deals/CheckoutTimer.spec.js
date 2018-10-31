import Vue from 'vue'
import Vuex from 'vuex'
import CheckoutTimer from 'src/components/flash-deals/CheckoutTimer'

describe('LandingPage.vue', () => {
  let vm, actions, getters, store
  const Constructor = Vue.extend(CheckoutTimer)

  beforeEach(() => {
    actions = {}

    getters = {
      checkoutTime: state => state.checkoutTime
    }

    store = new Vuex.Store({
      state: {
        checkoutTime: 100000
      },
      actions,
      getters
    })

    vm = new Constructor({
      store
    }).$mount()
  })

  it('startCountdown', () => {
    let spy = sinon.spy(window, 'clearInterval')
    vm.remainingTime = 1000
    vm.startCountdown()
    expect(spy.called).to.equal(true)
    spy.restore()
  })

  it('startCountdown empty checkoutTime', () => {
    store = new Vuex.Store({
      state: {},
      actions,
      getters
    })
    vm = new Constructor({
      store
    }).$mount()

    let spy = sinon.spy(window, 'clearInterval')
    vm.remainingTime = 1000
    vm.startCountdown()
    expect(spy.called).to.equal(true)
    spy.restore()
  })

  it('applyCountdownChanges remainingTime >= 1', () => {
    let spy = sinon.spy(window, 'clearInterval')
    vm.remainingTime = 10000
    vm.applyCountdownChanges()
    expect(spy.called).to.equal(false)
    spy.restore()
  })

  it('applyCountdownChanges remainingTime < 1', () => {
    let spy = sinon.spy(window, 'clearInterval')
    vm.remainingTime = -10000
    vm.applyCountdownChanges()
    expect(spy.called).to.equal(true)
    spy.restore()
  })

  it('clear interval when destroyed', () => {
    const spy = sinon.spy(window, 'clearInterval')
    vm.$destroy()
    expect(spy.called).to.equal(true)
    spy.restore()
  })
})
