const express = require('express');
const cors = require('cors');
const userController = require('../controllers/userController'); // Upewnij się, że ta ścieżka jest poprawna
const surveyController = require('../controllers/surveyController');
const router = express.Router();
const path = require('path'); //do tego zalogowano.html

router.use(cors());

// Endpoint do wyświetlenia strony głównej użytkownika
//router.get('/', (req, res) => {
//    res.send('User home page');
//});

// Endpoint do rejestracji nowych użytkowników
router.post('/register', (req, res) => {
    userController.register(req, res);
});

router.post('/login', (req, res) => {
    userController.login(req, res);
});

router.get('/zalogowano', (req, res) => {
    console.log("Sesja w /zalogowano: ", req.session.userId); // Sprawdź, czy ID sesji jest dostępne
    if (req.session.userId) {
        res.sendFile(path.join(__dirname, '..', 'views', 'zalogowano.html'));
    } else {
        console.log("Brak sesji, przekierowanie do /login");
        res.redirect('/login');
    }
});

router.post('/submitSurvey', surveyController.submitSurvey);

router.get('/logout', userController.logout);

module.exports = router;
