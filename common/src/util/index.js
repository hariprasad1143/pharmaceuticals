module.exports.getScript = function (targetId, src, callback) {
  // embed script to target
  var script = document.createElement('script')
  script.src = src
  script.type = 'text/javascript'
  var targetEl = document.getElementById(targetId)
  if (!targetEl) {
    targetEl = document.createElement('div')
    targetEl.id = targetId
    document.body.appendChild(targetEl)
  }
  targetEl.appendChild(script)
  script.onload = function () {
    if (callback && typeof callback === 'function') {
      callback(script)
    }
  }
}

module.exports.getStaticPath = function () {
  return window._static_image_path
}

// get public static path from injected function
module.exports.getPublicStaticPath = function (publicPathFunc) {
  publicPathFunc = publicPathFunc || window._main_staticPublicPath
  return publicPathFunc()
}

module.exports.goUrl = function (url) {
  if (process.env.NODE_ENV !== 'testing') {
    window.location.href = url
  } else {
    window.history.pushState({}, '', url)
  }
}

module.exports.scrollToTop = function () {
  var scrollStep = window.scrollY / (1000 / 30)
  var scrollInterval = setInterval(function () {
    if (window.scrollY > 0) {
      window.scrollTo(0, window.scrollY - scrollStep)
    } else {
      clearInterval(scrollInterval)
    }
  }, 15)
}
