import Vue from 'vue'
import '@common/src/api/http-status-interceptor'
import ApiRoutes from '@common/src/api-mock/mock/api-routes'

describe('http-status-interceptor', () => {
  it('Waiting Page Opened', (done) => {
    ApiRoutes.push(
      {
        method: 'GET',
        url: '/backend/flashsale/window-opened',
        status: 301,
        response: {
          code: 301
        }
      })
    Vue.http.get('/backend/flashsale/window-opened').catch(function (error) {
      expect(error.status).to.equal(301)
      done()
    })
  })

  it('Empty Response', (done) => {
    Vue.http.get('/backend/flashsale/empty-response').catch(function (error) {
      expect(error.status).to.equal(404)
      done()
    })
  })

  it('Index of /backend/flashsale <= -1', (done) => {
    ApiRoutes.push(
      {
        method: 'GET',
        url: '/backend/other',
        status: 301
      })
    Vue.http.get('/backend/other').catch(function (error) {
      expect(error.status).to.equal(301)
      done()
    })
  })

  it('Response.status !== 301', (done) => {
    ApiRoutes.push(
      {
        method: 'GET',
        url: '/backend/flashsale/otherError',
        status: 302
      })
    Vue.http.get('/backend/flashsale/otherError').catch(function (error) {
      expect(error.status).to.equal(302)
      done()
    })
  })
})