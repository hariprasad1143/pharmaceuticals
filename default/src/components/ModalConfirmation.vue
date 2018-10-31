<template>
    <div class="wrap" :class="{'wrap--shown' : isVisible}">
      <div class="content centered">
        <h2>{{ $t("app.thankYou.confirmationTitle") }}</h2>
        <div>{{ $t("app.thankYou.confirmationMessage") }}</div>
        <div class="btn-wrap">
            <button class="not-confirm" @click="onClose">{{ $t("app.thankYou.no") }}</button>
            <button class="do-confirm" @click="onConfirm">{{ $t("app.thankYou.sure") }}</button>
        </div>
      </div>
    </div>
</template>

<script src="./js/modal-confirmation.js"></script>

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

  &--shown {
    display: flex;
    align-items: center;
    .content {
        animation-name: zoomIn;
        animation-duration: .3s;
        animation-fill-mode: both;
    }
  }
}

.content{
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  text-align: left;
  h2{
      font-size: 1.2em;
      font-weight: 400;
      margin: 0;
      margin-bottom: 10px;
  }
}

.centered {
  @media (max-width: 960px) {
    text-align: center;
  }
}

.btn-wrap{
    margin-top: 2em;
    text-align: center;
    @media (min-width: 960px) {
      text-align: right;
    }
}
.not-confirm{
    outline: 0;
    border: 0;
    padding: 7px 35px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    color: #282828;
    margin: 5px;
    background: transparent;

    &:hover{
      color: #0072c5;
    }
}
.do-confirm{
    outline: 0;
    padding: 7px 35px;
    border-radius: 4px;
    border: 1px solid #0072c5;
    background-color: #0072c5;
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
