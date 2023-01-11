const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  token: {
    type: String,
  },
});

const authorSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
});

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
});

let Article = mongoose.model("Article", articleSchema);
let Author = mongoose.model("Author", authorSchema);
let User = mongoose.model("User", userSchema);

module.exports = { Article, Author, User };