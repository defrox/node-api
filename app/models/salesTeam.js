var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var SalesTeamSchema = new Schema({
    name: String,
    members: Array,
});

module.exports = mongoose.model('SalesTeam', SalesTeamSchema);
