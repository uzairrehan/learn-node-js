import nodemailer from "nodemailer";
import {
  verificationHTML,
  subject,
} from "../constants/verification.email.info.js";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASS,
  },
});

async function sendVerificationEmail(to, verificationLink) {
  const mailOptions = {
    from: `"Verification Email" ${process.env.SENDER_EMAIL}`,
    to: to,
    subject: subject,
    html: verificationHTML(verificationLink),
  };

  const info = transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log(info);
  });
  console.log(info);
}

export default sendVerificationEmail;
