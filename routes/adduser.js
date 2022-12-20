var express = require('express');
var router = express.Router();
var db = require('../db');
const { body } = require('express-validator');
/* GET users listing. */
router.post('/', body('userName').not().isEmpty().trim().escape(),body('fName').trim().escape(),body('lName').trim().escape(),body('email').isEmail().normalizeEmail(), function(req, res, next) {
  db.connect();
  const {username, fName, lName, email, image, password} = req.body;
  console.log(req.body)
  console.log(username, fName, lName, email, image, password);
  let myQuery = `insert into users(userName, fName, lName, email, image, password) values("${username}", "${fName}", "${lName}", "${email}", "${image}", "${password}")`;
  db.query(myQuery, function(error, results){
    if(error) {
        console.log(`Error: ${error}`)
    }
    console.log("query response is ", results);
    console.log(results.affectedRows);
    if(results && results.affectedRows){
        res.status(200).send("User Added");
    } else {
        console.log('User not found');
        res.redirect('back');
    }
  })
  db.end();
});

module.exports = router;