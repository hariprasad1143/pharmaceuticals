import {mapGetters} from 'vuex'

export default {
  props: {
    editable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      provinceSearchText: '',
      citySearchText: '',
      freeSearchText: '',
      visibleProvinceAutocomplete: false,
      visibleCityAutocomplete: false,
      selectedProvince: '',
      selectedCity: '',
      storeResult: [],
      searchClicked: false,
      current: 0,
      inputCityAndProvinceErrorMessage: ''
    }
  },
  computed: {
    ...mapGetters(['pickupStore', 'cart', 'stores', 'storeTypes']),
    autocompleteCityList: function () {
      let cities = {}

      for (let index in this.stores) {
        const item = this.stores[index]
        // city
        if (!cities[item.city]) {
          cities[item.city] = []
        }
        if (cities[item.city].indexOf(index) < 0) {
          cities[item.city].push(index)
        }
      }
      return cities
    },
    provinceList: function () {
      let provinces = {}

      for (let index in this.stores) {
        const item = this.stores[index]
        // province
        if (!provinces[item.province]) {
          provinces[item.province] = []
        }
        if (provinces[item.province].indexOf(item.city) < 0) {
          provinces[item.province].push(item.city)
        }
      }
      return provinces
    },
    provinceListSorted: function () {
      return Object.keys(this.provinceList).sort()
    },
    provinceListFiltered: function () {
      this.current = 0
      let result = []

      for (let index in this.provinceListSorted) {
        const item = this.provinceListSorted[index]
        if (this.isInAutocomplete(this.provinceSearchText, item)) {
          result.push(item)
        }
      }
      result.splice(5, result.length)
      return result
    },
    cityListFiltered: function () {
      this.current = 0
      let result = []
      let selectedProvinceArray = this.provinceList[this.selectedProvince]
      for (let index in selectedProvinceArray) {
        const item = selectedProvinceArray[index]
        if (this.isInAutocomplete(this.citySearchText, item)) {
          result.push(item)
        }
      }
      result.splice(5, result.length)
      return result.sort()
    },
    isEmptyProvinceListFiltered: function () {
      return this.provinceListFiltered.length <= 0
    },
    isEmptyCityListFiltered: function () {
      return this.cityListFiltered.length <= 0
    },
    filteredStoresByCity: function () {
      let stores = []
      let storeIndexList = this.autocompleteCityList[this.selectedCity]
      for (let i in storeIndexList) {
        const index = storeIndexList[i]
        if (this.stores[index].active === true) {
          stores.push(this.stores[index])
        }
      }
      return stores
    },
    filteredStoresByFreeText: function () {
      let stores = []
      for (let index in this.filteredStoresByCity) {
        const item = this.filteredStoresByCity[index]
        if (this.isInFilter(item)) {
          stores.push(item)
        }
      }
      return stores
    },
    isEmptyStoreResult: function () {
      return this.storeResult.length === 0
    },
    storeSelectInput: function () {
      return this.$refs.storeSelectInput ||
        { focus: function () { return true },
          blur: function () { return true }}
    },
    availableToEdit: function () {
      if (this.cart.orderIdHash || !this.pickupStore || !this.pickupStore.id) {
        return false
      }
      return true
    },
    visibleFreeSearchTextForm: function () {
      return !!this.selectedCity && this.searchClicked
    }
  },
  watch: {
    visibleProvinceAutocomplete: function (val) {
      if (!val && this.provinceSearchText !== this.selectedProvince) {
        this.clearSelectedProvince()
        this.clearSelectedCity()
      }
    },
    visibleCityAutocomplete: function (val) {
      if (!val && this.citySearchText !== this.selectedCity) {
        this.clearSelectedCity()
      }
    },
    freeSearchText: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.filterStoreByText()
      }
    }
  },
  methods: {
    showProvinceAutocomplete: function () {
      this.visibleProvinceAutocomplete = true
    },
    hideProvinceAutocomplete: function () {
      setTimeout(() => {
        this.visibleProvinceAutocomplete = false
      }, 300)
    },
    showCityAutocomplete: function () {
      this.visibleCityAutocomplete = true
    },
    hideCityAutocomplete: function () {
      setTimeout(() => {
        this.visibleCityAutocomplete = false
      }, 300)
    },
    isInFilter: function (item) {
      if (item.active) {
        // apply match
        let reg = new RegExp(this.freeSearchText, 'i')
        return reg.test(item.name) || reg.test(item.address) || reg.test(item.province) || reg.test(item.city)
      }
      return false
    },
    isInAutocomplete: function (searchText, item) {
      if (searchText.trim()) {
        // apply match
        let reg = new RegExp(searchText, 'i')
        return reg.test(item)
      }
      return false
    },
    selectProvince: function (item) {
      this.selectedProvince = item
      this.provinceSearchText = item
      this.searchClicked = false
      this.clearSelectedCity()
      this.clearFreeTextSearch()
      this.$nextTick(() => {
        this.storeSelectInput.focus()
      })
    },
    selectCity: function (item) {
      this.selectedCity = item
      this.citySearchText = item
      this.storeSelectInput.blur()
      this.doSearchStore()
    },
    clearSelectedProvince: function () {
      this.selectedProvince = ''
      this.provinceSearchText = ''
      this.resetStoreSearch()
    },
    clearSelectedCity: function () {
      this.selectedCity = ''
      this.citySearchText = ''
      this.resetStoreSearch()
    },
    clearFreeTextSearch: function () {
      this.freeSearchText = ''
    },
    resetStoreSearch: function () {
      this.searchClicked = false
      this.storeResult = []
    },
    selectStore: function (item) {
      this.$store.dispatch('setPickupStore', item)
      this.$emit('selectStore')
    },
    validateProvinceAndCity: function () {
      this.inputCityAndProvinceErrorMessage = ''
      if (!this.selectedProvince.length) {
        this.inputCityAndProvinceErrorMessage = this.$t('app.checkout.pickupStore.errors.provinceEmpty')
        return false
      }
      if (!this.selectedCity.length) {
        this.inputCityAndProvinceErrorMessage = this.$t('app.checkout.pickupStore.errors.cityEmpty')
        return false
      }
      return true
    },
    doSearchStore: function () {
      if (this.validateProvinceAndCity()) {
        this.searchClicked = true
        this.storeResult = this.orderStoreResultByTypeSequence(this.filteredStoresByCity)
        this.clearFreeTextSearch()
      }
    },
    filterStoreByText: function () {
      this.storeResult = this.orderStoreResultByTypeSequence(this.filteredStoresByFreeText)
    },
    sortStoreResultByType: function (stores) {
      let result = {}

      for (let index in stores) {
        const item = stores[index]

        if (!result[item.type]) {
          result[item.type] = []
        }
        result[item.type].push(item)
      }
      return result
    },
    sortingStoreAsc: function (stores) {
      if (stores) {
        let result = stores.sort(function (a, b) {
          return a.name === b.name ? 0 : +(a.name > b.name) || -1
        })
        return result
      }
      return []
    },
    orderStoreResultByTypeSequence: function (stores) {
      let sortedStoreResultByTypes = this.sortStoreResultByType(stores)
      let result = []

      this.storeTypes
        .slice(0)
        .sort((a, b) => a.sequence > b.sequence)
        .forEach((item) => {
          result = result.concat(this.sortingStoreAsc(sortedStoreResultByTypes[item.type]))
        })

      return result
    },
    editPickupStore: function () {
      this.$emit('editPickupStore')
    },
    autocompleteUp: function () {
      if (this.current > 0) {
        this.current--
      }
    },
    autocompleteDown: function (autocompleteList) {
      if (this.current < autocompleteList.length - 1) {
        this.current++
      }
    },
    autocompleteEnter: function (autocompleteList, type) {
      if (autocompleteList.length > 0) {
        if (type === 'province') {
          this.selectProvince(autocompleteList[this.current])
        } else {
          this.selectCity(autocompleteList[this.current])
        }
      }
    },
    onHover: function (index) {
      this.current = index
    },
    isActive: function (index) {
      return index === this.current
    },
    highlightText: function (words, query) {
      let pregQuote = (query.trim()).replace(/[^a-zA-Z ]/g, '')
      let iQuery = new RegExp(pregQuote, 'ig')
      return words.toString().replace(iQuery, function (matchedTxt, a, b) {
        return ('<span>' + matchedTxt + '</span>')
      })
    }
  }
}
