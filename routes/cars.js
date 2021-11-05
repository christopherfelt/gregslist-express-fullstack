const express = require("express");

const router = express.Router();

router.get("/cars", (request,response) => {
  res.render("cars")
}));