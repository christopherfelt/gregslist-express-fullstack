const express = require('express');
const path = require('path');
const cars = require("./routes/cars.js")


const app = express();

// all accepts any HTTP method

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use("/cars", cars);

//app.use(express.static(path.join(__dirname, 'static')))

/*
app.get('/', function (req, res) {    
    res.sendFile(path.join(__dirname, 'static/index.html'))
});
*/

/*app.all('*', function (req, res) {
    // express handles basic headers and mime-types automatically
    res.send("<h1>Demo page</h1>");
})
*/

app.get('/index', (request, response) => {
  response.render('index', {
    subject: 'Pug template engine',
    name: 'our template',
    link: 'https://google.com'
  });
});


app.listen(3001, function () {
    console.log("Listening on port 3000. Go to http://localhost:3001");
});