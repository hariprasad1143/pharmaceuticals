import Vue from 'vue'
import router from 'src/router'
import store from '@common/src/store'
import OrderDetail from 'src/pages/OrderDetail'
import config from '@common/src/config'
import PrintedReceipt from '@/components/PrintedReceipt'
import i18n from '@common/src/i18n'

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
    installment: 0,
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
  amount: 14000000,
  discount: 0,
  paidAmount: 14000000
}

describe('OrderDetail.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(OrderDetail)
    vm = new Constructor({
      router,
      store,
      components: {
        PrintedReceipt
      },
      i18n
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })

  it('hashCode', () => {
    vm.$router.push(config.app.pages.order_detail + '/ABCDEFG')
    expect(vm.$route.path).to.equal(config.app.pages.order_detail + '/ABCDEFG')
    expect(vm.hashCode()).to.equal('ABCDEFG')
  })

  it('print invoice', (done) => {
    vm.$store.commit('setOrder', order)
    vm.$router.push(config.app.pages.order_detail)
    vm.$router.push(config.app.pages.order_detail + '/none')
    expect(vm.$route.path).to.equal(config.app.pages.order_detail + '/none')

    vm.$nextTick(function () {
      const content = vm.printInvoice()
      expect(content).to.equal(vm.printArea.$el.innerHTML)
      done()
    })
  })

  it('goToHome', (done) => {
    vm.$store.commit('setOrder', order)
    vm.$router.push(config.app.pages.order_detail)
    vm.$router.push(config.app.pages.order_detail + '/none')
    expect(vm.$route.path).to.equal(config.app.pages.order_detail + '/none')

    // go to home and test
    vm.goToHome()
    vm.$nextTick(() => {
      expect(vm.$route.path).to.equal(config.app.pages.home)
      done()
    })
  })

  it('getInitOrder empty', () => {
    vm.$store.commit('setOrder', {})
    expect(vm.getInitOrder()).to.equal(true)
  })

  it('getInitOrder order exist', () => {
    vm.$store.commit('setOrder', {
      orderId: '20491820491',
      orderIdHash: 'ABCDEFGH',
      createdDate: 14434242342,
      expiredDate: 14434242342,
      status: 'C',
      customerDetail: {
        name: 'Febi',
        email: '',
        phoneNumber: '087654567876',
        identityNumber: '',
        identityType: ''
      },
      pickupStore: {
        id: '2424234434',
        name: '',
        address: ''
      },
      payment: {
        method: '',
        installment: 3
      },
      items: [
        {
          sku: '',
          name: 'Samsung Bla',
          amount: 14000000,
          quantity: 1
        }
      ],
      amount: 14000000,
      discount: 500000,
      paidAmount: 13500000
    })
    expect(vm.getInitOrder()).to.equal(false)
  })

  it('getInitOrder order unpaid', () => {
    vm.$store.commit('setOrder', {
      orderId: '20491820491',
      orderIdHash: 'ABCDEFGH',
      createdDate: 14434242342,
      expiredDate: 14434242342,
      status: 'M',
      customerDetail: {
        name: 'Febi',
        email: '',
        phoneNumber: '087654567876',
        identityNumber: '',
        identityType: ''
      },
      pickupStore: {
        id: '2424234434',
        name: '',
        address: ''
      },
      payment: {
        method: '',
        installment: 3
      },
      items: [
        {
          sku: '',
          name: 'Samsung Bla',
          amount: 14000000,
          quantity: 1
        }
      ],
      amount: 14000000,
      discount: 500000,
      paidAmount: 13500000
    })
    expect(vm.getInitOrder()).to.equal(false)
  })

  it('getInitOrder order cancelled', () => {
    vm.$store.commit('setOrder', {
      orderId: '20491820491',
      orderIdHash: 'ABCDEFGH',
      createdDate: 14434242342,
      expiredDate: 14434242342,
      status: 'X',
      customerDetail: {
        name: 'Febi',
        email: '',
        phoneNumber: '087654567876',
        identityNumber: '',
        identityType: ''
      },
      pickupStore: {
        id: '2424234434',
        name: '',
        address: ''
      },
      payment: {
        method: '',
        installment: 3
      },
      items: [
        {
          sku: '',
          name: 'Samsung Bla',
          amount: 14000000,
          quantity: 1
        }
      ],
      amount: 14000000,
      discount: 500000,
      paidAmount: 13500000
    })
    expect(vm.getInitOrder()).to.equal(false)
  })

  it('failGetOrder', () => {
    const ret = vm.failGetOrder({
      errors: {
        'sku': ['NotBlank']
      }
    })

    expect(ret).to.equal('<div>sku harus diisi</div>')
  })
})
