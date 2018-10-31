var express = require('express');
var app = express();
var compression = require('compression');
var proxy = require('http-proxy-middleware');
var config = require('./config');
var interceptor = require('express-interceptor');
var fs = require('fs');

app.use(compression({ threshold: 0 }));

// replace vars
var replaceVars = interceptor(function (req, res, next) {
  if (res.headersSent) {
    next()
    return
  }
  return {
    // Only HTML responses will be intercepted
    isInterceptable: function () {
      return !(req.url.startsWith('/static/') ||
        req.url.startsWith('/backend/') ||
        req.url.startsWith('/s_images/'))
    },
    // Appends a paragraph at the end of the response body
    intercept: function (body, send) {
      send(body
        .replace(/{{_STATIC_PUBLIC_PATH}}/g, '/')
        .replace(/{{_ENV_PREFIX}}/g, 'localhost.')
        .replace('{{_STATIC_IMAGE_PUBLIC_PATH}}', 'aa/')
      )
    }
  };
})

app.use(replaceVars)

app.use(express.static(__dirname + '/dist', {maxAge: '30d'}));

// proxy
var proxyTable = config.dev_nomock.proxyTable
for (var i in proxyTable) {
  app.use(i, proxy(proxyTable[i]))
}

app.all("/*", function(req, res, next) {
  if (req.url.startsWith('/static/') ||
    req.url.startsWith('/backend/') ||
    req.url.startsWith('/s_images/')) {
    next()
    return
  }

  fs.readFile(__dirname + '/dist/index.html', function (error, pgResp) {
    if (error) {
      // res.writeHead(404);
      res.write('Contents you are looking are Not Found');
    } else {
      // res.writeHead(200);
      res.write(pgResp);
    }
    res.end()
  });
});

var server = app.listen(9100, function () {

 var host = server.address().address;
  var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port)

});
