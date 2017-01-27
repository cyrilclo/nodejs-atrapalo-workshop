const BaseModel = require('Domain/BaseModel');
const uniqueId = require('lodash.uniqueid');

class Book extends BaseModel {
    constructor(name, description, author, pages, publisher){
        super();
        this._id = uniqueId('book');
        this._name = name;
        this._description = description;
        this._author = author;
        this._pages = pages;
        this._publisher = publisher;
    }

    getName() {
        return this._name;
    }

    getDescription() {
        return this._description;
    }

    getAuthor() {
        return this._author;
    }

    getPages() {
        return this._pages;
    }

    getPublisher() {
        return this._publisher;
    }
}

module.exports = Book;