<template>
  <div class="vip">
    <div class="vip__content">
      <h1 class="vip__title">{{ $t('app.vipAccess.title') }}</h1>
      <h3 class="vip__message">{{ $t('app.vipAccess.message') }}</h3>
      <input
        class="vip__input"
        @input="accessToken = $event.target.value.toUpperCase()"
        :placeholder="$t('app.vipAccess.placeholder')"
        :value="accessToken.toUpperCase()"
      />
      <div class="vip__action">
        <p class="vip__warning"> <small>{{ $t('app.vipAccess.warning') }}</small> </p>
        <div class="vip__recaptcha">
          <vue-recaptcha
            @verify="onCaptchaVerify"
            @expired="onCaptchaExpired"
            ref="recaptcha"
            :sitekey="captchaKey"
            v-if="isCaptchaCheckOrder"
          ></vue-recaptcha>
        </div>
        <button
          :disabled="!captcha"
          @click="submitToken"
          class="vip__button">
          {{ $t('app.vipAccess.button') }}
        </button>
      </div>
    </div>
    <div class="vip__preview"></div>
    <simplert ref="simplert"></simplert>
  </div>
</template>

<script src="./js/vip-access.js"></script>
<style lang="scss" scoped>
  @import "default/src/assets/css/sass/mixins/_responsive.scss";

  .vip {
    align-items: center;
    background-color: #456FE1;
    display: flex;

    @include desktop() {
      height: calc(100vh - 54px);
      padding: 0 10%;
    }
    @include mobile() {
      flex-direction: column-reverse;
      padding: 54px 10%;
    }

    &__content {
      @include desktop() {
        text-align: left;
        width: 50%;
      }
      @include mobile() {
        width: 100%;
        text-align: center;
      }
    }

    &__preview {
      width: 50%;
      background: transparent url(~assets/images/vip-bg.png) no-repeat;
      background-size: contain;
      background-position: center;
      background-color: #456FE1;
      @include desktop() {
        height: 90%;
        background-position-x: right;
      }
      @include mobile() {
        width: 100%;
        height: 180px;
        background-position: bottom;
      }
    }

    &__title {
      color: white;
      font-size: 4rem;
      margin-bottom: 4rem;

      @include mobile() {
        font-size: 2.4rem;
        margin-bottom: 3rem;
      }
    }

    &__message {
      color: white;
      line-height: 1.6;
      font-weight: 300;
      margin-bottom: 3rem;

      @include mobile() {
        line-height: 1.4;
        font-size: 1.2  rem;
        margin-bottom: 2rem;
      }
    }

    &__input {
      border-radius: 8px;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      padding: 0.8rem;
      text-align: center;
      transition: 0.2s all ease;
      width: 90%;

      &:focus, &:active {
        outline: none;
      }

      &::placeholder {
        color: #C0C0C0;
        font-size: 1.5rem;
        font-style: italic;

        @include mobile() {
          font-size: 1.2rem;
        }
      }
    }

    &__warning {
      color: white;
      margin-bottom: 2rem;
    }

    &__button {
      background: white;
      border-radius: 5px;
      border: 2px solid #456FE1;
      color: #456FE1;
      font-size: 1.8rem;
      font-weight: bold;
      padding: 1rem 2.4rem;
      transition: 0.2s all ease;
      width: fit-content;

      &:hover {
        background: #456FE1;
        color: #fff;
        border-color: white;
        cursor: pointer;
        font-weight: bold;
      }

      &:active {
        background: #fff;
        border-color: #333;
        color: #333;
        font-weight: bold;
      }

      &:focus {
        outline: none;
        cursor: progress;
      }

      &:disabled {
        background: white;
        border-color: #456FE1;
        opacity: 0.5;
        color: #456FE1;
        cursor: not-allowed;
      }

      @include mobile() {
        font-size: 1.4rem;
        width: 50%;
        margin: auto;
      }
    }

    &__action {
      display: flex;
      flex-direction: column;

      @include mobile() {
        flex-direction: column-reverse;
      }
    }

    &__recaptcha {
      margin-bottom: 2rem;

      @include mobile() {
        order: 1;
        align-self: center;
      }
    }
  }
</style>
