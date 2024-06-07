const express = require("express");
const ejs = require("ejs");
const path = require("path");
const { exec } = require('child_process');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(express.static('./Flexbox'));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render(path.join(__dirname + "/views", "index.ejs"));
});

const apps = [
  { name: 'Flexbox', port: 4601, path: './Flexbox/server.js' },
  { name: 'Pagina Web Dinamica', port: 4602, path: '"./Pagina Web Dinamica/server.js"'},
  { name: 'Rolexlandia', port: 4600, path: './Rolexlandia/Binaries/ServerWeb.js' },
  { name: 'Sami_News', port: 4603, path: './Sami_News/server.js' }
];

apps.forEach(appInfo => {
  exec(`node ${appInfo.path}`, { env: { PORT: appInfo.port } }, (err, stdout, stderr) => {
    if (err) {
      console.error(`Errore nell'avvio di ${appInfo.name}:`, err);
      return;
    }
    console.log(`${appInfo.name} output:`, stdout);
  });
});

console.log("server in ascolto sulla 8008");
app.listen(8008);
