
module.exports.getEnvByHostname = function (hostNameParam) {
  let res = 'production'
  let hostName = hostNameParam || window.location.hostname

  switch (hostName) {
    case 'localhost':
      res = 'localhost'
      break
    case 'glptraining1.blibli.com':
    case 'glptraining1.gdn-app.com':
      res = 'uat1'
      break
    case 'glptraining5.gdn-app.com':
      res = 'uat5'
      break
    case 'glpuata.gdn-app.com':
      res = 'uata'
      break
    case 'glpuatb.gdn-app.com':
      res = 'uatb'
      break
    case 'glpperf.gdn-app.com':
      res = 'perf'
      break
    default:
      res = 'production'
  }

  return res
}
