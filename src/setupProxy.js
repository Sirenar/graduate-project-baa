const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware(
    '/api', {
        target : 'http://1.15.53.152:9999',
        changeOrigin : true,
        ws: true,
        pathRewrite : {
            '^/api' : ''
        },
    }));
};
