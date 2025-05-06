const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fileName = q.path === "/" ? "index" : `.${q.path}`;

    fs.readFile(`${fileName}.html`, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });

        fs.readFile("404.html", (err, data) => {
          if (err) {
            // where 404.html file itself is not found
            res.write("<h1>404 - Page Not Found</h1>");
            return res.end();
          }

          res.write(data);
          return res.end();
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080);
