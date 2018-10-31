import Vue from 'vue'
import router from '@/router'
import store from '@common/src/store'
import SaveDataConfirmation from 'src/components/SaveDataConfirmation'
import i18n from '@common/src/i18n'
import captchaKey from '@common/src/util/recaptcha'
import util from '@common/src/util'

describe('SaveDataConfirmation.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(SaveDataConfirmation)
    vm = new Constructor({
      router,
      store,
      i18n
    })
    window._bwaq = {push: () => {}}
  })

  it('mount well', () => {
    vm.$mount()
  })
  it('onConfirm captcha exist', (done) => {
    vm.$on('onConfirm', () => {
      vm.$off('onConfirm')
      expect(document.documentElement.scrollTop).to.equal(0)
      done()
    })
    vm.$store.commit('setPersonalData', {captcha: '32424234'})
    vm.$store.commit('setIsMobile', false)
    vm.onConfirm()
  })
  it('onConfirm captcha not exist, yet required', () => {
    vm.$store.commit('setCaptchaReserveOrder', true)
    vm.$store.commit('setPersonalData', {})
    vm.onConfirm()
    expect(vm.captchaInvalid).to.equal(true)
  })
  it('isCaptchaInvalid captcha required and captcha exist', () => {
    vm.$store.commit('setCaptchaReserveOrder', true)
    expect(vm.isCaptchaInvalid()).to.equal(true)
  })

  it('isCaptchaInvalid captcha required and captcha not exist', () => {
    vm.$store.commit('setCaptchaReserveOrder', true)
    vm.$store.commit('setPersonalData', {captcha: null})
    expect(vm.isCaptchaInvalid()).to.equal(true)
  })

  it('isCaptchaInvalid captcha not req and captcha exist', () => {
    vm.$store.commit('setCaptchaReserveOrder', false)
    vm.$store.commit('setPersonalData', {captcha: '32424234'})
    expect(vm.isCaptchaInvalid()).to.equal(false)
  })

  it('isCaptchaInvalid captcha not req and captcha not exist', () => {
    vm.$store.commit('setCaptchaReserveOrder', false)
    vm.$store.commit('setPersonalData', {captcha: null})
    expect(vm.isCaptchaInvalid()).to.equal(false)
  })

  it('onClose', () => {
    let spy = sinon.spy()
    vm.$on('onClose', spy)
    vm.onClose()
    spy.should.have.been.calledOnce
  })
  it('onExpired', () => {
    vm.onExpired()
  })
  it('onVerify', (done) => {
    vm.$store.commit('setPersonalDataCaptcha', {a: 1})
    vm.onVerify()
    done()
  })
  it('captchaKey', () => {
    const oldCaptchaKey = captchaKey.getCaptchaByEnv
    captchaKey.getCaptchaByEnv = () => {
      captchaKey.getCaptchaByEnv = oldCaptchaKey
      return true
    }
    expect(vm.captchaKey).to.be.true
  })
  it('onConfirm mobile not scroll', () => {
    let utilSpy = sinon.spy(util, 'scrollToTop')
    vm.$store.commit('setPersonalData', {captcha: '32424234'})
    vm.$store.commit('setIsMobile', true)
    vm.onConfirm()
    utilSpy.should.have.callCount(0)

    vm.$store.commit('setIsMobile', false)
    vm.$store.commit('setPersonalData', {captcha: '32424234'})
    vm.onConfirm()
    utilSpy.should.have.been.calledOnce
    utilSpy.restore()
  })
})
