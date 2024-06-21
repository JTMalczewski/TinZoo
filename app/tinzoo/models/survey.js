// models/survey.js

class Survey {
    static db = require('../config/database'); // importuj połączenie do bazy

    static async saveSurvey(userId, data) {
        const query = `INSERT INTO Formularz (IDUzytkownika, Przestrzen, Podworko, InneZwierzeta, DlugieSpacery, Dzieci, Agresja, MozeSam, Choroby, Lekliwosc, Dieta)
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [userId, data.Przestrzen, data.Podworko, data.InneZwierzeta, data.DlugieSpacery, data.Dzieci, data.Agresja, data.MozeSam, data.Choroby, data.Lekliwosc, data.Dieta];
        return new Promise((resolve, reject) => {
            this.db.query(query, values, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Survey;
