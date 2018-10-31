<template>
  <div class="content-inner-section">
    <product-list-selected></product-list-selected>
    <product-accessories></product-accessories>
  </div>
</template>

<script src="./js/product-accessories.js"></script>

<style lang="scss" scoped>
  .content-inner-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    min-height: 100vh;
    overflow: auto;
    background: #fff;
    @media only screen and (max-width:768px) {
      padding-top: 120px;
    }
  }
</style>
