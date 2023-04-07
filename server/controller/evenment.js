const Evenment = require("../models/evenement");

exports.newEvenment = async (req, res) => {
  const newEv = new Evenment(req.body);

  try {
    const savedEvenement = await newEv.save();
    res.send(savedEvenement);
  } catch (error) {
    console.log(error);
  }
};
