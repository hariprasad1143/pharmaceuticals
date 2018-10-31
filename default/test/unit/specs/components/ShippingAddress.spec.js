import Vue from 'vue'
import router from 'src/router'
import ShippingAddress from '@/components/ShippingAddress'
import i18n from '@common/src/i18n'
import Vuex from 'vuex'

describe('CheckoutPickupStore.vue', () => {
  const Constructor = Vue.extend(ShippingAddress)
  let getters, actions, store, vm
  beforeEach(() => {
    getters = {
      regions: state => state.regions,
      shippingAddress: state => state.shippingAddress
    }

    actions = {
      getCities: sinon.stub(),
      getDistricts: sinon.stub(),
      getSubdistricts: sinon.stub(),
      setShippingAddress: sinon.stub()
    }

    store = new Vuex.Store({
      state: {
        regions: {},
        shippingAddress: {address: 'Jl Mangga', province: 'DKI Jakarta', postalCode: '123456'}
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

  it('Initialized well', () => {
    vm.$mount()
    expect(vm.userAddress).to.deep.equal(store.state.shippingAddress)
    expect(vm.provinceSearchText).to.equal('DKI Jakarta')
  })

  it('filteredProvinces', () => {
    store.state.regions = {
      provinces: [{name: 'Bali'}, {name: 'DKI-JAKARTA'}]
    }
    vm.provinceSearchText = 'DKI'
    expect(vm.filteredProvinces).to.deep.equal([{name: 'DKI-JAKARTA'}])
  })

  it('cities', () => {
    let result = [{name: 'Jakarta Barat'}, {name: 'Jakarta Pusat'}, {name: 'Jakarta Selatan'}]
    store.state.regions = {
      cities: [{name: 'Jakarta Barat'}, {name: 'Jakarta Selatan'}, {name: 'Jakarta Pusat'}]
    }
    expect(vm.cities).to.deep.equal(result)

    store.state.regions = {}
    expect(vm.cities).to.deep.equal([])
  })

  it('districts', () => {
    let result = [{name: 'Gambir'}, {name: 'Sawah Besar'}, {name: 'Senen'}]
    store.state.regions = {
      districts: [{name: 'Gambir'}, {name: 'Senen'}, {name: 'Sawah Besar'}]
    }
    expect(vm.districts).to.deep.equal(result)

    store.state.regions = {}
    expect(vm.districts).to.deep.equal([])
  })

  it('subdistricts', () => {
    let result = [{name: 'Gunung Sahari'}, {name: 'Kartini'}, {name: 'Pasar Baru'}]
    store.state.regions = {
      subdistricts: [{name: 'Pasar Baru'}, {name: 'Kartini'}, {name: 'Gunung Sahari'}]
    }
    expect(vm.subdistricts).to.deep.equal(result)

    store.state.regions = {}
    expect(vm.subdistricts).to.deep.equal([])
  })

  it('showProvinces', () => {
    vm.visibleProvinces = false
    vm.showProvinces()
    expect(vm.visibleProvinces).to.be.true
  })

  it('hideProvinces', () => {
    vm.visibleProvinces = true
    vm.hideProvinces()
    setTimeout(() => {
      expect(vm.visibleProvinces).to.be.false
    }, 500)
  })

  it('hideCities', () => {
    vm.visibleCities = true
    vm.hideCities()
    setTimeout(() => {
      expect(vm.visibleCities).to.be.false
    }, 500)
  })

  it('hideDistricts', () => {
    vm.visibleDistricts = true
    vm.hideDistricts()
    setTimeout(() => {
      expect(vm.visibleDistricts).to.be.false
    }, 500)
  })

  it('hideSubdistricts', () => {
    vm.visibleSubdistricts = true
    vm.hideSubdistricts()
    setTimeout(() => {
      expect(vm.visibleSubdistricts).to.be.false
    }, 500)
  })

  it('isInFilter', () => {
    expect(vm.isInFilter({name: 'DKI Jakarta'}, 'DKI')).to.be.true
    expect(vm.isInFilter({name: 'DKI Jakarta'}, 'dki')).to.be.true
    expect(vm.isInFilter({name: 'DKI Jakarta'}, 'Dki')).to.be.true
    expect(vm.isInFilter({name: 'DKI Jakarta'}, 'Bali')).to.be.false
    expect(vm.isInFilter({name: 'DKI Jakarta'}, 'DKI JAkarta')).to.be.true
    expect(vm.isInFilter({name: 'DKI Jakarta'}, 'dd')).to.be.false
  })

  it('sortAscendingByName', () => {
    expect(vm.sortAscendingByName({name: 'Bali'}, {name: 'DKI JAKARTA'})).to.equal(-1)
    expect(vm.sortAscendingByName({name: 'DKI JAKARTA'}, {name: 'Bali'})).to.equal(1)
    expect(vm.sortAscendingByName({name: 'Bali'}, {name: 'Bali'})).to.equal(0)
  })

  it('clearSelectedRegion', () => {
    vm.userAddress = {
      address: 'ABC 123',
      province: 'Bali'
    }
    vm.clearSelectedRegion(['address', 'province'])
    expect(vm.userAddress).to.deep.equal({address: '', province: ''})
    expect(actions.setShippingAddress.called).to.be.true
  })

  it('selectProvince', () => {
    vm.$refs = {citySelect: {focus: () => true}}
    let clearSelectedRegionSpy = sinon.spy(vm, 'clearSelectedRegion')
    let province = {
      'id': 'ID-6',
      'name': 'DKI Jakarta',
      'longitude': 106.822745,
      'latitude': -6.174465
    }
    vm.selectProvince(province)
    clearSelectedRegionSpy.should.have.been.calledOnce
    clearSelectedRegionSpy.should.have.been.calledWith(['province', 'city', 'district', 'subdistrict', 'postalCode'])
    expect(vm.userAddress.state).to.equal(province.name)
    expect(vm.provinceSearchText).to.equal(province.name)
    expect(actions.getCities.called).to.be.true
    clearSelectedRegionSpy.restore()
  })

  it('selectCity', () => {
    vm.$refs = {districtSelect: {focus: () => true}}
    let clearSelectedRegionSpy = sinon.spy(vm, 'clearSelectedRegion')
    let city = {
      'parentId': 'ID-6',
      'id': 'ID-6-7',
      'name': 'Kota Jakarta Pusat',
      'longitude': 106.758849,
      'latitude': -6.168329
    }
    vm.selectCity(city)
    clearSelectedRegionSpy.should.have.been.calledOnce
    clearSelectedRegionSpy.should.have.been.calledWith(['city', 'district', 'subdistrict', 'postalCode'])
    expect(vm.userAddress.city).to.equal(city.name)
    expect(actions.getDistricts.called).to.be.true
    clearSelectedRegionSpy.restore()
  })

  it('selectDistrict', () => {
    vm.$refs = {subdistrictSelect: {focus: () => true}}
    let clearSelectedRegionSpy = sinon.spy(vm, 'clearSelectedRegion')
    let district = {
      'parentId': 'ID-6-7',
      'id': 'ID-6-7-6',
      'name': 'Sawah Besar',
      'longitude': 106.832587,
      'latitude': -6.153194
    }
    vm.selectDistrict(district)
    clearSelectedRegionSpy.should.have.been.calledOnce
    clearSelectedRegionSpy.should.have.been.calledWith(['district', 'subdistrict', 'postalCode'])
    expect(vm.userAddress.district).to.equal(district.name)
    expect(actions.getSubdistricts.called).to.be.true
    clearSelectedRegionSpy.restore()
  })

  it('selectSubdistrict', () => {
    vm.userAddress = {address: 'asasasa'}
    let subdistrict = {
      'parentId': 'ID-6-7-6',
      'id': 'ID-6-7-6-2',
      'name': 'Karang Anyar',
      'longitude': 0,
      'latitude': 0,
      'postalCode': '10740'
    }
    vm.selectSubdistrict(subdistrict)
    expect(vm.userAddress.subDistrict).to.equal(subdistrict.name)
    expect(vm.userAddress.postalCode).to.equal(subdistrict.postalCode)
    expect(actions.setShippingAddress.called).to.be.true
  })

  it('validateAddress address empty', () => {
    vm.userAddress = {address: ''}
    vm.validateAddress()
    expect(vm.validationResults['address']).to.not.equal([])
    expect(actions.setShippingAddress.called).to.be.true
  })

  it('validateAddress address too short or too long', () => {
    vm.userAddress = {address: 'lala'}
    vm.validateAddress()
    expect(vm.validationResults['address']).to.not.equal([])
    expect(actions.setShippingAddress.called).to.be.true
  })

  it('validateAddress address shipping address complete', () => {
    vm.userAddress = {address: 'Jl. Mangga No 38 ,Kebon Melati, Tanah Abang', postalCode: '123456'}
    vm.validateAddress()
    expect(vm.validationResults).to.deep.equal({})
    expect(actions.setShippingAddress.called).to.be.true
  })

  it('getFieldErrorMessage', () => {
    var result = vm.getFieldErrorMessage('app.form.validation.tooShortOrTooLong', 'address')
    expect(result).to.equal('Masukan Alamat terlalu pendek atau terlalu panjang')
  })

  it('getAscSortByName', () => {
    let result = [{name: 'Jakarta Barat'}, {name: 'Jakarta Pusat'}, {name: 'Jakarta Selatan'}]
    let regions = {
      cities: [{name: 'Jakarta Barat'}, {name: 'Jakarta Selatan'}, {name: 'Jakarta Pusat'}]
    }
    expect(vm.getAscSortByName(regions['cities'])).to.deep.equal(result)

    regions = {}
    expect(vm.getAscSortByName(regions['cities'])).to.deep.equal([])
  })

  it('visibleProvinces watch', () => {
    let clearSelectedRegionSpy = sinon.spy(vm, 'clearSelectedRegion')
    vm.userAddress.state = 'Bali'
    vm.visibleProvinces = true
    vm.provinceSearchText = 'A'
    vm.$nextTick(() => {
      vm.visibleProvinces = false
      vm.$nextTick(() => {
        expect(vm.provinceSearchText).to.equal('')
        clearSelectedRegionSpy.should.have.been.calledOnce
        clearSelectedRegionSpy.should.have.been.calledWith(['province', 'city', 'district', 'subdistrict', 'postalCode'])
        clearSelectedRegionSpy.restore()
      })
    })
  })
})
