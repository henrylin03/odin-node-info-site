const path = require("path");
const express = require("express");

const app = express();
const options = { root: path.join(__dirname) };

app.get("/", (req, res) => {
  res.sendFile("index.html", options);
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", options);
});

app.get("/contact-me", (req, res) => {
  res.sendFile("contact-me.html", options);
});

app.use((req, res) => {
  res.status(404).sendFile("404.html", options);
});

// LISTENING //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
