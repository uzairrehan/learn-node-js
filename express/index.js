import express from "express";
import morgan from "morgan";
import userModel from "./models/user.js";
import dbConnection from "./config/db.js";
const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log("I'm in middleWare");
  return next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

function aboutMiddleware(req, res, next) {
  const a = 1;
  const b = 3;
  console.log(a + b);
  next();
}

app.get("/about", aboutMiddleware, (req, res) => {
  res.send("About");
});

app.get("/details", (req, res) => {
  res.send("details");
});

app.post("/go-data", (req, res) => {
  console.log(req.body);
  res.send("sended...");
});

app.listen(3000);
