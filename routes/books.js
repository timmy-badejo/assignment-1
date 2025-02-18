const express = require("express");
const router = express.Router();

// Initial array with 3 books
let books = [
    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        imageUrl: "/public/book1.jpg",
        year: 1937
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        imageUrl: "/public/book2.jpg",
        year: 1949
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        imageUrl: "/public/book3.jpg",
        year: 1960
    }
];

// Function to find a book by ID
const findBook = (id) => books.find((b) => b.id === parseInt(id));

// GET all books
router.get("/", (req, res) => res.json(books));

// GET a single book by ID
router.get("/:id", (req, res) => {
    const book = findBook(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
});

// POST a new book
router.post("/", (req, res) => {
    const { title, author, imageUrl, year } = req.body;
    if (!title || !author || !imageUrl || !year) {
        return res.status(400).json({ error: "Missing required book details" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        imageUrl,
        year
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT (Update) a book by ID
router.put("/:id", (req, res) => {
    const book = findBook(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    const { title, author, imageUrl, year } = req.body;
    if (title) book.title = title;
    if (author) book.author = author;
    if (imageUrl) book.imageUrl = imageUrl;
    if (year) book.year = year;

    res.json(book);
});

// DELETE a book by ID
router.delete("/:id", (req, res) => {
    const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).json({ error: "Book not found" });

    books.splice(bookIndex, 1);
    res.json({ message: "Book deleted successfully" });
});

module.exports = router;





