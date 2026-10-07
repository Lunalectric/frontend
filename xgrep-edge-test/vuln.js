// test fixture - intentionally vulnerable, delete me
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  eval(req.query.q);
  res.send("<div>" + req.query.name + "</div>");
});
