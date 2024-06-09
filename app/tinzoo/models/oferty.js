var mysql = require('mysql2')
var dotenv = require('dotenv')
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getOferty() {
    const [rows] = await pool.query('SELECT * FROM oferty')
    return rows
}

async function getOferta(id) {
    const [row] = await pool.query(`
    SELECT * 
    FROM oferty
    WHERE id = ?
    `, [id])
    return row[0]
}

async function createOferta(nazwa, wartosc, id_przetargu) {
    const [result] = await pool.query(`
    INSERT INTO oferty (nazwa, wartosc, czas, id_przetargu)
    VALUES (?, ?, NOW()+1, ?)
    `, [nazwa, wartosc, id_przetargu])
    const id = result.insertId
    return getNote(id)
  }

module.exports = {
    getOferty,
    getOferta,
    createOferta
}