'use strict';

const InMemoryRepository = require('Infrastructure/Persistence/InMemoryRepository');
const Book = require('Domain/Book/Book');

class BookInMemoryRepository extends InMemoryRepository {

    constructor(){
        super();
    }

    save(book) {

        if(false === book instanceof Book) {
            throw "The parameter must be an instance of Book";
        }

        return super.save(book);
    }

    find(id) {
        return super.find(id);
    }
}

module.exports = BookInMemoryRepository;