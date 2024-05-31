const mysql = require("mysql")
const express = require("express")
const bp = require("body-parser")
const ejs = require("ejs")
const session = require('express-session')
const conn = require('./utils/connectionDB')

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))
app.set("view engine", "ejs")
app.use(session({
    secret: "chiave",
    resave: false,
    saveUninitialized: true
}));

//import route e uso
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
app.use("/login", loginRoute);
app.use("/register", registerRoute);

const db = require('./utils/connectionDB');

app.get("/", (req, res) => {
    let sql = "SELECT * FROM orologi";

    const { Tipologia, Materiale, Stile, Marca } = req.query;
    const filters = [];

    if (Tipologia) filters.push(`Tipologia = '${Tipologia}'`);
    if (Materiale) filters.push(`Materiale = '${Materiale}'`);
    if (Stile) filters.push(`Stile = '${Stile}'`);
    if (Marca) filters.push(`Marca = '${Marca}'`);

    if (filters.length > 0) {
        const whereClause = filters.join(' AND ');
        sql += ` WHERE ${whereClause}`;
    }

    conn.query(sql, (err, resp) => {
        if (err) {
            res.status(500).send("Errore nel recupero degli orologi");
        } else {
            if (resp.length === 0) {

                res.render('no_results', { utente: req.session.nome });
            } else {
                res.render('index', { orologi: resp, utente: req.session.nome });
            }
        }
    });

});

app.post("/", (req, res) => {

    let sql = "SELECT * FROM orologi WHERE 1=1 ";

    const { tipologia, materiale, stile, marca } = req.body;
    if (typeof tipologia !== 'undefined') {
        sql += "AND Tipologia IN (";
        tipologia.forEach(element => {
            sql += `'${element}',`
        });
        sql += "'') ";
    }
    if (typeof materiale !== 'undefined') {
        sql += "AND Materiale IN (";
        materiale.forEach(element => {
            sql += `'${element}',`
        });
        sql += "'') ";
    }
    if (typeof stile !== 'undefined') {
        sql += "AND Stile IN (";
        stile.forEach(element => {
            sql += `'${element}',`
        });
        sql += "'') ";
    }
    if (typeof marca !== 'undefined') {
        sql += "AND Marca IN (";
        marca.forEach(element => {
            sql += `'${element}',`
        });
        sql += "'') ";
    }

    conn.query(sql, (err, resp) => {
        if (err) {
            res.status(500).send("Errore nel recupero degli orologi");
        } 
        else {
                res.render('index', { orologi: resp, utente: req.session.nome });
            }
    });
})

app.get("/", (req, res) => {
    conn.query("SELECT * FROM orologi", (err, resp) => {
        res.render('index', { orologi: resp, utente: req.session.nome })
    })
})

app.listen(4600)
console.log("Server in ascolto sulla porta 4600")