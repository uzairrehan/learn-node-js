import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import userModel from "./models/user.js";
import cors from "cors"
const app = express();


// MongoDB Connection
mongoose.connect("mongodb://0.0.0.0:27017/men").then(() => {
  console.log("Connected to MongoDB");
})
.catch((e)=>{
  console.log(`cant connect ${e}`);
})



// Middlewares
app.use(cors("*"))
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use((req, res, next) => {
  console.log("I'm in middleWare");
  next();
});

function aboutMiddleware(req, res, next) {
  const a = 1;
  const b = 3;
  console.log(a + b);
  next();
}




// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/go-data", (req, res) => {
  console.log(req.body);
  res.send("sended...");
});


app.get("/register", (req, res) => {
  res.render("register");
});


app.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const newUser = await userModel.create({
      username,
      password,
      email,
    });
    console.log(newUser);
    res.send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

app.get("/get-users", async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching users");
  }
});

app.get("/update-user", async (req, res) => {
  await userModel.findOneAndUpdate(
    { username: "uzair shah" },
    {
      email: "notyou@gmail.com",
    }
  );
  res.send("updated");
});

app.get("/delete-user", async (req, res) => {
  await userModel.findOneAndDelete({ username: "fsdfds" });
  res.send("deleted");
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

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.get("/about", aboutMiddleware, (req, res) => {
  res.send("About");
});

app.get("/details", (req, res) => {
  res.send("details");
});



// Start Server
app.listen(3000, () => {
  console.log("App is running on port localhost:3000");
});
