const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", publicationDate: "1925-04-10" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian", publicationDate: "1949-06-08" },
  { id: 3, title: "Moby-Dick", author: "Herman Melville", genre: "Adventure", publicationDate: "1851-10-18" },
  { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", publicationDate: "1960-07-11" }
];

// Get all books
const getAllBooks = (req, res) => {
  res.json(books);  
};


const getBooksByCategory = (req, res, category) => {
  const value = req.params[category];  

  let filteredBooks = books;

  // Filter by the category
  if (category === 'genre') {
      if (value) {
          filteredBooks = filteredBooks.filter((book) => book.genre.toLowerCase() === value.toLowerCase());
      } else {
         
          const genres = [...new Set(books.map((book) => book.genre))];
          return res.json({ genres });
      }
  } else if (category === 'title') {
      filteredBooks = filteredBooks.filter((book) => book.title.toLowerCase().includes(value.toLowerCase()));
  } else if (category === 'author') {
      filteredBooks = filteredBooks.filter((book) => book.author.toLowerCase().includes(value.toLowerCase()));
  } else if (category === 'publicationDate') {
      filteredBooks = filteredBooks.filter((book) => book.publicationDate === value);
  }


  if (filteredBooks.length === 0) {
      return res.status(404).json({ message: `No books found for ${category}: ${value}` });
  }

  res.json(filteredBooks);  // Return the filtered books
};

module.exports = { getAllBooks, getBooksByCategory };
