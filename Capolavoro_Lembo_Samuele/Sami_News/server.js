const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "Home.html"));
})

app.listen(process.env.PORT || 5000)

console.log("Server-Sami in ascolto sulla porta 5000")