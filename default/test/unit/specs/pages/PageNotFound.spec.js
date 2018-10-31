import Vue from 'vue'
import router from 'src/router'
import PageNotFound from 'src/pages/PageNotFound'
import config from '@common/src/config'
import i18n from '@common/src/i18n'

describe('PageNotFound.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(PageNotFound)
    vm = new Constructor({
      router,
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
