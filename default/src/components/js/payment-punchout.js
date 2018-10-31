import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['paymentData']),
    formData: function () {
      if (this.paymentData.paymentData && this.paymentData.paymentData.formData) {
        return this.paymentData.paymentData.formData
      }
      return {}
    }
  },
  methods: {
    blibliForm: function () {
      return this.$refs.blibliForm
    }
  }
}
