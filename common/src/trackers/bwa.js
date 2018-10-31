const util = require('@common/src/util')
window.deferscriptlist = window.deferscriptlist || []

var loadBWA = function () {
  var bwaScript = 'https://www.blibli.com/wcsstore/bwa.js'
  if (process.env.NODE_ENV !== 'testing') {
    util.getScript('trackers', bwaScript, function () {
      // var bwa = new BWA()
    })
  }
}

window.deferscriptlist.push(loadBWA)
