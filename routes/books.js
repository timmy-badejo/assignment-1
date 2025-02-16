const express = require("express");
const router = express.Router();

let books = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", imageUrl: "", year: 1937 },
    { id: 2, title: "1984", author: "George Orwell", imageUrl: "", year: 1949 },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", imageUrl: "", year: 1960 }
];

// CRUD operations
router.get("/", (req, res) => res.json(books));
router.get("/:id", (req, res) => { /* GET book by ID code */ });
router.post("/", (req, res) => { /* POST new book code */ });
router.put("/:id", (req, res) => { /* UPDATE book code */ });
router.delete("/:id", (req, res) => { /* DELETE book code */ });

module.exports = router;


