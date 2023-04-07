const mongoose = require("mongoose");

const evenmentSchema = mongoose.Schema({
  categoryId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  dateDebut: { type: String, required: true },
  dateFin: { type: String, required: true },
  lieu: { type: String, required: true },
  nombreMax: { type: Number, required: true },
  userId: { type: String, required: true },
  prix: { type: Number, required: true },
  dureet: { type: String, required: true },
  image: { type: String, required: true },
});

const evenmentModel = mongoose.model("evenment", evenmentSchema);
module.exports = evenmentModel;
