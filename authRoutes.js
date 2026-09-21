const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  googleLogin,
} = require("../controllers/authController");

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

// Google OAuth Route
router.post("/google", googleLogin);

module.exports = router;