<template>
  <!-- container -->
  <div id="main-app" class="container">
    <div class="content-wrapper" id="blibli-main-ctrl">
      <head-section></head-section>
      <section class="content-section">
        <div class="content-inner-section">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </section>
      <foot-section></foot-section>
    </div>
    <loading-screen v-if="isLoading"></loading-screen>
  </div>
</template>

<script src="./js/app.js"></script>

<style>
  .box {
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(32, 33, 39, 0.12);
  }
</style>

<style lang="scss" scoped>
  .container {
    height: 100%;
  }

  .content-wrapper {
    position: relative;
    min-height: 100%;
    background-color: #ebebeb;
  }

  .content-section {
    padding-top: 60px;
    min-height: 85vh;
    width: 100%;
    overflow: auto;
    background-color: #ebebeb;
    @media only screen and (max-width:768px) {
      margin-bottom: 0;
      min-height: auto;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
