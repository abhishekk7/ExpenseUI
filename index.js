const express = require('express');
var app = express();
var morgan = require('morgan');

const port = 4000;

app.use(morgan('tiny'));

app.use(express.static(__dirname + '/app'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/app/views/index.html');
});

app.listen(port, function () {
    console.log('app listening on ' + port);
});