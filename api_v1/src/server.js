var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var md5 = require("MD5");
var rest = require("./app/rest.js");

var config = require("../config.js");

var app = express();

function REST(){
	var self = this;
	self.connectMysql();
}

REST.prototype.connectMysql = function() {
	var self = this;
	var pool = mysql.createPool({
		connectionLimit : 100,
		host: config.host,
		user: config.user,
		password:config.password,
		database: config.database,
		debug: false
	});
	pool.getConnection(function(err,connection){
		if(err) {
			self.stop(err);
		} else{
			self.configureExpress(connection);
		}
	});
}

REST.prototype.configureExpress = function(connection) {
	var self = this;
	
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});
	
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	var router = express.Router();
	app.use('/api', router);


	var rest_router = new rest(router, connection, md5);
	self.startServer();
}

REST.prototype.startServer = function(){
	app.listen(config.port, function(){
		console.log("Server has Started at Port " + config.port + "...");
	});
}

REST.prototype.stop = function(err){
	console.log("Server Error..." + err);
	process.exit(1);
}

new REST();