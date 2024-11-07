const express = require("express");
const app = express();
const path = require("path")
const port = 3000;
const colors = require("colors");

const conexion = require("./conexion");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));


app.get('/Login', (req, res) => {
    res.render("Login");     //Esta es la ruta que lleva al login//
    console.log("Accediendo a Login".bgBlue.black);
});

let datos;
app.post('/verifica', (req, res) => {
    const name = req.body.username;
    const password = req.body.password;
    conexion.query("SELECT *, DATE_FORMAT(fecha_nacimiento, '%d/%m/%Y') AS fecha FROM usuarios WHERE primer_nombre = ? AND identificacion = ?", [name, password], (err, result) => {
        if (err) {
            res.send("Error en la consulta");
            console.log(err);
        } else {
            if (result.length > 0) {
                datos = result[0];
                console.log("Usuario correcto".green);
                res.redirect("/Bienvenido");
            } else {
                res.redirect("/Login");
            }
        }
    });
});

app.get('/Bienvenido', (req, res) => {
    res.render("Bienvenido");  //Esta es la ruta que va al Bienvenido//
    console.log("Accediendo a Bienvenido".bgRed.black);
});

app.get('/Datos', (req, res) => {
    res.render("Datos", {datos: datos});   //Esta es la ruta que val a Datos//
    console.log("Accediendo a Datos".bgGreen.black);
});

app.listen(port, () => {
    console.log("abriendo servidor en puerto 3000");   //Esta es la ruta para abrir el servidor en el puerto 3000//
});