<template>
  <div class="backdoor">
    <div class="backdoor__wrapper">
      <div class="backdoor__content-btn">
        <button class="btn__update" @click="getDashboardData">
          <img src="~assets/images/refresh-arrow.png"/><span>{{$t('app.backdoor.update')}}</span>
        </button>
      </div>

      <div class="backdoor__content">
        <p> {{$t('app.backdoor.dateTime')}} <strong> {{ getCurrentDateTime() }} </strong> </p>
        <p> {{$t('app.backdoor.grandTotal')}} <strong> {{ grandTotalSold }} </strong> </p>
        <table class="table" width="100%">
          <thead class="table__header">
            <tr>
              <th></th>
              <th colspan="2" v-for="item in customers">{{ item.label }}</th>
            </tr>
            <tr>
              <th>{{$t('app.backdoor.preorderResult')}}</th>
              <template v-for="i in customers">
                <th v-for="item in phones">{{ item.label }}</th>
              </template>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr v-for="row in soldOrdersGrouped">
              <td>{{ row.orderDate | date}}</td>
              <template v-for="c in customers">
                <td v-for="p in phones">{{ row[c.type][p.type]}}</td>
              </template>
            </tr>
            <tr>
              <td>{{$t('app.backdoor.subTotal')}}</td>
              <template v-for="c in customers">
                <td v-for="p in phones">{{ subTotalSold[c.type][p.type]}}</td>
              </template>
            </tr>
            <tr>
              <td>{{$t('app.backdoor.total')}}</td>
              <template v-for="c in customers">
                <td colspan=2>{{ totalSold[c.type]}}</td>
              </template>
            </tr>
          </tbody>
        </table>
        <hr>
        <table class="table" width="100%">
          <thead class="table__header">
            <tr>
              <th></th>
              <th v-for="item in customers">{{ item.label }}</th>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr v-for="p in phoneStorages">
              <td>{{$t('app.backdoor.total')}} {{ p.label }}</td>
              <template v-for="c in customers">
                <td>{{ totalSoldPerStorage[c.type][p.type]}}</td>
              </template>
            </tr>
            <tr>
              <td>{{$t('app.backdoor.total')}} {{phones.map(i => i.label).join(' | ')}}</td>
              <template v-for="c in customers">
                <td>{{ totalSold[c.type]}}</td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>

      <br>
      <button class="btn__update" @click="detailIsHidden = !detailIsHidden">VIEW DETAILS</button>
      <button class="btn__update" @click="processSheet">Download excel</button>
      <br>
      <div v-show="!detailIsHidden" class="details">
        <p> {{$t('app.backdoor.allocateCashback')}} {{ dashboardCashbackDeposit | currencyFormat }}</p>
        <div class="details__row">
          <div class="details__column">
            <table class="table">
              <thead class="table__header">
                <tr>
                  <th>{{$t('app.backdoor.preorderResult')}}</th>
                  <th v-for="c in phones">{{ c.label }}</th>
                  <th>{{$t('app.backdoor.total')}} {{ phones.map(i => i.label).join(' | ') }} </th>
                </tr>
              </thead>
              <tbody class="table__body">
                <tr v-for="item in soldOrdersGroupedByPhoneType">
                  <td>{{ item.orderDate | date }}</td>
                  <td v-for="c in phones">{{ item[c.type] }}</td>
                  <td>{{ item.total }}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td v-for="phone in phones">{{ totalSoldOrdersGroupedByPhoneType[phone.type] }}</td>
                  <td>{{ totalSoldOrdersGroupedByPhoneType.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="details__column">
           <table class="table" width="100%">
            <thead class="table__header">
              <tr>
                <th></th>
                <th colspan="2" v-for="item in customers">{{ item.label }}</th>
              </tr>
              <tr>
                <th>{{$t('app.backdoor.preorderResult')}}</th>
                <template v-for="i in customers">
                  <th v-for="item in phones">{{ item.label }}</th>
                </template>
              </tr>
            </thead>
            <tbody class="table__body">
              <tr v-for="row in soldOrdersGrouped">
                <td>{{ row.orderDate | date}}</td>
                <template v-for="c in customers">
                  <td v-for="p in phones">{{ row[c.type][p.type]}}</td>
                </template>
              </tr>
              <tr>
                <td>{{$t('app.backdoor.subTotal')}}</td>
                <template v-for="c in customers">
                  <td v-for="p in phones">{{ subTotalSold[c.type][p.type]}}</td>
                </template>
              </tr>
              <tr>
                <td>{{$t('app.backdoor.total')}}</td>
                <template v-for="c in customers">
                  <td colspan=2>{{ totalSold[c.type]}}</td>
                </template>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div class="details__row">
          <div class="details__column">
            <table class="table">
              <thead class="table__header">
                <tr>
                  <th>{{$t('app.backdoor.remainingStock')}}</th>
                  <th v-for="item in customers">{{ item.label }}</th>
                </tr>
              </thead>
              <tbody class="table__body">
                <tr v-for="p in phoneVariants">
                  <td>{{p.label}}</td>
                  <td v-for="c in customers">{{ stockPerVariant[c.type][p.spec].stock }}</td>
                </tr>
                <tr>
                  <td>{{$t('app.backdoor.total')}}</td>
                  <template v-for="c in customers">
                    <td>{{totalStockPerCust[c.type]}}</td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="details__row" v-for="c in customers">
          <table class="table">
            <thead class="table__header">
              <tr>
                <th>{{$t('app.backdoor.remainingStock')}} ({{ c.label }})</th>
                <th>{{$t('app.backdoor.allocation')}}</th>
                <th>{{$t('app.backdoor.sellOut')}}</th>
                <th>{{$t('app.backdoor.pendingPayment')}}</th>
                <th>{{$t('app.backdoor.availableStock')}}</th>
              </tr>
            </thead>
            <tbody class="table__body">
              <tr v-for="v in phoneVariants">
                <td>{{ v.label }}</td>
                <td>{{ stockPerVariant[c.type][v.spec].initialStock }}</td>
                <td>{{ stockPerVariant[c.type][v.spec].soldQty }}</td>
                <td>
                  {{
                    stockPerVariant[c.type][v.spec].initialStock -
                    stockPerVariant[c.type][v.spec].stock -
                    stockPerVariant[c.type][v.spec].soldQty
                  }}
                </td>
                <td>{{ stockPerVariant[c.type][v.spec].stock }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="details__row">

          <div class="details__column">
            <table class="table">
              <thead class="table__header">
                <tr>
                  <th>{{$t('app.backdoor.remainingGimmick')}}</th>
                  <th>{{$t('app.backdoor.allocation')}}</th>
                  <th>{{$t('app.backdoor.sellOut')}}</th>
                  <th>{{$t('app.backdoor.pendingPayment')}}</th>
                  <th>{{$t('app.backdoor.availableStock')}}</th>
                </tr>
              </thead>
              <tbody class="table__body">
                <tr v-for="item in gimmickStock">
                  <td >{{ item.detail.name }}</td>
                  <td>{{ item.initialStock }}</td>
                  <td>{{ item.soldQty }}</td>
                  <td>{{ item.used - item.soldQty }}</td>
                  <td>{{ item.stock }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="details__row" v-for="customer in customers">
          <table class="table">
            <thead class="table__header">
              <tr>
                <th>{{$t('app.backdoor.promotions.bankCashback')}} ({{ customer.label }})</th>
                <th>{{$t('app.backdoor.promotions.allocation')}}</th>
                <th>{{$t('app.backdoor.promotions.additional')}}</th>
                <th>{{$t('app.backdoor.promotions.totalAllocation')}}</th>
                <th>{{$t('app.backdoor.promotions.pendingPayment')}}</th>
                <th>{{$t('app.backdoor.promotions.sellOut')}}</th>
                <th>{{$t('app.backdoor.promotions.available')}}</th>
              </tr>
            </thead>
            <tbody class="table__body">
              <tr v-for="data in adjustmentDataPerCustomer[customer.type]">
                <td>{{ data.detail.name }}</td>
                <td>{{ data.allocation }}</td>
                <td>{{ data.additional }}</td>
                <td>{{ data.totalAllocation }}</td>
                <td>{{ data.used - data.redeem }}</td>
                <td>{{ data.redeem }}</td>
                <td>{{ data.available }}</td>
              </tr>
              <tr>
                <td>{{$t('app.backdoor.total')}}</td>
                <td>{{ adjustmentsTotalPerCustomer[customer.type].allocation }}</td>
                <td>{{ adjustmentsTotalPerCustomer[customer.type].additional }}</td>
                <td>{{ adjustmentsTotalPerCustomer[customer.type].totalAllocation }}</td>
                <td>{{ adjustmentsTotalPerCustomer[customer.type].used - adjustmentsTotalPerCustomer[customer.type].redeem }}</td>
                <td>{{ adjustmentsTotalPerCustomer[customer.type].redeem }}</td>
                <td>{{ adjustmentsTotalPerCustomer[customer.type].available }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="details__row">
          <div class="details__column">
            <table class="table">
                <thead class="table__header">
                  <tr>
                    <th>{{$t('app.backdoor.promotions.bankCashback')}}</th>
                    <th>{{$t('app.backdoor.promotions.allocation')}}</th>
                    <th>{{$t('app.backdoor.promotions.additional')}}</th>
                    <th>{{$t('app.backdoor.promotions.totalAllocation')}}</th>
                    <th>{{$t('app.backdoor.promotions.pendingPayment')}}</th>
                    <th>{{$t('app.backdoor.promotions.sellOut')}}</th>
                    <th>{{$t('app.backdoor.promotions.available')}}</th>
                  </tr>
                </thead>
                <tbody class="table__body">
                  <tr v-for="(item, key) in adjustmentDataPerBank">
                    <td>{{ key }}</td>
                    <td>{{ item.allocation }}</td>
                    <td>{{ item.additional }}</td>
                    <td>{{ item.totalAllocation }}</td>
                    <td>{{ item.used - item.redeem }}</td>
                    <td>{{ item.redeem }}</td>
                    <td>{{ item.available }}</td>
                  </tr>
                  <tr>
                    <td>{{$t('app.backdoor.total')}}</td>
                    <td>{{ adjustmentsTotal.allocation }}</td>
                    <td>{{ adjustmentsTotal.additional }}</td>
                    <td>{{ adjustmentsTotal.totalAllocation }}</td>
                    <td>{{ adjustmentsTotal.used - adjustmentsTotal.redeem }}</td>
                    <td>{{ adjustmentsTotal.redeem }}</td>
                    <td>{{ adjustmentsTotal.available }}</td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/backdoor-dashboard.js"></script>

<style lang="scss" scoped>
@import "default/src/assets/css/sass/mixins/_responsive.scss";
::-webkit-input-placeholder {
  color: #b9bdc3;
  text-align: center
}
::-moz-placeholder {
  color: #b9bdc3;
  text-align: center
}
:-ms-input-placeholder {
  color: #b9bdc3;
  text-align: center
}
:-moz-placeholder {
  color: #b9bdc3;
  text-align: center
}
.backdoor{
  background-color: #fff;
  padding: 100px 0 100px;
  line-height: 2;

  @media (min-width: 960px) {
    background-color: #f8f9fa;
  }

  &__icon{
    @media (min-width: 960px) {
      background-color: #fff;
      padding: 20px 10px 10px;
      width: 100px;
      border-radius: 12px;
      margin: auto;
      position: relative;
      margin-bottom: -40px;
    }
  }
  &__wrapper{
    @media (min-width: 960px) {
      width: 100%;
      max-width: 83.571em;
      padding: 30px;
      margin: auto;
      border-radius: 12px;
      background-color: #ffffff;
      box-shadow: 0 6px 12px 0 rgba(32, 33, 39, 0.08);
    }
    @include mobile() {
      padding: 1rem;
      font-size: 10px;
    }
  }
  &__form {
    &-input {
      border-radius: 4px;
      border: solid 1px #d4d4d4;
      padding: 10px;
      display: block;
      width: 60%;
      margin: 0 auto;
      box-sizing: border-box;
      font-size: 14px;
      text-align: center;
      margin-bottom: 40px;
    }
  }
  &__content{
    &-image {
      margin: 50px 0px 40px;
    }
    &-title {
      font-size: 20px;
      text-align: center;
      color: #1c1e23;
      margin-bottom: 40px;
      padding: 0px 15px;
      line-height: normal;
    }
    &-btn {
      text-align: center;
      margin-top: 15px;
    }
  }
}

.details {
  table {
    width: 100%;
  }
  &__row {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 4rem;
    @include mobile() {
      flex-direction: column;
    }
  }

  &__column {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include mobile() {
      margin-bottom: 1rem;
    }
  }
}

.table {
  thead {
    background: gray;
    color: white;
  }
  &__header {
    tr {
      td:first-child {
        text-align: center;
        width: 35%;
      }
    }
    td {
      border-bottom: 1px solid #ddd;
      font-weight: bold;
      padding: 5px 10px;
      text-align: center;
    }
  }

  &__body {
    tr {
      td:first-child {
        text-align: left;
        width: 35%;
      }
    }
    tr:nth-child(odd) {
      background-color: #eee;
    }
    td {
      padding: 4px 8px;
      text-align: center;
    }
  }
}

.btn {
  &__update {
    outline: 0;
    padding: 12px 40px;
    border-radius: 6px;
    border: 1px solid #0072c5;
    background-color: #0072c5;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    margin: 5px;
    margin-bottom: 1rem;
    img {
      width: 20px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 15px;
    }
    span {
      display: inline-block;
      vertical-align: middle;
    }
    &:hover{
      background-color: #004b82;
    }
  }
}
</style>
