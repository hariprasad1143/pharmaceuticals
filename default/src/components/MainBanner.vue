<template>
   <div class="wrapper">
     <div class="banner">
      <picture>
        <source media="(min-width: 768px)" :srcset="banners.desktop">
        <img :src="banners.tablet" alt="Xiaomi Redmi 6A">
      </picture>
     </div>
  </div>
</template>

<script src="./js/main-banner.js"></script>

<style lang="scss" scoped>
.wrapper {
   margin: 0 auto;
   width: 100%;
   .banner {
    padding: 50px 0 0;
    @media screen and (max-width: 768px) {
      padding: 50px 0 0;
    }
    margin: 0 auto;
    text-align: center;
    line-height: 0;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
