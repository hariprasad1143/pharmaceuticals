<template>
  <div class="checkout wrapper clearfix">
    <div class="checkout__product">
      <cart-preview></cart-preview>
    </div>
    <div class="checkout__form">
      <personal-data @editPersonalData="editPersonalData"></personal-data>
      <store-selection :editable=true @selectStore="selectStore"></store-selection> 
      <payment-method-selection></payment-method-selection>
    </div>
    <div class="checkout__buyNow">
      <pay-now-button></pay-now-button>
    </div>
  </div>
</template>

<script src="./js/checkout-pickup-store.js"></script>
<style lang="scss" scoped>
.clearfix {
  *zoom: 1;
  &:before,&:after {display: table;content: ' ';}
  &:after {clear: both;}
}

.wrapper {
  margin: 0 auto;
  padding: 0 1.0714em;
  max-width: 85.714em; /* body font base 14px width equal to 1200px */
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
.product {
  &__buyNow {
    border-radius: 6px;
    background-color: #0072c5;
    font-size: 16px;
    border: none;
    outline: none;
    color: #fff;
    width: 100%;
    margin-top: 15px;
    text-align: center;
    padding: 15px;
    cursor: pointer;
    &--disabled {
       opacity: 0.5;
       cursor: not-allowed;
    }
  }
}

@media only screen and (max-width:768px) {
  .wrapper {
    margin: 0 auto;
    padding: 0;
    max-width: 85.714em; /* body font base 14px width equal to 1200px */
  }
  .checkout {
    padding-top: 50px;
    padding-bottom: 20px;
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
