const express = require("express");
const { bookController } = require("./controllers");
const app = express();

app.use(express.json());

app.get("/books/:id", bookController.getById);
app.put("/books/:id", bookController.updateBook);
app.delete("/books/:id", bookController.deleteBook);
app.get("/search", bookController.getByAuthor);
app.post("/books", bookController.createBook);
app.get("/books", bookController.getAll);

module.exports = app;
