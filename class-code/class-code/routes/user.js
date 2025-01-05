import express from "express";

const router = express.Router();

const users = [{ name: uzair, email: "uzair rehan" }];

router.post("/", (req, res) => {
  const { name, email } = req.body;
  users.push
  res.send("user post api called");
});


export default router