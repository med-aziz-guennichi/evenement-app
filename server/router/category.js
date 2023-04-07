const {
  newCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getOneCategory,
} = require("../controller/category");

const route = require("express").Router();

route.post("/newCat", newCategory);
route.patch("/update/:id", updateCategory);
route.delete("/delete/:id", deleteCategory);
route.get("/getAllCategorie", getCategory);
route.get("/getOneCategory/:id", getOneCategory);

module.exports = route;
