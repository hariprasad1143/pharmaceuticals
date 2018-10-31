import util from '@common/src/util'
import paymentUtil from '@common/src/util/payment'
import productUtil from '@common/src/util/product'
import promotionUtil from '@common/src/util/promotion'
import adjustmentUtil from '@common/src/util/adjustment'
import cacheUtil from '@common/src/util/cache'
import products from '@common/src/data/products'
import promotions from '@common/src/data/promotions'
import navigationUtil from '@common/src/util/navigation'
import payHandler from '@common/src/util/pay-handler'
import recaptcha from '@common/src/util/recaptcha'
import config from '@common/src/config'
import sessionUtil from '@common/src/util/session'
import Cookies from 'js-cookie'

describe('util', () => {
  beforeEach(function () {
    // dummy _bwaq
    window._bwaq = {
      push () {
      }
    }
  })

  it('getScript', (done) => {
    util.getScript('abc', '/base/dummy/empty.js', function (s) {
      expect(s.src).to.match(/dummy\/empty\.js$/)
      done()
    })
  })

  it('getScript no callback', (done) => {
    util.getScript('abc', '/base/dummy/empty.js')
    setTimeout(done, 100)
  })

  it('getStaticPath', () => {
    window._static_image_path = '/doremi/'
    expect(util.getStaticPath()).to.equal('/doremi/')
  })

  it('goUrl', () => {
    util.goUrl('/doremi')
    expect(window.location.pathname).to.equal('/doremi')
  })
  it('scrollToTop', (done) => {
    window.scrollY = 100
    util.scrollToTop()
    setTimeout(function () {
      expect(window.scrollY).to.equal(100)
      window.scrollY = 0
      setTimeout(() => {
        expect(window.scrollY).to.equal(0)
        done()
      }, 100)
    }, 100)
  })

  it('getPaymentMethodsByMethod', () => {
    const payments = [
      {
        code: 'BankMandiri',
        name: 'Bank Mandiri',
        type: 'Transfer',
        transferTypes: [
          {
            paymentMethod: 'MandiriBillPayment'
          }
        ]
      },
      {
        code: 'ANZ',
        type: 'KartuKreditDebit',
        name: 'ANZ Kartu Kredit',
        fullPaymentMethod: 'ANZ',
        installment: false,
        installmentMethod: 'ANZInstallment',
        installmentMinAmount: 500000,
        installmentMaxAmount: 1000000000000,
        installments: [
          { tenor: 3, minAmount: 500000 },
          { tenor: 6, minAmount: 500000 },
          { tenor: 12, minAmount: 500000 }
        ]
      }
    ]

    expect(paymentUtil.getPaymentMethodsByMethod('MandiriBillPayment', payments)).to.deep.equal(payments[0])
    expect(paymentUtil.getPaymentMethodsByMethod('ANZInstallment', payments)).to.deep.equal(payments[1])
  })

  it('getProductBySku', () => {
    const product = products.list[0]

    expect(productUtil.getProductBySku(product.sku)).to.deep.equal(product)
    expect(productUtil.getProductBySku('empty')).to.deep.equal({sku: 'empty'})
  })

  it('getProductSkus', () => {
    expect(productUtil.getAllSku().length > 0).to.equal(true)
  })

  it('findPromotionById', () => {
    const promotion = promotions.list[0]
    expect(promotionUtil.findById(promotion.id)).to.deep.equal(promotion)
  })

  it('getPromotionIds', () => {
    expect(promotionUtil.getAllIds().length > 0).to.equal(true)
  })

  it('confirmNavigation', () => {
    expect(navigationUtil.confirmNavigation('a')).to.equal(true)
  })

  it('windowNavigateWarning', () => {
    window.onbeforeunload = null
    expect(window.onbeforeunload).to.equal(null)
    navigationUtil.windowNavigateWarning('test')
    expect(typeof window.onbeforeunload).to.equal('function')
    navigationUtil.clearWindowNavigateWarning()
    expect(window.onbeforeunload).to.equal(null)
  })

  it('generatePaymentRedirectUrl', () => {
    expect(payHandler.generatePaymentRedirectUrl('doremi.com/test', {a: 1, b: '2'})).to
      .equal('doremi.com/test?a=1&b=2')
    expect(payHandler.generatePaymentRedirectUrl('doremi.com/test')).to
      .equal('doremi.com/test')
  })

  it('pay execute post', (done) => {
    const self = {
      paymentPunchout: function () {
        return {
          blibliForm: function () {
            return {
              submit: function () {
                done()
              }
            }
          }
        }
      },
      $nextTick: function (func) {
        func()
      }
    }
    payHandler.execute(self, 'aa', 'post')
  })
  it('pay execute get', () => {
    payHandler.execute(self, '/aa', 'get')
    expect(window.location.pathname).to.equal('/aa')
  })

  it('recaptcha', () => {
    expect(recaptcha.getCaptchaByEnv('galaxylaunchpack.blibli.com')).to.equal(config.app.recaptcha.sitekey_prod)
    expect(recaptcha.getCaptchaByEnv('glptraining1.blibli.com')).to.equal(config.app.recaptcha.sitekey_dev)
  })

  it('validateSiteOrigin redirected', () => {
    Cookies.remove(config.app.cookies.samsungGlp.name)
    config.app.samsungGlpSite = '/abc'

    sessionUtil.validateSiteOrigin({
      referrer: '/doremi'
    })

    expect(window.location.pathname).to.equal('/aa')
  })

  it('validateSiteOrigin valid origin', () => {
    expect(window.location.pathname).to.equal('/aa')
    Cookies.remove(config.app.cookies.samsungGlp.name)
    config.app.samsungGlpSite = '//abc'

    const doc = {
      referrer: 'https://abc.com'
    }

    expect(doc.referrer.indexOf('https:' + config.app.samsungGlpSite) !== 0).to.equal(false)
    sessionUtil.validateSiteOrigin(doc)

    util.goUrl('/doremi')
    expect(window.location.pathname).to.equal('/doremi')
  })

  it('validateSiteOrigin valid origin from http', () => {
    Cookies.remove(config.app.cookies.samsungGlp.name)
    config.app.samsungGlpSite = '//abc'

    const doc = {
      referrer: 'http://abc'
    }

    expect(doc.referrer.indexOf('http:') === 0).to.equal(true)
    sessionUtil.validateSiteOrigin(doc)
    expect(window.location.pathname).to.equal('/doremi')
  })

  it('validateSiteOrigin valid origin from https', () => {
    Cookies.remove(config.app.cookies.samsungGlp.name)
    config.app.samsungGlpSite = '//abc'

    const doc = {
      referrer: 'https://abc'
    }

    expect(doc.referrer.indexOf('https:') === 0).to.equal(true)
    sessionUtil.validateSiteOrigin(doc)
    expect(window.location.pathname).to.equal('/doremi')
  })

  it('addSamsungGlpCookie', () => {
    Cookies.remove(config.app.cookies.samsungGlp.name)
    sessionUtil.addSamsungGlpCookie()
    expect(!!Cookies.get(config.app.cookies.samsungGlp.name)).to.equal(true)
  })

  it('getSgiGiftPromoCode exist', () => {
    let adjustments = [
      {
        amount: -250000,
        name: 'Galaxy Launch Pack SGI S4 Promo',
        promoCode: 'S4GL4Z4Z7CCG'
      },
      {
        amount: 0,
        name: 'Galaxy Launch Pack VIP Access Code',
        promoCode: 'VDJU9ZB46RV'
      }
    ]
    expect(adjustmentUtil.getPromoCodeByPrefix(adjustments, 'S')).to.equal('S4GL4Z4Z7CCG')

    adjustments = [
      {
        amount: -250000,
        name: 'Galaxy Launch Pack SGI S4 Promo',
        promoCode: 'sgigift'
      },
      {
        amount: 0,
        name: 'Galaxy Launch Pack VIP Access Code',
        promoCode: 'VDJU9ZB46RV'
      }
    ]
    expect(adjustmentUtil.getPromoCodeByPrefix(adjustments, 'S')).to.equal('sgigift')
  })

  it('getSgiGiftPromoCode not exist', () => {
    let adjustments = []
    expect(adjustmentUtil.getPromoCodeByPrefix(adjustments, 'S')).to.equal('')

    adjustments = [
      {
        amount: 0,
        name: 'Galaxy Launch Pack VIP Access Code',
        promoCode: 'VDJU9ZB46RV'
      }
    ]
    expect(adjustmentUtil.getPromoCodeByPrefix(adjustments, 'S')).to.equal('')
  })

  it('getCashbackAmount exist', () => {
    let adjustments = [
      {
        amount: -250000,
        name: 'Galaxy Launch Pack SGI S4 Promo'
      }
    ]
    expect(adjustmentUtil.getCashbackAmount(adjustments)).to.equal(250000)
  })

  it('getCashbackAmount not exist', () => {
    let adjustments = []
    expect(adjustmentUtil.getCashbackAmount(adjustments)).to.equal(0)
    adjustments = [
      {
        amount: 0,
        name: 'Galaxy Launch Pack VIP Access Code',
        promoCode: 'VDJU9ZB46RV'
      }
    ]
    expect(adjustmentUtil.getCashbackAmount(adjustments)).to.equal(0)
  })

  it('isExpire return false', () => {
    const data = {
      tnc: {
        createdDate: Date.now(),
        value: 1000
      }
    }
    const key = 'tnc'
    const expiryInterval = 300000
    const result = cacheUtil.isExpire(data, key, expiryInterval)
    expect(result).to.equal(false)
  })

  it('isExpire return true', () => {
    const data = {}
    const key = 'tnc'
    const expiryInterval = 300000
    const result = cacheUtil.isExpire(data, key, expiryInterval)
    expect(result).to.equal(true)
  })
})
