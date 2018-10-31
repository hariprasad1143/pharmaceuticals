import {mapGetters, mapActions} from 'vuex'
import Simplert from 'vue2-simplert'
import formValidator from '@common/src/util/form-validator'
import config from '@common/src/config'
import errorHandler from '@common/src/util/error-handler'
import SaveDataConfirmation from '@/components/SaveDataConfirmation'
import TncModal from '@/components/TncModal'
import ShippingAddress from '@/components/ShippingAddress'
import Cookie from 'js-cookie'

export default {
  props: {
    editable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SaveDataConfirmation,
    TncModal,
    Simplert,
    ShippingAddress
  },
  data () {
    return {
      userData: {},
      validationResults: {},
      tncChecked: false,
      isShowConfirmation: false,
      visibleTnc: false
    }
  },
  created () {
    this.userData = this.personalData
    this.savePersonalData(this.userData)
    this.validateForm('name')
    this.validateForm('phoneNumber')
    this.prepareEdit()
  },
  computed: {
    ...mapGetters(['personalData', 'currentUser', 'cart', 'cartItemSkus', 'shippingAddress', 'cmsContent']),
    identityNumberLocked: function () {
      return !!this.userData.identityNumber && !!this.cart.cartId
    },
    availableToEdit: function () {
      if (this.cart.orderIdHash || Cookie.get('orderId')) {
        return false
      }
      return true
    },
    checkoutNotes: function () {
      return this.cmsContent[config.app.cmsContent.ids.checkoutNotes]
        ? this.cmsContent[config.app.cmsContent.ids.checkoutNotes].value : ''
    },
    address: function () {
      let temp = this.shippingAddress.streetAddress1
      if (this.shippingAddress.streetAddress2) temp = ', ' + this.shippingAddress.streetAddress2
      return temp
    }
  },
  methods: {
    ...mapActions(['getCmsContent', 'savePersonalData']),
    editPersonalData () {
      this.$emit('editPersonalData')
    },
    prepareEdit: function () {
      if (this.userData && this.userData.phoneNumber &&
        this.userData.phoneNumber.indexOf(config.app.form.default.phoneCountryCode) === 0) {
        let phone = this.userData.phoneNumber
        phone = phone.slice(3)
        this.$store.dispatch('saveUserPhoneNumber', phone)
      }
    },
    openTncModal: function () {
      this.visibleTnc = true
    },
    onCloseTncModal: function () {
      this.visibleTnc = false
    },
    openConfirmation: function () {
      let tmp = Object.assign({}, this.userData)
      tmp.phoneNumber = this.getCompletePhoneNumber(this.userData.phoneNumber)
      this.$store.dispatch('savePersonalData', tmp)
      this.isShowConfirmation = true
      this.$store.dispatch('removePersonalDataCaptcha')
    },
    onClose: function () {
      this.isShowConfirmation = false
    },
    onConfirm: function () {
      this.isShowConfirmation = false
      this.savePersonalData()
    },
    constructSaveCurrentUserRequestData: function () {
      const data = Object.assign({}, this.personalData, {items: this.cartItemSkus})
      // data.accessToken = Cookies.get(config.app.cookies.samsungAccessToken.name)
      return data
    },
    saveCurrentPersonalData: function () {
      this.savePersonalData(this.userData)
      this.$emit('savePersonalData')
    },
    // savePersonalDataSuccess: function () {
    //   this.$store.dispatch('hideLoading')
    //   this.$emit('savePersonalData')
    // },
    // savePersonalDataFail: function (response) {
    //   this.$store.dispatch('hideLoading')
    //   let errorList = ''
    //   switch (response.status) {
    //     case 429:
    //       errorList = this.$t('ERRORS.COMMON.Busy')
    //       break
    //     case 404:
    //       errorList = this.$t('ERRORS.COMMON.NotFound')
    //       break
    //     case 401:
    //       errorList = this.$t('ERRORS.COMMON.InvalidData')
    //       break
    //     default:
    //       const errMessage = errorHandler.getMessages(this, response.body.errors)
    //       for (const i in errMessage) {
    //         errorList = errorList + '<div>' + errMessage[i] + '</div>'
    //       }
    //       break
    //   }

    //   this.$refs.simplert.openSimplert({
    //     type: 'error',
    //     title: this.$t('ERRORS.COMMON.Alert.ErrorTitle'),
    //     message: errorList,
    //     customCloseBtnText: this.$t('ERRORS.COMMON.Alert.CloseText'),
    //     disableOverlayClick: true
    //   })
    // },
    savePersonalDataFail: function (response) {
      this.$store.dispatch('hideLoading')
      let errorList = ''
      switch (response.status) {
        case 404:
          errorList = this.$t('ERRORS.COMMON.NotFound')
          break
        case 401:
          errorList = this.$t('ERRORS.COMMON.Account.Unauthorized')
          break
        default:
          const errMessage = errorHandler.getMessages(this, response.body.errors)
          for (const i in errMessage) {
            errorList = errorList + '<div>' + errMessage[i] + '</div>'
          }
          break
      }

      if (response.status !== 429) {
        this.$refs.simplert.openSimplert({
          type: 'error',
          title: this.$t('ERRORS.COMMON.Alert.ErrorTitle'),
          message: errorList,
          customCloseBtnText: this.$t('ERRORS.COMMON.Alert.CloseText'),
          disableOverlayClick: true
        })
      }
    },
    validateForm: function (fieldName) {
      delete this.validationResults[fieldName]
      const fields = this.getValidationFields()
      var errors = []

      // not empty
      errors = errors.concat(formValidator.isNotEmpty(
        {
          fieldName: this.userData[fieldName]
        }
      ))

      // email
      errors = errors.concat(formValidator.visibleEmailFormatError(
        {
          fieldName: this.userData[fieldName]
        }
      ))

      // regex
      errors = errors.length ? errors : errors.concat(formValidator.validateRegex(
        {
          fieldName: this.userData[fieldName]
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
    getFieldErrorMessage (key, fieldName, selectedField) {
      let fieldDesc = this.$t('app.form.fields.' + fieldName, {field: selectedField})
      return this.$t(key, {field: fieldDesc})
    },
    isInputValid: function () {
      for (const i in this.getValidationFields()) {
        if (!this.userData[i]) {
          return false
        }
      }
      if (!this.shippingAddress.address || this.shippingAddress.streetAddress1 === '' ||
        !this.shippingAddress.state || !this.shippingAddress.city || !this.shippingAddress.district ||
        !this.shippingAddress.subDistrict || !this.shippingAddress.postalCode) {
        return false
      }
      return Object.keys(this.validationResults).length === 0
    },
    getCompletePhoneNumber (value) {
      var phone = value
      if (phone.substring(0, 1) === '0') {
        phone = phone.slice(1)
      }
      return config.app.form.default.phoneCountryCode + phone
    },
    getValidationFields: function () {
      return {
        name: [
          {
            exp: '^([^0-9]*)$'
          },
          {
            exp: '^[a-zA-Z ][a-zA-Z .| a-zA-Z ,][a-zA-Z .,| a-zA-Z .,]{0,}$',
            errorKey: 'app.form.validation.invalidFormat'
          }
        ],
        phoneNumber: [
          {
            exp: '^\\d+$'
          },
          {
            exp: '^\\d{9,13}$',
            field: 'phoneNumber',
            errorKey: 'app.form.validation.invalidFormat'
          }
        ]
      }
    }
  }
}
