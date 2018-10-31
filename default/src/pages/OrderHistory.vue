<template>
  <div class="order-history__wrapper">
    <div class="order-history__content">
      <div class="order-history__title"> {{ $t('app.order.history.title') }} </div>
      <div class="order-history__sub-title" v-if="!orderHistories.length || allOrdersConfirmed">
        {{ $t('app.order.history.description_empty_order_1') }}
        <br>
        {{ $t('app.order.history.description_empty_order_2') }}
        <a href="https://www.blibli.com/member/order" target="_blank"> {{ $t('app.order.history.order') }} </a>
      </div>
      <div class="order-history__sub-title" v-else> {{ $t('app.order.history.description') }} </div>
      <div class="order-history__empty" v-if="!orderHistories.length || allOrdersConfirmed">
        <img src="~assets/images/flash-sale/icon-oos-copy.svg"/>
      </div>
      <div v-else
        v-for="(order, index) in orderHistories" :key="index">
        <div class="order-history__other-details" v-if="order.orderStatus === 'M'">
          <div class="order-history__other-details-field__wrapper">
            <div class="order-history__other-details-field">
              <div class="order-history__other-details-field__label"> {{ $t('app.order.history.body.transactionDate') }} </div>
              <div class="order-history__other-details-field__value">
                {{ order.orderDate | dateFormatWithHyphen }}  {{ order.orderDate | timeFormat }}
              </div>
            </div>
            <div class="order-history__other-details-field">
              <div class="order-history__other-details-field__label"> {{ $t('app.order.history.body.orderId') }} </div>
              <div class="order-history__other-details-field__value"> {{ order.orderId }} </div>
            </div>
            <div class="order-history__other-details-field">
              <div class="order-history__other-details-field__label"> {{ $t('app.order.history.body.status') }} </div>
              <div class="order-history__other-details-field__value">
                {{ $t('app.order.history.body.waitingPayment') }}<br>
               {{ order.payment.description }} <span v-if="order.payment.extendedData.CC_TENOR > 0" ><span class="tenor-info">Cicilian 0%</span> - {{order.payment.extendedData.CC_TENOR }} bulan</span>
              </div>
            </div>
            <div class="order-history__other-details-field">
              <div class="order-history__other-details-field__label"> {{ $t('app.order.history.body.totalPayment') }} </div>
              <div class="order-history__other-details-field__value orange"> {{order.totalOrder | currencyFormat}} </div>
            </div>
          </div>
          <div class="order-history__other-details-deadline">
            <div class="order-history__other-details-deadline__left">
              <img src="~assets/images/flash-sale/combined-shape.svg"/>
            </div>
            <div class="order-history__other-details-deadline__middle">
              <div class="order-history__other-details-deadline__middle-title" v-if="isShowVa(order.payment)">
                <div v-if="order.payment.extendedData.BANK_CODE || order.payment.extendedData.BILLER_CODE">
                  {{ $t('app.order.history.body.companyCode') }}:
                  <strong>
                    {{order.payment.extendedData.BANK_CODE || order.payment.extendedData.BILLER_CODE}} - {{ paymentLabel(order.payment) }}
                  </strong>
                </div>
                <div>
                  {{ $t('app.order.history.body.virtualAccount') }}:
                  <strong> {{order.payment.virtualAccountNumber}} </strong>
                </div>
                <div>
                  {{ $t('app.order.history.body.countDownOrderPayment') }}:
                  <strong>
                    {{orderExpiryDuration(order.payment.orderExpirationDisplayCustomer)}}
                  </strong>
                </div>
              </div>
              <div class="order-history__other-details-deadline__middle-title" v-else>
                <div v-if="order.payment.extendedData.BANK_CODE || order.payment.extendedData.BILLER_CODE">
                  {{ $t('app.order.history.body.companyCode') }}:
                  <strong>
                    {{order.payment.extendedData.BANK_CODE || order.payment.extendedData.BILLER_CODE}} - {{ paymentLabel(order.payment) }}
                  </strong>
                </div>
                <div v-if="isShowAccountNumber(order.payment)">
                  {{ $t('app.order.history.body.accountNumber') }}:
                  <strong> {{order.payment.extendedData.VIRTUAL_ACCOUNT_NUMBER}} </strong>
                </div>
                <div v-if="isShowPaymentCode(order.payment)">
                  {{ $t('app.order.history.body.paymentCode') }}:
                  <strong> {{order.payment.extendedData.BILL_KEY || order.payment.extendedData.blibliOrderId}} </strong>
                </div>
                <div>
                  {{ $t('app.order.history.body.countDownOrderPayment') }}:
                  <strong>
                    {{orderExpiryDuration(order.payment.orderExpirationDisplayCustomer)}}
                  </strong>
                </div>
              </div>
              <div class="order-history__other-details-deadline__middle-instruction">
                <a :href="paymentInstructionUrl(order.payment, order.orderId)" target="_blank"> {{ $t('app.order.history.body.paymentGuide') }} </a></div>
            </div>
            <div class="order-history__other-details-deadline__right">
              <button class="order-history__other-details-deadline__right-btn-continue"
                @click="doRepay(order.orderId)" v-if="!isOfflinePayment(order.payment)">
                {{ $t('app.order.history.body.repay') }}
              </button>
              <button class="order-history__other-details-deadline__right-btn-method"
                @click="changePayment(order.orderId)" v-if="visibleChangePayment">
                {{ $t('app.order.history.body.changePayment') }}
              </button>
            </div>
          </div>
        </div>
        <div class="order-history__product-details" v-if="order.orderStatus === 'M'">
          <div class="order-history__product-details__title" v-if="!isMobile">
            <div class="order-history__product-details__title-left"> {{ $t('app.order.history.body.product') }} </div>
            <div class="order-history__product-details__title-right"> {{ $t('app.order.history.body.shippingAddress') }} </div>
          </div>
          <div class="order-history__product-details-section"
            v-for="(item, index) in order.cartItems" :key="index">
            <div class="order-history__product-details-section-left">
              <div class="order-history__product-details__title-left" v-if="isMobile"> {{ $t('app.order.history.body.product') }} </div>
              <span class="order-history__product-details-section-left__image">
                <img :src="item.image"/>
              </span>
              <span class="order-history__product-details-section-left__description">
                <span class="order-history__product-details-section-left__description-name">
                  {{ item.itemDetail.itemName }} - {{ item.description }}
                </span>
                <span class="order-history__product-details-section-left__description-number">
                  {{ $t('app.order.history.body.quantity') }} {{ item.allocatedQuantity }}
                </span>
                <span class="order-history__product-details-section-left__description-amount">
                  {{ order.totalOrder | currencyFormat }}
                </span>
              </span>
            </div>
            <div class="order-history__product-details-section-right">
              <div v-if="isMobile" class="order-history__product-details__title-right"> {{ $t('app.order.history.body.shippingAddress') }} </div>
              <!-- <span class="order-history__product-details-section-right__title">
                {{ $t('app.order.history.body.shippingAddress') }}
              </span> -->
              <span class="order-history__product-details-section-right__description">
                <span class="order-history__product-details-section-right__description-name">
                  {{ order.customer.customerAddress.fullOrLegalName }}
                </span>
                <span class="order-history__product-details-section-right__description-address">
                  {{ address(order.customer.customerAddress.streetAddress1, order.customer.customerAddress.streetAddress2) }}
                  <br v-if="!isMobile">
                  {{ order.customer.customerAddress.subDistrict }},
                  {{ order.customer.customerAddress.district }},
                  <br v-if="!isMobile">
                  {{ order.customer.customerAddress.city }},
                  {{ order.customer.customerAddress.state }} {{ order.customer.customerAddress.postalCode }}
                </span>
                <span class="order-history__product-details-section-right__description-tel">
                  {{ $t('app.order.history.body.phoneNumber') }} {{order.customer.customerAddress.phoneNumber}}
                </span>
              </span>
            </div>
          </div>
          <!-- <div class="order-history__product-details-section">
            <div class="order-history__product-details-section-right">
              <span class="order-history__product-details-section-right__title">
                {{ $t('app.order.history.body.shippingAddress') }}
              </span>
              <span class="order-history__product-details-section-right__description">
                <span class="order-history__product-details-section-right__description-name">
                  {{ order.customer.customerAddress.fullOrLegalName }}
                </span>
                <span class="order-history__product-details-section-right__description-address">
                  {{deliveryAddress}}
                </span>
                <span class="order-history__product-details-section-right__description-tel">
                  {{ $t('app.order.history.body.phoneNumber') }} {{order.customer.customerAddress.phoneNumber}}
                </span>
              </span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/order-history.js"></script>
