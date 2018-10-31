import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import PersonalData from 'src/components/PersonalData'
import i18n from '@common/src/i18n'
import Cookies from 'js-cookie'
import config from '@common/src/config'

describe('Personal Data', () => {
  var vm = null
  const Constructor = Vue.extend(PersonalData)

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

  it('prepareEdit data exist', () => {
    vm.$store.commit('setPersonalData', {phoneNumber: '+628123232434'})
    vm.userData.phoneNumber = '+628123232434'
    vm.prepareEdit()
    expect(store.getters.personalData).to.deep.equal({phoneNumber: '8123232434'})
  })

  it('prepareEdit data empty', () => {
    vm.userData = null
    vm.prepareEdit()
    expect(vm.userData).to.deep.equal(null)
  })

  it('constructSaveCurrentUserRequestData regular', () => {
    vm.$store.commit('setCartItem', {sku: '1'})
    vm.userData = {
      phoneNumber: '+628723672637273'
    }
    const tmp = Object.assign({}, vm.personalData, {items: ['1']})
    expect(vm.constructSaveCurrentUserRequestData()).to.deep.equal(tmp)
  })

  // it('savePersonalData', () => {
  //   vm.$store.commit('setCartItem', {sku: '1'})
  //   vm.$store.commit('setPersonalData', {
  //     phoneNumber: '+628723672637273',
  //     identityNumber: '2345678',
  //     identityType: 'ba'
  //   })
  //   vm.userData = vm.$store.getters.personalData
  //   const tmp = Object.assign({}, vm.personalData, {items: ['1']})
  //   tmp.accessToken = '123'
  //   expect(vm.savePersonalData()).to.deep.equal(tmp)
  // })

  // it('savePersonalDataSuccess', (done) => {
  //   vm.$on('savePersonalData', () => { done() })
  //   vm.savePersonalDataSuccess()
  // })

  // it('savePersonalDataFail 429', () => {
  //   const res = {status: 429}
  //   vm.savePersonalDataFail(res)
  //   expect(res.status).to.equal(429)
  // })

  // it('savePersonalDataFail 404', () => {
  //   const res = {status: 404}
  //   vm.savePersonalDataFail(res)
  //   expect(res.status).to.equal(404)
  // })

  // it('savePersonalDataFail 401', () => {
  //   const res = {status: 401}
  //   vm.savePersonalDataFail(res)
  //   expect(res.status).to.equal(401)
  // })

  // it('savePersonalDataFailed others', () => {
  //   const res = {body: { errors: { name: [] } }}
  //   vm.savePersonalDataFail(res)
  //   expect(typeof res.body.errors).to.equal('object')
  // })
  // it('savePersonalData', () => {
  //   vm.$store.commit('setCartItem', {sku: '1'})
  //   vm.$store.commit('setPersonalData', {
  //     phoneNumber: '+628723672637273'
  //   })
  //   vm.userData = vm.$store.getters.personalData
  //   const tmp = Object.assign({}, vm.personalData, {items: ['1']})
  //   expect(vm.savePersonalData()).to.deep.equal(tmp)
  // })

  // it('savePersonalDataSuccess', (done) => {
  //   vm.$on('savePersonalData', () => { done() })
  //   vm.savePersonalDataSuccess()
  // })

  it('saveCurrentPersonalData', () => {
    const spy = sinon.spy(vm, '$emit')
    vm.saveCurrentPersonalData()
    expect(spy.called).to.equal(true)
    spy.restore()
  })

  it('savePersonalDataFail 429', () => {
    const res = {
      status: 429,
      body: {
        errors: ['error']
      }
    }
    vm.savePersonalDataFail(res)
    expect(res.status).to.equal(429)
  })

  it('savePersonalDataFail 404', () => {
    const res = {status: 404}
    vm.savePersonalDataFail(res)
    expect(res.status).to.equal(404)
  })

  it('savePersonalDataFail 401', () => {
    const res = {status: 401}
    vm.savePersonalDataFail(res)
    expect(res.status).to.equal(401)
  })

  it('savePersonalDataFailed others', () => {
    const res = {body: { errors: { name: [] } }}
    vm.savePersonalDataFail(res)
    expect(typeof res.body.errors).to.equal('object')
  })

  it('editPersonalData', (done) => {
    vm.$on('editPersonalData', () => { done() })
    vm.editPersonalData()
  })

  it('validateForm', () => {
    vm.userData = {name: 'nama orang'}
    vm.validateForm('name')
    expect(typeof vm.validationResults['name']).to.equal('undefined')
  })

  it('validateForm get error empty', () => {
    vm.userData = {name: ''}
    var result = [
      {
        field: 'name',
        error: 'app.form.validation.required'
      }
    ]
    vm.validateForm('name')
    expect(vm.validationResults['name'][0].error).to.deep.equal(result[0].error)
  })

  it('validateForm get error regex', () => {
    vm.userData = {email: 'email'}
    vm.validateForm('email')
    var result = [
      {
        field: 'email',
        error: 'app.form.validation.invalidFormat'
      }
    ]
    expect(vm.validationResults['email'][0].error).to.deep.equal(result[0].error)
  })

  it('getFieldErrorMessage', () => {
    var result = vm.getFieldErrorMessage('app.form.validation.required', 'name')
    expect(result).to.equal('Silakan masukan Nama Lengkap anda')
  })

  it('getCompletePhoneNumber with 0', () => {
    vm.userData.phoneNumber = '0877677676767'
    var result = vm.getCompletePhoneNumber(vm.userData.phoneNumber)
    expect(result).to.equal('+62877677676767')
  })

  it('getCompletePhoneNumber without 0', () => {
    vm.userData.phoneNumber = '123456789'
    var result = vm.getCompletePhoneNumber(vm.userData.phoneNumber)
    expect(result).to.equal('+62123456789')
  })

  it('openConfirmation', () => {
    vm.isShowConfirmation = false
    vm.userData = {a: 'b', phoneNumber: '81345'}

    var phoneNumber = vm.getCompletePhoneNumber(vm.userData.phoneNumber)

    vm.openConfirmation()
    expect(vm.isShowConfirmation).to.equal(true)
    expect(vm.$store.getters.personalData.phoneNumber).to.equal(phoneNumber)
  })
  it('onClose', () => {
    vm.isShowConfirmation = true
    vm.onClose()
    expect(vm.isShowConfirmation).to.equal(false)
  })
  it('onConfirm', () => {
    vm.isShowConfirmation = true
    vm.onConfirm()
    expect(vm.isShowConfirmation).to.equal(false)
  })
  it('isInputValid valid', () => {
    vm.$store.commit('setShippingAddress', {address: 'abc123', postalCode: '123456'})
    vm.tncChecked = true
    vm.userData = {
      name: 'abceee',
      phoneNumber: '120',
      email: 'ahahah',
      identityType: 'ktp',
      identityNumber: 'ahaha'
    }
    vm.validationResults = {}
    let res = vm.isInputValid()
    expect(res).to.equal(true)
  })
  it('isInputValid tnc checked userdata empty', () => {
    vm.tncChecked = true
    vm.userData = {}
    vm.validationResults = {}
    let res = vm.isInputValid()
    expect(res).to.equal(false)
  })
  it('isInputValid shippingAddressEmpty', () => {
    vm.$store.commit('setShippingAddress', {})
    vm.tncChecked = true
    vm.userData = {
      name: 'abceee',
      phoneNumber: '120',
      email: 'ahahah',
      identityType: 'ktp',
      identityNumber: 'ahaha'
    }
    vm.validationResults = {}
    let res = vm.isInputValid()
    expect(res).to.equal(false)
  })

  it('getValidationFields', () => {
    var a = vm.getValidationFields()
    expect(a.name[0].exp).to.equal('^([^0-9]*)$')
  })

  it('availableToEdit', () => {
    vm.$store.commit('setCart', {})
    expect(vm.availableToEdit).to.equal(true)
  })
  it('openTncModal', () => {
    vm.visibleTnc = false
    vm.openTncModal()
    expect(vm.visibleTnc).to.equal(true)
  })
  it('onCloseTncModal', () => {
    vm.visibleTnc = true
    vm.onCloseTncModal()
    expect(vm.visibleTnc).to.equal(false)
  })
  it('identityNumberLocked', () => {
    vm.userData.identityNumber = '1234567890123456'
    vm.$store.commit('setCart', {
      cartId: '123'
    })
    expect(vm.identityNumberLocked).to.equal(true)
  })

  it('checkoutNotes', () => {
    let result = '<p>Hello World</p>'
    vm.$store.commit('setCmsContent', {'flashsale-checkout-notes': {value: result}})
    expect(vm.checkoutNotes).to.deep.equal(result)

    vm.$store.commit('setCmsContent', {})
    expect(vm.checkoutNotes).to.deep.equal('')
  })
  it('getAddressesSuccess', () => {
    vm.userData = {}
    vm.$store.commit('setSelectedAddress', {phoneNumber: '+628123232434'})
    vm.getAddressesSuccess()
    expect(vm.userData.phoneNumber).to.equal('+628123232434')
  })
})
