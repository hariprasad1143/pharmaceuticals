import { mapGetters, mapActions } from 'vuex'
import config from '@common/src/config'
// if needed, remove comment import XLSX from 'xlsx'

export default {
  name: 'backdoor-dashboard',
  data: () => {
    return {
      detailIsHidden: true,
      customers: config.app.dashboardLabel.customers,
      phones: config.app.dashboardLabel.phones,
      phoneStorages: config.app.dashboardLabel.phone_storages,
      phoneVariants: config.app.dashboardLabel.phone_variants
    }
  },
  computed: {
    ...mapGetters([
      'backdoorKey',
      'dashboardSoldOrders',
      'dashboardStocks',
      'dashboardAdjustmentUsages',
      'dashboardCashbackDeposit',
      'dashboardProducts',
      'dashboardPromotions',
      'dashboardGimmicks'
    ]),

    /**
     * Count adjustments total
     * @return {Object}
     */
    adjustmentsTotal () {
      return this.dashboardAdjustmentUsages.reduce((a, b) => {
        return {
          allocation: a.allocation + b.allocation,
          additional: a.additional + b.additional,
          totalAllocation: a.totalAllocation + b.totalAllocation,
          used: a.used + b.used,
          redeem: a.redeem + b.redeem,
          available: a.available + b.available
        }
      }, {
        allocation: 0,
        additional: 0,
        totalAllocation: 0,
        used: 0,
        redeem: 0,
        available: 0
      })
    },

    /**
     * Get adjustment data
     * @return {Array}
     */
    adjustmentData () {
      const list = []
      this.dashboardAdjustmentUsages.map(item => {
        const obj = this.promotionsMap[item.adjustmentId]
        if (!obj) return
        const data = Object.assign({}, item)
        data.detail = obj
        list.push(data)
      })
      return list
    },

    /**
     * Adjusment data per customer type
     * @return {Object}
     */
    adjustmentDataPerCustomer () {
      const result = {}
      this.customers.forEach(customer => {
        result[customer.type] = this.adjustmentData.filter(data => data.detail.accessType === customer.type)
      })
      return result
    },

    /**
     * Adjusment data per bank
     * @return {Object}
     */
    adjustmentDataPerBank () {
      const result = {}
      const banks = [...new Set(this.adjustmentData.map(data => data.detail.bank))]
      banks.forEach(bank => {
        result[bank] = this.adjustmentData
          .filter(data => data.detail.bank === bank)
          .reduce((a, b) => {
            return {
              allocation: a.allocation + b.allocation,
              additional: a.additional + b.additional,
              totalAllocation: a.totalAllocation + b.totalAllocation,
              used: a.used + b.used,
              redeem: a.redeem + b.redeem,
              available: a.available + b.available
            }
          }, {
            allocation: 0,
            additional: 0,
            totalAllocation: 0,
            used: 0,
            redeem: 0,
            available: 0
          })
      })
      return result
    },

    /**
     * Count adjustments total per customer type
     * @return {Object}
     */
    adjustmentsTotalPerCustomer () {
      let result = {}
      this.customers.forEach(customer => {
        result[customer.type] = this.adjustmentDataPerCustomer[customer.type].reduce((a, b) => {
          return {
            allocation: a.allocation + b.allocation,
            additional: a.additional + b.additional,
            totalAllocation: a.totalAllocation + b.totalAllocation,
            used: a.used + b.used,
            redeem: a.redeem + b.redeem,
            available: a.available + b.available
          }
        }, {
          allocation: 0,
          additional: 0,
          totalAllocation: 0,
          used: 0,
          redeem: 0,
          available: 0
        })
      })
      return result
    },

    totalSoldPerStorage () {
      const obj = {}
      // populate data per customer type
      this.customers.map(c => {
        const data = {}
        // populate data per phone type
        this.phoneStorages.map(p => {
          const total = this.soldOrdersGroupedByStorage.reduce((a, b) => {
            return a + (b[c.type][p.type] || 0)
          }, 0)
          data[p.type] = total
        })
        obj[c.type] = data
      })
      return obj
    },

    /**
     * Get gimmick stock only
     * @return {Array}
     */
    gimmickStock () {
      const list = []
      this.dashboardStocks.map(item => {
        const acc = this.accessoriesMap[item.sku]
        if (!acc) return
        const data = Object.assign({}, item)
        data.detail = acc
        list.push(data)
      })
      return list
    },

    /**
     * Map products with detail
     * @return {Object}
     */
    productsMap () {
      const configType = config.app.accessType
      return this.dashboardProducts.reduce((m, i) => {
        m[i.sku] = i
        m[i.sku].accessType = Object
          .keys(configType)
          .find(key => configType[key] === m[i.sku].accessTypeId)
        return m
      }, {})
    },

    /**
     * Map accessories with details
     * @return {Object}
     */
    accessoriesMap () {
      return this.dashboardGimmicks.reduce((m, i) => {
        m[i.sku] = i
        return m
      }, {})
    },

    /**
     * Map promotions with details
     * @return {Object}
     */
    promotionsMap () {
      const configType = config.app.accessType
      return this.dashboardPromotions.reduce((m, i) => {
        m[i.id] = i
        m[i.id].accessType = Object
          .keys(configType)
          .find(key => configType[key] === m[i.id].accessTypeId)
        return m
      }, {})
    },

    /**
     * Sold orders grouped by phone and customer type
     * @return {Object}
     */
    soldOrdersGrouped () {
      return this.dashboardSoldOrders.map(order => {
        const obj = {orderDate: order.orderDate}
        // populate data per customer type
        this.customers.map(customer => {
          const data = {}
          // populate data per phone type
          this.phones.map(phone => {
            data[phone.type] = order.soldOrderItems.reduce((a, b) => {
              const product = this.productsMap[b.sku]
              if (
                product &&
                product.accessType === customer.type &&
                phone.tags &&
                phone.tags.indexOf(product.group) >= 0
              ) return a + b.soldQty
              return a
            }, 0)
          })
          obj[customer.type] = data
        })
        return obj
      })
    },

    /**
     * Sold orders grouped by phone type
     * @return {Object}
     */
    soldOrdersGroupedByPhoneType () {
      return this.dashboardSoldOrders.map(order => {
        const obj = {orderDate: order.orderDate}
        // populate data per phone type
        let total = 0
        this.phones.map(phone => {
          const val = order.soldOrderItems.reduce((a, b) => {
            const product = this.productsMap[b.sku]
            if (
              product &&
              phone.tags &&
              phone.tags.indexOf(product.group) >= 0
            ) return a + b.soldQty
            return a
          }, 0)
          total += val
          obj[phone.type] = val
        })
        obj.total = total
        return obj
      })
    },

    /**
     * Total sold orders grouped by phone type
     * @return {Object}
     */
    totalSoldOrdersGroupedByPhoneType () {
      const result = {}
      let total = 0
      this.phones.map(phone => {
        const val = this.soldOrdersGroupedByPhoneType.reduce((a, b) => {
          return a + (b[phone.type] || 0)
        }, 0)
        total += val
        result[phone.type] = val
      })
      result.total = total
      return result
    },

    /**
     * Sold orders grouped by phone storage
     * @return {Object}
     */
    soldOrdersGroupedByStorage () {
      return this.dashboardSoldOrders.map(order => {
        const obj = {orderDate: order.orderDate}
        // populate data per customer type
        this.customers.map(c => {
          const data = {}
          // populate data per phone type
          this.phoneStorages.map(p => {
            data[p.type] = order.soldOrderItems.reduce((a, b) => {
              const product = this.productsMap[b.sku]
              if (!product || product.accessType !== c.type || product.group !== p.type) return a
              return a + b.soldQty
            }, 0)
          })
          obj[c.type] = data
        })
        return obj
      })
    },

    /**
     * Sub total of sold items
     * @return {Object}
     */
    subTotalSold () {
      const obj = {}
      // populate data per customer type
      this.customers.map(c => {
        const data = {}
        // populate data per phone type
        this.phones.map(p => {
          const total = this.soldOrdersGrouped.reduce((a, b) => {
            return a + (b[c.type][p.type] || 0)
          }, 0)
          data[p.type] = total
        })
        obj[c.type] = data
      })
      return obj
    },

    /**
     * Total of sold items
     * @return {Object}
     */
    totalSold () {
      const obj = {}
      // populate data per customer type
      this.customers.map(c => {
        let total = 0
        // populate data per phone type
        this.phones.map(p => {
          total += this.soldOrdersGrouped.reduce((a, b) => {
            return a + (b[c.type][p.type] || 0)
          }, 0)
        })
        obj[c.type] = total
      })
      return obj
    },

    /**
     * Stock of items per variant
     * @return {Object}
     */
    stockPerVariant () {
      const obj = {}
      // populate data per customer type
      this.customers.map(c => {
        const data = {}
        // populate data per phone type
        this.phoneVariants.map(p => {
          data[p.spec] = this.dashboardStocks.reduce((a, b) => {
            const product = this.productsMap[b.sku]
            if (!product) return a
            if (product.group !== p.group || product.description.indexOf(p.spec) < 0) return a
            if (product.accessType !== c.type) return a
            return {
              stock: a.stock + b.stock,
              total: a.total + b.total,
              used: a.used + b.used,
              initialStock: a.initialStock + b.initialStock,
              soldQty: a.soldQty + b.soldQty
            }
          }, {
            stock: 0,
            total: 0,
            used: 0,
            initialStock: 0,
            soldQty: 0
          })
        })
        obj[c.type] = data
      })
      return obj
    },

    /**
     * Total stock of items per customer
     * @return {Object}
     */
    totalStockPerCust () {
      const obj = {}
      // populate data per customer type
      this.customers.map(c => {
        let total = 0
        // populate data per phone type
        this.phoneVariants.map(p => {
          total += this.stockPerVariant[c.type][p.spec].stock || 0
        })
        obj[c.type] = total
      })
      return obj
    },

    /**
     * Total quantity of sold items
     * @return {Number}
     */
    grandTotalSold () {
      return Object.values(this.totalSold).reduce((a, b) => a + b, 0)
    }
  },

  created () {
    this.validateBackdoorKey()
  },

  filters: {
    date (value) {
      return new Date(value).format('D MMMM YYYY')
    }
  },

  methods: {
    ...mapActions(['getDashboardInfo', 'showLoading', 'hideLoading']),

    /**
     * Convert tables to xlsx and download
     */
    processSheet () {
      let tables = document.getElementsByTagName('table')
      let sheet
      let workbook = XLSX.utils.book_new()
      const dt = new Date()
      const fileName = `glpreport_${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}_${dt.getHours()}-${dt.getMinutes()}.xlsx`
      Object.keys(tables).forEach(key => {
        // sheet = XLSX.utils.table_to_sheet(tables[key])
        // XLSX.utils.book_append_sheet(workbook, sheet, `Sheet ${key}`)
      })
      // XLSX.writeFile(workbook, fileName)
    },

    /**
     * Validate and redirect if unauthenticated
     */
    validateBackdoorKey () {
      if (this.backdoorKey) {
        this.getDashboardData()
      } else {
        this.$router.replace(config.app.pages.backdoor)
      }
    },

    /**
     * Fetch dashboard data from API
     */
    getDashboardData () {
      this.showLoading()
      this.getDashboardInfo({
        success: this.handleSuccessDashboardInfo,
        fail: this.handleFailureDashboardInfo,
        key: this.backdoorKey
      })
    },

    /**
     * Handle stuff when HTTP request success
     * @param {Object}
     */
    handleSuccessDashboardInfo (response) {
      this.hideLoading()
    },

    /**
     * Handle stuff when HTTP request fail
     * @param {Object}
     */
    handleFailureDashboardInfo (response) {
      this.hideLoading()
    },

    /**
     * Get current formatted date and time
     * @return {String}
     */
    getCurrentDateTime () {
      return this.$t('app.backdoor.time') + new Date().format('hh:mm') + ' | ' + new Date().format('D MMMM YYYY')
    }
  }
}
