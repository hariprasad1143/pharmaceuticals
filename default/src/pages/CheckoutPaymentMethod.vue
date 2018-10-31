<template>
  <div class="checkout wrapper clearfix">
    <checkout-timer></checkout-timer>
    <div class="checkout__content row">
      <div class="checkout__product">
        <cart-preview  @pay="pay"></cart-preview>
      </div>
      <div class="checkout__form">
        <div class="checkout__form-box">
          <personal-data @editPersonalData="editPersonalData"></personal-data>
          <payment-method-selection :editable=true @selectPayment="selectPayment"></payment-method-selection>
        </div>
      </div>
      <div v-if="isMobile" class="info">
        <p v-html="$t('app.checkout.info')"/>
      </div> 
      <div class="checkout__buyNow">
        <pay-now-button @pay="pay"></pay-now-button>
      </div>
      <simplert ref="simplert"></simplert>
      <payment-punchout ref="paymentPunchout"></payment-punchout>
    </div>
    <modal-session-ended v-if="isSessionEnded"></modal-session-ended>
    <checkout-failed v-if="isCheckoutFailed || isPayNowFailed"></checkout-failed>
  </div>
</template>

<script src="./js/checkout-payment-method.js"></script>
<style lang="scss" scoped>
.clearfix {
  *zoom: 1;
  &:before,&:after {display: table;content: ' ';}
  &:after {clear: both;}
}

.wrapper {
  position: relative;
}

.checkout {
  padding-top: 70px;
  padding-bottom: 80px;
  &__product {width: 22%;}
  &__form {
    width: 76%;
  }
  &__product {float: right;}
  &__form {float: left}
  .box {margin-bottom: 10px;}
}

.info {
  p {
    background-color: #fff798;
    margin-top: 5%;
    border: solid 1px #f1d41b;
    padding: 10px 10px;
    font-size: 16px;
    line-height: normal;
    margin-bottom: 0%;
  }
}

@media only screen and (max-width:768px) {
  .wrapper {
    margin: 0 auto;
    padding: 0;
    max-width: 85.714em; /* body font base 14px width equal to 1200px */
  }
  .checkout {
    padding-top: 70px;
    &__product, &__form {
      width: 100%;
      padding-right: 0;
      float: none;
      margin-bottom: 10px;
    }
    .box {
      border-radius: 0;
      border: none;
    }
    &__buyNow {
      padding: 20px 25px;
      button {
        margin: 0;
      }
    }
  }
}
</style>
