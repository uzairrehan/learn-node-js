import mongoose from "mongoose";

function dbConnection() {
mongoose.connect("mongodb://0.0.0.0:27017/men").then(() => {
  console.log("Connected to MongoDB");
})
.catch((e)=>{
  console.log(`cant connect ${e}`);
})
}
export default dbConnection;