<template>
  <div class="box checkout">
    <span class="checkout__step" v-if="editable" id="checkout-user_info-title">
      {{ $t("app.checkout.checkoutStepOne") }}
    </span>
    <div v-if="editable">
      <div class="checkout__form">
        <div class="checkout__form-row flex">
          <div class="checkout__form-col">
            <label class="checkout__form-label">{{ $t("app.form.fields.name") }}*</label>
            <input id="checkout-user_info-name" class="checkout__form-input" :placeholder="$t('app.form.placeholder.name')"
              type="text" v-model="userData.name" @keyup="validateForm('name')" @blur="validateForm('name')" maxlength="254"/>
            <div class="checkout__form-error" v-for="item in validationResults['name']"
              v-if="userData.name.length !== 1">
              {{getFieldErrorMessage(item.error, 'name')}}</div>
          </div>
          <div class="checkout__form-col">
            <label class="checkout__form-label">{{ $t("app.form.fields.phoneNumber") }}*</label>
            <div class="checkout__form-phone">
              <span class="checkout__form-phone--extension">+62</span>
              <input id="checkout-user_info-phone" class="checkout__form-input checkout__form-phone--input" :placeholder="$t('app.form.placeholder.phone')"
                type="telephone" v-model="userData.phoneNumber" @keyup="validateForm('phoneNumber')" @blur="validateForm('phoneNumber')"/>
            </div>
            <div class="checkout__form-error" v-for="item in validationResults['phoneNumber']">{{getFieldErrorMessage(item.error, 'phoneNumber')}}</div>
          </div>
        </div>
        <shipping-address :address="address"></shipping-address>
        <div class="checkout__form-row flex">
          <div class="checkout__form-col tnc-btn">
            <button id="checkout-user_info-submit" class="checkout__submit"
              :class="{'checkout__submit--disabled': !isInputValid()}" @click="saveCurrentPersonalData" :disabled="!isInputValid()">{{$t('app.form.continue')}}</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!editable" class="filed-form">
      <span class="checkout__step">{{ $t("app.checkout.checkoutStepOne") }} <button class="checkout__edit" @click="editPersonalData()" v-if="availableToEdit">{{ $t("app.form.edit") }}</button></span>
      <div class="checkout__filledForm address">
        <span class="checkout__filledForm__text">
          {{ userData.name }} <br>
          {{ userData.phoneNumber }}
        </span>
        <span class="checkout__filledForm__text">
          {{ address }} <br>{{ shippingAddress.subDistrict }},
          {{ shippingAddress.district }}, <br> {{ shippingAddress.city }}, {{ shippingAddress.state }} {{ shippingAddress.postalCode }}
        </span>
      </div>
    </div>

    <tnc-modal
      v-if="visibleTnc"
      @onClose="onCloseTncModal">
    </tnc-modal>

    <simplert ref="simplert"></simplert>
  </div>
</template>

<script src="./js/personal-data.js"></script>

