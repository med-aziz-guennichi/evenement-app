const {
  CreateMessage,
  getMessage,
  deleteMessage,
} = require("../controller/message");

const route = require("express").Router();

route.post("/create_message", CreateMessage);
route.get("/getMessage", getMessage);
route.delete("/delete/:id", deleteMessage);

module.exports = route;
