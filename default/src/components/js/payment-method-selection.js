import formValidator from '@common/src/util/form-validator'
const TncModal = () => import('@/components/TncModal')
import {mapGetters} from 'vuex'
import paymentUtil from '@common/src/util/payment'
import config from '@common/src/config'

const fields = {
  klikBcaUserId: [
    {
      exp: '^[a-zA-Z0-9]+$'
    }
  ]
}

export default {
  name: 'PaymentMethodSelection',
  props: {
    editable: {
      type: Boolean,
      default: false
    }
  },
  created () {
    if ((!this.cart || !this.cart.items.length) && !this.$route.query.redirect) {
      this.$router.replace(config.app.pages.home)
    }
    this.scrollToTop()
    this.setInitChangePayment()
  },
  data () {
    return {
      activeTab: '',
      currentPaymentMethod: {},
      selectedPayment: {},
      paymentFields: {
        klikBcaUserId: ''
      },
      validationResults: {},
      isDirectDiscount: true,
      visibleTnc: false,
      paymentCategory: {},
      paymentData: {},
      currentOptionLabel: '',
      currentMethodLabel: '',
      visibleError: false,
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters([
      'paymentMethod',
      'cart',
      'cartItemSkus',
      'cartPrice',
      'order',
      'payments',
      'paymentTypes'
    ]),
    isKlikBCA: function () {
      return this.selectedPayment.code === 'KlikBCA'
    },
    isCreditCard: function () {
      return this.activeTab === 'KartuKreditDebit' || this.selectedPayment.code === 'KlikPAYFullPayment' ||
      this.selectedPayment.code === 'KlikPayInst'
    },
    selectedCard: function () {
      if (this.currentPaymentMethod.name) {
        return this.currentPaymentMethod.name
      } else if (this.paymentListSorted[this.activeTab] &&
        this.paymentListSorted[this.activeTab].methods.length === 1) {
        this.selectPaymentType(this.paymentListSorted[this.activeTab].methods[0])
        this.selectPayment(this.paymentListSorted[this.activeTab])
        return this.paymentListSorted[this.activeTab].name
      }
      return this.$t('app.checkout.payment.choosePaymentOption')
    },
    selectedInstallment: function () {
      if (this.selectedPayment.tenor === undefined) return this.$t('app.checkout.payment.option')
      if (this.selectedPayment.tenor === 0) return this.$t('app.checkout.payment.fullPayment')
      let paymentPerTenor = this.$options.filters.roundNumber(this.countPaymentPerTenor(this.paidAmount, this.selectedPayment.tenor))
      return this.selectedPayment.tenor + 'x' + ' Cicilan 0% - ' + this.$options.filters.currencyFormat(paymentPerTenor) + ' / bln'
    },
    displayedPaymentTypes: function () {
      let tmp = []
      for (const i in this.paymentTypes) {
        let item = {
          type: this.paymentTypes[i].code,
          name_i18n: this.paymentTypes[i].name,
          optionLabel: this.paymentTypes[i].optionLabel,
          methodLabel: this.paymentTypes[i].methodLabel,
          elId: 'checkout-payment_method-type-' + (this.paymentTypes[i].code).replace('-', '_')
        }
        tmp.push(item)
      }
      return tmp
    },
    paymentListSorted: function () {
      this.paymentCategory = {}
      for (const i in this.payments) {
        let type = this.payments[i].type
        let optionCode = this.payments[i].paymentOptionCode
        if (!this.paymentCategory[type]) {
          this.paymentCategory[type] = {}
        }
        if (!this.paymentCategory[type][optionCode]) {
          this.paymentCategory[type][optionCode] = {
            name: this.payments[i].paymentOptionName
          }
        }
        if (!this.paymentCategory[type][optionCode].methods) {
          this.paymentCategory[type][optionCode].methods = []
        }
        if (type === this.payments[i].type) {
          this.setType(this.payments[i], this.paymentCategory[type][optionCode].methods)
        }
      }

      for (const p in this.paymentCategory) {
        if (this.activeTab === p) {
          return this.paymentCategory[this.activeTab]
        }
      }
    },
    paidAmount: function () {
      return this.cartPrice
    },
    getInstallments: function () {
      if (!this.paymentListSorted) return
      for (const i in this.paymentListSorted) {
        for (const j in this.paymentListSorted[i].methods) {
          if (this.selectedPayment.code === this.paymentListSorted[i].methods[j].code) return this.paymentListSorted[i].methods
        }
      }
    },
    visibleInstallment: function () {
      return this.selectedPayment.code && this.isCreditCard
    }
  },
  methods: {
    setInitChangePayment: function () {
      if (!this.paymentMethod.paymentMethod) return
      let userId = this.paymentMethod.extendedData['KLIK_BCA_USER_ID']
      let tenorPayment = this.paymentMethod.tenor
      this.payments.map(payment => {
        if (payment.code === this.paymentMethod.paymentMethod) {
          this.activeTab = payment.type
          let data = this.paymentListSorted
          this.selectPayment(data[payment.paymentOptionCode])
          if (this.isKlikBCA) this.setBcaUserIdAndPayment(userId)
          else {
            let installments = this.getInstallments
            installments.map(data => {
              let tenor = data.tenor ? data.tenor : 0
              if (data.code === payment.code && tenorPayment === tenor) this.setInstallmentAndPayment(tenor, data)
            })
          }
        }
      })
    },
    selectPaymentType: function (item) {
      this.clearAllInputtedData()
      this.activeTab = item.type
      this.currentOptionLabel = item.optionLabel
      this.currentMethodLabel = item.methodLabel
      this.toggleCardPayment().checked = true
    },
    clearAllInputtedData: function () {
      this.clearSelectedPayment()
      this.currentPaymentMethod = {}
      this.paymentFields.klikBcaUserId = ''
    },
    clearSelectedPayment: function () {
      this.selectedPayment = {}
      this.isDirectDiscount = true
      this.$store.dispatch('resetPaymentSelection')
    },
    selectPayment: function (item) {
      this.toggleCardPayment().checked = false
      this.clearAllInputtedData()
      this.currentPaymentMethod = item
      this.selectedPayment.code = item.methods[0].code
      if (item.methods.length === 1) {
        this.selectedPayment.tnc = item.methods[0].tnc
        if (!this.isKlikBCA && !this.isCreditCard) this.selectedPayment.name = item.name
      }
      if (this.isKlikBCA) this.selectedPayment.validationTnc = item.methods[0].paymentRequiredDataList[0].validationTnc
      this.setPaymentData()
    },
    setPaymentData: function () {
      this.$store.dispatch('setPaymentMethod', this.selectedPayment)
    },
    setInstallmentAndPayment: function (tenor, itemObject) {
      this.toggleCardInstallment().checked = false
      this.clearSelectedPayment()
      this.selectedPayment.code = itemObject.code
      this.selectedPayment.tenor = tenor
      this.selectedPayment.name = this.currentPaymentMethod.name
      this.selectedPayment.tnc = itemObject.tnc
      this.setPaymentData()
    },
    toggleCardInstallment: function () {
      return this.$refs.toggleCardInstallment || {checked: false}
    },
    toggleCardTransfer: function () {
      return this.$refs.toggleCardTransfer || {checked: false}
    },
    toggleCardPayment: function () {
      return this.$refs.toggleCardPayment || {checked: false}
    },
    setBcaUserIdAndPayment: function (userId) {
      this.visibleError = false
      this.errorMessage = ''
      if (this.isInputValid('klikBcaUserId')) {
        this.selectedPayment.code = this.currentPaymentMethod.methods[0].code
        this.selectedPayment.name = this.currentPaymentMethod.name
        this.selectedPayment.klikBcaUserId = userId === undefined ? this.paymentFields.klikBcaUserId : this.paymentFields.klikBcaUserId = userId
        this.setPaymentData()
      } else {
        this.visibleError = true
        this.errorMessage = this.selectedPayment.validationTnc
        this.selectedPayment = {
          code: this.currentPaymentMethod.methods[0].code,
          tnc: this.selectedPayment.tnc
        }
        this.setPaymentData()
      }
    },
    setBankTransferPayment: function (item) {
      this.toggleCardTransfer().checked = false
      this.clearSelectedPayment()
      this.selectedPayment.code = this.currentPaymentMethod.methods[0].code
      this.setPaymentData()
    },
    validateForm: function (fieldName) {
      delete this.validationResults[fieldName]
      var errors = []

      // not empty
      errors = errors.concat(formValidator.isNotEmpty(
        {
          fieldName: this.paymentFields[fieldName]
        }
      ))

      // regex
      errors = errors.length ? errors : errors.concat(formValidator.validateRegex(
        {
          fieldName: this.paymentFields[fieldName]
        },
        {
          fieldName: fields[fieldName]
        }
      ))

      if (errors.length > 0) {
        this.validationResults[fieldName] = errors
      }
      this.$forceUpdate()
    },
    isInputValid: function (field) {
      return typeof this.validationResults[field] === 'undefined'
    },
    countPaymentPerTenor: function (paymentAmount, tenor, interest = 0) {
      return (paymentAmount / tenor) + ((paymentAmount * interest) / tenor)
    },
    setDefaultValue: function () {
      this.toggleCardPayment().checked = false
      this.selectedPayment = this.paymentMethod
      if (this.order.orderIdHash) {
        let orderPayment = paymentUtil.getPaymentMethodsByMethod(this.paymentMethod.method, this.payments)
        // set default value
        if (orderPayment && orderPayment.availableForChangePayment) {
          this.currentPaymentMethod = orderPayment
          this.activeTab = this.currentPaymentMethod.type
        } else {
          this.clearAllInputtedData()
        }
        // set default transfer type for bank transfer
        if (this.currentPaymentMethod.transferType) {
          this.selectedPayment.transferType = this.currentPaymentMethod.transferType
        }
      }
      if (this.selectedPayment.klikBcaUserId) {
        this.clearSelectedPayment()
      }
    },
    sortAscendingByName: (a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    },
    openTncModal: function () {
      this.visibleTnc = true
    },
    onCloseTncModal: function () {
      this.visibleTnc = false
    },
    setTenor: function (payment, tenor) {
      return {
        code: payment.code,
        paymentOptionCode: payment.paymentOptionCode,
        paymentOptionName: payment.paymentOptionName,
        alias: payment.alias,
        type: payment.type,
        name: payment.name,
        active: payment.active,
        installment: payment.installment,
        minAmount: tenor.minAmount,
        maxAmount: payment.maxAmount,
        tenor: tenor.tenor,
        paymentRequiredDataList: payment.paymentRequiredDataList,
        tnc: payment.tnc
      }
    },
    setType: function (payment, paymentDetail) {
      if (!payment.installment) paymentDetail.push(this.setTenor(payment, 0))
      payment.installments.map(data => {
        paymentDetail.push(this.setTenor(payment, data))
      })
    },
    scrollToTop: function () {
      window.scrollTo(0, 200)
    }
  },
  components: {
    TncModal
  }
}
