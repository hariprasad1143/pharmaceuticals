<template>
  <div class="content-inner-section">
    <div class="wrapper">
      <div class="product">
        <div v-for="group in sortedProductGroups">
          <div class="product__category" v-if="checkAvailableStock(products[group.code])">
            <div class="product__category-label ">{{group.name}}</div>
            <div class="product__list">
              <product-item v-for="item in products[group.code]" :item="item" @notifyMe="notifyMe" @buyNow="buyNow" :key="item.id" v-if="item.active"></product-item>
            </div>
          </div>
        </div>
        <div v-for="group in sortedProductGroups">
          <div class="product__category" v-if="!checkAvailableStock(products[group.code])">
            <div class="product__category-label ">{{group.name}}</div>
            <div class="product__list">
              <product-item v-for="item in products[group.code]" :item="item" @notifyMe="notifyMe" @buyNow="buyNow" :key="item.id" v-if="item.active"></product-item>
            </div>
          </div>
        </div>
      </div>
      <div class="usp" v-html="$t('app.home.usp')"></div>

      <notify-me-modal
        :isShow="visibleNotifyMe"
        :sku="selectedSku"
        @close="onNotifyMeClose">
      </notify-me-modal>
    </div>
    <simplert ref="simplert"></simplert>
  </div>
</template>

<script src="./js/product-listing.js"></script>
<style lang="scss" scoped>
@import '../assets/css/pages/product-list';
</style>
