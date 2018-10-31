import VueRecaptcha from 'vue-recaptcha'
import {mapGetters} from 'vuex'
import config from '@common/src/config'
import formValidator from '@common/src/util/form-validator'
import Simplert from 'vue2-simplert'
import errorHandler from '@common/src/util/error-handler'
import captchaKey from '@common/src/util/recaptcha'

const fields = {
  phoneNumber: [
    {
      exp: '^\\d+$'
    },
    {
      exp: '^\\d{9,13}$',
      errorKey: 'app.form.validation.tooShortOrTooLong'
    }
  ],
  email: [
    {
      exp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  ],
  identityNumber: [],
  orderId: []
}

export default {
  data: () => {
    return {
      sitekey: config.app.recaptcha.sitekey,
      checkOrderData: {},
      validationResults: {},
      captchaInvalid: false
    }
  },
  methods: {
    onVerify: function (response) {
      this.checkOrderData.captcha = response
      this.captchaInvalid = false
    },
    onExpired: function () {
      console.log('Expired')
    },
    submitCheckOrder: function () {
      var self = this
      const dataCheckOrder = {
        phoneNumber: this.getCompletePhoneNumber(this.checkOrderData.phoneNumber),
        identityNumber: this.checkOrderData.identityNumber,
        orderId: this.checkOrderData.orderId,
        email: this.checkOrderData.email
      }
      if (this.checkOrderData.captcha) {
        dataCheckOrder.captcha = this.checkOrderData.captcha
      }
      this.captchaInvalid = this.isCaptchaInvalid()
      if (!this.captchaInvalid) {
        this.$store.dispatch('getOrderStatus', {
          data: dataCheckOrder,
          success: self.getOrderSuccess,
          fail: self.getOrderFailed
        })
      }
      return dataCheckOrder
    },
    getOrderSuccess: function (response) {
      this.$router.replace(config.app.pages.order_detail + '/' + encodeURIComponent(response.body.data.orderIdHash))
    },
    getOrderFailed: function (response) {
      let errorList = ''
      switch (response.status) {
        case 429:
          errorList = this.$t('ERRORS.COMMON.Busy')
          break
        case 404:
          errorList = this.$t('ERRORS.COMMON.NotFound')
          break
        case 401:
          errorList = this.$t('ERRORS.COMMON.InvalidData')
          break
        default:
          const errMessage = errorHandler.getMessages(this, response.body.errors)
          for (const i in errMessage) {
            errorList = errorList + '<div>' + errMessage[i] + '</div>'
          }
          break
      }
      this.resetCaptcha()

      this.$refs.simplert.openSimplert({
        type: 'error',
        title: this.$t('ERRORS.COMMON.Alert.ErrorTitle'),
        message: errorList,
        customCloseBtnText: this.$t('ERRORS.COMMON.Alert.CloseText')
      })
    },
    resetCaptcha: function () {
      this.$nextTick(() => {
        this.recaptcha.reset()
      })
      delete this.checkOrderData.captcha
    },
    validateForm: function (fieldName) {
      delete this.validationResults[fieldName]
      var errors = []

      // not empty
      errors = errors.concat(formValidator.isNotEmpty(
        {
          fieldName: this.checkOrderData[fieldName]
        }
      ))

      // regex
      errors = errors.length ? errors : errors.concat(formValidator.validateRegex(
        {
          fieldName: this.checkOrderData[fieldName]
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
    getCompletePhoneNumber (value) {
      var phone = value
      if (phone.substring(0, 1) === '0') {
        phone = phone.slice(1)
      }
      return config.app.form.default.phoneCountryCode + phone
    },
    getFieldErrorMessage (key, fieldName, selectedField) {
      let fieldDesc = this.$t('app.form.fields.' + fieldName, {field: selectedField})
      return this.$t(key, {field: fieldDesc})
    },
    isInputValid: function () {
      for (const i in fields) {
        if (!this.checkOrderData[i]) {
          return false
        }
      }
      return Object.keys(this.validationResults).length === 0
    },
    isCaptchaInvalid: function () {
      return this.isCaptchaCheckOrder && !this.checkOrderData.captcha
    }
  },
  computed: {
    ...mapGetters(['isCaptchaCheckOrder']),
    captchaKey: function () {
      return captchaKey.getCaptchaByEnv()
    },
    recaptcha: function () {
      return this.$refs.recaptcha || {reset: () => {}}
    }
  },
  created: function () {
    this.$store.dispatch('getCaptchaCheckOrder')
  },
  components: {
    VueRecaptcha,
    Simplert
  }
}
