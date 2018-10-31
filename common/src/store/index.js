import Vue from 'vue'
import Vuex from 'vuex'
import main from './main'

Vue.use(Vuex)

var mainStore = new Vuex.Store({
  state: main.state,
  mutations: main.mutations,
  actions: main.actions,
  getters: main.getters,
  strict: process.env.NODE_ENV !== 'production'
})

export default mainStore
