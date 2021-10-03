# Sqlite_database
small demo of sqlite3 database creation data retrieving.

Step 1: Database Creation.
Database named "Movie_List" created using the sqlite3.
	A) open command shell in the project root folder.
	B) Run the following command.
	     C:\sqlite3\sqlite3 Outputs\Movie_list.db < Data_Creation.sqlite
(Note: sqlite3 has been installed in the path "C:/sqlite3")

"Data_Creation.sqlite" script creates the table for list of movies, each entry contains data in the folowing format.
['MOVIE_NAME','ACTORS','ACTRESS','YEAR_OF_RELEASE','DIRECTIOR_NAME']

Step 2: Data Retrieving.
Javascript has been used for data retrieval.
	A)Install "nodejs".
	B)The previously created database file "Movie_List.db" and javascript file "Bhargav.js" copied to nodejs installation folder.
	C)Open a command shell in the nodejs installation directory.
	D)Run the following command.
	      node Bhargav.js

The javascript outputs the database contents into stdout, the output has been copied to the file "console.log" in the "Outputs" directory of the repository.
