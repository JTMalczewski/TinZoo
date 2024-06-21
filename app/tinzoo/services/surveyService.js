// services/surveyService.js

const Survey = require('../models/Survey');

async function saveSurveyData(userId, surveyData) {
    try {
        const result = await Survey.saveSurvey(userId, surveyData);
        return { success: true, message: 'Ankieta zapisana', data: result };
    } catch (error) {
        throw error;
    }
}

module.exports = {
    saveSurveyData
};
