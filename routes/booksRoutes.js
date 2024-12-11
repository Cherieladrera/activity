const express = require('express');
const { getAllBooks, getBooksByCategory } = require('../controllers/booksController');
const router = express.Router();


router.get('/', getAllBooks);
router.get('/genre', (req, res) => getBooksByCategory(req, res, 'genre'));
router.get('/genre/:genre', (req, res) => getBooksByCategory(req, res, 'genre'));
router.get('/title/:title', (req, res) => getBooksByCategory(req, res, 'title'));
router.get('/author/:author', (req, res) => getBooksByCategory(req, res, 'author'));

router.get('/publication/:publicationDate', (req, res) => getBooksByCategory(req, res, 'publicationDate'));

module.exports = router;
