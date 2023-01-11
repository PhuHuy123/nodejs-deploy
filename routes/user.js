const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();
// LOGIN
router.put("/login", userController.loginUser);
//ADD USER
router.post("/", userController.addUser);

// GET ALL USERS
router.get("/", userController.getAllUsers);

//GET AN USER
router.get("/:id", userController.getAnUser);

//UPDATE AN USER
router.put("/:id", userController.updateUser);

// // //DELETE USER
router.delete("/:id", userController.deleteUser);

module.exports = router;