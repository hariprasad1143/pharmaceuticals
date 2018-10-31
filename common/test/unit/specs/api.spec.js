import apiRoutes from '@common/src/api-mock/mock/api-routes'
import config from '@common/src/config'

let routes = apiRoutes

function getRouteResponse (method, path) {
  let route = routes.find((item) => {
    return (method === item.method && path === item.url)
  })
  return route
}

// inject start
const commonApiInject = require('inject-loader!@common/src/api/common')

var commonApi = commonApiInject({
  'vue': {
    http: {
      get: (path) => {
        return new Promise((resolve) => {
          resolve(getRouteResponse('GET', path).response)
        })
      },
      post: (path, data) => {
        return new Promise((resolve, reject) => {
          var route = getRouteResponse('POST', path)
          let validParams = true
          let errors = {}

          if (route.param_body) {
            if (data) {
              for (let i in route.param_body) {
                if (typeof data[route.param_body[i]] === 'undefined') {
                  validParams = false
                  errors[route.param_body[i]] = ['BLANK', 'Required']
                }
              }
            } else {
              validParams = false
              for (let i in route.param_body) {
                validParams = false
                errors[route.param_body[i]] = ['BLANK', 'Required']
              }
            }
          }

          if (validParams) {
            resolve(route.response)
          } else {
            reject({
              code: 400,
              status: 'Error',
              errors: errors
            })
          }
        })
      }
    }
  }
}).default

var commonApiReject = commonApiInject({
  'vue': {
    http: {
      get: (path) => {
        return new Promise((resolve, reject) => {
          reject({error: 'ERROR'})
        })
      },
      // delete: (path) => {
      //   return new Promise((resolve, reject) => {
      //     reject({error: 'ERROR'})
      //   })
      // },
      post: (path, data) => {
        return new Promise((resolve, reject) => {
          reject({error: 'ERROR'})
        })
      }
    }
  }
}).default

