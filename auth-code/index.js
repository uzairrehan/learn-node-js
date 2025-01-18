import express from "express";
import mongoConnection from "./config/mongo.connection.js";
import authroutes from "./routes/auth-routes.js";
const app = express();
mongoConnection();

const PORT = process.env.PORT


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/authentication" ,authroutes)






app.use((req, res) => {
  res.status(404).send({
    msg: "Page not found",
    err: true,
  });
});

app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`);
});