const express = require("express");

const router = express.Router();

router.get("/", (req,res) => {
  res.status(200).json({"data":
    [{"name":"chris", "age":32},
    {"name":"crosby", "age":0}]
  })
});

module.exports = router;