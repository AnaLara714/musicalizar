const express = require("express");
const {
  loginManager,
  registerManager,
  logoutManager,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerManager);
router.post("/login", loginManager);
router.post("/logout", logoutManager);

module.exports = router;
