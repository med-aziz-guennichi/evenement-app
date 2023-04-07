const {
  updateUser,
  deleteAccount,
  updateImage,
  countUsers,
  getUsers,
} = require("../controller/user");
const multer = require("multer");

const route = require("express").Router();

route.put("/update", updateUser);
route.delete("/delete/:id", deleteAccount);
route.patch("/updateImage/:id", updateImage);
route.get("/countUsers", countUsers);
route.get("/getAllUsers", getUsers);

module.exports = route;
