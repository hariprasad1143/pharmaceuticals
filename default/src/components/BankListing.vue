<template>
  <div class="content-inner-section">
    <div class="wrapper">
      <ul class="bank box">
        <li class="bank__items" v-for="(item, index) in promotionsSorted" v-if="item.active" :key="'bank-'+index">
          <span :class="'logo logo-'+item.bank" v-bind:style="{ 'background-image': 'url(' + item.logo + ')' }"></span>
        </li>
      </ul>
      <a class="tnc" @click="openTncModal()">{{ $t("app.tnc.captionHome") }}</a>
    </div>
    <tnc-modal
      v-if="visibleTnc"
      @onClose="onCloseTncModal">
    </tnc-modal>
  </div>
</template>

<script src="./js/bank-listing.js"></script>
<style lang="scss" scoped>
.content-inner-section {
  background-color: #fff;
}
.wrapper {
  margin: 0 auto;
  padding: 0 1.0714em;
  max-width: 83.571em; /* body font base 14px width equal to 1170px */
  padding-bottom: 100px;
}
.bank {
  padding: 20px 140px;
  margin: 0;
  text-align: center;
	&__items {
		list-style: none;
		width: 98px;
		display: inline-table;
		text-align: center;
		vertical-align: middle;
	}
	.logo {
		width: 130px;
		height: 70px;
		display: inline-block;
		background-position: center center;
		background-repeat: no-repeat;
    &-Mandiri  { background-size: 120px;   width: 160px; }
    &-BNI           { background-size: 85px;    width: 125px; }
    &-CIMB          { background-size: 130px;   width: 170px; }
    &-BCA           { background-size: 85px;    width: 125px; }
    &-BRI           { background-size: 110px;   width: 150px; }
    &-Permata       { background-size: 120px;   width: 160px; }
    &-HSBC          { background-size: 100px;   width: 140px; }
    &-Standard      { background-size: 90px;    width: 130px; }
    &-Citibank      { background-size: 50px;    width: 90px;  }
    &-Panin         { background-size: 130px;   width: 170px; }
    &-MNC           { background-size: 130px;   width: 170px; }
    &-Mega          { background-size: 60px;    width: 100px; }
    &-Bukopin       { background-size: 130px;   width: 170px; }
    &-OCBC          { background-size: 130px;   width: 170px; }
    &-Maybank       { background-size: 120px;   width: 160px; }
    &-Danamon       { background-size: 120px;   width: 160px; }
	}
}

a.tnc {
  float: right;
  margin: 5px 0;
  font-weight: bold;
  cursor: pointer;
  color: #1428A0;
  &:hover {
    color: #061048;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper {padding-bottom: 50px;}
  .bank {
    margin-bottom: 10px;
    padding: 0;
    .logo {
      zoom: 85%;
    }
  }
}
@media only screen and (max-width: 320px) {
  .bank .logo {zoom: 60%;}
}
</style>
