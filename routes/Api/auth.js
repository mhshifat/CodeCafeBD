// Import Dependencies
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Import Validators
import registerValidator from "../../validators/registerValidator";
import loginValidator from "../../validators/loginValidator";

// Import Models
import User from "../../models/User";

// Import Helper Functions
import { sendEmailConfirmationMessage } from "../../helpers/functions";

// Import Environment Variables
require("dotenv").config();

// Setup Router
const router = express.Router();

// ============================
// ========== Routes ==========
// ============================

// Route ==> (GET) ==> /api/auth/user/token
router.get("/user/:token", async (req, res) => {
  try {
    const token = req.params.token.split("=");
    if (token[0] === "ccbd_user") {
      const decodeUser = await jwt.verify(token[1], process.env.JWT_SECRET);
      return res.status(200).json({
        success: true,
        user: decodeUser
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Route ==> (POST) ==> /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { isValid, errors } = loginValidator(req.body);
    if (!isValid) return res.status(400).json({ success: false, errors });
    const getExistingUser = await User.findOne({ email });
    if (!getExistingUser) {
      errors.email = "A user of this email doesn't exist";
      return res.status(400).json({ success: false, errors });
    }
    const verifyPwd = await bcrypt.compare(password, getExistingUser.password);
    if (!verifyPwd) {
      errors.password = "Provided password doesn't match";
      return res.status(400).json({ success: false, errors });
    }
    const currentUser = {
      id: getExistingUser._id,
      username: getExistingUser.username,
      email: getExistingUser.email,
      isAdmin: getExistingUser.isAdmin
    };
    const token = await jwt.sign(currentUser, process.env.JWT_SECRET);
    res.cookie("ccbd_user", token, {
      maxAge: 24 * 30 * 3600000
    });
    return res.status(200).json({
      success: true,
      data: {
        message: `Welcome, you are now logged in`
      },
      user: currentUser
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      errors: {
        error: "Something went wrong, please try again later"
      }
    });
  }
});

// Route ==> (POST) ==> /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { username, email } = req.body;
    const url = `${req.protocol}://${req.headers.host}`;
    const { isValid, errors } = registerValidator(req.body);
    if (!isValid) return res.status(400).json({ success: false, errors });
    const getExistingUser = await User.findOne({ email });
    if (getExistingUser) {
      errors.email = "A user of this email already exists";
      return res.status(400).json({ success: false, errors });
    }
    const emailVerifyToken = await jwt.sign(req.body, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });
    const isEmailSent = sendEmailConfirmationMessage(
      username,
      email,
      emailVerifyToken,
      url
    );
    if (isEmailSent)
      return res.status(200).json({
        success: true,
        data: { message: "Please verify your email address" }
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      errors: {
        error: "Something went wrong, please try again later"
      }
    });
  }
});

// Route ==> (GET) ==> /api/auth/verify/:token
router.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;
    const { username, email, password } = await jwt.verify(
      token,
      process.env.JWT_SECRET
    );
    const hashThePwd = await bcrypt.hash(password, 10);
    const newUser = {
      username,
      email,
      password: hashThePwd
    };
    const saveTheNewUser = await User.create(newUser);
    if (saveTheNewUser) {
      res.redirect("/login");
    }
  } catch (err) {
    res.redirect("/register");
  }
});

// Route ==> (GET) ==> /api/auth/logout
router.get("/logout", (req, res) => {
  res.clearCookie("ccbd_user");
  res.status(200).json({
    success: true,
    data: {
      message: "You have been logged out"
    }
  });
});

// Export Router
export default router;
