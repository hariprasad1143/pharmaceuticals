import init from 'init'
import Vue from 'vue'
import i18n from '@common/src/i18n'
import Dummy from '@common/src/pages/Dummy.vue'

describe('init app', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(Dummy)
    vm = new Constructor({
      i18n
    })
  })
  it('set language', () => {
    vm.$i18n.locale = 'EN'
    init.setLanguage(vm)
    expect(vm.$i18n.locale).to.equal('ID')
  })
  it('load trackers', () => {
    expect(init.trackersLoaded).to.equal(false)
    init.loadTrackers()
    expect(init.trackersLoaded).to.equal(true)
  })
  it('load mock', () => {
    expect(init.mockLoaded).to.equal(false)
    init.loadMock()
    expect(init.mockLoaded).to.equal(true)
  })
  it('start', () => {
    expect(init.started).to.equal(false)
    init.start(false)
    expect(init.started).to.equal(true)
  })
})
