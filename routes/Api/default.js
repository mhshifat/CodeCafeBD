// Import Dependencies
import express from "express";
import nodemailer from "nodemailer";

// Import Environment Variables
require("dotenv").config();

// Import Valuators
import contactValidator from "../../validators/contactValidator";

// Setup Router
const router = express.Router();

// ============================
// ========== Routes ==========
// ============================

// Route ==> (POST) /api/contact
router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const { isValid, errors } = contactValidator(req.body);
    if (!isValid) return res.status(400).json({ success: false, errors });
    const transporter = nodemailer.createTransport({
      pool: true,
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use TLS
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    const mailOptions = {
      from: name + `<${email}>`,
      to: process.env.GOOGLE_USER,
      subject: "Message from codecafebd...",
      html: `
        <h4>Name: ${name}</h4>
        <h4>Email: ${email}</h4>
        <h4>Subject: ${subject}</h4>
        <br>
        <br>
        <hr>
        <br>
        <h4>Message: </h4>
        <p>${message}</p>
      `
    };
    const info = await transporter.sendMail(mailOptions);
    if (info) {
      return res.status(200).json({
        success: true,
        data: {
          message: "Your message has been sent"
        }
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      messages: {
        message: "Something went wrong, please try again later"
      }
    });
  }
});

// Export Router
export default router;
