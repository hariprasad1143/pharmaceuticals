<template>
  <div class="thankyou" v-if="!isLoadingContent">

    <div class="thankyou__icon" :class="{'thankyou__icon--full':isWaitingOrderResponse}">
      <span v-if="isWaitingOrderResponse && !hasReachMaxWaitingTime">
        <loading></loading>
      </span>
      <img src="~assets/images/icon-waiting.png" v-else-if="isWaitingPayment || hasReachMaxWaitingTime"/>
      <img src="~assets/images/icon-success.png" v-else/>
    </div>

    <div class="thankyou__wrapper">
      <div v-if="!isWaitingOrderResponse">
        <div class="thankyou__info">
          <h2 v-if="!isWaitingPayment">{{ $t("app.thankYou.successMessage") }}</h2>
          <h2 v-else>{{ $t("app.thankYou.orderReceived") }}</h2>
          <h3>{{ $t("app.thankYou.orderNumber") }} : {{ order.orderId }}</h3>
        </div>
        <div v-if="!isWaitingPayment" class="thankyou__payment-description" v-html="$t('app.thankYou.successMessageLong', {paymentMethod: order.payment.description})"></div>
        <div v-if="isShowTenor && order.payment.tenor > 0">
            (<span class="thankyou__payment--installment">Cicilan 0%</span>
            - {{order.payment.tenor}} {{$t('app.order.month')}})
        </div>
        <div v-if="!isWaitingPayment">
          <div class="thankyou__detailInfo">
            <div class="thankyou__detailInfo-content">
              <h3>{{ $t("app.thankYou.customerInfo") }}</h3>
              <small>{{order.customer.customerAddress.fullOrLegalName}}</small>
              <small>{{order.customer.customerAddress.email}}</small>
              <small>{{order.customer.customerAddress.phoneNumber}}</small>
            </div>
            <div class="thankyou__detailInfo-content thankyou__detailInfo-flexGrow">
              <h3>{{ $t("app.thankYou.pickUpPlace") }}</h3>
              <small class="shipping-address">
                {{orderShippingAddress.streetAddress1}}<br>
                {{orderShippingAddress.subDistrict}} {{orderShippingAddress.district}}, {{orderShippingAddress.city}}<br/>
                {{orderShippingAddress.state}} {{orderShippingAddress.postalCode}}
              </small>
            </div>
            <div class="thankyou__detailInfo-content">
              <h3>{{ $t("app.thankYou.order") }}</h3>
              <small v-for=" (item, idx) in order.cartItems" :key="'item-'+idx">
                <span>{{item.itemDetail.itemName}} - {{item.description}}</span>
              </small>
            </div>
          </div>
          <div class="thankyou__content-btn btn clearfix">
            <a href="https://www.blibli.com/home" class="btn__repay">
              {{ $t("app.thankYou.buyOthers") }}
            </a>
          </div>
        </div>
        <div class="thankyou__content" v-if="isWaitingPayment">
          <div class="thankyou__content-title">
            <p v-html="$t('app.thankYou.expireWarn', {paymentMethod: order.payment.description})"></p>
            <h3>{{ dateExpireFormatted }}, {{ $t("app.thankYou.time") }} {{ timeExpireFormatted }} {{ $t("app.thankYou.gmtPlus7") }}.</h3>
            <div v-if="order.payment.extendedData.BANK_CODE || order.payment.extendedData.BILLER_CODE">
              <p>{{$t('app.thankYou.companyCode')}}</p>
              <h2>{{order.payment.extendedData.BANK_CODE || order.payment.extendedData.BILLER_CODE}} - {{order.payment.description}}</h2>
            </div>
            <div v-if="isShowVa">
              <p>{{$t('app.thankYou.va')}}</p>
              <h2>{{order.payment.virtualAccountNumber}}</h2>
              <button @click="copyVa" class="thankyou__copy">{{$t('app.thankYou.copy')}}</button>
            </div>
            <div v-if="isShowPaymentCode">
              <p>{{$t('app.thankYou.paymentCode')}}</p>
              <h2>{{order.payment.extendedData.BILL_KEY || order.payment.extendedData.blibliOrderId}}</h2>
              <button @click="copyPaymentCode" class="thankyou__copy">{{$t('app.thankYou.copy')}}</button>
            </div>
          </div>
          <div class="thankyou__orderInfo">
           <p>Lihat detail pesanan di email atau di <a @click="redirectOrderHistory">Pesanan Menunggu Pembayaran</a>.<br>Segera selesaikan pembayaran sebelum batas waktu yang telah ditentukan.</p>
          </div>
          <div class="thankyou__content-instruction">
            <div v-if="isWaitingPayment"
                 v-html="getPaymentInstruction(order.payment.paymentMethod)"></div>
          </div>
          <div class="thankyou__content-btn btn clearfix">
            <button id="thankyou-btn_change_payment" class="btn__change-payment" @click="getOrderDetail"
                    v-if="orderStatus !== 'X' && JSON.parse(staticConfig.paymentStatus)">
              {{ $t("app.thankYou.changePayment") }}
            </button>
            <a href="https://www.blibli.com/home" class="btn__repay">
              {{ $t("app.thankYou.buyOthers") }}
            </a>
          </div>
        </div>
      </div>
      <div v-else-if="hasReachMaxWaitingTime">
        <div class="thankyou__info">
          <h2>{{ $t("app.repay.title") }}</h2>
          <h3>{{ $t("app.thankYou.orderNumber") }} : {{ order.orderId }}</h3>
        </div>
        <div class="thankyou__content--notification">
          <p>{{ $t("app.repay.finish") }}</p>
          <p>{{ $t("app.repay.ignore") }}</p>
        </div>
        <div class="thankyou__orderInfo">
          <p>Lihat detail pesanan di email atau di <a @click="redirectOrderHistory">Pesanan Menunggu Pembayaran</a>.<br>Segera selesaikan pembayaran sebelum batas waktu yang telah ditentukan.</p>
        </div>
        <div class="thankyou__content-btn btn clearfix">
          <button id="thankyou-btn_change_payment" class="btn__change-payment" @click="getOrderDetail"
              v-if="orderStatus !== 'X' && JSON.parse(staticConfig.paymentStatus)">
              {{ $t("app.thankYou.changePayment") }}
          </button>
          <button id="thankyou-btn_continue_payment" class="btn__repay" @click="doRepay"
             v-if="orderStatus !== 'X'">
            {{ $t("app.thankYou.repayText") }}
          </button>
        </div>
      </div>
      <div v-else>
        <div class="thankyou__info">
          <h2>{{ $t("app.thankYou.waiting.title") }}</h2>
          <h3>{{ $t("app.thankYou.orderNumber") }} : {{ order.orderId }}</h3>
        </div>
        <div class="thankyou__content--notification">
          <p v-html="$t('app.thankYou.waiting.description')"></p>
        </div>
        <timer
          :timeoutInMs="pendingThankyouPageTimer"
          cookieType="thank-you-success"
          :intervalCallBack="parseFloat(staticConfig.orderRefreshTime)"
          @callbackIntervalFunction="getInitOrder"
          @onTimeout="setToWaitingPage"/>
      </div>
    </div>

    <modal-confirmation
      :isVisible="visibleNotif"
      @onConfirm="onConfirm"
      @onClose="onClose">
    </modal-confirmation>

    <simplert ref="simplert">
    </simplert>

  </div>
