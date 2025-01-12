import express from "express";
import path from "path";
const app = express();























app.listen(3000, () => {
  console.log("running");
});

// const absolutePath = path.join(import.meta.dirname,"public")

// app.use(express.static(absolutePath))

// app.use(express.static("public"))

// app.get("/",(req,res)=>{

//     const htmlFilepath = path.join(import.meta.dirname,"public","index.html")
//     res.sendFile(htmlFilepath)
// })

// app.get("/user/:id", (req, res) => {
//   res.send(req.params.id);
// });

// app.get("/user/:id/view/:name", (req, res) => {
//   res.send({ name: req.params.name, id: req.params.id });
// });

// console.log("dirname==>", import.meta.dirname)
// console.log("filename==>", import.meta.filename)
// console.log("filename==>", import.meta.url)
// const filename =  new URL(import.meta.filename)
