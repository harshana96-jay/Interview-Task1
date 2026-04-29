const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  beds: Number,
  baths: Number,
  size: Number,
  image: String,
  location: String,
  description: String
});

module.exports = mongoose.model("Property", PropertySchema);
