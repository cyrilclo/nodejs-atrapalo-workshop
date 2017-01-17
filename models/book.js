'use strict';

const BaseModel = require('./base_model');
const mongoose = require('mongoose');

class Book extends BaseModel {
    constructor(name, description, author, picture){
        super(new Date())
        this.name = name;
        this.description = description;
        this.author = author;
        this.picture = picture;
    }
}

mongoose.model('Book', Book);

module.exports = Book;