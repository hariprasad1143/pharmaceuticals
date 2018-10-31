import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import PaymentPunchout from 'src/components/PaymentPunchout'
import i18n from '@common/src/i18n'

describe('PaymentPunchout.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(PaymentPunchout)
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })

  it('formData exist', () => {
    vm.$store.commit('setPaymentData', {
      paymentData: {
        formData: {a: 'b'}
      }
    })
    expect(vm.formData).to.deep.equal({a: 'b'})
  })

  it('formData empty', () => {
    vm.$store.commit('setPaymentData', {})
    expect(vm.formData).to.deep.equal({})
  })

  it('trigger blibliForm', done => {
    const response = vm.blibliForm()
    vm.$nextTick(() => {
      expect(response).to.equal(undefined)
      done()
    })
  })
})
