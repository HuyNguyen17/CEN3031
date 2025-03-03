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
	description VARCHAR(1250),
	profile_pic_small bytea,
	profile_pic_full bytea,
	projects bigint NOT NULL PRIMARY KEY,
	organizations bigint NOT NULL PRIMARY KEY
);

CREATE TABLE projects(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	projectname VARCHAR(60) NOT NULL UNIQUE,
	description VARCHAR(1250),
	project_pic_small bytea,
	project_pic_full bytea,
	project_admins  bigint NOT NULL PRIMARY KEY,
	project_members  bigint NOT NULL PRIMARY KEY,
	organizations bigint NOT NULL PRIMARY KEY
);

CREATE TABLE organizations(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	organization_name VARCHAR(60) NOT NULL UNIQUE,
	description VARCHAR(1250),
	org_pic_small bytea,
	org_pic_full bytea,
	org_admins bigint NOT NULL PRIMARY KEY,
	org_members bigint NOT NULL PRIMARY KEY,
	org_followers bigint NOT NULL PRIMARY KEY,
	projects bigint NOT NULL PRIMARY KEY
);

--this is how likes can be implemented
--found by Laurenz Abe on stack overflow. 
CREATE TABLE likes (
   person_id bigint REFERENCES persons NOT NULL,
   post_id bigint REFERENCES posts NOT NULL,
   PRIMARY KEY (person_id, post_id)
);



INSERT INTO users (username, password, email, linkedin, major, year, description) values ('firstuser', 'firstpassword', 'firstuser@ufl.edu', 'mylinkedin.com', 'Computer Engineering', '4th', 'Freshman ece student at UF!');
 
-- to connect to the database run \c socket
-- to reset/delete a table run DROP TABLE table_name;

-- other basic useful psql commands: 
-- \dt  
-- shows all of the tables in the DB
-- SELECT * FROM mytable;
-- shows all of the data inside of the table