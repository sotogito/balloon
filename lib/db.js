var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'sotogito',
    database : 'opentutorials',
});
db.connect();
module.exports = db;