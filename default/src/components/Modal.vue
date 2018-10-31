<template>
  <transition name="modal">
    <div class="modal-mask" @click="close" transition="modal">
      <div class="modal-container" @click.stop>

        <div class="modal-header">
          <a class="modal-close bli-close" @click="close" v-if="showClose">X</a>
          <slot name="modal-header">
          </slot>
        </div>

        <div class="modal-body">
          <slot name="modal-body">
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="modal-footer">
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./js/modal.js"></script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
  }

  .modal-container {
    width: 423px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-enter, .modal-leave {
    opacity: 0;
  }
  .modal-enter .modal-container,
  .modal-leave .modal-container {
    -webkit-transform: scale(.7);
    transform: scale(.7);
  }
  .modal-close{
    float: right;
    color: #000;
    font-size: 16px;
    cursor: pointer;
  }

</style>
