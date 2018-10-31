<template>
  <div class="mi" :class="{'pre': !flashsaleStarted, 'start': flashsaleStarted, 'end': flashsaleEnded}">
    <section class="banner mi__box">
    <template v-if="isMobile">
      <img
      v-if="flashsaleEnded"
      src="~assets/images/flash-sale/mobile-banner-main-sold.jpg"
      class="banner__mobile"
      alt="flash sale redmi 6a">
      <img
      v-else
      src="~assets/images/flash-sale/mobile-micro-redmi6a.jpg"
      class="banner__mobile"
      alt="flash sale redmi 6a">
    </template>
    <template v-else>
      <img
      v-if="flashsaleEnded"
      src="~assets/images/flash-sale/desktop-banner-main-sold.jpg"
      class="banner__desktop"
      alt="flash sale redmi 6a">
      <img
      v-else
      src="~assets/images/flash-sale/desktop-micro-redmi6a.jpg"
      class="banner__desktop"
      alt="flash sale redmi 6a">
    </template>
    </section>
    <section class="countdown mi__box row">
      <div class="countdown__wrapper">
        <label class="countdown__label"><strong>Flash Sale</strong> dimulai dalam</label>
        <div class="countdown__time-group">
          <div class="countdown__time hour"> {{ daysInHours | leftPad('0', 2) }} </div>
          <div class="countdown__time minute"> {{ minutes | leftPad('0', 2) }} </div>
          <div class="countdown__time second"> {{ seconds | leftPad('0', 2) }} </div>
        </div>
      </div>
    </section>
    <section class="product mi__box row">
      <div class="mask">&nbsp;</div>
      <div class="product__heading">
        <h1><span>Redmi 6A Flash Sale</span></h1>
      </div>
      <product-list product-type="delivery" @buyNow="buyNow" :flashsaleStarted="flashsaleStarted"></product-list>
    </section>
    <section class="step mi__box row">
      <img src="~assets/images/flash-sale/desktop-how-to-join-redmi6a.png" class="howto__desktop desktop" alt="flash sale redmi 6a">
      <img src="~assets/images/flash-sale/mobile-how-to-join-redmi6a.png" class="howto__mobile mobile" alt="flash sale redmi 6a">
    </section>
    <section class="spec mi__box row">
      <img src="~assets/images/flash-sale/desktop-spec-redmi6a-r.png" class="spec__desktop desktop" alt="flash sale redmi 6a">
      <img src="~assets/images/flash-sale/mobile-spec-redmi6a-r.jpg" class="spec__mobile mobile" alt="flash sale redmi 6a">
    </section>
    <checkout-failed v-if="isShowFailPopup"></checkout-failed>
  </div>
</template>

<script src="./js/landing-page.js"></script>
<style lang="sass" scoped>
.row
  margin-bottom: 0
.mi
  position: relative
  padding-bottom: 30px
  background-color: #fff
  &__box
    margin-bottom: 1.5%
.banner
  &__desktop,&__desktop-sold
    @media screen and (max-width: 768px)
      display: none
  &__mobile,&__mobile-sold
    @media screen and (min-width: 769px)
      display: none
  img
    width: 100%
.mask
  background-color: #000
  opacity: 0.5
  width: 100%
  height: 100%
  position: absolute
  z-index: 2
.countdown
  margin-bottom: 0
  &__wrapper
    display: flex
    align-items: center
    padding: 5px 0
    background-image: linear-gradient(to right, #d40009, #df2a06, #ea4104, #f55502, #ff6700);
  &__label
    font-size: 160%
    color: #fff
    @media screen and (min-width: 851px)
      margin-left: 20px
      margin-right: 10px
    @media screen and (max-width: 850px)
      margin-left: 4%
      margin-right: 2%
  &__time
    width: 52px;
    height: 42px;
    background-color: #fff;
    display: flex;
    margin: 2px;
    border-radius: 2px;
    opacity: 0.9;
    font-size: 250%;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    &-group
      display: flex
.product
  position: relative
  text-align: center
  &__heading
    background-color: #fff
    border-top: #ccc 2px solid
    margin-top: 25px
    margin-bottom: 10px
    h1
      background-color: #fff
      @media screen and (min-width: 426px)
        width: 400px
        font-size: 24px
        margin: -15px auto 0 auto
      @media screen and (max-width: 425px)
        width: 265px
        font-size: 16px
        margin: -10px auto 0 auto
.step,.spec
  img
    width: 100%
.desktop
  @media screen and (max-width: 850px)
    display: none
.mobile
  @media screen and (min-width: 851px)
    display: none

// status
.teaser,.pre,.start
  .mask,
  .countdown,
  .banner__desktop-sold,
  .banner__mobile-sold
    display: none
.teaser
  .product
    display: none
.pre
  .mask,.countdown
    display: block
.end
  .countdown,
  .mask,
  .step
    display: none
</style>
