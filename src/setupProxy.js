const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api1",
    createProxyMiddleware({
      target:
        "https://my-json-server.typicode.com/legowen/hnm-react-router",
      changeOrigin: true,
    })
  );

    app.use(
    "/api2",
    createProxyMiddleware({
      target:
        "https://my-json-server.typicode.com/legowen/hnm-react-router",
      changeOrigin: true,
    })
    );

    app.use(
    "/api2/products",
    createProxyMiddleware({
      target:
        "https://my-json-server.typicode.com/legowen/hnm-react-router",
      changeOrigin: true,
    })
    );
};