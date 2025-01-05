import express from 'express'
const app = express()

app.get("/",(req, res)=>{
    res.send("hello ji")
})

app.listen(3000)