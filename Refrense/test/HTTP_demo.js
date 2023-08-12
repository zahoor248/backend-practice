const http = require("http");
http
  .createServer((req, res) => {
    res.write("hello w766876876orld");
    res.end();
  })
  .listen(5000, () => console.log("helhow ae ypou doinglo "));
