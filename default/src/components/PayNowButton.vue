<template>
  <button
    v-if="isMobile"
    id="checkout-btn_buy_now"
    class="product__buyNow"
    :class="{'product__buyNow--disabled': !isCheckoutCompleteAndInCheckoutPaymentSelection()}"
    :disabled="!isCheckoutCompleteAndInCheckoutPaymentSelection()"
    @click="pay"
  >
    <img src="~assets/images/flash-sale/icon-lock-white.svg" />
    {{$t('app.home.buyNow')}}
  </button>
</template>

<script src="./js/pay-now-button.js"></script>
<style lang="scss" scoped>
.product {
  &__buyNow {
    border-radius: 2px;
    background-color: #ff8800;
    font-size: 16px;
    border: none;
    outline: none;
    color: #fff;
    width: 100%;
    margin-top: 15px;
    text-align: center;
    padding: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 5px;
    }
    &--disabled {
       opacity: 0.5;
       cursor: not-allowed;
    }
  }
}
</style>
