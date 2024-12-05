
const http = require("http")

const server  = http.createServer((req,res)=>{
    res.end("hello nodejs")
})



server.listen(3000)