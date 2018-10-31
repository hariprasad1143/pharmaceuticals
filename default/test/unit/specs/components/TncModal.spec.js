import Vue from 'vue'
import router from '@/router'
import i18n from '@common/src/i18n'
import TncModal from 'src/components/TncModal'
import Vuex from 'vuex'

describe('TncModal.vue', () => {
  const Constructor = Vue.extend(TncModal)
  let getters, actions, store, vm

  beforeEach(() => {
    getters = {
      cmsContent: state => state.cmsContent
    }

    actions = {
      getCmsContent: sinon.stub()
    }

    store = new Vuex.Store({
      state: {
        cmsContent: {}
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

  it('mount well', () => {
    vm.$mount()
    expect(actions.getCmsContent.called).to.equal(true)
  })
  it('onClose', () => {
    let spy = sinon.spy()
    vm.$on('onClose', spy)
    vm.close()
    spy.should.have.been.calledOnce
  })
  it('onWrapClose caling close', () => {
    let spy = sinon.spy()
    vm.$on('onClose', spy)
    vm.onWrapClose(
      {
        target: {
          classList: {
            contains: function (str) {
              return true
            }
          }
        }
      })
    spy.should.have.been.calledOnce
  })
  it('onWrapClose NOT caling close', () => {
    let spy = sinon.spy()
    vm.$on('onClose', spy)
    vm.onWrapClose(
      {
        target: {
          classList: {
            contains: function (str) {
              return false
            }
          }
        }
      })
    spy.should.have.been.notCalled
  })
})
