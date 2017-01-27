const Book = require('Domain/Book/Book');

class CreateBookPresenter {
    constructor(book) {

        if(false === (book instanceof Book)) {
            throw new TypeError('book must be an instance of Book');
        }

        this._book = book;
    }

    convert() {
        return {
            name: book.getName(),
            description: book.description,
            publisher: book.publisher,
            pages: book.pages,
            author: book.author,
            _links: [
                {
                    link: 'http://caca'
                }
            ]
        }
    }
}