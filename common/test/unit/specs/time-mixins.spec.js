import Vue from 'vue'
import Dummy from '@common/src/pages/Dummy.vue'
import TimeMixin from '@common/src/mixins/time-mixins'

describe('Time Mixins', () => {
  var vm = null

  const Constructor = Vue.extend({
    extends: Dummy
  })

  beforeEach(() => {
    vm = new Constructor({
      mixins: [TimeMixin]
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })

  it('remainingTimeinSec', () => {
    vm.remainingTime = 10000
    let expectedResult = 10
    expect(vm.remainingTimeinSec).to.equal(expectedResult)
  })

  it('seconds minutes hours days daysInHours >= 0', () => {
    vm.remainingTime = 20000
    expect(vm.seconds).to.equal(20)
    expect(vm.minutes).to.equal(0)
    expect(vm.hours).to.equal(0)
    expect(vm.days).to.equal(0)
    expect(vm.daysInHours).to.equal(0)
  })

  it('seconds minutes hours days daysInHours < 0', () => {
    vm.remainingTime = -10000000
    expect(vm.minutes).to.equal(0)
    expect(vm.hours).to.equal(0)
    expect(vm.days).to.equal(0)
    expect(vm.daysInHours).to.equal(0)
  })
})
