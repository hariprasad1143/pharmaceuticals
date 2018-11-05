<template>
  <div class="wrapper">
    <header class="header">
      <div class="row">
        <div class="header__left">
          <a :href="logoPath" :class="{'show--desktop':isLoginPage}">
            <span class="first-letter">P</span>harmaceuticals
            <!--<img src="~assets/images/logo-blibli.png" class="header__brand" alt="Blibli.com"/>-->
          </a>
          <router-link v-if="isLoginPage" to="/" class="show--mobile back">
            &larr; {{$t('header.back')}}
          </router-link>
        </div>
        <div class="header__right" :class="{'waiting':isWaitingPage}">
          <div class="header__login" v-if="!isLoginPage" :class="{'wrap': user.username}" @mouseover="showUserDropdown" @mouseleave="hideUserDropdown">
            <button class="header__login-btn">LOGIN</button>
            <!--<router-link class="login__btn" to="/flash-sale/login" v-if="!user.username" >{{$t('header.login')}}</router-link>-->
            <!--<span v-else class="username"><strong>{{user.username}}</strong><img src="~assets/images/icon-down.png" v-if="user.username && !isCheckoutPage && !isPaymentPage"/></span>-->
            <!--<span class="user-dropdown" v-if="user.username && !isCheckoutPage && !isPaymentPage" :class="{'show-user-dropdown': isDropdownActive}" @mouseleave="hideUserDropdown">-->
              <!--<span class="user-dropdown__history" @click="redirectOrderHistory"><img src="~assets/images/icon-order.svg" alt="">Pesanan</span>-->
              <!--<span class="user-dropdown__logout" @click="logoutUser"><img src="~assets/images/icon-logout.svg" alt="">Keluar</span>-->
            <!--</span>-->
          </div>
          <!--<a v-if="visibleBackToBlibli" href="https://www.blibli.com/home" class="header__right-backtoblibli"></a>-->
        </div>
      </div>
    </header>
  </div>
</template>

<script src="./js/head-section.js"></script>
<style lang="sass" scoped>
  .wrapper
    margin: 0 auto
    width: 100%
    background: #fff
    position: fixed
    top: 0
    left: 0
    z-index: 3
    border-bottom: 1px solid #e9e9e9
    height: 60px
    .header
      height: 100%
      display: flex
      align-items: center
      justify-content: space-between
      -webkit-box-shadow: 0 2px 8px 0 rgba(0,0,0,.14)
      -moz-box-shadow: 0 2px 8px 0 rgba(0,0,0,.14)
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.14)
      .show
        &--desktop
          display: block
          @media screen and (max-width: 768px)
            display: none
        &--mobile
          display: none
          @media screen and (max-width: 768px)
            display: block
          &.back
            color: #1c1e23;
            text-decoration: none;
            font-size: 20px;
            padding-left: 18px;
      .row
        margin: 0 auto
      .wrap
       text-align: right
       text-overflow: ellipsis
       white-space: nowrap
       margin-top: 15px
      &__login
        &-btn
          padding: 6px 26px
          font-family: fantasy
          font-weight: bold
          color: #333333
          background-color: cadetblue
          border: none
        .username
          text-overflow: ellipsis
          white-space: nowrap
          margin-right: 25px
          width: 500px
          cursor: pointer
          /*display: inline-block*/
          display: block
          overflow: hidden
          padding-bottom: 15px
          strong
            margin-right: 15px;
          @media screen and (max-width: 600px)
            width: 100px
            margin-right: 15px;
          @media screen and (max-width: 340px)
            width: 75px
            margin-right: 15px
          img
            margin-left: 5px
            top: 26px
            right: 230px
            @media screen and (max-width: 600px)
              position: absolute;
              right: 9em;
            @media screen and (max-width: 340px)
              right: 120px
      &__left
        float: left
        a
          text-decoration: none
          color: #00B9AD
          font-size: 25px
          /*font-weight: bold*/
          font-family: monospace
          .first-letter
            font-size: 50px
            color: #0095DA
            /*font-weight: bold*/
            font-family: cursive
        &-brand
      &__right
        display: flex
        align-items: center
        float: right

        &-backtoblibli
          height: 44px
          display: flex
          text-decoration: none
          color: #fff
          font-size: 110%
          min-width: 115px;
          background: transparent url(~assets/images/flash-sale/gotohome.png) no-repeat
          &:before,&:after
            height: 44px
            background: transparent url(~assets/images/flash-sale/gotohome.png) no-repeat
          &:before
            content: ''
            width: 36px
          &:after
            background-position: top right
            padding: 11px 21px 0 4px
            @media screen and (min-width: 601px)
              content: 'Ke Home Blibli.com'
            @media screen and (max-width: 600px)
              content: 'Ke Home'

    .login
      &__section
      &__btn
        text-align: center
        text-decoration: none
        color: #0096d9
        background-color: #fff
        border-radius: 2px
        border: solid 1px #0096d9
        margin-right: 5px
        cursor: pointer
        padding: 7px 20px
        @media screen and (max-width: 340px)
          padding: 7px 8px

  .logout-btn
    text-decoration: underline
    color: #2FC2EF
    cursor: pointer
  .user-dropdown
    display: none
    background: #FFF
    border: #ccc 1px solid
    text-align: left
    position: absolute
    font-size: 15px
    @media screen and (max-width: 600px)
      margin-left: 30%
    @media screen and (min-width: 601px)
      left: 68%
    cursor: pointer
    img
      width: 15px
      position: relative
      top: 2px
      left: -10px
    @media screen and (max-width: 600px)
      right: 0px
      margin-right: 120px
    &__history
      display: block
      padding: 10px 60px 10px 20px
      border-bottom: 1px solid #DDD
      z-index: 999
      &:hover
        background: #EEE
    &__logout
      display: block
      padding: 10px 60px 10px 20px
      &:hover
        background: #EEE
  .show-user-dropdown
    display: block
</style>
