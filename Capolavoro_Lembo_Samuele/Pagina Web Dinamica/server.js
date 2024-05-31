// Dichiarazione librerie e route del DB
const mysql = require("mysql")  
const express = require ("express")
const ejs = require ("ejs")
const path = require("path")
const conn = require('./utils/conndb')

// Configurazioni di base

const app = express()
const db = require('./utils/conndb');
app.use(express.static('./public'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configurazioni routes 

const calcio = require("./routes/HomeC");
app.use("/Homec", calcio);

app.get("/", (req, res) => {
    let sql = "SELECT * FROM Calciatori";
    
    conn.query(sql, (err, resp) => {
        if (err) {
            console.log("zone errore status: " + err)
            res.status(500).send("Errore nel recupero dei Calciatori");
        } else {
            if (resp.length === 0) {
                res.render('no_results', { calciatori: req.session.nome });
            } else {
                res.render('Scelta', {calciatori: resp});
            }
        }
    });
});



app.listen(3000, () => console.log("Sito Calciatori è in ascolto sulla porta 3000"))