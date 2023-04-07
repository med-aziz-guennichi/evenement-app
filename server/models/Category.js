const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const categoryModel = mongoose.model("categorie", categorySchema);
module.exports = categoryModel;
