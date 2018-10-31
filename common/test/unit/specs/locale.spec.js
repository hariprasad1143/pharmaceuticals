import Vue from 'vue'
import i18n from '@common/src/i18n'
import Dummy from '@common/src/pages/Dummy.vue'
import { changeLanguage } from '@common/src/util/locale'

describe('util locale', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(Dummy)
    vm = new Constructor({
      i18n
    })
  })
  it('Initialized well', () => {
    vm.$mount()
  })
  it('test changeLanguage unmapped locale', () => {
    vm.$i18n.locale = 'ID'
    changeLanguage(vm, 'SG')
    expect(vm.$i18n.locale).to.equal('ID')
  })
  it('test changeLanguage EN', () => {
    vm.$i18n.locale = 'ID'
    changeLanguage(vm, 'EN')
    expect(vm.$i18n.locale).to.equal('EN')
  })
  it('test changeLanguage ID', () => {
    vm.$i18n.locale = 'EN'
    changeLanguage(vm, 'ID')
    expect(vm.$i18n.locale).to.equal('ID')
  })
})
