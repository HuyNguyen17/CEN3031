// dependencies
const router = require('express').Router();
const db = require('../db/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorization = require("../authorization");

// initialize encryption 
const saltRounds = 7;

// create an account 
router.post('/signup', async (req, res) => {
    const {username, password, email} = req.body;
    if (!username || !password || !email) {
        return res.status(400).send({ error: "All fields required."});
    }
    //console.log(req.body); //uncomment to see what is being passed in
    try{
        const hashPassword = await bcrypt.hash(password, saltRounds);
        //console.log(hashPassword); //uncomment to see hashed password 
        await db.query(
            'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, hashPassword, email]
        );
        res.status(201).send({ message: 'Signup Succesful'});
    } catch (error) {
        res.status(500).send({ error: "Signup Failed: Username/email taken or empty field"});
    }
});

// login to account (some code from: Building a Robust User Authentication System with the PERN Stack by amit kumar) 
router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    //console.log(req.body); //uncomment to see what is being passed in 
    try{
        const results = await db.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );

        // if username does not exist, throw error
        if (results.rowCount === 0) {
            return res.status(401).send( { error: 'Nonexistant User'});
        }

        const user = results.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        // if password does not match, throw error 
        if (!isMatch) {
            return res.status(401).send( { error: 'Incorrect Password'});
        }

        // use JWT token
        const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, { expiresIn: '2h' });
        res.send({ token });    

    } catch (error) {
        res.status(500).send({ error: "Login Failed"});
    } 
});

// edit account info (incomplete)
router.put('/edit', authorization, async (req, res) => {

});

module.exports = router;