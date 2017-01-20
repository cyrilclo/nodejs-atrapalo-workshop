const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test_books');
mongoose.Promise = global.Promise;

const bodyParser = require('body-parser');
const app = require('express')();
const api = require('app/api');
const version = '0.1',
    port = 3000;
app.use('/api/' + version, api);
app.listen(port, function () {
    console.log(`[Atrapalo Booking Service] running in port ${port}`);
});