import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import i18n from '@common/src/i18n'
import App from 'src/App'

describe('App.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(App)
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })

  it('is in development?', () => {
    // because we are in test mode, then development is just true
    expect(vm.isDevelopmentMode).to.equal(true)
  })

  it('handleResize < 768', () => {
    vm.handleResize(600)
    expect(vm.$store.getters.isMobile).to.equal(true)
  })

  it('handleResize > 768', () => {
    vm.handleResize(1000)
    expect(vm.$store.getters.isMobile).to.equal(false)
  })

  it('detachResizeHandler', () => {
    vm.handleResize(1000)
    expect(vm.$store.getters.isMobile).to.equal(false)
    vm.detachResizeHandler()
  })

  it('destroyed', () => {
    vm.$destroy()
  })
})
