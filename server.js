process.env.NODE_ENV = process.env.NODE_ENV || "development";

var express = require("./config/express");
var app = express();

let port = 3000;

app.use("/", function(req,res) {
    res.send("Hello World");
});

app.listen(port);
console.log("Server running at http://localhost:" + port);

module.exports = app;
