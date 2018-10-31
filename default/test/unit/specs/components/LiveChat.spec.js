import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import config from '@common/src/config'
import LiveChat from 'src/components/LiveChat'
import i18n from '@common/src/i18n'

describe('LiveChat.vue', () => {
  var vm = null
  const Constructor = Vue.extend(LiveChat)
  const oldOpen = window.open
  before(() => {
    vm = new Constructor({
      router,
      store,
      i18n,
      config
    })

    window.open = function (url, name, config) {
      return {
        url: url,
        name: name,
        config: config,
        focus () {}
      }
    }
  })

  after(() => {
    window.open = oldOpen
  })

  it('initalize well', () => {
    vm.$mount()
  })

  it('openLiveChat', () => {
    const data = {
      url: 'https:' + config.app.livechat.url + '?planId=' + config.app.livechat.planId + '&siteid=' + config.app.livechat.siteId,
      name: config.app.livechat.name,
      config: config.app.livechat.windowConfig
    }
    vm.openLiveChat()
    expect(vm.currentWindow.url).to.equal(data.url)
    expect(vm.currentWindow.name).to.equal(data.name)
    expect(vm.currentWindow.config).to.equal(data.config)
  })

  it('openLiveChatMobile', () => {
    const data = {
      url: 'https:' + config.app.livechat.url + '?planId=' + config.app.livechat.planId + '&siteid=' + config.app.livechat.siteId,
      name: '_blank',
      config: undefined,
      focus () {}
    }
    vm.openLiveChatMobile()
    expect(vm.currentWindow.url).to.equal(data.url)
    expect(vm.currentWindow.name).to.equal(data.name)
  })
})
