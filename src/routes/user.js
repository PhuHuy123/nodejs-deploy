const userController = require("../controllers/userController");
const { User } = require("../model/model");

const router = require("express").Router();
// LOGIN
router.put("/login", userController.loginUser);
//ADD USER
router.post("/", userController.addUser);

// GET ALL USERS
// router.get("/", userController.getAllUsers);

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      status: 200,
      data: users,
      message: "ok",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET AN USER
router.get("/:id", userController.getAnUser);

//UPDATE AN USER
router.put("/:id", userController.updateUser);

// // //DELETE USER
router.delete("/:id", userController.deleteUser);

module.exports = router;
