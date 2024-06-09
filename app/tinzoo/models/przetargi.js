// example of model file

var mysql = require('mysql2')
var dotenv = require('dotenv')
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getPrzetargi() {
    const [rows] = await pool.query('SELECT * FROM przetargi')
    return rows
}

async function getPrzetarg(id) {
    const [row] = await pool.query(`
    SELECT * 
    FROM przetargi
    WHERE id = ?
    `, [id])
    return row[0]
}

async function createPrzetarg(title, t1, d1, t2, d2, is_active) {
    const [result] = await pool.query(`
    INSERT INTO przetargi (title, t1, d1, t2, d2, is_active)
    VALUES (?, ?, ?, ?, ?, ?)
    `, [title, t1, d1, t2, d2, is_active])
    const id = result.insertId
    return getNote(id)
  }

module.exports = {
    getPrzetargi,
    getPrzetarg,
    createPrzetarg
}