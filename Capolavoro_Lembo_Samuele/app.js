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

// dichiarazione routes
const Rolexi = require("./routes/Rolex");
const Samis = require("./routes/Sami");
const Sito = require("./routes/SitoC");
app.use("/Rolex", Rolexi);
app.use("/Sami", Samis);
app.use("/SitoC", Sito);

app.get("/", function(req, res) {
    res.render(path.join(__dirname + "/views", "index.ejs"));
})

app.listen(8008)
console.log("server in ascolto sulla 8008")