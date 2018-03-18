// establish what you need
var express = require("express");
var app = express();
var session = require('express-session');
var path = require("path");
var bodyparser = require("body-parser")

// use what you need

// session
app.use(session({secret: 'q2uBWJys6Kxa'}));
// path
app.use(express.static(path.join(__dirname, "/static")));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
// body-parser
app.use(bodyparser.urlencoded({extended: true}));

// functionality
app.get('/', function(req, res){
    res.render('index');
})

app.get('/result', function(req, res){
	console.log(req.session.result);
    res.render('result', {result: req.session.result});
})

app.post('/result', function(req, res){
	console.log("POST DATA", req.body);
	req.session.result = req.body;
    res.redirect('/result');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})