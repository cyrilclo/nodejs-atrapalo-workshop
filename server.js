let express = require('express');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test_books');
let Book = require('./models/book');

let caca = new Book('caca', 'caca', 'author', 'caca picture');

//import { Book } from 'models/book';

//let book = new Book('caca', 'caca', 'author', 'caca picture');

console.log(caca);

caca.mongoo