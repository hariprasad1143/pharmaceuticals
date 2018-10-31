import {mapGetters} from 'vuex'

export default {
  name: 'CheckoutFailed',
  computed: {
    ...mapGetters(['isCheckoutFailed', 'isConditionalCart', 'isOutOfStock', 'isTokenFailed', 'isPayNowFailed', 'isFlashSaleExpired']),
    errorDescription: function () {
      return this.isConditionalCart ? this.$t('ERRORS.CART.CONDITIONAL_CART_ERROR')
        : this.isOutOfStock ? this.$t('ERRORS.CART.OUT_OF_STOCK')
          : this.isTokenFailed ? 'Token Not there'
            : this.isPayNowFailed ? this.$t('ERRORS.CHECK_OUT.DESCRIPTION.PAY_NOW_FAILED')
              : this.isFlashSaleExpired ? this.$t('ERRORS.CHECK_OUT.DESCRIPTION.FLASH_SALE_EXPIRED') : 'Maaf, terjadi kesalahan pada sistem. Silakan coba beberapa saat lagi.'
    },
    errorTitle: function () {
      return this.isConditionalCart ? 'Eits, Sudah Pernah Beli?'
        : this.isOutOfStock ? 'Stok Produk Habis'
          : this.isTokenFailed ? 'Unavailable token'
            : this.isPayNowFailed ? this.$t('ERRORS.CHECK_OUT.TITLE.PAY_NOW_FAILED')
              : this.isFlashSaleExpired ? this.$t('ERRORS.CHECK_OUT.TITLE.FLASH_SALE_EXPIRED') : 'Sistem Bermasalah'
    }
  },
  methods: {
    closePopup: function () {
      if (this.isFlashSaleExpired || this.isPayNowFailed || this.isCheckoutFailed || this.isConditionalCart || this.isOutOfStock || this.isTokenFailed) {
        this.$store.dispatch('setIsCheckoutFailed', false)
        this.$store.dispatch('setIsConditionalCart', false)
        this.$store.dispatch('setIsOutOfStock', false)
        this.$store.dispatch('setIsTokenFailed', false)
        this.$store.dispatch('setIsPayNowFailed', false)
        this.$store.dispatch('setIsFlashSaleExpired', false)
      }
    }
  }
}
