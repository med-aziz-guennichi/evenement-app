const Category = require("../models/Category");

exports.newCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newCat = await new Category({
      name,
      description,
    }).save();
    res.send(newCat);
  } catch (error) {
    console.log(error);
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const updateCat = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updateCat);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCat = await Category.findByIdAndDelete(id);
    deleteCat && res.send("category is deleted");
  } catch (error) {
    console.log(error);
  }
};

exports.getCategory = async (req, res) => {
  const getCategor = await Category.find();
  getCategor ? res.send(getCategor) : console.log("error");
};

exports.getOneCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const cat = await Category.findById(id);
    res.send(cat);
  } catch (error) {
    console.log(error);
  }
};
