const UserModel = require("../models/User");
const Message = require("../models/message");

exports.CreateMessage = async (req, res) => {
  try {
    const message = new Message({
      userId: req.body.userId,
      message: req.body.message,
    });
    const result = await message.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.getMessage = async (req, res) => {
  try {
    const message = await Message.find();
    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

// delete message

exports.deleteMessage = async (req, res) => {
  const id = req.params.id;
  try {
    const messageDeleted = await Message.findByIdAndDelete(id);
    messageDeleted && res.status(200).send("Message is deleted !");
  } catch (error) {
    res.status(500).json(error);
  }
};
