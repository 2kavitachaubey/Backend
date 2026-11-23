const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello homepage");
});

app.get("/about", (req, res) => {
  res.send("It's an about page");
});

app.get("/faq", (req, res) => {
  res.send("It's an faq page");
});

app.listen(3000);
