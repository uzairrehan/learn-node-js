import mongoose from "mongoose";

function createConnection() {
    mongoose
    .connect(
      "mongodb+srv://iamsyeduzairshah:uzairrehan2006@cluster0.kut25.mongodb.net/"
    )
    .then(() => {
      console.log("connected");
    }).catch(()=>{
      console.log("cant connect");
    })
} 



export default createConnection