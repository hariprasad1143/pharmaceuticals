import Vue from 'vue'
import Modal from 'src/components/Modal'

describe('LoadingScreen.vue', () => {
  let vm
  before(() => {
    const Constructor = Vue.extend(Modal)
    vm = new Constructor({})
  })
  
  it('mount well', () => {
    vm.$mount()
  })
  
  it('close modal', () => {
    const closeHandler = sinon.stub()
    vm.$on('close', closeHandler)
    
    vm.close()
    expect(closeHandler.called).to.be.true
  })
})
