
import express from "express"


const app = express();


app.set("view engine","ejs")


app.use((req, res, next)=>{
   console.log("I'm in middleWare");
   return next()
})


app.get("/", (req, res) => {
  res.render("index")
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/details", (req, res) => {
  res.send("details");
});

app.listen(3000);
