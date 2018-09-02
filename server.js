const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const compression = require('compression');

app.use(compression());
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");
