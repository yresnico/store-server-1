var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/', function(req, res, next) {
    const {email, password} = req.body;
    let myQuery = `SELECT userID, role FROM users WHERE email = "${email}" AND PASSWORD = "${password}"`;
    db.execute(myQuery, function(error, results, fields){
        if(error) {
            console.log(`Error: ${error}`)
        }
        console.log(results);
        // console.log("query response is ", results);
        // console.log(results.affectedRows);
        if(results.length > 0){
            console.log(results[0].userID)
            console.log(results[0].role)
            res.cookie("gwyUser", results[0].userID)
            res.cookie("gwyRole", results[0].role)
            res.status(200).send("User Logged In");
        } else {
            console.log("Couldn't log in");
            res.status(401).json({error: 'Incorrect login'});
        }
    });
});

module.exports = router;