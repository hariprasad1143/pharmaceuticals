import Vue from 'vue'
import Dummy from '@common/src/pages/Dummy.vue'
import '@common/src/filters'

describe('filters', () => {
  it('currencyFormat', () => {
    const Constructor = Vue.extend(Dummy)
    const vm = new Constructor()
    vm.$mount()

    expect(vm.$options.filters.currencyFormat(10000)).to.equal('Rp 10.000')
    expect(vm.$options.filters.currencyFormat(1000)).to.equal('Rp 1.000')
    expect(vm.$options.filters.currencyFormat('123')).to.equal('Rp 0')
  })

  it('roundNumber', () => {
    const Constructor = Vue.extend(Dummy)
    const vm = new Constructor()
    vm.$mount()
    expect(vm.$options.filters.roundNumber()).to.equal(0)
    expect(vm.$options.filters.roundNumber(9.87)).to.equal(10)
    expect(vm.$options.filters.roundNumber(5.34545754, 1)).to.equal(5.3)
    expect(vm.$options.filters.roundNumber(7.76969686, 2)).to.equal(7.77)
    expect(vm.$options.filters.roundNumber(3.65658765, 3)).to.equal(3.657)
  })

  it('twoDigits', () => {
    const Constructor = Vue.extend(Dummy)
    const vm = new Constructor()
    vm.$mount()

    expect(vm.$options.filters.leftPad(0, '0', 2)).to.equal('00')
    expect(vm.$options.filters.leftPad(1, '0', 2)).to.equal('01')
    expect(vm.$options.filters.leftPad('1', '0', 2)).to.equal('01')
    expect(vm.$options.filters.leftPad(10, '0', 2)).to.equal('10')
    expect(vm.$options.filters.leftPad(10, '0', 3)).to.equal('010')
  })
})
