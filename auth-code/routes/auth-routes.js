import bcrypt from "bcrypt";
import User from "../models/user.model.js"
import { Router } from "express";

const router = Router();





// Register/Signup User 
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
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



// login User
router.post("/login",async (req,res)=>{
  const {email, password} = req.body
  try {
    const user = await User.findOne({email:email})
    const hashPassword = await bcrypt.compare(password,user.password)
    if (hashPassword){
      res.status(201).send({
        data: user,
        msg: "All ok, User logged in",
        err: false,
      });
    }
    else{
      res.status(400).send({
        msg: "Cant Login",
        err: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
})




export default router;