<template>
  <div class="wrap" :class="{'wrap--shown' : isShow}" @click="onWrapClose">
    <div class="content">
      <div class="content__close-icon">
        <span @click="this.close">&#x2715;</span>
      </div>
      <div class="content__caption">{{ $t("app.notifyMe.caption") }}</div>
      <div class="content__info">{{ $t("app.notifyMe.info") }}</div>
      <div class="field-wrap">
        <input id="checkout-user_info-name" class="content__form-input" :placeholder="$t('app.form.placeholder.email')"
              type="email" v-model="email" @blur="validateEmail" @keyup="validateEmail"/>
        <div class="content__form-error" v-for="item in validationResults['email']">
          {{getFieldErrorMessage(item.error, 'email')}}</div>
      </div>
      <div class="btn-wrap">
        <button class="do-confirm" @click="submit"
              :class="{'do-confirm--disabled': !isInputValid()}"
              :disabled="!isInputValid()">{{ $t("app.form.submit") }}</button>
      </div>
    </div>
    <simplert ref="simplert"></simplert>
  </div>
</template>

<script src="./js/notify-me-modal.js"></script>

<style lang="scss" scoped>
.wrap {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: none;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);

  &--shown {
    display: flex;
    align-items: center;
    .content {
        animation-name: zoomIn;
        animation-duration: .3s;
        animation-fill-mode: both;
    }
  }
}

.content{
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 30px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: left;
  border-radius: 4px;

  &__caption {
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 960px) {
      font-size: 14px;
    }
  }

  &__info {
    margin-bottom: 25px;
    font-size: 14px;
    text-align: center;
  }

  &__close-icon {
    color: #333333 ;
    font-size: 20px;
    width: 100%;
    padding-bottom: 20px;
    padding-right: 10px;
    text-align: right;

    span:hover {
      cursor: pointer;
    }

    @media (max-width: 960px) {
      font-size: 12px;
      padding-bottom: 12px;
    }

  }

  @media (min-width: 960px) {
    text-align: left;
  }

  &__form {
    border-radius: 12px;
    background-color: #ffffff;
    &-input {
      border-radius: 4px;
      border: solid 1px #d4d4d4;
      padding: 18px;
      display: block;
      width: 85%;
      margin: 20px auto;
      box-sizing: border-box;
      font-size: 14px;
      background-color: #f8f9fa;
      text-align: center;

      @media (max-width: 960px) {
        width: 100%;
        padding: 10px;
      }
    }
    &-error {
      font-size: 13px;
      color: #ff0000;
      margin-top: 5px;
      text-align: center;
    }
  }
}

.btn-wrap{
  width: 100%;
  vertical-align: top;
  @media (min-width: 960px) {
    text-align: center;
  }
  @media only screen and (max-width:768px) {
    width: 100%;
  }
}
.field-wrap{
  width: 100%;
  margin: 10px auto;
  vertical-align: top;
}
.do-confirm{
    outline: 0;
    padding: 15px;
    margin: 10px auto;
    border-radius: 4px;
    border: 1px solid #0072c5;
    background-color: #0072c5;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    width: 30%;
    text-align: center;
    @media only screen and (max-width:768px) {
      padding: 12px;
      margin: 15px 0px 15px 25%;
      width: 50%;
    }

    &:hover{
      background-color: transparent;
      border: 1px solid #0072c5;
      color: #0072c5;
    }

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
}
@keyframes zoomIn {
  from {
    transform: scale3d(0.3, 0.3, 0.3);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
