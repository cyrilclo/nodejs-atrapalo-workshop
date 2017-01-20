'use strict';

const BaseModel = require('Domain/BaseModel');

class Book extends BaseModel {
    constructor(name, description, author, pages, publisher){
        super();
        this._name = name;
        this._description = description;
        this._author = author;
        this._pages = pages;
        this._publisher = publisher;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    get publisher() {
        return this._publisher;
    }
}

module.exports = Book;