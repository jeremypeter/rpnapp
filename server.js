var express = require('express');
var bodyParser = require('body-parser');
var session = require('client-sessions');
var csrf = require('csurf');
var helmet = require('helmet');
var conf = require('./server.config');
var app = express();
var request = require('request');
var videoKey = process.env.WISTIA_KEY;
var cors = require('cors');

/////////////////////////////////
// Middleware
////////////////////////////////

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: ['json', 'application/csp-report'] }));

// Need to log Content Security Privacy reports before calling csrf because 
// csrf will throw `Error: invalid csrf token` error
app.post(conf.csp.reportUri, function (req, res) {
  console.log(req.body);
  res.sendStatus(200);
 });

app.use(session(conf.session));

// IMPORTANT: csrf needs to be after any cookie and session initialization
app.use(csrf());

// Need to set csrf cookie for Angular 
app.use(function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  next();
});

app.use(helmet());
app.use(helmet.contentSecurityPolicy(conf.csp));
// app.use(cors());

app.use(express.static(__dirname + '/dist'));




/////////////////////////////////
// Routes 
////////////////////////////////

app.get('/api/wistia', cors(), function(req, res){
  var api = 'https://api.wistia.com/v1/medias.json?api_password=' + videoKey;

  request({ url: api}, function(err, resp, body){
    res.json(body);
  });
});


/////////////////////////////////
// Start Server
////////////////////////////////

app.listen(3000, function(){
  console.log('Listenting on port 3000');
});