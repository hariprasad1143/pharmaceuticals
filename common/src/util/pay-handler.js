import util from '@common/src/util'

export default {
  generatePaymentRedirectUrl (redirectUrl, data) {
    var url = redirectUrl
    if (data) {
      for (let key of Object.keys(data)) {
        let sep = (url.indexOf('?') > -1) ? '&' : '?'
        url = url.concat(sep)
        url = url.concat(key + '=' + data[key])
      }
    }
    return url
  },
  execute (self, url, method, success, fail) {
    let redirectUrl = this.generatePaymentRedirectUrl(url)
    if (method.toLowerCase() === 'post') {
      self.$nextTick(() => {
        self.paymentPunchout().blibliForm().submit()
      })
    } else {
      util.goUrl(redirectUrl)
    }
  }
}
