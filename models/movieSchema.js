const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Movie = new Schema({
  poster: { type: String },
  title: { type: String },
  year: Number,
  imdb: { type: String, unique: true },
  tmdb: { type: Number },
});

module.exports = mongoose.model("Movie", Movie);
