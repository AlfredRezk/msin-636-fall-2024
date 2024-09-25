const fs = require("fs");
const app = (req, res) => {
  let url = req.url;
  res.setHeader("Content-Type", "text/html");
  console.log(url, req.method);

  if (url === "/" && req.method === "GET") {
    res.write(`
              <form method="post" action="/message">
              <input placeholder="Enter a note" name="message"/><br/>
              <button type="submit">ADD</button>
              </form>
              `);
  } else if (url === "/message" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const message = body.split("=")[1];
      fs.writeFileSync("./messages.txt", message);

      // fs.writeFile("./messages.txt", message, (error) => {});
    });

    // Redirect a user to home page
    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  } else {
    res.write("Page is not found");
  }

  res.end();
};

module.exports = app;
