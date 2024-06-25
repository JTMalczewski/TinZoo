// controllers/surveyController.js

const surveyService = require('../services/surveyService');

async function submitSurvey(req, res) {
    console.log("Received survey data:", req.body);  // Dodaj tę linijkę tutaj
    const userId = req.body.userID;
    if (!userId) {
        return res.status(403).json({ error: 'Brak identyfikatora użytkownika' });
    }
    try {
        const result = await surveyService.saveSurveyData(userId, req.body);
        // Dodanie URL przekierowania
        result.redirectUrl = '/';  // Przekierowanie na stronę główną, tylko ta linijka dodana do przekierowania
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Wewnętrzny błąd serwera', message: error.message });
    }
}


module.exports = {
    submitSurvey
};
