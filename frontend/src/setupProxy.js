const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'http:localhost/5000/api/createUser',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/api/createUser',
    createProxyMiddleware(proxy)
  );
};