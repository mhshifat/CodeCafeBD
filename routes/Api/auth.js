// Import Dependencies
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Import Validators
import registerValidator from "../../validators/registerValidator";

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

// Route ==> (GET) ==> /api/auth/user
router.get("/user", async (req, res) => {
  try {
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
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
    res.status(400).json({
      message: "Your account validation time has expired"
    });
  }
});

// Export Router
export default router;
