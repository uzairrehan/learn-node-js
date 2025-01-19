import {
  verificationHTML,
  subject,
} from "../constants/verification.email.info.js";
import transporter from "../config/nodemailer.connection.js"


async function sendVerificationEmail(to, verificationLink) {
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
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
  return info
}

export default sendVerificationEmail;
