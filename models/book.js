const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    lent_status: { type: Boolean, default: false },
    lent_to: { type: String, required: false },
    lent_on: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
