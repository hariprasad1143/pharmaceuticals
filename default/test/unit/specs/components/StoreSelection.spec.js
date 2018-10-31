import Vue from 'vue'
import router from 'src/router'
import Vuex from 'vuex'
import StoreSelection from '@/components/StoreSelection'
import i18n from '@common/src/i18n'

describe('Store Selection', () => {
  let vm, actions, getters, store, mutations
  const Constructor = Vue.extend(StoreSelection)

  beforeEach(() => {
    actions = {
      setPickupStore () {}
    }
    mutations = {
      setCartItem (state, value) {
        const tmp = Object.assign({}, state.cart)
        tmp.items = [value]
        state.cart = tmp
      },
      setPickupStore (state, value) {
        state.pickupStore = {...value}
      },
      setCart (state, value) {
        state.cart = value
      }
    }
    getters = {
      stores: state => state.stores,
      storeTypes: state => state.storeTypes,
      cart: state => state.cart,
      pickupStore: state => state.pickupStore
    }

    store = new Vuex.Store({
      state: {
        storeTypes: [
          {
            type: 'SES',
            sequence: 0
          },
          {
            type: 'SEP',
            sequence: 2
          },
          {
            type: 'SSS',
            sequence: 1
          }
        ],
        stores: [
          {
            id: '242fd1e6-f532-476d-b63e-ee9058ab52e2',
            name: 'SAMSUNG EXCLUSIVE STORE - MS PHONE 4U',
            address: 'JL. HAYAM WURUK NO. 56A',
            district: '',
            city: 'JAKARTA BARAT',
            province: 'DKI JAKARTA',
            type: 'SES',
            active: true
          },
          {
            active: true,
            address: 'LT.3 NO.51 LT.3 NO.51',
            city: 'JAKARTA BARAT',
            id: '60921be6-018c-446d-b17a-b633187083ab',
            name: 'SAMSUNG EXCLUSIVE PARTNER - PLUIT VILLAGE',
            province: 'DKI JAKARTA',
            type: 'SEP',
            district: ''
          },
          {
            active: true,
            address: 'JL.KAPT.SUDIBYO NO. 15C',
            city: 'JAKARTA BARAT',
            id: 'ba128159-b117-4f42-b5c4-8436e76dd980',
            name: 'SAMSUNG SS - CENTRAL TIA SELL',
            province: 'DKI JAKARTA',
            type: 'SSS',
            district: ''
          },
          {
            active: true,
            address: 'LT.3 NO.51 LT.3 NO.51',
            city: 'DENPASAR',
            id: '60921be6-018c-446d-b17a-b633187083ab',
            name: 'SAMSUNG EXCLUSIVE PARTNER - PLUIT VILLAGE',
            province: 'BALI',
            type: 'SEP',
            district: ''
          },
          {
            active: true,
            address: 'JL.KAPT.SUDIBYO NO. 15C',
            city: 'BADUNG',
            id: 'ba128159-b117-4f42-b5c4-8436e76dd980',
            name: 'SAMSUNG SS - CENTRAL TIA SELL',
            province: 'BALI',
            type: 'SSS',
            district: ''
          }
        ],
        cart: {},
        pickupStore: {}
      },
      actions,
      getters,
      mutations
    })
    vm = new Constructor({
      i18n,
      store,
      router
    })
  })

  it('initalize well', () => {
    vm.$mount()
  })

  it('isEmptyStoreResult', () => {
    vm.selectedProvince = 'TEST'
    vm.selectedCity = 'TEST'
    vm.doSearchStore()
    expect(vm.isEmptyStoreResult).to.equal(true)
  })

  it('provinceListFiltered province not exist', () => {
    vm.provinceSearchText = 'TEST'
    expect(vm.provinceListFiltered).to.be.empty
  })

  it('provinceListFiltered province exist', () => {
    vm.provinceSearchText = 'DKI JAKARTA'
    expect(vm.provinceListFiltered).to.not.equal([])
  })

  it('cityListFiltered city not exist', () => {
    vm.selectedProvince = 'TEST'
    vm.citySearchText = ''
    expect(vm.cityListFiltered).to.be.empty
  })

  it('cityListFiltered city exist', () => {
    vm.selectedProvince = 'DKI JAKARTA'
    vm.citySearchText = ''
    expect(vm.provinceListFiltered).to.not.equal([])
  })

  it('isEmptyProvinceListFiltered', () => {
    vm.provinceSearchText = 'DKI JAKARTA'
    expect(vm.isEmptyProvinceListFiltered).to.be.false

    vm.provinceSearchText = 'TEST'
    expect(vm.isEmptyProvinceListFiltered).to.be.true
  })

  it('isEmptyCityListFiltered', () => {
    vm.selectedProvince = 'DKI JAKARTA'
    vm.citySearchText = 'TEST'
    expect(vm.isEmptyCityListFiltered).to.be.true

    vm.selectedProvince = 'DKI JAKARTA'
    vm.citySearchText = ''
    expect(vm.isEmptyCityListFiltered).to.be.true
  })

  it('visibleFreeSearchTextForm', () => {
    vm.selectedCity = ''
    vm.searchClicked = false
    expect(vm.visibleFreeSearchTextForm).to.be.false

    vm.selectedCity = 'BALI'
    vm.searchClicked = true
    expect(vm.visibleFreeSearchTextForm).to.be.true
  })

  it('isInFilter', () => {
    vm.freeSearchText = 'abc'

    // in active
    expect(vm.isInFilter({id: 'xabc1'})).to.equal(false)

    // various fields
    expect(vm.isInFilter({id: 'xabc1', active: true})).to.equal(false)
    expect(vm.isInFilter({name: 'abc', active: true})).to.equal(true)
    expect(vm.isInFilter({address: 'dddabc ddd', active: true})).to.equal(true)
    expect(vm.isInFilter({description: 'dddfd ab dabc ddd', active: true})).to.equal(false)
    expect(vm.isInFilter({province: 'testestabc', active: true})).to.equal(true)
    expect(vm.isInFilter({city: 'dassss', active: true})).to.equal(false)

    // no field
    expect(vm.isInFilter({active: true})).to.equal(false)
  })

  it('isInAutocomplete', () => {
    expect(vm.isInAutocomplete('ja', 'DKI JAKARTA')).to.be.true
    expect(vm.isInAutocomplete('DkI', 'DKI JAKARTA')).to.be.true
    expect(vm.isInAutocomplete('ja', 'BALI')).to.be.false
    expect(vm.isInAutocomplete('', 'DKI JAKARTA')).to.be.false
  })

  it('showProvinceAutocomplete', () => {
    vm.visibleProvinceAutocomplete = false
    vm.showProvinceAutocomplete()
    expect(vm.visibleProvinceAutocomplete).to.be.true
  })

  it('hideProvinceAutocomplete', () => {
    vm.visibleProvinceAutocomplete = true
    vm.hideProvinceAutocomplete()
    setTimeout(() => {
      expect(vm.visibleProvinceAutocomplete).to.be.false
    }, 500)
  })

  it('showCityAutocomplete', () => {
    vm.visibleCityAutocomplete = false
    vm.showCityAutocomplete()
    expect(vm.visibleCityAutocomplete).to.be.true
  })

  it('hideCityAutocomplete', () => {
    vm.visibleCityAutocomplete = true
    vm.hideCityAutocomplete()
    setTimeout(() => {
      expect(vm.visibleCityAutocomplete).to.be.false
    }, 500)
  })

  it('selectProvince focus', () => {
    vm.selectedCity = 'JAKARTA BARAT'
    vm.selectedProvince = ''
    vm.provinceSearchText = ''

    const oldClearSelectedCity = vm.clearSelectedCity
    const oldClearFreeTextSearch = vm.clearFreeTextSearch
    vm.clearSelectedCity = () => {}
    vm.clearFreeTextSearch = () => {
      expect(vm.selectedProvince).to.equal('BALI')
      expect(vm.provinceSearchText).to.equal('BALI')
      expect(vm.searchClicked).to.be.false
      vm.clearSelectedCity = oldClearSelectedCity
      vm.clearFreeTextSearch = oldClearFreeTextSearch
    }
    vm.selectProvince('BALI')
  })

  it('selectProvince', (done) => {
    vm.selectedCity = 'JAKARTA BARAT'
    vm.selectedProvince = ''
    vm.provinceSearchText = ''

    const oldClearSelectedCity = vm.clearSelectedCity
    const oldClearFreeTextSearch = vm.clearFreeTextSearch
    const oldFocus = vm.storeSelectInput.focus
    vm.clearSelectedCity = () => {}
    vm.clearFreeTextSearch = () => {}
    vm.storeSelectInput.focus = () => {
      expect(vm.selectedProvince).to.equal('BALI')
      expect(vm.provinceSearchText).to.equal('BALI')
      expect(vm.searchClicked).to.be.false
      vm.clearSelectedCity = oldClearSelectedCity
      vm.clearFreeTextSearch = oldClearFreeTextSearch
      vm.storeSelectInput.focus = oldFocus
      done()
    }
    vm.selectProvince('BALI')
  })

  it('selectCity', (done) => {
    vm.selectedCity = 'JAKARTA BARAT'
    vm.citySearchText = ''

    const oldDoSearchStore = vm.doSearchStore
    vm.doSearchStore = () => {
      expect(vm.selectedCity).to.equal('DENPASAR')
      expect(vm.citySearchText).to.equal('DENPASAR')
      vm.doSearchStore = oldDoSearchStore
      done()
    }
    vm.selectCity('DENPASAR')
  })

  it('clearSelectedProvince', (done) => {
    vm.selectedProvince = 'DKI JAKARTA'
    vm.provinceSearchText = 'JAKARTA'
    const oldResetStoreSearch = vm.resetStoreSearch
    vm.resetStoreSearch = () => {
      vm.resetStoreSearch = oldResetStoreSearch
      done()
    }
    vm.clearSelectedProvince()
    expect(vm.selectedProvince).to.equal('')
    expect(vm.provinceSearchText).to.equal('')
  })

  it('clearSelectedCity', (done) => {
    vm.selectedCity = 'JAKARTA BARAT'
    vm.citySearchText = 'JAKARTA'
    const oldResetStoreSearch = vm.resetStoreSearch
    vm.resetStoreSearch = () => {
      vm.resetStoreSearch = oldResetStoreSearch
      done()
    }
    vm.clearSelectedCity()
    expect(vm.selectedCity).to.equal('')
    expect(vm.citySearchText).to.equal('')
  })

  it('clearFreeTextSearch', () => {
    vm.freeSearchText = 'TEST'
    vm.clearFreeTextSearch()
    expect(vm.freeSearchText).to.equal('')
  })

  it('resetStoreSearch', () => {
    vm.searchClicked = true
    vm.storeResult = [{a: 'b'}]
    vm.resetStoreSearch()
    expect(vm.searchClicked).to.be.false
    expect(vm.storeResult).to.be.empty
  })

  it('selectStore', (done) => {
    let selectedStore = {id: 'ABC'}
    const oldDispatch = vm.$store.dispatch
    const oldEmit = vm.$emit
    vm.$store.dispatch = (action, data) => {
      expect(action).to.equal('setPickupStore')
      expect(data).to.deep.equal(selectedStore)
    }
    vm.$emit = (action) => {
      expect(action).to.equal('selectStore')
      vm.$store.dispatch = oldDispatch
      vm.$emit = oldEmit
      done()
    }
    vm.selectStore(selectedStore)
  })

  it('validateProvinceAndCity empty city', () => {
    let errorMessage = vm.$t('app.checkout.pickupStore.errors.cityEmpty')
    vm.selectedProvince = 'BALI'
    vm.selectedCity = ''
    vm.validateProvinceAndCity()
    expect(vm.inputCityAndProvinceErrorMessage).to.equal(errorMessage)
  })

  it('validateProvinceAndCity empty province', () => {
    let errorMessage = vm.$t('app.checkout.pickupStore.errors.provinceEmpty')
    vm.selectedCity = 'DENPASAR'
    vm.selectedProvince = ''
    vm.validateProvinceAndCity()
    expect(vm.inputCityAndProvinceErrorMessage).to.equal(errorMessage)
  })

  it('validateProvinceAndCity true', () => {
    vm.selectedProvince = 'DKI JAKARTA'
    vm.selectedCity = 'JAKARTA BARAT'
    expect(vm.validateProvinceAndCity()).to.be.true
  })

  it('doSearchStore', (done) => {
    vm.searchClicked = false
    vm.selectedProvince = 'DKI JAKARTA'
    vm.selectedCity = 'JAKARTA BARAT'
    const oldClearFreeTextSearch = vm.clearFreeTextSearch
    vm.clearFreeTextSearch = () => {
      vm.clearFreeTextSearch = oldClearFreeTextSearch
      done()
    }
    vm.doSearchStore()
    expect(vm.searchClicked).to.be.true
    expect(vm.storeResult).to.not.equal([])
  })

  it('doSearchStore province and city empty', () => {
    vm.searchClicked = false
    vm.storeResult = []
    vm.selectedProvince = ''
    vm.selectedCity = ''
    vm.doSearchStore()
    expect(vm.searchClicked).to.be.false
    expect(vm.storeResult).to.deep.equal([])
  })

  it('filterStoreByText', () => {
    vm.freeSearchText = 'CENTRAL'
    vm.filterStoreByText()
    expect(vm.storeResult).to.not.equal([])

    vm.freeSearchText = 'BUBUBU'
    vm.filterStoreByText()
    expect(vm.storeResult).to.be.empty
  })

  it('filteredStoresByFreeText', () => {
    vm.selectedCity = 'JAKARTA BARAT'
    vm.freeSearchText = 'CENTRAL'
    vm.filterStoreByText()
    expect(vm.filteredStoresByFreeText).to.not.equal([])
  })

  it('sortingStoreAsc', () => {
    let stores = [{name: 'c'}, {name: 'a'}, {name: 'd'}, {name: 'b'}]
    let result = [{name: 'a'}, {name: 'b'}, {name: 'c'}, {name: 'd'}]
    expect(vm.sortingStoreAsc(stores)).to.deep.equal(result)
  })

  it('orderStoreResultByTypeSequence', () => {
    store.state.storeTypes = [{ type: 'SES', sequence: 1 }, { type: 'SEP', sequence: 2 }]
    let stores = [
      { name: 'SAMSUNG EXCLUSIVE PARTNER - TLUIT VILLAGE', type: 'SEP' },
      { name: 'SAMSUNG EXCLUSIVE STORE - MS PHONE 4U', type: 'SES' }
    ]
    expect(vm.orderStoreResultByTypeSequence(stores)[0]).to.deep.equal(stores[1])
  })

  it('editPickupStore', (done) => {
    vm.$on('editPickupStore', () => { done() })
    vm.editPickupStore()
  })

  it('autocompleteUp', () => {
    vm.current = 1
    vm.autocompleteUp()
    expect(vm.current).to.equal(0)

    // else
    vm.autocompleteUp()
    expect(vm.current).to.equal(0)
  })

  it('autocompleteDown', () => {
    vm.current = 0
    vm.selectedProvince = 'BALI'
    vm.citySearchText = 'D'
    vm.autocompleteDown(vm.cityListFiltered)
    expect(vm.current).to.equal(1)

    // else
    vm.current = vm.cityListFiltered.length - 1
    vm.autocompleteDown(vm.cityListFiltered)
    expect(vm.current).to.equal(vm.cityListFiltered.length - 1)
  })

  it('autocompleteEnter city', (done) => {
    let expectedSelectedItem = 'BADUNG'
    vm.current = 0
    vm.selectedProvince = 'BALI'
    vm.citySearchText = 'D'
    const oldSelectCity = vm.selectCity
    vm.selectCity = (item) => {
      expect(item).to.equal(expectedSelectedItem)
      vm.selectCity = oldSelectCity
      done()
    }
    vm.autocompleteEnter(vm.cityListFiltered, 'city')
  })

  it('autocompleteEnter province', (done) => {
    let expectedSelectedItem = 'BALI'
    vm.current = 0
    vm.selectedProvince = ''
    vm.provinceSearchText = 'BALI'
    const oldSelectProvince = vm.selectProvince
    vm.selectProvince = (item) => {
      expect(item).to.equal(expectedSelectedItem)
      vm.selectProvince = oldSelectProvince
      done()
    }
    vm.autocompleteEnter(vm.provinceListFiltered, 'province')
  })

  it('autocompleteEnter empty autocomplete', () => {
    vm.current = 0
    vm.selectedProvince = ''
    vm.provinceSearchText = 'BALI'
    vm.autocompleteEnter([], 'province')
  })

  it('onHover', () => {
    vm.current = 0
    vm.onHover(1)
    expect(vm.current).to.equal(1)
  })

  it('isActive', () => {
    vm.current = 1
    vm.isActive(1)
    expect(vm.isActive(1)).to.equal(true)
  })

  it('availableToEdit', () => {
    vm.$store.commit('setCartItem', { price: 1000000 })
    vm.$store.commit('setPickupStore', {})
    expect(vm.availableToEdit).to.equal(false)

    vm.$store.commit('setCartItem', { price: 1000000 })
    vm.$store.commit('setPickupStore', {
      id: 'Store al',
      name: 'Store al',
      address: 'Jl store al',
      city: 'Jakarta Barat',
      province: 'DKI Jakarta',
      description: '',
      active: true,
      type: 'SSS'
    })
    expect(vm.availableToEdit).to.equal(true)

    vm.$store.commit('setCart', {price: 1000000, orderIdHash: 'ABCDE123', items: []})
    expect(vm.availableToEdit).to.equal(false)
  })

  it('highlightText', () => {
    expect(vm.highlightText('Jakarta Barat', 'Ja-*')).to.equal('<span>Ja</span>karta Barat')
  })

  it('visibleCityAutocomplete', (done) => {
    vm.selectedCity = 'DENPASAR'
    vm.citySearchText = 'DENPASA'
    vm.visibleCityAutocomplete = true
    const oldClearSelectedCity = vm.clearSelectedCity
    vm.clearSelectedCity = () => {
      vm.clearSelectedCity = oldClearSelectedCity
      done()
    }
    vm.$nextTick(() => {
      vm.visibleCityAutocomplete = false
    })
  })

  it('visibleProvinceAutocomplete', () => {
    vm.selectedProvince = 'DKI JAKARTA'
    vm.provinceSearchText = 'DKI'
    vm.visibleProvinceAutocomplete = true
    let clearSelectedProvinceSpy = sinon.spy(vm, 'clearSelectedProvince')
    let clearSelectedCitySpy = sinon.spy(vm, 'clearSelectedCity')
    vm.$nextTick(() => {
      vm.visibleProvinceAutocomplete = false
      clearSelectedProvinceSpy.should.have.been.calledOnce
      clearSelectedCitySpy.should.have.been.calledOnce
      clearSelectedProvinceSpy.restore()
      clearSelectedCitySpy.restore()
    })
  })
})
