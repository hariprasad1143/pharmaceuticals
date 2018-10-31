import Vue from 'vue'
import router from 'src/router'
import ProductItemAccessories from 'src/components/ProductItemAccessories'
import i18n from '@common/src/i18n'
import Vuex from 'vuex'

describe('Product Item Accessories', () => {
  const Constructor = Vue.extend(ProductItemAccessories)
  let getters, actions, store, vm

  beforeEach(() => {
    getters = {
      cmsContent: state => state.cmsContent,
      cart: state => state.cart
    }

    actions = {
      getCmsContent: sinon.stub()
    }

    store = new Vuex.Store({
      state: {
        cmsContent: {},
        cart: {items: [{group: 'Note9-128gb'}]}
      },
      getters,
      actions
    })
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('mount well', () => {
    vm.$mount()
    expect(actions.getCmsContent.called).to.equal(true)
  })

  it('selectNow', (done) => {
    vm.$on('selectNow', () => {
      done()
    })

    vm.selectNow()
  })

  it('notifyMe', (done) => {
    vm.$on('notifyMe', () => {
      done()
    })

    vm.notifyMe()
  })

  it('productGroup', () => {
    store.state.cart = {items: []}
    expect(vm.productGroup).to.be.empty

    store.state.cart = {items: [{group: 'Note9-128gb'}]}
    expect(vm.productGroup).to.equal('note9-128gb')
  })

  it('remarkContent', () => {
    let result = '<p>Hello World</p>'
    store.state.cart = {items: [{group: 'Note9-128gb'}]}
    store.state.cmsContent = {'flashsale-gimmick-remark-note9-128gb': {value: result}}
    expect(vm.remarkContent).to.equal(result)

    store.state.cart = {items: []}
    expect(vm.remarkContent).to.be.empty

    store.state.cart = {items: [{group: 'Note9-128gb'}]}
    store.state.cmsContent = {}
    expect(vm.remarkContent).to.be.empty
  })
})
