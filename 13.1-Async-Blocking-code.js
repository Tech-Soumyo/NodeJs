const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    //Blocking Code
    for (let i = 0; i < 1000; i++) {
      for (j = 0; j < 1000; j++) {
        console.log(`$(i) $(j)`);
      }
    }
  } else {
    res.end("Error Page");
  }
});
server.listen(5000, () => {
  console.log("server is  listening on 5000....");
});
