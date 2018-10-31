<template>
  <div class="box location">
    <div class="location__heading" v-if="!editable"
         :class="{'not-active': (!pickupStore || !pickupStore.id) }">
      {{ $t("app.checkout.checkoutStepTwo") }}
      <button class="location__button-edit" @click="editPickupStore()" v-if="availableToEdit">{{ $t("app.form.edit") }}</button>
    </div>
    <div v-if="editable">
      <div id="checkout-pickup_store-title" class="location__heading">
          {{ $t("app.checkout.checkoutStepTwo") }}
      </div>
      <br>
      <div class="location__form">

        <!-- PROVINCE INPUT START-->
        <div class="location__form-input location__form-input--province">
          <div class="location__form-label">{{ $t("app.checkout.pickupStore.searchProvince") }}</div>
          <input id="province_search"
                 type="text"
                 v-model="provinceSearchText"
                 :placeholder="$t('app.checkout.pickupStore.inputProvincePlaceholder')"
                 @focus="$event.target.select(),showProvinceAutocomplete()"
                 @blur="hideProvinceAutocomplete"
                 autocomplete="off"
                 @keydown.enter= "autocompleteEnter(provinceListFiltered, 'province')"
                 @keydown.down= "autocompleteDown(provinceListFiltered)"
                 @keydown.up= "autocompleteUp"
          />
          <div class="location__form-list" v-show="visibleProvinceAutocomplete && !isEmptyProvinceListFiltered">
            <ul>
              <li v-for="(item,index) in provinceListFiltered"
                  v-html="highlightText(item,provinceSearchText)"
                  @click="selectProvince(item)"
                  @mouseover="onHover(index)"
                  :class="{'active': isActive(index)}"
              >
              </li>
            </ul>
          </div>
        </div>
        <!-- PROVINCE INPUT END-->

        <!-- CITY INPUT START-->
        <div class="location__form-input location__form-input--city" :class="{'location__form-input--city-disabled': !selectedProvince}">
          <div class="location__form-label">{{ $t("app.checkout.pickupStore.searchCity") }}</div>
          <input id="city_search"
                 type="text"
                 ref = "storeSelectInput"
                 v-model="citySearchText"
                 :placeholder="$t('app.checkout.pickupStore.inputCityPlaceholder')"
                 @focus="$event.target.select(),showCityAutocomplete()"
                 @blur="hideCityAutocomplete"
                 autocomplete="off"
                 @keydown.enter= "autocompleteEnter(cityListFiltered, 'city')"
                 @keydown.down= "autocompleteDown(cityListFiltered)"
                 @keydown.up= "autocompleteUp"
                 :disabled = "!selectedProvince"
          />
          <div class="location__form-list location__form-input--province" v-show="visibleCityAutocomplete && !isEmptyCityListFiltered">
            <ul>
              <li v-for="(item,index) in cityListFiltered"
                  v-html="highlightText(item,citySearchText)"
                  @click="selectCity(item)"
                  @mouseover="onHover(index)"
                  :class="{'active': isActive(index)}"
              >
              </li>
            </ul>
          </div>
        </div>
        <!-- CITY INPUT END-->

        <div class="location__form-btn">
          <button id="checkout-pickup_store-btn_search"
            @click="doSearchStore()"
            @keydown.enter= "doSearchStore()">{{ $t("app.checkout.pickupStore.search") }}</button>
        </div>

      </div>
      <div class="error">{{inputCityAndProvinceErrorMessage}}</div>

      <!-- FREE TEXT INPUT START-->
      <div class="location__form-storeshop" v-if="visibleFreeSearchTextForm">
        <div class="location__form-storeshop-label">{{ $t("app.checkout.pickupStore.searchStoreName") }}</div>
        <input class="location__form-storeshop-input" id="store_name_search"
               type="text"
               v-model="freeSearchText"
               :placeholder="$t('app.checkout.pickupStore.inputStoreNamePlaceholder')"
               autocomplete="off"
        />
        <button class="location__form-storeshop-btn" id="store_name-btn_search"
                @click="filterStoreByText"></button>
      </div>
      <!-- FREE TEXT INPUT END-->

      <div class="location__result" v-show="!isEmptyStoreResult">
        <ul class="location__result-store">
          <li class="location__result-store-items" v-for="item in storeResult"  @click="selectStore(item)">
            <div class="box">
              <div class="location__result-store-img">
                <img src="~assets/images/store-med.png" />
              </div>
              <div class="location__result-store-info">
                <div class="location__result-store-name">{{item.name}}</div>
                <div class="location__result-store-desc">{{item.description}}</div>
                <div class="location__result-store-addr">{{item.address}}, {{item.city}}, {{item.province}}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-show="isEmptyStoreResult && searchClicked">
        <ul>
          <li class="store-not-found">
            <img src="~assets/images/storenotfound.png" alt="store not found"/>
            <div>{{ $t("app.checkout.pickupStore.emptyResult") }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="pickupStore && pickupStore.id && !editable">
      <div class="table">
        <div class="location__result-store-img non-editable">
          <img class="location__result-store-img" src="~assets/images/store-med.png" />
        </div>
        <div class="location__result-store-info non-editable-info">
          <div class="location__result-store-name">{{pickupStore.name}}</div>
          <div class="location__result-store-addr">{{pickupStore.address}}, {{pickupStore.city}}, {{pickupStore.province}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/store-selection.js"></script>
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
.clearfix {
  *zoom: 1;
  &:before,&:after {display: table;content: ' ';}
  &:after {clear: both;}
}
.disabled{cursor: not-allowed}
.error {
  margin-top: 5px;
  color: #F8011E;
}
.table {
  display: table;
  margin-top: 30px;
  &-cell {
    display: table-cell;
  }
}
.not-active{
  opacity: 0.5;
}
.non-editable img {
  width: 45px !important;
}
.non-editable-info {
  padding-left: 20px;
}
.store-not-found {
  text-align: center;
  padding: 50px 0px;
  img {
    margin-bottom: 20px;
  }
  div {
    font-size: 16px;
    padding: 0px 10%;
    color: #333;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
}
.location {
  position: relative;
  padding: 22px;
  &__button-edit {
    background-color: transparent;
    border: none;
    font-size: 14px;
    text-decoration: underline;
    float: right;
    cursor: pointer;
    padding: 0; /*fix for safari iphone 5*/
  }
  &__heading {
    font-size: 22px;
    color: #1c1e23;
  }
  &__form {
    margin-top: 20px;
    &-input input, &-btn button {
      border-radius: 6px;
      width: 100%;
    }
    &-list  { width: 38%; }
    &-label  { margin-bottom: 5px; }
    &-input {
      width: 36%;
      margin-right: 1%;
      input {
        display: block;
        position: relative;
        height: 50px;
        padding-left: 3%;
        background-color: #ffffff;
        border: solid 1px #e7e8ea;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      &--city {
        &-disabled {
           color: rgba(0, 0, 0, 0.3);
           input {
             background-color: #f8f9fa;
             cursor: not-allowed;
           }
         }
       }
    }
    &-btn {
      margin-right: -2px;
      width: 24%;
      button {
        height: 50px;
        padding: 0 1.0714em;
        font-size: 16px;
        color: #fff;
        background-color: #0072c5;
        border: none;
        line-height: 0;
        cursor: pointer;
      }
    }
    &-input, &-btn {
      display: inline-block;
      vertical-align: bottom;
    }
    &-list {
      position: absolute;
      z-index: 9;
      ul {
        max-height: 200px;
        overflow-y: auto;
        margin-right: 31px;
        background-color: #fff;
        box-shadow: 0 6px 12px 0 rgba(32, 33, 39, 0.08);
      }
      li {
        padding: 1.0714em;
        padding-left: 3%;
        border-bottom: solid 1px #e0e0e0;
        .active { background-color: #a1e1ff; }
        &.active { background: #a1e1ff; }
        span {
          color: #0b5cb8; font-weight:bold;
        }
      }
    }
    &-storeshop {
      text-align: center;
      margin-top: 40px;
      margin-bottom: 10px;
      &-label {
        font-weight: bold;
        margin-bottom: 10px;
      }
      &-input {
        width: 425px;
        height: 40px;
        margin: 0 auto;
        border-radius: 2px;
        border: solid 1px #cccccc;
        padding-left: 10px;
        padding-right: 50px;
      }
      &-btn {
        width: 40px;
        height: 38px;
        border: none;
        margin-left: -44px;
        cursor: pointer;
        background: #ccc url(~assets/images/icon-search.png) right center no-repeat;
      }
      &-input, &-btn {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  &__result {
    max-height: 400px;
    overflow-y: auto;
    &-store {
      margin-top: 20px;
      &-items {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        list-style: none;
        display: inline-block;
        width: 50%;
        vertical-align: top;
        .box {
          padding: 5%;
          margin-top: 10px;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0 6px 12px 0 rgba(32, 33, 39, 0);
          border: solid 1px #fff;
          display: table;
          width: 100%;
          &:hover {
            box-shadow: 0 6px 12px 0 rgba(32, 33, 39, 0.08);
            border-color: #efefef;
            cursor: pointer;
          }
        }
      }
      &-img, &-info {
        display: table-cell;
        vertical-align: top;
      }
      &-info { line-height: 1.4em;}
      &-img {
        width: 40px;
      }
      &-img img {
        width: 24px;
      }
      &-name {
        font-size: 14px;
        font-weight: bold;
      }
      &-addr { color: #676c75; }
    }
  }
}
@media only screen and (max-width: 768px) {
  .location {
    &__heading {
      font-size: 16px;
    }
    &__form {
      &-input {
        width: 100%;
        margin-right: -2px;
        &--province {
          margin-bottom: 20px;
        }
      }
      &-list  { width: 100%; }
      &-input input, &-btn button {
        border-radius: 4px;
        font-size: 12px;
        height: 35px;
      }
      &-btn {
        float: none;
        width: 100%;
        margin-top: 20px;
        display: block;
        button { font-weight: bold; }
      }
      &-label {
        font-size: 12px;
        color: #333333;
      }
      &-storeshop {
        &-input {
          width: 98%;
        }
      }
    }
    &__result {
      &-store {
        display: block;
        &-items {
          display: block;
          width: 100%;
          .box, .box:hover {
            border-radius: 2px;
            box-shadow: 0 1px 3px 0 rgba(32, 33, 39, 0.12);
            border: solid 1px #ececec;
          }
        }
        &-img, &-info {
          display: table-cell;
          vertical-align: middle;
        }
        &-img {
          width: 45px;
          opacity: 0.5;
        }
      }
    }
  }
}

@media only screen and (max-width: 320px) {
  .location__heading {
    font-size: 14px;
  }
}
.location__form-list /deep/ span {
  color: #0b5cb8; font-weight:bold;
}
</style>
