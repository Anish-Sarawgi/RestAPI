const Book = require("../models/book");

// List all Books
const Book_all = (req, res) => {
  Book.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
};

// Read Book
const Book_read = (req, res) => {
  const id = req.params.id;

  Book.findById(id)
    .then(
      Book.findByIdAndUpdate(id, { $inc: { views: 1 } }).then((result) =>
        res.send(result)
      )
    )
    .catch(() => res.send("there is no Book exists with this id"));
};

// Create new Book
const Book_post = (req, res) => {
  const newBook = new Book(req.body);

  newBook
    .save()
    .then((data) => res.send(`Book Created. Details: ${data}`))
    .catch((err) => console.log(err));
};

// Update Book
const Book_update = (req, res) => {
  const updatedBook = req.body;
  const id = req.params.id;

  Book.findByIdAndUpdate(id, updatedBook)
    .then(() => res.send("Book Updated"))
    .catch((err) => console.log(err));
};

// Delete Book
const Book_delete = (req, res) => {
  const id = req.params.id;

  Book.findByIdAndDelete(id)
    .then(res.send("file deleted"))
    .catch((err) => console.log(err));
};

module.exports = {
  Book_all,
  Book_read,
  Book_post,
  Book_update,
  Book_delete,
};
