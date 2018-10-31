<template>
  <div class="wrapper">
    <div class="cek-order clearfix">
      <div class="cek-order__instruction">
        <div class="cek-order__instruction-box">
          <img src="~assets/images/icon-mail.png" class="Group-3">
          <h2>{{ $t("app.checkOrder.title") }}</h2>
          <p>{{ $t("app.checkOrder.subtitle") }}</p>
        </div>
      </div>
      <div class="cek-order__form">
        <div class="cek-order__form-box box">
          <form>
            <div class="cek-order__form-row">
              <label class="cek-order__form-label">{{ $t("app.checkOrder.phoneNumber") }}</label>
              <div class="cek-order__form-phone">
                <span class="cek-order__form-phone--extention">+62</span>
                <input id="checkorder-phone_number" class="cek-order__form-phone--input" type="text" v-model="checkOrderData.phoneNumber"
                      @keyup="validateForm('phoneNumber')" @blur="validateForm('phoneNumber')"
                      :placeholder="$t('app.checkOrder.phoneNumberPlaceholder')">
              </div>
              <label class="cek-order__form-error" v-for="item in validationResults['phoneNumber']">
                {{getFieldErrorMessage(item.error, 'phoneNumber')}}
              </label>
            </div>
            <div class="cek-order__form-row">
              <label class="cek-order__form-label">{{ $t("app.checkOrder.idNumber") }}</label>
              <input id="checkorder-id_number" class="cek-order__form-input" type="text" v-model="checkOrderData.identityNumber"
                     @keyup="validateForm('identityNumber')" @blur="validateForm('identityNumber')"
                     :placeholder="$t('app.checkOrder.idNumberPlaceholder')">
              <label class="cek-order__form-error" v-for="item in validationResults['identityNumber']">
                {{getFieldErrorMessage(item.error, 'identityNumber', 'KTP / KITAS / KITAP')}}
              </label>
            </div>
            <div class="cek-order__form-row">
              <label class="cek-order__form-label">{{ $t("app.checkOrder.orderId") }}</label>
              <input id="checkorder-order_number" class="cek-order__form-input" type="text" v-model="checkOrderData.orderId"
                     @keyup="validateForm('orderId')" @blur="validateForm('orderId')"
                     :placeholder="$t('app.checkOrder.orderIdPlaceholder')">
              <label class="cek-order__form-error" v-for="item in validationResults['orderId']">
                {{getFieldErrorMessage(item.error, 'orderId')}}
              </label>
            </div>
            <div class="cek-order__form-row">
              <label class="cek-order__form-label">{{ $t("app.checkOrder.email") }}</label>
              <input id="checkorder-email" class="cek-order__form-input" type="text" v-model="checkOrderData.email"
                     @keyup="validateForm('email')" @blur="validateForm('email')"
                     :placeholder="$t('app.checkOrder.emailPlaceholder')">
              <label class="cek-order__form-error" v-for="item in validationResults['email']">
                {{getFieldErrorMessage(item.error, 'email')}}
              </label>
            </div>
            <div class="cek-order__form-row">
              <div class="recaptcha-wraper">
                <vue-recaptcha
                @verify="onVerify"
                @expired="onExpired"
                ref="recaptcha"
                :sitekey="captchaKey" v-if="isCaptchaCheckOrder"></vue-recaptcha>
                <div class="form-error" v-if="captchaInvalid">{{ $t("app.form.validation.captchaInvalid") }}</div>
              </div>
            </div>
            <div class="cek-order__form-row">
              <button id="checkorder-btn_submit" class="cek-order__form-btn" :class="{'cek-order__form--disabled': !isInputValid()}"
                      type="button" @click="submitCheckOrder()" :disabled="!isInputValid()">
                {{ $t("app.checkOrder.submit") }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <simplert ref="simplert"></simplert>
  </div>
</template>
<script src="./js/check-order.js"></script>
<style lang="scss" scoped>
::-webkit-input-placeholder {
  color: #b9bdc3;
}
::-moz-placeholder {
  color: #b9bdc3;
}
:-ms-input-placeholder {
  color: #b9bdc3;
}
:-moz-placeholder {
  color: #b9bdc3;
}
.clearfix {
  *zoom: 1;
  &:before,&:after {display: table;content: ' ';}
  &:after {clear: both;}
}
.wrapper {
  margin: 0 auto;
  padding: 0 1.0714em;
  max-width: 85.714em; /* body font base 14px width equal to 1200px */
}
.cek-order {
  padding-top: 150px;
  padding-bottom: 150px;
  &__instruction, &__form {
    float: right;
    width: 50%;
  }
  &__instruction {
    line-height: 2em;
    &-box {
      padding: 12% 0 0 16%;
    }
    img { width: 70px; }
    h2 {
      font-size: 20px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 2.5;
      letter-spacing: 0.6px;
    }
    p {
      font-size: 16px;
      color: #676c75;
    }
  }
  &__form {
    border-radius: 12px;
    background-color: #ffffff;
    &-box {
      padding: 30px 10%;
    }
    &-row {
      margin-bottom: 15px;
      .recaptcha-wraper{
        margin-top: 20px;
        .form-error {
          font-size: 13px;
          color: #ff0000;
          margin-top: 5px;
        }
      }
    }
    &-label {
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
    }
    &-phone {
      display: table;
      width: 98%;
      &--extention {
        display: table-cell;
        width: 60px;
        border-radius: 4px;
        background-color: #ebebeb;
        border: solid 1px #d4d4d4;
        text-align: center;
        vertical-align: middle;
      }
      &--input {
        border-radius: 6px;
        border: solid 1px #d4d4d4;
        padding: 15px 10px;
        display: block;
        width: 100%;
        box-sizing: border-box;
        font-size: 14px;
        margin-left: 10px;
      }
    }
    &-input {
      border-radius: 6px;
      border: solid 1px #d4d4d4;
      padding: 15px 10px;
      display: block;
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
    }
    &-error {
      font-size: 13px;
      color: #ff0000;
      margin-top: 5px;
      display: block;
    }
    &-btn {
      font-size: 20px;
      color: #ffffff;
      text-align: center;
      padding: 4%;
      width: 100%;
      display: block;
      border: none;
      cursor: pointer;
      border-radius: 6px;
      background-color: #0072c5;
    }
    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}

@media only screen and (max-width: 676px) {
  .cek-order {
    padding-top: 50px;
    padding-bottom: 50px;
    &__instruction, &__form {
      float: none;
      width: 100%;
    }
    &__instruction {
      &-box {
        padding-left: 0;
      }
      text-align: center;
      line-height: 1.6em;
      zoom: 85%;
    }
    &__form {
      &-label, &-input, &-error, &-btn {
        zoom: 85%;
      }
    }
  }
}
@media only screen and (max-width: 676px) {
  .recaptcha-wraper {
    transform:scale(0.77);-webkit-transform:scale(0.77);transform-origin:0 0;-webkit-transform-origin:0 0;
  }
}
</style>
