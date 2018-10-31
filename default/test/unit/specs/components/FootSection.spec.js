import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import FootSection from 'src/components/FootSection'
import i18n from '@common/src/i18n'

describe('FootSection.vue', () => {
  var vm = null
  const Constructor = Vue.extend(FootSection)
  before(() => {
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('initalize well', () => {
    vm.$mount()
  })
})
