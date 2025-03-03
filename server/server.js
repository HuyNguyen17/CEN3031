// dependencies
require("dotenv").config();
const bcrypt = require('bcrypt');
const express = require("express");

// initialize encryption 
const saltRounds = 7;

// talk to the database 
const db = require("./db");

// create an express instance
const app = express();
app.use(express.json());

// create an account 
app.post("/api/signup", async (req, res) => {
    const {username, password, email} = req.body;
    //console.log(req.body); //uncomment to see what is being passed in
    try{
        const hashPassword = await bcrypt.hash(password, saltRounds);
        //console.log(hashPassword); //uncomment to see hashed password 
        await db.query(
            'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, hashPassword, email]
        );
        res.status(201).send({ message: 'Signup Succesful'});
    } catch (error) {
        res.status(500).send({ error: "Signup Failed: Username taken or empty password/email field"});
    }
});

// login to account (incomplete)
app.post("/api/login", async (req, res) => {
    res.json({
        status: "sucess",
        user: "test user",
    })
});

// logout of account (incomplete)
app.post("/api/logout", async (req, res) => {
    res.json({
        status: "sucess",
        user: "test user",
    })
});

// edit account info (incomplete)
app.post("/api/edit", async (req, res) => {
    res.json({
        status: "sucess",
        user: "test user",
    })
});

// delete account (incomplete)
app.post("/api/delete", async (req, res) => {
    res.json({
        status: "sucess",
        user: "test user",
    })
});

// generate list of users for user list (incomplete)
app.get("/api/list", async (req, res) => {
    res.json({
        status: "sucess",
        user: "test user",
    })
});

// set port using .env; if no value is defined, set to 3001
const PORT = process.env.PORT || 3001;

// running 
app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});