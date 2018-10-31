import config from '@common/src/config'
import Cookies from 'js-cookie'

function addSamsungGlpCookie () {
  // add cookie if not exist
  if (!Cookies.get(config.app.cookies.samsungGlp.name)) {
    Cookies.set(config.app.cookies.samsungGlp.name, config.app.cookies.samsungGlp.value, config.app.cookies.samsungGlp.config)
  }
}

module.exports.validateSiteOrigin = function (doc) {
  doc = doc || document
  let referrer = doc.referrer
  // replace http with https
  if (referrer.indexOf('http:') === 0) {
    referrer = referrer.replace('http:', 'https:')
  }
  // not coming from samsung
  addSamsungGlpCookie()
}

module.exports.addSamsungGlpCookie = function () {
  return addSamsungGlpCookie()
}
