var mysql = require("mysql");

var onError = require('./error').onError;
var hasValue = require('./error').hasValue;

function USER(router, connection, md5){
	
	//CREATE USER
	router.post("/users", function(req, res){

		msg = hasValue(req.body,[
			"username",
			"email",
			"password"]);

		if(typeof msg !== "boolean")
			return res.json(onError(msg))

		var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
		var table = [
			"users",
			"username",
			"email",
			"password",
			req.body.username,
			req.body.email,
			md5(req.body.password)
		];

		query = mysql.format(query, table);
		connection.query(query, (err, rows) => {
			if(err){
				return res.json(onError(err));
			}
			return res.json({
				"error" : false,
				"message" : "Success"
			})
		})
	});

	//READ ALL USER
    router.get("/users", function(req, res){
        var query = "SELECT * FROM ??";
        var table = ["users"];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows){
            if(err){
                res.json({
                    "error" : true,
                    "message" : "Error | " + err
                });
            } else {
                res.json({
                    "error" : false,
                    "message" : "Sucess", "users" : rows
                });
            }
        });
    });

    //READ USER BY ID
    router.get("/users/:id", function(req, res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["users","id", req.params.id];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows){
            if(err){
                res.json({
                    "error" : true,
                    "message" : "Error | " + err
                });
            } else {
                res.json({
                    "error" : false,
                    "message" : "Sucess", "users" : rows[0]
                });
            }
        });
    });

}



module.exports = USER;