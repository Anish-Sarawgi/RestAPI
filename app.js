const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes");
const bodyParser = require("body-parser");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 7000;
const dbURI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);
mongoose
  .connect(dbURI)
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/all", bookRoutes.Book_all);
app.get("/:id", bookRoutes.Book_read);
app.post("/add-book", bookRoutes.Book_post);
app.put("/:id", bookRoutes.Book_update);
app.delete("/:id", bookRoutes.Book_delete);

app.use((req, res) => {
  res.status(404).render("Page not found: 404");
});
