import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();




app.use(cors("*"))
app.use(morgan("dev"))
app.use(express.json())






app.get("/",(req, res)=>{
    res.send("home")
})



app.listen("3000", () => {
  console.log("app is running on port 3000");
});
