// import Vue from 'vue'
// import router from 'src/router'
// import store from '@common/src/store'
// import CheckOrder from 'src/pages/CheckOrder'
// import i18n from '@common/src/i18n'
// import captchaKey from '@common/src/util/recaptcha'

// describe('CheckOrder.vue', () => {
//   var vm = null
//   before(() => {
//     const Constructor = Vue.extend(CheckOrder)
//     vm = new Constructor({
//       router,
//       store,
//       i18n
//     })
//   })

//   it('Initialized well', () => {
//     vm.$mount()
//   })
//   it('Onverify recaptcha', () => {
//     vm.onVerify()
//   })
//   it('onExpired recaptcha', () => {
//     vm.onExpired()
//   })
//   it('getOrderSuccess', (done) => {
//     var hashCode = { body: { data: {
//       orderIdHash: '980809809'
//     }}}
//     vm.getOrderSuccess(hashCode)
//     vm.$nextTick(() => {
//       expect(vm.$route.path).to.equal('/flash-sale/order-detail/' + hashCode.body.data.orderIdHash)
//       done()
//     })
//   })
//   it('getOrderFailed 429', () => {
//     const res = {status: 429}
//     vm.resetCaptcha()
//     vm.getOrderFailed(res)
//     expect(res.status).to.equal(429)
//   })

//   it('getOrderFailed 404', () => {
//     const res = {status: 404}
//     vm.getOrderFailed(res)
//     expect(res.status).to.equal(404)
//   })

//   it('getOrderFailed 401', () => {
//     const res = {status: 401}
//     vm.getOrderFailed(res)
//     expect(res.status).to.equal(401)
//   })

//   it('getOrderFailed others', () => {
//     const res = {body: { errors: { common: ['Unspecified'] } }}
//     vm.getOrderFailed(res)
//     expect(typeof res.body.errors).to.equal('object')
//   })

//   it('submitCheckOrder', done => {
//     const oldDispatch = vm.$store.dispatch
//     vm.$store.dispatch = (action, data) => {
//       expect(action).to.equal('getOrderStatus')
//       expect(data.data).to.deep.equal({
//         phoneNumber: '+6287781812345',
//         identityNumber: '123456789',
//         orderId: '09876543',
//         email: 'apa@apa.com',
//         captcha: '2198218291289'
//       })
//       vm.$store.dispatch = oldDispatch
//       done()
//     }
//     vm.checkOrderData = {
//       phoneNumber: '87781812345',
//       identityNumber: '123456789',
//       orderId: '09876543',
//       email: 'apa@apa.com',
//       captcha: '2198218291289'
//     }
//     vm.submitCheckOrder()
//   })

//   it('submitCheckOrder no captcha', () => {
//     vm.checkOrderData = {
//       phoneNumber: '87781812345',
//       identityNumber: '123456789',
//       orderId: '09876543',
//       email: 'apa@apa.com'
//     }
//     const oldDispatch = vm.$store.dispatch
//     vm.$store.dispatch = (action, data) => {
//       vm.$store.dispatch = oldDispatch
//     }
//     expect(vm.submitCheckOrder()).to.deep.equal({
//       phoneNumber: '+6287781812345',
//       identityNumber: '123456789',
//       orderId: '09876543',
//       email: 'apa@apa.com'
//     })
//   })

//   it('validateForm', () => {
//     vm.checkOrderData = {phoneNumber: '0987654567'}
//     vm.validateForm('phoneNumber')
//     expect(typeof vm.validationResults['phoneNumber']).to.equal('undefined')
//   })

//   it('validateForm get error empty', () => {
//     vm.checkOrderData = {phoneNumber: ''}
//     var result = [
//       {
//         field: 'phoneNumber',
//         error: 'app.form.validation.required'
//       }
//     ]
//     vm.validateForm('phoneNumber')
//     expect(vm.validationResults['phoneNumber'][0].error).to.deep.equal(result[0].error)
//   })

//   it('validateForm get error regex', () => {
//     vm.checkOrderData = {email: 'email'}
//     vm.validateForm('email')
//     var result = [
//       {
//         field: 'email',
//         error: 'app.form.validation.invalidFormat'
//       }
//     ]
//     expect(vm.validationResults['email'][0].error).to.deep.equal(result[0].error)
//   })

//   it('getFieldErrorMessage', () => {
//     var result = vm.getFieldErrorMessage('app.form.validation.required', 'phoneNumber')
//     expect(result).to.equal('Silakan masukan No Handphone anda')
//   })

//   it('getCompletePhoneNumber with 0', () => {
//     vm.checkOrderData.phoneNumber = '0877677676767'
//     var result = vm.getCompletePhoneNumber(vm.checkOrderData.phoneNumber)
//     expect(result).to.equal('+62877677676767')
//   })

//   it('getCompletePhoneNumber without 0', () => {
//     vm.checkOrderData.phoneNumber = '123456789'
//     var result = vm.getCompletePhoneNumber(vm.checkOrderData.phoneNumber)
//     expect(result).to.equal('+62123456789')
//   })

//   it('isInputValid checkOrderData', () => {
//     vm.checkOrderData = {
//       phoneNumber: '0987654567',
//       email: 'mimimi@mimi.com',
//       orderId: '234989809809809',
//       identityNumber: '9809809809',
//       captcha: '809809809809sadasd'
//     }
//     vm.validationResults = {}
//     expect(vm.isInputValid()).to.equal(true)
//   })

//   it('captchaKey', () => {
//     const oldCaptchaKey = captchaKey.getCaptchaByEnv
//     captchaKey.getCaptchaByEnv = () => {
//       captchaKey.getCaptchaByEnv = oldCaptchaKey
//       return true
//     }
//     expect(vm.captchaKey).to.be.true
//   })
// })
