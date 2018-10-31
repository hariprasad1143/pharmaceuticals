module.exports.initGoogleLogin = function (googleLoginKey, attachFn) {
    /* eslint-disable no-undef */
  window.gapi.load('auth2', function () {
    window.auth2 = window.gapi.auth2.init({
      client_id: googleLoginKey,
      scope: 'profile'
    })
    attachFn()
  })
}

module.exports.getGoogleUser = function () {
    /* eslint-disable no-undef */
  return window.auth2.currentUser.get()
}

module.exports.attachBtnAction = function (className, successFn, errorFn) {
    /* eslint-disable no-undef */
  let attach = function (el, sFn, eFn) {
    window.auth2.attachClickHandler(el, {}, sFn, eFn)
  }

  let els = document.getElementsByClassName(className)
  for (var i = 0; i < els.length; i++) {
    attach(els[i], successFn, errorFn)
  }
}
