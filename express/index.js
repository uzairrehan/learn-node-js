const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello ji salammmm");
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
