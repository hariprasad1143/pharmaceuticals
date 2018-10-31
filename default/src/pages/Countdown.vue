<template>
  <div class="countdown clearfix">
    <div class="countdown__left">
      <picture>
        <source media="(min-width: 769px)" :srcset="background.desktop">
        <img :src="background.tablet" alt="Xiaomi">
      </picture>
    </div>
    <div class="countdown__right">
      <div class="countdown__timer">
        <div class="countdown__timer-item">
          <div class="countdown__timer-digit">{{days | leftPad('0', 2)}}</div>
          <div class="countdown__timer-label">{{$t('app.countdown.days')}}</div>
        </div>
        <div class="countdown__timer-devider">:</div>
        <div class="countdown__timer-item">
          <div class="countdown__timer-digit">{{hours | leftPad('0', 2)}}</div>
          <div class="countdown__timer-label">{{$t('app.countdown.hours')}}</div>
        </div>
        <div class="countdown__timer-devider">:</div>
        <div class="countdown__timer-item">
          <div class="countdown__timer-digit">{{minutes | leftPad('0', 2)}}</div>
          <div class="countdown__timer-label">{{$t('app.countdown.minutes')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/countdown.js"></script>
<style lang="scss" scoped>
  .countdown {
    background-color: #1C2F69;
    padding-top: 54px;
    display: flex;
    align-items: center;
    height: calc(100vh - 106px);
    flex-direction: column;
    @media only screen and (max-width: 768px) {
      text-align: center;
      height: calc(100vh - 200px);
    }
    &__left {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      picture {
        width: 100%;
      }
      @media only screen and (max-width: 768px) {
        height: auto;
      }
      img {
        width: 100%;
      }
    }
    &__right {
      background-color: #1C2F69;
      position: absolute;
      right: 16%;
      top: 50%;
      @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        right: initial;
        top: initial;
      }
    }
    &__timer {
      padding: 5%;
      display: flex;
      &-item,&-devider {
        display: inline-block;
        vertical-align: middle;
      }
      &-item {
        display: inline-block;
        text-align: center;
        &:last-child {
          margin-right: 0;
        }
      }
      &-devider {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 15px 30px 15px;
        font-size: 32px;
      }
      &-label {
        color: white;
        margin-top: 10px;
        @media only screen and (min-width: 921px) {
          font-size: 20px;
        }
        @media only screen and (max-width: 920px) {
          font-size: 14px;
        }
      }
      &-digit {
        background: #fff;
        color: #222;
        border-radius: 8px;
        padding: 20px 0;
        @media only screen and (min-width: 921px) {
          width: 80px;
          font-size: 54px;
        }
        @media only screen and (max-width: 920px) {
          width: 60px;
          font-size: 32px;
        }
      }
    }
  }
</style>
