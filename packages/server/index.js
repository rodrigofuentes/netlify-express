const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from yarn workspaces");
});

app.listen(3000, () => console.log("testing stuff"));
