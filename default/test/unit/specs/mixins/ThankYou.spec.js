import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import {ThankYou} from 'mixins/ThankYou'
import ThankYouSuccess from 'src/pages/ThankYouSuccess'
import i18n from '@common/src/i18n'
import config from '@common/src/config'
import Cookies from 'js-cookie'

describe('ThankYou Mixins', () => {
  var vm = null
  const Constructor = Vue.extend(ThankYouSuccess)
  vm = new Constructor({
    router,
    store,
    i18n,
    mixins: [ThankYou]
  })

  it('hashCode', () => {
    vm.$router.push(config.app.pages.thank_you + '/' + 'ABCDEFG' + '/success')
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.thank_you + '/' + 'ABCDEFG' + '/success')
      expect(vm.hashCode()).to.equal('ABCDEFG')
    })
  })

  it('Check Order Id Param', () => {
    let hashCode = 'ABCDEFG'
    router.push(config.app.pages.thank_you + '/' + hashCode + '/success')
    vm.$nextTick(() => {
      expect(vm.$route.params.hashCode).to.equal(hashCode)
      expect(vm.hashCode()).to.equal(hashCode)
    })
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
    vm.$store.commit('setOrder', {
      cartId: '12345@samsung-gdn.com',
      amount: 18000000,
      createdDate: 1501735172255,
      customer: {
        email: 'sagita@gdn-commerce.com',
        identityNumber: '12345',
        identityType: 'KTP',
        name: 'Sagita',
        phoneNumber: '0823213729283'
      },
      discount: 0,
      errorMessage: 'Mohon maaf, transaksi Anda saat ini belum berhasil. Silahkan hubungi bank penerbit kartu Anda,atau Customer Care Blibli.com melalui email customer.care@blibli.com atau telepon 0804-1-871-871.',
      expiredDate: 1501735172255,
      items: [
        {
          amount: 18000000,
          name: 'Samsung S9 Limited Edition',
          quantity: 1,
          sku: 'Sam123'
        },
        {
          amount: 0,
          name: 'TUMI Hard Casing Grey',
          quantity: 1,
          sku: 'Sam1234'
        }
      ],
      orderId: '20491820491',
      adjustments: [{
        name: 'Promo Samsung SGI',
        amount: 1000000
      }],
      paidAmount: 17900000,
      payment: {
        details: {
          accountNumber: 'string',
          bankId: 'string'
        },
        installment: 0,
        method: 'string'
      },
      pickUpStore: {
        address: 'Kebon Melati, Tanah Abang No 9',
        id: '6ccefcb5-b67c-4f7f-a7b1-5baf95996ccb',
        name: 'Graha Niaga Thamrin',
        phoneNumber: '021 5232131'
      },
      status: 'success'
    })
    vm.visibleNotif = true
    vm.onConfirm()
    expect(vm.visibleNotif).to.equal(false)
  })

  it('Does not clear spc cookies', done => {
    const cookie = config.app.cookies
    Cookies.set(cookie.samsungAccessToken.name, 'value', cookie.samsungAccessToken.config)
    Cookies.set(cookie.samsungAccessTokenType.name, config.app.accessType.spc, cookie.samsungAccessTokenType.config)
    vm.removeVipCookies()
    vm.$nextTick(() => {
      expect(Cookies.get(cookie.samsungAccessToken.name)).to.equal('value')
      expect(Cookies.get(cookie.samsungAccessTokenType.name)).to.equal(config.app.accessType.spc)
      done()
    })
  })

  it('Clear vip cookies', done => {
    const cookie = config.app.cookies
    Cookies.set(cookie.samsungAccessToken.name, 'value', cookie.samsungAccessToken.config)
    Cookies.set(cookie.samsungAccessTokenType.name, config.app.accessType.vip, cookie.samsungAccessTokenType.config)
    vm.removeVipCookies()
    vm.$nextTick(() => {
      expect(Cookies.get(cookie.samsungAccessToken.name)).to.equal(undefined)
      expect(Cookies.get(cookie.samsungAccessTokenType.name)).to.equal(undefined)
      done()
    })
  })

  it('setCookies exists', () => {
    vm.$store.commit('setOrder', {
      cartId: '12345@samsung-gdn.com',
      amount: 18000000,
      createdDate: 1501735172255,
      items: [
        {
          amount: 18000000,
          name: 'Samsung S9 Limited Edition',
          quantity: 1,
          sku: 'Sam123'
        },
        {
          amount: 0,
          name: 'TUMI Hard Casing Grey',
          quantity: 1,
          sku: 'Sam1234'
        }
      ],
      orderId: '20491820491',
      adjustments: [{
        amount: -250000,
        name: 'Galaxy Launch Pack SGI Note3 Promo',
        promoCode: 'CN3NHHTY4WER3'
      }, {
        amount: 0,
        name: 'Galaxy Launch Pack SPC Access Code PREFIX S',
        promoCode: 'SS934789YFV'
      }],
      paidAmount: 17900000,
      status: 'M'
    })
    const cookie = config.app.cookies
    vm.setCookies('spc')
    expect(Cookies.get(cookie.samsungAccessToken.name)).to.equal('SS934789YFV')
    expect(Cookies.get(cookie.samsungAccessTokenType.name)).to.equal(config.app.accessType.spc)
  })

  it('setCookies does not exists', () => {
    vm.$store.commit('setOrder', {
      cartId: '12345@samsung-gdn.com',
      amount: 18000000,
      createdDate: 1501735172255,
      items: [
        {
          amount: 18000000,
          name: 'Samsung S9 Limited Edition',
          quantity: 1,
          sku: 'Sam123'
        },
        {
          amount: 0,
          name: 'TUMI Hard Casing Grey',
          quantity: 1,
          sku: 'Sam1234'
        }
      ],
      orderId: '20491820491',
      adjustments: [{
        amount: -250000,
        name: 'Galaxy Launch Pack SGI Note3 Promo',
        promoCode: 'SN3NHHTY4WER3'
      }, {
        amount: 0,
        name: 'Galaxy Launch Pack SPC Access Code PREFIX C',
        promoCode: 'CS934789YFV'
      }],
      paidAmount: 17900000,
      status: 'M'
    })
    const spy = sinon.spy(Cookies, 'set')
    vm.setCookies('vip')
    expect(spy.called).to.equal(false)
  })
})
