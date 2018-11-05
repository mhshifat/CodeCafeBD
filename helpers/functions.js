import nodemailer from "nodemailer";

require("dotenv").config();

import { emailVerifyTemplate } from "../emailTemplates/emailTemplates";

export const sendEmailConfirmationMessage = async (
  username,
  email,
  token,
  url
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    const mailOptions = {
      from: process.env.GOOGLE_USER,
      to: email,
      subject: "Email confirmation to verify your account",
      html: emailVerifyTemplate(url, token, username)
    };
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (err) {
    return err;
  }
};
