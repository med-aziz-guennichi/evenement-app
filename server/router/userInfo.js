const {
  updateUser,
  deleteAccount,
  updateImage,
  countUsers,
  getUsers,
  getOneUser,
  updateRole,
} = require("../controller/user");
const multer = require("multer");

const route = require("express").Router();

route.put("/update", updateUser);
route.delete("/delete/:id", deleteAccount);
route.patch("/updateImage/:id", updateImage);
route.get("/countUsers", countUsers);
route.get("/getAllUsers", getUsers);
route.get("/getUser/:id", getOneUser);
route.put("/updateRole/:id", updateRole);

module.exports = route;
