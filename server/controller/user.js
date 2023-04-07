const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const { hashpassword, comparePassword } = require("../helpers/authHelper");

// register

exports.register = async (req, res) => {
  try {
    const { password, email } = req.body;
    // validation
    // if (!name) {
    //   return res.send({ error: "Name is Required" });
    // }
    // if (!email) {
    //   return res.send({ error: "email is Required" });
    // }
    // if (!password) {
    //   return res.send({ error: "password is Required" });
    // }
    // if (!location) {
    //   return res.send({ error: "location is Required" });
    // }
    // if (!answer) {
    //   return res.send({ error: "answer is Required" });
    // }
    // if (!phone) {
    //   return res.send({ error: "phone is Required" });
    // }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(403).send({
        success: false,
        message: "Already Register please login",
      });
    }
    const hashedPassword = await hashpassword(password);

    const user = await new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      location: req.body.location || "Not Added",
      answer: req.body.answer,
      phone: req.body.phone || "Not Added",
    }).save();
    res.status(201).send({
      success: true,
      message: "User Register Success",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register Function",
      error,
    });
  }
};

// Login

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid email",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Invalid password",
      });
    }
    // token
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.send({
      success: true,
      message: "Login successfuly",

      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      phone: user.phone,
      image: user.image,
      role: user.role,

      token,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register Function",
      error,
    });
  }
};

// update Password

// exports.updatePassword = async (req, res) => {
//   try {
//     const user = await UserModel.findByIdAndUpdate({ _id: req.body._id });
//     !user && res.status(401).json('you are not the same person')
//     const hashedPassword = await bcrypt.hash(user.password,10)
//     const oroginalPassword = await hashedPassword.toString(bcrypt)
//   } catch (error) {}
// };

// update user

exports.updateUser = async (req, res) => {
  const user = await UserModel.findById(req.body._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.location = req.body.location || user.location;
    user.phone = req.body.phone || user.phone;
    user.name = req.body.name || user.name;
    user.image = req.body.image || user.image;
    const updateUser = await user.save();
    res.send({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      location: updateUser.location,
      phone: updateUser.phone,
      image: updateUser.image,
    });
  } else {
    res.status(401).send({ message: "User Not found" });
  }
};

// delete account user

exports.deleteAccount = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json("User is deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

// update Image
exports.updateImage = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await UserModel.findByIdAndUpdate(req.params.id, {
        $set: req.body,
        new: true,
      });
      res.status(200).json("image updated");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(400).json("you can update only your account");
  }
};

// count Users

exports.countUsers = async (req, res) => {
  try {
    const countAllUsers = await UserModel.countDocuments();
    res.status(201).json({ count: countAllUsers });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// get Users

exports.getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
};
