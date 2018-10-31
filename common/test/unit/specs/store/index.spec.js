import store from '@common/src/store'
import Vue from 'vue'
import Dummy from '@/pages/Dummy.vue'

describe('store modules', () => {
  it('compare mainStore', () => {
    const Constructor = Vue.extend(Dummy)
    const vm = new Constructor({
      store
    })
    vm.$mount()
    expect(store.state).to.equal(vm.$store.state)
  })
})
