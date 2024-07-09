// routes/piesekRoutes.js
const express = require('express');
const multer = require('multer');
const piesekController = require('../controllers/piesekController');
const cors = require('cors');

// Konfiguracja multer
const storage = multer.memoryStorage(); // Użyjemy memoryStorage, aby plik był dostępny jako buffer
const upload = multer({ storage: storage });

const router = express.Router();
router.use(cors());

// Route do dodawania nowego pieska z obsługą przesyłania plików
router.post('/add', upload.single('Zdjecie'), piesekController.addPiesek);

router.get('/all', piesekController.getAllPieski);

router.post('/update', upload.single('Zdjecie'), piesekController.updatePiesek);

router.get('/get/:id', piesekController.getPiesek);

router.delete('/delete/:id', piesekController.deletePiesek);

module.exports = router;
