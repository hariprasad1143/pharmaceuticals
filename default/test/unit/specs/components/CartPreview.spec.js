import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import CartPreview from 'src/components/CartPreview'
import i18n from '@common/src/i18n'
import config from '@common/src/config'

describe('Cart Preview', () => {
  var vm = null
  const Constructor = Vue.extend(CartPreview)

  before(() => {
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('initialize well', () => {
    vm.$mount()
  })

  it('isCheckoutCompleteAndInCheckoutPaymentSelection checkout not complete', (done) => {
    vm.$store.commit('setPaymentMethod', {})
    vm.$store.commit('setCart', {items: []})
    vm.$store.commit('setPickupStore', {})
    vm.$router.push(config.app.pages.checkout)
    vm.$nextTick(() => {
      expect(vm.isCheckoutCompleteAndInCheckoutPaymentSelection()).to.equal(false)
      done()
    })
  })

  it('isCheckoutCompleteAndInCheckoutPaymentSelection not in payment selection page', (done) => {
    vm.$store.commit('setPaymentMethod', {method: 'KlikBCA'})
    vm.$store.commit('setCart', {cartId: 1, items: []})
    vm.$store.commit('setPickupStore', {id: 'toko1'})
    vm.$router.push(config.app.pages.checkout)
    vm.$nextTick(() => {
      expect(vm.isCheckoutCompleteAndInCheckoutPaymentSelection()).to.equal(false)
      done()
    })
  })

  it('isCheckoutCompleteAndInCheckoutPaymentSelection', (done) => {
    vm.$store.commit('setPaymentMethod', {method: 'KlikBCA'})
    vm.$store.commit('setCart', {cartId: 1, items: []})
    vm.$store.commit('setPickupStore', {id: 'toko1'})
    vm.$router.push(config.app.pages.payment_selection)
    vm.$nextTick(() => {
      expect(vm.isCheckoutCompleteAndInCheckoutPaymentSelection()).to.equal(true)
      done()
    })
  })

  it('paidAmount check', () => {
    vm.$store.commit('setCartItem', { price: 1000000 })
    expect(vm.paidAmount).to.equal(1000000)
  })

  it('pay', (done) => {
    vm.$on('pay', () => {
      done()
    })
    vm.pay()
  })

  it('priceItemCartPreview', () => {
    vm.priceItemCartPreview(10)
    expect(vm.$options.filters.currencyFormat(10)).to.equal('Rp 10')

    vm.priceItemCartPreview(0)
    expect(vm.priceItemCartPreview(0)).to.equal(vm.$t('app.order.preOrderGiftText'))
  })

  it('openTncModal', () => {
    vm.visibleTnc = false
    vm.openTncModal()
    expect(vm.visibleTnc).to.equal(true)
  })
  it('onCloseTncModal', () => {
    vm.visibleTnc = true
    vm.onCloseTncModal()
    expect(vm.visibleTnc).to.equal(false)
  })
})
