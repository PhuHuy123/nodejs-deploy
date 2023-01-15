const { User } = require("../model/model");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const loginUser = async (req, res) => {
  try {
    let email = { email: req.body.email };
    let user = await User.findOne(email);
    if (user) {
      console.log("ok");
      let checkPassword = bcrypt.compareSync(req.body.password, user.password);
      if (checkPassword) {
        user.token = bcrypt.hashSync(
          user._id.toString().replace(/ObjectId\("(.*)"\)/, "$1"),
          salt
        );
        res.json({
          status: 200,
          data: user,
          message: "Đăng nhập thành công",
        });
      } else {
        res.json({
          status: 400,
          message: "Email hoặc password không đúng",
        });
      }
    } else {
      res.json({
        status: 400,
        message: "Email hoặc password không đúng",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
//ADD USER
const addUser = async (req, res) => {
  try {
    let email = { email: req.body.email };
    const checkEmail = await User.findOne(email);
    if (!checkEmail) {
      if (!req.body.role) {
        req.body.role = "2";
      }
      const newUser = new User(req.body);
      let hashPassword = bcrypt.hashSync(req.body.password, salt);
      newUser.password = hashPassword;
      const savedUser = await newUser.save();
      res.json({
        status: 200,
        data: savedUser,
        message: "Tạo user thành công",
      });
    } else {
      res.json({
        status: 422,
        message: "Email đã tồn tại",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL USER
const getAllUsers = async (req, res) => {
  try {
    // const users = await User.find();
    res.json({
      status: 200,
      // data: users,
      message: "ok"
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET AN USER
const getAnUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// //   //UPDATE USER
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.updateOne({ $set: req.body });
    res.status(200).json("Updated successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
};

// //   //DELETE USER
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({
      status: 200,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const userController = {
  loginUser,
  addUser,
  getAllUsers,
  getAnUser,
  updateUser,
  deleteUser,
};

module.exports = userController;
