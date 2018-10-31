const util = require('@common/src/util')
const sizmekId = 'sizmek-tracker'

export default {
  loadScript: function (param) {
    var sizmekScript = 'https://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID='+ param + '&rnd=' +  (Math.random()+'') * 1000000
    if (process.env.NODE_ENV !== 'testing') {
      var el = document.getElementById(sizmekId)
      if (el) el.parentNode.removeChild(el)
      el = document.createElement('div')
      el.id = sizmekId
      document.body.appendChild(el)
      util.getScript(sizmekId, sizmekScript)
    }
  },
  onClickScript: function (param) {
    const ebConversionImg = new Image()
    const ebConversionURL = 'https://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID='+ param + '&ns=1'
    ebConversionImg.src = ebConversionURL
  }
}
