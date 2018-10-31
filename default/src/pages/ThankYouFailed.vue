<template>
  <div class="thankyou">

    <div class="thankyou__icon">
      <img src="~assets/images/icon-failed.png" />
    </div>

    <div class="thankyou__wrapper">
      <div v-if="visibleFailedPayment">
        <div class="thankyou__info">
          <h2 v-if="!visibleBackToHome">{{ $t("app.thankYou.failedMessage") }}</h2>
          <h2 v-else>{{ $t("app.thankYou.orderExpiredTitle") }}</h2>
          <h3 v-if="order.orderId">{{ $t("app.thankYou.orderNumber") }} : {{ order.orderId }}</h3>
        </div>
        <div class="thankyou__content">
          <div class="thankyou__content-title">
            <p v-if="!visibleBackToHome">
              {{order.payment.validationMessage}}
              <br/>
              {{$t('app.thankYou.paymentError')}}
            </p>
            <p v-else v-html="$t('app.thankYou.expiredTimeError')"></p>
            <span v-if="order.orderStatus && order.orderStatus === 'X'">
              {{ $t("app.thankYou.orderExpiredMessage") }}
            </span>
            <span v-if="order.orderExpirationDisplayCustomer" v-html="$t('app.thankYou.expiredPaymentDate')"></span>
            <div v-if="!visibleBackToHome">
              <timer
                      :timeoutInMs="order.payment.orderExpirationDisplayCustomer - new Date().getTime()"
                      cookieType="thank-you-failed"
                      @onTimeout="hideButtonRepay"/>
              <div class="thankyou__orderInfo">
                <p>Lihat detail pesanan di email atau di <a @click="redirectOrderHistory">Pesanan Menunggu Pembayaran</a>.<br>Segera selesaikan pembayaran sebelum batas waktu yang telah ditentukan.</p>
              </div>
              <div class="thankyou__content-btn btn clearfix">
                <div v-if="orderStatus !== 'X'">
                <button id="thankyou-btn_change_payment" class="btn__change-payment" @click="getOrderDetail" v-if="JSON.parse(staticConfig.paymentStatus)">
                {{ $t("app.thankYou.changePayment")}}
                </button>
                <button id="thankyou-btn_continue_payment" class="btn__repay" @click="doRepay">
                  {{ $t("app.thankYou.repayText") }}
                </button>
              </div>
            </div>
            </div>
            <div v-else>
              <div class="thankyou__content-btn btn clearfix">
                <a href="https://www.blibli.com/home" class="btn__continue" id="thankyou-btn_backtohome">
                  {{ $t("app.orderExpired.button") }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h3 v-if="errorMessage !== '' && order.orderStatus !== 'X'">
          {{ errorMessage }}
        </h3>
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

<script src="./js/thank-you-failed.js"></script>
<style lang="scss" scoped>
.thankyou{
  text-align: center;
  background-color: #fff;
  color: #282828;
  padding: 20px 0;
  line-height: 2;

  @media (min-width: 960px) {
    background-color: #f8f9fa;
    padding: 100px 0;
  }
  &__orderInfo{
    width: 556px;
    height: 60px;
    border-radius: 4px;
    background-color: #e5f4fb;
    margin: auto;
    font-size: 15px;
    p{
      font-size: 15px;
      a{
        color: #0095dc;
        cursor: pointer;
        text-decoration: underline;
      }
    }
    @media (max-width: 960px) {
    width: 335px;
    height: 100px;
    p{
      width: 335px;
      height: 40px;
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.4;
      letter-spacing: normal;
      text-align: center;
      color: #333333;
      a{
        color: #0095dc;
        white-space: pre;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  }
  &__icon{
    @media (min-width: 960px) {
      background-color: #fff;
      padding: 10px 10px;
      width: 80px;
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
    color: #1c1e23;

    h2{
      text-align: center;
      margin:0;
    }
    h3{
      margin: 0;
    }
  }
  &__content{
    &-contact{
      b{
        font-size: 16px;
      }
    }
    &-btn{
      margin-top: 40px;
    }
  }
  &__title{
    p{
      margin: 0
    }
  }
}

.btn {
  width: 510px;
  margin: 0px auto;
  &__change-payment {
    outline: 0;
    padding: 12px 20px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    color: #0072c5;
    margin: 5px;
    border: 1px solid #0072c5;
    background-color: #fff;
    @media (max-width: 960px) {
      padding: 12px 15px;
      border: 1px solid #0072c5;
    }
  }
  &__repay {
    outline: 0;
    padding: 12px 20px;
    border: 1px solid #0072c5;
    background-color: #0095dc;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    margin: 5px;
    &--disabled {
       opacity: 0.5;
       cursor: not-allowed;
    }
  }
  &__continue{
    outline: 0;
    padding: 12px 40px;
    border-radius: 2px;
    border: 1px solid #0072c5;
    background-color: #0072c5;
    color: #fff;
    cursor: pointer;
    margin: 5px;
    text-decoration: none;
    &:hover{
      background-color: transparent;
      border: 1px solid #0072c5;
      color: #0072c5;
    }
  }
}
@media (max-width: 568px) {
  .btn {
    width: 100%;
    &__change-payment {
      font-size: 12px;
      font-weight: bold;
      color: #333333;
    }
    &__change-payment, &__repay {
      float: none;
    }
  }
}
</style>

