const fse = require('fs-extra')
const path = require('path')
const hosts = require('../../common/config/hosts')
const chalk = require('chalk')
const replace = require('replace-in-file')
const escapeStringRegexp = require('escape-string-regexp')

var dist_folder = __dirname + '/../dist/'
var dist_css_folder = dist_folder + 'static/css/'

// perform replication
const PROD_STATIC_URL = hosts.production.static_url
function replicateIndexCss (css_files) {
  for (i in hosts) {
    // skip production
    if (i === 'production') {
      continue
    }
    replicateIndexCssFileBasedOnEnv(css_files, i, hosts[i].static_url)
  }
}

// replicate css for various env
function replicateIndexCssFileBasedOnEnv(css_files, prefix, url) {
  for (let i in css_files) {
    const src = path.join(dist_css_folder, css_files[i])
    const target = path.join(dist_css_folder, prefix + '.' + path.basename(src))
    console.log(chalk.green('generating file: ' + target))

    fse.copySync(src, target)

    // replace prod url with env url
    const replaceOpts = {
      files: target,
      from: new RegExp(escapeStringRegexp(PROD_STATIC_URL), 'g'),
      to: url
    }
    replace.sync(replaceOpts)
    console.log(chalk.cyan(PROD_STATIC_URL + ' replaced with ' + url))
  }
}
// end replication

//css
var css_files = fse.readdirSync(dist_css_folder)

css_files = css_files.filter(a=>a.match(/^app\.(.*)\.css$/))

console.log(chalk.cyan('replicating files for various env..'))
replicateIndexCss(css_files)
