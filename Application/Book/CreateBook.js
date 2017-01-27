let BookRepository = require('Infrastructure/Persistence/Book/BookInMemoryRepository');
let Book = require('Domain/Book/Book');

class CreateBook {
    constructor() {
        this.BookRepository = new BookRepository();

        this.validate = function (bookRequest) {

            if(bookRequest.name === '') {
                throw new TypeError('Name attribute is required');
            }
            if(bookRequest.description === '') {
                throw new TypeError('Description attribute is required');
            }
            if(bookRequest.author === '') {
                throw new TypeError('Author attribute is required');
            }
            if(bookRequest.publisher === '') {
                throw new TypeError('Publisher attribute is required');
            }
            if(typeof parseInt(bookRequest.pages) !== 'number') {
                throw new TypeError('Pages attribute must be a valid number');
            }
        };
    }

    execute(bookRequest) {
        try {
            this.validate(bookRequest);

            let book = new Book(
                bookRequest.name,
                bookRequest.description,
                bookRequest.author,
                parseInt(bookRequest.pages),
                bookRequest.publisher
            );

            return this.BookRepository.save(book).then(function(data) {

                console.log('ÑÑÑÑÑÑÑÑÑÑÑ');
                console.log(data);

                return new CreateBookPresenter(data);
            }).catch(function(err) {
                return err;
            });

        } catch (err) {
            console.log(err);
            return err;
        }
    }
}

module.exports = CreateBook;