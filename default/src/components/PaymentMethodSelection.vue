<template>
  <div class="box payment">
    <div class="payment__heading" v-if="!editable"
         :class="{'not-active': (!paymentMethod || !paymentMethod.method) }">
      {{ $t("app.checkout.checkoutStepTwo") }}
    </div>
    <div v-if="editable">
      <div class="tabku tab__container">
        <div id="checkout-payment_method-title" class="payment__heading">
          {{ $t("app.checkout.checkoutStepTwo") }}
        </div>
        <br>

        <input :id="(activeTab===item.type) ? 'paymentType' : item.type" class="tab__input" type="radio" name="tabs"
          @click="selectPaymentType(item)"
          v-for="item in displayedPaymentTypes" :key="item.type"
          :checked="activeTab===item.type">

        <label :for="item.type"
          :class="{'payment__type tab__checked': (activeTab===item.type), 'payment__type tab__': !(activeTab===item.type)}"
          v-for="item in displayedPaymentTypes"
          :key="item.type+'-label'">
          <span :id="item.elId">{{$t(item.name_i18n)}}</span>
        </label>

        <section :class="'content__'+activeTab" class="tab__content" v-if="activeTab">
          <div class="payment__title"> {{currentOptionLabel}} </div>
          <div class="payment__list list list__togel">
            <input ref="toggleCardPayment" class="list__togel-input" type="checkbox" id="toggle-card">
            <label class="list__togel-label clearfix" for="toggle-card">
              <span id="checkout-payment_method-method" class="">{{selectedCard}}</span>
              <span class="list__togel-button"></span>
            </label>
            <div class="list__togel-content list__togel-content--select">
              <ul>
                <li class="list__items"
                  v-for="item in paymentListSorted"
                  @click="selectPayment(item)">
                  {{item.name}}
                </li>
              </ul>
            </div>
          </div>

          <div v-if="visibleInstallment && !this.isKlikBCA">
            <div class="payment__list--label"> {{currentMethodLabel}} </div>
            <div class="payment__list list list__togel" >
              <input ref="toggleCardInstallment" class="list__togel-input" type="checkbox" id="toggle-cardx">
              <label class="list__togel-label clearfix" for="toggle-cardx">
                <span id="checkout-payment_method-installment" class="">{{selectedInstallment}}</span>
                <span class="list__togel-button"></span>
              </label>
              <div class="list__togel-content list__togel-content--select" v-if="getInstallments">
                <ul>
                  <li
                    class="list__items"
                    @click="setInstallmentAndPayment(0, payment)"
                    v-for="payment in getInstallments" :key="payment.tenor"
                    v-if="!payment.installment"
                  > {{payment.alias}} </li>
                  <li
                    class="list__items"
                    @click="setInstallmentAndPayment(payment.tenor, payment)"
                    v-for="payment in getInstallments" :key="payment.tenor"
                    v-if="payment.installment && cartPrice >= payment.minAmount"
                  > {{payment.tenor + "x"}}
                    {{ $t("app.checkout.payment.installment") }} 0% -
                    {{countPaymentPerTenor(paidAmount, payment.tenor) | roundNumber | currencyFormat}}
                    {{ $t("app.checkout.payment.perMonth") }}
                    </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="klikbca" v-if="isKlikBCA">
            <div class="klikbca__label">{{ $t("app.checkout.payment.klikBcaUserId") }}</div>
            <input class="klikbca__input payment__list" type="text" v-model="paymentFields.klikBcaUserId"
            @keyup="validateForm('klikBcaUserId'),setBcaUserIdAndPayment()"
            @blur="validateForm('klikBcaUserId'),setBcaUserIdAndPayment()"/>
            <span class="klikbca__span" v-if="visibleError"> {{errorMessage}} </span>
          </div>
          <div v-if="selectedPayment.tnc" v-html="selectedPayment.tnc"></div>
        </section>
      </div>

    </div>
    <tnc-modal
      v-if="visibleTnc"
      @onClose="onCloseTncModal">
    </tnc-modal>
    <!-- ini hasilnya -->
    <div v-if="!!paymentMethod.method && !editable">
      <img :src="paymentMethod.icon" height="40px"/><br/>
      {{paymentMethod.name}}<br/>
    </div>
  </div>
</template>

