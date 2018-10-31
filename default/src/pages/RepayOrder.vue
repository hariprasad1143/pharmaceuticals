<template>
  <div class="thankyou">

    <div class="thankyou__icon">
      <img src="~assets/images/icon-waiting.png" v-if="order.orderStatus === 'M'" />
      <img src="~assets/images/icon-failed.png" v-if="order.orderStatus === 'X'" />
    </div>

    <div class="thankyou__wrapper">
      <div class="thankyou__info">
        <h2>{{ order.orderStatus === 'M' ? $t("app.repay.title") : $t("app.orderExpired.title") }}</h2>
        <small>{{ $t("app.thankYou.orderNumber") }} : {{ order.orderId }}</small>
      </div>

      <div class="thankyou__content">
        <div class="thankyou__content-title" v-if="order.orderStatus === 'M'">
          {{ $t("app.repay.message", {orderExpiryDuration: orderExpiryDuration}) }}
          {{ $t("app.thankYou.contactCS") }}.
        </div>

        <div class="thankyou__content-title" v-if="order.orderStatus === 'X'">
          {{ $t("app.orderExpired.message") }}
        </div>

        <div class="thankyou__content-title" v-if="isWaitingPayment">
          {{ $t("app.thankYou.payment") }} {{ order.payment.description }} {{ $t("app.thankYou.paymentStepsTitle") }} :
        </div>

        <div v-if="isWaitingPayment"
            class="thankyou__content-instruction"
            v-html="getPaymentInstruction(order.payment.method)"></div>

        <div class="thankyou__content-contact">
          <b>24/7 Customer Care</b>
          <div>
            0804 1 871 871 | customer.care@blibli.com
          </div>
        </div>
        <div class="btn__wrap" v-if="order.orderStatus === 'X'">
          <div class="thankyou__content-btn btn">
            <button id="thankyou-btn_continue_payment" class="btn__repay" @click="goToHome">
              {{ $t("app.orderExpired.button") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <modal-confirmation
      :isVisible="visibleNotif"
      @onConfirm="onConfirm"
      @onClose="onClose">
    </modal-confirmation>

    <simplert ref="simplert"></simplert>

  </div>
</template>

<script src="./js/repay-order.js"></script>
<style lang="scss" scoped>
.clearfix {
  *zoom: 1;
  &:before,&:after {display: table;content: ' ';}
  &:after {clear: both;}
}
.thankyou{
  text-align: center;
  background-color: #fff;
  color: #282828;
  padding: 100px 0;
  line-height: 2;

  @media (min-width: 960px) {
    background-color: #f8f9fa;
  }

  &__icon{
    @media (min-width: 960px) {
      background-color: #fff;
      padding: 10px 10px;
      width: 70px;
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
  &__info{
    margin: 20px 0 30px;
    color: #1c1e23;

    h2{
      font-size: 1.3em;
      text-align: center;
    }
    small{
      font-size: 14px;
      font-weight: bold;
    }
  }
  &__content{
    &-title{
      padding: 0 5px 20px 5px;
    }
    &-contact{
      b{
        font-size: 16px;
      }
    }
    &-btn{
      margin-top: 40px;
    }
    &-instruction {
      width: auto;
      margin: 0 auto;
      text-align: justify;
      max-height: 280px;
      overflow-y: scroll;
      padding: 0 20px;

      @media (min-width: 600px) {
        width: 600px;
      }
    }

    ol {
      margin: 0;
      padding: 0;
      list-style: decimal;

      li{
        padding-bottom: 20px;
        margin: auto;
        width: 80%;

        @media (min-width: 960px) {
          width: 500px;
        }
      }
    }
  }
}
.btn__wrap {
  margin: 40px auto;
  display: block;
  .btn {
    display: inline-flex;
    margin: 0 auto;
    text-align: center;
    &__none {
      display: none;
    }
    &--no-float{
      float: none;
    }
    &__change-payment, &__repay {
      /*float: right;*/
    }
    &__change-payment {
      outline: 0;
      padding: 12px 20px;
      border-radius: 6px;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      color: #0072c5;
      margin: 5px;
      border: 1px solid #0072c5;
      background-color: #fff;
    }
    &__repay {
      outline: 0;
      padding: 12px 20px;
      border-radius: 6px;
      border: 1px solid #0072c5;
      background-color: #0072c5;
      color: #fff;
      text-transform: uppercase;
      cursor: pointer;
      margin: 5px;
      &-white {
        background: #fff;
        color: #0072c5;
      }
    }
  }
}
@media (max-width: 568px) {
  .thankyou__wrapper {
    max-width: 88%;
    margin: auto;
    .btn {
      display: block !important;
      margin: auto;
      &__wrap {
        display: block !important;
        margin: inherit auto 0;
      }
      &__change-payment {
        font-size: 12px;
        font-weight: bold;
        color: #333333;
        border: none;
      }
      &__change-payment, &__repay {
        float: none;
      }
    }
  }
}
</style>
