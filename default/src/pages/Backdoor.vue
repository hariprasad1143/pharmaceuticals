<template>
  <div class="backdoor">
    <div class="backdoor__wrapper">
      <div class="backdoor__content">
        <div class="backdoor__content-title">
          <strong>{{ $t('app.backdoor.message')}}</strong>
        </div>
        <div class="backdoor__form">
          <input type="password" class="backdoor__form-input" :placeholder="$t('app.backdoor.placeholder')" v-model="backdoorKey"/>
        </div>
      </div>
      <div class="backdoor__content-btn">
        <button class="btn__continue" @click="validateBackdoorKey">{{ $t('app.backdoor.button')}}</button>
      </div>
    </div>
    <simplert ref="simplert"></simplert>
  </div>
</template>

<script src="./js/backdoor.js"></script>

<style lang="scss" scoped>
::-webkit-input-placeholder {
  color: #b9bdc3;
  text-align: center
}
::-moz-placeholder {
  color: #b9bdc3;
  text-align: center
}
:-ms-input-placeholder {
  color: #b9bdc3;
  text-align: center
}
:-moz-placeholder {
  color: #b9bdc3;
  text-align: center
}
.backdoor{
  text-align: center;
  background-color: #fff;
  padding: 150px 0 100px;
  line-height: 2;
  height: 92vh;

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
      padding: 70px 20px;
      margin: auto;
      border-radius: 12px;
      background-color: #ffffff;
      box-shadow: 0 6px 12px 0 rgba(32, 33, 39, 0.08);
    }
  }
  &__form {    
    &-input {
      border-radius: 4px;
      border: solid 1px #d4d4d4;
      padding: 10px;
      display: block;
      width: 60%;
      margin: 0 auto;
      box-sizing: border-box;
      font-size: 14px;
      text-align: center;
      margin-bottom: 40px;
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
      margin-bottom: 40px;
      padding: 0px 15px;
      line-height: normal;
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
