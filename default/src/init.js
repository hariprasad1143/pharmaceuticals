// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import VueGtm from 'vue-gtm'
import store from '@common/src/store'
import i18n from '@common/src/i18n'
import locale from '@common/src/util/locale'
import config from '@common/src/config'
import '@common/src/filters'
import '@common/src/directives'
import App from 'App'

import Clipboard from 'v-clipboard'
Vue.use(Clipboard)

export default {
  start (createInstance = true) {
    if (process.env.NODE_ENV !== 'testing') {
      this.loadTrackers()
    }

    if (process.env.NODE_ENV !== 'production') {
      this.loadMock()
    }

    require('assets/css/main.scss')

    if (process.env.NODE_ENV !== 'production') {
      Vue.config.devtools = true
    }

    if (createInstance) {
      /* eslint-disable no-new */
      const vm = new Vue({
        el: 'app',
        store,
        i18n,
        router,
        components: {App}
      })

      // set locale
      this.setLanguage(vm)
    }
    this.started = true
  },
  setLanguage (vm) {
    locale.changeLanguage(vm, config.app.default.locale)
  },
  loadTrackers () {
    Vue.use(VueAnalytics, {
      id: 'UA-21718848-1',
      router
    })
    Vue.use(VueGtm, {
      debug: false, // Whether or not display console logs debugs (optional)
      vueRouter: router // Pass the router instance to automatically sync with router (optional)
    })
    require('@common/src/trackers')
    this.trackersLoaded = true
  },
  loadMock () {
    if (process.env.MOCK_ENV !== 'false') {
      console.log('load mock')
      require('@vue-mock')
      this.mockLoaded = true
    }
  },
  createVueInstance (params) {
    /* eslint-disable no-new */
    params.store = store
    new Vue(params)
  },
  mockLoaded: false,
  trackersLoaded: false,
  bindCollabLoaded: false,
  started: false
}
