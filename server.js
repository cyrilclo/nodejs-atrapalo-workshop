let express = require('express');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test_books');
let BookMongoRepository = require('./Infrastructure/Persistence/Book/BookMongoRepository');

let bookRepo = new BookMongoRepository();

//let caca = new Book('caca', 'caca', 'author', 'caca picture');

//import { Book } from 'models/book';

//let book = new Book('caca', 'caca', 'author', 'caca picture');

console.log(bookRepo.createSchema());

let Book = mongoose.model('Book', bookRepo.createSchema());

let book = new Book({ name: 'test', author: 'test autor' });
book.save(function (err, data) {
    if (err) return handleError(err);
    console.log(data);
});