<template>
    <footer class="footer">
      <div class="row">
          <span class="footer__left">{{$t('footer.copyright')}}
            <a target="_blank" href="https://www.blibli.com/home">Blibli.com</a>
            <span class="tnc"><a target="_blank" href="https://www.blibli.com/faq/tentang-blibli/syarat-ketentuan?appsWebview=true">{{ $t('footer.tnc') }}</a> | <a target="_blank" href="https://www.blibli.com/faq/tentang-blibli/kebijakan-privasi?appsWebview=true">{{ $t('footer.privacy') }}</a></span></span>
          <span class="footer__right">
            <span>{{ $t('footer.titleContact') }} <strong class="footer__contact">{{ $t('footer.contact') }}</strong></span>
          </span>
        <div style="clear:both"></div>
      </div>
    </footer>
</template>

<script src="./js/foot-section.js"></script>

<style lang="scss" scoped>
@import "default/src/assets/css/sass/mixins/_responsive.scss";
.footer{
   height: 52px;
   background-color: #fff;
	 border-top: solid 1px #f5f5f5;
   @media only screen and (max-width:768px) {
    height: 150px;
   }
   &__left {
     font-size: 14px;
     float: left;
     @media screen and (max-width: 768px) {
       display: block;
       float: none;
       margin-bottom: 10px;
       padding: 0;
     }
     span {
			 color: #0095dc;
			 padding-left: 20px;
       @media only screen and (max-width:768px) {
         padding-left: 0;
       }
			 @include mobile {
				 display: block;
				 line-height: 2em;
			 }
			 a {
				 color: #0095dc;
				 text-decoration: underline;
			 }
		 }
   }
   &__right {
     font-size: 14px;
     float: right;
     @media screen and (max-width: 768px) {
       display: block;
       float: none;
       padding: 0;
			 line-height: 2em;
     }
   }
   &__contact {
     font-weight: bold;
     color: #333;
     @media screen and (max-width: 768px) {
       display: block;
     }
   }
   > div {
      text-align: center;
      color: #333;
      font-size: 1em;
      padding: 20px 0;
      // max-width: 83.572em /* body font base 14px width equal to 1170px */;
      margin: 0 auto;
   }
  a{
    text-decoration: none;
    color: #333;
  }
}
</style>
