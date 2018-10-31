<template>
  <div class="err">
    <div class="err__wrapper">
      <div class="err__content">
        <div class="err__content-image">
          <img src="~assets/images/keep-shopping.jpg"/>
        </div>
      </div>
      <div class="err__content-btn">
        <button class="btn__continue" @click="goToHome">{{ $t('app.notfound.continueShopping')}}</button>
      </div>
    </div>
  </div>
</template>

<script src="./js/unexpected-error.js"></script>
<style lang="scss" scoped>
.err{
  text-align: center;
  background-color: #fff;
  padding: 100px 0;
  line-height: 2;

  @media (min-width: 960px) {
    background-color: #f8f9fa;
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
