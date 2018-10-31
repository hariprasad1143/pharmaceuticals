import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import i18n from '@common/src/i18n'
import CheckoutRepay from 'src/pages/CheckoutRepay'
import config from '@common/src/config'
import payHandler from '@common/src/util/pay-handler'

describe('CheckoutRepay.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(CheckoutRepay)
    vm = new Constructor({
      i18n,
      router,
      store
    })
  })

  it('Initialized well', () => {
    vm.$mount()
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
    vm.paySuccess(response)
  })

  it('paySuccess', () => {
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
    expect(vm.$route.path).to.equal(config.app.pages.thank_you + '/ABCDEFGH/success')
    expect(vm.$store.getters.paymentData.method).to.equal('Mandiri Clickpay')
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
    const oldPayHandlerExecute = payHandler.execute
    payHandler.execute = (vm, redirectUrl, method, queryData, success, fail) => {
      fail()
      payHandler.execute = oldPayHandlerExecute
      done()
    }
    vm.paySuccess(response)
  })

  it('payError', done => {
    var response = {
      body: {
        'code': 429,
        'status': 'BadRequest',
        'errors': {
          'Sku': ['PriceChanged']
        }
      }
    }
    vm.$store.commit('setOrder', { orderIdHash: '1234556E' })
    vm.payError(response)
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.thank_you + '/1234556E/failed')
      done()
    })
  })

  it('redirect to success page if error is OrderHasBeenPaid', done => {
    var response = {
      status: 409,
      body: {
        'code': 409,
        'status': 'Conflict'
      }
    }
    vm.$store.commit('setOrder', { orderIdHash: '1234556E' })
    vm.payError(response)
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.thank_you + '/1234556E/success')
      done()
    })
  })

  it('paymentPunchout', () => {
    expect(vm.paymentPunchout()).to.equal(vm.$refs.paymentPunchout)
  })
})
