import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import Countdown from 'src/pages/Countdown'
import config from '@common/src/config'
import i18n from '@common/src/i18n'
import util from '@common/src/util'

describe('CountDown.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(Countdown)
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })

  it('init', (done) => {
    const oldDispatch = vm.$store.dispatch
    vm.$store.dispatch = (action) => {
      expect(action).to.equal('getRemainingTime')
      vm.$store.dispatch = oldDispatch
      done()
    }
    vm.init()
  })

  it('successGetRemainingTime remainingTime exist', (done) => {
    const oldStartCountdown = vm.startCountdown
    vm.startCountdown = () => {
      vm.startCountdown = oldStartCountdown
      done()
    }
    let remainingTime = 20000
    vm.$store.dispatch('setRemainingTime', remainingTime)
    vm.successGetRemainingTime()
  })

  it('successGetRemainingTime no remainingTime', (done) => {
    const oldRedirectToHome = vm.redirectToHome
    vm.redirectToHome = () => {
      vm.redirectToHome = oldRedirectToHome
      done()
    }
    let remainingTime = 0
    vm.$store.dispatch('setRemainingTime', remainingTime)
    vm.successGetRemainingTime()
  })

  it('redirectToHome referrer', (done) => {
    const oldGoUrl = util.goUrl
    vm.$router.push(config.app.pages.countdown + '?ref=' + config.app.pages.vip_access)
    vm.$nextTick(() => {
      util.goUrl = (path) => {
        expect(path).to.equal(config.app.pages.vip_access)
        util.goUrl = oldGoUrl
        done()
      }
      vm.redirectToHome()
    })
  })

  it('redirectToHome referrer', (done) => {
    const oldGoUrl = util.goUrl
    vm.$router.push(config.app.pages.countdown)
    vm.$nextTick(() => {
      util.goUrl = (path) => {
        expect(path).to.equal(config.app.pages.home)
        util.goUrl = oldGoUrl
        done()
      }
      vm.redirectToHome()
    })
  })

  it('currentLocation', () => {
    vm.$router.push(config.app.pages.countdown)
    vm.$nextTick(() => {
      expect(vm.currentLocation).to.equal('/countdown')
    })
  })

  it('referrer', () => {
    vm.$router.push(config.app.pages.countdown + '?ref=' + config.app.pages.vip_access)
    vm.$nextTick(() => {
      expect(vm.referrer).to.equal(config.app.pages.vip_access)
    })
  })

  it('referrer default', () => {
    vm.$router.push(config.app.pages.countdown)
    vm.$nextTick(() => {
      expect(vm.referrer).to.equal(config.app.pages.home)
    })
  })

  it('reloadPage', (done) => {
    vm.$router.push(config.app.pages.countdown)
    vm.$nextTick(() => {
      const oldGoUrl = util.goUrl
      util.goUrl = (path) => {
        expect(path).to.equal(config.app.pages.countdown)
        util.goUrl = oldGoUrl
        done()
      }
      vm.reloadPage()
    })
  })

  it('remainingTime watch', (done) => {
    const oldRedirectToHome = vm.redirectToHome
    vm.$nextTick(() => {
      vm.redirectToHome = () => {
        vm.redirectToHome = oldRedirectToHome
        done()
      }
      let now = 0
      vm.$store.dispatch('setRemainingTime', now)
    })
  })

  it('clear interval when destroyed', () => {
    const spy = sinon.spy(window, 'clearInterval')
    vm.$destroy()
    expect(spy.called).to.equal(true)
    spy.restore()
  })
})
