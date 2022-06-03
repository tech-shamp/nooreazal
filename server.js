const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");

let initialPath = path.join(__dirname, "public");

const app = express();
app.use(express.static(initialPath));
app.use(fileUpload());

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

// uploadlinks
app.post("/uploads", (req, res) => {
  let file = req.files.image;
  let date = new Date();
  // image name
  let imageName = date.getDate() + "_" + date.getTime() + "_" + file.name;
  // image upload path
  let path = "public/uploads/" + imageName;

  // create Upload
  file.mv(path, (err, result) => {
    if (err) {
      throw err;
    } else {
      // our image upload path
      res.json(`uploads/${imageName}`);
    }
  });
});

app.listen("3000", () => {
  console.log("listening.....");
});
