//dependencies
var express = require('express'),
	restful = require('node-restful'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');


//DB
//mongoose.connect('mongodb://localhost/rest_test');

//express
var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//routes
app.use('/api', require('./routes/api'));

//server startup
app.listen(3000);
console.log('Server is running at port 3000');