import express from "express";
import userRoutes from "./routes/user.js";
const app = express();
const PORT = 4000;
app.use(express.json());

const connectttt = app.connect(
  "mongodb+srv://uzairrehan:23Pg67O4vDU9k7di@cluster0.5n9ou.mongodb.net/"
);
connectttt
  .then(() => {
    console.log("hello ji salam o alikum");
  })
  .catch(() => {
    console.log("hunmmmmm");
  });


  
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
