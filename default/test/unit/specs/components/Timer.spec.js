import Vue from 'vue'
import Timer from 'src/components/Timer'

function parseDuration (epochInMs) {
  return {
    seconds: Math.floor((epochInMs / 1000) % 60),
    minutes: Math.floor((epochInMs / 1000 / 60) % 60),
    hours: Math.floor((epochInMs / 1000) / 3600)
  }
}

describe('timer', () => {
  const Constructor = Vue.extend(Timer)
  let vm
  beforeEach(() => {
    vm = new Constructor({
      propsData: {
        timeoutInMs: 10000
      }
    })
  })
  
  it('mount well', () => {
    vm.$mount()
    expect(vm.total).to.equal(10000)
  })
  
  it('get remaining time', () => {
    const totalBefore = vm.total
    vm.getTimeRemaining()
    const totalAfter = vm.total
    const duration = parseDuration(totalAfter)
    expect(totalBefore).to.equal(totalAfter + 1000)
    expect(vm.hours).to.equal(duration.hours)
    expect(vm.minutes).to.equal(duration.minutes)
    expect(vm.seconds).to.equal(duration.seconds)
  })
  
  it('destroy well', () => {
    const realClearInterval = window.clearInterval
    window.clearInterval = sinon.spy()
    vm.$destroy()
    expect(window.clearInterval.called).to.be.true
    window.clearInterval = realClearInterval
  })
})
