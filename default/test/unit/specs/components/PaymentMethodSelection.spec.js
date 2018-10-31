import Vue from 'vue'
import router from 'src/router'
import PaymentMethodSelection from '@/components/PaymentMethodSelection'
import i18n from '@common/src/i18n'
import Vuex from 'vuex'
import config from '@common/src/config'

describe('Payment Method Selection', () => {
  const Constructor = Vue.extend(PaymentMethodSelection)
  let getters, actions, store, vm

  beforeEach(() => {
    getters = {
      paymentMethod: state => state.paymentMethod,
      cart: state => state.cart,
      cartItemSkus: state => state.cartItemSkus,
      cartPrice: state => state.cartPrice,
      order: state => state.order,
      payments: state => state.payments,
      paymentTypes: state => state.paymentTypes
    }

    actions = {
      resetPaymentSelection: sinon.stub(),
      setPaymentMethod: sinon.stub(),
      showLoading: sinon.stub(),
      hideLoading: sinon.stub(),
      getPayments: sinon.stub()
    }

    store = new Vuex.Store({
      state: {
        paymentMethod: {},
        cart: {},
        cartItemSkus: [],
        cartPrice: 0,
        order: {},
        payments: [],
        paymentTypes: []
      },
      getters,
      actions
    })
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('initalize well', () => {
    vm.$mount()
    expect(actions.getPayments.called).to.equal(true)
  })

  it('isInCreditCardWithInstallment', () => {
    vm.currentPaymentMethod = {
      code: 'KartuKreditBCA',
      name: 'Kartu Kredit BCA',
      type: 'KartuKreditDebit',
      description: 'Kartu Kredit BCA',
      icon: require('assets/images/banks/bca.jpg'),
      active: true,
      fullPaymentMethod: 'BCACreditCard',
      installmentMethod: 'MigsBCAInst',
      installment: true,
      installments: [3, 6],
      installmentMinAmount: 500000,
      installmentMaxAmount: 999999999999
    }
    store.state.cartPrice = 1000000
    expect(vm.isInCreditCardWithInstallment).to.equal(true)

    vm.currentPaymentMethod = {
      code: 'KlikBCA',
      name: 'KlikBCA',
      type: 'InternetBanking',
      description: 'KlikBCA',
      icon: require('assets/images/banks/mega.png'),
      active: true,
      fullPaymentMethod: 'KlikBCA'
    }
    expect(vm.isInCreditCardWithInstallment).to.equal(false)
  })

  it('isKlikBCA', () => {
    vm.currentPaymentMethod = {
      code: 'KartuKreditBCA'
    }
    expect(vm.isKlikBCA).to.equal(false)

    vm.currentPaymentMethod = {
      code: 'KlikBCA'
    }
    expect(vm.isKlikBCA).to.equal(true)
  })

  it('isKlikpayInstallment', () => {
    vm.currentPaymentMethod = {
      code: 'KartuKreditBCA',
      installment: true,
      installmentMinAmount: 500000,
      installmentMaxAmount: 999999999999
    }
    store.state.cartPrice = 1000000
    expect(vm.isKlikpayInstallment).to.equal(false)

    vm.currentPaymentMethod = {
      code: 'Klikpay',
      installment: true,
      installments: [6, 12],
      installmentMinAmount: 500000,
      installmentMaxAmount: 999999999999
    }
    expect(vm.isKlikpayInstallment).to.equal(true)

    vm.currentPaymentMethod = {
      code: 'Klikpay',
      installment: false,
      minInstAmount: 500000,
      maxInstAmount: 999999999999
    }
    expect(vm.isKlikpayInstallment).to.equal(false)
  })

  it('isTransferWithTypes', () => {
    vm.currentPaymentMethod = {
      code: 'BankMandiri',
      type: 'Transfer',
      transferTypes: [
        {
          paymentMethod: 'MandiriBillPayment',
          name: '',
          minAmount: 50000,
          maxAmount: 999999999999
        }
      ]
    }
    expect(vm.isTransferWithTypes).to.equal(false)

    vm.currentPaymentMethod = {
      code: 'BankLainnya',
      type: 'Transfer',
      transferTypes: [
        {
          paymentMethod: 'AtmBersama',
          name: 'ATM'
        },
        {
          paymentMethod: 'VirtualAccountMandiri',
          name: 'Non ATM'
        }
      ]
    }
    store.state.cartPrice = 1000000
    expect(vm.isTransferWithTypes).to.equal(true)
  })

  it('selectedCard', () => {
    vm.currentPaymentMethod = {
      name: 'Bank Mandiri'
    }
    expect(vm.selectedCard).to.equal('Bank Mandiri')

    vm.currentPaymentMethod = {}
    expect(vm.selectedCard).to.equal('Pilih Opsi Pembayaran')
  })

  it('selectedInstallment', () => {
    vm.selectedPayment = {
      installment: 3
    }
    store.state.cartPrice = 15000
    expect(vm.selectedInstallment).to.equal('3x Cicilan 0% - Rp 5.000 / bln')

    vm.currentPaymentMethod = {
      code: 'Klikpay'
    }
    vm.selectedPayment = {
      method: 'Klikpay'
    }
    expect(vm.selectedInstallment).to.equal('BCA KlikPay')

    vm.currentPaymentMethod = {
      code: 'BCACreditCard'
    }
    expect(vm.selectedInstallment).to.equal('Bayar Penuh')

    vm.selectedPayment = {}
    expect(vm.selectedInstallment).to.equal('Pilih Cicilan')
  })

  it('displayedPaymentTypes', () => {
    store.state.paymentTypes = [
      {
        type: 'KartuKreditDebit',
        active: true
      },
      {
        type: 'InternetBanking',
        active: false
      }
    ]
    let result = [{
      type: 'KartuKreditDebit',
      active: true,
      name_i18n: 'app.checkout.payment.creditCard',
      elId: 'checkout-payment_method-type-credit_card'
    }]
    expect(vm.displayedPaymentTypes).to.deep.equal(result)
  })

  it('isInFilter', () => {
    vm.activeTab = 'abc'
    expect(vm.isInFilter({ type: 'abc1', active: true })).to.equal(false)
    expect(vm.isInFilter({ type: 'abc', active: true })).to.equal(true)
    expect(vm.isInFilter({ type: 'abc', active: false })).to.equal(false)

    vm.activeTab = 'abc'
    store.state.order = {
      orderIdHash: 'ABC'
    }
    expect(vm.isInFilter({ type: 'abc1', active: true, availableForChangePayment: false })).to.equal(false)
    expect(vm.isInFilter({ type: 'abc', active: true, availableForChangePayment: true })).to.equal(true)
  })

  it('selectPaymentType', () => {
    let clearAllInputtedDataSpy = sinon.spy(vm, 'clearAllInputtedData')
    vm.selectPaymentType({ type: 'dore' })
    clearAllInputtedDataSpy.should.have.been.called
    expect(vm.activeTab).to.equal('dore')
    expect(vm.toggleCardPayment().checked).to.equal(false)
    clearAllInputtedDataSpy.restore()
  })

  it('validatePaymentType', () => {
    expect(vm.validatePaymentType({ type: 'KartuKreditDebit', installment: false })).to.equal(true)
    store.state.cartPrice = 15000
    expect(vm.validatePaymentType({ type: 'KartuKreditDebit', installment: true, installmentMinAmount: 50000 })).to.equal(true)
    expect(vm.validatePaymentType({
      type: 'Transfer',
      transferTypes: [{paymentMethod: 'MandiriBillPayment'}]
    })).to.equal(true)
    expect(vm.validatePaymentType({ type: 'InternetBanking', code: 'EPayBRI' })).to.equal(true)
    expect(vm.validatePaymentType({ type: 'InternetBanking', code: 'Klikpay', installment: true, installmentMinAmount: 50000 })).to.equal(true)
    expect(vm.validatePaymentType({ type: 'InternetBanking', code: 'Klikpay', installment: false })).to.equal(true)
    expect(vm.validatePaymentType({ type: 'InternetBanking', code: 'Klikpay', installment: true, installmentMinAmount: 10000 })).to.equal(false)
    expect(vm.validatePaymentType({ type: 'KartuKreditDebit', installment: true, installmentMinAmount: 10000 })).to.equal(false)
  })

  it('clearSelectedPayment', () => {
    vm.clearSelectedPayment()
    expect(vm.selectedPayment).to.deep.equal({})
    expect(vm.isDirectDiscount).to.be.true
    expect(actions.resetPaymentSelection.called).to.equal(true)
  })

  it('select payment', () => {
    let payment = {
      code: 'BankMandiri',
      name: 'Bank Mandiri',
      type: 'Transfer',
      description: 'Bank Mandiri',
      icon: require('assets/images/banks/permata.png'),
      active: true,
      transferTypes: [
        {
          paymentMethod: 'MandiriBillPayment',
          name: '',
          minAmount: 50000,
          maxAmount: 999999999999
        }
      ]
    }
    let setPaymentMethodSpy = sinon.spy(vm, 'setPaymentMethod')
    let setPaymentDataSpy = sinon.spy(vm, 'setPaymentData')
    vm.selectPayment(payment)
    expect(vm.toggleCardPayment().checked).to.equal(false)
    expect(vm.currentPaymentMethod).to.deep.equal(payment)
    setPaymentMethodSpy.should.have.been.calledOnce
    setPaymentMethodSpy.should.have.been.calledWith(payment)
    setPaymentDataSpy.should.have.been.calledOnce
    setPaymentMethodSpy.restore()
    setPaymentDataSpy.restore()
  })

  it('select payment two step', () => {
    let payment = {
      code: 'KartuKreditBCA',
      name: 'Kartu Kredit BCA',
      type: 'KartuKreditDebit',
      description: 'Kartu Kredit BCA',
      icon: require('assets/images/banks/bca.jpg'),
      active: true,
      fullPaymentMethod: 'BCACreditCard',
      installmentMethod: 'MigsBCAInst',
      installment: true,
      installments: [3, 6],
      installmentMinAmount: 500000,
      installmentMaxAmount: 999999999999
    }
    store.state.cartPrice = 1500000
    let setPaymentMethodSpy = sinon.spy(vm, 'setPaymentMethod')
    let setPaymentDataSpy = sinon.spy(vm, 'setPaymentData')
    vm.selectPayment(payment)
    expect(vm.toggleCardPayment().checked).to.equal(false)
    expect(vm.currentPaymentMethod).to.deep.equal(payment)
    setPaymentMethodSpy.should.have.been.calledOnce
    setPaymentMethodSpy.should.have.been.calledWith(payment)
    setPaymentDataSpy.should.have.callCount(0)
    setPaymentMethodSpy.restore()
    setPaymentDataSpy.restore()
  })

  it('setPaymentMethod', () => {
    vm.setPaymentMethod(
      {
        code: 'KartuKreditMega',
        name: 'Kartu Kredit Mega',
        bank: 'Mega',
        type: 'KartuKreditDebit',
        description: 'Kartu Kredit Mega',
        icon: require('assets/images/banks/bri.png'),
        active: true,
        installment: false,
        fullPaymentMethod: 'MegaCreditCard'
      }
    )
    expect(vm.selectedPayment).to.deep.equal({ name: 'Kartu Kredit Mega', bank: 'Mega', code: 'KartuKreditMega', method: 'MegaCreditCard' })

    vm.setPaymentMethod(
      {
        code: 'BankMandiri',
        name: 'Bank Mandiri',
        bank: 'Mandiri',
        type: 'Transfer',
        description: 'Bank Mandiri',
        icon: require('assets/images/banks/permata.png'),
        active: true,
        transferTypes: [
          {
            paymentMethod: 'MandiriBillPayment',
            name: '',
            minAmount: 50000,
            maxAmount: 999999999999
          }
        ]
      }
    )
    expect(vm.selectedPayment).to.deep.equal({ name: 'Bank Mandiri', bank: 'Mandiri', code: 'BankMandiri', method: 'MandiriBillPayment' })
  })

  it('setPaymentData', () => {
    vm.selectedPayment = { a: 1 }
    vm.setPaymentData()
    expect(actions.setPaymentMethod.called).to.equal(true)
  })

  it('setInstallmentAndPayment fullPay', () => {
    let setPaymentDataSpy = sinon.spy(vm, 'setPaymentData')
    vm.currentPaymentMethod = {
      code: 'BCACreditCard',
      active: true,
      bank: 'BCA',
      name: 'Kartu Kredit BCA',
      description: 'Kartu Kredit BCA',
      type: 'KartuKreditDebit',
      icon: require('assets/images/banks/bca.jpg'),
      fullPaymentMethod: 'BCACreditCard',
      installmentMethod: 'MigsBCAInst',
      installment: true,
      installmentMonths: [3, 6],
      installmentMinAmount: 500000,
      installmentMaxAmount: 999999999999
    }
    vm.setInstallmentAndPayment(0)
    expect(vm.toggleCardInstallment().checked).to.equal(false)
    expect(vm.selectedPayment.method).to.equal('BCACreditCard')
    setPaymentDataSpy.should.have.been.calledOnce
    setPaymentDataSpy.restore()
  })

  it('setInstallmentAndPayment installment', () => {
    vm.currentPaymentMethod = {
      code: 'BCACreditCard',
      active: true,
      bank: 'BCA',
      name: 'Kartu Kredit BCA',
      description: 'Kartu Kredit BCA',
      type: 'KartuKreditDebit',
      icon: require('assets/images/banks/bca.jpg'),
      fullPaymentMethod: 'BCACreditCard',
      installmentMethod: 'MigsBCAInst',
      installment: true,
      installments: [3, 6],
      installmentMinAmount: 500000,
      installmentMaxAmount: 999999999999
    }
    vm.setInstallmentAndPayment(3)
    expect(vm.toggleCardInstallment().checked).to.equal(false)
    expect(vm.selectedPayment.method).to.equal('MigsBCAInst')
    expect(vm.selectedPayment.installment).to.equal(3)
  })

  it('setBcaUserIdAndPayment valid user id', () => {
    let setPaymentDataSpy = sinon.spy(vm, 'setPaymentData')
    vm.currentPaymentMethod = {
      code: 'KlikBCA',
      name: 'KlikBCA',
      type: 'InternetBanking',
      description: 'KlikBCA',
      icon: require('assets/images/banks/mega.png'),
      active: true,
      fullPaymentMethod: 'KlikBCA'
    }
    vm.selectedPayment = {}
    vm.paymentFields.klikBcaUserId = '123abc'
    vm.setBcaUserIdAndPayment()
    expect(vm.selectedPayment).to.deep.equal({ code: 'KlikBCA', method: 'KlikBCA', klikBcaUserId: '123abc' })
    setPaymentDataSpy.should.have.been.calledOnce
    setPaymentDataSpy.restore()
  })

  it('setBcaUserIdAndPayment not valid user id', () => {
    let clearSelectedPaymentSpy = sinon.spy(vm, 'clearSelectedPayment')
    vm.currentPaymentMethod = {
      code: 'KlikBCA',
      name: 'KlikBCA',
      type: 'InternetBanking',
      description: 'KlikBCA',
      icon: require('assets/images/banks/mega.png'),
      active: true,
      fullPaymentMethod: 'KlikBCA'
    }
    vm.selectedPayment = {}
    vm.validationResults['klikBcaUserId'] = 'error'
    vm.setBcaUserIdAndPayment()
    clearSelectedPaymentSpy.should.have.been.calledOnce
    clearSelectedPaymentSpy.restore()
  })

  it('setBankTransferPayment', () => {
    let setPaymentDataSpy = sinon.spy(vm, 'setPaymentData')
    vm.currentPaymentMethod = {
      code: 'BankBCA'
    }
    vm.setBankTransferPayment(
      {
        paymentMethod: 'VirtualAccountBcaOnline',
        name: 'Non ATM'
      }
    )
    expect(vm.toggleCardTransfer().checked).to.equal(false)
    expect(vm.selectedPayment).to.deep.equal({ code: 'BankBCA', transferType: 'Non ATM', method: 'VirtualAccountBcaOnline' })
    setPaymentDataSpy.should.have.been.calledOnce
    setPaymentDataSpy.restore()
  })

  it('validateForm', () => {
    vm.paymentFields.klikBcaUserId = '123abc'
    vm.validateForm('klikBcaUserId')
    expect(vm.validationResults['klikBcaUserId']).to.equal(undefined)

    vm.paymentFields.klikBcaUserId = '123abc.'
    vm.validateForm('klikBcaUserId')
    expect(!!vm.validationResults['klikBcaUserId']).to.equal(true)
  })

  it('setDefaultActivePaymentType', () => {
    store.state.paymentTypes = [
      {
        type: 'KartuKreditDebit',
        active: true
      },
      {
        type: 'InternetBanking',
        active: false
      }
    ]
    vm.setDefaultActivePaymentType()
    expect(vm.activeTab).to.equal('KartuKreditDebit')
    store.state.paymentTypes = []
    vm.setDefaultActivePaymentType()
    expect(vm.activeTab).to.equal('')
  })

  it('setDefaultValue', () => {
    let clearSelectedPaymentSpy = sinon.spy(vm, 'clearSelectedPayment')
    let setDefaultActivePaymentTypeSpy = sinon.spy(vm, 'setDefaultActivePaymentType')
    store.state.order = {}
    store.state.paymentTypes = []
    store.state.paymentMethod = {klikBcaUserId: 'ba'}
    vm.setDefaultValue()
    expect(vm.activeTab).to.equal('')
    clearSelectedPaymentSpy.should.have.been.calledOnce
    setDefaultActivePaymentTypeSpy.should.have.been.calledOnce
    clearSelectedPaymentSpy.restore()
    setDefaultActivePaymentTypeSpy.restore()
  })

  it('setDefaultValue changePayment', () => {
    store.state.order = {orderIdHash: 'ABC'}
    store.state.paymentTypes = []
    store.state.paymentMethod = {method: 'VirtualAccountBcaOnline'}
    store.state.payments = [{
      code: 'BankBCA',
      type: 'Transfer',
      name: 'Bank BCA',
      bank: 'BCA',
      active: true,
      availableForChangePayment: true,
      fullPaymentMethod: '',
      installment: false,
      installmentMethod: '',
      installmentMinAmount: 0,
      installmentMaxAmount: 0,
      installments: [],
      transferTypes: [
        {
          paymentMethod: 'VirtualAccountBcaOnline',
          name: 'Non ATM',
          minAmount: 50000,
          maxAmount: 999999999999
        }
      ]
    }]
    vm.setDefaultValue()
    expect(vm.activeTab).to.equal('Transfer')
    expect(vm.currentPaymentMethod.code).to.equal('BankBCA')
  })

  it('setDefaultValue changePayment notAvailableForChangepayment', () => {
    let clearAllInputtedDataSpy = sinon.spy(vm, 'clearAllInputtedData')
    store.state.order = {orderIdHash: 'ABC'}
    store.state.paymentTypes = []
    store.state.paymentMethod = {method: 'VirtualAccountBcaOnline'}
    store.state.payments = [{
      code: 'BankBCA',
      type: 'Transfer',
      name: 'Bank BCA',
      bank: 'BCA',
      active: true,
      availableForChangePayment: false,
      fullPaymentMethod: '',
      installment: false,
      installmentMethod: '',
      installmentMinAmount: 0,
      installmentMaxAmount: 0,
      installments: [],
      transferTypes: [
        {
          paymentMethod: 'VirtualAccountBcaOnline',
          name: 'Non ATM',
          minAmount: 50000,
          maxAmount: 999999999999
        }
      ]
    }]
    vm.setDefaultValue()
    clearAllInputtedDataSpy.should.have.been.calledOnce
    clearAllInputtedDataSpy.restore()
  })

  it('paymentListSorted', () => {
    for (let i = 1; i < vm.paymentListSorted.length; i++) {
      const prev = vm.paymentListSorted[i - 1]
      const current = vm.paymentListSorted[i]
      expect(current.name >= prev.name).to.equal(true)
    }
  })

  it('sortAscendingByName', () => {
    expect(vm.sortAscendingByName({
      name: 'a'
    }, {
      name: 'b'
    })).to.equal(-1)
    expect(vm.sortAscendingByName({
      name: 'b'
    }, {
      name: 'a'
    })).to.equal(1)
    expect(vm.sortAscendingByName({
      name: 'b'
    }, {
      name: 'b'
    })).to.equal(0)
  })

  it('setInstallment changePayment', () => {
    let dispatchSpy = sinon.spy(vm.$store, 'dispatch')
    let order = {
      orderIdHash: 'ABCDEFG',
      customer: {a: 0},
      payment: {method: 'MIGSBCAInst', installment: 6, details: {}},
      discount: -1250000,
      items: [{'sku': 'SAD-60001-00002-00001', 'name': 'Samsung Note8 Emas Gold', 'amount': 14000000, 'quantity': 1}],
      pickUpStore: {
        'id': '6ccefcb5-b67c-4f7f-a7b1-5baf95996ccb',
        'name': 'SEP Tanjung Pinang City Center Lt.2 Gf 2',
        'address': 'Jl. Raya Dompak, Batu Ix',
        'city': 'Tanjung Pinang',
        'province': 'Kepulauan Riau',
        'description': '',
        'active': true,
        'type': 'SEP'
      },
      adjustments: [
        {
          amount: -1000000,
          name: 'GLP S9 REG bank BRI'
        },
        {
          amount: -250000,
          name: 'Galaxy Launch Pack SGI S4 Promo',
          promoCode: 'SS4W3CCWFWRKG'
        }
      ]
    }
    store.state.order = order
    vm.currentPaymentMethod = {installmentMethod: 'MIGSBCAInst'}
    vm.setInstallmentAndPayment(12)
    dispatchSpy.should.have.been.calledTwice
    dispatchSpy.restore()
  })

  it('paidAmount check', () => {
    store.state.cartPrice = 1000000
    expect(vm.paidAmount).to.equal(1000000)
  })

  it('openTncModal', done => {
    vm.visibleTnc = false
    vm.openTncModal()
    vm.$nextTick(() => {
      expect(vm.visibleTnc).to.be.true
      done()
    })
  })

  it('onCloseTncModal', () => {
    vm.visibleTnc = true
    vm.onCloseTncModal()
    expect(vm.visibleTnc).to.be.false
  })
})
