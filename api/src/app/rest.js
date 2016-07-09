var mysql = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    
    router.get("/",function(req,res){
        res.json({"Message" : "Connection OK..."});
    });

    //POST 
    router.post("/users", function(req, res){
    	var query = "INSERT INTO ??(??,??) VALUES (?.?)";
    	var table = [
    		"users",
    		"user_email",
    		"user_password",
    		req.body.email, 
    		md5(req.body.password)
		];

		query = mysql.format(query, table);

		connection.query(query, function(err, rows){
			if(err){
				res.json({
					"error" : true,
					"message" : "Error Executing MySql Query"
				});
			} else {
				res.json({
					"error" : false,
					"message" : "User Added!"
				});
			}
		});
    });
}

module.exports = REST_ROUTER;