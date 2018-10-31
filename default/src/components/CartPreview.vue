<template>
  <div>
    <div class="cart-preview">
      <div class="product box">
        <div class="product__heading">{{ $t("app.checkout.cart.product") }}</div>
        <div class="product__break clearfix">
          <div class="product__table" v-for="item in cart.items" :key="item.itemSku">
            <div class="product__image"><img :src="item.image" /></div>
            <div class="product__detail">
              <div class="product__name">
                <span v-html="item.itemDetail.itemName"></span> - <span v-html="item.description"></span>
              </div>
              <div class="product__price font-orange font-bold">{{ priceItemCartPreview(item.price) }}</div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="clearfix shipping__price">
            <span class="label">{{ $t("app.checkout.cart.shippingPrice") }}</span><span class="value"><strong>Gratis</strong></span>
          </div>
        </div>
        <div class="total clearfix">
          <span class="label"><strong>{{ $t("app.checkout.cart.total") }}</strong></span>
          <span class="value font-orange">
            <strong>{{paidAmount | currencyFormat}}</strong>
          </span>
        </div>
        <div class="product__desc">{{cart.description}}</div>
      </div>
      <div v-if="!isMobile" class="info">
        <p v-html="$t('app.checkout.info')"/>
      </div> 
      <button
        v-if="!isMobile"
        id="checkout-btn_buy_now"
        class="product__buyNow"
        :class="{'product__buyNow--disabled': !isCheckoutCompleteAndInCheckoutPaymentSelection()}"
        :disabled="!isCheckoutCompleteAndInCheckoutPaymentSelection()"
        @click="pay"
      >
        <img src="~assets/images/flash-sale/icon-lock-white.svg" />
        {{$t('app.home.buyNow')}}
      </button>

    </div>
  </div>
</template>

<script src="./js/cart-preview.js"></script>
<style lang="scss" scoped>
.font-orange {
  color: #f7921e;
}
.font-green {
  color: #54b639;
}
.font-bold {
  font-weight: bold;
}

.clearfix {
  *zoom: 1;
  &:before,&:after {display: table; content: ' ';}
  &:after {clear: both;}
}
.cart-preview {
  width: 284px;
  @media only screen and (max-width:768px) {
    position: relative;
    width: 100% !important;
    max-width: 100%;
  }
}
.product {
  color: #1c1e23;
  &__heading, &__name, &__price { padding: 8%; }
  &__heading, &__break { border-bottom: solid 1px #e1e1e1; }
  &__heading {
    font-size: 13px;
    color: #5e5e5e;
  }
  &__table {
    width: 100%;
    border-bottom: solid 1px #e1e1e1;
  }
  &__image {
    text-align: center;
    padding: 2.5em 0;
    img { height: 150px; }
  }
  &__detail {
    @media only screen and (max-width:375px) {
      width: 50%;
    }
  }
  &__name {
    position: relative;
    display: block; /* or inline-block */
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 6.5em;
    line-height: 1.2em;
    font-size: 14px;
    font-weight: normal;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: -15px;
    /deep/ p{
      margin: 0;
    }
  }
  &__price {
    line-height: 1;
    &.total {
      border-top: solid 1px #e1e1e1;
      padding-top: 10px;
    }
    .label {float: left;}
    .value {float: right;}
    img.sgi-logo {vertical-align: text-bottom;}
  }

  .shipping__price {
    padding: 10px 20px;
    display: flex;
    .value {
      margin-left: auto;
      color: #00b35e;
    }
  }

  .total {
    padding: 0px 20px 10px;
    display: flex;
    .value {
      margin-left: auto;
      font-weight: bold;
      font-size: 18px;
    }
  }

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
    &--disabled {
       opacity: 0.5;
       cursor: not-allowed;
    }
    img {
      margin-right: 5px;
    }
  }
  &__reminder {
    padding: 13px;
    &__tnc-link{
      color: #1428A0;
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}

.info {
  p {
    background-color: #fff798;
    margin-top: 5%;
    border: solid 1px #f1d41b;
    padding: 10px 10px;
    font-size: 16px;
    line-height: normal;
  }
}

@media only screen and (max-width:768px) {
  .product {
    &__heading {display: none;}
    &__table {
      padding: 1em;
      width: 100%;
    }
    &__image {
      width: 65px;
      padding: 0;
      text-align: center;
      margin-right: 5px;
      img {
        width: auto;
        height: 80px;
      }
    }
    &__detail {
      padding-left: 1em;
      width: 70%;
      .product__name {
        padding: 0 2px 0 0;
        margin-bottom: 0;
        font-weight: normal;
        &:after { display: none; }
      }
      .product__price {
        padding: 0;
        font-weight: bold;
      }
    }
    &__image ,&__detail {
      display: inline-block;
      vertical-align: middle;
    }
    &__name { font-size: 14px; }
    &__price {
      padding: 1em 2em;
    }

    .total {

    }
    &.box {
      border-radius: 0;
    }
  }
}
</style>
