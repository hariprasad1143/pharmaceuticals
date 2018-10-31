import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import PayNowButton from 'src/components/PayNowButton'
import i18n from '@common/src/i18n'
import config from '@common/src/config'

describe('Pay Now Button', () => {
  var vm = null
  const Constructor = Vue.extend(PayNowButton)

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

  it('isCheckoutCompleteAndInCheckoutPaymentSelection', () => {
    vm.$store.commit('setPaymentMethod', {})
    vm.$store.commit('setCart', {items: []})
    vm.$store.commit('setPickupStore', {})
    vm.$router.push(config.app.pages.checkout)
    expect(vm.isCheckoutCompleteAndInCheckoutPaymentSelection()).to.equal(false)
    vm.$router.push(config.app.pages.payment_selection)
    expect(vm.isCheckoutCompleteAndInCheckoutPaymentSelection()).to.equal(false)

    vm.$store.commit('setPaymentMethod', {method: 'KlikBCA'})
    vm.$store.commit('setCart', {cartId: 1, items: []})
    vm.$store.commit('setPickupStore', {id: 'toko1'})
    vm.$router.push(config.app.pages.checkout)
    expect(vm.isCheckoutCompleteAndInCheckoutPaymentSelection()).to.equal(false)
    vm.$router.push(config.app.pages.payment_selection)
    expect(vm.isCheckoutCompleteAndInCheckoutPaymentSelection()).to.equal(true)
  })

  it('pay', (done) => {
    vm.$on('pay', () => { done() })
    vm.pay()
  })
})
