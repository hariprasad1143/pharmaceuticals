import Vue from 'vue'
import router from '@/router'
import store from '@common/src/store'
import i18n from '@common/src/i18n'
import LoadingScreen from 'src/components/LoadingScreen'

describe('LoadingScreen.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(LoadingScreen)
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
})
