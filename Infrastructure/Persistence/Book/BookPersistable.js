const Book = require('Domain/Book/Book');

class BookPersistable {

    static buildPersistableModel(data) {
        return {
            name: data.name,
            author: data.author,
            description: data.description,
            pages: data.pages,
            publisher: data.publisher
        };
    }

    static buildDomainModel(data) {
        try {
            let book = new Book(
                data.name,
                data.description,
                data.author,
                data.pages,
                data.publisher
            );

            book.id = data._id;
            book.updatedAt = data.updatedAt;
            book.createdAt = data.createdAt;

            return book;
        }
        catch (err) {
            return err;
        }
    }
}

module.exports = BookPersistable;