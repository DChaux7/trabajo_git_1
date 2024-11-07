const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'david',
    database: 'proyecto_web'
})

module.exports = conexion;
