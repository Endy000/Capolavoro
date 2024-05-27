const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.redirect('/index');
});

app.get('/index', (req, res) => {
    res.render(__dirname + '/index');
});


app.listen(7000)
console.log("server FlexBox in ascolto sulla 7000")