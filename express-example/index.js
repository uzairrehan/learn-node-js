import express from "express";
import path from "path";
const app = express();





// const absolutePath = path.join(import.meta.dirname,"public")
// app.use(express.static(absolutePath))
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// form submission
app.get("/",(req,res)=>{
  const htmlFilepath = path.join(import.meta.dirname,"public","index.html")
  res.sendFile(htmlFilepath)
})
app.get("/form",(req,res)=>{
  const fromFilepath = path.join(import.meta.dirname,"public","form.html")
  res.sendFile(fromFilepath)
})
app.post("/form-submit",(req,res)=>{
  console.log(req.body);
  res.send(req.body)
})



// how to send a file
app.get("/",(req,res)=>{
  const htmlFilepath = path.join(import.meta.dirname,"public","index.html")
  res.sendFile(htmlFilepath)
})





// params dynamic
app.get("/user/:id", (req, res) => {
  res.send(req.params.id);
});

// multiple dynamic params
app.get("/user/:id/view/:name", (req, res) => {
  res.send({ name: req.params.name, id: req.params.id });
});




// query
app.get("/courses", (req, res) => {
  const searchQuery = req.query.search;
  const categoryQuery = req.query.category;
  res.send({ searchQuery, categoryQuery });
});









app.listen(3000, () => {
  console.log("running");
});



// handling 404 error page (is ko sare routes men sab se akhri men rakhen gen)
const notFoundFilepath = path.join(import.meta.dirname,"public","404.html")
app.use((req,res)=>{
  res.status(404).sendFile(notFoundFilepath)
})








// getting filenama and dirname in modular js
console.log("dirname==>", import.meta.dirname)
console.log("filename==>", import.meta.filename)
console.log("filename==>", import.meta.url)
const filename =  new URL(import.meta.filename)
