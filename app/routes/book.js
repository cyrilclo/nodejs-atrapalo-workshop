const CreateBook = require('Application/Book/CreateBook');
const bodyParser = require('body-parser');

module.exports = function(api) {
    api.post('/book', function (req, res) {
        let createBook = new CreateBook();
        createBook.execute(req.body).then(function(data) {
            res.status(200).json(data);
        }).catch(function(err) {
            res.status(500).json(err.message);
        });
    });

    api.get('/book/:bookId', function (req, res) {

    });

    api.get('/books', function (req, res) {
        console.log('boooks');
    });
}

;