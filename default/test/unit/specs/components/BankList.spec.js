import Vue from 'vue'
import Vuex from 'vuex'
import router from 'src/router'
import BankListing from 'src/components/BankListing'
import i18n from '@common/src/i18n'

describe('Bank Listing', () => {
  let vm, getters, actions, store
  const Constructor = Vue.extend(BankListing)

  beforeEach(() => {
    getters = {
      promotions: state => state.promotions
    }

    actions = {
      getPromotions: sinon.stub()
    }

    store = new Vuex.Store({
      state: {
        promotions: []
      },
      getters,
      actions
    })

    vm = new Constructor({
      router,
      store,
      i18n
    })
  })

  it('openTncModal', done => {
    vm.visibleTnc = false
    vm.openTncModal()
    vm.$nextTick(() => {
      expect(vm.visibleTnc).to.equal(true)
      done()
    })
  })

  it('onCloseTncModal', done => {
    vm.visibleTnc = true
    vm.onCloseTncModal()
    vm.$nextTick(() => {
      expect(vm.visibleTnc).to.equal(false)
      done()
    })
  })

  it('compute promotionsSorted', () => {
    store.state.promotions = [
      { id: '1', sequence: 0 },
      { id: '2', sequence: 2 },
      { id: '3', sequence: 1 },
      { id: '4', sequence: 0 }
    ]
    expect(vm.promotionsSorted).to.deep.equal([
      { id: '1', sequence: 0 },
      { id: '4', sequence: 0 },
      { id: '3', sequence: 1 },
      { id: '2', sequence: 2 }
    ])
  })
})
