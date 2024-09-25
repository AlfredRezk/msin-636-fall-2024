const http = require("http");
require("colors");

const PORT = 8080;
const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url == "/") {
    res.write(`<h1> Home Page </h1>`)
  } else if (url === "/about") {
    res.write(`<h1> About Page </h1>`)
  } else if (url === "/contact") {
    res.write(`<h1> Contact Page </h1>`)
  }else{
    res.write(`<h1> 404 Page not found </h1>`)
  }
  
  res.end();
});

server.listen(PORT, console.log(`Server running on port ${PORT} ....`.bgGreen));
