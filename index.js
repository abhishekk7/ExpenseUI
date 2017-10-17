const express = require('express');
var app = express();

const port = 4000;

app.use(express.static(__dirname + '/app'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/app/views/index.html');
});

app.listen(port, function () {
    console.log('app listening on ' + port);
});