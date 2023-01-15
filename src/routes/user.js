const userController = require("../controllers/userController");

const router = require("express").Router();
// LOGIN
router.put("/login", userController.loginUser);
//ADD USER
router.post("/", userController.addUser);

// GET ALL USERS
// router.get("/", userController.getAllUsers);

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});
//GET AN USER
router.get("/:id", userController.getAnUser);

//UPDATE AN USER
router.put("/:id", userController.updateUser);

// // //DELETE USER
router.delete("/:id", userController.deleteUser);

module.exports = router;
