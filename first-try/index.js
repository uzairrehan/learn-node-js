import express from "express";

const app = express();
const PORT = 4000;


function middleware(req,res,next) {
    
}

app.get("/", middleware , (req, res) => {
  res.send("hello to first api");
});


app.get("/:id", (req, res) => {
    res.send(`hell ${req.params.id}`);
});

app.get("/:id", (req, res) => {
    res.send(`Hi ${req.query}`);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
