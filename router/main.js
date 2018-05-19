
var config = require('../config/serverconfig');

module.exports = function (app){
	app.use('/api/expense', require('./expense'));
};
