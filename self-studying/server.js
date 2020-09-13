const route = require("./route.js");
const express = require("express");
const path = require("path");
const app = express();
app.use("/", route);
app.use((req, res, next) => {
  res.status(404).send("일치하는 주소 없음");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("서버 에러!");
});
app.listen(8080);
