<template>
  <div class="product__item-group" >
    <div class="product__item" v-for="item in productListing" :item="item" :key="item.id"
    :class="{'oos': isFlashSaleEnded || item.outOfStock}">
      <div class="product__item-img">
        <img :src="item.image">
      </div>
      <div class="product__item-info">
        <div class="product__item-name">{{item.name}}</div>
        <div class="product__item-color">{{item.description}}</div>
        <div class="product__item-price">
          <div class="product__item-price--end">{{item.price | currencyFormat}}</div>
        </div>
        <button class="btn btn--orange"
        :class="{'btn-disabled': isFlashSaleEnded || item.outOfStock}"
                @click="buyNow(item)"
                :disabled="isFlashSaleEnded || item.outOfStock">BELI SEKARANG</button>
      </div>
    </div>
    <modal v-if="visibleOosModal" :showClose="false">
      <div slot="modal-body" class="oos-modal">
        <div class="error-icon"></div>
        <div class="modal-image">
          <img src="~assets/images/flash-sale/icon-oos-no-stock.svg" class="header__brand" alt="Blibli.com"/>
        </div>
        <div class="title"><h1>Stok Produk Habis</h1></div>
        <div class="description"><h4>Maaf, produk pilihan Anda sudah tidak tersedia. Coba lagi di lain kesempatan, ya!</h4></div>
      </div>
      <div slot="modal-footer">
        <button class="btn btn--blue btn--small" @click="toggleOosModal">
          OK
        </button>
      </div>
    </modal>
  </div>
</template>

<script src="./js/product-list.js"></script>

<style lang="sass" scoped>
.product
  &__item
    background-color: #fff
    position: relative
    padding: 1.5% 2.5%
    @media screen and (min-width: 600px)
      width: 33.3%
    @media screen and (max-width: 600px)
      display: flex
      border-bottom: #f1f1f1 2px solid
    &-group
      display: flex
      justify-content: center
      @media screen and (max-width: 600px)
        display: block
    &-img
      margin-bottom: 2%
      @media screen and (max-width: 600px)
        width: 30%
      img
        max-width: 100%
    &-info
      @media screen and (max-width: 600px)
        width: 65%
        margin-left: 5%;
        text-align: left
    &-name
      line-height: 20px
      @media screen and (min-width: 601px)
        font-size: 130%
      @media screen and (max-width: 600px)
        font-size: 110%
    &-color
      line-height: 20px
      font-size: 130%;
    &-price
      margin-bottom: 2%
      @media screen and (max-width: 600px)
        font-size: 10px
      &--normal
        color: #999
        font-size: 80%
        text-decoration: line-through
      &--end
        color: #f7931e
        font-size: 185%
        font-weight: bold
        padding: 3% 0
        @media screen and (min-width: 601px)
          font-size: 185%
        @media screen and (max-width: 600px)
          font-size: 140%

.btn
  border-radius: 2px
  border: none
  padding: 10px 20px
  font-size: 120%
  cursor: pointer
  width: 80%
  color: #fff
  @media screen and (max-width: 600px)
    width: auto
  &--blue
    background-color: #0095da
  &--orange
    background-color: #f7921e
  &--small
    width: 120px
  @media screen and (max-width: 600px)
    font-size: 95%;

.oos
  .product__item-img img,.product__item-name,.product__item-color,.product__item-price,.btn--blue,.btn--orange
    opacity: 0.3
  .product__item-img
    position: relative
    &:after
      content: 'SOLD OUT'
      background-color: #ff0002
      color: #fff
      border-radius: 2px
      padding: 3% 5%
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      opacity: 0.75
      @media screen and (min-width: 1101px)
        font-size: 130%
      @media screen and (max-width: 1100px)
        font-size: 1.4vw
      @media screen and (min-width: 851px)
        width: 130px
      @media screen and (max-width: 850px)
        font-size: 1.9vw
        width: 60%
      @media screen and (max-width: 360px)
        font-size: 50%
  .btn
    cursor: not-allowed
  .btn-disabled
    cursor: not-allowed
    opacity: 0.3
  .oos-modal
    img
      height: 120px
      width: 120px
    .title
      font-size: 24px
      padding: 20px 0px 15px 0px
    .description
      font-size: 15px
      padding: 0px 30px
  .error-icon
    width: 80px
    height: 80px
    margin: 10px auto 0px auto
    border-radius: 50%
    position: relative
    background: #fff
    border: 2px solid #ff0000
    &:before
      content: '\2715'
      font-size: 55px
      line-height: 1
      position: absolute
      top: 12px
      left: 18px
      color: #ff0000
</style>
