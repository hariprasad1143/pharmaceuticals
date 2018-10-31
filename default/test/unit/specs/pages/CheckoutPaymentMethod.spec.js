import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import CheckoutPaymentMethod from 'src/pages/CheckoutPaymentMethod'
import config from '@common/src/config'
import i18n from '@common/src/i18n'
import util from '@common/src/util'
import payHandler from '@common/src/util/pay-handler'
import Cookies from 'js-cookie'

describe('CheckoutPaymentMethod.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(CheckoutPaymentMethod)
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })

  it('payment method selectPayment ', () => {
    vm.selectPayment()
    expect(vm.$route.path).to.equal(config.app.pages.checkout_summary)
  })

  it('payment method editPersonalData ', () => {
    vm.editPersonalData()
    expect(vm.$route.path).to.equal(config.app.pages.checkout)
  })

  // it('validateState', () => {
  //   vm.$store.commit('setPickupStore', {
  //     id: '4ea8e472-c5aa-4d45-bcd7-afebf2bc4b08'
  //   })
  //   vm.validateState()
  // })

  it('editPickupStore', () => {
    vm.editPickupStore()
    expect(vm.$route.path).to.equal(config.app.pages.pickup_selection)
  })

  it('pay', () => {
    vm.$store.commit('setPaymentMethod', {
      id: 'BCACreditCard',
      installment: 3,
      method: 'MigsBCAInst',
      name: 'Kartu Kredit BCA',
      vendor: 'BCA'
    })
    vm.$store.commit('setCart', {
      active: true,
      cartId: '0086766666666666@samsung.com',
      description: '',
      discount: 1000000,
      items: [{
        name: 'Samsung Note8 Hitam Black',
        price: 14000000,
        promoId: '59814cc23d1f6637fd3f894d',
        sku: 'SAD-16515-00001-00001',
        thumbnail: '/static/img/note8.dfa5e98.png'
      }]
    })
    vm.$store.commit('setPickupStore', {
      id: '4ea8e472-c5aa-4d45-bcd7-afebf2bc4b08'
    })
    vm.$store.commit('setCurrentUser', {
      email: 'a@q.ss',
      identityNumber: '7654323423421222',
      identityType: 'KTP',
      init: true,
      name: 'ssss',
      phoneNumber: '344242342342'
    })
    expect(vm.pay().customer).to.deep.equal({
      email: 'a@q.ss',
      identityNumber: '7654323423421222',
      identityType: 'KTP',
      init: true,
      name: 'ssss',
      phoneNumber: '344242342342'
    })
  })

  it('getPaymentRequestData klikbca', () => {
    vm.$store.commit('setPaymentMethod', {
      id: 'KlikBCA',
      klikBcaUserId: 'a12321321',
      method: 'KlikBCA',
      name: 'KlikBCA'
    })
    vm.$store.commit('setCart', {
      active: true,
      cartId: '0086766666666666@samsung.com',
      description: '',
      discount: 1000000,
      items: [{
        name: 'Samsung Note8 Hitam Black',
        price: 14000000,
        promoId: '59814cc23d1f6637fd3f894d',
        sku: 'SAD-16515-00001-00001',
        thumbnail: '/static/img/note8.dfa5e98.png'
      }],
      orderIdHash: '0989i09809'
    })
    vm.$store.commit('setPickupStore', {
      id: '4ea8e472-c5aa-4d45-bcd7-afebf2bc4b08'
    })
    vm.$store.commit('setCurrentUser', {
      email: 'a@q.ss',
      identityNumber: '7654323423421222',
      identityType: 'KTP',
      init: true,
      name: 'ssss',
      phoneNumber: '344242342342'
    })
    expect(vm.getPaymentRequestData().payment).to.deep.equal({
      method: 'KlikBCA',
      klikBcaUserId: 'a12321321'
    })
    expect(vm.$store.getters.cart.orderIdHash).to.deep.equal('0989i09809')
  })

  it('getPaymentRequestData orderIdHash', () => {
    vm.$store.commit('setPaymentMethod', {
      id: 'KlikBCA',
      klikBcaUserId: 'a12321321',
      method: 'KlikBCA',
      name: 'KlikBCA'
    })
    vm.$store.commit('setCart', {
      active: true,
      cartId: '0086766666666666@samsung.com',
      description: '',
      discount: 1000000,
      items: [{
        name: 'Samsung Note8 Hitam Black',
        price: 14000000,
        promoId: '59814cc23d1f6637fd3f894d',
        sku: 'SAD-16515-00001-00001',
        thumbnail: '/static/img/note8.dfa5e98.png'
      }],
      orderIdHash: '123'
    })
    vm.$store.commit('setPickupStore', {
      id: '4ea8e472-c5aa-4d45-bcd7-afebf2bc4b08'
    })
    vm.$store.commit('setCurrentUser', {
      email: 'a@q.ss',
      identityNumber: '7654323423421222',
      identityType: 'KTP',
      init: true,
      name: 'ssss',
      phoneNumber: '344242342342'
    })
    expect(vm.getPaymentRequestData().orderIdHash).to.equal('123')
  })

  it('getPaymentRequestData discount', () => {
    vm.$store.commit('setPaymentMethod', {
      id: 'KlikBCA',
      klikBcaUserId: 'a12321321',
      method: 'KlikBCA',
      name: 'KlikBCA'
    })
    vm.$store.commit('setCart', {
      active: true,
      cartId: '0086766666666666@samsung.com',
      description: '',
      cashback: 1000000,
      sgiPromo: -250000,
      items: [{
        name: 'Samsung Note8 Hitam Black',
        price: 14000000,
        promoId: '59814cc23d1f6637fd3f894d',
        sku: 'SAD-16515-00001-00001',
        thumbnail: '/static/img/note8.dfa5e98.png'
      }],
      orderIdHash: '123'
    })
    vm.$store.commit('setPickupStore', {
      id: '4ea8e472-c5aa-4d45-bcd7-afebf2bc4b08'
    })
    vm.$store.commit('setCurrentUser', {
      email: 'a@q.ss',
      identityNumber: '7654323423421222',
      identityType: 'KTP',
      init: true,
      name: 'ssss',
      phoneNumber: '344242342342'
    })
    expect(vm.getPaymentRequestData().paidAmount).to.equal(12750000)
  })

  it('getPaymentRequestData shippingAddress', () => {
    vm.$store.commit('setPaymentMethod', {
      id: 'KlikBCA',
      klikBcaUserId: 'a12321321',
      method: 'KlikBCA',
      name: 'KlikBCA'
    })
    vm.$store.commit('setCart', {
      active: true,
      cartId: '0086766666666666@samsung.com',
      description: '',
      cashback: 1000000,
      sgiPromo: -250000,
      items: [{
        name: 'Samsung Note8 Hitam Black',
        price: 14000000,
        promoId: '59814cc23d1f6637fd3f894d',
        sku: 'SAD-16515-00001-00001',
        thumbnail: '/static/img/note8.dfa5e98.png'
      }],
      orderIdHash: '123'
    })
    vm.$store.commit('setPickupStore', {
      id: '4ea8e472-c5aa-4d45-bcd7-afebf2bc4b08'
    })
    vm.$store.commit('setShippingAddress', {
      'address': 'Jl. Kebon Melati No.1234 RT.1 RW.10',
      'province': 'DKI Jakarta',
      'city': 'Jakarta Pusat',
      'district': 'Tanah Abang',
      'subdistrict': 'Kebon Melati',
      'postalCode': '11230'
    })
    expect(vm.getPaymentRequestData().shippingAddress.province).to.equal('DKI Jakarta')
  })

  it('getPaymentRequestData promoCode', () => {
    const cookies = config.app.cookies
    Cookies.set(
      cookies.samsungAccessToken.name,
      'spc123',
      cookies.samsungAccessToken.config
    )
    vm.$store.commit('setAppliedPromocodes', 'SGIGIFT')
    vm.getPaymentRequestData()
    expect(vm.appliedPromocodes).to.deep.equal(['SGIGIFT'])
    Cookies.remove(cookies.samsungAccessToken.name)
  })

  it('paySuccess', done => {
    var response = {
      'body': {
        'code': 200,
        'status': 'OK',
        'data': {
          'orderId': '10232132141',
          'orderIdHash': 'ABCDEFGH',
          'paymentData': {
            'method': 'Mandiri Clickpay'
          }
        }
      }
    }
    vm.paySuccess(response)
    expect(vm.$store.getters.paymentData.method).to.equal('Mandiri Clickpay')
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.thank_you + '/ABCDEFGH/success')
      done()
    })
  })

  it('paySuccess', () => {
    var response = {
      body: {
        'code': 200,
        'status': 'OK',
        'data': {
          'orderId': '10232132141',
          'orderIdHash': 'ABCDEFGH',
          'redirectUrl': '/pay.blablabla.com/id?=2389472389472389472389',
          'paymentData': {
            'method': 'CIMB Clicks',
            'httpMethod': 'GET',
            'queryData': {
              'key': 'value'
            }
          }
        }
      }
    }
    const urlRedirect = config.app.pages.thank_you + '/13123123' + '/failed'
    util.goUrl(urlRedirect)
    expect(window.location.pathname).to.equal(urlRedirect)
    vm.paySuccess(response)
  })

  it('paySuccess fail execute', done => {
    var response = {
      'body': {
        'code': 200,
        'status': 'OK',
        'data': {
          'redirectUrl': 'www.google.com',
          'orderId': '10232132141',
          'orderIdHash': 'ABCDEFGH',
          'paymentData': {
            'method': 'Mandiri Clickpay'
          }
        }
      }
    }
    const oldDispatch = vm.$store.dispatch
    const oldPayHandlerExecute = payHandler.execute
    payHandler.execute = (vm, redirectUrl, method, queryData, success, fail) => {
      fail()
    }
    vm.$store.dispatch = (action) => {
      expect(action).to.equal('hideLoading')
      vm.$store.dispatch = oldDispatch
      payHandler.execute = oldPayHandlerExecute
      done()
    }
    vm.paySuccess(response)
  })

  it('payError', () => {
    var response = {
      body: {
        'code': 429,
        'status': 'BadRequest',
        'errors': {
          'sku': ['PriceChanged']
        }
      }
    }
    expect(response.body.code === 429).to.equal(true)
    vm.payError(response)
  })

  it('payError', () => {
    var response = {
      body: {
        'code': 500,
        'status': 'BadRequest',
        'errors': {
          'sku': ['PriceChanged']
        }
      }
    }
    expect(response.body.code === 500).to.equal(true)
    vm.payError(response)
  })

  it('pay', (done) => {
    vm.pay()
    done()
  })

  it('paymentPunchout', () => {
    expect(vm.paymentPunchout()).to.equal(vm.$refs.paymentPunchout)
  })
  it('validateState valid', () => {
    vm.$store.commit('setCart', {
      items: [{
        'sku': 'SKU-1'
      }]
    })
    const spy = sinon.spy(vm.$router, 'replace')
    vm.validateState()
    expect(spy.called).to.equal(false)
    spy.restore()
  })

  it('validateState invalid', () => {
    vm.$store.commit('setCart', {
      items: []
    })
    const spy = sinon.spy(vm.$router, 'replace')
    vm.validateState()
    expect(spy.called).to.equal(true)
    spy.restore()
  })
})
