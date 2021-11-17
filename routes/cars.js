const express = require("express");

const router = express.Router();


let items = [{"name":"chris", "age":32},
    {"name":"crosby", "age":0}]

//res.status(200).json({"data":})

router.get("/", (req,res) => {
   res.render('cars', {
     subject: 'Pug template engine',
     name: 'cars',
     items: 'car stuff'
   })
});

/*
app.get('/index', (request, response) => {
  response.render('index', {
    subject: 'Pug template engine',
    name: 'our template',
    link: 'https://google.com'
  });
});
*/

module.exports = router;