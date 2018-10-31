import Vue from 'vue'
import router from '@/router'
import store from '@common/src/store'
import ModalConfirmation from 'src/components/ModalConfirmation'
import i18n from '@common/src/i18n'

describe('ModalConfirmation.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(ModalConfirmation)
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
  it('onConfirm', () => {
    let spy = sinon.spy()
    vm.$on('onConfirm', spy)
    vm.onConfirm()
    spy.should.have.been.calledOnce
  })
  it('onClose', () => {
    let spy = sinon.spy()
    vm.$on('onClose', spy)
    vm.onClose()
    spy.should.have.been.calledOnce
  })
})
