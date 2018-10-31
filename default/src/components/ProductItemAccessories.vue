<template>
  <li class="product__items">
    <div class="product__items-box" :class="{ empty: !isAvailable }">
      <div class="product__image">
        <div class="product__remark" v-if="isMobile" v-html="remarkContent"></div>
        <img class="product__image-thumb" :src="item.image"/>
      </div>
      <div class="product__info">
        <div class="product__text top-section product__remark" v-if="!isMobile" v-html="remarkContent"></div>
        <div class="product__text bottom-section">
          <img class="product__logo" :src="item.logo" v-if="item.logo"><br>
          <span class="product__text-name" v-html="item.name"></span><br>
          <button v-if="isAvailable" class="product__button home-product-buy-now" @click="selectNow">
            {{$t('app.accessories.select')}}
          </button>
          <button v-if="!isAvailable" class="product__button product__button--disabled home-product-buy-now" disabled @click="notifyMe">
            {{$t('app.accessories.unstock')}}
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script src="./js/product-item-accessories.js"></script>

<style lang="scss" scoped>
.product {
  &__items {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    list-style: none;
    position: relative;
    &-box {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 80%;
    }
    .empty {
      opacity: 0.5;
    }
  }
  &__image {
    padding: 1rem;
    flex: 1;
    &-thumb {
      width: 100%;
    }
    &-logo {
      width: auto;
      padding-top: 10px;
    }
  }
  &__logo {
    width: 125px;
    margin-bottom: 10px;
   }
  &__info {
    flex: 1.5;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
  }
  &__text {
    text-align: left;
    line-height: 1.6em;
    &.top-section {
       min-height: 200px;
     }
    &.bottom-section {
       text-align: left;
     }
    &-name {
      margin-top: auto;
      font-size: 27px;
      font-weight: normal;
    }
    &-desc {
      color: #666;
    }
  }
  &__remark /deep/ {
    .product__title {
       font-size: 24px;
       font-weight: bold;
       margin-bottom: 0;
       color: #282b31;
     }
    .product__subtitle {
       font-size: 17px;
       color: #959595;
     }
   }
  &__button {
    border: none;
    width: auto;
    margin-top: 2rem;
    margin-right: auto;
    padding: 1.4rem 7rem;
    font-size: 16px;
    color: #fff;
    border-radius: 4px;
    background-color: #0072c5;
    cursor: pointer;
    &--disabled {
      opacity: 0.5;
    }
  }
}
@media only screen and (max-width:768px) {
  .product {
    &__remark /deep/ {
      .product__title {
         font-size: 16px;
       }
      .product__subtitle {
         font-size: 14px;
       }
     }
    &__items {
      height: 100%;
      &-box {
        flex-direction: column;
        max-width: 100%;
      }
    }
    &__text {
      font-size: 90%;
      text-align: center;
      &.bottom-section {
         text-align: center;
      }
    }
    &__button {
      width: 100%!important;
      margin-left: auto;
      padding-top: 1rem auto 1rem!important;
    }
    &__image-thumb {
       width: 80%;
    }
  }
}
@media only screen and (max-width: 568px) {
  .product {
    &__text {
      &-name {
        font-size: 14px;
      }
      &-desc {
        display: none;
      }
      &.bottom-section {
         text-align: center;
      }
    }
  }
}
@media only screen and (max-width: 375px) {
  .product {
    &__items {flex: 0 0 100%;}
    &__image-thumb {
      width: 65%;
    }
    &__text {
      margin-top: 5%;
      &.bottom-section {
         text-align: center;
      }
    }
    &__button {
      width: 50%;
    }
  }
}
</style>
