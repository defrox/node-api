// BASE SETUP
// =============================================================================
var port = process.env.PORT || 8080; // set our port

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var assert = require('assert');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoose = require('./dbconnect');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

app.use('/api', router);
var routerSalesTeams = require('./app/routes/salesTeam');
app.use('/api', routerSalesTeams);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
