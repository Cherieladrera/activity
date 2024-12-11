const express = require('express');
const booksRoutes = require('./routes/booksRoutes');  
const app = express();


app.use(express.json());


app.use('/books', booksRoutes);

module.exports = app;  
