<template>
    <div class="wrap" :class="{'wrap--shown' : isVisible}">
      <div class="content centered">
        <div class="modal-image">
          <img src="~assets/images/flash-sale/icon-oos-timeout.svg" class="header__brand" alt="Blibli.com"/>
        </div>
        <h1>{{ $t("sessionEnded.title") }}</h1>
        <h4 v-html="$t('sessionEnded.description')"></h4>
        <div class="btn-wrap">
            <button class="do-confirm" @click="onConfirm">{{ $t("sessionEnded.ok") }}</button>
        </div>
      </div>
    </div>
</template>

<script src="./js/modal-session-ended.js"></script>

<style lang="scss" scoped>
.wrap {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: none;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  .content {
    animation-name: zoomIn;
    animation-duration: .3s;
    animation-fill-mode: both;
    position: relative;
    width: 24%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    text-align: center;
    @media (max-width: 768px) {
        width:85%;
    }
    h2{
        font-size: 1.2em;
        font-weight: bold;
        margin: 0;
    }
  }
}

.centered {
  @media (max-width: 960px) {
    text-align: center;
  }
}

.btn-wrap{
    margin-top: 10px;
}
.do-confirm{
    outline: 0;
    padding: 7px 35px;
    border-radius: 4px;
    border: 1px solid #0095da;
    background-color: #0095da;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    margin: 5px;

    &:hover{
      background-color: transparent;
      border: 1px solid #0072c5;
      color: #0072c5;
    }
}
@keyframes zoomIn {
  from {
    transform: scale3d(0.3, 0.3, 0.3);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
