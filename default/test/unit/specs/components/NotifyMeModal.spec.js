import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import NotifyMeModal from 'src/components/NotifyMeModal'
import i18n from '@common/src/i18n'

describe('Notify Me', () => {
  var vm = null
  const Constructor = Vue.extend(NotifyMeModal)

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

  it('onWrapClose', (done) => {
    vm.$off('close')
    // just call it from somewhere
    vm.onWrapClose({target: {classList: {contains: () => false}}})

    // call on wrap
    vm.$on('close', () => {
      done()
    })
    vm.onWrapClose({target: {classList: {contains: () => true}}})
  })

  it('onClose', (done) => {
    vm.$off('close')
    // call on wrap
    vm.$on('close', () => {
      done()
    })
    vm.close()
  })

  it('validateEmail', () => {
    vm.validationResults = {}
    expect(vm.validationResults).to.deep.equal({})
    this.email = 'abc'
    vm.validateEmail()
    expect(vm.validationResults['email']).to.deep.equal(
      [{field: 'email', error: 'app.form.validation.invalidFormat'}]
    )
  })

  it('getFieldErrorMessage', () => {
    var result = vm.getFieldErrorMessage('app.form.validation.invalidFormat', 'email')
    expect(result).to.equal('Format Alamat Email anda tidak valid')
  })

  it('submit', () => {
    vm.sku = ''
    expect(!!vm.submit()).to.equal(false)

    vm.sku = 'a'
    vm.email = 'b'
    expect(vm.submit()).to.deep.equal({
      sku: 'a',
      email: 'b'
    })
  })

  it('success and fail Submit', () => {
    // calling them just for coverage
    vm.successSubmit()
    expect(vm.$refs.simplert.type).to.equal('success')
    vm.failSubmit({errors: []})
    expect(vm.$refs.simplert.type).to.equal('error')
  })
})
