'use strict';

const MongoRepository = require('./../MongoRepository');
const Book = require('./../../Domain/Book/Book');

class BookMongoRepository extends MongoRepository {
    createSchema() {
        return new this.schema({
            name:  String,
            author: String
        });
    }

    save(book) {
        return
    }
}

module.exports = BookMongoRepository;