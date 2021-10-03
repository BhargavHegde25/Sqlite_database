const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('Outputs/Movie_list.db');

//sql query to retrieve the data from the database
let sql='SELECT * FROM MOVIES';

db.all(sql, [], (err, rows) => {
	
	if(err){
		throw err;
	
	}
	//iterate over each row in the database, printing the contents to stdout
	rows.forEach((row) => {
		console.log(row.MOVIE_NAME);
		console.log(row.ACTOR);
		console.log(row.ACTRESS);
		console.log(row.YEAR_OF_RELEASE);
		console.log(row.DIRECTOR_NAME);
	});
});

//close the database
db.close();
