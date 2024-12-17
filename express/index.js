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

function aboutMiddleware(req, res, next) {
  const a = 1;
  const b = 3;
  console.log(a + b);
  next();
}

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

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  const newUser = await userModel.create({
    username: username,
    password: password,
    email: email,
  });

  console.log(newUser);
  res.send("sended");
  // res.send("user created");
});

app.get("/get-users", (req, res) => {
  userModel.find().then((users) => {
    res.send(users);
  });
});

app.get("/get-specific-user", (req, res) => {
  userModel.find({ username: "uzair shah" }).then((user) => {
    res.send(user);
  });
});

app.get("/get-user", (req, res) => {
  userModel
    .findOne({
      username: "uzair shah",
    })
    .then((user) => {
      res.send(user);
    });
});

app.get("/update-user", async (req, res) => {
  await userModel.findOneAndUpdate(
    { username: "update ho gaya " },
    {
      username: "update",
    }
  );
  res.send("updated");
});

app.get("/delete-user", async (req, res) => {
  await userModel.findOneAndDelete({ username: "fsdfds" });
  res.send("deleted");
});

app.listen(3000, () => {
  console.log(`App is running on port localhost:${3000}`);
});
