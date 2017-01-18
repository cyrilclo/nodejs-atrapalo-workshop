'use strict';

const BaseModel = require('./../BaseModel');

class Book extends BaseModel {
    constructor(name, description, author, picture){
        super(new Date());
        this._name = name;
        this._description = description;
        this._author = author;
        this._picture = picture;
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

    getPicture() {
        return this._picture;
    }
}

module.exports = Book;