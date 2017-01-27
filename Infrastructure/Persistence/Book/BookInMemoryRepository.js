'use strict';

const InMemoryRepository = require('Infrastructure/Persistence/InMemoryRepository');
const Book = require('Domain/Book/Book');
const BookPersistable = require('Infrastructure/Persistence/Book/BookPersistable');

class BookInMemoryRepository extends InMemoryRepository {

    constructor(){
        super();
    }

    save(book) {

        if(false === book instanceof Book) {
            throw new TypeError("The parameter must be an instance of Book");
        }

        let bookModel = BookPersistable.buildPersistableModel(book);

        super.save(bookModel).then(function(data) {
            return BookPersistable.buildDomainModel(data);
        }).catch(function(err) {
            console.log('ERROR');
            console.log(err);
        });
    }

    find(id) {
        return super.find(id);
    }
}

module.exports = BookInMemoryRepository;