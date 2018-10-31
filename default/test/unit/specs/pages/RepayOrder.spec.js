import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import i18n from '@common/src/i18n'
import RepayOrder from 'src/pages/RepayOrder'
import config from '@common/src/config'

describe('RepayOrder.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(RepayOrder)
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
    vm.$router.push(config.app.pages.order_detail + '/ABCDEFG')
    expect(vm.$route.path).to.equal(config.app.pages.order_detail + '/ABCDEFG')
  })

  it('Check Order Id Param', () => {
    let hashCode = 'ABCDEFG'
    router.push(config.app.pages.thank_you + '/' + hashCode + '/failed')
    expect(vm.hashCode()).to.equal(hashCode)
  })
  it('Check showNotif', () => {
    vm.visibleNotif = false
    vm.showNotif()
    expect(vm.visibleNotif).to.equal(true)
  })
  it('Check onClose', () => {
    vm.visibleNotif = true
    vm.onClose()
    expect(vm.visibleNotif).to.equal(false)
  })
  it('Check onConfirm', () => {
    let hashCode = 'ABCDEFG'
    vm.$router.push(config.app.pages.thank_you + '/' + hashCode + '/failed')
    expect(vm.$route.path).to.equal(config.app.pages.thank_you + '/' + hashCode + '/failed')
    expect(vm.hashCode()).to.equal(hashCode)
    vm.$store.commit('setOrder', {
      orderId: '25000074249',
      cartId: '8738473874388888@samsung.com',
      createdDate: 1502888939221,
      expiredDate: 1502891939221,
      status: 'M',
      customer: {
        name: 'tes',
        email: 'test@ye.com',
        phoneNumber: '873483748378',
        identityNumber: '8738473874388888',
        identityType: 'KTP'
      },
      pickUpStore: {
        id: '70a0537d-7c50-409d-982b-f3d3fa87e323',
        name: 'SES - TANGERANG - SUMMARECON MALL SERPONG',
        address: 'LT.GF UNIT 02'
      },
      payment: {
        method: 'MIGSCreditCard',
        description: 'Kartu Kredit Lainnya',
        installment: 0,
        details: {}
      },
      items: [
        {
          sku: 'SAD-60001-00001-00001',
          name: 'Samsung Note8 Hitam Black',
          amount: 14000000,
          quantity: 1
        }
      ],
      amount: 14000000,
      discount: 0,
      paidAmount: 14000000,
      adjustments: []
    })
    vm.visibleNotif = true
    vm.onConfirm()
    expect(vm.visibleNotif).to.equal(false)
  })

  it('getInitOrder', () => {
    expect(vm.getInitOrder()).to.equal(true)
  })

  it('failGetOrder', () => {
    const ret = vm.failGetOrder({
      errors: {
        'sku': ['NotBlank']
      }
    })

    expect(ret).to.deep.equal([
      'sku harus diisi'
    ])
  })

  it('doRepay', done => {
    vm.doRepay()
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.repay)
      done()
    })
  })

  it('successGetOrder', () => {
    var response = {
      body: {
        'code': 200,
        'status': 'OK',
        'data': {
          'errorMessage': 'Mohon maaf, transaksi Anda saat ini belum berhasil.'
        }
      }
    }
    vm.successGetOrder(response)
    expect(vm.errorMessage).to.equal('Mohon maaf, transaksi Anda saat ini belum berhasil.')
  })

  it('successGetOrder', () => {
    vm.errorMessage = ''
    var response = {
      body: {
        'code': 200,
        'status': 'OK',
        'data': {}
      }
    }
    vm.successGetOrder(response)
    expect(vm.errorMessage).to.equal('')
  })

  it('successGetOrder', () => {
    vm.errorMessage = ''
    var response = {
      body: {
        'code': 200,
        'status': 'OK',
        'data': {
          'errorMessage': ''
        }
      }
    }
    vm.successGetOrder(response)
    expect(vm.errorMessage).to.equal('')
  })

  it('successGetOrder', () => {
    vm.errorMessage = ''
    var response = {
      body: {
        'code': 200,
        'status': 'OK',
        'data': {
          'errorMessage': null
        }
      }
    }
    vm.successGetOrder(response)
    expect(vm.errorMessage).to.equal('')
  })

  it('getOrder with status C', () => {
    vm.errorMessage = ''
    var response = {
      body: {
        'code': 200,
        'status': 'OK',
        'data': {
          'status': 'C',
          'orderIdHash': 'ABCDEFGH'
        }
      }
    }
    vm.successGetOrder(response)
    expect(vm.$route.path).to.equal(config.app.pages.thank_you + '/ABCDEFGH/success')
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
})
