import VipAccess from 'src/pages/VipAccess'
import router from 'src/router'
import i18n from '@common/src/i18n'
import config from '@common/src/config'
import Vuex from 'vuex'
import Vue from 'vue'
import Cookies from 'js-cookie'

describe('VipAccess.vue', () => {
  let vm
  let actions
  let getters
  let store
  const Constructor = Vue.extend(VipAccess)
  const VueSimplertStub = {
    render: () => {},
    methods: {
      openSimplert: () => {}
    }
  }
  const VueRecaptchaStub = {
    render: () => {},
    methods: {
      reset: () => {}
    }
  }

  beforeEach(() => {
    actions = {
      validateToken: sinon.stub()
    }
    getters = {
      isCaptchaCheckOrder: () => true
    }
    store = new Vuex.Store({
      state: {},
      actions,
      getters
    })
    vm = new Constructor({
      router,
      store,
      i18n,
      components: {
        Simplert: VueSimplertStub,
        VueRecaptcha: VueRecaptchaStub
      }
    }).$mount()
  })

  it('store captcha value when verified', () => {
    const catpchaResponseString = 'secret-token'
    vm.onCaptchaVerify(catpchaResponseString)
    expect(vm.captcha).to.equal(catpchaResponseString)
  })

  it('empty catchaResponse when captcha is expired', () => {
    vm.onCaptchaExpired()
    expect(vm.captcha).to.equal('')
  })

  it('trigger validateToken action when token is submitted', () => {
    vm.submitToken()
    expect(actions.validateToken.called).to.equal(true)
  })

  it('set cookies when token submitted successfully', done => {
    const fakeResponse = { body: { data: { accessToken: 'secret-token', tokenType: 'test' } } }
    const cookies = config.app.cookies
    vm.handleSuccessTokenSubmit(fakeResponse)
    vm.$nextTick(() => {
      expect(Cookies.get(cookies.samsungGlp.name)).to.equal(String(cookies.samsungGlp.value))
      expect(Cookies.get(cookies.samsungAccessToken.name)).to.equal(fakeResponse.body.data.accessToken)
      expect(Cookies.get(cookies.samsungAccessTokenType.name)).to.equal(fakeResponse.body.data.tokenType)
      done()
    })
  })

  it('handle errors', () => {
    const fakeResponse = { body: { code: 400, status: 'BadRequest', errors: {accessToken: ['NotBlank']} } }
    vm.handleFailureTokenSubmit(fakeResponse)
    expect(vm.captcha).to.equal('')
  })
})
