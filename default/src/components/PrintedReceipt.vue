<template><div>
  <table v-if="order.orderId" align="center" border="0" cellpadding="10" cellspacing="0" width="100%" id="bodyTable" style="font-family: arial, Helvetica, sans-serif;color: #000;">
    <tr>
      <td align="center" valign="top" id="bodyCell" bgcolor="#ebebeb">
          <table width="640" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth">
            <tr>
               <td valign="middle" bgcolor="#ffffff">
                  <table align="left" width="50%" border="0" cellpadding="0" cellspacing="0">
                     <tr>
                        <td>
                           <img class="deviceImg"  align="none" src="~assets/images/samsung-black.jpg" height="20">
                        </td>
                     </tr>
                  </table>
                  <table align="right" width="50%" border="0" cellpadding="0" cellspacing="0">
                     <tr>
                        <td valign="middle">
                           <table align="right" border="0" cellpadding="0" cellspacing="0" width="75%">
                              <tbody>
                                 <tr>
                                    <td valign="middle">
                                       <table align="right" border="0" cellpadding="0" cellspacing="0" width="100%">
                                          <tbody>
                                             <tr>
                                                <td valign="middle" align="right"><img  class="deviceImg" valign="middle" src="~assets/images/logo-blibli.png" height="20"></td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </td>
                                 </tr>
                               </tbody>
                           </table>
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
          </table>
          <table width="640" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth">
            <tr>
               <td valign="middle" bgcolor="#ffffff">
                  <table align="left" width="100%" border="0" cellpadding="5" cellspacing="0" class="deviceWidth">
                     <tr>
                        <td align="left" valign="middle" bgcolor="#ffffff" style="color: #000;font-size:14px;">
                          <center><img src="~assets/images/galaxy-note-9.jpg" width="100%" style="margin:10px 0px;"></center>
                          <strong>Dear {{orderCustomerDetail.name}},</strong><br><br>
                          {{$t('app.order.greeting')}}<br>
                          {{$t('app.order.infoText1')}}<br>
                          {{$t('app.order.infoText2')}}
                        </td>
                     </tr>
                     <tr><td><hr></td></tr>
                     <tr>
                        <td align="right" valign="middle" bgcolor="#ffffff" style="color: #000;font-size:14px;">
                           {{$t('app.order.orderId')}} : {{order.orderId}}
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
          </table>
          <table width="640" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth">
            <tr>
               <td valign="top" bgcolor="#ffffff">
                  <table align="left" width="100%" border="0" cellpadding="5" cellspacing="0" class="deviceWidth">
                     <tr>
                        <td valign="top" align="right">
                           <table align="right" border="0" cellpadding="1" cellspacing="0" width="100%">
                              <tbody style="vertical-align: top">
                                 <tr>
                                    <td style="color: #000;font-size:14px;" width="30%">{{$t('app.order.number')}}{{orderCustomerDetail.identityType}}</td>
                                    <td style="color: #000;font-size:14px;">{{orderCustomerDetail.identityNumber}}</td>
                                 </tr>
                                 <tr>
                                    <td style="color: #000;font-size:14px;">{{$t('app.order.name')}}</td>
                                    <td style="color: #000;font-size:14px;">{{orderCustomerDetail.name}}</td>
                                 </tr>
                                 <tr>
                                    <td style="color: #000;font-size:14px;">{{$t('app.order.email')}}</td>
                                    <td style="color: #000;font-size:14px;">{{orderCustomerDetail.email}}</td>
                                 </tr>
                                 <tr>
                                   <td style="color: #000;font-size:14px;">{{$t('app.order.address')}}</td>
                                   <td style="color: #000;font-size:14px;word-break: break-word;">{{orderShippingAddress.address}}, {{orderShippingAddress.subdistrict}}, {{orderShippingAddress.district}}
                                     {{orderShippingAddress.city}}, {{orderShippingAddress.province}}, {{$t('app.form.fields.postalCode')}}
                                     {{orderShippingAddress.postalCode}}</td>
                                 </tr>
                                 <tr>
                                    <td style="color: #000;font-size:14px;">{{$t('app.order.store')}}</td>
                                    <td style="color: #000;font-size:14px;">{{orderPickupStore.name}}</td>
                                 </tr>
                                 <tr>
                                    <td style="color: #000;font-size:14px;">{{$t('app.order.storeAddress')}}</td>
                                    <td style="color: #000;font-size:14px;">{{orderPickupStore.address}}, {{orderPickupStore.city}}, {{orderPickupStore.province}}</td>
                                 </tr>
                                 <tr>
                                   <td style="color: #000;font-size:14px;">{{$t('app.order.storePhone')}}</td>
                                   <td style="color: #000;font-size:14px;">{{orderPickupStore.phoneNumber}}</td>
                                 </tr>
                                 <tr>
                                    <td style="color: #000;font-size:14px;">{{$t('app.order.paymentMethod')}}</td>
                                    <td style="color: #000;font-size:14px;">
                                      {{order.payment.description}} -
                                      <span v-if="order.payment.installment">
                                        {{$t('app.order.tenor', {num: order.payment.installment})}} - {{installment}}/{{$t('app.order.month')}}
                                      </span>
                                      <span v-if="!order.payment.installment">{{$t('app.order.fullPayment')}}</span>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </td>
                     </tr>
                     <tr><td><hr></td></tr>
                  </table>
               </td>
            </tr>
          </table>
          <table width="640" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth">
            <tr>
              <td valign="top" bgcolor="#ffffff">
                <table align="left" width="100%" border="0" cellpadding="5" cellspacing="0" class="deviceWidth">
                  <tr>
                    <td valign="top" align="right">
                      <table align="right" border="0" cellpadding="5" cellspacing="0" width="100%">
                        <th align="left" style="padding-bottom: 10px;">
                          Order
                        </th>
                        <tbody style="vertical-align: top">
                          <tr v-for="item in order.items" style="font-size:14px;">
                            <td style="width: 60%;">{{item.fullName}}</td>
                            <td v-if="item.price > 0">{{item.price | currencyFormat}}</td>
                            <td v-else>{{$t('app.order.preOrderGiftText')}}</td>
                          </tr>
                          <tr v-if="order.adjustments.length > 0" v-for="(adjustment, index) in order.adjustments" style="font-size:14px;">
                            <div v-if="adjustment.amount !== 0">
                              <div v-if="!adjustment.promoCode">
                                <td>{{$t('app.order.cashback')}} {{order.payment.bankName}}</td>
                                <td>- {{Math.abs(adjustment.amount) | currencyFormat}} <span v-if="isShownStar[index]">*</span></td>
                              </div>
                              <div v-else>
                                <td>{{$t('app.order.discountSGI')}}</td>
                                <td>- {{Math.abs(adjustment.amount) | currencyFormat}}</td>
                              </div>
                            </div>
                          </tr>
                          <tr style="font-weight:bold;font-size:14px;">
                            <td style="padding-top: 15px;">{{$t('app.order.total')}}</td>
                            <td style="padding-top: 15px;">{{order.paidAmount | currencyFormat}}</td>
                          </tr>
                        </tbody>
                      </table>
                      <table align="right" border="0" cellpadding="2" cellspacing="0" width="100%" v-if="visibleCashbackText">
                        <tr style="font-size:14px;">
                          <td style="padding-left:10px;padding-top: 10px;">{{$t('app.order.youllGetCashback', {value: cashbackValue, bank: order.payment.bankName })}}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table width="640" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin-top:20px">
            <tr>
               <td valign="middle" bgcolor="#ffffff" style="font-size: 10px">
                 <div style="padding-left:0px" v-html="receiptTncContent"></div>
               </td>
            </tr>
          </table>
          <table width="640" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin-top:5px">
            <tr>
              <td valign="left" bgcolor="#ffffff" style="font-size: 16px">
                {{$t('app.order.customerCare')}}
              </td>
            </tr>
            <tr>
              <td valign="left" bgcolor="#ffffff" style="font-size: 14px">
                {{$t('app.order.customerCarePhoneNumber')}} |
                <span style="color: #0096d9">{{$t('app.order.customerCareEmail')}}</span>
              </td>
            </tr>
          </table>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
import {OrderDetail} from 'mixins/OrderDetail'
export default {
  name: 'printed-receipt',
  mixins: [OrderDetail]
}
</script>
