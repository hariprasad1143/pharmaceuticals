<template>
  <div class="order">
    <div class="container" v-if="order.orderId">
      <div class="print">
        <img src="~assets/images/printer.svg" width="20" height="20">
        <span @click="printInvoice">{{$t('app.order.print')}}</span>
      </div>
      <div class="wrapbox">
        <div class="no__grid">
          <div class="greetings">
            <center><img src="~assets/images/galaxy-note-9.jpg"></center>
            <strong>Dear {{orderCustomerDetail.name}},</strong><br><br>
            {{$t('app.order.greeting')}}<br>
            {{$t('app.order.infoText1')}}<br>
            {{$t('app.order.infoText2')}}<br>
            <hr></div>
          <div class="order__num">{{$t('app.order.orderId')}} : {{order.orderId}}</div>
        </div>
        <div class="wrapGrid">
          <div class="gridbox">
            <div class="grid__cell">
              <p>{{$t('app.order.number')}}{{orderCustomerDetail.identityType}}</p>
            </div>
            <div class="grid__cell">
              <p>{{orderCustomerDetail.identityNumber}}</p>
            </div>
          </div>
          <div class="gridbox">
            <div class="grid__cell">
              <p>{{$t('app.order.name')}}</p>
            </div>
            <div class="grid__cell">
              <p>{{orderCustomerDetail.name}}</p>
            </div>
          </div>
          <div class="gridbox">
            <div class="grid__cell">
              <p>{{$t('app.order.email')}}</p>
            </div>
            <div class="grid__cell">
              <p>{{orderCustomerDetail.email}}</p>
            </div>
          </div>
          <div class="gridbox">
            <div class="grid__cell">
              <p>{{$t('app.order.address')}}</p>
            </div>
            <div class="grid__cell shipping-address">
              <p>{{orderShippingAddress.address}}, {{orderShippingAddress.subdistrict}}, {{orderShippingAddress.district}}
                 {{orderShippingAddress.city}}, {{orderShippingAddress.province}}, {{$t('app.form.fields.postalCode')}}
                 {{orderShippingAddress.postalCode}} </p>
            </div>
          </div>
          <div class="gridbox">
            <div class="grid__cell">
              <p>{{$t('app.order.store')}}</p>
            </div>
            <div class="grid__cell">
              <p>{{orderPickupStore.name}}</p>
            </div>
          </div>
          <div class="gridbox">
            <div class="grid__cell">
              <p>{{$t('app.order.storeAddress')}}</p>
            </div>
            <div class="grid__cell">
              <p>{{orderPickupStore.address}}, {{orderPickupStore.city}}, {{orderPickupStore.province}}</p>
            </div>
          </div>
          <div class="gridbox">
            <div class="grid__cell">
              <p>{{$t('app.order.storePhone')}}</p>
            </div>
            <div class="grid__cell">
              <p>{{orderPickupStore.phoneNumber}}</p>
            </div>
          </div>
          <div class="gridbox">
            <div class="grid__cell">
              <p>{{$t('app.order.paymentMethod')}}</p>
            </div>
            <div class="grid__cell no__flex">
              <p>
                {{order.payment.description}} -
                <span v-if="order.payment.installment">
                  {{$t('app.order.tenor', {num: order.payment.installment})}} - {{installment}}/{{$t('app.order.month')}}
                </span>
                <span v-if="!order.payment.installment">{{$t('app.order.fullPayment')}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="gridtable">
          <hr>
          <div class="gridbox table">
            <div class="grid__cell">
              <strong>{{$t('app.order.order')}}</strong>
            </div>
            <div class="grid__cell mobile__hidden"></div>
          </div>
          <div class="gridbox table" v-for="item in order.items">
            <div class="grid__cell">
              {{item.fullName}}
            </div>
            <div v-if="item.price > 0" class="grid__cell">
              {{item.price | currencyFormat}}
            </div>
            <div v-else class="grid__cell">
              {{$t('app.order.preOrderGiftText')}}
            </div>
          </div>
          <div v-if="order.adjustments.length > 0" v-for="(adjustment, index) in order.adjustments">
            <div v-if="adjustment.amount !== 0">
              <div class="gridbox table" v-if="!adjustment.promoCode">
                <div class="grid__cell">
                  {{$t('app.order.cashback')}} {{order.payment.bankName}}
                </div>
                <div class="grid__cell">
                  - {{Math.abs(adjustment.amount) | currencyFormat}}
                  <span v-if="isShownStar[index]">*</span>
                </div>
              </div>
              <div class="gridbox table" v-else>
                <div class="grid__cell">
                  {{$t('app.order.discountSGI')}}
                </div>
                <div class="grid__cell">
                  - {{Math.abs(adjustment.amount) | currencyFormat}}
                </div>
              </div>
            </div>
          </div>
          <div class="gridbox table">
            <div class="grid__cell total">
              {{$t('app.order.total')}}
            </div>
            <div class="grid__cell total">
              {{order.paidAmount | currencyFormat}}
            </div>
          </div>
          <div class="gridbox table" v-if="visibleCashbackText">
            <div class="grid__cell cashback">
              <span>{{$t('app.order.youllGetCashback', {value: cashbackValue, bank: order.payment.bankName })}}</span>
            </div>
          </div>
        </div>
        <div class="no__grid">
          <div class="greetings" v-html="receiptTncContent"></div>
          <div class="customerCareInfo">
            <title>{{$t('app.order.customerCare')}}</title>
            <content>{{$t('app.order.customerCarePhoneNumber')}} | <a href="mailto:customer.care@blibli.com?Subject=Galaxy%20Launch%20Pack"> {{$t('app.order.customerCareEmail')}} </a> </content>
          </div>
        </div>
        <br><br>
      </div>
      <printed-receipt v-show="false" ref="printReceiptArea"></printed-receipt>
    </div>
    <simplert ref="simplert"></simplert>
  </div>
</template>

<script src="./js/order-detail.js"></script>

<style lang="scss" scoped>
  .order {
    .print {
      img {
        vertical-align: middle;
        margin-right: 0.7142em;
      }
      padding: 20px 0;
      text-align: right;
      cursor: pointer;
    }
    .container {
      margin: 0 auto;
      padding: 50px 1.0714em 2em;
      max-width: 57.142em;
      /* body font base 14px width equal to 800px */
      .wrapbox {
        color: #1c1e23;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 1px 3px 0 rgba(32, 33, 39, 0.12);
        line-height: 1.7em;
        .greetings {
          font-size: 14px;
          margin-bottom: 10px;
          img {
            max-width: 100%;
            margin: 50px 0px;
          }
          hr {
            border: 1px solid #1d1d1d;
          }
        }
        .order__num {
          font-size: 14px;
          text-align: right;
        }
        .wrapGrid {
          .gridbox {
            padding: 0 3.5714em 0 3.5714em;
            display: flex;
            flex-flow: row;
            flex-wrap: wrap;
            .grid__cell {
              margin-top: 0;
              p {
                margin: 0;
              }
              &:nth-child(2) {
                flex:3;
                padding: 0;
              }
              &:first-child {
                flex:1;
                .field__title {
                  margin-top: 0;
                }
              }
              .field__title {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 1.07142em;
                margin-top: 0;
              }
              .store__name {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 5px;
              }
              .store__address {
                font-size: 13px;
                line-height: 20px;
                color: #666;
              }
              .user__name {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 5px;
              }
              .user__email {
                font-size: 13px;
                margin-bottom: 25px;
                color: #666;
              }
              .user__identity {
                font-size: 13px;
                margin-bottom: 5px;
              }
              .payment__name {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 5px;
              }
              .payment__installment {
                font-size: 13px;
                color: #666;
              }
              &.shipping-address {
                 word-break: break-word;
               }
            }
            .grid__cell.small__column {}
          }
        }
        .gridtable {
          margin-top: 2.1428em;
          margin-bottom: 1em;
          padding: 0 3.5714em;

          hr{
            border: 0.5px solid #1d1d1d;
          }

          .gridbox.table {
            display: flex;
            flex-flow: row;
            flex-wrap: wrap;
            margin-top: 0;

            .grid__cell {
              flex: 1;
              padding: 5px 0px;
              p {
                padding: 0;
                text-align: center;
              }
              &:nth-child(2n) {
                p {
                  text-align: center;
                }
              }
              &:first-child {
                min-width: 60%;
                border-bottom: none;
                p {
                  text-align: left;
                }
              }
              &:last-child {
                p {
                  text-align: right;
                  padding-right: 2.1428em;
                }
                &::before {
                  content: "-";
                  position: relative;
                  left: -5px;
                  visibility: hidden;
                }
              }
            }
            .grid__cell.discount::before {
              visibility: visible;
            }
            .grid__cell.total {
              padding-top: 20px;
              font-weight: bold;
            }
          }
          .gridbox.no__flex {
            .grid__cell {
              &:first-child {
                flex: 2;
              }
              &:last-child {
                text-align: center;
                flex: 1;
                p {
                  text-align: right;
                  padding-right: 2.1428em;
                }
              }
              &:nth-child(2) {
                text-align: center;
                flex: 1;
              }
              p {
                margin: 0;
              }
            }
            &:last-child {
              padding-bottom: 2.8571em;
              .grid__cell {
                &:nth-child(2),
                &:nth-child(3) {
                  border-top: 1px solid #dfdfdf;
                  padding-top: 1.4285em;
                }
              }
            }
          }
          .gridbox.no__flex.border {
            border-bottom: none;
            padding: 0;
            width: 44%;
            text-align: right;
            margin-left: 50%;
          }
        }
        .no__grid {
          text-align: left;
          padding: 1.5em 3.5714em 0;
          h3 {
            font-size: 1.7857em;
            font-weight: normal;
            margin: 0;
          }
          span {
            font-size: 1.4285em;
          }
          &--table {
            text-align: left;
            background: #fff;
            padding: 50px;
          }
        }
      }
    }
    table {
      th {
        color: #676c75;
        border-top: solid 1px #dfdfdf;
        border-bottom: solid 1px #dfdfdf;
      }
    }
  }
  .customerCareInfo {
    margin: 30px 0px 0px 0px;

    title {
      display: grid;
      font-size: 15px;
      font-weight: bold;
      line-height: 1.11;
      letter-spacing: normal;
    }

    content {
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: normal;
    }

    a {
      color: #0096d9;
      text-decoration: none;
    }

    @media only screen and (min-width: 676px) {
      display: block;
      title {
        display: grid;
        font-size: 18px;
        font-weight: bold;
        line-height: 1.11;
        letter-spacing: normal;
      }

      content {
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: normal;
      }
    }
  }

  @media only screen and (max-width: 676px) {
    .order {
      .container {
        .wrapbox {
          .gridbox {
            display: block !important;
            padding: 0 1.4285em !important;
            .grid__cell {
              padding-bottom: 1.0714em !important;
              padding-top: 1.0714em !important;
              margin-top: 0 !important;
              &:first-child {
                h3 {
                  margin-top: 0 !important;
                }
                p {
                  font-weight: bold;
                }
              }
              &:nth-child(2n) {
                padding: 0 0 1.0714em 0 !important;
              }
              &:last-child {
                border-bottom: 1px solid #eaeaea;
              }
            }
            .no__flex {
              border-bottom: none !important;
            }
          }
          .gridtable {
            padding: 0 1.4285em !important;
            margin-top: 0 !important;
            .gridbox.table {
              padding: 10px 0px !important;
              .grid__cell {
                border-top: none !important;
                margin: 0;
                padding: 0 0 1.0714em 0 !important;
                display: inline-block;
                &:last-child {
                  text-align: right;
                  right: 0;
                  border-bottom: none;
                  width: 30%;
                  @media only screen and (max-device-width: 385px) {
                    width: 43%;
                  }
                }
                &:first-child {
                  width: 69%;
                  @media only screen and (max-device-width: 385px) {
                    width: 55%;
                    min-width: 55%;
                  }
                }
              }
              .grid__cell.mobile__hidden {
                display: none !important;
              }
              .grid__cell.cashback {
                width: 100% !important;
                text-align: left;
              }
            }
          }
          .no__grid {
            padding: 1.0714em 1.0714em 1.0714em !important;
            &--table {
              padding: 1.4285em !important;
            }
            h3 {
              font-size: 1.2857em;
              /* 18px */
            }
            span {
              font-size: 0.9285em;
            }
          }
        }
      }
    }
  }
</style>
