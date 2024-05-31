// dichiarazione librerie
const express = require ("express")
const ejs = require ("ejs")
const path = require ("path")
const app = express()

// dichiarazione file statici
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))
app.use(express.static('./Flexbox'))
app.set("view engine", "ejs")

//restituisce la homepage
app.get("/", function(req, res) {
    res.render(path.join(__dirname + "/views", "index.ejs"));
})

//mette l'app in ascolto
app.listen(8008)
console.log("server in ascolto sulla 8008")