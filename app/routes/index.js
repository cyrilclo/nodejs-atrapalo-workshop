const express = require('express');
const app = express();
const api = app.Router;
const port = process.env.APP_PORT || 3000;
app.listen(port);

/**
 * MIDDLEWARES
 */
api.use(function (req, res, next){
    console.log(req.ip, req.method, req.originalUrl);
    next();
});

require('./book', api);