import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import sendVerificationEmail from "../services/mailService.js";
import jwt from "jsonwebtoken";
import sendResponse from "../helpers/send.response.js";
import { verifyPageHTML } from "../constants/verification.email.info.js";
async function verifyEmailController(req, res) {
  try {
    const { token } = req.query;
    const { email, username } = jwt.decode(token, process.env.JWT_SECRET);

    await User.findOneAndUpdate({ email: email }, { verified: true });

    res.send(verifyPageHTML(username));
  } catch (error) {
    sendResponse(res, 400, data, error, error);
  }
}

async function loginController(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    const hashPassword = await bcrypt.compare(password, user.password);
    if (hashPassword) {
      res.status(201).send({
        data: user,
        msg: "All ok, User logged in",
        err: false,
      });
    } else {
      res.status(400).send({
        msg: "Cant Login",
        err: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function registerController(req, res) {
  const { email, username, password } = req.body;
  console.log(email, username, password);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, username, password: hashedPassword });
    const newUser = await user.save();
    res.status(201).send({
      data: user,
      msg: "All ok, User saved",
      err: false,
    });

    const token = jwt.sign({ email, username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const fullURL = `http://localhost:3000/authentication/verify-email?token=${token}`;

    const info = await sendVerificationEmail(email, fullURL);
    console.log(`Email sent ${info}`);
  } catch (error) {
    res.send(error);
  }
}

export { verifyEmailController, loginController, registerController };
