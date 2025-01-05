const http = require("http");




// event emitter = http.createServer







const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Home heheh");
  }
  if (req.url == "/about") {
    res.end("About");
  }
  if (req.url == "/profile") {
    res.end("Profile");
  }
  console.log(req.url);
});




server.listen(3000);