const express = require('express');
const { postBooks, getBooks, getSingleBook, updateBook, deleteBook } = require('./books.controllers');
const routers = express.Router();

//book-post request
routers.post('/book-create',postBooks);
//books-get
routers.get('/',getBooks);
//get single book
routers.get('/:id',getSingleBook);
//update book
routers.put('/edit/:id',updateBook);
//delete Book
routers.delete('/:id',deleteBook);

module.exports=routers;