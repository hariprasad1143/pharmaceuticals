// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  // beforeEach(browser) {
  //   // automatically uses dev Server port from /config.index.js
  //   // default: http://localhost:8080
  //   // see nightwatch.conf.js
  //   const devServer = browser.globals.devServerURL
  //
  //   browser
  //     .url(devServer)
  //     .waitForElementVisible('#app', 5000)
  // },
  'Check banners': function (browser) {
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#main-app', 5000)
      .assert.elementPresent('.VueCarousel-inner')
      .assert.elementCount('.VueCarousel-inner .VueCarousel-slide a img', 3)
      .assert.attributeContains('.VueCarousel-inner .VueCarousel-slide a', 'target', '_blank')
      .end()
  }
}
