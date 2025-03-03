const express = require("express");
const bodyParser = require("body-parser");
const booksRoutes = require("./routes/books");

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// Serve static images from the public folder
app.use("/public", express.static("public"));

// Use the books router
app.use("/books", booksRoutes);

// Catch-all route for invalid endpoints
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});




//GET all books: GET http://localhost:3000/books
//GET a book by ID: GET http://localhost:3000/books/1
//Add a book: POST http://localhost:3000/books (Send JSON body)
//Update a book: PUT http://localhost:3000/books/1
//Delete a book: DELETE http://localhost:3000/books/1
//View images: http://localhost:3000/public/book1.jpg
//View images: http://localhost:3000/public/book2.jpg
//View images: http://localhost:3000/public/book3.jpg