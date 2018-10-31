<template>
  <div class="wrap wrap--shown">
    <div class="content">
      <h2>{{ $t("app.form.modal.dataSummary") }}</h2>
      <div class="content__data">
        <table>
          <tr>
            <td>{{ $t("app.form.fields.name") }}</td>
            <td>:</td>
            <td>{{personalData.name}}</td>
          </tr>
          <tr>
            <td>{{ $t("app.form.fields.phoneNumber") }}</td>
            <td>:</td>
            <td>{{personalData.phoneNumber}}</td>
          </tr>
          <tr>
            <td>{{ $t("app.form.fields.email") }}</td>
            <td>:</td>
            <td>{{personalData.email}}</td>
          </tr>
          <tr>
            <td>{{ $t("app.form.fields.address") }}</td>
            <td>:</td>
            <td class="shipping-address">{{shippingAddress.address}} <br>
                {{shippingAddress.subdistrict}}, {{shippingAddress.district}}, {{shippingAddress.city}},
                {{shippingAddress.province}} {{shippingAddress.postalCode}}</td>
          </tr>
        </table>
      </div>
      <h2>{{ $t("app.form.modal.confirmation") }}</h2>
      <div>{{ $t("app.form.modal.notes", personalData) }}</div>
      <div class="content__warning">{{ $t("app.form.modal.warning") }}</div>
      <div class="recaptcha-wraper">
            <vue-recaptcha
            @verify="onVerify"
            @expired="onExpired"
            ref="recaptcha"
            :sitekey="captchaKey" v-if="isCaptchaReserveOrder"></vue-recaptcha>
            <div class="form-error" v-if="captchaInvalid">{{ $t("app.form.validation.captchaInvalid") }}</div>
      </div>
      <div class="btn-wrap">
          <button class="not-confirm" id="checkout-user_info-btn_cancel" @click="onClose">{{ $t("app.thankYou.no") }}</button>
          <button class="do-confirm" id="checkout-user_info-btn_confirm" @click="onConfirm">{{ $t("app.thankYou.sure") }}</button>
      </div>
    </div>
  </div>
</template>

<script src="./js/save-data-confirmation.js"></script>

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
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: left;
  border-radius: 4px;
  @media only screen and (max-width:768px) {
    width: 92%;
    padding: 20px 10px;
    font-size: 12px;
  }
  @media only screen and (max-width:320px) {
    height: 100%;
    overflow: auto;
  }
  &__data {
    table {
      margin-bottom: 30px;
      td {
        padding: 3px 5px;
        &.shipping-address {
            word-break: break-word;
         }
      }
    }
  }

  &__warning {
    background: #fffec3;
    font-size: 12px;
    margin-top: 30px;
    max-width: 478px;
    padding: 10px;
  }

  @media (min-width: 960px) {
    text-align: left;
  }

  h2{
      font-size: 1.2em;
      font-weight: 400;
      margin: 0;
      margin-bottom: 10px;
  }
  .recaptcha-wraper{
    margin-top: 20px;
    .form-error {
      font-size: 13px;
      color: #ff0000;
      margin-top: 5px;
    }
  }
}

.btn-wrap{
    margin-top: 2em;
    text-align: center;
    @media (min-width: 960px) {
      text-align: right;
    }
}
.not-confirm{
    outline: 0;
    border: 0;
    padding: 7px 35px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    color: #282828;
    margin: 5px;
    background: transparent;

    &:hover{
      color: #0072c5;
    }
}
.do-confirm{
    outline: 0;
    padding: 7px 35px;
    border-radius: 4px;
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