</template>

<script src="./js/thank-you-success.js"></script>
<style lang="scss" scoped>
.thankyou{
  text-align: center;
  background-color: #fff;
  padding: 70px 0;
  line-height: 2;

  &__payment{
    &-description {
      width: 65%;
      margin: auto;
    }
    &--installment{
      color: #00b25a;
      font-weight: bold;
    }
  }

  @media (min-width: 960px) {
    background-color: #f8f9fa;
  }

  @media (max-width: 960px) {
    padding: 25px 0px 50px 0px;
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
    &--full{
      @media (min-width: 960px) {
        width: 770px;
      }
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
  &__info{
    color: #1c1e23;
    text-align: center;
    margin: 0px 60px;

    h2{
      font-size: 28px;
      text-align: center;
      margin: 0 0 10px 0;
      line-height: normal;
    }
    h3{
      margin: 0;
    }
    small{
      font-size: 20px;
      font-weight: bold;
    }

    @media (max-width: 960px) {
      h2{
        margin: 0px 12px;
        font-size: 16px;
      }

      small{
        font-size: 12px;
        font-weight: bold;
      }
    }

  }
  &__detailInfo{
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    @media (min-width: 540px) {
      flex-direction: row;
    }

    h3{
      margin: 15px 0px;
      font-size: 16px;
      text-align: left;
    }

    small{
      font-size: 14px;
      line-height: 1.71;
      text-align: left;
    }

    .shipping-address{
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      word-break: break-word;
    }

    @media (max-width: 960px) {
      margin: 0px 15px;
      h3{
        margin: 15px 0px;
        font-size: 14px;
        text-align: left;
      }

      small{
        font-size: 12px;
        line-height: 1.71;
        text-align: left;
      }
    }

    &-content{
      margin: 0px 0px;
      display: flex;
      flex-direction: column;
      align-items: left;
      @media (min-width: 960px) {
        margin: 0px 10px;
        flex-basis: 22%;
      }
    }

    &-flexGrow {
      flex-grow: 1;
    }

  }
  &__content{
    &-title{
      text-align: center;
      font-size: 14px;
      padding: 25px 10px 10px 10px;

      @media (max-width: 960px) {
        font-size: 14px;
      }
      p, h2{
        width: 60%;
        margin: 0 auto;
        @media (max-width: 960px) {
          width:80%;
        }
      }
    }

    &-btn{
      margin-top: 40px;
      text-align: center;
      &.clearfix{
        &:after{
           content: "";
           display: table;
           clear: both;
        }
     }
      a{
        @media (max-width: 768px) {
          display: inline-block;
        }
      }
    }

    /deep/ ul {
      margin: 0;
      padding: 0;
      list-style: disc;
      text-align: justify;
      li{
        padding-bottom: 12px;
        margin: auto;
        width: 80%;
        list-style: disc;
        @media (min-width: 500px) {
          width: 400px;
        }

        @media (max-width: 960px) {
          font-size: 12px;
        }
        > ul li {
          padding-bottom: 0;
          list-style: none;
          &:before {
            content: "\2013\a0";
          }
        }
      }
    }

    &-instruction {
      width: 600px;
      margin: 0 auto;
      text-align: left;
      overflow-y: auto;
      padding: 0 20px;
      p{
        margin: 0
      }
      @media (max-width: 960px) {
        width: auto;
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
    &--notification p{
      line-height: normal;
      font-size: 16px;
   }
   h3, h4{
     margin-top: 10px;
   }
  }
  &__copy{
     background: none;
     border: none;
     color: #0095da;
     text-decoration: underline;
  }
}

.btn{
  &__change-payment{
    outline: 0;
    padding: 12px 20px;
    background-color: #fff;
    color: #0072c5;
    text-transform: none;
    cursor: pointer;
    margin: 5px;
    text-decoration: none;
    border: 1px solid #0072c5;
    @media (max-width: 960px) {
      padding: 15px 60px;
    }
    &:hover{
      background-color: transparent;
      border: 1px solid #0072c5;
      color: #0072c5;
    }
  }
  &__buy-others{
    outline: 0;
    padding: 12px 20px;
    background-color: #fff;
    color: #0072c5;
    text-transform: none;
    cursor: pointer;
    margin: 5px;
    text-decoration: none;
    border: 1px solid #0072c5;
    @media (max-width: 960px) {
      padding: 9px 64px;
      display: inline-block;
    }
    &:hover{
      background-color: transparent;
      border: 1px solid #0072c5;
      color: #0072c5;
    }
  }
  &__repay {
    outline: 0;
    padding: 12px 20px;
    background-color: #0095dc;
    color: #fff;
    cursor: pointer;
    margin: 5px;
    text-decoration: none;
    border: none;
    @media (max-width: 960px) {
      padding: 15px 71px;
    }
    &--disabled {
       opacity: 0.5;
       cursor: not-allowed;
    }
  }
}
</style>
<style lang="scss">
  .thankyou{
    &__content{
      &-instruction{
        ol{
          padding: 0;
          padding-left: 15px;
        }
      }
    }
  }

</style>

