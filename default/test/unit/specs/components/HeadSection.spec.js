import Vue from 'vue'
import router from '@/router'
import Vuex from 'vuex'
import HeadSection from 'src/components/HeadSection'
import i18n from '@common/src/i18n'
import config from '@common/src/config'
import Cookies from 'js-cookie'

describe('HeadSection.vue', () => {
  var vm = null
  let store, actions
  before(() => {
    actions = {
      getUsers: sinon.stub(),
      setLoginModalVisibility: sinon.stub()
    }
    store = new Vuex.Store({
      actions
    })
    const Constructor = Vue.extend(HeadSection)
    vm = new Constructor({
      router,
      store,
      i18n
    })
    window._bwaq = {push: () => {}}
  })

  it('mount well', () => {
    vm.$mount()
  })

  it('currentLocation', () => {
    vm.$router.push(config.app.pages.countdown)
    vm.$nextTick(() => {
      expect(vm.currentLocation).to.equal('/countdown')
    })
  })

  it('logoPath', () => {
    vm.$router.push(config.app.pages.product_accessories)
    vm.$nextTick(() => {
      expect(vm.logoPath).to.equal('/')
    })
  })

  it('logoPath disable home', () => {
    vm.$router.push(config.app.pages.countdown)
    vm.$nextTick(() => {
      expect(vm.logoPath).to.equal('#')
    })
  })

  it('checkLogin', () => {
    vm.checkLogin()
    expect(actions.getUsers.called).to.be.true
  })
  
  it('setLoginModalVisibility', () => {
    vm.setLoginModalVisibility(true)
    expect(actions.setLoginModalVisibility.called).to.be.true
  })
})
