const express = require("express");
const app = express();
const path = require("path")
const port = 3000;
const colors = require("colors");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));


app.get('/Login', (req, res) => {
    res.render("Login");     //Esta es la ruta que lleva al login//
    console.log("Accediendo a Login".bgBlue.black);
});

app.get('/Bienvenido', (req, res) => {
    res.render("Bienvenido");  //Esta es la ruta que va al Bienvenido//
    console.log("Accediendo a Bienvenido".bgRed.black);
});

app.get('/Datos', (req, res) => {
    res.render("Datos");   //Esta es la ruta que val a Datos//
    console.log("Accediendo a Datos".bgGreen.black);
});

app.listen(port, () => {
    console.log("abriendo servidor en puerto 3000");   //Esta es la ruta para abrir el servidor en el puerto 3000//
});