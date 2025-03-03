-- description of how to setup SQL on local machine

-- step 1: download PostgreSQL 17.4
-- step 2: run "psql" (search for it on your computer)
-- step 3: select default server, database, port, username
--         enter your passowrd (MAKE SURE TO REMEMBER IT)
-- step 4: add the following to your .env file
-- PGUSER=postgres
-- PGHOST=localhost
-- PGPASSWORD=*whatever password you used*
-- PGDATABASE=socket
-- PGPORT=5432
-- step 5: run the following commands in psql

CREATE DATABASE socket

CREATE TABLE users (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	username VARCHAR(60) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE,
	linkedin VARCHAR(255),
	major VARCHAR(255),
	year VARCHAR(20),
	description VARCHAR(255)
);

INSERT INTO users (username, password, email, linkedin, major, year, description) values ('firstuser', 'firstpassword', 'firstuser@ufl.edu', 'mylinkedin.com', 'Computer Engineering', '4th', 'Freshman ece student at UF!');
 
-- to connect to the database run \c socket
-- to reset/delete a table run DROP TABLE table_name;

-- other basic useful psql commands: 
-- \dt  
-- shows all of the tables in the DB
-- SELECT * FROM mytable;
-- shows all of the data inside of the table