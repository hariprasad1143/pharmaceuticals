import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import ProductAccessories from 'src/pages/ProductAccessories'
import i18n from '@common/src/i18n'

describe('ProductListing.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(ProductAccessories)
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
