export default {
  name: 'ChangePaymentConfirmation',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onConfirm: function () {
      this.$emit('onConfirm')
    },
    onClose: function () {
      this.$emit('onClose')
    }
  }
}
