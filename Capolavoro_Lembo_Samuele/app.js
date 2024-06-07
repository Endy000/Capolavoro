// dichiarazione librerie
const express = require ("express")
const ejs = require ("ejs")
const path = require ("path")
const { exec } = require('child_process');
//instanziamento applicazione
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


// Avvio delle app nelle sottocartelle
const apps = [
  { name: 'Flexbox', path: './Flexbox/server.js' },
  { name: 'Pagina Web Dinamica', path: '"./Pagina Web Dinamica/server.js"' },
  { name: 'Rolexlandia', path: './Rolexlandia/Binaries/ServerWeb.js' },
  { name: 'Sami_News', path: './Sami_News/server.js' }
];

apps.forEach(appInfo => {
  exec(`node ${appInfo.path}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Errore nell'avvio di ${appInfo.name}:`, err);
      return;
    }
    console.log(`${appInfo.name} output:`, stdout);
  });
});

//mette l'app in ascolto
app.listen(8008)
console.log("server in ascolto sulla 8008")