<style lang="scss" scoped>
  .tenor-info {
    color: #00b25a
  }
  .orange {
    color: #f7921e;
  }
  .order-history {
    &__empty {
      text-align: center;
      overflow: hidden;
      @media only screen and (max-width: 600px) {
        margin-top: 80px;
      }
      @media only screen and (min-width: 601px) {
        margin-top: 150px;
      }
    }
    &__wrapper {
      background: #FFFFFF;
      height: 100vh;
      @media only screen and (max-width: 768px) {
        height: auto;
      }
    }
    &__content {
      position: relative;
      top: 2%;
      width: 80%;
      margin: auto;
      @media only screen and (max-width: 768px) {
        width: 95%;
        padding-bottom: 130px;
      }
    }
    &__title {
      font-size: 22px;
      font-weight: bold;
      @media only screen and (max-width: 768px) {
        font-size: 18px;
        padding-top: 8px;
      }
    }
    &__sub-title {
      font-size: 16px;
      padding: 10px 0;
      a {
        color: #0095dc;
        text-decoration: none;
      }
      @media only screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
    &__other-details {
      background: #f2f2f2;
      margin-top: 15px;
      line-height: 1.6;
      width: 100%;
      padding: 15px;
      border: 1px solid #DDD;
      font-size: 14px;
      @media only screen and (max-width: 768px) {
        width: 90%;
      }
      &-field {
        margin-bottom: 20px;
        width: 24%;
        @media only screen and (max-width: 768px) {
          width: 100%;
          margin-bottom: 3px;
        }
        &__wrapper {
          display: flex;
          align-items: top;
          @media only screen and (max-width: 768px) {
            display: block;
          }
        }
        &__label {
          display: block;
          @media only screen and (max-width: 768px) {
            width: 42%;
            display: inline-block;
            vertical-align: top;
          }
        }
        &__value {
          font-weight: bold;
          @media only screen and (max-width: 768px) {
            width: 55%;
            display: inline-block;
          }
        }
      }
      &-deadline {
        background: #FFFFCC;
        border: 2px solid #F7921E;
        padding: 10px;
        &__left {
          width: 5%;
          display: inline-block;
          text-align: center;
          position: relative;
          top: -15px;
          @media screen and (max-width: 768px) {
            top: 5px;
            width: 10%;
            vertical-align: top;
          }
        }
        &__middle {
          width: 40%;
          display: inline-block;
          @media only screen and (max-width: 768px) {
            width: 80%;
            margin-left: 20px;
          }
          &-image {
            display: block;
          }
          &-title {
            display: block;
          }
          &-instruction {
            a {
              color: #33ABE1;
              text-decoration: none;
            }
          }
        }
        &__right {
          width: 49%;
          display: inline-block;
          float: right;
          position: relative;
          top: -1px;
          font-weight: bold;
          @media only screen and (max-width: 768px) {
            width: 100%;
            float: none;
          }
          &-btn-continue {
            outline: 0;
            padding: 12px 20px;
            background-color: #f7921e;
            color: #fff;
            cursor: pointer;
            margin: 5px;
            text-decoration: none;
            text-align: center;
            border: none;
            @media (max-width: 768px) {
              display: block;
              padding: 9px 18%;
              margin: auto;
            }
          }
          &-btn-method {
            outline: 0;
            padding: 12px 20px;
            color: #444;
            cursor: pointer;
            margin: 5px;
            text-decoration: none;
            text-align: center;
            border: 1px solid #f7921e;
            background-color: transparent;
            @media (max-width: 768px) {
              display: block;
              padding: 9px 15.8%;
              margin: 6px auto;
            }
            @media (max-width: 700px) {
              padding: 9px 13.5%;
            }
            @media (max-width: 450px) {
              padding: 9px 14%;
            }
            @media (max-width: 350px) {
              padding: 9px 12%;
            }
          }
        }
      }
    }
    &__product-details {
      border: 1px solid #DDD;
      width: 100%;
      padding: 15px;
      @media only screen and (max-width: 768px) {
        width: 90%;
      }
      &__title {
        display: flex;
        width: 100%;
        font-size: 14px;
        margin: 0 10px;
        &-left, &-right {
          width: 50%;
        }
        @media only screen and (max-width: 768px) {
          display: block;
        }
      }
      &-section {
        vertical-align: top;
        display: flex;
        width: 100%;
        padding: 10px;
        font-size: 14px;
        @media only screen and (max-width: 768px) {
          width: 100%;
          display: block;
        }
        &__title {
          display: block;
          font-weight: bold;
          margin-bottom: 10px;
        }
        &-left {
          width: 50%;
          @media only screen and (max-width: 768px) {
            width: 100%;
          }
          &__image {
            width: 11%;
            margin-right: 10px;
            display: inline-block;
            @media only screen and (max-width: 768px) {
              width: 30%;
            }
            img {
              width: 100%;
            }
          }
          &__description {
            vertical-align: top;
            width: 80%;
            display: inline-block;
            line-height: 1.4;
            @media only screen and (max-width: 768px) {
              margin-top: 6px;
              width: 59%;
              line-height: 1.4;
            }
            &-name {
              font-weight: bold;
              display: block;
            }
            &-number {
              display: block;
              margin-bottom: 2%;
            }
            &-amount {
              color: #f7921e;
              font-weight: bold;
            }
          }
        }
        &-right {
          width: 50%;
          @media only screen and (max-width: 768px){
            width: 100%;
            margin-top: 10px;
          }
          &__description {
            line-height: 1.4;
            @media only screen and (max-width: 768px) {
              width: 100%;
            }
            &-name {
              font-weight: bold;
              display: block;
            }
            &-address {
              display: block;
            }
          }
        }
      }
    }
  }
</style>
