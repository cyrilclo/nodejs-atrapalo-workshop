const express = require('express');
const api = express.Router();
const bodyParser = require('body-parser');

/**
 * MIDDLEWARES
 */
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({
    extended: true
}));
api.use(function (req, res, next){
    console.log(req.ip, req.method, req.originalUrl);
    next();
});

require('app/routes/book')(api);

module.exports = api;
