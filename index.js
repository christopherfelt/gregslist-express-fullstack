const express = require('express');

const app = express();

// all accepts any HTTP method
app.all('*', function (req, res) {
    // express handles basic headers and mime-types automatically
    res.send("<h1>Demo page</h1>");
})

app.listen(3000, function () {
    console.log("Listening on port 3000. Go to http://localhost:3000");
});