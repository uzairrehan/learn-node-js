import express from "express";

const app = express();


app.get("/",(req, res)=>{
    res.send("home")
})

app.listen("3000", () => {
  console.log("app is running on port 3000");
});
