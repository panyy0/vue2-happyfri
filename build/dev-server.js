
const config = require('../config');
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const opn = require('opn');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware

const server = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

const hotMiddleware = require('webpack-hot-middleware')(compiler);
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

const context = config.dev.context;
const proxypath = config.dev.proxypath;

let options = {
    target: proxypath,
    changeOrigin: true,
};
if (context.length) {
    server.use(proxyMiddleware(context, options))
}

// server.use(proxyMiddleware('/*/*', {
//     target: 'https://mainsite-restapi.ele.me',
//     changeOrigin: true,
//     secure: false,
// }))


// handle fallback for HTML5 history API
server.use(require('connect-history-api-fallback')());

// serve webpack bundle output
server.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware);

// serve pure static assets
let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
server.use(staticPath, express.static('./static'))

module.exports = server.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    let uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n');

    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {
        //opn(uri)
    }
})
