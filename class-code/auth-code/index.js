import express from "express";
import bcrypt from "bcrypt";
import User from "./models/user.model.js";
import mongoConnection from "./config/mongo.connection.js";

const app = express();
mongoConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password:hashedPassword });
    await user.save();
    res.status(201).send({
      data: user,
      msg: "All ok, User saved",
      err: false,
    });
  } catch (error) {
    res.send(error);
  }
});



app.use((req, res) => {
  res.status(400).send({
    msg: "Page not found",
    err: true,
  });
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});