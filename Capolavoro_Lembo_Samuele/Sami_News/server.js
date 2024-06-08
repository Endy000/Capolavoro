const express = require ("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.render(__dirname + '/Home');
})

app.listen(5000)

console.log("Server-Sami in ascolto sulla porta 5000")
