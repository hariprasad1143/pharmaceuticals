const util = require('../../../common/src/util')

const imageStaticSrcPath = util.getStaticPath(typeof window === 'undefined' ? '/' : null)
const contextPath = ''

module.exports = {
  api: {
    base_path: '',
    common: {
      configs: '/backend/flashsale/configurations',
      static_config: '/backend/flash/common/config',
      reserve_stock: '/backend/flashsale/payment/_reserve',
      check_order: '/backend/flashsale/orders/_check',
      pay: '/backend/flash/common/payment',
      orders: '/backend/flash/common/order',
      repay: '/backend/flash/common/payment/repay',
      remaining_time: '/backend/flashsale/remaining-time',
      validate_token: '/backend/flashsale/token/_validate',
      // stock
      inventories_stock: '/backend/flashsale/inventories/_stock',
      inventories_backdoor: '/backend/flashsale/inventories/internal/_stock',
      notify_me: '/backend/flashsale/wishlist/_notify',
      // promotion
      validate_promo_code: '/backend/flashsale/promotions/_validate',
      promotion_availables: '/backend/flashsale/promotions/_availables',
      promotion_backdoor: '/backend/flashsale/promotions/internal/_stock',
      dashboard_info: '/backend/flashsale/internal/_dashboard',
      pickup_points: '/backend/flashsale/pickup-points',
      products: '/backend/flash/common/products',
      gimmicks: '/backend/flashsale/gimmicks',
      promotions: id => `/backend/flashsale/promotions/${id}`,
      payments: '/backend/flashsale/payments',
      content: '/backend/common/content',
      // region
      provinces: '/backend/flash/common/region/provinces',
      cities: provinceId => `/backend/flash/common/region/provinces/${provinceId}/cities`,
      districs: cityId => `/backend/flash/common/region/cities/${cityId}/districts`,
      subdistricts: districtId => `/backend/flash/common/region/districts/${districtId}/subdistricts`,
      users: '/backend/flash/common/users',
      login: '/backend/flash/common/users/_login/',
      login_facebook: '/backend/flash/common/users/_login-facebook',
      login_google: '/backend/flash/common/users/_login-google',
      addToCart: token => `/backend/flash/common/carts/${token}`,
      getCartPayment: '/backend/flash/common/payment/change-payment/',
      getToken: '/sqs-service/api/token/getOne?productSKU=',
      logoutUser: '/backend/flash/common/users/_logout',
      getOrderHistory: '/backend/flash/common/order/pending'
    }
  },
  paths: {
    img_static_src: imageStaticSrcPath
  },
  getApiPath: function (apiPath) {
    return this.api.base_path + apiPath
  },
  app: {
    contextPath: contextPath,
    pages: {
      home: contextPath + '/',
      checkout: contextPath + '/flash-sale/checkout',
      pickup_selection: contextPath + '/flash-sale/checkout/pickup-selection',
      payment_selection: contextPath + '/flash-sale/checkout/payment-selection',
      checkout_summary: contextPath + '/flash-sale/checkout/checkout-summary',
      product_listing: contextPath + '/flash-sale',
      order_history: contextPath + '/flash-sale/order-history',
      waiting: contextPath + '/flash-sale/waiting',
      product_accessories: contextPath + '/product-accessories',
      check_order: contextPath + '/flash-sale/check-order',
      order_detail: contextPath + '/flash-sale/order-detail',
      thank_you: contextPath + '/flash-sale/thank-you',
      repay: contextPath + '/flash-sale/checkout/repay',
      repay_order: contextPath + '/flash-sale/repay',
      unexpected_error: contextPath + '/flash-sale/we-are-sorry',
      backdoor: contextPath + '/195a7425cc8649bebd2bc53d54b26107',
      backdoor_dashboard: contextPath + '/195a7425cc8649bebd2bc53d54b26107/dashboard',
      not_found: contextPath + '/flash-sale/not-found',
      vip_access: contextPath + '/8d66def1ee7f4bda88818ec194ad551c',
      countdown: contextPath + '/flash-sale/countdown',
      login: contextPath + '/flash-sale/login'
    },
    recaptcha: {
      sitekey_prod: '6Lc2DC0UAAAAADz46thoVgAzeak2LQjuo7KXr5hQ',
      sitekey_dev: '6LdmkisUAAAAAK8E9XY6-4BuiYFHSSlAmFdiAx-j'
    },
    trackers: {
      userIdParam: '-1002',
      bwaMemberType: 'g',
      fb_pixel: '1881489615258153'
    },
    livechat: {
      name: 'Live Chat',
      url: '//livechat.blibli.com/chatserver/chatwindow.aspx',
      planId: '871',
      siteId: '1000185',
      windowConfig: 'width=400,height=450,left=200,top=100,status=yes,toolbar=no,menubar=no,resizable=yes,location=no,titlebar=no'
    },
    form: {
      default: {
        phoneCountryCode: '+62',
        identityType: 'KTP'
      }
    },
    cashback: 750000,
    checkoutTimeLimit: 300000,
    // TODO UNCOMMENT THIS FOR PRODUCTION 10/9/2018 FLASHSALE
    // flashsaleStartTime: 1536548400000,
    // TODO DELETE THIS FOR PRODUCTION 10/9/2018 FLASHSALE 1536489063000
    flashsaleStartTime: 0,
    flashsaleEndTime: 1536589200000,
    queueRefreshTime: 30000,
    countdownInterval: 1000,
    config: {
      reserve_order: 'isCaptchaForReserveStockActive',
      check_order: 'isCaptchaForCheckOrderActive'
    },
    navigateWarning: 'Anda yakin ingin meninggalkan halaman? Data akan terhapus dan Anda perlu melakukan pengisian ulang. Lanjutkan?',
    samsungGlpSite: '//www.samsung.com/id/galaxylaunchpack',
    cookies: {
      samsungGlp: {
        name: 'samsungGlp',
        value: 1,
        config: {
          expires: 1 / 8
        }
      },
      samsungAccessToken: {
        name: 'samsungAccessToken',
        config: {
          expires: 1
        }
      },
      samsungAccessTokenType: {
        name: 'samsungAccessTokenType',
        config: {
          expires: 1
        }
      },
      blibli: {
        isMember: 'Blibli-Is-Member',
        username: 'Blibli-User-Id'
      }
    },
    default: {
      locale: 'ID'
    },
    accessType: {
      vip: 'v1f40aba2-398b-43cb-b65a-51537e320fa',
      spc: 's8b43e07d-d8b3-4a06-8a7f-8283ee4e808',
      spc_exhibition: 'e57c4900e-f0ed-4024-b650-2aa1d554ca7',
      regular: 'regular',
      xiaomi: 'redmi6a'
    },
    dashboardLabel: {
      customers: [
        {
          type: 'regular',
          label: 'GLP'
        },
        {
          type: 'spc',
          label: 'SPC'
        },
        {
          type: 'vip',
          label: 'VIP'
        },
        {
          type: 'spc_exhibition',
          label: 'SPC-EXHIBITION'
        }
      ],
      phones: [
        {
          type: 'Note9-128gb',
          label: 'Note9 128GB',
          tags: ['Note9-128gb']
        },
        {
          type: 'Note9-512gb',
          label: 'Note9 512GB',
          tags: ['Note9-512gb']
        }
      ],
      phone_storages: [
        {
          type: 'Note9-128gb',
          label: 'Note9 128GB'
        },
        {
          type: 'Note9-512gb',
          label: 'Note9 512GB'
        }
      ],
      phone_variants: [
        {
          label: 'Note9 Midnight Black 128GB',
          spec: 'Midnight Black - 128 GB',
          group: 'Note9-128gb'
        },
        {
          label: 'Note9 Ocean Blue 128GB',
          spec: 'Ocean Blue - 128 GB',
          group: 'Note9-128gb'
        },
        {
          label: 'Note9 Metallic Copper 128GB',
          spec: 'Metallic Copper - 128 GB',
          group: 'Note9-128gb'
        },
        {
          label: 'Note9 Midnight Black 512GB',
          spec: 'Midnight Black - 512 GB',
          group: 'Note9-512gb'
        },
        {
          label: 'Note9 Ocean Blue 512GB',
          spec: 'Ocean Blue - 512 GB',
          group: 'Note9-512gb'
        }
      ]
    },
    disabledHome: {
      paths: [contextPath + '/countdown']
    },
    sgiGiftPromoCodePrefix: 'S',
    tokenPrefixes: {
      vip: 'V',
      spc: 'S',
      spc_exhibition: 'E'
    },
    cmsContent: {
      expireInterval: 300000, // in 5 mins
      ids: {
        mainTnc: 'flashsale-main-tnc',
        promoTnc: 'flashsale-promo-tnc',
        pickupMethods: 'flashsale-pickup-methods',
        receiptTnc: 'flashsale-receipt-tnc',
        checkoutNotes: 'flashsale-checkout-notes',
        gimmickRemark: productGroup => `flashsale-gimmick-remark-${productGroup}`
      }
    },
    promoFormEnabled: false,
    localStorageLoggedIn: 'xiaomiFlashSaleLoggedIn'
  }
}
