const express = require('express');
const conn = require('../utils/conndb');

const route = express.Router();

// Route per visualizzare la lista dei calciatori
route.get("/", (req, res) => {
    let calciatore_scelto = req.query.calciatore;
    if (!calciatore_scelto || calciatore_scelto < 0) res.redirect("/")
    const sql = "SELECT * FROM Calciatori where id = ? ";
    conn.query(sql, [calciatore_scelto], (err, resp) => {
        if (err) {
            console.log("Errore durante il recupero dei dati dei calciatori: " + err);
            res.status(500).send("Errore durante il recupero dei dati dei calciatori");
        } else {
            res.render('HomeC', { dati_calciatore: resp });
        }
    });
});



module.exports = route;
