const mysql_connector = require('mysql');
connection = mysql_connector.createConnection({
  host : 'localhost',
  user : 'root',
  password  :'yresnicoff',
  database : 'gaming_store'
});

module.exports = connection;