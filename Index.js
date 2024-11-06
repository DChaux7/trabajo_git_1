const express = require("express");
const app = express();
const path = require("path")
const port = 3000;

app.get('/Login', (require, res) => {
    res.sendFile(path.join(__dirname,"Login.html"));
});

app.get('/Bienvenido', (require, res) => {
    res.sendFile(path.join(__dirname,"Bienvenido.html"));
});

app.get('/Datos', (require, res) => {
    res.sendFile(path.join(__dirname,"Datos.html"));
});

app.listen(port, () => {
    console.log("abriendo servidor en puerto 3000");
});