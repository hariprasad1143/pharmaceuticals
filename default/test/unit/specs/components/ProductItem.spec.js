import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import ProductItem from 'src/components/ProductItem'
import i18n from '@common/src/i18n'

describe('Product Item', () => {
  var vm = null
  const Constructor = Vue.extend(ProductItem)

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

  it('buyNow', (done) => {
    vm.$on('buyNow', () => {
      done()
    })

    vm.buyNow()
  })

  it('notifyMe', (done) => {
    vm.$on('notifyMe', () => {
      done()
    })

    vm.notifyMe()
  })

  it('isAvailable', () => {
    vm.item = {sku: 'a'}

    vm.$store.commit('setProductStocks', {
      a: false
    })

    expect(vm.isAvailable).to.equal(false)

    vm.$store.commit('setProductStocks', {
      a: true
    })

    expect(vm.isAvailable).to.equal(true)
  })
})
