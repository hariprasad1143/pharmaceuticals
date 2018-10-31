import products from '@common/src/api-mock/data/products'
import gimmicks from '@common/src/api-mock/data/gimmicks'
import promotions from '@common/src/api-mock/data/promotions'

let routes = [
  {
    method: 'POST',
    url: '/backend/flash/common/users/_login-google',
    param_body: ['email', 'accessToken'],
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 500000763,
        username: 'hafiztesting@mailinator.com',
        email: 'hafiztesting@mailinator.com',
        firstName: 'Hafiz',
        lastName: '2',
        phoneNumberVerified: false,
        postPnvMember: false,
        needVerifiedPhoneNumber: true,
        hasRecoveryAccount: false,
        wishlistCount: 110,
        createdAt: 1459758941738
      }
    }
  },
  {
    method: 'POST',
    url: '/backend/flash/common/users/_login-facebook',
    param_body: ['email', 'accessToken'],
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 500000763,
        username: 'hafiztesting@mailinator.com',
        email: 'hafiztesting@mailinator.com',
        firstName: 'Hafiz',
        lastName: '2',
        phoneNumberVerified: false,
        postPnvMember: false,
        needVerifiedPhoneNumber: true,
        hasRecoveryAccount: false,
        wishlistCount: 110,
        createdAt: 1459758941738
      }
    }
  },
  {
    method: 'GET',
    url: '/sqs-service/api/token/getOne?productSKU=XIO-60001-00001-00001',
    response: {
      code: 200,
      status: 'OK',
      data: {
        'token': 'dshja-3221n-31nwq'
      }
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/inventories/internal/_stock?sku=ABC',
    params: ['sku'],
    headers: {
      'Cache-Control': 'no-cache',
      'backdoorKey': 'ABCDEFGH'
    },
    response: {
      code: 200,
      data: [
        {
          productName: 'Samsung Note8 Hitam + VR',
          sku: 'SAD-60001-00006-00001',
          stock: 445
        }
      ],
      errors: {},
      paging: {
        item_per_page: 0,
        page: 0,
        total_item: 0,
        total_page: 0
      },
      status: 'OK'
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/inventories/internal/_stock?sku=ABC&sku=DEF',
    params: ['sku'],
    headers: {
      'Cache-Control': 'no-cache',
      'backdoorKey': 'ABCDEFGH'
    },
    response: {
      code: 200,
      data: [
        {
          productName: 'Samsung Note8 Hitam + VR',
          sku: 'SAD-60001-00006-00001',
          stock: 445
        },
        {
          productName: 'Samsung Note8 Hitam + AKG',
          sku: 'SAD-60001-00006-00002',
          stock: 686
        }
      ],
      errors: {},
      paging: {
        item_per_page: 0,
        page: 0,
        total_item: 0,
        total_page: 0
      },
      status: 'OK'
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/promotions/internal/_stock?promoId=ABC',
    params: ['promoId'],
    headers: {
      'Cache-Control': 'no-cache',
      'backdoorKey': 'ABCDEFGH'
    },
    response: {
      code: 200,
      data: [
        {
          promoId: 'BLIBLIGLP1',
          stockCount: 1
        }
      ],
      errors: {},
      paging: {
        item_per_page: 0,
        page: 0,
        total_item: 0,
        total_page: 0
      },
      status: 'OK'
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/promotions/internal/_stock?promoId=ABC&promoId=DEF',
    params: ['promoId'],
    headers: {
      'Cache-Control': 'no-cache',
      'backdoorKey': 'ABCDEFGH'
    },
    response: {
      code: 200,
      data: [
        {
          promoId: 'BLIBLIGLP1',
          stockCount: 1
        },
        {
          promoId: 'BLIBLIGLP2',
          stockCount: 0
        }
      ],
      errors: {},
      paging: {
        item_per_page: 0,
        page: 0,
        total_item: 0,
        total_page: 0
      },
      status: 'OK'
    }
  },
  {
    method: 'GET',
    url: '/backend/wishlist/dummy',
    response: {
      'result': 'true',
      'resultData': [],
      'errorCode': null,
      'errorDesc': null
    }
  },
  {
    method: 'GET',
    url: '/backend/common/configs/a',
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 'a',
          value: 'true'
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/common/configs',
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 'isVizuryScriptActive',
          value: 'true'
        },
        {
          id: 'isLaunchChatActive',
          value: 'true'
        },
        {
          id: 'getGenevaRecommendationStatus',
          value: 'false'
        }
      ]
    }
  },
  {
    method: 'POST',
    url: '/backend/flashsale/payment/_reserve',
    param_body: ['items', 'phoneNumber', 'email'],
    response: {
      code: 200,
      status: 'OK',
      data: {
        cartId: '2349823084203482309482309'
      }
    }
  },
  {
    method: 'POST',
    url: '/backend/flashsale/orders/_check',
    response: {
      code: 200,
      status: 'OK',
      data: {
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
            sku: 'acc5',
            name: 'Kate Spade New York Wrap Case in Saffiano Black and White',
            description: '',
            price: 0,
            groups: ['s9plus', 's9plus-256gb'],
            image: require('assets/images/accessories/s9-plus-kate-spade-case-back.jpg'),
            logo: require('assets/images/accessories/kate-spade-logo.png'),
            active: true,
            alwaysShown: true,
            tracker: {
              sizmek: '1145670'
            }
          },
          {
            sku: 'reg7',
            name: 'Samsung Galaxy S9+',
            description: 'Midnight Black - 256 GB',
            price: 14499000,
            group: 's9plus-256gb',
            image: require('assets/images/products/s9-plus-midnight-256gb.jpg'),
            active: true,
            tracker: {
              sizmek: '1145666'
            }
          }
        ],
        amount: 14000000,
        discount: 0,
        paidAmount: 14000000,
        shippingAddress: {
          'address': 'Jl. Kebon Melati No.1234 RT.1 RW.10',
          'province': 'DKI Jakarta',
          'city': 'Jakarta Pusat',
          'district': 'Tanah Abang',
          'subdistrict': 'Kebon Melati',
          'postalCode': '11230'
        }
      }
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=ABCDEFG',
    response: {
      code: 200,
      data: {
        cartId: '12345@samsung-gdn.com',
        amount: 18000000,
        createdDate: 1501735172255,
        customer: {
          email: 'sagita@gdn-commerce.com',
          identityNumber: '12345',
          identityType: 'KTP',
          name: 'Sagita',
          phoneNumber: '0823213729283'
        },
        discount: 0,
        errorMessage: 'Mohon periksa kembali detail pembayaran Anda',
        expiredDate: new Date().getTime() + (1000 * 3600),
        items: [
          {
            sku: 'acc5',
            name: 'Kate Spade New York Wrap Case in Saffiano Black and White',
            fullName: 'Kate Spade New York Wrap Case in Saffiano Black and White',
            description: '',
            price: 0,
            groups: ['s9plus', 's9plus-256gb'],
            image: require('assets/images/accessories/s9-plus-kate-spade-case-back.jpg'),
            logo: require('assets/images/accessories/kate-spade-logo.png'),
            active: true,
            alwaysShown: true,
            tracker: {
              sizmek: '1145670'
            }
          },
          {
            sku: 'reg7',
            name: 'Samsung Galaxy S9+',
            fullName: 'Samsung Galaxy S9+ Midnight Black - 256 GB',
            description: 'Midnight Black - 256 GB',
            price: 14499000,
            group: 's9plus-256gb',
            image: require('assets/images/products/s9-plus-midnight-256gb.jpg'),
            active: true,
            tracker: {
              sizmek: '1145666'
            }
          }
        ],
        orderId: '20491820491',
        orderIdHash: 'ABCDEFGH',
        adjustments: [],
        paidAmount: 1675000,
        payment: {
          description: 'Bank BCA',
          details: {
            accountNumber: '',
            bankId: ''
          },
          method: 'VirtualAccountBcaOnline',
          bankName: 'BCA'
        },
        pickUpStore: {
          address: 'Kebon Melati, Tanah Abang No 9',
          id: '6ccefcb5-b67c-4f7f-a7b1-5baf95996ccb',
          name: 'Graha Niaga Thamrin',
          phoneNumber: '021 5232131',
          district: '',
          city: 'Jakarta Barat',
          province: 'DKI Jakarta',
          postalCode: ''
        },
        status: 'C',
        shippingAddress: {
          'address': 'Jl. Kebon Melati No.1234 RT.1 RW.10',
          'province': 'DKI Jakarta',
          'city': 'Jakarta Pusat',
          'district': 'Tanah Abang',
          'subdistrict': 'Kebon Melati',
          'postalCode': '11230'
        }
      },
      errors: {},
      paging: {
        item_per_page: 0,
        page: 0,
        total_item: 0,
        total_page: 0
      },
      status: 'success'
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=ABCDEFGH',
    response: {
      code: 200,
      'data': {
        'storeId': '10001',
        'version': 1,
        'createdDate': 1536168986723,
        'updatedDate': 1536168986723,
        'cartId': 'diana@gdn-commerce.com',
        'customer': {
          'customerId': '27581058',
          'customerAddress': {
            'addressId': 'diana@gdn-commerce.com',
            'country': 'ID',
            'firstName': 'Diana',
            'lastName': 'Chow',
            'email': 'diana@gdn-commerce.com',
            'fullOrLegalName': 'kakakakaka',
            'addressLabel': 'diana@gdn-commerce.com',
            'primary': true,
            'lat': 0,
            'lon': 0,
            'geoLocationProvided': false,
            'addressVerified': false,
            'district': 'iiii'
          },
          'userType': 'R',
          'userName': 'diana@gdn-commerce.com',
          'dateOfBirth': 289161000000,
          'gender': 'M',
          'defaultNotification': 'diana@gdn-commerce.com',
          'defaultBilling': 'diana@gdn-commerce.com',
          'defaultShipping': 'diana@gdn-commerce.com',
          'needVerifiedPhoneNumber': false,
          'phoneNumberVerified': true
        },
        'ipAddress': 'string',
        'cartItems': [
          {
            'itemSku': 'SKU-123',
            'itemDetail': {
              'itemSku': 'SKU-123',
              'itemName': 'Xiaomi'
            },
            'orderItemId': '13',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 100000,
            'total': 100000,
            'stockLabel': 13
          }
        ],
        'totalShipping': 0,
        'totalOrder': 100000,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '12',
          'paymentMethod': 'HSBCCreditCard',
          'amount': 100000,
          'extendedData': {
            'PROMO_CAMPAIGN_ID': null
          },
          'paymentDate': 1536168853788,
          'description': 'HSBC Kartu Kredit',
          'expiredTimeInSecond': 4200,
          'expiredTimeDisplayCustomerInSecond': 3000,
          'tenor': 0,
          'orderHash': '88af59c1ca0caa7cd603504f32cb89b9a598e6b5b4aaec5aae24739c3d8ed8c5',
          'orderExpirationDisplayCustomer': 1536255265300,
          'paymentOrderId': '60003164159',
          'installment': false
        },
        'orderId': '12',
        'orderDate': 1536168865300,
        'orderStatus': 'C'
      },
      // errors: { 'ORDER_NOT_FOUND': [ 'order details not found' ] },
      paging: {
        item_per_page: 0,
        page: 0,
        total_item: 0,
        total_page: 0
      },
      status: 'success'
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=ABCDEFGHI',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536345252770,
        'updatedDate': 1536345294870,
        'cartId': 'arpitha.r@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'arpitha.r@mailinator.com',
            'streetAddress1': 'address is mandatory',
            'district': 'Menteng',
            'subDistrict': 'Menteng',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10310',
            'country': 'ID',
            'firstName': 'Arp',
            'lastName': '.',
            'fullOrLegalName': 'Arp .',
            'phoneNumber': '085813869247',
            'email': 'arpitha.r@mailinator.com',
            'addressLabel': 'arpitha.r@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'arpitha.r@mailinator.com',
          'dateOfBirth': 573066000000,
          'gender': 'F',
          'defaultNotification': 'arpitha.r@mailinator.com',
          'defaultBilling': 'arpitha.r@mailinator.com',
          'defaultShipping': 'arpitha.r@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': true,
          'needVerifiedPhoneNumber': false
        },
        'ipAddress': 'string',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-789',
            'itemDetail': {
              'itemSku': 'SKU-123-456-789',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'lateFulfillment': false,
              'installationRequired': false
            },
            'orderItemId': '21',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1249000.0,
            'total': 1249000.0,
            'stockLabel': 144,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-redmi-note-3-argo_full03.jpg',
            'description': 'Black'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1249000.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '21',
          'paymentMethod': 'UOBCreditCard',
          'amount': 1249000.0,
          'extendedData': {
            'BANK': 'bca',
            'TRANSACTION_NO': '60003164423-1536345267375',
            'PROMO_CAMPAIGN_ID': 'campaign_id',
            'STATUS_CODE': '200',
            'CC_TRANSACTION_NUMBER': '60003164423-1536345267375',
            'GROSS_AMOUNT': '1249000.00',
            'MASKED_CARD': '481111-1114',
            'TRANSACTION_STATUS': 'capture',
            'PAYMENT_TYPE': 'credit_card',
            'CC_SECURE_LEVEL_AUTH': '05',
            'SIGNATURE_KEY': '7097ef6b9332696911ddab3a81ac68f7401d2a3840cc3d3271523092b83a46cda18ed9fc045aa77b09d1563b62ae13032df8311a72e97f2d91b9d3ef04789da3',
            'TRANSACTION_TIME': '2018-09-08 01:34:52',
            'CC_AUTHORIZATION_CODE': '1536345292996',
            'TRANSACTION_ID': '202f23b3-b327-4108-8ac1-05f3a697bcdf',
            'STATUS_MESSAGE': 'Success, transaction is found',
            'FRAUD_STATUS': 'accept'
          },
          'paymentDate': 1536345294869,
          'description': 'UOB Kartu Kredit',
          'expiredTimeInSecond': 4200,
          'expiredTimeDisplayCustomerInSecond': 3000,
          'tenor': 0,
          'orderHash': 'e5b031cd334b27af5943cfac664f078391eb4d04fc27400001a8d231a6b4282a',
          'orderExpirationDisplayCustomer': 1536431652393,
          'paymentOrderId': '60003164423',
          'installment': false
        },
        'orderId': '51',
        'orderDate': 1536345252393,
        'orderStatus': 'C',
        'publishedToXOrder': false
      }
    }
  },
  { // order history
    method: 'GET',
    url: '/backend/flash/common/order/pending',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': [{
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536352692327,
        'updatedDate': 1536352733782,
        'cartId': 'mm30@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'mm30@mailinator.com',
            'streetAddress1': 'test street1',
            'streetAddress2': 'test street 2',
            'district': 'sdfsdf',
            'subDistrict': 'subdistrict',
            'city': 'string',
            'state': 'string',
            'postalCode': '7813',
            'country': 'ID',
            'firstName': 'jfjff',
            'lastName': 'ff',
            'fullOrLegalName': 'test pranav',
            'phoneNumber': '085765160852',
            'email': 'mm30@mailinator.com',
            'addressLabel': 'mm30@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'mm30@mailinator.com',
          'dateOfBirth': 1485882000000,
          'gender': 'M',
          'defaultNotification': 'mm30@mailinator.com',
          'defaultBilling': 'mm30@mailinator.com',
          'defaultShipping': 'mm30@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': true,
          'needVerifiedPhoneNumber': false
        },
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'lateFulfillment': false,
              'installationRequired': false
            },
            'orderItemId': '33',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 523,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '33',
          'paymentMethod': 'AlfaGroup',
          'amount': 1349999.0,
          'extendedData': {
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '500553945574',
            'PAYMENT_ACTION': 'NORMAL',
            'orderId': '63',
            'PROMO_CAMPAIGN_ID': 'campaign_id',
            'updateOrder': 'true',
            'BANK_CODE': '987',
            'blibliOrderId': '60003164435',
            'VAID': '500553945574'
          },
          'paymentStatus': 'PENDING',
          'paymentDate': 1536352691812,
          'description': 'ATM Bersama',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'virtualAccountNumber': '500553945574',
          'tenor': 0,
          'orderHash': '1b70191a4cff8b2372136fc6e6846a0be48bde7352dcba8686373d72a495e6e8',
          'orderExpirationDisplayCustomer': 1536439091823,
          'paymentOrderId': '60003164435',
          'installment': false
        },
        'orderId': '666',
        'orderDate': 1536352691823,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }]
    }
  },

  // atm bersama
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=1234',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536352692327,
        'updatedDate': 1536352733782,
        'cartId': 'mm30@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'mm30@mailinator.com',
            'streetAddress1': 'test street1',
            'streetAddress2': 'test street 2',
            'district': 'sdfsdf',
            'subDistrict': 'subdistrict',
            'city': 'string',
            'state': 'string',
            'postalCode': '7813',
            'country': 'ID',
            'firstName': 'jfjff',
            'lastName': 'ff',
            'fullOrLegalName': 'test pranav',
            'phoneNumber': '085765160852',
            'email': 'mm30@mailinator.com',
            'addressLabel': 'mm30@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'mm30@mailinator.com',
          'dateOfBirth': 1485882000000,
          'gender': 'M',
          'defaultNotification': 'mm30@mailinator.com',
          'defaultBilling': 'mm30@mailinator.com',
          'defaultShipping': 'mm30@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': true,
          'needVerifiedPhoneNumber': false
        },
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'lateFulfillment': false,
              'installationRequired': false
            },
            'orderItemId': '33',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 523,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '33',
          'paymentMethod': 'AtmBersama',
          'amount': 1349999.0,
          'extendedData': {
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '500553945574',
            'PAYMENT_ACTION': 'NORMAL',
            'orderId': '63',
            'PROMO_CAMPAIGN_ID': 'campaign_id',
            'updateOrder': 'true',
            'BANK_CODE': '987',
            'blibliOrderId': '60003164435',
            'VAID': '500553945574'
          },
          'paymentStatus': 'VALID',
          'paymentDate': 1536352691812,
          'description': 'ATM Bersama',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'virtualAccountNumber': '500553945574',
          'tenor': 0,
          'orderHash': '1b70191a4cff8b2372136fc6e6846a0be48bde7352dcba8686373d72a495e6e8',
          'orderExpirationDisplayCustomer': 1536439091823,
          'paymentOrderId': '60003164435',
          'installment': false
        },
        'orderId': '63',
        'orderDate': 1536352691823,
        'orderStatus': 'C',
        'publishedToXOrder': false
      }
    }
  },

  // failed
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=666',
    response:
    {'code': 200,
      'status': 'OK',
      'data': {'storeId': '10001',
        'version': 12,
        'createdDate': 1536921741748,
        'updatedDate': 1536922973109,
        'cartId': 'shush1_uata@mailinator.com',
        'customer': {'customerId': '500015564',
          'customerAddress':

            {'addressId': 'shush1_uata@mailinator.com', 'streetAddress1': 'ryu rtyuio ytuioukj fghjkhgf fghjgf', 'district': 'Gambir', 'subDistrict': 'Gambir', 'city': 'Kota Jakarta Pusat', 'state': 'DKI Jakarta', 'postalCode': '10110', 'country': 'ID', 'firstName': 'shush', 'lastName': '.', 'fullOrLegalName': 'shush .', 'phoneNumber': '088998899889', 'email': 'shush1_uata@mailinator.com', 'addressLabel': 'shush1_uata@mailinator.com', 'primary': true, 'lat': 0.0, 'lon': 0.0, 'geoLocationProvided': false, 'addressVerified': false},
          'userType': 'R',
          'userName': 'shush1_uata@mailinator.com',
          'dateOfBirth': 1310058000000,
          'gender': 'F',
          'defaultNotification': 'shush1_uata@mailinator.com',
          'defaultBilling': 'shush1_uata@mailinator.com',
          'defaultShipping': 'shush1_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': true,
          'needVerifiedPhoneNumber': false},
        'ipAddress': '10.255.1.117',
        'cartItems': [{'itemSku': 'XIO-60005-00003-00001',
          'itemDetail':

            {'itemSku': 'XIO-60005-00003-00001', 'itemName': 'Xiaomi REDMI 6A Gold 32GB'},
          'orderItemId': '983',
          'quantity': 1,
          'allocatedQuantity': 1,
          'price': 999000.0,
          'total': 999000.0,
          'stockLabel': 265,
          'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-0405318/xiaomi_xiaomi-redmi-6a-gold-32gb_full01.jpg',
          'description': 'Gold'}],
        'totalShipping': 0.0,
        'totalOrder': 999000.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {'paymentId': '983',
          'paymentMethod': 'AlfaGroup',
          'amount': 999000.0,
          'extendedData':

            {'CARD_NO': '555163**7817', 'errorType': 'Scrubbed', 'PROMO_CAMPAIGN_ID': 'xiaomi-b', 'errorMessage': 'Mohon maaf, transaksi Anda saat ini belum berhasil. Silakan hubungi bank penerbit kartu kredit Anda atau Customer Care Blibli.com melalui email customer.care@blibli.com atau telepon 0804-1-871-871.', 'errorCode': 'General message for all declined/scrubbed orders', 'CC_TRANSACTION_NUMBER': '60003165479-1536922945756', 'paymentType': 'SpeedOrder', 'CC_SCRUB_CODE': '61002', 'CC_SCRUB_MESSAGE': 'SOML: Issuer not allowed', 'CC_TRANSACTION_SCRUB_CODE': '61002', 'CC_TRANSACTION_SCRUB_MESSAGE': 'SOML: Issuer not allowed', 'TRANSACTION_ID': '6D7C6470-E383-D6D1-108ACF8DC6B9D869', 'SPEEDORDER_SERVICE_VERSION': '1.2', 'CC_TRANSACTION_TYPE': 'SALE'},
          'paymentDate': 1536922943673,
          'description': 'AlfaGroup',
          'expiredTimeInSecond': 4200,
          'expiredTimeDisplayCustomerInSecond': 3000,
          'orderExpirationDisplayCustomer': 1537138893000,
          'tenor': 0,
          'orderHash': 'aacd7c253dc2c12124df5065ad3308746a235e6e58a855d8f672ab56aa27fa71',
          'paymentOrderId': '60003165479',
          'paymentStatus': 'INVALID',
          'validationCode': 'General message for all declined/scrubbed orders',
          'validationMessage': 'Mohon maaf, transaksi Anda saat ini belum berhasil. Silakan hubungi bank penerbit kartu kredit Anda atau Customer Care Blibli.com melalui email customer.care@blibli.com atau telepon 0804-1-871-871.',
          'installment': false},
        'orderId': '1013',
        'orderDate': 1536921741599,
        'orderStatus': 'M',
        'publishedToXOrder': false}}
  },

  // // failed not found
  // {
  //   method: 'GET',
  //   url: '/backend/flash/common/order?orderId=666',
  //   response: {'code': 200, 'status': 'OK', 'errors': {'ORDER_NOT_FOUND': ['order details not found']}}
  // },

  // bri
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=BRIVA',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536409187403,
        'updatedDate': 1536409190392,
        'cartId': 'shush_uata@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'shush_uata@mailinator.com',
            'streetAddress1': 'ertyui uyioiu yuioiuy yuioiuy yuioiu',
            'district': 'Gambir',
            'subDistrict': 'Gambir',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10110',
            'country': 'ID',
            'firstName': 'Shush',
            'lastName': '.',
            'fullOrLegalName': 'Shush .',
            'phoneNumber': '0876543223456',
            'email': 'shush_uata@mailinator.com',
            'addressLabel': 'shush_uata@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'shush_uata@mailinator.com',
          'dateOfBirth': 1404666000000,
          'gender': 'F',
          'defaultNotification': 'shush_uata@mailinator.com',
          'defaultBilling': 'shush_uata@mailinator.com',
          'defaultShipping': 'shush_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': false,
          'needVerifiedPhoneNumber': true
        },
        'ipAddress': '10.255.1.117',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'installationRequired': false,
              'lateFulfillment': false
            },
            'orderItemId': '187',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 673,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '187',
          'paymentMethod': 'BRIVA',
          'amount': 1349999.0,
          'orderExpirationDisplayCustomer': 1536255265300,
          'extendedData': {
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '2010160003164597',
            'orderId': '217',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': 'true',
            'blibliOrderId': '60003164597'
          },
          'paymentDate': 1536409187126,
          'description': 'Bank BRI',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'virtualAccountNumber': '2010160003164597',
          'tenor': 0,
          'orderHash': '65d1655a80f42328e65c9d4bfb0feba78f8ad36d28a0dfa72863a1817f2f56dd',
          'paymentOrderId': '60003164597',
          'installment': false
        },
        'orderId': '217',
        'orderDate': 1536409187128,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }
    }
  },

  // bni
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=BNIVA',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536409187403,
        'updatedDate': 1536409190392,
        'cartId': 'shush_uata@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'shush_uata@mailinator.com',
            'streetAddress1': 'ertyui uyioiu yuioiuy yuioiuy yuioiu',
            'district': 'Gambir',
            'subDistrict': 'Gambir',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10110',
            'country': 'ID',
            'firstName': 'Shush',
            'lastName': '.',
            'fullOrLegalName': 'Shush .',
            'phoneNumber': '0876543223456',
            'email': 'shush_uata@mailinator.com',
            'addressLabel': 'shush_uata@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'shush_uata@mailinator.com',
          'dateOfBirth': 1404666000000,
          'gender': 'F',
          'defaultNotification': 'shush_uata@mailinator.com',
          'defaultBilling': 'shush_uata@mailinator.com',
          'defaultShipping': 'shush_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': false,
          'needVerifiedPhoneNumber': true
        },
        'ipAddress': '10.255.1.117',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'installationRequired': false,
              'lateFulfillment': false
            },
            'orderItemId': '187',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 673,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '187',
          'paymentMethod': 'BNIVA',
          'amount': 1349999.0,
          'orderExpirationDisplayCustomer': 1536255265300,
          'extendedData': {
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '2010160003164597',
            'orderId': '217',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': 'true',
            'blibliOrderId': '60003164597'
          },
          'paymentDate': 1536409187126,
          'description': 'Bank BRI',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'virtualAccountNumber': '2010160003164597',
          'tenor': 0,
          'orderHash': '65d1655a80f42328e65c9d4bfb0feba78f8ad36d28a0dfa72863a1817f2f56dd',
          'paymentOrderId': '60003164597',
          'installment': false
        },
        'orderId': '217',
        'orderDate': 1536409187128,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }
    }
  },

  // danamon
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=DanamonVA',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536409187403,
        'updatedDate': 1536409190392,
        'cartId': 'shush_uata@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'shush_uata@mailinator.com',
            'streetAddress1': 'ertyui uyioiu yuioiuy yuioiuy yuioiu',
            'district': 'Gambir',
            'subDistrict': 'Gambir',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10110',
            'country': 'ID',
            'firstName': 'Shush',
            'lastName': '.',
            'fullOrLegalName': 'Shush .',
            'phoneNumber': '0876543223456',
            'email': 'shush_uata@mailinator.com',
            'addressLabel': 'shush_uata@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'shush_uata@mailinator.com',
          'dateOfBirth': 1404666000000,
          'gender': 'F',
          'defaultNotification': 'shush_uata@mailinator.com',
          'defaultBilling': 'shush_uata@mailinator.com',
          'defaultShipping': 'shush_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': false,
          'needVerifiedPhoneNumber': true
        },
        'ipAddress': '10.255.1.117',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'installationRequired': false,
              'lateFulfillment': false
            },
            'orderItemId': '187',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 673,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '187',
          'paymentMethod': 'DanamonVA',
          'amount': 1349999.0,
          'orderExpirationDisplayCustomer': 1536255265300,
          'extendedData': {
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '2010160003164597',
            'orderId': '217',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': 'true',
            'blibliOrderId': '60003164597'
          },
          'paymentDate': 1536409187126,
          'description': 'Bank BRI',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'virtualAccountNumber': '2010160003164597',
          'tenor': 0,
          'orderHash': '65d1655a80f42328e65c9d4bfb0feba78f8ad36d28a0dfa72863a1817f2f56dd',
          'paymentOrderId': '60003164597',
          'installment': false
        },
        'orderId': '217',
        'orderDate': 1536409187128,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }
    }
  },
  // klikbca
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=KlikBCA',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536409187403,
        'updatedDate': 1536409190392,
        'cartId': 'shush_uata@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'shush_uata@mailinator.com',
            'streetAddress1': 'ertyui uyioiu yuioiuy yuioiuy yuioiu',
            'district': 'Gambir',
            'subDistrict': 'Gambir',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10110',
            'country': 'ID',
            'firstName': 'Shush',
            'lastName': '.',
            'fullOrLegalName': 'Shush .',
            'phoneNumber': '0876543223456',
            'email': 'shush_uata@mailinator.com',
            'addressLabel': 'shush_uata@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'shush_uata@mailinator.com',
          'dateOfBirth': 1404666000000,
          'gender': 'F',
          'defaultNotification': 'shush_uata@mailinator.com',
          'defaultBilling': 'shush_uata@mailinator.com',
          'defaultShipping': 'shush_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': false,
          'needVerifiedPhoneNumber': true
        },
        'ipAddress': '10.255.1.117',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'installationRequired': false,
              'lateFulfillment': false
            },
            'orderItemId': '187',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 673,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '187',
          'paymentMethod': 'KlikBCA',
          'amount': 1349999.0,
          'orderExpirationDisplayCustomer': 1536255265300,
          'extendedData': {
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '2010160003164597',
            'KLIK_BCA_USER_ID': 'ichacha',
            'orderId': '217',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': 'true',
            'blibliOrderId': '60003164597'
          },
          'paymentDate': 1536409187126,
          'description': 'Bank BRI',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'tenor': 0,
          'orderHash': '65d1655a80f42328e65c9d4bfb0feba78f8ad36d28a0dfa72863a1817f2f56dd',
          'paymentOrderId': '60003164597',
          'installment': false
        },
        'orderId': '217',
        'orderDate': 1536409187128,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }
    }
  },
  // uob
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=UOBInstallment',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536409187403,
        'updatedDate': 1536409190392,
        'cartId': 'shush_uata@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'shush_uata@mailinator.com',
            'streetAddress1': 'ertyui uyioiu yuioiuy yuioiuy yuioiu',
            'district': 'Gambir',
            'subDistrict': 'Gambir',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10110',
            'country': 'ID',
            'firstName': 'Shush',
            'lastName': '.',
            'fullOrLegalName': 'Shush .',
            'phoneNumber': '0876543223456',
            'email': 'shush_uata@mailinator.com',
            'addressLabel': 'shush_uata@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'shush_uata@mailinator.com',
          'dateOfBirth': 1404666000000,
          'gender': 'F',
          'defaultNotification': 'shush_uata@mailinator.com',
          'defaultBilling': 'shush_uata@mailinator.com',
          'defaultShipping': 'shush_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': false,
          'needVerifiedPhoneNumber': true
        },
        'ipAddress': '10.255.1.117',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'installationRequired': false,
              'lateFulfillment': false
            },
            'orderItemId': '187',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 673,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '1230',
          'paymentMethod': 'UOBInstallment',
          'amount': 999000.0,
          'extendedData': {
            'CARD_NO': '557781**0004',
            'CC_CARD_TYPE': 'MC',
            'CC_RECEIPT_NUMBER': '826014279254',
            'CC_ACQUIRER_CODE': '2070001433',
            'CC_SECURE_LEVEL_AUTH': '05',
            'CC_BATCH_NUMBER': '20180917',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'CC_AUTHORIZATION_CODE': '279254',
            'CC_ACQUIRER_RESPONSE_CODE': '0',
            'CC_TRANSACTION_NUMBER': '2070001433',
            'TRANSACTION_ID': 'FAC57E72-B3DE-351F-CB9A7D9FD50530BB',
            'CC_TRANSACTION_TYPE': 'SALE'
          },
          'paymentDate': 1537160001120,
          'description': 'UOB Kartu Kredit.',
          'expiredTimeInSecond': 4200,
          'expiredTimeDisplayCustomerInSecond': 3000,
          'orderExpirationDisplayCustomer': 1537162977148,
          'tenor': 6,
          'orderHash': '654808c5c73cac7e58c9c6cfac2f1abf016b3783d4c2551873874511c70a256a',
          'paymentOrderId': '60003165744',
          'paymentStatus': 'VALID',
          'validationCode': '',
          'validationMessage': '',
          'installment': true
        },
        'orderId': '217',
        'orderDate': 1536409187128,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }
    }
  },
  // atm bca
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=VirtualAccountBcaOnline',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536409187403,
        'updatedDate': 1536409190392,
        'cartId': 'shush_uata@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'shush_uata@mailinator.com',
            'streetAddress1': 'ertyui uyioiu yuioiuy yuioiuy yuioiu',
            'district': 'Gambir',
            'subDistrict': 'Gambir',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10110',
            'country': 'ID',
            'firstName': 'Shush',
            'lastName': '.',
            'fullOrLegalName': 'Shush .',
            'phoneNumber': '0876543223456',
            'email': 'shush_uata@mailinator.com',
            'addressLabel': 'shush_uata@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'shush_uata@mailinator.com',
          'dateOfBirth': 1404666000000,
          'gender': 'F',
          'defaultNotification': 'shush_uata@mailinator.com',
          'defaultBilling': 'shush_uata@mailinator.com',
          'defaultShipping': 'shush_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': false,
          'needVerifiedPhoneNumber': true
        },
        'ipAddress': '10.255.1.117',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'installationRequired': false,
              'lateFulfillment': false
            },
            'orderItemId': '187',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 673,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '187',
          'paymentMethod': 'VirtualAccountBcaOnline',
          'amount': 1349999.0,
          'orderExpirationDisplayCustomer': 1536255265300,
          'extendedData': {
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '2010160003164597',
            'KLIK_BCA_USER_ID': 'ichacha',
            'orderId': '217',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': 'true',
            'blibliOrderId': '60003164597'
          },
          'paymentDate': 1536409187126,
          'virtualAccountNumber': '500553945574',
          'description': 'Bank BRI',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'tenor': 0,
          'orderHash': '65d1655a80f42328e65c9d4bfb0feba78f8ad36d28a0dfa72863a1817f2f56dd',
          'paymentOrderId': '60003164597',
          'installment': false
        },
        'orderId': '217',
        'orderDate': 1536409187128,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }
    }
  },

  // mandiri bill payment
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=MandiriBillPayment',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536409187403,
        'updatedDate': 1536409190392,
        'cartId': 'shush_uata@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'shush_uata@mailinator.com',
            'streetAddress1': 'ertyui uyioiu yuioiuy yuioiuy yuioiu',
            'district': 'Gambir',
            'subDistrict': 'Gambir',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10110',
            'country': 'ID',
            'firstName': 'Shush',
            'lastName': '.',
            'fullOrLegalName': 'Shush .',
            'phoneNumber': '0876543223456',
            'email': 'shush_uata@mailinator.com',
            'addressLabel': 'shush_uata@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'shush_uata@mailinator.com',
          'dateOfBirth': 1404666000000,
          'gender': 'F',
          'defaultNotification': 'shush_uata@mailinator.com',
          'defaultBilling': 'shush_uata@mailinator.com',
          'defaultShipping': 'shush_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': false,
          'needVerifiedPhoneNumber': true
        },
        'ipAddress': '10.255.1.117',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'installationRequired': false,
              'lateFulfillment': false
            },
            'orderItemId': '187',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 673,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '187',
          'paymentMethod': 'MandiriBillPayment',
          'amount': 1349999.0,
          'orderExpirationDisplayCustomer': 1536255265300,
          'extendedData': {
            'BILLER_CODE': '111',
            'BILL_KEY': '848484',
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '2010160003164597',
            'KLIK_BCA_USER_ID': 'ichacha',
            'orderId': '217',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': 'true',
            'blibliOrderId': '60003164597'
          },
          'paymentDate': 1536409187126,
          'virtualAccountNumber': '500553945574',
          'description': 'Bank BRI',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'tenor': 0,
          'orderHash': '65d1655a80f42328e65c9d4bfb0feba78f8ad36d28a0dfa72863a1817f2f56dd',
          'paymentOrderId': '60003164597',
          'installment': false
        },
        'orderId': '217',
        'orderDate': 1536409187128,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }
    }
  },

  // indomaret
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=111',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536409187403,
        'updatedDate': 1536409190392,
        'cartId': 'shush_uata@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'shush_uata@mailinator.com',
            'streetAddress1': 'ertyui uyioiu yuioiuy yuioiuy yuioiu',
            'district': 'Gambir',
            'subDistrict': 'Gambir',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10110',
            'country': 'ID',
            'firstName': 'Shush',
            'lastName': '.',
            'fullOrLegalName': 'Shush .',
            'phoneNumber': '0876543223456',
            'email': 'shush_uata@mailinator.com',
            'addressLabel': 'shush_uata@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'shush_uata@mailinator.com',
          'dateOfBirth': 1404666000000,
          'gender': 'F',
          'defaultNotification': 'shush_uata@mailinator.com',
          'defaultBilling': 'shush_uata@mailinator.com',
          'defaultShipping': 'shush_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': false,
          'needVerifiedPhoneNumber': true
        },
        'ipAddress': '10.255.1.117',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'installationRequired': false,
              'lateFulfillment': false
            },
            'orderItemId': '187',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 673,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '187',
          'paymentMethod': 'Indomaret',
          'amount': 1349999.0,
          'orderExpirationDisplayCustomer': 1536255265300,
          'extendedData': {
            'BANK_CODE': '111',
            'BILL_KEY': '848484',
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '2010160003164597',
            'KLIK_BCA_USER_ID': 'ichacha',
            'orderId': '217',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': 'true',
            'blibliOrderId': '60003164597'
          },
          'paymentDate': 1536409187126,
          'virtualAccountNumber': '500553945574',
          'description': 'Bank BRI',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'tenor': 0,
          'orderHash': '65d1655a80f42328e65c9d4bfb0feba78f8ad36d28a0dfa72863a1817f2f56dd',
          'paymentOrderId': '60003164597',
          'installment': false
        },
        'orderId': '217',
        'orderDate': 1536409187128,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }
    }
  },

  // alfamart
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=1023',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536409187403,
        'updatedDate': 1536409190392,
        'cartId': 'shush_uata@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'shush_uata@mailinator.com',
            'streetAddress1': 'ertyui uyioiu yuioiuy yuioiuy yuioiu',
            'district': 'Gambir',
            'subDistrict': 'Gambir',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10110',
            'country': 'ID',
            'firstName': 'Shush',
            'lastName': '.',
            'fullOrLegalName': 'Shush .',
            'phoneNumber': '0876543223456',
            'email': 'shush_uata@mailinator.com',
            'addressLabel': 'shush_uata@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'shush_uata@mailinator.com',
          'dateOfBirth': 1404666000000,
          'gender': 'F',
          'defaultNotification': 'shush_uata@mailinator.com',
          'defaultBilling': 'shush_uata@mailinator.com',
          'defaultShipping': 'shush_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': false,
          'needVerifiedPhoneNumber': true
        },
        'ipAddress': '10.255.1.117',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'installationRequired': false,
              'lateFulfillment': false
            },
            'orderItemId': '187',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 673,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '187',
          'paymentMethod': 'AlfaGroup',
          'amount': 1349999.0,
          'orderExpirationDisplayCustomer': 1536255265300,
          'extendedData': {
            'BANK_CODE': '111',
            'BILL_KEY': '848484',
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '2010160003164597',
            'KLIK_BCA_USER_ID': 'ichacha',
            'orderId': '217',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': 'true',
            'blibliOrderId': '60003164597'
          },
          'paymentDate': 1536409187126,
          'virtualAccountNumber': '500553945574',
          'description': 'Bank BRI',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'tenor': 0,
          'orderHash': '65d1655a80f42328e65c9d4bfb0feba78f8ad36d28a0dfa72863a1817f2f56dd',
          'paymentOrderId': '60003164597',
          'installment': false
        },
        'orderId': '217',
        'orderDate': 1536409187128,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }
    }
  },

  // waiting
  {
    method: 'GET',
    url: '/backend/flash/common/order?orderId=000',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 2,
        'createdDate': 1536409187403,
        'updatedDate': 1536409190392,
        'cartId': 'shush_uata@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'shush_uata@mailinator.com',
            'streetAddress1': 'ertyui uyioiu yuioiuy yuioiuy yuioiu',
            'district': 'Gambir',
            'subDistrict': 'Gambir',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10110',
            'country': 'ID',
            'firstName': 'Shush',
            'lastName': '.',
            'fullOrLegalName': 'Shush .',
            'phoneNumber': '0876543223456',
            'email': 'shush_uata@mailinator.com',
            'addressLabel': 'shush_uata@mailinator.com',
            'primary': true,
            'lat': 0.0,
            'lon': 0.0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'shush_uata@mailinator.com',
          'dateOfBirth': 1404666000000,
          'gender': 'F',
          'defaultNotification': 'shush_uata@mailinator.com',
          'defaultBilling': 'shush_uata@mailinator.com',
          'defaultShipping': 'shush_uata@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': false,
          'needVerifiedPhoneNumber': true
        },
        'ipAddress': '10.255.1.117',
        'cartItems': [
          {
            'itemSku': 'SKU-123-456-790',
            'itemDetail': {
              'itemSku': 'SKU-123-456-790',
              'itemName': 'Xiaomi 6A',
              'productTypeCode': 0,
              'shippingWeight': 0.0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'installationRequired': false,
              'lateFulfillment': false
            },
            'orderItemId': '187',
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 1349999.0,
            'total': 1349999.0,
            'stockLabel': 673,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/medium/xiaomi_xiaomi-mi-5-smartphone---black--32gb--3gb--garansi-distributor-_full02.jpg',
            'description': 'Rose Gold'
          }
        ],
        'totalShipping': 0.0,
        'totalOrder': 1349999.0,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': '187',
          'paymentMethod': 'waiting',
          'amount': 1349999.0,
          'paymentStatus': 'PENDING',
          'orderExpirationDisplayCustomer': 1536255265300,
          'extendedData': {
            'BANK_CODE': '111',
            'BILL_KEY': '848484',
            'submit1': 'ok',
            'VIRTUAL_ACCOUNT_NUMBER': '2010160003164597',
            'KLIK_BCA_USER_ID': 'ichacha',
            'orderId': '217',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': 'true',
            'blibliOrderId': '60003164597'
          },
          'paymentDate': 1536409187126,
          'virtualAccountNumber': '500553945574',
          'description': 'Bank BRI',
          'expiredTimeInSecond': 86400,
          'expiredTimeDisplayCustomerInSecond': 86400,
          'tenor': 0,
          'orderHash': '65d1655a80f42328e65c9d4bfb0feba78f8ad36d28a0dfa72863a1817f2f56dd',
          'paymentOrderId': '60003164597',
          'installment': false
        },
        'orderId': '217',
        'orderDate': 1536409187128,
        'orderStatus': 'M',
        'publishedToXOrder': false
      }
    }
  },

  {
    method: 'GET',
    url: '/backend/flashsale/orders/WAITING',
    response: {
      code: 200,
      data: {
        cartId: '12345@samsung-gdn.com',
        amount: 18000000,
        createdDate: 1501735172255,
        customer: {
          email: 'sagita@gdn-commerce.com',
          identityNumber: '12345',
          identityType: 'KTP',
          name: 'Sagita',
          phoneNumber: '0823213729283'
        },
        discount: 0,
        errorMessage: '',
        expiredDate: new Date().getTime() + (1000 * 3600),
        items: [
          {
            sku: 'acc5',
            name: 'Kate Spade New York Wrap Case in Saffiano Black and White',
            fullName: 'Xiaomi Redmi 6A Smartphone - Dark Grey',
            description: '',
            price: 0,
            groups: ['s9plus', 's9plus-256gb'],
            image: require('assets/images/accessories/s9-plus-kate-spade-case-back.jpg'),
            logo: require('assets/images/accessories/kate-spade-logo.png'),
            active: true,
            alwaysShown: true,
            tracker: {
              sizmek: '1145670'
            }
          }
        ],
        orderId: '20491820491',
        orderIdHash: 'ABCDEFGH',
        adjustments: [],
        paidAmount: 1675000,
        payment: {
          description: 'Bank BCA',
          details: {
            accountNumber: '',
            bankId: ''
          },
          method: 'VirtualAccountBcaOnline',
          bankName: 'BCA'
        },
        pickUpStore: {
          address: 'Kebon Melati, Tanah Abang No 9',
          id: '6ccefcb5-b67c-4f7f-a7b1-5baf95996ccb',
          name: 'Graha Niaga Thamrin',
          phoneNumber: '021 5232131',
          district: '',
          city: 'Jakarta Barat',
          province: 'DKI Jakarta',
          postalCode: ''
        },
        status: 'M',
        shippingAddress: {
          'address': 'Jl. Kebon Melati No.1234 RT.1 RW.10',
          'province': 'DKI Jakarta',
          'city': 'Jakarta Pusat',
          'district': 'Tanah Abang',
          'subdistrict': 'Kebon Melati',
          'postalCode': '11230'
        }
      },
      errors: {},
      paging: {
        item_per_page: 0,
        page: 0,
        total_item: 0,
        total_page: 0
      },
      status: 'success'
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/orders/NOTFOUND',
    response: {
      code: 404,
      status: 'NOT_FOUND'
    }
  },
  {
    method: 'POST',
    url: '/backend/flash/common/payment/repay',
    param_body: [
      'orderId'
    ],
    response: {
      'code': 200,
      'status': 'OK',
      'data': {
        'orderId': '10232132141',
        'orderIdHash': 'ABCDEFGH',
        'redirectUrl': 'https://training.doappx.com/sprintAsia/api/webAuthorization.cfm',
        'paymentData': {
          'method': 'CIMBCreditCard',
          'httpMethod': 'post',
          'formData': {
            'serviceVersion': '1.2',
            'transactionType': 'SALE',
            'amount': '14000000',
            'userDefineValue': 'BLIBLI.com:Orderid:25000074596',
            'orderIdWcs': '25000074596',
            'merchantTransactionID': '25000074596',
            'siteID': 'BlibliFlashDealDev5',
            'checkSum': 'C6D5567EB10A5E7E8394AFBEF79A665F',
            'currency': 'IDR'
          }
        }
      }
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/configurations/isCaptchaForCheckOrderActive',
    response: {
      'code': 200,
      'status': 'OK',
      'data': 'false'
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/inventories/_stock?sku=ABC',
    params: ['sku'],
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          sku: 'ABC',
          available: true
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/inventories/_stock?sku=ABC&sku=DEF',
    params: ['sku'],
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          sku: 'ABC',
          available: true
        },
        {
          sku: 'DEF',
          available: false
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/inventories/_stock?sku=reg1&sku=reg2&sku=reg3&sku=reg7&sku=reg4&sku=reg5&sku=reg6',
    params: ['sku'],
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          sku: 'reg1',
          available: false
        },
        {
          sku: 'reg2',
          available: true
        },
        {
          sku: 'reg3',
          available: true
        },
        {
          sku: 'reg4',
          available: true
        },
        {
          sku: 'reg5',
          available: true
        },
        {
          sku: 'reg6',
          available: true
        },
        {
          sku: 'reg7',
          available: true
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/inventories/_stock?sku=acc1&sku=acc2&sku=acc3&sku=acc4&sku=acc5&sku=acc6',
    params: ['sku'],
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          sku: 'acc1',
          available: true
        },
        {
          sku: 'acc2',
          available: true
        },
        {
          sku: 'acc3',
          available: true
        },
        {
          sku: 'acc4',
          available: true
        },
        {
          sku: 'acc5',
          available: true
        },
        {
          sku: 'acc6',
          available: true
        }
      ]
    }
  },
  {
    method: 'POST',
    url: '/backend/flashsale/wishlist/_notify',
    param_body: ['email', 'sku'],
    response: {
      code: 200,
      status: 'OK',
      data: false
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/inventories/_stock?sku=SAD-60001-00001-00001&sku=SAD-60001-00002-00001&sku=SAD-60001-00003-00001&sku=SAD-60001-00005-00001&sku=SAD-60001-00006-00001&sku=SAD-60001-00007-00001',
    params: ['sku'],
    response: {
      code:
      200,
      status: 'OK',
      data: [
        {'sku': 'SAD-60001-00001-00001', 'available': false},
        {'sku': 'SAD-60001-00002-00001', 'available': true},
        {'sku': 'SAD-60001-00003-00001', 'available': true},
        {'sku': 'SAD-60001-00005-00001', 'available': true},
        {'sku': 'SAD-60001-00006-00001', 'available': true},
        {'sku': 'SAD-60001-00007-00001', 'available': true}
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/promotions/_availables?promoId=123',
    params: ['promoId'],
    response: {
      status: 'OK',
      code: 200,
      data: [
        {
          promoId: '123',
          available: true
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/promotions/_availables?promoId=123&promoId=456',
    params: ['promoId'],
    response: {
      status: 'OK',
      code: 200,
      data: [
        {
          promoId: '123',
          available: true
        },
        {
          promoId: '456',
          available: false
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/configurations/isCaptchaForReserveStockActive',
    response: {
      'code': 200,
      'status': 'OK',
      'data': 'false'
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/promotions/_availables?promoId=59814cc23d1f6637fd3f8947&promoId=59814cc23d1f6637fd3f894d&promoId=59814cc33d1f6637fd3f8959&promoId=59814cc43d1f6637fd3f8965&promoId=59814cc43d1f6637fd3f896b&promoId=59814cc53d1f6637fd3f8971&promoId=59814cc53d1f6637fd3f8977&promoId=59814cc63d1f6637fd3f897d&promoId=59814cc63d1f6637fd3f8983&promoId=59814cc33d1f6637fd3f895f&promoId=59814cc33d1f6637fd3f8953&promoId=59814cc73d1f6637fd3f8989&promoId=59814cc73d1f6637fd3f898f&promoId=59814cc83d1f6637fd3f8995&promoId=59814cc83d1f6637fd3f899b&promoId=59814cc93d1f6637fd3f89a1&promoId=59814cc93d1f6637fd3f89a7&promoId=59814cc93d1f6637fd3f89ad&promoId=598a88c53d1f6635208319b0',
    params: ['promoId'],
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          'promoId': '59814cc23d1f6637fd3f8947',
          'available': true
        },
        {
          'promoId': '59814cc23d1f6637fd3f894d',
          'available': true
        },
        {
          'promoId': '59814cc33d1f6637fd3f8953',
          'available': true
        },
        {
          'promoId': '59814cc33d1f6637fd3f8959',
          'available': true
        },
        {
          'promoId': '59814cc33d1f6637fd3f895f',
          'available': true
        },
        {
          'promoId': '59814cc43d1f6637fd3f8965',
          'available': true
        },
        {
          'promoId': '59814cc43d1f6637fd3f896b',
          'available': true
        },
        {
          'promoId': '59814cc53d1f6637fd3f8971',
          'available': true
        },
        {
          'promoId': '59814cc53d1f6637fd3f8977',
          'available': false
        },
        {
          'promoId': '59814cc63d1f6637fd3f897d',
          'available': true
        },
        {
          'promoId': '59814cc63d1f6637fd3f8983',
          'available': true
        },
        {
          'promoId': '59814cc73d1f6637fd3f8989',
          'available': true
        },
        {
          'promoId': '59814cc73d1f6637fd3f898f',
          'available': true
        },
        {
          'promoId': '59814cc83d1f6637fd3f8995',
          'available': true
        },
        {
          'promoId': '59814cc83d1f6637fd3f899b',
          'available': true
        },
        {
          'promoId': '59814cc93d1f6637fd3f89a1',
          'available': true
        },
        {
          'promoId': '59814cc93d1f6637fd3f89a7',
          'available': true
        },
        {
          'promoId': '59814cc93d1f6637fd3f89ad',
          'available': true
        },
        {
          'promoId': '598a88c53d1f6635208319b0',
          'available': true
        }
      ]
    }
  },
  {
    method: 'POST',
    url: '/backend/flashsale/payment/_pay',
    param_body: [
      'pickupStoreId',
      'customer',
      'payment',
      'promoId',
      'totalAmount',
      'discount',
      'paidAmount',
      'cartId'
    ],
    response: {
      'code': 200,
      'status': 'OK',
      'data': {
        'orderId': '10232132141',
        'orderIdHash': 'ABCDEFGH',
        'redirectUrl': 'https://training.doappx.com/sprintAsia/api/webAuthorization.cfm',
        'paymentData': {
          'method': 'CIMBCreditCard',
          'httpMethod': 'post',
          'formData': {
            'serviceVersion': '1.2',
            'transactionType': 'SALE',
            'amount': '14000000',
            'userDefineValue': 'BLIBLI.com:Orderid:25000074596',
            'orderIdWcs': '25000074596',
            'merchantTransactionID': '25000074596',
            'siteID': 'BlibliFlashDealDev5',
            'checkSum': 'C6D5567EB10A5E7E8394AFBEF79A665F',
            'currency': 'IDR'
          }
        }
      }
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/remaining-time',
    response: {
      code: 200,
      data: {
        'remainingTime': 10000 // millis
      },
      errors: {},
      status: 'OK'
    }
  },
  {
    method: 'POST',
    url: '/backend/flashsale/token/_validate',
    param_body: [
      'accessToken',
      'captcha'
    ],
    param_values: {
      'accessToken': 'VIPSAMSUNG'
    },
    response: {
      'code': 200,
      'status': 'OK',
      'data': {
        'accessToken': 'askldklajsAKSD3ASDASODKa',
        'tokenType': ''
      }
    }
  },
  {
    method: 'POST',
    url: '/backend/flashsale/token/_validate',
    param_body: [
      'accessToken',
      'captcha'
    ],
    param_values: {
      'accessToken': 'INVALID'
    },
    response: {
      'code': 400,
      'status': 'BadRequest',
      'errors': {
        'accessToken': [
          'InvalidAccessToken'
        ]
      }
    },
    'status': 400
  },
  {
    method: 'POST',
    url: '/backend/flashsale/token/_validate',
    params: [
      'accessToken',
      'captcha'
    ],
    param_values: {
      'accessToken': ''
    },
    response: {
      'code': 400,
      'status': 'BadRequest',
      'errors': {
        'accessToken': [
          'NotBlank'
        ]
      }
    },
    'status': 400
  },
  {
    method: 'POST',
    url: '/backend/flashsale/token/_validate',
    param_body: [
      'accessToken',
      'captcha'
    ],
    param_values: {
      'accessToken': 'USED'
    },
    response: {
      'code': 400,
      'status': 'BadRequest',
      'errors': {
        'accessToken': [
          'TokenAlreadyUsed'
        ]
      }
    },
    'status': 400
  },
  {
    method: 'POST',
    url: '/backend/flashsale/promotions/_validate',
    param_body: [
      'promoCode',
      'items'
    ],
    param_values: {
      'promoCode': 'SAMSUNG-25',
      'items': ['1', '2']
    },
    response: {
      'code': 200,
      'status': 'OK',
      'data': {
        'rewardValue': 10000,
        'rewardType': 'AMOUNT_OFF'
      }
    }
  },
  {
    method: 'POST',
    url: '/backend/flashsale/promotions/_validate',
    param_body: [
      'promoCode',
      'items'
    ],
    param_values: {
      'promoCode': ''
    },
    response: {
      'code': 400,
      'status': 'BadRequest',
      'errors': {
        'promoCode': [
          'NotBlank'
        ]
      }
    }
  },
  {
    method: 'POST',
    url: '/backend/flashsale/internal/_dashboard',
    response: {
      status: 'OK',
      code: 200,
      data: {
        'products': products.list,
        'promotions': promotions.list,
        'gimmicks': gimmicks.list,
        'soldOrders': [
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
        'stocks': [
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
        'adjustmentUsages': [
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
        'cashbackDeposit': 1000000
      }
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/pickup-points',
    response: {
      status: 'OK',
      code: 200,
      data: {
        pickupPointTypes: [
          {
            type: 'SES',
            sequence: 1
          },
          {
            type: 'SEP',
            sequence: 2
          },
          {
            type: 'SSS',
            sequence: 0
          }
        ],
        pickupPoints: [
          {
            id: '242fd1e6-f532-476d-b63e-ee9058ab52e2',
            name: 'SAMSUNG EXCLUSIVE STORE - MS PHONE 4U',
            address: 'JL. HAYAM WURUK NO. 56A',
            district: '',
            city: 'TEGAL',
            province: 'JAWA TENGAH',
            type: 'SES',
            active: true
          },
          {
            active: true,
            address: 'LT.3 NO.51 LT.3 NO.51',
            city: 'TEGAL',
            id: '60921be6-018c-446d-b17a-b633187083ab',
            name: 'SAMSUNG EXCLUSIVE PARTNER - PLUIT VILLAGE',
            province: 'JAWA TENGAH',
            type: 'SEP',
            district: ''
          },
          {
            active: true,
            address: 'JL.KAPT.SUDIBYO NO. 15C',
            city: 'TEGAL',
            id: 'ba128159-b117-4f42-b5c4-8436e76dd980',
            name: 'SAMSUNG EXCLUSIVE PARTNER - TIA SELL',
            province: 'JAWA TENGAH',
            type: 'SEP',
            district: ''
          },
          {
            active: true,
            address: 'JL. JEND.SUDIRMAN, BARONGAN KOTA KUDUS NO. 50',
            city: 'TEGAL',
            id: '2f4295dd-08eb-459d-b6e3-b72b419e704e',
            name: 'SAMSUNG EXPERIENCE STORE',
            province: 'JAWA TENGAH',
            type: 'SES',
            district: ''
          },
          {
            active: true,
            address: 'JL. JEND.SUDIRMAN, BARONGAN KOTA KUDUS NO. 50',
            city: 'TEGAL',
            id: '2f4295dd-08eb-459d-b6e3-b72b419e704e',
            name: 'SAMSUNG S STORE',
            province: 'JAWA TENGAH',
            type: 'SSS',
            district: ''
          }
        ]
      }
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/products/regular',
    response: {
      status: 'OK',
      code: 200,
      data: [
        {
          sku: 'reg1',
          name: 'Samsung Galaxy S9',
          description: 'Midnight Black - 64 GB',
          price: 11499000,
          group: 's9',
          image: require('assets/images/products/s9-midnight.jpg'),
          active: true,
          tracker: {
            sizmek: '1145660'
          }
        },
        {
          sku: 'reg2',
          name: 'Samsung Galaxy S9',
          description: 'Coral Blue - 64 GB',
          price: 11499000,
          group: 's9',
          image: require('assets/images/products/s9-blue.jpg'),
          active: true,
          tracker: {
            sizmek: '1145661'
          }
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/gimmicks',
    response: {
      status: 'OK',
      code: 200,
      data: [
        {
          sku: 'acc1',
          name: 'TUMI Co-Mold Case in Leather Black',
          description: '',
          price: 0,
          groups: ['s9'],
          image: require('assets/images/accessories/tumi-case-back.jpg'),
          logo: require('assets/images/accessories/tumi-logo.png'),
          active: true,
          alwaysShown: true,
          tracker: {
            sizmek: '1145668'
          }
        },
        {
          sku: 'acc2',
          name: 'Kate Spade New York Wrap Case in Saffiano Black and White',
          description: '',
          price: 0,
          groups: ['s9'],
          image: require('assets/images/accessories/kate-spade-case-back.jpg'),
          logo: require('assets/images/accessories/kate-spade-logo.png'),
          active: true,
          alwaysShown: true,
          tracker: {
            sizmek: '1145669'
          }
        },
        {
          sku: 'acc3',
          name: 'Clear View Standing Cover for S9',
          description: '',
          price: 0,
          groups: ['s9'],
          image: require('assets/images/accessories/samsung-s9-case-back.jpg'),
          logo: require('assets/images/accessories/samsung-logo.jpg'),
          active: true,
          alwaysShown: false,
          tracker: {
            sizmek: '1145670'
          }
        },
        {
          sku: 'acc4',
          name: 'TUMI Co-Mold Case in Leather Black',
          description: '',
          price: 0,
          groups: ['s9plus', 's9plus-256gb'],
          image: require('assets/images/accessories/s9-plus-tumi-case-back.jpg'),
          logo: require('assets/images/accessories/tumi-logo.png'),
          active: true,
          alwaysShown: true,
          tracker: {
            sizmek: '1145668'
          }
        },
        {
          sku: 'acc5',
          name: 'Kate Spade New York Wrap Case in Saffiano Black and White',
          description: '',
          price: 0,
          groups: ['s9plus', 's9plus-256gb'],
          image: require('assets/images/accessories/s9-plus-kate-spade-case-back.jpg'),
          logo: require('assets/images/accessories/kate-spade-logo.png'),
          active: true,
          alwaysShown: true,
          tracker: {
            sizmek: '1145670'
          }
        },
        {
          sku: 'acc6',
          name: 'Clear View Standing Cover for S9+',
          description: '',
          price: 0,
          groups: ['s9plus', 's9plus-256gb'],
          image: require('assets/images/accessories/samsung-s9-plus-case-back.jpg'),
          logo: require('assets/images/accessories/samsung-logo.jpg'),
          active: true,
          alwaysShown: false,
          tracker: {
            sizmek: '1145670'
          }
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/promotions/regular',
    response: {
      code: 200,
      data: [
        {
          id: '5a6afbb03d1f663eef70fa59',
          name: 'GLP Mandiri',
          bank: 'Mandiri',
          paymentMethod: 'MandiriInstallment',
          logo: require('assets/images/banks/mandiri.png'),
          active: true,
          hiddenLogo: false,
          sequence: 4
        },
        {
          id: '5a6afbaf3d1f663eef70fa53',
          name: 'GLP BNI',
          bank: 'BNI',
          paymentMethod: 'BNIInstallment',
          logo: require('assets/images/banks/bni.png'),
          active: true,
          hiddenLogo: false,
          sequence: 1
        },
        {
          id: '5a6afbb13d1f663eef70fa65',
          name: 'GLP CIMB',
          bank: 'CIMB',
          paymentMethod: 'CIMBInstallment',
          logo: require('assets/images/banks/cimb-niaga.png'),
          active: true,
          hiddenLogo: false,
          sequence: 10
        },
        {
          id: '5a6afbae3d1f663eef70fa47',
          name: 'GLP BCA',
          bank: 'BCA',
          paymentMethod: 'MIGSBCAInst',
          logo: require('assets/images/banks/bca.png'),
          active: true,
          hiddenLogo: false,
          sequence: 5
        }
      ],
      errors: {},
      status: 'OK'
    }
  },
  {
    method: 'GET',
    url: '/backend/common/content/flashsale-main-tnc',
    response: {
      'code': 200,
      'status': 'OK',
      'data': {
        'content': '<span>Syarat dan Ketentuan adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>'
      }
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/region/provinces',
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          'id': 'ID-1',
          'name': 'Bali',
          'longitude': 115.188916,
          'latitude': -8.409518
        },
        {
          'id': 'ID-6',
          'name': 'DKI Jakarta',
          'longitude': 106.822745,
          'latitude': -6.174465
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/region/provinces/ID-1/cities',
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          'parentId': 'ID-6',
          'id': 'ID-6-6',
          'name': 'Kota Jakarta Barat',
          'longitude': 0,
          'latitude': 0
        },
        {
          'parentId': 'ID-6',
          'id': 'ID-6-7',
          'name': 'Kota Jakarta Pusat',
          'longitude': 106.758849,
          'latitude': -6.168329
        },
        {
          'parentId': 'ID-6',
          'id': 'ID-6-8',
          'name': 'Kota Jakarta Selatan',
          'longitude': 106.834091,
          'latitude': -6.186486
        },
        {
          'parentId': 'ID-6',
          'id': 'ID-6-9',
          'name': 'Kota Jakarta Timur',
          'longitude': 106.806039,
          'latitude': -6.268991
        },
        {
          'parentId': 'ID-6',
          'id': 'ID-6-10',
          'name': 'Kota Jakarta Utara',
          'longitude': 106.900447,
          'latitude': -6.225014
        },
        {
          'parentId': 'ID-6',
          'id': 'ID-6-11',
          'name': 'Kab. Kepulauan Seribu',
          'longitude': 106.774113,
          'latitude': -6.121461
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/region/provinces/ID-6/cities',
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          'parentId': 'ID-6',
          'id': 'ID-6-6',
          'name': 'Kota Jakarta Barat',
          'longitude': 0,
          'latitude': 0
        },
        {
          'parentId': 'ID-6',
          'id': 'ID-6-7',
          'name': 'Kota Jakarta Pusat',
          'longitude': 106.758849,
          'latitude': -6.168329
        },
        {
          'parentId': 'ID-6',
          'id': 'ID-6-8',
          'name': 'Kota Jakarta Selatan',
          'longitude': 106.834091,
          'latitude': -6.186486
        },
        {
          'parentId': 'ID-6',
          'id': 'ID-6-9',
          'name': 'Kota Jakarta Timur',
          'longitude': 106.806039,
          'latitude': -6.268991
        },
        {
          'parentId': 'ID-6',
          'id': 'ID-6-10',
          'name': 'Kota Jakarta Utara',
          'longitude': 106.900447,
          'latitude': -6.225014
        },
        {
          'parentId': 'ID-6',
          'id': 'ID-6-11',
          'name': 'Kab. Kepulauan Seribu',
          'longitude': 106.774113,
          'latitude': -6.121461
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/region/cities/ID-6-11/districts',
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-3',
          'name': 'Johar Baruuu',
          'longitude': 106.856188,
          'latitude': -6.183054
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-1',
          'name': 'Cempaka Putih',
          'longitude': 106.86799,
          'latitude': -6.182671
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-2',
          'name': 'Gambir',
          'longitude': 106.823737,
          'latitude': -6.171343
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-7',
          'name': 'Senen',
          'longitude': 106.850288,
          'latitude': -6.193456
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-5',
          'name': 'Menteng',
          'longitude': 106.832587,
          'latitude': -6.194031
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-8',
          'name': 'Tanah Abang',
          'longitude': 106.811938,
          'latitude': -6.202362
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-6',
          'name': 'Sawah Besar',
          'longitude': 106.832587,
          'latitude': -6.153194
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-4',
          'name': 'Kemayoran',
          'longitude': 106.847338,
          'latitude': -6.160372
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/region/cities/ID-6-7/districts',
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-3',
          'name': 'Johar Baru',
          'longitude': 106.856188,
          'latitude': -6.183054
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-1',
          'name': 'Cempaka Putih',
          'longitude': 106.86799,
          'latitude': -6.182671
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-2',
          'name': 'Gambir',
          'longitude': 106.823737,
          'latitude': -6.171343
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-7',
          'name': 'Senen',
          'longitude': 106.850288,
          'latitude': -6.193456
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-5',
          'name': 'Menteng',
          'longitude': 106.832587,
          'latitude': -6.194031
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-8',
          'name': 'Tanah Abang',
          'longitude': 106.811938,
          'latitude': -6.202362
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-6',
          'name': 'Sawah Besar',
          'longitude': 106.832587,
          'latitude': -6.153194
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-4',
          'name': 'Kemayoran',
          'longitude': 106.847338,
          'latitude': -6.160372
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/region/districts/ID-6-7-8/subdistricts',
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-2',
          'name': 'Karang Anyar',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10740'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-3',
          'name': 'Kartini',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10750'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-1',
          'name': 'Gunung Sahari Utara',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10720'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-5',
          'name': 'Pasar Baru',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10710'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-4',
          'name': 'Mangga Dua Selatan',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10730'
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/region/districts/ID-6-7-6/subdistricts',
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-2',
          'name': 'Karang Anyar',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10740'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-3',
          'name': 'Kartini',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10750'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-1',
          'name': 'Gunung Sahari Utara',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10720'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-5',
          'name': 'Pasar Baru',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10710'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-4',
          'name': 'Mangga Dua Selatan',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10730'
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/region/cities/ID-6-11/districts',
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-3',
          'name': 'Johar Baru111',
          'longitude': 106.856188,
          'latitude': -6.183054
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-1',
          'name': 'Cempaka Putih',
          'longitude': 106.86799,
          'latitude': -6.182671
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-2',
          'name': 'Gambir',
          'longitude': 106.823737,
          'latitude': -6.171343
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-7',
          'name': 'Senen',
          'longitude': 106.850288,
          'latitude': -6.193456
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-5',
          'name': 'Menteng',
          'longitude': 106.832587,
          'latitude': -6.194031
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-8',
          'name': 'Tanah Abang',
          'longitude': 106.811938,
          'latitude': -6.202362
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-6',
          'name': 'Sawah Besar',
          'longitude': 106.832587,
          'latitude': -6.153194
        },
        {
          'parentId': 'ID-6-7',
          'id': 'ID-6-7-4',
          'name': 'Kemayoran',
          'longitude': 106.847338,
          'latitude': -6.160372
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/region/districts/ID-6-11/subdistricts',
    response: {
      'code': 200,
      'status': 'OK',
      'data': [
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-2',
          'name': 'Karang Anyar',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10740'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-3',
          'name': 'Kartini',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10750'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-1',
          'name': 'Gunung Sahari Utara',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10720'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-5',
          'name': 'Pasar Baru',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10710'
        },
        {
          'parentId': 'ID-6-7-6',
          'id': 'ID-6-7-6-4',
          'name': 'Mangga Dua Selatan',
          'longitude': 0,
          'latitude': 0,
          'postalCode': '10730'
        }
      ]
    }
  },

  // XIAOMI
  {
    method: 'GET',
    url: '/backend/flash/common/products',
    response: {
      code: 200,
      status: 'OK',
      data: [{
        itemSku: 'XIO-60001-00001-00001',
        name: 'Xiaomi Redmi 6A Smartphone',
        description: 'Dark Grey',
        price: 1249000,
        image: 'https' + '://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-2560307/xiaomi_xiaomi-redmi-6a-smartphone---black--16gb--2gb-_full05.jpg',
        active: false,
        stockAvailable: false,
        tracker: {},
        group: 'redmi6a-16gb'
      }, {
        itemSku: 'XIO-60001-00002-00001',
        name: 'Xiaomi Redmi 6A Smartphone',
        description: 'Black',
        price: 1249000,
        image: 'https' + '://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-2560308/xiaomi_xiaomi-redmi-6a-smartphone---gold--16-gb--2-gb-_full05.jpg',
        active: true,
        stockAvailable: true,
        tracker: {},
        group: 'redmi6a-16gb'
      },
      {
        itemSku: 'XIO-60001-00002-00001',
        name: 'Xiaomi Redmi 6A Smartphone',
        description: 'Black',
        price: 1249000,
        image: 'https' + '://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-2560313/xiaomi_xiaomi-redmi-6a-smartphone---blue--16gb--2gb-_full05.jpg',
        active: true,
        stockAvailable: true,
        tracker: {},
        group: 'redmi6a-16gb'
      }]
    }
  },
  {
    method: 'GET',
    url: '/backend/flashsale/inventories/_stock?sku=XIO-60001-00001-00001&sku=XIO-60001-00002-00001&sku=XIO-60001-00003-00001&sku=XIO-60001-00004-00001&sku=XIO-60001-00005-00001&sku=XIO-60001-00006-00001',
    params: ['sku'],
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          sku: 'XIO-60001-00001-00001',
          available: false
        },
        {
          sku: 'XIO-60001-00002-00001',
          available: true
        },
        {
          sku: 'XIO-60001-00003-00001',
          available: true
        },
        {
          sku: 'XIO-60001-00004-00001',
          available: true
        },
        {
          sku: 'XIO-60001-00005-00001',
          available: true
        },
        {
          sku: 'XIO-60001-00006-00001',
          available: true
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/backend/common/users/login',
    response: {
      'code': 200,
      'status': 'OK',
      'data': {
        'username': ''
      }
    }
  },
  {
    method: 'POST',
    url: '/backend/flash/common/payment',
    response: {
      'code': 0,
      'data': {
        'orderId': '10232132141',
        'orderIdHash': 'ABCDEFGH',
        'redirectUrl': 'https://training.doappx.com/sprintAsia/api/webAuthorization.cfm',
        'amount': 0,
        'autoApprove': true,
        'bankCode': 'string',
        'body': {},
        'extData': {},
        'httpHeaders': 'string',
        'httpMethod': 'string',
        'needRedirect': true,
        'parameter': {},
        'paymentEngine': 'string',
        'signature': 'string',
        'transactionid': 'string',
        'virtualAccountIdentifier': 'string'
      },
      'errors': {},
      'paging': {
        'item_per_page': 0,
        'page': 0,
        'total_item': 0,
        'total_page': 0
      },
      'status': 'string'
    }
  },
  {
    method: 'POST',
    url: '/backend/flash/common/users/_login/',
    param_values: {
      'password': '123',
      'username': 'success@gmail.com',
      'remember': true
    },
    response:
    { 'code': 200, 'data': { 'blipaySuspendedStatus': true, 'configs': {}, 'createdAt': 0, 'email': 'string', 'firstName': 'string', 'hasRecoveryAccount': true, 'hashedEmail': 'string', 'id': 0, 'lastName': 'string', 'lastUpdatedPin': 0, 'needVerifiedPhoneNumber': true, 'phoneNumber': 'string', 'phoneNumberVerified': true, 'pinRegistered': true, 'postPnvMember': true, 'username': 'string', 'walletBalance': 0, 'wishlistCount': 0 }, 'errors': {}, 'paging': { 'item_per_page': 0, 'page': 0, 'total_item': 0, 'total_page': 0 }, 'status': 'string' }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/users',
    response:
    { 'code': 200, 'data': { 'blipaySuspendedStatus': true, 'configs': {}, 'createdAt': 0, 'email': 'string', 'firstName': 'string', 'hasRecoveryAccount': true, 'hashedEmail': 'string', 'id': 0, 'lastName': 'string', 'lastUpdatedPin': 0, 'needVerifiedPhoneNumber': true, 'phoneNumber': 'string', 'phoneNumberVerified': true, 'pinRegistered': true, 'postPnvMember': true, 'username': 'string', 'walletBalance': 0, 'wishlistCount': 0 }, 'errors': {}, 'paging': { 'item_per_page': 0, 'page': 0, 'total_item': 0, 'total_page': 0 }, 'status': 'string' }
    // {'code': 401, 'status': 'UNAUTHORIZED'}
  },
  {
    method: 'POST',
    url: '/backend/common/users/_login',
    param_values: {
      'password': '123',
      'username': 'fail@gmail.com',
      'mode': 'minimal'
    },
    response: {
      'code': 401,
      'status': 'OK',
      'data': null,
      'errors': {
        'username': ['ERROR_LOGIN']
      }
    }
  },
  { // API for Add to Cart
    method: 'POST',
    url: '/backend/flash/common/carts/dshja-3221n-31nwq',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 809,
        'createdDate': 1536296297165,
        'updatedDate': 1536563732959,
        'cartId': 'mm30@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'mm30@mailinator.com',
            'streetAddress1': 'test 123hdhdjdjskwoeidhd',
            'district': 'Tanah Abang',
            'subDistrict': 'Kebon Melati',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10230',
            'country': 'ID',
            'firstName': 'jfjff',
            'lastName': 'ff',
            'fullOrLegalName': 'jfjff ff',
            'phoneNumber': '08012345678',
            'email': 'mm30@mailinator.com',
            'addressLabel': 'mm30@mailinator.com',
            'primary': true,
            'lat': 0,
            'lon': 0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'mm30@mailinator.com',
          'dateOfBirth': 1485882000000,
          'gender': 'M',
          'defaultNotification': 'mm30@mailinator.com',
          'defaultBilling': 'mm30@mailinator.com',
          'defaultShipping': 'mm30@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': true,
          'needVerifiedPhoneNumber': false
        },
        'cartItems': [
          {
            'itemSku': 'XIO-60005-00003-00001',
            'itemDetail': {
              'itemSku': 'XIO-60005-00003-00001',
              'itemName': 'Xiaomi REDMI 6A Gold 32GB',
              'productTypeCode': 0,
              'shippingWeight': 0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'lateFulfillment': false,
              'installationRequired': false
            },
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 999000,
            'total': 999000,
            'stockLabel': 65,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-0405318/xiaomi_xiaomi-redmi-6a-gold-32gb_full01.jpg',
            'description': 'Gold'
          }
        ],
        'totalShipping': 0,
        'totalOrder': 999000,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'amount': 0,
          'expiredTimeInSecond': 0,
          'expiredTimeDisplayCustomerInSecond': 0,
          'tenor': 0,
          'installment': false
        },
        'availablePayments': {
          'paymentTypes': [
            {
              'code': 'InternetBanking',
              'name': 'Internet Banking',
              'optionLabel': 'Tipe Pembayaran'
            },
            {
              'code': 'Transfer',
              'name': 'Transfer',
              'optionLabel': 'Bank yang Anda gunakan'
            },
            {
              'code': 'Indomaret',
              'name': 'Indomaret',
              'optionLabel': ''
            },
            {
              'code': 'KartuDebit',
              'name': 'Kartu Debit',
              'optionLabel': 'Pilih Kartu'
            },
            {
              'code': 'KartuKreditDebit',
              'name': 'Kartu Kredit',
              'optionLabel': 'Pilih Kartu'
            },
            {
              'code': 'AlfaGroup',
              'name': 'Alfa Group',
              'optionLabel': ''
            }
          ],
          'payments': [
            {
              'code': 'ANZ',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditANZ',
              'paymentOptionName': 'Kartu Kredit Eks ANZ / digibank',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Eks ANZ / digibank',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Kartu Kredit Eks ANZ / digibank</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ANZInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditANZ',
              'paymentOptionName': 'Kartu Kredit Eks ANZ / digibank',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Eks ANZ / digibank',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit Eks ANZ / digibank akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 10.000 per transaksi.</strong><br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit Eks ANZ / digibank.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Kartu Kredit Eks ANZ / digibank</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'AtmBersama',
              'alias': 'ATM Bersama',
              'paymentOptionCode': '',
              'paymentOptionName': '',
              'type': '',
              'name': 'ATM Bersama',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p data-empty=""true""><br></p><ul><li>Pembayaran dilakukan melalui ATM yang terdaftar dalam jaringan ATM Bersama.</li><li>Selesaikan pembayaran dalam waktu 24 Jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pembayaran Anda akan langsung terkonfirmasi setelah melakukan pembayaran.</li><li>Kebijakan minimum dan maksimum transfer mengikuti kebijakan masing-masing bank</li><li>Anda akan dikenakan biaya transfer antar bank sesuai dengan kebjiakan masing-masing bank.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BCACreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBCA',
              'paymentOptionName': 'Kartu Kredit BCA',
              'type': 'KartuKreditDebit',
              'name': 'BCA Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BIICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMaybank',
              'paymentOptionName': 'Kartu Kredit Maybank',
              'type': 'KartuKreditDebit',
              'name': 'Maybank Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Maybank Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BIIInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMaybank',
              'paymentOptionName': 'Kartu Kredit Maybank',
              'type': 'KartuKreditDebit',
              'name': 'Maybank Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Maybank Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNI',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuBNIDebitOnline',
              'paymentOptionName': 'Kartu BNI Debit Online',
              'type': 'KartuDebit',
              'name': 'BNI Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini menggunakan <b>Virtual Card Number (VCN)</b> yang dikirimkan dari sistem BNI ke nomor handphone nasabah pemegang <b>BNI kartu debit</b> yang sudah melakukan registrasi dan aktivasi fitur <b>BNI SMS Banking</b>, sebagai pengganti nomor asli <b>BNI Kartu debit</b> berlogo <b>Mastercard</b>.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBNI',
              'paymentOptionName': 'Kartu Kredit BNI',
              'type': 'KartuKreditDebit',
              'name': 'BNI Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini hanya untuk <b>Kartu Kredit BNI</b> berlogo VISA atau MasterCard, pembayaran menggunakan Kartu Debit BNI tidak akan berhasil.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BNI Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNIInstallment',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBNI',
              'paymentOptionName': 'Kartu Kredit BNI',
              'type': 'KartuKreditDebit',
              'name': 'BNI Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini hanya untuk <b>Kartu Kredit BNI</b> berlogo VISA atau MasterCard, pembayaran menggunakan Kartu Debit BNI tidak akan berhasil.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BNI Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNIVA',
              'alias': 'Bank BNI / Bank Lainnya',
              'paymentOptionCode': 'BankBNI',
              'paymentOptionName': 'Bank BNI / Bank Lainnya',
              'type': 'Transfer',
              'name': 'Bank BNI / Bank Lainnya',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM BNI / Mobile Banking BNI / Internet Banking BNI / Bank Lainnya</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRI',
              'alias': 'e-pay BRI',
              'paymentOptionCode': 'EPayBRI',
              'paymentOptionName': 'E-Pay BRI',
              'type': 'InternetBanking',
              'name': 'e-Pay BRI',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul class="paymentMethodNote"><li>Pastikan Anda telah memiliki User ID Internet Banking BRI dan teregistrasi secara finansial.</li> <li>Selesaikan pembayaran dalam waktu <strong><span ng-if="!$parent.selectedPaymentExpiryTime">10 menit</span><span ng-if="$parent.selectedPaymentExpiryTime" ng-bind="$parent.selectedPaymentExpiryTime"></span></strong> untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBRI',
              'paymentOptionName': 'Kartu Kredit BRI',
              'type': 'KartuKreditDebit',
              'name': 'BRI Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuBRIDebitOnline',
              'paymentOptionName': 'Kartu BRI Debit Online',
              'type': 'KartuDebit',
              'name': 'BRI Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBRI',
              'paymentOptionName': 'Kartu Kredit BRI',
              'type': 'KartuKreditDebit',
              'name': 'BRI Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit BRI akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 50.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit BRI.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRITouchCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBRITouch',
              'paymentOptionName': 'Kartu Kredit BRI Touch',
              'type': 'KartuKreditDebit',
              'name': 'BRI Touch Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Touch Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRITouchInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBRITouch',
              'paymentOptionName': 'Kartu Kredit BRI Touch',
              'type': 'KartuKreditDebit',
              'name': 'BRI Touch Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit BRI akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 50.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit BRI.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Touch Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BRITouchInstallment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIVA',
              'alias': 'Bank BRI',
              'paymentOptionCode': 'BankBRI',
              'paymentOptionName': 'Bank BRI',
              'type': 'Transfer',
              'name': 'Bank BRI',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM BRI / Mobile Banking BRI / Internet Banking BRI</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BTNDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBTN',
              'paymentOptionName': 'Kartu Kredit BTN',
              'type': 'KartuKreditDebit',
              'name': 'BTN Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BTPNJenius',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBTPN',
              'paymentOptionName': 'Kartu Kredit BTPN',
              'type': 'KartuKreditDebit',
              'name': 'BTPN Jenius',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BukopinCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBukopin',
              'paymentOptionName': 'Kartu Kredit Bukopin',
              'type': 'KartuKreditDebit',
              'name': 'Bukopin Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Bukopin Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BukopinInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBukopin',
              'paymentOptionName': 'Kartu Kredit Bukopin',
              'type': 'KartuKreditDebit',
              'name': 'Bukopin Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Bukopin Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBDebit',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCIMBDebit',
              'paymentOptionName': 'Kartu Kredit CIMB Debit',
              'type': 'KartuDebit',
              'name': 'CIMB Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBNIAGACreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCIMB',
              'paymentOptionName': 'Kartu Kredit CIMB',
              'type': 'KartuKreditDebit',
              'name': 'CIMB Niaga Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus CIMB Niaga Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBNIAGAInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditCIMB',
              'paymentOptionName': 'Kartu Kredit CIMB',
              'type': 'KartuKreditDebit',
              'name': 'CIMB Niaga Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus CIMB Niaga Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 6 bulan     ',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 12 bulan   ',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBOctopay',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu VCN CIMB Niaga0.9653552716422151_CODE',
              'paymentOptionName': 'Kartu Kredit VCN CIMB Niaga',
              'type': 'KartuKreditDebit',
              'name': 'VCN CIMB Niaga',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit Citibank Visa0.17722540668975006_CODE',
              'paymentOptionName': 'Kartu Kredit Citibank',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankInstallment',
              'alias': '',
              'paymentOptionCode': 'Kartu Kredit Citibank Visa0.17722540668975006_CODE',
              'paymentOptionName': 'Kartu Kredit Citibank',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankMasterCardCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Mastercard Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankMasterCardInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Mastercard Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank MasterCard Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank MasterCard Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank Mastercard Installment 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank Mastercard Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankVisaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditDanamon',
              'paymentOptionName': 'Kartu Kredit Danamon',
              'type': 'KartuKreditDebit',
              'name': 'Danamon Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Danamon Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditDanamon',
              'paymentOptionName': 'Kartu Kredit Danamon',
              'type': 'KartuKreditDebit',
              'name': 'Danamon Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Danamon Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonVA',
              'alias': 'Bank Danamon',
              'paymentOptionCode': 'BankDanamon',
              'paymentOptionName': 'Bank Danamon',
              'type': 'Transfer',
              'name': 'Bank Danamon',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM Danamon / D-Mobile (Mobile Banking)</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DBSDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Debit Digibank0.8446526953127116_CODE',
              'paymentOptionName': 'Kartu Kredit Digibank',
              'type': 'KartuKreditDebit',
              'name': 'Digibank DBS',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DebitOnlineDanamon',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Danamon Debit Online0.3702128165553482_CODE',
              'paymentOptionName': 'Kartu Danamon Debit Online',
              'type': 'KartuDebit',
              'name': 'Danamon Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'HSBCCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditHSBC',
              'paymentOptionName': 'Kartu Kredit HSBC',
              'type': 'KartuKreditDebit',
              'name': 'HSBC Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus HSBC Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'HSBCInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditHSBC',
              'paymentOptionName': 'Kartu Kredit HSBC',
              'type': 'KartuKreditDebit',
              'name': 'HSBC Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus HSBC Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'InternationalCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditInternasional',
              'paymentOptionName': 'Kartu Kredit Internasional',
              'type': 'KartuKreditDebit',
              'name': 'International Credit Card',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>1. Pilih metode pembayaran ini untuk melakukan pembayaran dengan kartu kredit yang diterbitkan di luar Indonesia<br>2. Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'KlikBCA',
              'alias': 'Klik BCA',
              'paymentOptionCode': 'KlikBCA',
              'paymentOptionName': 'KlikBCA',
              'type': 'InternetBanking',
              'name': 'KlikBCA',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pembayaran akan dilakukan di website bank, dengan menggunakan user ID yang telah dimasukkan pada kolom di atas.</li><li>Silahkan selesaikan pembayaran waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': [
                {
                  'key': 'KLIK_BCA_USER_ID',
                  'value': 'Klik BCA User ID : ',
                  'sequence': 1,
                  'placeholder': 'USER ID',
                  'validationRegex': '^[a-zA-Z0-9]+$',
                  'validationTnc': 'Harap pastikan kembali user KlikBCA anda tidak kosong dan valid. User KlikBCA yang valid hanya dapat mengandung huruf dan angka, tanpa karakter khusus..'
                }
              ]
            },
            {
              'code': 'KlikPAYFullPayment',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Klikpay',
              'paymentOptionName': 'BCA KlikPay',
              'type': 'InternetBanking',
              'name': 'BCA KlikPay',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 100000000,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'KlikPayInst',
              'alias': '',
              'paymentOptionCode': 'Klikpay',
              'paymentOptionName': 'BCA KlikPay',
              'type': 'InternetBanking',
              'name': 'BCA KlikPay.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriBillPayment',
              'alias': 'mandiri bill',
              'paymentOptionCode': 'BankMandiri',
              'paymentOptionName': 'Bank Mandiri',
              'type': 'Transfer',
              'name': 'Mandiri Bill Payment (Midtrans)',
              'active': true,
              'installment': false,
              'minAmount': 50000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pembayaran hanya dapat dilakukan oleh nasabah Bank Mandiri melalui <strong>ATM</strong>, <strong>Internet Banking</strong>, <strong>M</strong><strong>obile Banking </strong>dan<strong>&nbsp;Mandiri Online</strong></li><li>Setelah Anda bayar, pesanan Anda akan langsung diproses</li><li>Pastikan anda memilih penyedia jasa <strong>Midtrans</strong></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMandiri',
              'paymentOptionName': 'Kartu Kredit Mandiri',
              'type': 'KartuKreditDebit',
              'name': 'Mandiri Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mandiri Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriDebit',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMandiriDebit',
              'paymentOptionName': 'Kartu Kredit Mandiri Debit',
              'type': 'KartuDebit',
              'name': 'Mandiri Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMandiri',
              'paymentOptionName': 'Kartu Kredit Mandiri',
              'type': 'KartuKreditDebit',
              'name': 'Mandiri Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mandiri Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MayapadaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit Mayapada0.25427538819757944_CODE',
              'paymentOptionName': 'Kartu Kredit Mayapada',
              'type': 'KartuKreditDebit',
              'name': 'Mayapada Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<p>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</p><ul><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mayapada Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MegaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMega',
              'paymentOptionName': 'Kartu Kredit Mega',
              'type': 'KartuKreditDebit',
              'name': 'Mega Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mega Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MegaDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Mega Debit Online0.8753135423334886_CODE',
              'paymentOptionName': 'Kartu Kredit Mega',
              'type': 'KartuKreditDebit',
              'name': 'Mega Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MIGSBCAInst',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBCA',
              'paymentOptionName': 'Kartu Kredit BCA',
              'type': 'KartuKreditDebit',
              'name': 'BCA Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MIGSCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditLainnya',
              'paymentOptionName': 'Kartu Kredit Lainnya',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Semua Bank',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>1. Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.<ul type="disc"><li>2. Pilih metode pembayaran ini untuk membayar dengan semua jenis kartu kredit/debit yang diterbitkan oleh bank di Indonesia</li><li>3. Untuk kartu debit, pastikan dengan Bank Anda kalau kartu debit Anda sudah terdaftar untuk melakukan pembelanjaan online</li></ul></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MNCCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMNC',
              'paymentOptionName': 'Kartu Kredit MNC',
              'type': 'KartuKreditDebit',
              'name': 'MNC Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus MNC Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MNCInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMNC',
              'paymentOptionName': 'Kartu Kredit MNC',
              'type': 'KartuKreditDebit',
              'name': 'MNC Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus MNC Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditOCBCNISP',
              'paymentOptionName': 'Kartu Kredit OCBC NISP',
              'type': 'KartuKreditDebit',
              'name': 'OCBC NISP Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus OCBC NISP Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu OCBC NISP Debit Online0.1290676073550765_CODE',
              'paymentOptionName': 'Kartu Kredit OCBC NISP Debit',
              'type': 'KartuDebit',
              'name': 'OCBC NISP Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditOCBCNISP',
              'paymentOptionName': 'Kartu Kredit OCBC NISP',
              'type': 'KartuKreditDebit',
              'name': 'OCBC NISP Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit OCBC NISP akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 15.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit OCBC NISP.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus OCBC NISP Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OthersCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditLainnya',
              'paymentOptionName': 'Kartu Kredit Lainnya',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit/Debit Semua Bank.',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li><br></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PaninCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPanin',
              'paymentOptionName': 'Kartu Kredit Panin',
              'type': 'KartuKreditDebit',
              'name': 'Panin Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PaninInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPanin',
              'paymentOptionName': 'Kartu Kredit Panin',
              'type': 'KartuKreditDebit',
              'name': 'PaninInstallment,Panin Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Panin Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPermata',
              'paymentOptionName': 'Kartu Kredit Permata',
              'type': 'KartuKreditDebit',
              'name': 'Permata Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Permata Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditDebitOnline',
              'paymentOptionName': 'Kartu Kredit Debit Online',
              'type': 'KartuDebit',
              'name': 'Permata Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPermata',
              'paymentOptionName': 'Kartu Kredit Permata',
              'type': 'KartuKreditDebit',
              'name': 'Permata Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Permata Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Permata 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMastercardTitaniumCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPermataMastercardTitanium',
              'paymentOptionName': 'Kartu Kredit Permata Mastercard Titanium',
              'type': 'KartuKreditDebit',
              'name': 'Permata Shopping Card Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMastercardTitaniumInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPermataMastercardTitanium',
              'paymentOptionName': 'Kartu Kredit Permata Mastercard Titanium',
              'type': 'KartuKreditDebit',
              'name': 'Permata Shopping Card Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMEDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Debit PermataME0.7042841992313158_CODE',
              'paymentOptionName': 'Kartu Debit Permata',
              'type': 'KartuDebit',
              'name': 'PermataME Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ShinhanCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit ShinhanIndo0.45466543921818614_CODE',
              'paymentOptionName': 'Kartu Kredit Shin Han',
              'type': 'KartuKreditDebit',
              'name': 'ShinhanIndo Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus ShinhanIndo Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ShinhanInstallment',
              'alias': '',
              'paymentOptionCode': 'Kartu Kredit ShinhanIndo0.45466543921818614_CODE',
              'paymentOptionName': 'Kartu Kredit Shin Han',
              'type': 'KartuKreditDebit',
              'name': 'ShinhanIndo Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus ShinhanIndo Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditStandardChartered',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Kartu Kredit Lainnya',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Kartu Kredit Lainnya</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Standard Chartered Debit Online0.4903416195127457_CODE',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'Standard Chartered Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditStandardChartered',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Kartu Kredit Lainnya.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Kartu Kredit Lainnya</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan StandardChartered 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredVisaPlatinumCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditStandardCharteredVisaPlatinum',
              'paymentOptionName': 'Kartu Kredit Standard Chartered Visa Platinum',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Visa Platinum Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Visa Platinum Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredVisaPlatinumInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditStandardCharteredVisaPlatinum',
              'paymentOptionName': 'Kartu Kredit Standard Chartered Visa Platinum',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Visa Platinum Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Visa Platinum Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'UOBCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditUOB',
              'paymentOptionName': 'Kartu Kredit UOB',
              'type': 'KartuKreditDebit',
              'name': 'UOB Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus UOB Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'UOBInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditUOB',
              'paymentOptionName': 'Kartu Kredit UOB',
              'type': 'KartuKreditDebit',
              'name': 'UOB Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus UOB Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'VirtualAccountBcaOnline',
              'alias': 'Bank BCA',
              'paymentOptionCode': 'BankBCA',
              'paymentOptionName': 'Bank BCA',
              'type': 'Transfer',
              'name': 'Bank BCA',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pilih metode pembayaran ini untuk melakukan pembayaran dengan M-BCA / KlikBCA / ATM BCA.</li><li>Setelah Anda bayar, pesanan Anda akan langsung diproses.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'Indomaret',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Indomaret',
              'paymentOptionName': 'Indomaret',
              'type': 'Indomaret',
              'name': 'Indomaret',
              'active': true,
              'installment': false,
              'minAmount': 50000,
              'maxAmount': 5000000,
              'tnc': '<p><br></p><ul><li><strong>Gratis</strong> biaya transaksi</li><li>Pembayaran dilakukan dengan kasir Indomaret</li><li>Selesaikan pembayaran dalam 24 Jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'AlfaGroup',
              'alias': 'AlfaGroup',
              'paymentOptionCode': 'AlfaGroup',
              'paymentOptionName': 'Alfamart, Alfamidi, Lawson dan Dan+Dan',
              'type': 'AlfaGroup',
              'name': 'AlfaGroup',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 5000000,
              'tnc': '<p><br></p><ul><li><strong>Gratis</strong> biaya transaksi</li><li>Pembayaran dilakukan dengan kasir Alfamart/Alfamidi/Dan+Dan/Lawson</li><li>Selesaikan pembayaran dalam 24 jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            }
          ]
        }
      }
    }
  },
  { // API for Change Payment AlfaGroup
    method: 'GET',
    url: '/backend/flash/common/payment/change-payment/1013',
    // url: '/backend/flash/common/payment/change-payment/74',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 809,
        'createdDate': 1536296297165,
        'updatedDate': 1536563732959,
        'cartId': 'mm30@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'mm30@mailinator.com',
            'streetAddress1': 'test 123hdhdjdjskwoeidhd',
            'district': 'Tanah Abang',
            'subDistrict': 'Kebon Melati',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10230',
            'country': 'ID',
            'firstName': 'jfjff',
            'lastName': 'ff',
            'fullOrLegalName': 'jfjff ff',
            'phoneNumber': '08012345678',
            'email': 'mm30@mailinator.com',
            'addressLabel': 'mm30@mailinator.com',
            'primary': true,
            'lat': 0,
            'lon': 0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'mm30@mailinator.com',
          'dateOfBirth': 1485882000000,
          'gender': 'M',
          'defaultNotification': 'mm30@mailinator.com',
          'defaultBilling': 'mm30@mailinator.com',
          'defaultShipping': 'mm30@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': true,
          'needVerifiedPhoneNumber': false
        },
        'cartItems': [
          {
            'itemSku': 'XIO-60005-00003-00001',
            'itemDetail': {
              'itemSku': 'XIO-60005-00003-00001',
              'itemName': 'Xiaomi REDMI 6A Gold 32GB',
              'productTypeCode': 0,
              'shippingWeight': 0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'lateFulfillment': false,
              'installationRequired': false
            },
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 999000,
            'total': 999000,
            'stockLabel': 65,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-0405318/xiaomi_xiaomi-redmi-6a-gold-32gb_full01.jpg',
            'description': 'Gold'
          }
        ],
        'totalShipping': 0,
        'totalOrder': 999000,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': 1194,
          'paymentMethod': 'AlfaGroup',
          'amount': 999000,
          'extendedData': {
            'submit1': 'ok',
            'orderId': '1013',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': true,
            'blibliOrderId': '60003165706'
          },
          'paymentDate': 1537085526337,
          'description': 'AlfaGroup',
          'expiredTimeInSecond': 0,
          'expiredTimeDisplayCustomerInSecond': 0,
          'orderExpirationDisplayCustomer': 1537168510104,
          'virtualAccountNumber': 60003165706,
          'tenor': 0,
          'orderHash': '0ecc901e755973a2e3759f6589d0407df582d82f0f4819bbbd9b54b305b8a99f',
          'paymentOrderId': '60003165706',
          'paymentStatus': 'PENDING',
          'installment': false
        },
        'availablePayments': {
          'paymentTypes': [
            {
              'code': 'InternetBanking',
              'name': 'Internet Banking',
              'optionLabel': 'Tipe Pembayaran'
            },
            {
              'code': 'Transfer',
              'name': 'Transfer',
              'optionLabel': 'Bank yang Anda gunakan'
            },
            {
              'code': 'Indomaret',
              'name': 'Indomaret',
              'optionLabel': ''
            },
            {
              'code': 'KartuDebit',
              'name': 'Kartu Debit',
              'optionLabel': 'Pilih Kartu'
            },
            {
              'code': 'KartuKreditDebit',
              'name': 'Kartu Kredit',
              'optionLabel': 'Pilih Kartu'
            },
            {
              'code': 'AlfaGroup',
              'name': 'Alfa Group',
              'optionLabel': ''
            }
          ],
          'payments': [
            {
              'code': 'ANZ',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditANZ',
              'paymentOptionName': 'Kartu Kredit Eks ANZ / digibank',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Eks ANZ / digibank',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Kartu Kredit Eks ANZ / digibank</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ANZInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditANZ',
              'paymentOptionName': 'Kartu Kredit Eks ANZ / digibank',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Eks ANZ / digibank',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit Eks ANZ / digibank akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 10.000 per transaksi.</strong><br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit Eks ANZ / digibank.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Kartu Kredit Eks ANZ / digibank</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'AtmBersama',
              'alias': 'ATM Bersama',
              'paymentOptionCode': '',
              'paymentOptionName': '',
              'type': '',
              'name': 'ATM Bersama',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p data-empty=""true""><br></p><ul><li>Pembayaran dilakukan melalui ATM yang terdaftar dalam jaringan ATM Bersama.</li><li>Selesaikan pembayaran dalam waktu 24 Jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pembayaran Anda akan langsung terkonfirmasi setelah melakukan pembayaran.</li><li>Kebijakan minimum dan maksimum transfer mengikuti kebijakan masing-masing bank</li><li>Anda akan dikenakan biaya transfer antar bank sesuai dengan kebjiakan masing-masing bank.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BCACreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBCA',
              'paymentOptionName': 'Kartu Kredit BCA',
              'type': 'KartuKreditDebit',
              'name': 'BCA Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BIICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMaybank',
              'paymentOptionName': 'Kartu Kredit Maybank',
              'type': 'KartuKreditDebit',
              'name': 'Maybank Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Maybank Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BIIInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMaybank',
              'paymentOptionName': 'Kartu Kredit Maybank',
              'type': 'KartuKreditDebit',
              'name': 'Maybank Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Maybank Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNI',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuBNIDebitOnline',
              'paymentOptionName': 'Kartu BNI Debit Online',
              'type': 'KartuDebit',
              'name': 'BNI Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini menggunakan <b>Virtual Card Number (VCN)</b> yang dikirimkan dari sistem BNI ke nomor handphone nasabah pemegang <b>BNI kartu debit</b> yang sudah melakukan registrasi dan aktivasi fitur <b>BNI SMS Banking</b>, sebagai pengganti nomor asli <b>BNI Kartu debit</b> berlogo <b>Mastercard</b>.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBNI',
              'paymentOptionName': 'Kartu Kredit BNI',
              'type': 'KartuKreditDebit',
              'name': 'BNI Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini hanya untuk <b>Kartu Kredit BNI</b> berlogo VISA atau MasterCard, pembayaran menggunakan Kartu Debit BNI tidak akan berhasil.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BNI Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNIInstallment',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBNI',
              'paymentOptionName': 'Kartu Kredit BNI',
              'type': 'KartuKreditDebit',
              'name': 'BNI Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini hanya untuk <b>Kartu Kredit BNI</b> berlogo VISA atau MasterCard, pembayaran menggunakan Kartu Debit BNI tidak akan berhasil.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BNI Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNIVA',
              'alias': 'Bank BNI / Bank Lainnya',
              'paymentOptionCode': 'BankBNI',
              'paymentOptionName': 'Bank BNI / Bank Lainnya',
              'type': 'Transfer',
              'name': 'Bank BNI / Bank Lainnya',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM BNI / Mobile Banking BNI / Internet Banking BNI / Bank Lainnya</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRI',
              'alias': 'e-pay BRI',
              'paymentOptionCode': 'EPayBRI',
              'paymentOptionName': 'E-Pay BRI',
              'type': 'InternetBanking',
              'name': 'e-Pay BRI',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul class="paymentMethodNote"><li>Pastikan Anda telah memiliki User ID Internet Banking BRI dan teregistrasi secara finansial.</li> <li>Selesaikan pembayaran dalam waktu <strong><span ng-if="!$parent.selectedPaymentExpiryTime">10 menit</span><span ng-if="$parent.selectedPaymentExpiryTime" ng-bind="$parent.selectedPaymentExpiryTime"></span></strong> untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBRI',
              'paymentOptionName': 'Kartu Kredit BRI',
              'type': 'KartuKreditDebit',
              'name': 'BRI Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuBRIDebitOnline',
              'paymentOptionName': 'Kartu BRI Debit Online',
              'type': 'KartuDebit',
              'name': 'BRI Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBRI',
              'paymentOptionName': 'Kartu Kredit BRI',
              'type': 'KartuKreditDebit',
              'name': 'BRI Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit BRI akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 50.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit BRI.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRITouchCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBRITouch',
              'paymentOptionName': 'Kartu Kredit BRI Touch',
              'type': 'KartuKreditDebit',
              'name': 'BRI Touch Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Touch Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRITouchInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBRITouch',
              'paymentOptionName': 'Kartu Kredit BRI Touch',
              'type': 'KartuKreditDebit',
              'name': 'BRI Touch Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit BRI akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 50.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit BRI.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Touch Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BRITouchInstallment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIVA',
              'alias': 'Bank BRI',
              'paymentOptionCode': 'BankBRI',
              'paymentOptionName': 'Bank BRI',
              'type': 'Transfer',
              'name': 'Bank BRI',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM BRI / Mobile Banking BRI / Internet Banking BRI</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BTNDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBTN',
              'paymentOptionName': 'Kartu Kredit BTN',
              'type': 'KartuKreditDebit',
              'name': 'BTN Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BTPNJenius',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBTPN',
              'paymentOptionName': 'Kartu Kredit BTPN',
              'type': 'KartuKreditDebit',
              'name': 'BTPN Jenius',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BukopinCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBukopin',
              'paymentOptionName': 'Kartu Kredit Bukopin',
              'type': 'KartuKreditDebit',
              'name': 'Bukopin Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Bukopin Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BukopinInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBukopin',
              'paymentOptionName': 'Kartu Kredit Bukopin',
              'type': 'KartuKreditDebit',
              'name': 'Bukopin Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Bukopin Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBDebit',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCIMBDebit',
              'paymentOptionName': 'Kartu Kredit CIMB Debit',
              'type': 'KartuDebit',
              'name': 'CIMB Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBNIAGACreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCIMB',
              'paymentOptionName': 'Kartu Kredit CIMB',
              'type': 'KartuKreditDebit',
              'name': 'CIMB Niaga Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus CIMB Niaga Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBNIAGAInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditCIMB',
              'paymentOptionName': 'Kartu Kredit CIMB',
              'type': 'KartuKreditDebit',
              'name': 'CIMB Niaga Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus CIMB Niaga Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 6 bulan     ',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 12 bulan   ',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBOctopay',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu VCN CIMB Niaga0.9653552716422151_CODE',
              'paymentOptionName': 'Kartu Kredit VCN CIMB Niaga',
              'type': 'KartuKreditDebit',
              'name': 'VCN CIMB Niaga',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit Citibank Visa0.17722540668975006_CODE',
              'paymentOptionName': 'Kartu Kredit Citibank',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankInstallment',
              'alias': '',
              'paymentOptionCode': 'Kartu Kredit Citibank Visa0.17722540668975006_CODE',
              'paymentOptionName': 'Kartu Kredit Citibank',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankMasterCardCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Mastercard Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankMasterCardInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Mastercard Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank MasterCard Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank MasterCard Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank Mastercard Installment 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank Mastercard Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankVisaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditDanamon',
              'paymentOptionName': 'Kartu Kredit Danamon',
              'type': 'KartuKreditDebit',
              'name': 'Danamon Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Danamon Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditDanamon',
              'paymentOptionName': 'Kartu Kredit Danamon',
              'type': 'KartuKreditDebit',
              'name': 'Danamon Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Danamon Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonVA',
              'alias': 'Bank Danamon',
              'paymentOptionCode': 'BankDanamon',
              'paymentOptionName': 'Bank Danamon',
              'type': 'Transfer',
              'name': 'Bank Danamon',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM Danamon / D-Mobile (Mobile Banking)</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DBSDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Debit Digibank0.8446526953127116_CODE',
              'paymentOptionName': 'Kartu Kredit Digibank',
              'type': 'KartuKreditDebit',
              'name': 'Digibank DBS',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DebitOnlineDanamon',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Danamon Debit Online0.3702128165553482_CODE',
              'paymentOptionName': 'Kartu Danamon Debit Online',
              'type': 'KartuDebit',
              'name': 'Danamon Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'HSBCCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditHSBC',
              'paymentOptionName': 'Kartu Kredit HSBC',
              'type': 'KartuKreditDebit',
              'name': 'HSBC Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus HSBC Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'HSBCInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditHSBC',
              'paymentOptionName': 'Kartu Kredit HSBC',
              'type': 'KartuKreditDebit',
              'name': 'HSBC Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus HSBC Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'InternationalCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditInternasional',
              'paymentOptionName': 'Kartu Kredit Internasional',
              'type': 'KartuKreditDebit',
              'name': 'International Credit Card',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>1. Pilih metode pembayaran ini untuk melakukan pembayaran dengan kartu kredit yang diterbitkan di luar Indonesia<br>2. Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'KlikBCA',
              'alias': 'Klik BCA',
              'paymentOptionCode': 'KlikBCA',
              'paymentOptionName': 'KlikBCA',
              'type': 'InternetBanking',
              'name': 'KlikBCA',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pembayaran akan dilakukan di website bank, dengan menggunakan user ID yang telah dimasukkan pada kolom di atas.</li><li>Silahkan selesaikan pembayaran waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': [
                {
                  'key': 'KLIK_BCA_USER_ID',
                  'value': 'Klik BCA User ID : ',
                  'sequence': 1,
                  'placeholder': 'USER ID',
                  'validationRegex': '^[a-zA-Z0-9]+$',
                  'validationTnc': 'Harap pastikan kembali user KlikBCA anda tidak kosong dan valid. User KlikBCA yang valid hanya dapat mengandung huruf dan angka, tanpa karakter khusus..'
                }
              ]
            },
            {
              'code': 'KlikPAYFullPayment',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Klikpay',
              'paymentOptionName': 'BCA KlikPay',
              'type': 'InternetBanking',
              'name': 'BCA KlikPay',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 100000000,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'KlikPayInst',
              'alias': '',
              'paymentOptionCode': 'Klikpay',
              'paymentOptionName': 'BCA KlikPay',
              'type': 'InternetBanking',
              'name': 'BCA KlikPay.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriBillPayment',
              'alias': 'mandiri bill',
              'paymentOptionCode': 'BankMandiri',
              'paymentOptionName': 'Bank Mandiri',
              'type': 'Transfer',
              'name': 'Mandiri Bill Payment (Midtrans)',
              'active': true,
              'installment': false,
              'minAmount': 50000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pembayaran hanya dapat dilakukan oleh nasabah Bank Mandiri melalui <strong>ATM</strong>, <strong>Internet Banking</strong>, <strong>M</strong><strong>obile Banking </strong>dan<strong>&nbsp;Mandiri Online</strong></li><li>Setelah Anda bayar, pesanan Anda akan langsung diproses</li><li>Pastikan anda memilih penyedia jasa <strong>Midtrans</strong></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMandiri',
              'paymentOptionName': 'Kartu Kredit Mandiri',
              'type': 'KartuKreditDebit',
              'name': 'Mandiri Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mandiri Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriDebit',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMandiriDebit',
              'paymentOptionName': 'Kartu Kredit Mandiri Debit',
              'type': 'KartuDebit',
              'name': 'Mandiri Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMandiri',
              'paymentOptionName': 'Kartu Kredit Mandiri',
              'type': 'KartuKreditDebit',
              'name': 'Mandiri Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mandiri Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MayapadaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit Mayapada0.25427538819757944_CODE',
              'paymentOptionName': 'Kartu Kredit Mayapada',
              'type': 'KartuKreditDebit',
              'name': 'Mayapada Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<p>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</p><ul><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mayapada Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MegaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMega',
              'paymentOptionName': 'Kartu Kredit Mega',
              'type': 'KartuKreditDebit',
              'name': 'Mega Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mega Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MegaDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Mega Debit Online0.8753135423334886_CODE',
              'paymentOptionName': 'Kartu Kredit Mega',
              'type': 'KartuKreditDebit',
              'name': 'Mega Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MIGSBCAInst',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBCA',
              'paymentOptionName': 'Kartu Kredit BCA',
              'type': 'KartuKreditDebit',
              'name': 'BCA Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MIGSCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditLainnya',
              'paymentOptionName': 'Kartu Kredit Lainnya',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Semua Bank',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>1. Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.<ul type="disc"><li>2. Pilih metode pembayaran ini untuk membayar dengan semua jenis kartu kredit/debit yang diterbitkan oleh bank di Indonesia</li><li>3. Untuk kartu debit, pastikan dengan Bank Anda kalau kartu debit Anda sudah terdaftar untuk melakukan pembelanjaan online</li></ul></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MNCCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMNC',
              'paymentOptionName': 'Kartu Kredit MNC',
              'type': 'KartuKreditDebit',
              'name': 'MNC Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus MNC Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MNCInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMNC',
              'paymentOptionName': 'Kartu Kredit MNC',
              'type': 'KartuKreditDebit',
              'name': 'MNC Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus MNC Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditOCBCNISP',
              'paymentOptionName': 'Kartu Kredit OCBC NISP',
              'type': 'KartuKreditDebit',
              'name': 'OCBC NISP Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus OCBC NISP Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu OCBC NISP Debit Online0.1290676073550765_CODE',
              'paymentOptionName': 'Kartu Kredit OCBC NISP Debit',
              'type': 'KartuDebit',
              'name': 'OCBC NISP Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditOCBCNISP',
              'paymentOptionName': 'Kartu Kredit OCBC NISP',
              'type': 'KartuKreditDebit',
              'name': 'OCBC NISP Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit OCBC NISP akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 15.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit OCBC NISP.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus OCBC NISP Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OthersCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditLainnya',
              'paymentOptionName': 'Kartu Kredit Lainnya',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit/Debit Semua Bank.',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li><br></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PaninCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPanin',
              'paymentOptionName': 'Kartu Kredit Panin',
              'type': 'KartuKreditDebit',
              'name': 'Panin Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PaninInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPanin',
              'paymentOptionName': 'Kartu Kredit Panin',
              'type': 'KartuKreditDebit',
              'name': 'PaninInstallment,Panin Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Panin Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPermata',
              'paymentOptionName': 'Kartu Kredit Permata',
              'type': 'KartuKreditDebit',
              'name': 'Permata Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Permata Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditDebitOnline',
              'paymentOptionName': 'Kartu Kredit Debit Online',
              'type': 'KartuDebit',
              'name': 'Permata Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPermata',
              'paymentOptionName': 'Kartu Kredit Permata',
              'type': 'KartuKreditDebit',
              'name': 'Permata Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Permata Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Permata 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMastercardTitaniumCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPermataMastercardTitanium',
              'paymentOptionName': 'Kartu Kredit Permata Mastercard Titanium',
              'type': 'KartuKreditDebit',
              'name': 'Permata Shopping Card Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMastercardTitaniumInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPermataMastercardTitanium',
              'paymentOptionName': 'Kartu Kredit Permata Mastercard Titanium',
              'type': 'KartuKreditDebit',
              'name': 'Permata Shopping Card Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMEDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Debit PermataME0.7042841992313158_CODE',
              'paymentOptionName': 'Kartu Debit Permata',
              'type': 'KartuDebit',
              'name': 'PermataME Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ShinhanCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit ShinhanIndo0.45466543921818614_CODE',
              'paymentOptionName': 'Kartu Kredit Shin Han',
              'type': 'KartuKreditDebit',
              'name': 'ShinhanIndo Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus ShinhanIndo Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ShinhanInstallment',
              'alias': '',
              'paymentOptionCode': 'Kartu Kredit ShinhanIndo0.45466543921818614_CODE',
              'paymentOptionName': 'Kartu Kredit Shin Han',
              'type': 'KartuKreditDebit',
              'name': 'ShinhanIndo Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus ShinhanIndo Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditStandardChartered',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Kartu Kredit Lainnya',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Kartu Kredit Lainnya</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Standard Chartered Debit Online0.4903416195127457_CODE',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'Standard Chartered Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditStandardChartered',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Kartu Kredit Lainnya.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Kartu Kredit Lainnya</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan StandardChartered 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredVisaPlatinumCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditStandardCharteredVisaPlatinum',
              'paymentOptionName': 'Kartu Kredit Standard Chartered Visa Platinum',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Visa Platinum Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Visa Platinum Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredVisaPlatinumInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditStandardCharteredVisaPlatinum',
              'paymentOptionName': 'Kartu Kredit Standard Chartered Visa Platinum',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Visa Platinum Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Visa Platinum Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'UOBCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditUOB',
              'paymentOptionName': 'Kartu Kredit UOB',
              'type': 'KartuKreditDebit',
              'name': 'UOB Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus UOB Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'UOBInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditUOB',
              'paymentOptionName': 'Kartu Kredit UOB',
              'type': 'KartuKreditDebit',
              'name': 'UOB Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus UOB Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'VirtualAccountBcaOnline',
              'alias': 'Bank BCA',
              'paymentOptionCode': 'BankBCA',
              'paymentOptionName': 'Bank BCA',
              'type': 'Transfer',
              'name': 'Bank BCA',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pilih metode pembayaran ini untuk melakukan pembayaran dengan M-BCA / KlikBCA / ATM BCA.</li><li>Setelah Anda bayar, pesanan Anda akan langsung diproses.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'Indomaret',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Indomaret',
              'paymentOptionName': 'Indomaret',
              'type': 'Indomaret',
              'name': 'Indomaret',
              'active': true,
              'installment': false,
              'minAmount': 50000,
              'maxAmount': 5000000,
              'tnc': '<p><br></p><ul><li><strong>Gratis</strong> biaya transaksi</li><li>Pembayaran dilakukan dengan kasir Indomaret</li><li>Selesaikan pembayaran dalam 24 Jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'AlfaGroup',
              'alias': 'AlfaGroup',
              'paymentOptionCode': 'AlfaGroup',
              'paymentOptionName': 'Alfamart, Alfamidi, Lawson dan Dan+Dan',
              'type': 'AlfaGroup',
              'name': 'AlfaGroup',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 5000000,
              'tnc': '<p><br></p><ul><li><strong>Gratis</strong> biaya transaksi</li><li>Pembayaran dilakukan dengan kasir Alfamart/Alfamidi/Dan+Dan/Lawson</li><li>Selesaikan pembayaran dalam 24 jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            }
          ]
        }
      }
    }
  },
  { // API for Change Payment ANZ Credit Card
    method: 'GET',
    url: '/backend/flash/common/payment/change-payment/1000',
    // url: '/backend/flash/common/payment/change-payment/74',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 809,
        'createdDate': 1536296297165,
        'updatedDate': 1536563732959,
        'cartId': 'mm30@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'mm30@mailinator.com',
            'streetAddress1': 'test 123hdhdjdjskwoeidhd',
            'district': 'Tanah Abang',
            'subDistrict': 'Kebon Melati',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10230',
            'country': 'ID',
            'firstName': 'jfjff',
            'lastName': 'ff',
            'fullOrLegalName': 'jfjff ff',
            'phoneNumber': '08012345678',
            'email': 'mm30@mailinator.com',
            'addressLabel': 'mm30@mailinator.com',
            'primary': true,
            'lat': 0,
            'lon': 0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'mm30@mailinator.com',
          'dateOfBirth': 1485882000000,
          'gender': 'M',
          'defaultNotification': 'mm30@mailinator.com',
          'defaultBilling': 'mm30@mailinator.com',
          'defaultShipping': 'mm30@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': true,
          'needVerifiedPhoneNumber': false
        },
        'cartItems': [
          {
            'itemSku': 'XIO-60005-00003-00001',
            'itemDetail': {
              'itemSku': 'XIO-60005-00003-00001',
              'itemName': 'Xiaomi REDMI 6A Gold 32GB',
              'productTypeCode': 0,
              'shippingWeight': 0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'lateFulfillment': false,
              'installationRequired': false
            },
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 999000,
            'total': 999000,
            'stockLabel': 65,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-0405318/xiaomi_xiaomi-redmi-6a-gold-32gb_full01.jpg',
            'description': 'Gold'
          }
        ],
        'totalShipping': 0,
        'totalOrder': 999000,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': 1194,
          'paymentMethod': 'ANZ',
          'amount': 999000,
          'extendedData': {
            'submit1': 'ok',
            'orderId': '1013',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': true,
            'blibliOrderId': '60003165706',
            'KLIK_BCA_USER_ID': 'userId'
          },
          'paymentDate': 1537085526337,
          'description': 'Kartu Kredit Eks ANZ / digibank',
          'expiredTimeInSecond': 0,
          'expiredTimeDisplayCustomerInSecond': 0,
          'orderExpirationDisplayCustomer': 1537168510104,
          'virtualAccountNumber': 60003165706,
          'tenor': 0,
          'orderHash': '0ecc901e755973a2e3759f6589d0407df582d82f0f4819bbbd9b54b305b8a99f',
          'paymentOrderId': '60003165706',
          'paymentStatus': 'PENDING',
          'installment': false
        },
        'availablePayments': {
          'paymentTypes': [
            {
              'code': 'InternetBanking',
              'name': 'Internet Banking',
              'optionLabel': 'Tipe Pembayaran'
            },
            {
              'code': 'Transfer',
              'name': 'Transfer',
              'optionLabel': 'Bank yang Anda gunakan'
            },
            {
              'code': 'Indomaret',
              'name': 'Indomaret',
              'optionLabel': ''
            },
            {
              'code': 'KartuDebit',
              'name': 'Kartu Debit',
              'optionLabel': 'Pilih Kartu'
            },
            {
              'code': 'KartuKreditDebit',
              'name': 'Kartu Kredit',
              'optionLabel': 'Pilih Kartu'
            },
            {
              'code': 'AlfaGroup',
              'name': 'Alfa Group',
              'optionLabel': ''
            }
          ],
          'payments': [
            {
              'code': 'ANZ',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditANZ',
              'paymentOptionName': 'Kartu Kredit Eks ANZ / digibank',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Eks ANZ / digibank',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Kartu Kredit Eks ANZ / digibank</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ANZInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditANZ',
              'paymentOptionName': 'Kartu Kredit Eks ANZ / digibank',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Eks ANZ / digibank',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit Eks ANZ / digibank akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 10.000 per transaksi.</strong><br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit Eks ANZ / digibank.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Kartu Kredit Eks ANZ / digibank</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'AtmBersama',
              'alias': 'ATM Bersama',
              'paymentOptionCode': '',
              'paymentOptionName': '',
              'type': '',
              'name': 'ATM Bersama',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p data-empty=""true""><br></p><ul><li>Pembayaran dilakukan melalui ATM yang terdaftar dalam jaringan ATM Bersama.</li><li>Selesaikan pembayaran dalam waktu 24 Jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pembayaran Anda akan langsung terkonfirmasi setelah melakukan pembayaran.</li><li>Kebijakan minimum dan maksimum transfer mengikuti kebijakan masing-masing bank</li><li>Anda akan dikenakan biaya transfer antar bank sesuai dengan kebjiakan masing-masing bank.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BCACreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBCA',
              'paymentOptionName': 'Kartu Kredit BCA',
              'type': 'KartuKreditDebit',
              'name': 'BCA Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BIICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMaybank',
              'paymentOptionName': 'Kartu Kredit Maybank',
              'type': 'KartuKreditDebit',
              'name': 'Maybank Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Maybank Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BIIInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMaybank',
              'paymentOptionName': 'Kartu Kredit Maybank',
              'type': 'KartuKreditDebit',
              'name': 'Maybank Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Maybank Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNI',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuBNIDebitOnline',
              'paymentOptionName': 'Kartu BNI Debit Online',
              'type': 'KartuDebit',
              'name': 'BNI Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini menggunakan <b>Virtual Card Number (VCN)</b> yang dikirimkan dari sistem BNI ke nomor handphone nasabah pemegang <b>BNI kartu debit</b> yang sudah melakukan registrasi dan aktivasi fitur <b>BNI SMS Banking</b>, sebagai pengganti nomor asli <b>BNI Kartu debit</b> berlogo <b>Mastercard</b>.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBNI',
              'paymentOptionName': 'Kartu Kredit BNI',
              'type': 'KartuKreditDebit',
              'name': 'BNI Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini hanya untuk <b>Kartu Kredit BNI</b> berlogo VISA atau MasterCard, pembayaran menggunakan Kartu Debit BNI tidak akan berhasil.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BNI Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNIInstallment',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBNI',
              'paymentOptionName': 'Kartu Kredit BNI',
              'type': 'KartuKreditDebit',
              'name': 'BNI Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini hanya untuk <b>Kartu Kredit BNI</b> berlogo VISA atau MasterCard, pembayaran menggunakan Kartu Debit BNI tidak akan berhasil.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BNI Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNIVA',
              'alias': 'Bank BNI / Bank Lainnya',
              'paymentOptionCode': 'BankBNI',
              'paymentOptionName': 'Bank BNI / Bank Lainnya',
              'type': 'Transfer',
              'name': 'Bank BNI / Bank Lainnya',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM BNI / Mobile Banking BNI / Internet Banking BNI / Bank Lainnya</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRI',
              'alias': 'e-pay BRI',
              'paymentOptionCode': 'EPayBRI',
              'paymentOptionName': 'E-Pay BRI',
              'type': 'InternetBanking',
              'name': 'e-Pay BRI',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul class="paymentMethodNote"><li>Pastikan Anda telah memiliki User ID Internet Banking BRI dan teregistrasi secara finansial.</li> <li>Selesaikan pembayaran dalam waktu <strong><span ng-if="!$parent.selectedPaymentExpiryTime">10 menit</span><span ng-if="$parent.selectedPaymentExpiryTime" ng-bind="$parent.selectedPaymentExpiryTime"></span></strong> untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBRI',
              'paymentOptionName': 'Kartu Kredit BRI',
              'type': 'KartuKreditDebit',
              'name': 'BRI Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuBRIDebitOnline',
              'paymentOptionName': 'Kartu BRI Debit Online',
              'type': 'KartuDebit',
              'name': 'BRI Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBRI',
              'paymentOptionName': 'Kartu Kredit BRI',
              'type': 'KartuKreditDebit',
              'name': 'BRI Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit BRI akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 50.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit BRI.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRITouchCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBRITouch',
              'paymentOptionName': 'Kartu Kredit BRI Touch',
              'type': 'KartuKreditDebit',
              'name': 'BRI Touch Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Touch Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRITouchInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBRITouch',
              'paymentOptionName': 'Kartu Kredit BRI Touch',
              'type': 'KartuKreditDebit',
              'name': 'BRI Touch Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit BRI akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 50.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit BRI.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Touch Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BRITouchInstallment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIVA',
              'alias': 'Bank BRI',
              'paymentOptionCode': 'BankBRI',
              'paymentOptionName': 'Bank BRI',
              'type': 'Transfer',
              'name': 'Bank BRI',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM BRI / Mobile Banking BRI / Internet Banking BRI</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BTNDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBTN',
              'paymentOptionName': 'Kartu Kredit BTN',
              'type': 'KartuKreditDebit',
              'name': 'BTN Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BTPNJenius',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBTPN',
              'paymentOptionName': 'Kartu Kredit BTPN',
              'type': 'KartuKreditDebit',
              'name': 'BTPN Jenius',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BukopinCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBukopin',
              'paymentOptionName': 'Kartu Kredit Bukopin',
              'type': 'KartuKreditDebit',
              'name': 'Bukopin Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Bukopin Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BukopinInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBukopin',
              'paymentOptionName': 'Kartu Kredit Bukopin',
              'type': 'KartuKreditDebit',
              'name': 'Bukopin Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Bukopin Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBDebit',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCIMBDebit',
              'paymentOptionName': 'Kartu Kredit CIMB Debit',
              'type': 'KartuDebit',
              'name': 'CIMB Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBNIAGACreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCIMB',
              'paymentOptionName': 'Kartu Kredit CIMB',
              'type': 'KartuKreditDebit',
              'name': 'CIMB Niaga Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus CIMB Niaga Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBNIAGAInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditCIMB',
              'paymentOptionName': 'Kartu Kredit CIMB',
              'type': 'KartuKreditDebit',
              'name': 'CIMB Niaga Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus CIMB Niaga Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 6 bulan     ',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 12 bulan   ',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBOctopay',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu VCN CIMB Niaga0.9653552716422151_CODE',
              'paymentOptionName': 'Kartu Kredit VCN CIMB Niaga',
              'type': 'KartuKreditDebit',
              'name': 'VCN CIMB Niaga',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit Citibank Visa0.17722540668975006_CODE',
              'paymentOptionName': 'Kartu Kredit Citibank',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankInstallment',
              'alias': '',
              'paymentOptionCode': 'Kartu Kredit Citibank Visa0.17722540668975006_CODE',
              'paymentOptionName': 'Kartu Kredit Citibank',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankMasterCardCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Mastercard Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankMasterCardInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Mastercard Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank MasterCard Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank MasterCard Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank Mastercard Installment 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank Mastercard Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankVisaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditDanamon',
              'paymentOptionName': 'Kartu Kredit Danamon',
              'type': 'KartuKreditDebit',
              'name': 'Danamon Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Danamon Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditDanamon',
              'paymentOptionName': 'Kartu Kredit Danamon',
              'type': 'KartuKreditDebit',
              'name': 'Danamon Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Danamon Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonVA',
              'alias': 'Bank Danamon',
              'paymentOptionCode': 'BankDanamon',
              'paymentOptionName': 'Bank Danamon',
              'type': 'Transfer',
              'name': 'Bank Danamon',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM Danamon / D-Mobile (Mobile Banking)</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DBSDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Debit Digibank0.8446526953127116_CODE',
              'paymentOptionName': 'Kartu Kredit Digibank',
              'type': 'KartuKreditDebit',
              'name': 'Digibank DBS',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DebitOnlineDanamon',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Danamon Debit Online0.3702128165553482_CODE',
              'paymentOptionName': 'Kartu Danamon Debit Online',
              'type': 'KartuDebit',
              'name': 'Danamon Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'HSBCCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditHSBC',
              'paymentOptionName': 'Kartu Kredit HSBC',
              'type': 'KartuKreditDebit',
              'name': 'HSBC Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus HSBC Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'HSBCInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditHSBC',
              'paymentOptionName': 'Kartu Kredit HSBC',
              'type': 'KartuKreditDebit',
              'name': 'HSBC Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus HSBC Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'InternationalCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditInternasional',
              'paymentOptionName': 'Kartu Kredit Internasional',
              'type': 'KartuKreditDebit',
              'name': 'International Credit Card',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>1. Pilih metode pembayaran ini untuk melakukan pembayaran dengan kartu kredit yang diterbitkan di luar Indonesia<br>2. Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'KlikBCA',
              'alias': 'Klik BCA',
              'paymentOptionCode': 'KlikBCA',
              'paymentOptionName': 'KlikBCA',
              'type': 'InternetBanking',
              'name': 'KlikBCA',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pembayaran akan dilakukan di website bank, dengan menggunakan user ID yang telah dimasukkan pada kolom di atas.</li><li>Silahkan selesaikan pembayaran waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': [
                {
                  'key': 'KLIK_BCA_USER_ID',
                  'value': 'Klik BCA User ID : ',
                  'sequence': 1,
                  'placeholder': 'USER ID',
                  'validationRegex': '^[a-zA-Z0-9]+$',
                  'validationTnc': 'Harap pastikan kembali user KlikBCA anda tidak kosong dan valid. User KlikBCA yang valid hanya dapat mengandung huruf dan angka, tanpa karakter khusus..'
                }
              ]
            },
            {
              'code': 'KlikPAYFullPayment',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Klikpay',
              'paymentOptionName': 'BCA KlikPay',
              'type': 'InternetBanking',
              'name': 'BCA KlikPay',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 100000000,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'KlikPayInst',
              'alias': '',
              'paymentOptionCode': 'Klikpay',
              'paymentOptionName': 'BCA KlikPay',
              'type': 'InternetBanking',
              'name': 'BCA KlikPay.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriBillPayment',
              'alias': 'mandiri bill',
              'paymentOptionCode': 'BankMandiri',
              'paymentOptionName': 'Bank Mandiri',
              'type': 'Transfer',
              'name': 'Mandiri Bill Payment (Midtrans)',
              'active': true,
              'installment': false,
              'minAmount': 50000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pembayaran hanya dapat dilakukan oleh nasabah Bank Mandiri melalui <strong>ATM</strong>, <strong>Internet Banking</strong>, <strong>M</strong><strong>obile Banking </strong>dan<strong>&nbsp;Mandiri Online</strong></li><li>Setelah Anda bayar, pesanan Anda akan langsung diproses</li><li>Pastikan anda memilih penyedia jasa <strong>Midtrans</strong></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMandiri',
              'paymentOptionName': 'Kartu Kredit Mandiri',
              'type': 'KartuKreditDebit',
              'name': 'Mandiri Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mandiri Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriDebit',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMandiriDebit',
              'paymentOptionName': 'Kartu Kredit Mandiri Debit',
              'type': 'KartuDebit',
              'name': 'Mandiri Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMandiri',
              'paymentOptionName': 'Kartu Kredit Mandiri',
              'type': 'KartuKreditDebit',
              'name': 'Mandiri Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mandiri Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MayapadaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit Mayapada0.25427538819757944_CODE',
              'paymentOptionName': 'Kartu Kredit Mayapada',
              'type': 'KartuKreditDebit',
              'name': 'Mayapada Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<p>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</p><ul><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mayapada Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MegaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMega',
              'paymentOptionName': 'Kartu Kredit Mega',
              'type': 'KartuKreditDebit',
              'name': 'Mega Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mega Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MegaDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Mega Debit Online0.8753135423334886_CODE',
              'paymentOptionName': 'Kartu Kredit Mega',
              'type': 'KartuKreditDebit',
              'name': 'Mega Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MIGSBCAInst',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBCA',
              'paymentOptionName': 'Kartu Kredit BCA',
              'type': 'KartuKreditDebit',
              'name': 'BCA Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MIGSCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditLainnya',
              'paymentOptionName': 'Kartu Kredit Lainnya',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Semua Bank',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>1. Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.<ul type="disc"><li>2. Pilih metode pembayaran ini untuk membayar dengan semua jenis kartu kredit/debit yang diterbitkan oleh bank di Indonesia</li><li>3. Untuk kartu debit, pastikan dengan Bank Anda kalau kartu debit Anda sudah terdaftar untuk melakukan pembelanjaan online</li></ul></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MNCCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMNC',
              'paymentOptionName': 'Kartu Kredit MNC',
              'type': 'KartuKreditDebit',
              'name': 'MNC Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus MNC Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MNCInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMNC',
              'paymentOptionName': 'Kartu Kredit MNC',
              'type': 'KartuKreditDebit',
              'name': 'MNC Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus MNC Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditOCBCNISP',
              'paymentOptionName': 'Kartu Kredit OCBC NISP',
              'type': 'KartuKreditDebit',
              'name': 'OCBC NISP Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus OCBC NISP Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu OCBC NISP Debit Online0.1290676073550765_CODE',
              'paymentOptionName': 'Kartu Kredit OCBC NISP Debit',
              'type': 'KartuDebit',
              'name': 'OCBC NISP Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditOCBCNISP',
              'paymentOptionName': 'Kartu Kredit OCBC NISP',
              'type': 'KartuKreditDebit',
              'name': 'OCBC NISP Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit OCBC NISP akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 15.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit OCBC NISP.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus OCBC NISP Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OthersCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditLainnya',
              'paymentOptionName': 'Kartu Kredit Lainnya',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit/Debit Semua Bank.',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li><br></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PaninCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPanin',
              'paymentOptionName': 'Kartu Kredit Panin',
              'type': 'KartuKreditDebit',
              'name': 'Panin Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PaninInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPanin',
              'paymentOptionName': 'Kartu Kredit Panin',
              'type': 'KartuKreditDebit',
              'name': 'PaninInstallment,Panin Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Panin Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPermata',
              'paymentOptionName': 'Kartu Kredit Permata',
              'type': 'KartuKreditDebit',
              'name': 'Permata Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Permata Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditDebitOnline',
              'paymentOptionName': 'Kartu Kredit Debit Online',
              'type': 'KartuDebit',
              'name': 'Permata Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPermata',
              'paymentOptionName': 'Kartu Kredit Permata',
              'type': 'KartuKreditDebit',
              'name': 'Permata Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Permata Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Permata 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMastercardTitaniumCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPermataMastercardTitanium',
              'paymentOptionName': 'Kartu Kredit Permata Mastercard Titanium',
              'type': 'KartuKreditDebit',
              'name': 'Permata Shopping Card Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMastercardTitaniumInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPermataMastercardTitanium',
              'paymentOptionName': 'Kartu Kredit Permata Mastercard Titanium',
              'type': 'KartuKreditDebit',
              'name': 'Permata Shopping Card Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMEDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Debit PermataME0.7042841992313158_CODE',
              'paymentOptionName': 'Kartu Debit Permata',
              'type': 'KartuDebit',
              'name': 'PermataME Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ShinhanCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit ShinhanIndo0.45466543921818614_CODE',
              'paymentOptionName': 'Kartu Kredit Shin Han',
              'type': 'KartuKreditDebit',
              'name': 'ShinhanIndo Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus ShinhanIndo Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ShinhanInstallment',
              'alias': '',
              'paymentOptionCode': 'Kartu Kredit ShinhanIndo0.45466543921818614_CODE',
              'paymentOptionName': 'Kartu Kredit Shin Han',
              'type': 'KartuKreditDebit',
              'name': 'ShinhanIndo Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus ShinhanIndo Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditStandardChartered',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Kartu Kredit Lainnya',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Kartu Kredit Lainnya</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Standard Chartered Debit Online0.4903416195127457_CODE',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'Standard Chartered Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditStandardChartered',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Kartu Kredit Lainnya.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Kartu Kredit Lainnya</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan StandardChartered 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredVisaPlatinumCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditStandardCharteredVisaPlatinum',
              'paymentOptionName': 'Kartu Kredit Standard Chartered Visa Platinum',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Visa Platinum Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Visa Platinum Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredVisaPlatinumInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditStandardCharteredVisaPlatinum',
              'paymentOptionName': 'Kartu Kredit Standard Chartered Visa Platinum',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Visa Platinum Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Visa Platinum Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'UOBCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditUOB',
              'paymentOptionName': 'Kartu Kredit UOB',
              'type': 'KartuKreditDebit',
              'name': 'UOB Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus UOB Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'UOBInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditUOB',
              'paymentOptionName': 'Kartu Kredit UOB',
              'type': 'KartuKreditDebit',
              'name': 'UOB Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus UOB Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'VirtualAccountBcaOnline',
              'alias': 'Bank BCA',
              'paymentOptionCode': 'BankBCA',
              'paymentOptionName': 'Bank BCA',
              'type': 'Transfer',
              'name': 'Bank BCA',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pilih metode pembayaran ini untuk melakukan pembayaran dengan M-BCA / KlikBCA / ATM BCA.</li><li>Setelah Anda bayar, pesanan Anda akan langsung diproses.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'Indomaret',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Indomaret',
              'paymentOptionName': 'Indomaret',
              'type': 'Indomaret',
              'name': 'Indomaret',
              'active': true,
              'installment': false,
              'minAmount': 50000,
              'maxAmount': 5000000,
              'tnc': '<p><br></p><ul><li><strong>Gratis</strong> biaya transaksi</li><li>Pembayaran dilakukan dengan kasir Indomaret</li><li>Selesaikan pembayaran dalam 24 Jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'AlfaGroup',
              'alias': 'AlfaGroup',
              'paymentOptionCode': 'AlfaGroup',
              'paymentOptionName': 'Alfamart, Alfamidi, Lawson dan Dan+Dan',
              'type': 'AlfaGroup',
              'name': 'AlfaGroup',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 5000000,
              'tnc': '<p><br></p><ul><li><strong>Gratis</strong> biaya transaksi</li><li>Pembayaran dilakukan dengan kasir Alfamart/Alfamidi/Dan+Dan/Lawson</li><li>Selesaikan pembayaran dalam 24 jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            }
          ]
        }
      }
    }
  },
  { // API for Change Payment KlikBCA
    method: 'GET',
    url: '/backend/flash/common/payment/change-payment/1013',
    // url: '/backend/flash/common/payment/change-payment/74',
    response:
    {
      'code': 200,
      'status': 'OK',
      'data': {
        'storeId': '10001',
        'version': 809,
        'createdDate': 1536296297165,
        'updatedDate': 1536563732959,
        'cartId': 'mm30@mailinator.com',
        'customer': {
          'customerId': '0',
          'customerAddress': {
            'addressId': 'mm30@mailinator.com',
            'streetAddress1': 'test 123hdhdjdjskwoeidhd',
            'district': 'Tanah Abang',
            'subDistrict': 'Kebon Melati',
            'city': 'Kota Jakarta Pusat',
            'state': 'DKI Jakarta',
            'postalCode': '10230',
            'country': 'ID',
            'firstName': 'jfjff',
            'lastName': 'ff',
            'fullOrLegalName': 'jfjff ff',
            'phoneNumber': '08012345678',
            'email': 'mm30@mailinator.com',
            'addressLabel': 'mm30@mailinator.com',
            'primary': true,
            'lat': 0,
            'lon': 0,
            'geoLocationProvided': false,
            'addressVerified': false
          },
          'userType': 'R',
          'userName': 'mm30@mailinator.com',
          'dateOfBirth': 1485882000000,
          'gender': 'M',
          'defaultNotification': 'mm30@mailinator.com',
          'defaultBilling': 'mm30@mailinator.com',
          'defaultShipping': 'mm30@mailinator.com',
          'blacklistLevel': 'NORMAL',
          'phoneNumberVerified': true,
          'needVerifiedPhoneNumber': false
        },
        'cartItems': [
          {
            'itemSku': 'XIO-60005-00003-00001',
            'itemDetail': {
              'itemSku': 'XIO-60005-00003-00001',
              'itemName': 'Xiaomi REDMI 6A Gold 32GB',
              'productTypeCode': 0,
              'shippingWeight': 0,
              'productDangerousLevel': 0,
              'specialHandling': false,
              'directFlight': false,
              'lateFulfillment': false,
              'installationRequired': false
            },
            'quantity': 1,
            'allocatedQuantity': 1,
            'price': 999000,
            'total': 999000,
            'stockLabel': 65,
            'image': 'https://static-uata.gdn-app.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-0405318/xiaomi_xiaomi-redmi-6a-gold-32gb_full01.jpg',
            'description': 'Gold'
          }
        ],
        'totalShipping': 0,
        'totalOrder': 999000,
        'otpVerified': false,
        'otpTransactionConfig': false,
        'payment': {
          'paymentId': 1194,
          'paymentMethod': 'KlikBCA',
          'amount': 999000,
          'extendedData': {
            'submit1': 'ok',
            'orderId': '1013',
            'PROMO_CAMPAIGN_ID': 'xiaomi-b',
            'updateOrder': true,
            'blibliOrderId': '60003165706',
            'KLIK_BCA_USER_ID': 'userId'
          },
          'paymentDate': 1537085526337,
          'description': 'KlikBCA',
          'expiredTimeInSecond': 0,
          'expiredTimeDisplayCustomerInSecond': 0,
          'orderExpirationDisplayCustomer': 1537168510104,
          'virtualAccountNumber': 60003165706,
          'tenor': 0,
          'orderHash': '0ecc901e755973a2e3759f6589d0407df582d82f0f4819bbbd9b54b305b8a99f',
          'paymentOrderId': '60003165706',
          'paymentStatus': 'PENDING',
          'installment': false
        },
        'availablePayments': {
          'paymentTypes': [
            {
              'code': 'InternetBanking',
              'name': 'Internet Banking',
              'optionLabel': 'Tipe Pembayaran'
            },
            {
              'code': 'Transfer',
              'name': 'Transfer',
              'optionLabel': 'Bank yang Anda gunakan'
            },
            {
              'code': 'Indomaret',
              'name': 'Indomaret',
              'optionLabel': ''
            },
            {
              'code': 'KartuDebit',
              'name': 'Kartu Debit',
              'optionLabel': 'Pilih Kartu'
            },
            {
              'code': 'KartuKreditDebit',
              'name': 'Kartu Kredit',
              'optionLabel': 'Pilih Kartu'
            },
            {
              'code': 'AlfaGroup',
              'name': 'Alfa Group',
              'optionLabel': ''
            }
          ],
          'payments': [
            {
              'code': 'ANZ',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditANZ',
              'paymentOptionName': 'Kartu Kredit Eks ANZ / digibank',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Eks ANZ / digibank',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Kartu Kredit Eks ANZ / digibank</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ANZInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditANZ',
              'paymentOptionName': 'Kartu Kredit Eks ANZ / digibank',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Eks ANZ / digibank',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit Eks ANZ / digibank akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 10.000 per transaksi.</strong><br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit Eks ANZ / digibank.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Kartu Kredit Eks ANZ / digibank</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5eb281bb-9856-41be-6422-5b6112297438',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Kartu Kredit Eks ANZ / digibank 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'AtmBersama',
              'alias': 'ATM Bersama',
              'paymentOptionCode': '',
              'paymentOptionName': '',
              'type': '',
              'name': 'ATM Bersama',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p data-empty=""true""><br></p><ul><li>Pembayaran dilakukan melalui ATM yang terdaftar dalam jaringan ATM Bersama.</li><li>Selesaikan pembayaran dalam waktu 24 Jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pembayaran Anda akan langsung terkonfirmasi setelah melakukan pembayaran.</li><li>Kebijakan minimum dan maksimum transfer mengikuti kebijakan masing-masing bank</li><li>Anda akan dikenakan biaya transfer antar bank sesuai dengan kebjiakan masing-masing bank.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BCACreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBCA',
              'paymentOptionName': 'Kartu Kredit BCA',
              'type': 'KartuKreditDebit',
              'name': 'BCA Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BIICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMaybank',
              'paymentOptionName': 'Kartu Kredit Maybank',
              'type': 'KartuKreditDebit',
              'name': 'Maybank Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Maybank Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BIIInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMaybank',
              'paymentOptionName': 'Kartu Kredit Maybank',
              'type': 'KartuKreditDebit',
              'name': 'Maybank Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Maybank Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'f874dfed-65c7-f1e1-1359-19f241f66958',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BII 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNI',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuBNIDebitOnline',
              'paymentOptionName': 'Kartu BNI Debit Online',
              'type': 'KartuDebit',
              'name': 'BNI Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini menggunakan <b>Virtual Card Number (VCN)</b> yang dikirimkan dari sistem BNI ke nomor handphone nasabah pemegang <b>BNI kartu debit</b> yang sudah melakukan registrasi dan aktivasi fitur <b>BNI SMS Banking</b>, sebagai pengganti nomor asli <b>BNI Kartu debit</b> berlogo <b>Mastercard</b>.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBNI',
              'paymentOptionName': 'Kartu Kredit BNI',
              'type': 'KartuKreditDebit',
              'name': 'BNI Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini hanya untuk <b>Kartu Kredit BNI</b> berlogo VISA atau MasterCard, pembayaran menggunakan Kartu Debit BNI tidak akan berhasil.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BNI Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNIInstallment',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBNI',
              'paymentOptionName': 'Kartu Kredit BNI',
              'type': 'KartuKreditDebit',
              'name': 'BNI Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Metode pembayaran ini hanya untuk <b>Kartu Kredit BNI</b> berlogo VISA atau MasterCard, pembayaran menggunakan Kartu Debit BNI tidak akan berhasil.</li><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BNI Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8e9061b-8103-d630-526a-3c6c818e128f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BNI 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BNIVA',
              'alias': 'Bank BNI / Bank Lainnya',
              'paymentOptionCode': 'BankBNI',
              'paymentOptionName': 'Bank BNI / Bank Lainnya',
              'type': 'Transfer',
              'name': 'Bank BNI / Bank Lainnya',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM BNI / Mobile Banking BNI / Internet Banking BNI / Bank Lainnya</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRI',
              'alias': 'e-pay BRI',
              'paymentOptionCode': 'EPayBRI',
              'paymentOptionName': 'E-Pay BRI',
              'type': 'InternetBanking',
              'name': 'e-Pay BRI',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul class="paymentMethodNote"><li>Pastikan Anda telah memiliki User ID Internet Banking BRI dan teregistrasi secara finansial.</li> <li>Selesaikan pembayaran dalam waktu <strong><span ng-if="!$parent.selectedPaymentExpiryTime">10 menit</span><span ng-if="$parent.selectedPaymentExpiryTime" ng-bind="$parent.selectedPaymentExpiryTime"></span></strong> untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRICreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBRI',
              'paymentOptionName': 'Kartu Kredit BRI',
              'type': 'KartuKreditDebit',
              'name': 'BRI Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuBRIDebitOnline',
              'paymentOptionName': 'Kartu BRI Debit Online',
              'type': 'KartuDebit',
              'name': 'BRI Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBRI',
              'paymentOptionName': 'Kartu Kredit BRI',
              'type': 'KartuKreditDebit',
              'name': 'BRI Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit BRI akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 50.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit BRI.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'ffce4930-8df9-c865-b89b-a213b283cc2c',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BRI 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRITouchCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBRITouch',
              'paymentOptionName': 'Kartu Kredit BRI Touch',
              'type': 'KartuKreditDebit',
              'name': 'BRI Touch Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Touch Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRITouchInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBRITouch',
              'paymentOptionName': 'Kartu Kredit BRI Touch',
              'type': 'KartuKreditDebit',
              'name': 'BRI Touch Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit BRI akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 50.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit BRI.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BRI Touch Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan BRITouchInstallment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a2a02563-c4b2-8570-b861-ae75b3ab9018',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'BRI Touch Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BRIVA',
              'alias': 'Bank BRI',
              'paymentOptionCode': 'BankBRI',
              'paymentOptionName': 'Bank BRI',
              'type': 'Transfer',
              'name': 'Bank BRI',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM BRI / Mobile Banking BRI / Internet Banking BRI</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BTNDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBTN',
              'paymentOptionName': 'Kartu Kredit BTN',
              'type': 'KartuKreditDebit',
              'name': 'BTN Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BTPNJenius',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBTPN',
              'paymentOptionName': 'Kartu Kredit BTPN',
              'type': 'KartuKreditDebit',
              'name': 'BTPN Jenius',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BukopinCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditBukopin',
              'paymentOptionName': 'Kartu Kredit Bukopin',
              'type': 'KartuKreditDebit',
              'name': 'Bukopin Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Bukopin Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'BukopinInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBukopin',
              'paymentOptionName': 'Kartu Kredit Bukopin',
              'type': 'KartuKreditDebit',
              'name': 'Bukopin Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Bukopin Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '5428cebc-1237-0d79-c344-2cd42372afe0',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Bukopin 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBDebit',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCIMBDebit',
              'paymentOptionName': 'Kartu Kredit CIMB Debit',
              'type': 'KartuDebit',
              'name': 'CIMB Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBNIAGACreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCIMB',
              'paymentOptionName': 'Kartu Kredit CIMB',
              'type': 'KartuKreditDebit',
              'name': 'CIMB Niaga Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus CIMB Niaga Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBNIAGAInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditCIMB',
              'paymentOptionName': 'Kartu Kredit CIMB',
              'type': 'KartuKreditDebit',
              'name': 'CIMB Niaga Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus CIMB Niaga Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 6 bulan     ',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2b312b7f-0fe0-cbe2-8032-c45808f4a550',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Cimb Niaga Acq 0% 12 bulan   ',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CIMBOctopay',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu VCN CIMB Niaga0.9653552716422151_CODE',
              'paymentOptionName': 'Kartu Kredit VCN CIMB Niaga',
              'type': 'KartuKreditDebit',
              'name': 'VCN CIMB Niaga',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit Citibank Visa0.17722540668975006_CODE',
              'paymentOptionName': 'Kartu Kredit Citibank',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankInstallment',
              'alias': '',
              'paymentOptionCode': 'Kartu Kredit Citibank Visa0.17722540668975006_CODE',
              'paymentOptionName': 'Kartu Kredit Citibank',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4578f522-0ed3-8425-c86a-c0bb5bf0abb4',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Citibank 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankMasterCardCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Mastercard Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankMasterCardInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Mastercard Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank MasterCard Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank MasterCard Installment 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank Mastercard Installment 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'eadd2065-10a3-aff2-e6a2-2d50b29ff43f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Citibank Mastercard Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'CitibankVisaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditCitibankMasterCard',
              'paymentOptionName': 'Kartu Kredit Citibank MasterCard',
              'type': 'KartuKreditDebit',
              'name': 'Citibank Visa Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Citibank Mastercard Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditDanamon',
              'paymentOptionName': 'Kartu Kredit Danamon',
              'type': 'KartuKreditDebit',
              'name': 'Danamon Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Danamon Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditDanamon',
              'paymentOptionName': 'Kartu Kredit Danamon',
              'type': 'KartuKreditDebit',
              'name': 'Danamon Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Danamon Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'b8fd0f5f-86f7-b701-3868-123d0ca661e2',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Danamon 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DanamonVA',
              'alias': 'Bank Danamon',
              'paymentOptionCode': 'BankDanamon',
              'paymentOptionName': 'Bank Danamon',
              'type': 'Transfer',
              'name': 'Bank Danamon',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<p>Pilih metode pembayaran ini untuk melakukan pembayaran dengan ATM Danamon / D-Mobile (Mobile Banking)</p><p>Setelah Anda bayar, pesanan Anda akan langsung diproses.</p>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DBSDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Debit Digibank0.8446526953127116_CODE',
              'paymentOptionName': 'Kartu Kredit Digibank',
              'type': 'KartuKreditDebit',
              'name': 'Digibank DBS',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'DebitOnlineDanamon',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Danamon Debit Online0.3702128165553482_CODE',
              'paymentOptionName': 'Kartu Danamon Debit Online',
              'type': 'KartuDebit',
              'name': 'Danamon Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'HSBCCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditHSBC',
              'paymentOptionName': 'Kartu Kredit HSBC',
              'type': 'KartuKreditDebit',
              'name': 'HSBC Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus HSBC Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'HSBCInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditHSBC',
              'paymentOptionName': 'Kartu Kredit HSBC',
              'type': 'KartuKreditDebit',
              'name': 'HSBC Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus HSBC Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '241555fd-f59b-7106-d151-156395804ef7',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan HSBC 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'InternationalCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditInternasional',
              'paymentOptionName': 'Kartu Kredit Internasional',
              'type': 'KartuKreditDebit',
              'name': 'International Credit Card',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>1. Pilih metode pembayaran ini untuk melakukan pembayaran dengan kartu kredit yang diterbitkan di luar Indonesia<br>2. Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'KlikBCA',
              'alias': 'Klik BCA',
              'paymentOptionCode': 'KlikBCA',
              'paymentOptionName': 'KlikBCA',
              'type': 'InternetBanking',
              'name': 'KlikBCA',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pembayaran akan dilakukan di website bank, dengan menggunakan user ID yang telah dimasukkan pada kolom di atas.</li><li>Silahkan selesaikan pembayaran waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': [
                {
                  'key': 'KLIK_BCA_USER_ID',
                  'value': 'Klik BCA User ID : ',
                  'sequence': 1,
                  'placeholder': 'USER ID',
                  'validationRegex': '^[a-zA-Z0-9]+$',
                  'validationTnc': 'Harap pastikan kembali user KlikBCA anda tidak kosong dan valid. User KlikBCA yang valid hanya dapat mengandung huruf dan angka, tanpa karakter khusus..'
                }
              ]
            },
            {
              'code': 'KlikPAYFullPayment',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Klikpay',
              'paymentOptionName': 'BCA KlikPay',
              'type': 'InternetBanking',
              'name': 'BCA KlikPay',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 100000000,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'KlikPayInst',
              'alias': '',
              'paymentOptionCode': 'Klikpay',
              'paymentOptionName': 'BCA KlikPay',
              'type': 'InternetBanking',
              'name': 'BCA KlikPay.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '464714f7-222f-fd1b-0fb7-a0a6b76a2bf4',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Klikpay 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriBillPayment',
              'alias': 'mandiri bill',
              'paymentOptionCode': 'BankMandiri',
              'paymentOptionName': 'Bank Mandiri',
              'type': 'Transfer',
              'name': 'Mandiri Bill Payment (Midtrans)',
              'active': true,
              'installment': false,
              'minAmount': 50000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pembayaran hanya dapat dilakukan oleh nasabah Bank Mandiri melalui <strong>ATM</strong>, <strong>Internet Banking</strong>, <strong>M</strong><strong>obile Banking </strong>dan<strong>&nbsp;Mandiri Online</strong></li><li>Setelah Anda bayar, pesanan Anda akan langsung diproses</li><li>Pastikan anda memilih penyedia jasa <strong>Midtrans</strong></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMandiri',
              'paymentOptionName': 'Kartu Kredit Mandiri',
              'type': 'KartuKreditDebit',
              'name': 'Mandiri Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mandiri Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriDebit',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMandiriDebit',
              'paymentOptionName': 'Kartu Kredit Mandiri Debit',
              'type': 'KartuDebit',
              'name': 'Mandiri Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MandiriInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMandiri',
              'paymentOptionName': 'Kartu Kredit Mandiri',
              'type': 'KartuKreditDebit',
              'name': 'Mandiri Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0% membutuhkan waktu 5-14 hari kerja. Maka, ada kemungkinan Anda akan tertagih penuh bila transaksi dilakukan berdekatan dengan tanggal cetak tagihan. Jika tertagih penuh, silakan bayarkan cicilan pertama saja.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mandiri Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'e93c9c93-dde8-cac7-42cf-0c73837f6fae',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Mandiri 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MayapadaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit Mayapada0.25427538819757944_CODE',
              'paymentOptionName': 'Kartu Kredit Mayapada',
              'type': 'KartuKreditDebit',
              'name': 'Mayapada Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<p>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</p><ul><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mayapada Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MegaCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMega',
              'paymentOptionName': 'Kartu Kredit Mega',
              'type': 'KartuKreditDebit',
              'name': 'Mega Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Mega Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MegaDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Mega Debit Online0.8753135423334886_CODE',
              'paymentOptionName': 'Kartu Kredit Mega',
              'type': 'KartuKreditDebit',
              'name': 'Mega Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MIGSBCAInst',
              'alias': '',
              'paymentOptionCode': 'KartuKreditBCA',
              'paymentOptionName': 'Kartu Kredit BCA',
              'type': 'KartuKreditDebit',
              'name': 'BCA Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '195d0c5c-3a57-61d4-f62a-faf9142df26f',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan BCA 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MIGSCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditLainnya',
              'paymentOptionName': 'Kartu Kredit Lainnya',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit Semua Bank',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>1. Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.<ul type="disc"><li>2. Pilih metode pembayaran ini untuk membayar dengan semua jenis kartu kredit/debit yang diterbitkan oleh bank di Indonesia</li><li>3. Untuk kartu debit, pastikan dengan Bank Anda kalau kartu debit Anda sudah terdaftar untuk melakukan pembelanjaan online</li></ul></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MNCCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditMNC',
              'paymentOptionName': 'Kartu Kredit MNC',
              'type': 'KartuKreditDebit',
              'name': 'MNC Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus MNC Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'MNCInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditMNC',
              'paymentOptionName': 'Kartu Kredit MNC',
              'type': 'KartuKreditDebit',
              'name': 'MNC Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus MNC Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'c5fd1cd8-f35c-f054-1aca-9a84afef9f00',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan MNC 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditOCBCNISP',
              'paymentOptionName': 'Kartu Kredit OCBC NISP',
              'type': 'KartuKreditDebit',
              'name': 'OCBC NISP Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus OCBC NISP Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu OCBC NISP Debit Online0.1290676073550765_CODE',
              'paymentOptionName': 'Kartu Kredit OCBC NISP Debit',
              'type': 'KartuDebit',
              'name': 'OCBC NISP Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OcbcNispInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditOCBCNISP',
              'paymentOptionName': 'Kartu Kredit OCBC NISP',
              'type': 'KartuKreditDebit',
              'name': 'OCBC NISP Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Setiap transaksi Cicilan 0% yang dilakukan pada transaksi e-commerce yang dilakukan oleh Pemegang Kartu Kredit OCBC NISP akan dikenakan <strong>Biaya Administrasi Cicilan sebesar Rp. 15.000 per transaksi</strong>.<br>Adapun Biaya Administrasi Cicilan tersebut menjadi beban Pemegang Kartu Kredit OCBC NISP.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus OCBC NISP Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '2316050d-86f2-4ebd-919d-c0fe5c406d36',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan OCBC NISP 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'OthersCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditLainnya',
              'paymentOptionName': 'Kartu Kredit Lainnya',
              'type': 'KartuKreditDebit',
              'name': 'Kartu Kredit/Debit Semua Bank.',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li><br></li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PaninCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPanin',
              'paymentOptionName': 'Kartu Kredit Panin',
              'type': 'KartuKreditDebit',
              'name': 'Panin Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus BCA Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PaninInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPanin',
              'paymentOptionName': 'Kartu Kredit Panin',
              'type': 'KartuKreditDebit',
              'name': 'PaninInstallment,Panin Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Panin Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '4da71c1a-ad8e-9fc1-037e-5be4664d6770',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Panin 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPermata',
              'paymentOptionName': 'Kartu Kredit Permata',
              'type': 'KartuKreditDebit',
              'name': 'Permata Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Permata Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditDebitOnline',
              'paymentOptionName': 'Kartu Kredit Debit Online',
              'type': 'KartuDebit',
              'name': 'Permata Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPermata',
              'paymentOptionName': 'Kartu Kredit Permata',
              'type': 'KartuKreditDebit',
              'name': 'Permata Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus Permata Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Permata 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': 'a7cfb429-284c-1327-7292-5228105574ab',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Permata 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMastercardTitaniumCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditPermataMastercardTitanium',
              'paymentOptionName': 'Kartu Kredit Permata Mastercard Titanium',
              'type': 'KartuKreditDebit',
              'name': 'Permata Shopping Card Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMastercardTitaniumInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditPermataMastercardTitanium',
              'paymentOptionName': 'Kartu Kredit Permata Mastercard Titanium',
              'type': 'KartuKreditDebit',
              'name': 'Permata Shopping Card Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '608ffca1-53f1-7f2e-7c32-eae067d66d43',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Permata Mastercard Installment 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'PermataMEDebitOnline',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Debit PermataME0.7042841992313158_CODE',
              'paymentOptionName': 'Kartu Debit Permata',
              'type': 'KartuDebit',
              'name': 'PermataME Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ShinhanCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Kredit ShinhanIndo0.45466543921818614_CODE',
              'paymentOptionName': 'Kartu Kredit Shin Han',
              'type': 'KartuKreditDebit',
              'name': 'ShinhanIndo Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus ShinhanIndo Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'ShinhanInstallment',
              'alias': '',
              'paymentOptionCode': 'Kartu Kredit ShinhanIndo0.45466543921818614_CODE',
              'paymentOptionName': 'Kartu Kredit Shin Han',
              'type': 'KartuKreditDebit',
              'name': 'ShinhanIndo Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus ShinhanIndo Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditStandardChartered',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Kartu Kredit Lainnya',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Kartu Kredit Lainnya</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredDebitCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Kartu Standard Chartered Debit Online0.4903416195127457_CODE',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'Standard Chartered Debit Online',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditStandardChartered',
              'paymentOptionName': 'Kartu Kredit Standard Chartered',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Kartu Kredit Lainnya.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Kartu Kredit Lainnya</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan StandardChartered 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan Ringan Standard Chartered 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '59eb62a5-1a46-8ec2-a4d4-f9bbbc5bea3e',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredVisaPlatinumCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditStandardCharteredVisaPlatinum',
              'paymentOptionName': 'Kartu Kredit Standard Chartered Visa Platinum',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Visa Platinum Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Visa Platinum Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'StandardCharteredVisaPlatinumInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditStandardCharteredVisaPlatinum',
              'paymentOptionName': 'Kartu Kredit Standard Chartered Visa Platinum',
              'type': 'KartuKreditDebit',
              'name': 'StanChart Visa Platinum Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus StanChart Visa Platinum Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '17d62f13-0a15-ac97-0b41-8765657df61b',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan StandardChartered Visa Platinum 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'UOBCreditCard',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'KartuKreditUOB',
              'paymentOptionName': 'Kartu Kredit UOB',
              'type': 'KartuKreditDebit',
              'name': 'UOB Kartu Kredit',
              'active': true,
              'installment': false,
              'minAmount': 0,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus UOB Kartu Kredit</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'UOBInstallment',
              'alias': '',
              'paymentOptionCode': 'KartuKreditUOB',
              'paymentOptionName': 'Kartu Kredit UOB',
              'type': 'KartuKreditDebit',
              'name': 'UOB Kartu Kredit.',
              'active': true,
              'installment': true,
              'minAmount': 500000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Selesaikan pembayaran dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.</li><li>Proses konversi transaksi menjadi cicilan 0 % membutuhkan waktu 5-14 hari kerja terhitung sejak Anda melakukan transaksi.</li><li>Anda berkemungkinan terkena tagihan penuh jika tanggal cetak tagihan (billing cycle) Kartu Kredit Anda berdekatan dengan waktu transaksi Anda.</li><li>Jika Anda tertagih penuh, dengan kondisi hanya memiliki tagihan dari Blibli.com, silakan bayarkan cicilan pertama saja. Namun jika Anda juga memiliki tagihan di luar tagihan Blibli.com, mohon abaikan tagihan Blibli.com. Anda bisa mulai melakukan pembayaran cicilan Blibli.com di bulan berikutnya.</li><li>Pilih metode pembayaran ini untuk menikmati promo khusus UOB Kartu Kredit</li></ul>',
              'installments': [
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 6,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 6 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 3,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 3 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 24,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 24 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 18,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 18 bulan',
                  'active': true,
                  'margin': 0
                },
                {
                  'merchantPaymentMethodId': '0171407a-49d2-a158-03ca-7a6225db5c8b',
                  'tenor': 12,
                  'interestRate': 0,
                  'minAmount': 500000,
                  'description': 'Cicilan UOB 0% 12 bulan',
                  'active': true,
                  'margin': 0
                }
              ],
              'paymentRequiredDataList': []
            },
            {
              'code': 'VirtualAccountBcaOnline',
              'alias': 'Bank BCA',
              'paymentOptionCode': 'BankBCA',
              'paymentOptionName': 'Bank BCA',
              'type': 'Transfer',
              'name': 'Bank BCA',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 999999999999,
              'tnc': '<ul><li>Pilih metode pembayaran ini untuk melakukan pembayaran dengan M-BCA / KlikBCA / ATM BCA.</li><li>Setelah Anda bayar, pesanan Anda akan langsung diproses.</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'Indomaret',
              'alias': 'Bayar Penuh',
              'paymentOptionCode': 'Indomaret',
              'paymentOptionName': 'Indomaret',
              'type': 'Indomaret',
              'name': 'Indomaret',
              'active': true,
              'installment': false,
              'minAmount': 50000,
              'maxAmount': 5000000,
              'tnc': '<p><br></p><ul><li><strong>Gratis</strong> biaya transaksi</li><li>Pembayaran dilakukan dengan kasir Indomaret</li><li>Selesaikan pembayaran dalam 24 Jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            },
            {
              'code': 'AlfaGroup',
              'alias': 'AlfaGroup',
              'paymentOptionCode': 'AlfaGroup',
              'paymentOptionName': 'Alfamart, Alfamidi, Lawson dan Dan+Dan',
              'type': 'AlfaGroup',
              'name': 'AlfaGroup',
              'active': true,
              'installment': false,
              'minAmount': 10000,
              'maxAmount': 5000000,
              'tnc': '<p><br></p><ul><li><strong>Gratis</strong> biaya transaksi</li><li>Pembayaran dilakukan dengan kasir Alfamart/Alfamidi/Dan+Dan/Lawson</li><li>Selesaikan pembayaran dalam 24 jam untuk menghindari pembatalan transaksi secara otomatis</li></ul>',
              'installments': [],
              'paymentRequiredDataList': []
            }
          ]
        }
      }
    }
  },
  {
    method: 'GET',
    url: '/backend/flash/common/config',
    response: {
      status: 'OK',
      code: 200,
      data: {'facebookAppId': '1489897304628200', 'googleLoginKey': '23848155999-hii5dd7vo0cfj4v5nn17q3r09ocsqo09.apps.googleusercontent.com', 'failedThankyouPageTime': '5000000', 'checkoutExpiryTime': '300000', 'queueRefreshTime': '30000', 'orderRefreshTime': '3000', 'flashSaleStartTime': '1537450489000', 'pendingThankyouPageTime': '6000', 'flashSaleEndTime': '1539832200000', 'paymentStatus': 'true'}
    }
  }
]

export default routes
