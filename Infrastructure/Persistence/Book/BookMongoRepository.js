'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MongoRepository = require('Infrastructure/Persistence/MongoRepository');
const BookPersistable = require('Infrastructure/Persistence/Book/BookPersistable');
const Book = require('Domain/Book/Book');
const MODEL_NAME = 'Book';
const BookSchema = new Schema({
        name:  String,
        author: String,
        description: String,
        pages: Number,
        publisher: String
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    });
const BookModel = mongoose.model('Book', BookSchema);

class BookMongoRepository extends MongoRepository {

    constructor(){
        super();
        this.model = BookModel;
    }

    getModelName() {
        return MODEL_NAME;
    }

    getSchema(){
        return {
                name:  String,
                author: String,
                description: String,
                pages: Number,
                publisher: String
        };
    }

    save(book) {

        if(false === book instanceof Book) {
            throw new TypeError("The parameter must be an instance of Book");
        }
        let bookModel = new this.model(BookPersistable.buildPersistableModel(book));

        return super.save(bookModel).then(function(data) {
            return BookPersistable.buildDomainModel(data);
        });
    }

    find(id) {
        return super.find(id);
    }
}

module.exports = BookMongoRepository;