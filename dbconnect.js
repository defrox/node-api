// var mongoose   = require('mongoose').useMongoClient;
var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.Promise = Promise;
var uri = 'mongodb://mongodb-stitch-pacman-tvjuk:pacman@cluster0-shard-00-00-wlqon.mongodb.net:27017,cluster0-shard-00-01-wlqon.mongodb.net:27017,cluster0-shard-00-02-wlqon.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
var options = {promiseLibrary: Promise};

module.exports = mongoose.connect(uri, options); // connect to our database
