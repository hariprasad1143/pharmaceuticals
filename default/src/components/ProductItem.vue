
<template>
  <div class="product__items">
    <div class="product__items-box">
      <div class="product__image">
        <img class="product__image-thumb" v-if="isAvailable" :src="item.image"/>
        <img class="product__image-thumb oos" v-if="!isAvailable" :src="item.image"/>
        <img class="product__image-oos" v-if="!isAvailable" src="~assets/images/icon-oos.png"/>
      </div>
      <div class="product__name" v-if="isAvailable">
        <span v-html="item.name"></span> <br> <span v-html="item.description"></span>
      </div>
      <div class="product__name oos" v-if="!isAvailable">
        <span v-html="item.name"></span> <br> <span v-html="item.description"></span>
      </div>
      <div class="product__price">
        <span class="product__price-label" v-if="isAvailable">{{item.price | currencyFormat}}</span>
        <span class="product__price-label oos" v-if="!isAvailable">{{item.price | currencyFormat}}</span>
      </div>
      <button v-if="isAvailable" class="product__button home-product-buy-now" @click="buyNow">
        {{$t('app.home.buyNow')}}
      </button>
      <button v-if="!isAvailable" class="product__button home-product-buy-now" @click="notifyMe">
        {{$t('app.home.notifyMe')}}
      </button>
    </div>
  </div>
</template>

<script src="./js/product-item.js"></script>

<style lang="scss" scoped>
.product {
  .oos {
    opacity: 0.5;
  }
  &__items {
    width: 33%;
    box-sizing: border-box;
    list-style: none;
    &-box {
      padding: 2%;
      margin: 2%;
    }
  }
  &__image {
    margin: 10px auto;
    text-align: center;
    display: inline;
    position: relative;
    img {
    }
    &-thumb {
      width: 75%;
      margin: 0 5px -5% 5px;
    }
    &-oos {
      position: absolute;
      bottom: 100%;
      left: -1px;
      width: 100%;
      // opacity: 0.9;
    }
  }
  &__name {
    font-size: 20px;
    line-height: 1.6em;
    min-height: 70px;
    margin-top: 15%;
  }
  &__price {
    margin: 15px 0 20px 0;
    &-label {
      font-size: 22px;
      font-weight: bold;
    }
  }
  &__button {
    border: none;
    width: 100%;
    padding: 5%;
    font-size: 16px;
    color: #fff;
    border-radius: 4px;
    background-color: #0072c5;
    cursor: pointer;
    &--disabled {
      opacity: 1;
    }
  }
}
@media only screen and (max-width:768px) {
  .product {
    &__name, &__price-label {font-size: 90%;}
    &__price-no-stock {font-size: 70%;}
    &__name { min-height: 55px;}
    &__price { margin-bottom: 15px; margin-top: 5px;}
    &__button {font-size: 70%;}
  }
  .usp {
    font-size: 16px;
  }
}
@media only screen and (max-width: 568px) {
  .product {
    &__items {flex: 0 0 50%;}
    &__name, &__price {font-size: 85%;}
    &__name { min-height: 45px;}
    &__button {font-size: 60%;}
  }
}
</style>
