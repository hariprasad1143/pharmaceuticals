import envDetect from '@common/src/util/env-detect'
import config from '@common/src/config'

module.exports.getCaptchaByEnv = function (hostname) {
  return envDetect.getEnvByHostname(hostname) === 'production' ? config.app.recaptcha.sitekey_prod : config.app.recaptcha.sitekey_dev
}
