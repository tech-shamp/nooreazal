const express = require("express");
const path = require("path");

let initialPath = path.join(__dirname, "public");

const app = express();
app.use(express.static(initialPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
});
app.get("/blog", (req, res) => {
  res.sendFile(path.join(initialPath, "blog.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(initialPath, "contact.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(initialPath, "about.html"));
});
app.get("/editor", (req, res) => {
  res.sendFile(path.join(initialPath, "editor.html"));
});
app.get("/donate", (req, res) => {
  res.sendFile(path.join(initialPath, "donate.html"));
});

app.listen("3000", () => {
  console.log("listening......");
});
