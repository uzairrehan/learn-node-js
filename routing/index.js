const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Home");
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
