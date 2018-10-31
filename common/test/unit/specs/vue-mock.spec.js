import Vue from 'vue'
import '@common/src/api-mock/vue-mock'

describe('vue-mock', () => {
  it('404 request', (done) => {
    Vue.http.get('/random/path').catch(function (error) {
      expect(error.status).to.equal(404)
      done()
    })
  })

  it('Param body not exist', (done) => {
    let newRoute = {
      method: 'GET',
      url: '/path/bodynotexist',
      response: {
        code: 200,
        status: 'OK'
      }
    }
    var newMockRoutes = window.concatMockRoutes([newRoute])

    let route = newMockRoutes.find((item) => {
      return (newRoute.method === item.method && newRoute.url === item.url)
    })
    expect(route).to.deep.equal(newRoute)

    Vue.http.get('/path/bodynotexist').then(function (response) {
      expect(response.body.status).to.equal('OK')
      expect(response.status).to.equal(200)
      done()
    })
  })

  it('Param body exist', (done) => {
    window.concatMockRoutes([
      {
        method: 'POST',
        url: '/path/bodyexist',
        param_body: ['username', 'password'],
        response: {
          code: 200,
          status: 'OK'
        }
      }])
    Vue.http.post('/path/bodyexist', {username: 1, password: 1}).then(function (response) {
      expect(response.body.status).to.equal('OK')
      expect(response.status).to.equal(200)
      done()
    })
  })

  it('Missing body', (done) => {
    window.concatMockRoutes([
      {
        method: 'POST',
        url: '/path/missingbody',
        param_body: ['username', 'password'],
        response: {
          code: 200,
          status: 'OK'
        }
      }])
    Vue.http.post('/path/missingbody').catch(function (response) {
      expect(response.status).to.equal(400)
      expect(response.body.status).to.equal('Error')
      expect(response.body.errors.username).to.exist
      expect(response.body.errors.password).to.exist
      done()
    })
  })

  it('Missing username', (done) => {
    window.concatMockRoutes([
      {
        method: 'POST',
        url: '/path/missingusername',
        param_body: ['username', 'password'],
        response: {
          code: 200,
          status: 'OK'
        }
      }])
    Vue.http.post('/path/missingusername', {password: 1}).catch(function (response) {
      expect(response.status).to.equal(400)
      expect(response.body.status).to.equal('Error')
      expect(response.body.errors.username).to.exist
      done()
    })
  })

  it('Missing query param', (done) => {
    window.concatMockRoutes([
      {
        method: 'GET',
        url: '/path/missingparam',
        params: ['param1'],
        response: {
          code: 200,
          status: 'OK'
        }
      }])
    Vue.http.get('/path/missingparam').catch(function (response) {
      expect(response.status).to.equal(400)
      expect(response.body.status).to.equal('Error')
      expect(response.body.errors.param1).to.exist
      done()
    })
  })

  it('Add mock routes to main', () => {
    expect(window.concatMockRoutes).to.exist

    var subRoutes = [{
      method: 'GET',
      url: '/my/url'
    }]

    var newRoutes = window.concatMockRoutes(subRoutes)

    expect(newRoutes[newRoutes.length - 1].url).to.equal('/my/url')
  })

  it('Delete route', (done) => {
    window.concatMockRoutes([
      {
        method: 'DELETE',
        url: '/path/delete',
        response: {
          code: 200,
          status: 'OK'
        }
      }])
    Vue.http.delete('/path/delete/me').then((res) => {
      expect(res.body.code).to.equal(200)
      done()
    })
  })
})
