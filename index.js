const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/api/users") {
    const users = [
      {
        userID: "1",
        name: "zahoor ahmed ",
        age: 36,
        email: "zahoor@alphasquad,com",
      },
      {
        userID: "2",
        name: "Ibrahim ahmed ",
        age: 36,
        email: "Ibrahim@alphasquad,com",
      },
    ];
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(users));
  }
});
const port = process.env.POST || 5000;
server.listen(port, (err) => console.log("Srever Runnibg", err));
