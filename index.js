const express = require("express");
const http = require("http");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/public/login.html");
});

const server = http.createServer(app);

server.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
