import Vue from 'vue'
import router from 'src/router'
import Vuex from 'vuex'
import OrderDetailPage from 'src/pages/OrderDetail'
import i18n from '@common/src/i18n'
import {OrderDetail} from 'mixins/OrderDetail'

const order = {
  orderId: '25000075166',
  cartId: '4535896793804775@samsung.com',
  orderIdHash: 'MVdjQ1hQaXZkNWFkcTJnV1ZhdkVxbVNkV2lmV21Nb04=',
  createdDate: '1503064536173',
  expiredDate: '0',
  status: 'FP',
  customer: {
    name: 'Jmeter QA podsrohyadj',
    email: 'jmeterqa@mailinator.com',
    phoneNumber: '085245841233',
    identityNumber: '4535896793804775',
    identityType: 'KTP'
  },
  pickUpStore: {
    id: '4fabb483-46e9-43de-8f31-1e23354a11ad',
    name: 'Samsung Dev2',
    address: 'Jl. KH Mas Mansur'
  },
  payment: {
    method: 'Transfer via ATM BCA',
    description: 'Transfer via ATM BCA',
    installment: 10,
    details: {}
  },
  items: [
    {
      sku: 'SAD-60001-00006-00001',
      name: 'Samsung Note8 Hitam + VR',
      amount: 14000000,
      quantity: 1
    }
  ],
  adjustments: [
    {
      name: 'Cashback',
      amount: -1
    },
    {
      name: 'SGI Gift',
      promoCode: 'SGI-123',
      amount: 250000
    }
  ],
  amount: 14000000,
  discount: 0,
  paidAmount: 14000000
}

describe('OrderDetailMixin', () => {
  const Constructor = Vue.extend(OrderDetailPage)
  let getters, actions, store, vm
  beforeEach(() => {
    getters = {
      order: state => state.order,
      orderCustomerDetail: state => state.orderCustomerDetail,
      orderPickupStore: state => state.orderPickupStore,
      orderShippingAddress: state => state.orderShippingAddress,
      cmsContent: state => state.cmsContent
    }

    actions = {
      getCmsContent: sinon.stub()
    }

    store = new Vuex.Store({
      state: {
        order: order,
        orderCustomerDetail: {},
        orderPickupStore: {},
        orderShippingAddress: {},
        cmsContent: {}
      },
      getters,
      actions
    })
    vm = new Constructor({
      router,
      store,
      i18n,
      mixins: [OrderDetail]
    })
  })

  it('mount well', () => {
    vm.$mount()
    expect(actions.getCmsContent.called).to.equal(true)
  })

  it('installment', () => {
    let expectedInstallment = 'Rp 1.400.000'
    expect(vm.installment).to.equal(expectedInstallment)
  })

  it('visibleCashbackText true', () => {
    expect(vm.visibleCashbackText).to.be.true
  })

  it('visibleCashbackText false', () => {
    store.state.order = {
      adjustments: [
        {
          name: 'Cashback',
          amount: 1000000
        },
        {
          name: 'SGI Gift',
          promoCode: 'SGI-123',
          amount: 250000
        }
      ]
    }
    expect(vm.visibleCashbackText).to.be.false
  })

  it('isShownStar', () => {
    let expectedResult = [true, false]
    expect(vm.isShownStar).to.deep.equal(expectedResult)
  })

  it('receiptTncContent', () => {
    let result = '<p>Hello World</p>'
    store.state.cmsContent = {'flashsale-receipt-tnc': {value: result}}
    expect(vm.receiptTncContent).to.deep.equal(result)

    store.state.cmsContent = {}
    expect(vm.receiptTncContent).to.deep.equal('')
  })
})
