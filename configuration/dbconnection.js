const mysql = require("mysql");

var connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "toor",
    database: "csharptestingdb"
});

module.exports = connection;