import Vue from 'vue'
import Vuex from 'vuex'
import ProductList from 'src/components/flash-deals/ProductList'

describe('ProductList.vue', () => {
  let vm, actions, getters, store
  const Constructor = Vue.extend(ProductList)

  beforeEach(() => {
    actions = {}

    getters = {
      products: state => state.products,
      productStocks: state => state.productStocks
    }

    store = new Vuex.Store({
      state: {
        products: {
          'delivery': [{
            sku: 'SKU-1'
          }]
        },
        productStocks: {
          'SKU-1': true,
          'SKU-2': false
        }
      },
      actions,
      getters
    })

    vm = new Constructor({
      store,
      propsData: {
        productType: 'delivery'
      }
    }).$mount()
  })

  it('productListing', () => {
    expect(vm.productListing).to.deep.equal([{sku: 'SKU-1'}])
  })

  it('productListing empty products', () => {
    store = new Vuex.Store({
      actions,
      getters
    })
    vm = new Constructor({
      store,
      propsData: {
        productType: 'delivery'
      }
    }).$mount()
    expect(vm.productListing).to.deep.equal(undefined)
  })

  it('buyNow', () => {
    const item = {
      sku: 'SKU-1'
    }
    const spy = sinon.spy(vm.$store, 'dispatch')
    vm.buyNow(item)
    expect(spy.called).to.equal(true)
    spy.restore()
  })

  it('buyNow empty products', () => {
    store.state.products = []
    const item = {
      sku: 'SKU-1'
    }
    expect(vm.buyNow(item)).to.equal(undefined)
  })

  it('validateBuyNow', () => {
    const item = {
      sku: 'SKU-1'
    }
    const spy = sinon.spy(vm, '$emit')
    vm.validateBuyNow(item)
    expect(spy.called).to.equal(true)
    spy.restore()
  })

  it('validateBuyNow OOS', () => {
    vm.visibleOosModal = false
    const item = {
      sku: 'SKU-2'
    }
    vm.validateBuyNow(item)
    expect(vm.visibleOosModal).to.equal(true)
  })

  it('toggleOosModal', () => {
    vm.visibleOosModal = false
    vm.toggleOosModal()
    expect(vm.visibleOosModal).to.equal(true)
  })
})
