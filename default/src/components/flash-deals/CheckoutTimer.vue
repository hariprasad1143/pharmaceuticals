<template>
  <div>
    <div class="checkout__timer-container">
      <div class="checkout__timer">
        <span class="description"></span>
        <span class="time">
          <span> {{ minutes | leftPad('0', 2) }} </span>
          <span>:</span>
          <span> {{ seconds | leftPad('0', 2) }} </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script src="./js/checkout-timer.js"></script>
<style lang="scss" scoped>
.checkout__timer {
  align-items: center;
  display: flex;
  margin: 0 auto;
  padding: 0 1.0714em;
  width: 85.714em;
  &-container {
    background-color: #333333;
    color: #ffffff;
    display: flex;
    position: fixed;
    padding: 12px;
    top: 60px;
    width: 100%;
    z-index: 1;
  }
  .description {
    font-size: 14px;
    &:after {
      content: 'Untuk mendapatkan produk, segera selesaikan proses checkout dan lanjutkan dengan pembayaran sebelum';
    }
    @media only screen and (max-width:768px) {
      &:after {
        content: 'Selesaikan proses checkout sebelum';
      }
    }
  }
  .time {
    display: flex;
    font-size: 28px;
    font-weight: bold;
    margin-left: 8px;
  }
}
</style>
