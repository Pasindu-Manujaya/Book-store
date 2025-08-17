const express = require('express');
const { postBooks, getBooks, getSingleBook } = require('./books.controllers');
const routers = express.Router();

//book-post request
routers.post('/book-create',postBooks);
//books-get
routers.get('/',getBooks);
//get single book
routers.get('/:id',getSingleBook)

module.exports=routers;