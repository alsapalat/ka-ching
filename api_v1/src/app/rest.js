var mysql = require("mysql");
var USER = require('./modules/users/index.js');

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes=function(router,connection,md5) {
    
    router.get("/",function(req,res){
        res.json({"Message" : "Connection OK..."});
    });

    new USER(router, connection, md5);

}

module.exports = REST_ROUTER;





/*//CREATE USER
    router.post("/users", function(req, res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
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
                    "message" : "Error | " + err
                });
            } else {
                //List new users
                var resquery = "SELECT * FROM ??"
                var table = ["users"];
                resquery = mysql.format(resquery, table);
                connection.query(resquery, function(reserr ,resrows){
                    if(!reserr){
                        res.json({
                            "error" : false,
                            "message" : "User has been Added!", 
                            "Users": resrows
                        });
                    }
                });
                
            }
        });
    });

    //READ USER
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
                    "message" : "Sucess", "Users" : rows
                });
            }
        });
    });

    router.get("/users/:id", function(req, res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["users","user_id", req.params.id];
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
                    "message" : "Sucess", "Users" : rows
                });
            }
        });
    });

    //UPDATE USER
    router.put("/users/changepassword/:id", function(req, res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["users", "user_password", md5(req.body.password), "user_id", req.params.id];
        query = mysql.format(query,table);
        connection.query(query, function(err,rows){
            if(err){
                res.json({
                    "error" : true,
                    "message" : "Error | " + err
                });
            } else {
                res.json({
                    "error" : false,
                    "message" : "User " + req.params.id + "'s password has been changed..."
                });
            }
        })
    });

    //DELETE USER
    router.delete("/users/:email", function(req, res) {
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["users", "user_email", req.params.email];
        query = mysql.format(query,table);
        connection.query(query, function(err,rows){
            if(err){
                res.json({
                    "error" : true,
                    "message" : "Error | " + err
                });
            } else {
                res.json({
                    "error" : false,
                    "message" : req.params.email + "'s account has been deleted...", "Users": rows
                });
            }
        })
    })*/