export default {
  props: {
    showClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
