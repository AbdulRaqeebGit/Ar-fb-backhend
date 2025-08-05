const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");
const authMiddleware = require("../middleware/auth.js");

// Routes
router.post("/user", authMiddleware, userController.getUserData);
router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/getall", authMiddleware, userController.getAllUsers);
router.get("/:id", authMiddleware, userController.getUserById);
router.put("/:id", authMiddleware, userController.updateUser);
router.delete("/:id", authMiddleware, userController.deleteUser);

module.exports = router;