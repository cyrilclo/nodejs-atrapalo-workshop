const Book = require('Domain/Book/Book');

class BookPersistable {

    static buildPersistableModel(data) {
        return {
            name: data.getName(),
            author: data.getAuthor(),
            description: data.getDescription(),
            pages: data.getPages(),
            publisher: data.getPublisher()
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