<template>
  <div class="checkout shipping-address">
    <div class="checkout__form-row">
      <label class="checkout__form-label">{{ $t("app.form.fields.inputAddress") }}</label>
      <textarea id="checkout-user_info-address" class="checkout__form-input address"
                name="shipping-address" :placeholder="$t('app.form.placeholder.address')"
                v-model="userAddress.address"
                @blur="validateAddress"
                @keyup="validateAddress"></textarea>
      <div class="checkout__form-error" v-for="item in validationResults['address']">
        {{ getFieldErrorMessage(item.error, 'address') }}
      </div>
    </div>

    <div class="checkout__form-row flex">
      <!-- PROVINCE-->
      <div class="checkout__form-col location-input">
        <label class="checkout__form-label">{{ $t("app.form.fields.province") }}*</label>
        <input id="checkout-user_info-province" class="checkout__form-input checkout__form-input-province"
               :placeholder="$t('app.form.placeholder.province')" type="text" autocomplete="nope"
               v-model="provinceSearchText"
               @focus="$event.target.select(),showProvinces()"
               @blur="hideProvinces">
        <span class="arrow-down"></span><span class="search-province"></span>
        <div class="location-list" v-if="visibleProvinces">
          <ul>
            <li class="list__items"
                v-for="item in filteredProvinces"
                @click="selectProvince(item)">{{ item.name }}</li>
            <li class="list__items loading" v-if="!provinces.length">
              <div class="loading-bar"></div><label>Loading...</label>
            </li>
          </ul>
        </div>
      </div>
      <!-- CITY-->
      <div class="checkout__form-col location-input">
        <label class="checkout__form-label">{{ $t("app.form.fields.city") }}*</label>
        <input id="checkout-user_info-city" ref="citySelect"  autocomplete="off" class="checkout__form-input"
               :class="{'checkout__form-input--disabled': !userAddress.state}"
               :placeholder="$t('app.form.placeholder.city')"
               type="text" readonly
               v-model="userAddress.city"
               @focus="visibleCities = true"
               @blur="hideCities"
               :disabled = "!userAddress.state"><span class="arrow-down"></span>
        <div class="location-list" v-if="visibleCities">
          <ul>
            <li class="list__items"
                v-for="item in cities"
                @click="selectCity(item)">{{ item.name }}</li>
            <li class="list__items loading" v-if="!cities.length">
              <div class="loading-bar"></div><label>Loading...</label>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="checkout__form-row flex">
      <!-- DISTRICT-->
      <div class="checkout__form-col location-input">
        <label class="checkout__form-label">{{ $t("app.form.fields.district") }}*</label>
        <input id="checkout-user_info-district" ref="districtSelect" autocomplete="off" class="checkout__form-input"
               :class="{'checkout__form-input--disabled': !userAddress.city}"
               :placeholder="$t('app.form.placeholder.district')"
               type="text" readonly
               v-model="userAddress.district"
               @focus="visibleDistricts = true"
               @blur="hideDistricts"
               :disabled = "!userAddress.city"><span class="arrow-down"></span>
        <div class="location-list" v-if="visibleDistricts">
          <ul>
            <li class="list__items"
                v-for="item in districts"
                @click="selectDistrict(item)">{{ item.name }}</li>
            <li class="list__items loading" v-if="!districts.length">
              <div class="loading-bar"></div><label>Loading...</label>
            </li>
          </ul>
        </div>
      </div>
      <!-- SUB DISTRICT-->
      <div class="checkout__form-col location-input">
        <label class="checkout__form-label">{{ $t("app.form.fields.subdistrict") }}*</label>
        <input id="checkout-user_info-subdistrict" ref="subdistrictSelect" autocomplete="off" class="checkout__form-input"
               :class="{'checkout__form-input--disabled': !userAddress.city}"
               :placeholder="$t('app.form.placeholder.subdistrict')"
               type="text" readonly
               v-model="userAddress.subDistrict"
               @focus="visibleSubdistricts = true"
               @blur="hideSubdistricts"
               :disabled = "!userAddress.district"><span class="arrow-down"></span>
        <div class="location-list" v-if="visibleSubdistricts">
          <ul>
            <li class="list__items"
                v-for="item in subdistricts"
                @click="selectSubdistrict(item)">{{ item.name }}</li>
            <li class="list__items loading" v-if="!subdistricts.length">
              <div class="loading-bar"></div><label>Loading...</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/shipping-address.js"></script>
<style lang="scss" scoped>
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
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .checkout .shipping-address {
    padding: 0 !important;
  }
  .checkout {
    background-color: #fff;
    color: #333;
    margin-bottom: 20px;
    line-height: 16px;
    &__notes {
       font-size: 12px;
       padding: 20px;
       background-color: #fffec3;
       color: #333;
       margin-bottom: 20px;
       line-height: 16px;
    }
    &__form {
       margin-bottom: 20px;
       display: block;

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
        &:last-child {
           padding-right: 0;
           .location-list {
             padding-right: 0;
           }
           .arrow-down:before{
             right: 10px;
           }
         }
      }
      &-label {
         display: block;
         font-size: 12px;
         margin-bottom: 8px;
       }
      &-input{
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
           &~ span.arrow-down{
             opacity: 0.5;
           }
         }
         &.address {
           height: 100px;
         }
      }
      &-error {
         font-size: 13px;
         color: #ff0000;
         margin-top: 5px;
       }
    }
    .location-input {
      position: relative;
    }
  }

  textarea[name=shipping-address] {
    resize: none;
  }

  .location-list{
    width: 100%;
    padding-right: 20px;
    position: absolute;
    z-index: 9;
    ul {
      padding: 10px;
      max-height: 200px;
      overflow-y: auto;
      background-color: #fff;
      box-shadow: 0 6px 12px 0 rgba(32, 33, 39, 0.08);
    }
    li {
      padding: 10px;
      padding-left: 3%;
      .active { background-color: #a1e1ff; }
      &.active { background: #a1e1ff; }
      span {
        color: #0b5cb8; font-weight:bold;
        position: absolute;
      }
    }
    .list{
      &__items{
        cursor: pointer;
       }
    }
    .loading{
      display: flex;
      cursor: progress;
      .loading-bar {
        border: 3px solid #f3f3f3;
        border-radius: 50%;
        border-top: 3px solid #d8d8d8;
        width: 24px;
        height: 24px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
        margin-right: 10px;
      }
      label{
        align-self: center;
      }
    }
  }
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .arrow-down:before{
    content:'\25bc';
    right: 30px;
    position: absolute;
    top: 35px;
  }

  .search-province:after{
    content: '';
    background: none;
    left: 10px;
    position: absolute;
    top: 33px;
  }

  input.checkout__form-input:focus ~ span.arrow-down:before {
    transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -webkit-transition: all .3s;
    transition: all .3s;
  }

  input.checkout__form-input-province:focus ~ span.arrow-down:before{
    content: ''
  }
  input.checkout__form-input-province:focus ~ span.search-province:after{
    background: url(~assets/images/icon-search-gray.png) center center no-repeat;
    background-size:80%;
    width: 20px;
    height: 20px;
  }
  input.checkout__form-input-province:focus{
    padding-left: 40px;
  }

  @media only screen and (max-width:568px) {
    .checkout {
      &__form-row {
        &.flex {
           display: block;
          .checkout__form-col {
            margin-bottom: 20px;
            padding-right: 0;
            .arrow-down:before{
              right: 10px;
            }
          }
        }
      }
    &__step {
       font-size: 16px;
     }
    }
    .location-list{
      padding-right: 0px;
    }
  }
</style>
