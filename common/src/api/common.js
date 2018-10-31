import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '@common/src/config'

// only on non testing mode
if (process.env.NODE_ENV !== 'testing') {
  Vue.use(VueResource)
}

function getDataViaApi (path, cb, errorHandler, headerParams) {
  let headerObject = {'Cache-Control': 'no-cache'}
  Vue.http.get(config.getApiPath(path), {
    headers: typeof headerParams !== 'undefined' ? Object.assign(headerObject, headerParams) : headerObject
  }).then((res) => {
    cb(res)
  }, (error) => {
    if (typeof errorHandler === 'function') {
      errorHandler(error)
    }
  })
}

function postDataViaApi (path, cb, data, errorHandler, headerParams) {
  let headerObject = {}
  Vue.http.post(config.getApiPath(path), data, {
    headers: typeof headerParams !== 'undefined' ? Object.assign(headerObject, headerParams) : headerObject
  }).then((res) => {
    cb(res)
  }, (error) => {
    if (typeof errorHandler === 'function') {
      errorHandler(error)
    }
  })
}

function deleteViaApi (path, cb, errorHandler, headerParams) {
  let headerObject = {}
  Vue.http.delete(config.getApiPath(path), {
    headers: typeof headerParams !== 'undefined' ? Object.assign(headerObject, headerParams) : headerObject
  }).then((res) => {
    cb(res)
  }, (error) => {
    if (typeof errorHandler === 'function') {
      errorHandler(error)
    }
  })
}

export default {
  getConfig: (cb, code, errHandler) => {
    getDataViaApi(config.api.common.configs + '/' + code, cb, errHandler)
  },
  getStaticConfig: (cb, code, errHandler) => {
    getDataViaApi(config.api.common.static_config, cb, errHandler)
  },
  saveCurrentUser: (cb, data, errHandler) => {
    postDataViaApi(config.api.common.reserve_stock, cb, data, errHandler)
  },
  getOrder: (cb, hash, errHandler) => {
    getDataViaApi(config.api.common.orders + '?orderId=' + encodeURIComponent(hash), cb, errHandler)
  },
  loginGoogle: (cb, data, errHandler) => {
    postDataViaApi(config.api.common.login_google, cb, data, errHandler)
  },
  loginFb: (cb, data, errHandler) => {
    postDataViaApi(config.api.common.login_facebook, cb, data, errHandler)
  },
  repay: (cb, data, errHandler) => {
    postDataViaApi(config.api.common.repay, cb, data, errHandler)
  },
  getProductStocks: (cb, skuList, errorHandler) => {
    const SKU = 'sku'
    var skusQuery = ''
    for (let i in skuList) {
      skusQuery += (i > 0 ? '&' : '') + SKU + '=' + encodeURIComponent(skuList[i])
    }
    getDataViaApi(config.api.common.inventories_stock + '?' + skusQuery, cb, errorHandler)
  },
  sendNotifyMe: (cb, data, errHandler) => {
    postDataViaApi(config.api.common.notify_me, cb, data, errHandler)
  },
  getPromotionsStatus: (cb, promoList, errorHandler) => {
    const PROMO_ID = 'promoId'
    var promoQuery = ''
    for (let i in promoList) {
      promoQuery += (i > 0 ? '&' : '') + PROMO_ID + '=' + encodeURIComponent(promoList[i])
    }
    getDataViaApi(config.api.common.promotion_availables + '?' + promoQuery, cb, errorHandler)
  },
  pay: (cb, data, errHandler) => {
    postDataViaApi(config.api.common.pay, cb, data, errHandler)
  },
  getBackdoorInventories: (cb, backdoorKey, skuList, errHandler) => {
    const headerparams = {'backdoorKey': backdoorKey}
    const SKU = 'sku'
    var skusQuery = ''
    for (let i in skuList) {
      skusQuery += (i > 0 ? '&' : '') + SKU + '=' + encodeURIComponent(skuList[i])
    }
    getDataViaApi(config.api.common.inventories_backdoor + '?' + skusQuery, cb, errHandler, headerparams)
  },
  getBackdoorPromotions: (cb, backdoorKey, promoList, errHandler) => {
    const headerparams = {'backdoorKey': backdoorKey}
    const PROMO_ID = 'promoId'
    var promoQuery = ''
    for (let i in promoList) {
      promoQuery += (i > 0 ? '&' : '') + PROMO_ID + '=' + encodeURIComponent(promoList[i])
    }
    getDataViaApi(config.api.common.promotion_backdoor + '?' + promoQuery, cb, errHandler, headerparams)
  },
  getRemainingTime: (cb, errHandler) => {
    getDataViaApi(config.api.common.remaining_time, cb, errHandler)
  },
  validateToken: (callback, data, errorHandler) => {
    postDataViaApi(config.api.common.validate_token, callback, data, errorHandler)
  },
  validatePromoCode: (cb, data, errHandler) => {
    postDataViaApi(config.api.common.validate_promo_code, cb, data, errHandler)
  },
  getDashboardInfo: (cb, data, errHandler, backdoorKey) => {
    const headerParams = {'backdoorKey': backdoorKey}
    postDataViaApi(config.api.common.dashboard_info, cb, data, errHandler, headerParams)
  },
  getStores: (cb, errHandler) => {
    getDataViaApi(config.api.common.pickup_points, cb, errHandler)
  },
  getProducts: (cb, errHandler) => {
    getDataViaApi(config.api.common.products, cb, errHandler)
  },
  getGimmicks: (cb, errHandler) => {
    getDataViaApi(config.api.common.gimmicks, cb, errHandler)
  },
  getPromotions (callback, errHandler, id) {
    getDataViaApi(config.api.common.promotions(id), callback, errHandler)
  },
  getPayments: (cb, errHandler) => {
    getDataViaApi(config.api.common.payments, cb, errHandler)
  },
  getCmsContent: (cb, id, errHandler) => {
    getDataViaApi(config.api.common.content + '/' + id, cb, errHandler)
  },
  getProvinces (cb, errHandler) {
    getDataViaApi(config.api.common.provinces, cb, errHandler)
  },
  getCities (cb, errHandler, provinceId) {
    getDataViaApi(config.api.common.cities(provinceId), cb, errHandler)
  },
  getDistricts (cb, errHandler, cityId) {
    getDataViaApi(config.api.common.districs(cityId), cb, errHandler)
  },
  getUsers (cb, errHandler) {
    getDataViaApi(config.api.common.users, cb, errHandler)
  },
  login (cb, errHandler, data) {
    postDataViaApi(config.api.common.login, cb, data, errHandler)
  },
  getSubdistricts (cb, errHandler, districtId) {
    getDataViaApi(config.api.common.subdistricts(districtId), cb, errHandler)
  },
  addToCart: (cb, data, token, errHandler) => {
    postDataViaApi(config.api.common.addToCart(token), cb, data, errHandler)
  },
  getCartPayment: (cb, data, errHandler) => {
    getDataViaApi(config.api.common.getCartPayment + data.orderId, cb, errHandler)
  },
  getToken: (cb, data, errHandler) => {
    getDataViaApi(config.api.common.getToken + data, cb, errHandler)
  },
  logoutUser: (cb, errHandler) => {
    deleteViaApi(config.api.common.logoutUser, cb, errHandler)
  },
  getOrderHistory: (cb, errHandler) => {
    getDataViaApi(config.api.common.getOrderHistory, cb, errHandler)
  }
}
