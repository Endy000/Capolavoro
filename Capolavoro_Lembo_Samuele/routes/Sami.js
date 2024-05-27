const express = require('express');
let route = express.Router();
const { exec } = require('child_process');

app.get('/', (req, res) => {
  exec('cd /Sami_News && node server.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Errore durante l'avvio della seconda app: ${error.message}`);
      return res.status(500).send('Errore durante l\'avvio della seconda app');
    }
      
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }

    console.log(`stdout: ${stdout}`);
    res.send('Seconda applicazione avviata con successo');
  });
});

module.exports = route;
