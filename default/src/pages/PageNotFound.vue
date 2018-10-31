<template>
  <div class="notfound">
    <div class="notfound__icon">
      <img src="~assets/images/icon-failed.png"/>
    </div>
    <div class="notfound__wrapper">
      <div class="notfound__content">
        <div class="notfound__content-image">
          <img src="~assets/images/404.png"/>
        </div>
        <div class="notfound__content-title">
          {{ $t('app.notfound.message')}}
        </div>
      </div>
      <div class="notfound__content-btn">
        <button class="btn__continue" @click="goToHome">{{ $t('app.notfound.continueShopping')}}</button>
      </div>
    </div>
  </div>
</template>

<script src="./js/page-not-found.js"></script>
<style lang="scss" scoped>
.notfound{
  text-align: center;
  background-color: #fff;
  padding: 100px 0;
  line-height: 2;

  @media (min-width: 960px) {
    background-color: #f8f9fa;
  }

  &__icon{
    @media (min-width: 960px) {
      background-color: #fff;
      padding: 20px 10px 10px;
      width: 100px;
      border-radius: 12px;
      margin: auto;
      position: relative;
      margin-bottom: -40px;
    }
  }
  &__wrapper{
    @media (min-width: 960px) {
      width: 770px;
      padding: 40px 20px;
      margin: auto;
      border-radius: 12px;
      background-color: #ffffff;
      box-shadow: 0 6px 12px 0 rgba(32, 33, 39, 0.08);
    }
  }
  &__content{
    &-image {
      margin: 50px 0px 40px;
    }
    &-title {
      font-size: 20px;
      text-align: center;
      color: #1c1e23;
      margin-bottom: 50px;
      padding: 0px 15px;
    }
  }
}

.btn{
  &__continue{
    outline: 0;
    padding: 12px 40px;
    border-radius: 6px;
    border: 1px solid #0072c5;
    background-color: #0072c5;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    margin: 5px;

    &:hover{
      background-color: transparent;
      border: 1px solid #0072c5;
      color: #0072c5;
    }
  }
}
</style>
