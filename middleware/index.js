const uuid = require('uuid');
const session = require('express-session');
require('dotenv').config();

const sessionFunction = session({
genid: req => {
    console.log(`session middleware. sessionID ${req.sessionID}`)
        return uuid.v4();
    },
    secret: process.env.SESSION_SECRET,
    resave: false, //For Store...later
    saveUninitialized: true //...later
    })
module.exports = sessionFunction;