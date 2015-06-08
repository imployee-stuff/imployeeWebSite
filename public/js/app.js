var express = require('express');
var nodemailer = require('nodemailer');
// var morgan = require('morgan');
var app = express();


app.use(express.static(__dirname + '/public'));




app.listen(process.env.PORT || 3000);