<script src="./js/payment-method-selection.js"></script>
<style lang="scss" scoped>
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.clearfix {
  *zoom: 1;
  &:before,&:after {display: table;content: ' ';}
  &:after {clear: both;}
}
.table { display: table; }
.table-cell {
  display: table-cell;
  vertical-align: middle;
}
.wrapper {
  margin: 0 auto;
  padding: 0 1.0714em;
  max-width: 85.714em; /* body font base 14px width equal to 1200px */
}
.not-active{
  opacity: 0.5;
}
.tnc {
  float: right;
  margin: 5px 0;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  color: #1428A0;
  &:hover {
    color: #061048;
  }
}
.payment {
  padding: 22px;
  &__heading {
    font-size: 22px;
    color: #1c1e23;
    @media only screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  &__title {
    font-size: 14px;
    color: #1c1e23;
  }
  &__type {
    position: relative;
  }
  &__list {
    background-color: #fff;
    line-height: 2em;
    width: 400px;

    .list__togel-label {
      padding: 10px 15px;
      font-size: 18px;
      display: block;
      margin-top: 15px;
    }
    .list__togel-button { float: right; }
    li.list__items {
      font-size: 15px;
      padding: 10px 15px;
      border-top: #ccc 1px solid;
      &:hover {
        background-color: #E5F4FB;
        cursor: pointer;
      }
    }
    &--label{
      margin-top: 25px;
    }
  }
  &__cashback {
    font-size: 18px;
    font-weight: 500;
  }
  .klikbca {
    font-size: 16px;
    margin-top: 15px;
    &__input {
      padding: 10px 15px;
      margin-top: 10px;
      display: block;
      border: none;
    }
    &__span {
      color: red;
      font-size: 12px;
    }
  }
}

.list {
  /* togel */
  &__togel {
    padding-bottom: 0;
    &-button:before {
      content: '';
      width: 10px;
      height: 10px;
      margin-top: 6px;
      display: block;
      border-right: #ccc 2px solid;
      border-bottom: #ccc 2px solid;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -webkit-transition: all .3s;
      transition: all .3s;
    }
    &-label {
      cursor: pointer;
    }
    &-content {
      opacity: 0;
      overflow: hidden;
      overflow-y: hidden;
      max-height: 0px;
      transition-property: all;
      transition-duration: .3s;
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

    }
  }
  input.list__togel-input {
    opacity: 0;
    position: absolute;
  }
  input.list__togel-input:checked ~ div.list__togel-content {
    opacity: 1;
    max-height: 400px;
    overflow-y: auto;
    -webkit-transition: max-height 1s ease;
    -moz-transition: max-height 1s ease;
    -o-transition: max-height 1s ease;
    transition: max-height 1s ease;
  }
  input.list__togel-input:checked + label > span.list__togel-button:before {
      margin-top: 10px;
      transform: rotate(-135deg);
      -ms-transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
      -webkit-transition: all .3s;
      transition: all .3s;
  }
}

//tab - start
.tab__container { position: relative; }
input[type="radio"] { display: none; }
input[type="radio"], section {
  clear: both;
  padding-top: 10px;
  // display: none;
}

label.payment__type {
  width: 48%;
  margin-right: 2%;
  display: inline-block;
  padding: 23px 10px;
  font-size: 18px;
  color: #1c1e23;
  border: solid 1px #d6d6d6;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  &:nth-child(n+3){
    margin-top: 5px;
  }
  @media only screen and (max-width: 568px) { font-size: 14px; }
  @media only screen and (max-width: 455px) { font-size: 14px; padding: 9px; }
  @media only screen and (max-width: 320px) { font-size: 14px; }
}

.tab__content {
  padding: 20px;
  margin-top: 17px;
  display: block;
  background: #f2f2f2;
  label:nth-child(n+3){
    margin-top: 10px;
  }
  p{
    margin: 0
  }
}
#paymentType:checked {
  @at-root .tabku #{&} ~ label.tab__checked {
    background: url(~assets/images/icon-success-small.png) right top no-repeat;
  }
}
//tab - end

@media only screen and (max-width: 568px) {
  .payment {
    zoom: 90%;
    &__heading {
      font-size: 18px;
    }
    &__type {
      padding: 20px 4%;
      &:before {
        bottom: -34px;
      }
    }
    &__list, .klikbca__input {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 320px) {
  .payment__heading {
    font-size: 14px;
  }
}
</style>
