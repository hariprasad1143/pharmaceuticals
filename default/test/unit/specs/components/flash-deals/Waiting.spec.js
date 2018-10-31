import Vue from 'vue'
import Vuex from 'vuex'
import Waiting from 'src/components/flash-deals/Waiting'

describe('Waiting.vue', () => {
  let vm, actions, getters, store
  const Constructor = Vue.extend(Waiting)

  beforeEach(() => {
    actions = {
      setVisibleWaitingPage: sinon.stub()
    }

    getters = {}

    store = new Vuex.Store({
      state: {},
      actions,
      getters
    })

    vm = new Constructor({
      store
    }).$mount()
  })

  it('disableCloseButton', () => {
    vm.remainingTime = 1000000
    expect(vm.disableCloseButton).to.equal(true)
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

  it('close', () => {
    vm.close()
    expect(actions.setVisibleWaitingPage.called).to.equal(true)
  })

  it('clear interval when destroyed', () => {
    const spy = sinon.spy(window, 'clearInterval')
    vm.$destroy()
    expect(spy.called).to.equal(true)
    spy.restore()
  })
})