<template>
  <span>
    <span id="chat-button" @click="openLiveChat()">
      {{ $t('footer.or') }} 
      <a href="javascript:void()" 
        :alt="$t('footer.liveChat')"
        :title="$t('footer.liveChat')">
          <img src="~assets/images/chat-black.svg"/> {{ $t('footer.liveChat') }}
      </a>
    </span>  
    <div id="chat-button-mobile" @click="openLiveChatMobile()">
      <div class="or">{{ $t('footer.or') }}</div> 
      <a href="javascript:void()" 
        :alt="$t('footer.liveChat')"
        :title="$t('footer.liveChat')">
          <img src="~assets/images/chat.svg"/> {{ $t('footer.liveChat') }}
      </a>
    </div>
  </span>
</template>

<script src="./js/live-chat.js"></script>

<style lang="scss" scoped>
  #chat-button {
    a{
      color: #333;
      text-decoration: none;
    }
    img{
      vertical-align: bottom;
      margin-left: 5px;
      height: auto;
      width: 15px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  #chat-button-mobile {
    color: #333333;
    line-height: 2;
    margin-top: 10px;
    font-size: 11px;

    .or{
      text-transform: capitalize;
    }

    a{
      color: #fff;
      text-decoration: none;
    }

    img{
      vertical-align: middle;
      margin-top: -3px;
      margin-right: 2px;
      height: auto;
      width: 15px;
    }

    @media (min-width: 769px) {
      display: none;
    }
  }
</style>
