import mongoose from "mongoose";
const dbConnection = mongoose.connect("mongodb://0.0.0.0/men").then(() => {
  console.log("connected");
});
export default dbConnection;