const dbconfig = require('../config/db.config.js');
const mysql = require('mysql');


// Create a connection to the database
const conn = mysql.createPool({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
})

//open the mysql connection

conn.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

module.exports = conn;

