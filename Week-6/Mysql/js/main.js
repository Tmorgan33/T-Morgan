var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "mydatabase"
});

con.connect(function(err) {
	if(err) {
		throw err;
	} else {
		console.log("Connected!");


		var sql = "INSERT into students (firstname, middleinitial, lastname) VALUES ('Lex', 'j', 'brown')";
		// var sql = "SELECT * from students;";
		con.query(sql, function (err, result) {
			if (err) throw err;
			
			for(key in result) {
				console.log(result[key]);
			}

		});


	}
});