import {mapGetters, mapActions} from 'vuex'
import formValidator from '@common/src/util/form-validator'

export default {
  name: 'ShippingAddress',
  props: {
    address: ''
  },
  data () {
    return {
      userAddress: {},
      provinceSearchText: '',
      visibleProvinces: false,
      visibleCities: false,
      visibleDistricts: false,
      visibleSubdistricts: false,
      validationResults: {},
      code: ''
    }
  },
  created () {
    this.userAddress = {...this.shippingAddress}
    this.userAddress.address = this.address
    this.userAddress.postalCode = this.shippingAddress.postalCode
    this.provinceSearchText = this.shippingAddress.state
    this.validateAddress()
  },
  watch: {
    visibleProvinces: function (val) {
      if (!this.visibleProvinces) {
        this.provinceSearchText = this.provinceSearchText === '' ? this.userAddress.state : this.provinceSearchText
        return
      }
      this.provinceSearchText = ''
      this.getProvinces()
    },
    visibleCities: function () {
      if (!this.visibleCities) return
      if (this.regions.cities && !this.regions.cities.length) this.getCity()
    },
    visibleDistricts: function () {
      if (!this.visibleDistricts) return
      if (this.regions.cities && !this.regions.cities.length) this.getCity()
      this.getDistrict()
    },
    visibleSubdistricts: function () {
      if (!this.visibleSubdistricts) return
      if (this.regions.cities && !this.regions.cities.length) this.getCity()
      else if (!this.regions.districts.length) this.getDistrict()
      else if (this.regions.cities.length && this.regions.districts.length) this.getSubdistrict()
    }
  },
  computed: {
    ...mapGetters(['regions', 'shippingAddress']),
    provinces: function () {
      return this.regions['provinces'] || []
    },
    filteredProvinces: function () {
      let filteredProvinces = this.provinces.filter(province => this.isInFilter(province, this.provinceSearchText))
      return filteredProvinces.sort(this.sortAscendingByName)
    },
    cities: function () {
      return this.getAscSortByName(this.regions['cities'])
    },
    districts: function () {
      return this.getAscSortByName(this.regions['districts'])
    },
    subdistricts: function () {
      return this.getAscSortByName(this.regions['subdistricts'])
    }
  },
  methods: {
    ...mapActions(['getCities', 'getDistricts', 'getSubdistricts', 'setShippingAddress', 'getProvinces', 'resetRegions']),
    showProvinces: function () {
      this.visibleProvinces = true
    },
    hideProvinces: function () {
      setTimeout(() => { this.visibleProvinces = false }, 300)
    },
    hideCities: function () {
      setTimeout(() => { this.visibleCities = false }, 300)
    },
    hideDistricts: function () {
      setTimeout(() => { this.visibleDistricts = false }, 300)
    },
    hideSubdistricts: function () {
      setTimeout(() => { this.visibleSubdistricts = false }, 300)
    },
    isInFilter: function (item, searchText) {
      let reg = new RegExp(searchText, 'i')
      return reg.test(item.name)
    },
    sortAscendingByName: (a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    },
    clearSelectedRegion: function (types) {
      types.forEach((type) => {
        this.userAddress[type] = ''
      })
      this.setShippingAddress({})
    },
    getRegionId: function (regions, data) {
      regions.map(region => {
        if (region.name === data) {
          this.code = region.id
          return
        }
      })
    },
    selectProvince: function (item) {
      this.clearSelectedRegion(['city', 'district', 'subDistrict', 'postalCode'])
      this.userAddress.state = item.name
      this.provinceSearchText = item.name
      this.$nextTick(() => {
        this.$refs.citySelect.focus()
        this.visibleCities = true
        this.setShippingAddress({...this.userAddress})
      })
    },
    selectCity: function (item) {
      this.clearSelectedRegion(['district', 'subDistrict', 'postalCode'])
      this.userAddress.city = item.name
      this.$nextTick(() => {
        this.$refs.districtSelect.focus()
        this.visibleDistricts = true
        this.setShippingAddress({...this.userAddress})
        this.resetRegions(['districts', 'subdistricts'])
      })
    },
    selectDistrict: function (item) {
      this.clearSelectedRegion(['subDistrict', 'postalCode'])
      this.userAddress.district = item.name
      this.$nextTick(() => {
        this.$refs.subdistrictSelect.focus()
        this.visibleSubdistricts = true
        this.setShippingAddress({...this.userAddress})
        this.resetRegions(['subdistricts'])
      })
    },
    selectSubdistrict: function (item) {
      this.clearSelectedRegion(['postalCode'])
      this.userAddress.subDistrict = item.name
      this.userAddress.postalCode = item.postalCode
      this.setShippingAddress({...this.userAddress})
    },
    validateAddress: function () {
      delete this.validationResults['address']
      let errors = []
      errors = errors.concat(formValidator.isNotEmpty(
        {fieldName: this.userAddress['address']}
      ))
      errors = errors.length ? errors : errors.concat(formValidator.validateRegex(
        {fieldName: this.userAddress['address']},
        {fieldName: [{exp: '^[\\S\\s]{15,254}$', errorKey: 'app.form.validation.tooShortOrTooLong'}]}
      ))
      if (errors.length > 0) {
        this.validationResults['address'] = errors
        this.userAddress.streetAddress1 = ''
        this.setShippingAddress({...this.userAddress})
      } else {
        this.userAddress.streetAddress1 = this.userAddress.address
        this.userAddress.address = this.userAddress.address
        this.setShippingAddress({...this.userAddress})
      }
      this.$forceUpdate()
    },
    getFieldErrorMessage (key, fieldName, selectedField) {
      let fieldDesc = this.$t('app.form.fields.' + fieldName, {field: selectedField})
      return this.$t(key, {field: fieldDesc})
    },
    getAscSortByName: function (list) {
      const l = list || []
      return l.slice(0).sort(this.sortAscendingByName)
    },
    getCity: function () {
      if (this.regions.cities.length) return
      this.getRegionId(this.regions.provinces, this.shippingAddress.state)
      if (this.visibleCities) this.getCities({provinceId: this.code})
      if (this.visibleDistricts || this.visibleSubdistricts) this.getCities({provinceId: this.code, success: this.getDistrict})
    },
    getDistrict: function () {
      if (this.regions.districts.length) return
      this.getRegionId(this.regions.cities, this.shippingAddress.city)
      if (this.visibleDistricts) this.getDistricts({cityId: this.code})
      if (this.visibleSubdistricts) this.getDistricts({cityId: this.code, success: this.getSubdistrict})
    },
    getSubdistrict: function () {
      if (this.regions.subdistricts.length) return
      this.getRegionId(this.regions.districts, this.shippingAddress.district)
      this.getSubdistricts({districtId: this.code})
    }
  }
}
