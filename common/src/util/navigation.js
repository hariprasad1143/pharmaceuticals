const DEFAULT_MESSAGE = 'Are you sure you want to navigate?'

function confirmNavigation (message) {
  return process.env.NODE_ENV !== 'testing' ? confirm(message || DEFAULT_MESSAGE) : true
}

module.exports.confirmNavigation = confirmNavigation

module.exports.windowNavigateWarning = function (message) {
  window.onbeforeunload = () => {
    return message
  }
}

module.exports.clearWindowNavigateWarning = function () {
  window.onbeforeunload = null
}
