const { newEvenment } = require("../controller/evenment");

const route = require("express").Router();

route.post("/newEvenement", newEvenment);

module.exports = route;
