import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import i18n from '@common/src/i18n'
import ThankYouSuccess from 'src/pages/ThankYouSuccess'
import config from '@common/src/config'

describe('ThankYouSuccess.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(ThankYouSuccess)
    vm = new Constructor({
      i18n,
      router,
      store
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
  it('hashCode', () => {
    vm.$router.push(config.app.pages.thank_you + '/' + 'ABCDEFG' + '/success')
    expect(vm.$route.path).to.equal(config.app.pages.thank_you + '/' + 'ABCDEFG' + '/success')
    expect(vm.hashCode()).to.equal('ABCDEFG')
  })

  it('Check Order Id Param', () => {
    let hashCode = 'ABCDEFG'
    router.push(config.app.pages.thank_you + '/' + hashCode + '/success')
    expect(vm.$route.params.hashCode).to.equal(hashCode)
    expect(vm.hashCode()).to.equal(hashCode)
  })
  it('Check getInitOrder', () => {
    let hashCode = 'ABCDEFG'
    router.push(config.app.pages.thank_you + '/' + hashCode + '/success')
    vm.getInitOrder()
    expect(vm.hashCode()).to.equal(hashCode)
  })
  it('compute dateExpireFormatted', () => {
    vm.$store.commit('setOrder', {'expiredDate': 1501735172255})
    expect(vm.dateExpireFormatted).to.equal('3 Agustus 2017')
  })
  it('compute dateExpireFormatted empty', () => {
    vm.$store.commit('setOrder', {})
    expect(vm.dateExpireFormatted).to.equal('')
  })
  it('compute timeExpireFormatted', () => {
    vm.$store.commit('setOrder', {'expiredDate': 1501735172255})
    expect(vm.timeExpireFormatted).to.equal('11:39')
  })
  it('compute timeExpireFormatted 24h format', () => {
    vm.$store.commit('setOrder', {'expiredDate': 1503668572894})
    expect(vm.timeExpireFormatted).to.equal('20:42')
  })
  it('compute timeExpireFormatted empty', () => {
    vm.$store.commit('setOrder', {})
    expect(vm.timeExpireFormatted).to.equal('')
  })
  it('compute orderStatus', () => {
    vm.$store.commit('setOrder', {'status': 'X'})
    expect(vm.orderStatus).to.equal('X')
  })
  it('successGetInitOrder order X', () => {
    let hashCode = 'ABCDEFG'
    router.push(config.app.pages.thank_you + '/' + hashCode + '/success')
    vm.$store.commit('setOrder', {'status': 'X'})
    vm.successGetInitOrder()
    expect(vm.$route.path).to.equal(config.app.pages.thank_you + '/' + hashCode + '/failed')
  })

  it('successGetInitOrder order fail', () => {
    let hashCode = 'ABCDEFG'
    router.push(config.app.pages.thank_you + '/' + hashCode + '/success')
    vm.$store.commit('setOrder', {
      status: 'M',
      payment: {
        method: 'CitibankMasterCardInstallment',
        details: {}
      },
      errorMessage: 'Error'
    })
    vm.successGetInitOrder()
    expect(vm.$route.path).to.equal(config.app.pages.thank_you + '/' + hashCode + '/failed')
  })

  it('successGetInitOrder order incomplete', () => {
    let hashCode = 'ABCDEFG'
    router.push(config.app.pages.thank_you + '/' + hashCode + '/success')
    vm.$store.commit('setOrder', {
      status: 'M',
      payment: {
        method: 'CitibankMasterCardInstallment',
        details: {}
      }
    })
    vm.successGetInitOrder()
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.repay_order + '/' + hashCode)
    })
  })

  it('Check seeReceipt', () => {
    vm.$router.push(config.app.pages.thank_you + '/' + 'ABCDEFG' + '/success')
    vm.seeReceipt()
    expect(vm.$route.path).to.equal(config.app.pages.order_detail + '/' + 'ABCDEFG')
  })
  it('Check getPaymentInstruction', () => {
    let order = {
      orderId: 'orderId',
      payment: {
        method: 'KlikBCA',
        details: {}
      }
    }
    vm.$store.commit('setOrder', order)
    expect(vm.getPaymentInstruction('KlikBCA')).to.equal(vm.$t('paymentInstruction.KlikBCA', {orderId: order.orderId, ...order.payment.details}))
  })
  it('canceledOrder', () => {
    let order = {status: 'X'}
    vm.$store.commit('setOrder', order)
    expect(vm.canceledOrder).to.be.true

    order = {status: 'M'}
    vm.$store.commit('setOrder', order)
    expect(vm.canceledOrder).to.be.false
  })
  it('failedOrder', () => {
    let order = {
      status: 'M',
      payment: {
        method: 'CitibankMasterCardInstallment',
        details: {}
      },
      errorMessage: 'Error'
    }
    vm.$store.commit('setOrder', order)
    expect(vm.failedOrder).to.be.true

    order = {
      status: 'M',
      payment: {
        method: 'CitibankMasterCardInstallment',
        details: {}
      }
    }
    vm.$store.commit('setOrder', order)
    expect(vm.failedOrder).to.be.false
  })
  it('uncompletedOrder', () => {
    let order = {
      status: 'M',
      payment: {
        method: 'CitibankMasterCardInstallment',
        details: {}
      },
      errorMessage: 'Error'
    }
    vm.$store.commit('setOrder', order)
    expect(vm.uncompletedOrder).to.be.false

    order = {
      status: 'M',
      payment: {
        method: 'CitibankMasterCardInstallment',
        details: {}
      },
      errorMessage: ''
    }
    vm.$store.commit('setOrder', order)
    expect(vm.uncompletedOrder).to.be.true
  })
  it('pickupMethodsContent', () => {
    let result = '<p>Hello World</p>'
    vm.$store.commit('setCmsContent', {
      'flashsale-pickup-methods': {value: result}
    })
    expect(vm.pickupMethodsContent).to.equal(result)

    vm.$store.commit('setCmsContent', {})
    expect(vm.pickupMethodsContent).to.equal('')
  })
})
