// Create web server
// npm install express
// npm install body-parser

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

// Create fake data
var comments = [
    {name: 'John', message: 'Hello'},
    {name: 'Jane', message: 'Hi'}
];

app.get('/comments', function(req, res) {
    res.json(comments);
});

app.post('/comments', function(req, res) {
    var name = req.body.name;
    var message = req.body.message;
    comments.push({name: name, message: message});
    res.json(comments);
});

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});