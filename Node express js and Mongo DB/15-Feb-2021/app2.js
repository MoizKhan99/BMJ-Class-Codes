const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/abc", (req, res) => {
  res.send("<h1>Hello Abc</h1>");
});



app.get("*", (req, res) => { // universal route
  res.send(`<h1>${req.url.slice(1)} page does not exist</h1>`)
});



app.listen(8000);