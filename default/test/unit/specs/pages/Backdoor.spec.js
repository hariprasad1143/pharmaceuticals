import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import Backdoor from 'src/pages/Backdoor'
import i18n from '@common/src/i18n'
import config from '@common/src/config'

describe('Backdoor.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(Backdoor)
    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })

  it('validateBackdoorKey', () => {
    let key = 'ABCDEFGH'
    vm.$store.commit('setLoading', false)
    vm.$store.commit('setBackdoorKey', key)
    vm.validateBackdoorKey()
    expect(store.getters.isLoading).to.deep.equal(true)
    expect(store.getters.backdoorKey).to.deep.equal(key)
  })

  it('successFunc', (done) => {
    let response = {
      body: {
        code: 200,
        data: [
          {
            productName: '',
            sku: '',
            stock: 0
          }
        ]
      }
    }
    vm.$store.commit('setLoading', true)
    vm.successFunc(response)
    vm.$nextTick(() => {
      expect(store.getters.isLoading).to.deep.equal(false)
      expect(vm.$route.path).to.equal(config.app.pages.backdoor_dashboard)
      done()
    })
  })
})
