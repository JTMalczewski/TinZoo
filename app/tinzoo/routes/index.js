var express = require('express');
var router = express.Router();
const cors = require('cors');
router.use(cors());

const indexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/', indexController.getIndex);
router.get('/pieski', indexController.getPieski);

module.exports = router;

// npm i nodemon
// "start": nodemon app.js