const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(error => {
    if (error) {
        console.error('Błąd połączenia: ' + error.message);
    } else {
        console.log('Połączono z bazą danych MySQL.');
    }
});

module.exports = connection;
