let Book = require('Domain/Book/Book');

describe('Domain/Book/Book', function() {

    describe('Book Test', function() {
        it('should create a book', function () {

            const name = 'Book Name';
            const description = 'Book desc';
            const author = 'Book Name';
            const pages = 255;
            const publisher = 'Book Publisher';

            let book = new Book(
                name,
                description,
                author,
                pages,
                publisher
            );

            expect(book.name).to.be.equals(name);
            expect(book.description).to.be.equals(description);
            expect(book.author).to.be.equals(author);
            expect(book.pages).to.be.equals(pages);
            expect(book.publisher).to.be.equals(publisher);
        });
    });
});