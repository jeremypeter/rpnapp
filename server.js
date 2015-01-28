var express = require('express');
var bodyParser = require('body-parser');
var session = require('client-sessions');
var csrf = require('csurf');
var helmet = require('helmet');
var conf = require('./server.config');
var sess = require('express-session');
var app = express();


/////////////////////////////////
// Middleware
////////////////////////////////

app.use(bodyParser.urlencoded({extended: true}))
app.use(session(conf.session));

// IMPORTANT: csrf needs to be after any cookie and session initialization
app.use(csrf());
app.use(function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  next();
});
app.use(helmet());

app.use(express.static(__dirname + '/dist'));



/////////////////////////////////
// Routes 
////////////////////////////////

app.listen(3000);