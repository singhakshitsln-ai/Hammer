const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello 🚀"
  });
});

app.listen(PORT);
