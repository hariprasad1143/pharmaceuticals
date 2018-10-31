import router from '@/router'
import config from '@common/src/config'
import Vue from 'vue'

describe('router', () => {
  it('ga', (done) => {
    window.ga = function (t, p, h) {
      if (t === 'set') {
        expect(p).to.equal('page')
        expect(h).to.equal('/product-listing')
      } else {
        expect(t).to.equal('send')
        expect(p).to.equal('pageview')
        done()
      }
    }
    router.push('/product-listing')
    Vue.nextTick(function () {
      delete window.ga
    })
  })

  it('ga', () => {
    router.push(config.app.pages.product_listing)
    Vue.nextTick(function () {
      expect(router.currentRoute.path).to.equal(config.app.pages.product_listing)
    })
  })
})
