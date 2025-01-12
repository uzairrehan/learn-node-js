import express from "express";
import path from "path";
const app = express();





app.listen(3000, () => {
  console.log("running");
});





// how to send a file
// const absolutePath = path.join(import.meta.dirname,"public")
// app.use(express.static(absolutePath))
// app.use(express.static("public"))
// app.get("/",(req,res)=>{
  //     const htmlFilepath = path.join(import.meta.dirname,"public","index.html")
  //     res.sendFile(htmlFilepath)
// })

// params dynamic
// app.get("/user/:id", (req, res) => {
//   res.send(req.params.id);
// });

// multiple dynamic params
// // app.get("/user/:id/view/:name", (req, res) => {
//   res.send({ name: req.params.name, id: req.params.id });
// });



// getting filenama and dirname in modular js
// console.log("dirname==>", import.meta.dirname)
// console.log("filename==>", import.meta.filename)
// console.log("filename==>", import.meta.url)
// const filename =  new URL(import.meta.filename)

// query
// app.get("/courses", (req, res) => {
//   const searchQuery = req.query.search;
//   const categoryQuery = req.query.category;
//   res.send({ searchQuery, categoryQuery });
// });
