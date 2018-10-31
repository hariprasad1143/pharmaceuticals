import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import ProductListSelected from 'src/components/ProductListSelected'
import i18n from '@common/src/i18n'
import config from '@common/src/config'

describe('Product List Selected Accessories', () => {
  var vm = null
  const Constructor = Vue.extend(ProductListSelected)

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

  it('validateState', (done) => {
    vm.$router.push(config.app.pages.product_accessories)
    vm.$store.commit('setCart', {items: []})
    vm.validateState()
    vm.$nextTick(() => {
      expect(vm.cart.items.length).to.be.below(1)
      expect(vm.$route.path).to.equal(config.app.pages.product_listing)
      done()
    })
  })
})
