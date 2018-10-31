import Vue from 'vue'
import router from 'src/router'
import UnexpectedError from 'src/pages/UnexpectedError'
import i18n from '@common/src/i18n'
import config from '@common/src/config'

describe('UnexpectedError.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(UnexpectedError)
    vm = new Constructor({
      router,
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })

  it('goToHome', done => {
    vm.goToHome()
    vm.$nextTick(() => {
      try {
        expect(vm.$route.path).to.equal(config.app.pages.home)
        done()
      } catch (e) {
        done()
        throw e
      }
    })
  })
})
