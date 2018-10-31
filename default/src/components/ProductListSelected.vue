<template>
  <div class="product">
    <div class="product__selected-wrapper">
      <div class="product__selected">
        <div class="product__selected-image">
          <img :src="accItem.image">
        </div>
        <div class="product__selected-text">
          <div class="product__selected-name">
            <span v-html="accItem.name"></span>
            &nbsp;
            <span v-html="accItem.description"></span>
          </div>
          <div class="product__selected-price">{{ accItem.price | currencyFormat }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/product-list-selected.js"></script>

<style lang="scss" scoped>
.product {
  &__selected {
    display: table;
    margin: 8px auto;
    /deep/ p {
      margin: 0;
    }
    &-wrapper {
      position: fixed;
      top: 52px;
      left: 0;
      z-index: 9;
      display: block;
      width: 100%;
      background-color: #ebebeb;
      box-shadow: 0 2px 3px 0 rgba(32, 33, 39, 0.12);
      @media only screen and (max-width: 475px) {
        padding: 0 5%;
      }
    }
    &-image, &-text {
      display: table-cell;
      vertical-align: middle;
    }
    &-image {
      height: 65px;
      padding-right: 20px;
      @media only screen and (max-width: 475px) {
        height: 50px;
        margin-right: 5%;
      }
      img {height: 100%;}
    }
    &-text {
      font-size: 20px;
      line-height: 1.5em;
      @media only screen and (max-width: 475px) {
        font-size: 12px;
        line-height: normal;
      }
    }
    &-name {
      font-weight: bold;
      @media only screen and (max-width: 475px) {
        margin-bottom: 5px;
      }
    }
    &-price {color: #282b31;}
  }
}
</style>
