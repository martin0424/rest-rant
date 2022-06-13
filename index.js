const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello world!");
});

app.get("*", (_req, res) => {
  res.status(404).send("404 you suck!");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on http://localhost:${process.env.PORT}`);
});