<style lang="scss" scoped>
@import "default/src/assets/css/sass/mixins/_responsive.scss";
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
.filed-form {
  font-size: 0;
}
.tnc-link{
  color: #1428A0;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
}
.checkout {
  background-color: #fff;
  padding: 30px 20px !important;
  color: #333;
  margin-bottom: 20px;
  line-height: 16px;
  &__button-edit {
    background-color: transparent;
    border: none;
    font-size: 14px;
    text-decoration: underline;
    float: right;
    cursor: pointer;
    padding: 0; /*fix for safari iphone 5*/
    color: #0095dc;
  }
  &__step {
    font-size: 22px;
    margin-bottom: 20px;
    display: block;
  }
  &__notes{
    font-size: 12px;
    padding: 20px;
    background-color: #fffec3;
    color: #333;
    margin-bottom: 20px;
    line-height: 16px;
    /deep/ ul {
      list-style: disc;
      padding-left: 15px;
      li {
        list-style: disc;
        padding: 3px 0px;
      }
    }
  }
  &__form {
    margin-bottom: 20px;
    display: block;
    &__phone {
      display: table;
      width: 100%;
      &--extension {
        display: table-cell;
        width: 70px;
        border-radius: 4px;
        background-color: #ebebeb;
        border: solid 1px #d4d4d4;
        text-align: center;
        vertical-align: middle;
      }
      &--input {
        display: table-cell;
        margin-left: 10px;
      }
    }
    &__label {
      display: block;
      font-size: 12px;
      margin-bottom: 8px;
    }
    &__input {
      border-radius: 4px;
      border: solid 1px #d4d4d4;
      padding: 10px;
      display: block;
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
    }
    &__error {
      font-size: 13px;
      color: #ff0000;
      margin-top: 5px;
    }
  }
  .username {
    width: 25%;
    padding-right: 20px;
    word-wrap: break-word;
    @media only screen and (max-width:568px) {
      width: 100%;
    }
  }
  .identityNumber {
    width: 20%;
    word-wrap: break-word;
    @media only screen and (max-width:568px) {
      width: 100%;
    }
  }
  .phoneNumber {
    width: 20%;
    word-wrap: break-word;
    @media only screen and (max-width:568px) {
      width: 100%;
    }
  }
  .address {
    width: 100%;
    padding-right: 20px;
    @media only screen and (max-width:568px) {
      width: 100%;
    }
  }
  &__edit{
    background-color: transparent;
    border: none;
    font-size: 14px;
    text-decoration: underline;
    float: right;
    cursor: pointer;
    padding: 0; /*fix for safari iphone 5*/
    color: #0095dc;
  }
  &__filledForm {
    display: inline-block;
    vertical-align: top;
    @media only screen and (max-width:568px) {
      margin-bottom: 10px;
    }
    &__label {
      display: block;
      font-size: 14px;
      line-height: 2.5;
      color: #737780;
      @media only screen and (max-width:568px) {
        font-size: 12px;
      }
    }
    &__text {
       /* autoprefixer: off */
       -webkit-box-orient: vertical;
       /* autoprefixer: on */
      font-size: 16px;
      line-height: 1.56;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;

      @media only screen and (max-width:568px) {
        font-size: 14px;
      }
    }
    &__email {
      font-size: 12px;
      line-height: 2.08;
      display: block;
      @media only screen and (max-width:568px) {
        font-size: 11px;
      }
    }
  }

  &__form {
    &-row {
      margin-bottom: 20px;
      display: block;
      &:last-child { margin-bottom: 0; }
      &.flex {
        display: -webkit-flex; /* Safari */
        display: flex;
      }
    }
    &-col {
      -webkit-flex: 1;  /* Safari 6.1+ */
      -ms-flex: 1;  /* IE 10 */
      flex: 1;
      padding-right: 20px;
      &:last-child {padding-right: 0;}
      &.tnc {flex: 1 70%;}
      &.tnc-btn {flex: 1 20%; text-align: right; }
    }
    &-phone {
      display: table;
      width: 100%;
      &--extension {
        display: table-cell;
        width: 70px;
        border-radius: 4px;
        background-color: #ebebeb;
        border: solid 1px #d4d4d4;
        text-align: center;
        vertical-align: middle;
      }
      &--input {
        display: table-cell;
        margin-left: 10px;
      }
    }
    &-label {
      display: block;
      font-size: 12px;
      margin-bottom: 8px;
    }
    &-input {
      border-radius: 4px;
      border: solid 1px #d4d4d4;
      padding: 10px;
      display: block;
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      &--disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
    &-error {
      font-size: 13px;
      color: #ff0000;
      margin-top: 5px;
    }
  }
  &__submit {
    border-radius: 4px;
    background-color: #0096D9;
    padding: 17px 50px;
    outline: none;
    border: none;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    @include mobile {
      width: 100%;
    }
    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}

@media only screen and (max-width:568px) {
  .checkout {
    &__form-row {
      &.flex {
        display: block;
        .checkout__form-col {
          margin-bottom: 20px;
          &.tnc {padding-right: 0;}
          &.tnc-btn {text-align: left; margin-bottom:0; }
        }
      }
    }
    &__step {
      font-size: 16px;
    }
  }
}
@media only screen and (max-width: 320px) {
  .checkout__step { font-size: 14px; }
}

// fitur
// checkbox - start
.checkbox {
  position: absolute;
  left: -9999px;
  & + label {
    position: relative;
    display: inline-block;
    padding: 3px 30px;
    cursor: pointer;
    &:before {
      position: absolute;
      top: 4px;
      left: 1px;
      width: 18px;
      height: 18px;
      border: 1px solid #666666;
      border-radius: 1px;
      background: #fff;
      content: '';
    }
    &:after {
      position: absolute;
      top: 8px;
      left: 4px;
      content: '';
      width: 12px;
      height: 5px;
      border-right: #fff 2px solid;
      border-top: #fff 2px solid;
      transition: all .2s;
    }
  }
  &:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
    transform: rotate(140deg);
  }
  &:checked {
    & + label:before {
      border-color: #0096D9;
      background: #0096D9;
    }
    & + label:after {
      color: #fff;
      opacity: 1;
      transform: scale(1);
      transform: rotate(140deg);
    }
  }
  &:focus + label:before { border: 1px dotted #0096D9; }
}
// checkbox - end

// radio - start
.radio {
  position: absolute;
  left: -9999px;
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }
  & + label{
    position: relative;
    padding: 2px 22px;
    cursor: pointer;
    line-height: 1;
    &:before, &:after {
      position: absolute;
      content: '';
      border: #999 1px solid;
      border-radius: 50%;
      transition: all .2s;
    }
    &:before {
      top: 3px;
      left: 0;
      width: 15px;
      height: 15px;
    }
    &:after {border: none;}
  }
  &:checked {
    & + label:after {
      top: 5px;
      left: 2px;
      width: 11px;
      height: 11px;
      background-color: #0096D9;
    }
  }
}
// radio - end
</style>
