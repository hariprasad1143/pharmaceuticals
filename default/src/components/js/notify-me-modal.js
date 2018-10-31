import formValidator from '@common/src/util/form-validator'
import Simplert from 'vue2-simplert'
import errorHandler from '@common/src/util/error-handler'

const fields = {
  email: [
    {
      exp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  ]
}

export default {
  name: 'NotifyMeModal',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    sku: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      email: '',
      validationResults: {}
    }
  },
  components: {
    Simplert
  },
  methods: {
    onWrapClose: function (e) {
      if (e.target.classList.contains('wrap')) {
        this.$emit('close')
      }
    },
    close: function (e) {
      this.email = ''
      this.$emit('close')
    },
    validateEmail: function () {
      const fieldName = 'email'
      // regex
      this.validationResults[fieldName] = formValidator.validateRegex({email: this.email}, {email: fields[fieldName]})
      this.$forceUpdate()
    },
    getFieldErrorMessage (key, fieldName, selectedField) {
      let fieldDesc = this.$t('app.form.fields.' + fieldName, {field: selectedField})
      return this.$t(key, {field: fieldDesc})
    },
    isInputValid: function () {
      const fieldName = 'email'
      return typeof this.validationResults[fieldName] === 'undefined' ? false : !this.validationResults[fieldName] || this.validationResults[fieldName].length === 0
    },
    submit: function () {
      if (!this.sku || this.sku === '') return
      this.$store.dispatch('showLoading')

      const data = {
        email: this.email,
        sku: this.sku
      }
      this.$store.dispatch('sendNotifyMe', {
        data: data,
        success: this.successSubmit,
        fail: this.failSubmit
      })
      return data
    },
    successSubmit: function (response) {
      this.$store.dispatch('hideLoading')
      this.$refs.simplert.openSimplert({
        type: 'success',
        title: this.$t('app.notifyMe.successCaption'),
        message: this.$t('app.notifyMe.successMessage'),
        onClose: this.close,
        customCloseBtnText: this.$t('ERRORS.COMMON.Alert.CloseText')
      })
    },
    failSubmit: function (response) {
      this.$store.dispatch('hideLoading')
      const errMessage = errorHandler.getMessages(this, response.errors)
      this.$refs.simplert.openSimplert({
        type: 'error',
        title: this.$t('app.notifyMe.errorCaption'),
        message: errMessage.join('<br/>'),
        customCloseBtnText: this.$t('ERRORS.COMMON.Alert.CloseText')
      })
    }
  }
}
