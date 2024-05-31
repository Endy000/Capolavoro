const mysql = require ("mysql")

const conn = mysql.createConnection({
    host:"217.58.199.70",
    user:"5As07",
    password:"5As07",
    port: 33060,
    database:"DB_5A_07"
})

module.exports = conn;