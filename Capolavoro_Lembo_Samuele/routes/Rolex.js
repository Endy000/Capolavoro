const express = require('express');
let route = express.Router();

route.get("/", (req, res) => {
    res.render("");
});

module.exports = route;