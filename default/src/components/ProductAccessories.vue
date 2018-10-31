<template>
  <div class="wrapper">
  <ul class="product product__list">
    <product-item-accessories v-for="item in gimmicksByGroup"
                              v-if="isVisibleAccessories(item)"
                              :item="item"
                              @notifyMe="notifyMe"
                              @selectNow="selectNow"
                              :key="item.id">
    </product-item-accessories>
  </ul>
    <notify-me-modal
      :isShow="visibleNotifyMe"
      :sku="selectedSku"
      @close="onNotifyMeClose">
    </notify-me-modal>
    <simplert ref="simplert"></simplert>
  </div>
</template>

<script src="./js/product-accessories.js"></script>
<style lang="scss" scoped>
.clearfix {
  *zoom: 1;
  &:before,&:after {display: table;content: ' ';}
  &:after {clear: both;}
}
.wrapper {
  margin: 10px auto;
  padding: 0 1.0714em;
  max-width: 85.714em; /* body font base 14px width equal to 1200px */
  .accessories-note {
    text-align: center;
    max-width: 45.714em;
    margin: 180px auto 0;
    @media only screen and (max-width: 568px) {
        margin: 165px auto 0;
    }
    h1 {
         font-size: 25px;
    }
    p {
      font-size: 18px;
      color: #a8a8a8;
      line-height: 1.5;
    }
    @media only screen and (max-width: 568px) {
      h1 {
        font-size: 16px;
      }
      p {
        font-size: 14px;
        max-width: 80%;
        text-align: center;
        margin: auto;
      }
    }
  }
}
//product list - start
.home-product-notify-me {
  opacity: 0.5;
}
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  text-align: center;
}
//product list - end
</style>