describe('API access test', () => {
  it('getConfig with code', (done) => {
    commonApi.getConfig((res) => {
      var route = getRouteResponse('GET', config.api.common.configs + '/' + config.app.config.reserve_order)
      expect(res).to.deep.equal(route.response)
      done()
    }, config.app.config.reserve_order)
  })

  // error
  it('getConfig Error', (done) => {
    commonApiReject.getConfig(null, 'nocode', (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  // error no handler
  it('getConfig Error No handler', () => {
    commonApiReject.getConfig(null, 'nocode')
  })

  it('getOrderStatus', (done) => {
    commonApi.getOrderStatus((res) => {
      var route = getRouteResponse('POST', config.api.common.check_order)
      expect(res).to.deep.equal(route.response)
      done()
    }, {email: 'email@example.com', identityNumber: '0980980980', orderId: '234234234', captcha: '898908as098d09a8sd', phoneNumber: '09876556788'})
  })

  it('getOrderStatus Error with handler', (done) => {
    commonApiReject.getOrderStatus(null, '', (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('getOrder with hash', (done) => {
    let hash = 'ABCDEFG'
    commonApi.getOrder((res) => {
      var route = getRouteResponse('GET', config.api.common.orders + '/' + hash)
      expect(res).to.deep.equal(route.response)
      done()
    }, hash)
  })
  it('getOrder Error', (done) => {
    commonApiReject.getOrder(null, 'nocode', (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('getOrder Error No handler', () => {
    commonApiReject.getOrder(null, 'nocode')
  })
  it('repay', (done) => {
    commonApi.repay((res) => {
      var route = getRouteResponse('POST', config.api.common.repay)
      expect(res).to.deep.equal(route.response)
      done()
    }, {orderId: 'a', identityNumber: 'b'})
  })
  it('saveCurrentUser', (done) => {
    commonApi.saveCurrentUser((res) => {
      var route = getRouteResponse('POST', config.api.common.reserve_stock)
      expect(res).to.deep.equal(route.response)
      done()
    }, {items: [{a: '1'}], identityNumber: 'b', identityType: 'c', phoneNumber: 'd', email: 'e'})
  })
  it('saveCurrentUser Error', () => {
    commonApiReject.saveCurrentUser(null, 'nocode')
  })
  it('saveCurrentUser Error with Handle', (done) => {
    commonApiReject.saveCurrentUser(null, 'nocode', (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('getProductStocks', (done) => {
    commonApi.getProductStocks((res) => {
      var route = getRouteResponse('GET', config.api.common.inventories_stock + '?sku=ABC')
      expect(res).to.deep.equal(route.response)
      done()
    }, ['ABC'])
  })

  it('getProductStocks multiple', (done) => {
    commonApi.getProductStocks((res) => {
      var route = getRouteResponse('GET', config.api.common.inventories_stock + '?sku=ABC&sku=DEF')
      expect(res).to.deep.equal(route.response)
      done()
    }, ['ABC', 'DEF'])
  })

  it('getProductStocks Error with handler', (done) => {
    commonApiReject.getProductStocks(null, [], (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('getProductStocks Error', (done) => {
    commonApiReject.getProductStocks(null, [], (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('sendNotifyMe', (done) => {
    commonApi.sendNotifyMe(() => {
      done()
    }, {email: 'a', sku: 'b'})
  })

  it('getPromotionsStatus', (done) => {
    commonApi.getPromotionsStatus((res) => {
      var route = getRouteResponse('GET', config.api.common.promotion_availables + '?promoId=123')
      expect(res).to.deep.equal(route.response)
      done()
    }, ['123'])
  })

  it('getPromotionsStatus multiple', (done) => {
    commonApi.getPromotionsStatus((res) => {
      var route = getRouteResponse('GET', config.api.common.promotion_availables + '?promoId=123&promoId=456')
      expect(res).to.deep.equal(route.response)
      done()
    }, ['123', '456'])
  })

  it('getPromotionsStatus Error with handler', (done) => {
    commonApiReject.getPromotionsStatus(null, [], (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('getPromotionsStatus Error', (done) => {
    commonApiReject.getPromotionsStatus(null, [], (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('pay', (done) => {
    commonApi.pay((res) => {
      var route = getRouteResponse('POST', config.api.common.pay)
      expect(res).to.deep.equal(route.response)
      done()
    }, {
      pickupStoreId: 'abc',
      customer: {
        name: 'tes'
      },
      payment: {
        method: 'BCACreditCard'
      },
      promoId: '123',
      totalAmount: '10000',
      discount: '1000',
      paidAmount: '9000',
      cartId: 'abc12345'
    })
  })
  it('pay Error', () => {
    commonApiReject.pay(null, 'nocode')
  })
  it('saveCurrentUser Error with Handle', (done) => {
    commonApiReject.pay(null, 'nocode', (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('getBackdoorInventories', (done) => {
    commonApi.getBackdoorInventories((res) => {
      var route = getRouteResponse('GET', config.api.common.inventories_backdoor + '?sku=ABC')
      expect(res).to.deep.equal(route.response)
      done()
    }, 'ABCDEFGH', ['ABC'])
  })
  it('getBackdoorInventories multiple', (done) => {
    commonApi.getBackdoorInventories((res) => {
      var route = getRouteResponse('GET', config.api.common.inventories_backdoor + '?sku=ABC&sku=DEF')
      expect(res).to.deep.equal(route.response)
      done()
    }, 'ABCDEFGH', ['ABC', 'DEF'])
  })
  it('getBackdoorInventories Error with handler', (done) => {
    commonApiReject.getBackdoorInventories(null, 'ABCDEFGH', [], (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('getBackdoorInventories Error', (done) => {
    commonApiReject.getBackdoorInventories(null, '', [], (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('getBackdoorPromotions', (done) => {
    commonApi.getBackdoorPromotions((res) => {
      var route = getRouteResponse('GET', config.api.common.promotion_backdoor + '?promoId=ABC')
      expect(res).to.deep.equal(route.response)
      done()
    }, 'ABCDEFGH', ['ABC'])
  })
  it('getBackdoorPromotions multiple', (done) => {
    commonApi.getBackdoorPromotions((res) => {
      var route = getRouteResponse('GET', config.api.common.promotion_backdoor + '?promoId=ABC&promoId=DEF')
      expect(res).to.deep.equal(route.response)
      done()
    }, 'ABCDEFGH', ['ABC', 'DEF'])
  })
  it('getBackdoorPromotions Error with handler', (done) => {
    commonApiReject.getBackdoorPromotions(null, 'ABCDEFGH', [], (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('getBackdoorPromotions Error', (done) => {
    commonApiReject.getBackdoorPromotions(null, '', [], (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('getRemainingTime', (done) => {
    commonApi.getRemainingTime((res) => {
      var route = getRouteResponse('GET', config.api.common.remaining_time)
      expect(res).to.deep.equal(route.response)
      done()
    })
  })
  it('getRemainingTime error', (done) => {
    commonApiReject.getRemainingTime(null, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('validateToken success', (done) => {
    commonApi.validateToken((res) => {
      var route = getRouteResponse('POST', config.api.common.validate_token)
      expect(res).to.deep.equal(route.response)
      done()
    }, {accessToken: 'VIPSAMSUNG', captcha: ''})
  })
  it('validateToken error', (done) => {
    commonApiReject.validateToken(null, {}, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('validatePromoCode success', (done) => {
    commonApi.validatePromoCode((res) => {
      var route = getRouteResponse('POST', config.api.common.validate_promo_code)
      expect(res).to.deep.equal(route.response)
      done()
    }, {promoCode: 'SAMSUNG-25', items: ['1', '2']})
  })

  it('validatePromoCode failed', (done) => {
    commonApiReject.validatePromoCode(null, {}, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('getDashboardInfo success', (done) => {
    commonApi.getDashboardInfo((res) => {
      var route = getRouteResponse('POST', config.api.common.dashboard_info)
      expect(res).to.deep.equal(route.response)
      done()
    }, {})
  })

  it('getDashboardInfo failed', (done) => {
    commonApiReject.validatePromoCode(null, {}, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })
  it('getStores', (done) => {
    commonApi.getStores((res) => {
      var route = getRouteResponse('GET', config.api.common.pickup_points)
      expect(res).to.deep.equal(route.response)
      done()
    })
  })
  it('getStores error', (done) => {
    commonApiReject.getStores(null, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('getProducts success', (done) => {
    commonApi.getProducts((res) => {
      var route = getRouteResponse('GET', config.api.common.products + '/regular')
      expect(res).to.deep.equal(route.response)
      done()
    }, 'regular')
  })

  it('getProducts failed', (done) => {
    commonApiReject.getProducts(null, {}, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('getGimmicks success', (done) => {
    commonApi.getGimmicks((res) => {
      var route = getRouteResponse('GET', config.api.common.gimmicks)
      expect(res).to.deep.equal(route.response)
      done()
    })
  })

  it('getGimmicks failed', (done) => {
    commonApiReject.getGimmicks(null, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('getPayments success', (done) => {
    commonApi.getPayments((res) => {
      var route = getRouteResponse('GET', config.api.common.payments)
      expect(res).to.deep.equal(route.response)
      done()
    })
  })

  it('getPayments failed', (done) => {
    commonApiReject.getPayments(null, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('getCmsContent success', (done) => {
    commonApi.getCmsContent((res) => {
      var route = getRouteResponse('GET', config.api.common.content + '/' + config.app.cmsContent.ids.mainTnc)
      expect(res).to.deep.equal(route.response)
      done()
    }, config.app.cmsContent.ids.mainTnc)
  })

  it('getCmsContent failed', (done) => {
    commonApiReject.getCmsContent(null, {}, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('getProvinces success', (done) => {
    commonApi.getProvinces((res) => {
      var route = getRouteResponse('GET', config.api.common.provinces)
      expect(res).to.deep.equal(route.response)
      done()
    })
  })

  it('getProvinces failed', (done) => {
    commonApiReject.getProvinces(null, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    })
  })

  it('getCities success', (done) => {
    commonApi.getCities((res) => {
      var route = getRouteResponse('GET', config.api.common.cities('ID-6'))
      expect(res).to.deep.equal(route.response)
      done()
    }, {}, 'ID-6')
  })

  it('getCities failed', (done) => {
    commonApiReject.getCities(null, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    }, {})
  })

  it('getDistricts success', (done) => {
    commonApi.getDistricts((res) => {
      var route = getRouteResponse('GET', config.api.common.districs('ID-6-7'))
      expect(res).to.deep.equal(route.response)
      done()
    }, {}, 'ID-6-7')
  })

  it('getDistricts failed', (done) => {
    commonApiReject.getDistricts(null, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    }, {})
  })

  it('getSubdistricts success', (done) => {
    commonApi.getSubdistricts((res) => {
      var route = getRouteResponse('GET', config.api.common.subdistricts('ID-6-7-6'))
      expect(res).to.deep.equal(route.response)
      done()
    }, {}, 'ID-6-7-6')
  })

  it('getSubdistricts failed', (done) => {
    commonApiReject.getSubdistricts(null, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    }, {})
  })

  it('getAddresses success', (done) => {
    commonApi.getAddresses((res) => {
      var route = getRouteResponse('GET', config.api.common.addresses)
      expect(res).to.deep.equal(route.response)
      done()
    }, {})
  })

  it('getAddresses failed', (done) => {
    commonApiReject.getAddresses(null, (error) => {
      expect(error).to.deep.equal({error: 'ERROR'})
      done()
    }, {})
  })
})
