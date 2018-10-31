<template>
  <div class="timer">
    <div class="timer__group hour">
      <div class="timer__number">
        {{ ('0' + hours).slice(-2, -1) }}
      </div>
      <div class="timer__number">
        {{ ('0' + hours).slice(-1) }}
      </div>
    </div>

    <div class="timer__group">:</div>

    <div class="timer__group minute">
      <div class="timer__number">
        {{ ('0' + minutes).slice(-2, -1) }}
      </div>
      <div class="timer__number">
        {{ ('0' + minutes).slice(-1) }}
      </div>
    </div>

    <div class="timer__group">:</div>

    <div class="timer__group second">
      <div class="timer__number">
        {{ ('0' + seconds).slice(-2, -1) }}
      </div>
      <div class="timer__number">
        {{ ('0' + seconds).slice(-1) }}
      </div>
    </div>
  </div>
</template>

<script src="./js/timer.js"></script>

<style lang="scss" scoped>
  .timer {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 24px;
    &__group {
      display: flex;
    }
  }
</style>
