var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

const {

	PORT = 3000
} = process.env

//to connect db
mongoose.connect('mongodb://localhost/Users')
//mongoose.connect('mongodb://localhost/Order')





var app = express();

var index = require('./routes/index');



app.use(express.static(__dirname + '/public'));


app.use('/', index);


app.set('views', __dirname + '/views')
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');


 app.listen(PORT ,() => console.log(
 	`http://localhost:${PORT}`
 	))

module.exports = app;
