import Vue from 'vue'
import router from 'src/router'
import Vuex from 'vuex'
import ProductAccessories from 'src/components/ProductAccessories'
import i18n from '@common/src/i18n'
import config from '@common/src/config'
import errorHandler from '@common/src/util/error-handler'

describe('Product Accessories', () => {
  let vm, actions, getters, store, mutations
  const Constructor = Vue.extend(ProductAccessories)

  beforeEach(() => {
    actions = {
      getProductStocks () {},
      getGimmicks () {},
      addCart () {},
      showLoading: sinon.stub(),
      hideLoading: sinon.stub()
    }
    mutations = {
      setCartItem (state, value) {
        const tmp = Object.assign({}, state.cart)
        tmp.items = [value]
        state.cart = tmp
      },
      setGimmicks (state, value) {
        state.gimmicks = value
      },
      setCart (state, value) {
        state.cart = value
      }
    }
    getters = {
      productStocks: state => state.productStocks,
      cart: state => state.cart,
      gimmicks: state => state.gimmicks
    }

    store = new Vuex.Store({
      state: {
        productStocks: {
          acc1: true,
          acc2: false
        },
        cart: {
          items: [
            {
              sku: 'reg1',
              group: 's9'
            }
          ]
        },
        gimmicks: [
          {
            sku: 'acc1',
            groups: ['s9']
          },
          {
            sku: 'acc2',
            groups: ['s9+']
          }
        ]
      },
      actions,
      getters,
      mutations
    })
    vm = new Constructor({
      i18n,
      store,
      router
    })
  })

  it('initalize well', () => {
    vm.$mount()
  })

  it('selectNow', () => {
    let dispatchSpy = sinon.spy(vm.$store, 'dispatch')
    let routerSpy = sinon.spy(vm.$router, 'push')
    const item = {sku: 1}
    vm.selectNow(item)
    dispatchSpy.should.have.been.calledOnce
    dispatchSpy.should.have.been.calledWith('addCart', {data: item, reset: false})
    trackClickAccesoriesSpy.should.have.been.calledOnce
    trackClickAccesoriesSpy.should.have.been.calledWith(item)
    routerSpy.should.have.been.calledOnce
    routerSpy.should.have.been.calledWith(config.app.pages.checkout)
    dispatchSpy.restore()
    trackClickAccesoriesSpy.restore()
    routerSpy.restore()
  })

  it('gimmicksByGroup', () => {
    let result = [
      {
        sku: 'acc1',
        groups: ['s9']
      }
    ]
    expect(vm.gimmicksByGroup).to.deep.equal(result)
    vm.$store.commit('setCart', {items: []})
    expect(vm.gimmicksByGroup).to.be.empty
  })

  it('checkAvailableStock', () => {
    expect(vm.checkAvailableStock({sku: 'acc1'})).to.be.true
    expect(vm.checkAvailableStock({sku: 'acc2'})).to.be.false
  })

  it('isVisibleAccessories', () => {
    // in stock
    expect(vm.isVisibleAccessories({sku: 'acc1', alwaysShown: true, active: true})).to.equal(true)
    expect(vm.isVisibleAccessories({sku: 'acc1', alwaysShown: false, active: true})).to.equal(true)
    // out of stock
    expect(vm.isVisibleAccessories({sku: 'acc2', alwaysShown: true, active: true})).to.equal(true)
    expect(vm.isVisibleAccessories({sku: 'acc2', alwaysShown: false, active: true})).to.equal(false)
  })

  it('notifyMe', () => {
    vm.visibleNotifyMe = false
    vm.notifyMe({sku: 'a'})
    expect(vm.visibleNotifyMe).to.equal(true)
    expect(vm.selectedSku).to.equal('a')
  })

  it('onNotifyMeClose', () => {
    vm.visibleNotifyMe = true
    vm.onNotifyMeClose()
    expect(vm.visibleNotifyMe).to.equal(false)
  })

  it('getGimmicks', () => {
    let dispatchSpy = sinon.spy(vm.$store, 'dispatch')
    vm.getGimmicks()
    dispatchSpy.should.have.callCount(2)
    dispatchSpy.should.have.been.calledWith('getGimmicks', {
      success: vm.getProductStocks,
      fail: vm.failGetGimmicks
    })
    dispatchSpy.restore()
    expect(actions.showLoading.called).to.equal(true)
  })

  it('getProductStocks', () => {
    let dispatchSpy = sinon.spy(vm.$store, 'dispatch')
    vm.getProductStocks()
    dispatchSpy.should.have.been.calledOnce
    dispatchSpy.should.have.been.calledWith('getProductStocks', {
      data: ['acc1', 'acc2'],
      success: vm.hideLoading
    })
    dispatchSpy.restore()
  })

  it('failGetGimmicks', () => {
    vm.$refs = {
      simplert: {
        openSimplert: () => {}
      }
    }
    let response = {
      body: {
        code: 429,
        status: 'BUSY'
      }
    }
    let errorHandlerSpy = sinon.spy(errorHandler, 'getMessagesFromResponse')
    let simplertSpy = sinon.spy(vm.$refs.simplert, 'openSimplert')
    vm.failGetGimmicks(response)
    errorHandlerSpy.should.have.been.calledOnce
    simplertSpy.should.have.been.calledOnce
    errorHandlerSpy.should.have.been.calledWith(vm, response)
    errorHandlerSpy.restore()
    simplertSpy.restore()
    expect(actions.hideLoading.called).to.equal(true)
  })
})
