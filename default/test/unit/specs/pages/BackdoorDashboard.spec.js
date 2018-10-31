import Vue from 'vue'
import Vuex from 'vuex'
import router from 'src/router'
import BackdoorDashboard from 'src/pages/BackdoorDashboard'
import i18n from '@common/src/i18n'
import config from '@common/src/config'
// import XLSX from 'xlsx'

Vue.use(Vuex)

const propsData = {
  detailIsHidden: true,
  customers: config.app.dashboardLabel.customers,
  phones: config.app.dashboardLabel.phones,
  phoneStorages: config.app.dashboardLabel.phone_storages,
  phoneVariants: config.app.dashboardLabel.phone_variants
}

describe('BackdoorDashboard.vue', () => {
  let vm, getters, actions, store
  const Constructor = Vue.extend(BackdoorDashboard, propsData)

  beforeEach(() => {
    getters = {
      backdoorKey: state => state.backdoorKey,
      dashboardSoldOrders: state => state.dashboardSoldOrders,
      dashboardStocks: state => state.dashboardStocks,
      dashboardAdjustmentUsages: state => state.dashboardAdjustmentUsages,
      dashboardCashbackDeposit: state => state.dashboardCashbackDeposit,
      dashboardProducts: state => state.dashboardProducts,
      dashboardPromotions: state => state.dashboardPromotions,
      dashboardGimmicks: state => state.dashboardGimmicks
    }

    actions = {
      getDashboardInfo: sinon.stub(),
      showLoading: sinon.stub(),
      hideLoading: sinon.stub()
    }

    store = new Vuex.Store({
      state: {
        backdoorKey: '',
        dashboardProducts: [
          {
            sku: 'SAS-60001-00004-00001',
            name: 'Samsung Galaxy Note9',
            description: '<p>Midnight Black - 128 GB</p>',
            group: 'Note9-128gb',
            price: 11499000,
            thumbnail: 'assets/images/products/s9-midnight.jpg',
            active: true,
            accessTypeId: 'regular'
          }
        ],
        dashboardGimmicks: [
          {
            sku: 'SAS-60001-00024-00001',
            name: 'TUMI Co-Mold Case in Leather Black',
            price: 0,
            groups: ['s9'],
            image: 'assets/images/accessories/tumi-case-back.jpg',
            logo: 'assets/images/accessories/tumi-logo.png',
            active: true,
            hidden: false,
            sizmek: '1145668'
          }
        ],
        dashboardPromotions: [
          {
            id: '5a6afbaf3d1f663eef70fa53',
            name: 'GLP MANDIRI',
            bank: 'Mandiri',
            paymentMethod: 'MandiriInstallment',
            icon: 'assets/images/banks/mandiri.png',
            accessTypeId: 'regular',
            active: true,
            sequence: 4
          }
        ],
        dashboardSoldOrders: [
          {
            'orderDate': 1519578000000,
            'soldOrderItems': [
              { 'sku': 'SAS-60001-00001-00001', 'soldQty': 1 },
              { 'sku': 'SAS-60001-00002-00001', 'soldQty': 2 },
              { 'sku': 'SAS-60001-00003-00001', 'soldQty': 3 },
              { 'sku': 'SAS-60001-00004-00001', 'soldQty': 4 },
              { 'sku': 'SAS-60001-00005-00001', 'soldQty': 5 },
              { 'sku': 'SAS-60001-00006-00001', 'soldQty': 6 },
              { 'sku': 'SAS-60001-00007-00001', 'soldQty': 7 },
              { 'sku': 'SAS-60001-00008-00001', 'soldQty': 8 },
              { 'sku': 'SAS-60001-00009-00001', 'soldQty': 9 },
              { 'sku': 'SAS-60001-00011-00001', 'soldQty': 11 },
              { 'sku': 'SAS-60001-00012-00001', 'soldQty': 12 },
              { 'sku': 'SAS-60001-00013-00001', 'soldQty': 13 },
              { 'sku': 'SAS-60001-00014-00001', 'soldQty': 14 },
              { 'sku': 'SAS-60001-00015-00001', 'soldQty': 15 },
              { 'sku': 'SAS-60001-00016-00001', 'soldQty': 16 },
              { 'sku': 'SAS-60001-00017-00001', 'soldQty': 17 },
              { 'sku': 'SAS-60001-00018-00001', 'soldQty': 18 },
              { 'sku': 'SAS-60001-00019-00001', 'soldQty': 19 },
              { 'sku': 'SAS-60001-00020-00001', 'soldQty': 20 },
              { 'sku': 'SAS-60001-00021-00001', 'soldQty': 21 },
              { 'sku': 'SAS-60001-00022-00001', 'soldQty': 22 },
              { 'sku': 'SAS-60001-00023-00001', 'soldQty': 23 },
              { 'sku': 'SAS-60001-00024-00001', 'soldQty': 24 },
              { 'sku': 'SAS-60001-00025-00001', 'soldQty': 25 },
              { 'sku': 'SAS-60001-00026-00001', 'soldQty': 26 }
            ]
          },
          {
            'orderDate': 1519664400000,
            'soldOrderItems': [
              { 'sku': 'SAS-60001-00001-00001', 'soldQty': 1 },
              { 'sku': 'SAS-60001-00002-00001', 'soldQty': 2 },
              { 'sku': 'SAS-60001-00003-00001', 'soldQty': 3 },
              { 'sku': 'SAS-60001-00004-00001', 'soldQty': 4 },
              { 'sku': 'SAS-60001-00005-00001', 'soldQty': 5 },
              { 'sku': 'SAS-60001-00006-00001', 'soldQty': 6 },
              { 'sku': 'SAS-60001-00007-00001', 'soldQty': 7 },
              { 'sku': 'SAS-60001-00008-00001', 'soldQty': 8 },
              { 'sku': 'SAS-60001-00009-00001', 'soldQty': 9 },
              { 'sku': 'SAS-60001-00011-00001', 'soldQty': 11 },
              { 'sku': 'SAS-60001-00012-00001', 'soldQty': 12 },
              { 'sku': 'SAS-60001-00013-00001', 'soldQty': 13 },
              { 'sku': 'SAS-60001-00014-00001', 'soldQty': 14 },
              { 'sku': 'SAS-60001-00015-00001', 'soldQty': 15 },
              { 'sku': 'SAS-60001-00016-00001', 'soldQty': 16 },
              { 'sku': 'SAS-60001-00017-00001', 'soldQty': 17 },
              { 'sku': 'SAS-60001-00018-00001', 'soldQty': 18 },
              { 'sku': 'SAS-60001-00019-00001', 'soldQty': 19 },
              { 'sku': 'SAS-60001-00020-00001', 'soldQty': 20 },
              { 'sku': 'SAS-60001-00021-00001', 'soldQty': 21 },
              { 'sku': 'SAS-60001-00022-00001', 'soldQty': 22 },
              { 'sku': 'SAS-60001-00023-00001', 'soldQty': 23 },
              { 'sku': 'SAS-60001-00024-00001', 'soldQty': 24 },
              { 'sku': 'SAS-60001-00025-00001', 'soldQty': 25 },
              { 'sku': 'SAS-60001-00026-00001', 'soldQty': 26 }
            ]
          }
        ],
        dashboardStocks: [
          {
            'sku': 'SAS-60001-00001-00001',
            'stock': 10,
            'total': 20,
            'used': 10,
            'initialStock': 20,
            'soldQty': 10,
            'productName': 'S9 Black'
          },
          {
            'sku': 'SAS-60001-00002-00001',
            'stock': 10,
            'total': 20,
            'used': 10,
            'initialStock': 20,
            'soldQty': 10,
            'productName': 'S9 Blue'
          },
          {
            'sku': 'SAS-60001-00004-00001',
            'stock': 10,
            'total': 20,
            'used': 10,
            'initialStock': 20,
            'soldQty': 10,
            'productName': 'S9 Black'
          },
          {
            'sku': 'SAS-60001-00005-00001',
            'stock': 10,
            'total': 20,
            'used': 10,
            'initialStock': 20,
            'soldQty': 10,
            'productName': 'S9 Blue'
          },
          {
            'sku': 'SAS-60001-00012-00001',
            'stock': 10,
            'total': 20,
            'used': 10,
            'initialStock': 20,
            'soldQty': 10,
            'productName': 'S9+ Black'
          },
          {
            'sku': 'SAS-60001-00008-00001',
            'stock': 10,
            'total': 20,
            'used': 10,
            'initialStock': 20,
            'soldQty': 10,
            'productName': 'S9 Blue'
          },
          {
            'sku': 'SAS-60001-00024-00001',
            'stock': 10,
            'total': 20,
            'used': 10,
            'initialStock': 20,
            'soldQty': 10,
            'productName': 'S9 Tumi'
          }
        ],
        dashboardAdjustmentUsages: [
          {
            'adjustmentId': '5a6afb7f3d1f663eef70f9f3',
            'allocation': 500,
            'additional': 80,
            'totalAllocation': 580,
            'used': 560,
            'redeem': 560,
            'available': 20
          },
          {
            'adjustmentId': '5a6afbaf3d1f663eef70fa53',
            'allocation': 500,
            'additional': 80,
            'totalAllocation': 580,
            'used': 560,
            'redeem': 560,
            'available': 20
          }
        ],
        dashboardCashbackDeposit: 0
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

  it('validate backdoorkey exist', () => {
    const spy = sinon.spy(vm, 'getDashboardData')
    store.state.backdoorKey = 'ABC123'
    vm.validateBackdoorKey()
    expect(spy.called).to.equal(true)
  })

  it('validate backdoorkey not exist', (done) => {
    const spy = sinon.spy(vm, 'getDashboardData')
    store.state.backdoorKey = ''
    vm.validateBackdoorKey()
    expect(spy.called).to.equal(false)
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.backdoor)
      done()
    })
  })

  it('handleSuccessDashboardInfo', () => {
    const response = {body: { data: {products: [1, 2], gimmicks: [3, 4], promotions: [4, 5]} }}
    vm.handleSuccessDashboardInfo(response)
    expect(actions.hideLoading.called).to.equal(true)
  })

  it('handleFailureDashboardInfo', () => {
    vm.handleFailureDashboardInfo()
    expect(actions.hideLoading.called).to.equal(true)
  })

  it('getDashboardData', () => {
    vm.getDashboardData()
    expect(actions.getDashboardInfo.called).to.equal(true)
    expect(actions.showLoading.called).to.equal(true)
  })

  it('computed grandTotalSold', () => {
    expect(vm.grandTotalSold.constructor === Number).to.equal(true)
  })

  it('computed totalSoldOrdersGroupedByPhoneType', () => {
    expect(vm.totalSoldOrdersGroupedByPhoneType.constructor === Object).to.equal(true)
    expect(vm.totalSoldOrdersGroupedByPhoneType.hasOwnProperty('total')).to.equal(true)
  })

  it('computed mapping', () => {
    expect(vm.productsMap.constructor === Object).to.equal(true)
    expect(vm.accessoriesMap.constructor === Object).to.equal(true)
    expect(vm.promotionsMap.constructor === Object).to.equal(true)
  })

  it('computed soldOrdersGrouped', done => {
    expect(vm.soldOrdersGrouped.constructor === Array).to.equal(true)
    vm.$nextTick(() => {
      expect(vm.soldOrdersGrouped[0].hasOwnProperty('orderDate')).to.equal(true)
      vm.customers.forEach(customer => {
        expect(vm.soldOrdersGrouped[0].hasOwnProperty(customer.type)).to.equal(true)
      })
      done()
    })
  })

  it('computed totalSold', done => {
    expect(vm.totalSold.constructor === Object).to.equal(true)
    vm.$nextTick(() => {
      vm.customers.forEach(customer => {
        expect(vm.totalSold.hasOwnProperty(customer.type)).to.equal(true)
      })
      done()
    })
  })

  it('computed soldOrdersGroupedByPhoneType', done => {
    expect(vm.soldOrdersGroupedByPhoneType.constructor === Array).to.equal(true)
    vm.$nextTick(() => {
      expect(vm.soldOrdersGroupedByPhoneType[0].hasOwnProperty('orderDate')).to.equal(true)
      expect(vm.soldOrdersGroupedByPhoneType[0].hasOwnProperty('total')).to.equal(true)
      vm.phones.forEach(phone => {
        expect(vm.soldOrdersGroupedByPhoneType[0].hasOwnProperty(phone.type)).to.equal(true)
      })
      done()
    })
  })

  it('computed soldOrdersGroupedByStorage', done => {
    expect(vm.soldOrdersGroupedByPhoneType.constructor === Array).to.equal(true)
    vm.$nextTick(() => {
      expect(vm.soldOrdersGroupedByStorage[0].hasOwnProperty('orderDate')).to.equal(true)
      vm.customers.forEach(customer => {
        expect(vm.soldOrdersGroupedByStorage[0].hasOwnProperty(customer.type)).to.equal(true)
        vm.phoneStorages.forEach(phone => {
          expect(vm.soldOrdersGroupedByStorage[0][customer.type].hasOwnProperty(phone.type)).to.equal(true)
        })
      })
      done()
    })
  })

  it('computed subTotalSold', done => {
    expect(vm.subTotalSold.constructor === Object).to.equal(true)
    vm.$nextTick(() => {
      vm.customers.forEach(customer => {
        expect(vm.subTotalSold.hasOwnProperty(customer.type)).to.equal(true)
        vm.phones.forEach(phone => {
          expect(vm.subTotalSold[customer.type].hasOwnProperty(phone.type)).to.equal(true)
        })
      })
      done()
    })
  })

  it('computed totalSoldPerStorage', done => {
    expect(vm.totalSoldPerStorage.constructor === Object).to.equal(true)
    vm.$nextTick(() => {
      vm.customers.forEach(customer => {
        expect(vm.totalSoldPerStorage.hasOwnProperty(customer.type)).to.equal(true)
        vm.phoneStorages.forEach(phone => {
          expect(vm.totalSoldPerStorage[customer.type].hasOwnProperty(phone.type)).to.equal(true)
        })
      })
      done()
    })
  })

  it('computed stockPerVariant', done => {
    expect(vm.stockPerVariant.constructor === Object).to.equal(true)
    vm.$nextTick(() => {
      vm.customers.forEach(customer => {
        expect(vm.stockPerVariant.hasOwnProperty(customer.type)).to.equal(true)
        vm.phoneVariants.forEach(phone => {
          expect(vm.stockPerVariant[customer.type].hasOwnProperty(phone.spec)).to.equal(true)
        })
      })
      done()
    })
  })

  it('computed totalStockPerCust', done => {
    expect(vm.totalStockPerCust.constructor === Object).to.equal(true)
    vm.$nextTick(() => {
      vm.customers.forEach(customer => {
        expect(vm.totalStockPerCust.hasOwnProperty(customer.type)).to.equal(true)
      })
      done()
    })
  })

  it('computed adjustmentData', done => {
    expect(vm.adjustmentData.constructor === Array).to.equal(true)
    vm.$nextTick(() => {
      if (vm.adjustmentData[0]) expect(vm.adjustmentData[0].hasOwnProperty('detail')).to.equal(true)
      done()
    })
  })

  it('computed adjustmentDataPerCustomer', done => {
    expect(vm.adjustmentDataPerCustomer.constructor === Object).to.equal(true)
    vm.$nextTick(() => {
      vm.customers.forEach(customer => {
        expect(vm.adjustmentDataPerCustomer[customer.type].length >= 0).to.equal(true)
      })
      done()
    })
  })

  it('computed adjustmentDataPerBank', () => {
    expect(vm.adjustmentDataPerBank.constructor === Object).to.equal(true)
    expect(vm.adjustmentDataPerBank.hasOwnProperty('Mandiri')).to.equal(true)
  })

  it('computed adjustmentsTotal', () => {
    expect(vm.adjustmentsTotal.constructor === Object).to.equal(true)
    expect(vm.adjustmentsTotal.hasOwnProperty('allocation')).to.equal(true)
    expect(vm.adjustmentsTotal.hasOwnProperty('available')).to.equal(true)
    expect(vm.adjustmentsTotal.hasOwnProperty('redeem')).to.equal(true)
    expect(vm.adjustmentsTotal.hasOwnProperty('totalAllocation')).to.equal(true)
    expect(vm.adjustmentsTotal.hasOwnProperty('used')).to.equal(true)
  })

  it('computed adjustmentsTotalPerCustomer', done => {
    expect(vm.adjustmentsTotalPerCustomer.constructor === Object).to.equal(true)
    vm.$nextTick(() => {
      vm.customers.forEach(customer => {
        expect(vm.adjustmentsTotalPerCustomer[customer.type].hasOwnProperty('allocation')).to.equal(true)
        expect(vm.adjustmentsTotalPerCustomer[customer.type].hasOwnProperty('available')).to.equal(true)
        expect(vm.adjustmentsTotalPerCustomer[customer.type].hasOwnProperty('redeem')).to.equal(true)
        expect(vm.adjustmentsTotalPerCustomer[customer.type].hasOwnProperty('totalAllocation')).to.equal(true)
        expect(vm.adjustmentsTotalPerCustomer[customer.type].hasOwnProperty('used')).to.equal(true)
      })
      done()
    })
  })

  it('computed gimmickstock', done => {
    expect(vm.gimmickStock.constructor === Array).to.equal(true)
    vm.$nextTick(() => {
      expect(vm.gimmickStock[0].hasOwnProperty('detail')).to.equal(true)
      done()
    })
  })

  it('calculate time', () => {
    const response = 'Pukul ' + new Date().format('hh:mm') + ' | ' + new Date().format('D MMMM YYYY')
    expect(vm.getCurrentDateTime()).to.equal(response)
  })

  it('filter date', () => {
    const value = 1182139200000
    const response = new Date(value).format('D MMMM YYYY')
    expect(vm.$options.filters.date(value)).to.equal(response)
  })

  // it('generate Excel', () => {
  //   sinon.stub(XLSX.utils, 'book_new')
  //   sinon.stub(XLSX.utils, 'table_to_sheet')
  //   sinon.stub(XLSX.utils, 'book_append_sheet')
  //   sinon.stub(XLSX, 'writeFile')

  //   vm.processSheet()
  //   expect(XLSX.utils.book_new.called).to.equal(true)
  //   expect(XLSX.utils.table_to_sheet.called).to.equal(true)
  //   expect(XLSX.utils.book_append_sheet.called).to.equal(true)
  //   expect(XLSX.writeFile.called).to.equal(true)
  // })
})
