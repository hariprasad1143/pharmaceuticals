<template>
  <!--<div class="mi" :class="{'pre': !flashsaleStarted, 'start': flashsaleStarted, 'end': flashsaleEnded}">-->
    <!--<section class="banner mi__box">-->
    <!--<template v-if="isMobile">-->
      <!--<img-->
      <!--v-if="flashsaleEnded"-->
      <!--src="~assets/images/flash-sale/mobile-banner-main-sold.jpg"-->
      <!--class="banner__mobile"-->
      <!--alt="flash sale redmi 6a">-->
      <!--<img-->
      <!--v-else-->
      <!--src="~assets/images/flash-sale/mobile-micro-redmi6a.jpg"-->
      <!--class="banner__mobile"-->
      <!--alt="flash sale redmi 6a">-->
    <!--</template>-->
    <!--<template v-else>-->
      <!--<img-->
      <!--v-if="flashsaleEnded"-->
      <!--src="~assets/images/flash-sale/desktop-banner-main-sold.jpg"-->
      <!--class="banner__desktop"-->
      <!--alt="flash sale redmi 6a">-->
      <!--<img-->
      <!--v-else-->
      <!--src="~assets/images/flash-sale/desktop-micro-redmi6a.jpg"-->
      <!--class="banner__desktop"-->
      <!--alt="flash sale redmi 6a">-->
    <!--</template>-->
    <!--</section>-->
    <!--<section class="countdown mi__box row">-->
      <!--<div class="countdown__wrapper">-->
        <!--<label class="countdown__label"><strong>Flash Sale</strong> dimulai dalam</label>-->
        <!--<div class="countdown__time-group">-->
          <!--<div class="countdown__time hour"> {{ daysInHours | leftPad('0', 2) }} </div>-->
          <!--<div class="countdown__time minute"> {{ minutes | leftPad('0', 2) }} </div>-->
          <!--<div class="countdown__time second"> {{ seconds | leftPad('0', 2) }} </div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</section>-->
    <!--<section class="product mi__box row">-->
      <!--<div class="mask">&nbsp;</div>-->
      <!--<div class="product__heading">-->
        <!--<h1><span>Redmi 6A Flash Sale</span></h1>-->
      <!--</div>-->
      <!--<product-list product-type="delivery" @buyNow="buyNow" :flashsaleStarted="flashsaleStarted"></product-list>-->
    <!--</section>-->
    <!--<section class="step mi__box row">-->
      <!--<img src="~assets/images/flash-sale/desktop-how-to-join-redmi6a.png" class="howto__desktop desktop" alt="flash sale redmi 6a">-->
      <!--<img src="~assets/images/flash-sale/mobile-how-to-join-redmi6a.png" class="howto__mobile mobile" alt="flash sale redmi 6a">-->
    <!--</section>-->
    <!--<section class="spec mi__box row">-->
      <!--<img src="~assets/images/flash-sale/desktop-spec-redmi6a-r.png" class="spec__desktop desktop" alt="flash sale redmi 6a">-->
      <!--<img src="~assets/images/flash-sale/mobile-spec-redmi6a-r.jpg" class="spec__mobile mobile" alt="flash sale redmi 6a">-->
    <!--</section>-->
    <!--<checkout-failed v-if="isShowFailPopup"></checkout-failed>-->
  <!--</div>-->
  <div class="main-page">
    <div class="main-page__carousel">
      <carousel
        :autoplay="true"
        :loop="true"
        :autoplayHoverPause="true"
        :perPage="1"
        :paginationEnabled="false"
      >
        <slide>
          <img src="~assets/images/pharma/chicago.jpg" alt="">
        </slide>
        <slide>
          <img src="~assets/images/pharma/ny.jpg" alt="">
        </slide>
        <slide>
          <img src="~assets/images/pharma/la.jpg" alt="">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script src="./js/landing-page.js"></script>
<style lang="scss" scoped>
  .VueCarousel-pagination {
    width: 100%;
    float: none;
    text-align: center;
    position: absolute;
    bottom: 15%;
  }
.main-page {
  &__carousel {
    /*background-color: #F9A94B*/
    /*height: 100vh*/
    width: auto;
    /*position: relative*/
    /*top: 50px*/
    img {
      width: 100%;
      height: 85vh
    }
  }
}
</style>
