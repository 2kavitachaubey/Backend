const express = require("express");
const app = express();

app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.send("Notes Created");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.delete("/notes/:index", (req, res) => {
  console.log(req.params); //index of node, that you want to delete
  console.log(req.params.index);

  delete notes[req.params.index];
  res.send("Node is deleted...");
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].author = req.body.author;
  res.send("modification done");
});

app.listen(3000, () => {
  console.log("Server is running in 3000 port");
});
