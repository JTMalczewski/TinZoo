const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const Survey = require('../models/survey');    

async function registerUser(userData) {
    const { firstName, lastName, username, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const result = await User.createUser(firstName, lastName, username, hashedPassword);
        if (result && result.insertId) {
            return { IDUzytkownika: result.insertId };  // Zwracamy ID nowo utworzonego użytkownika
        } else {
            throw new Error('No user was created.');
        }
    } catch (error) {
        throw error;
    }
}



async function loginUser(userData) {
    const { username, password } = userData;
    try {
        const user = await User.findByUsername(username); //zwracany rekord z bazy danych
        const survey = await Survey.getSurvey(user.IDUzytkownika); //zwracany rekord z bazy danych
        console.log("Otrzymany użytkownik z findByUsername:", user);
        if (!user) {
            throw new Error('Użytkownik nie istnieje');
        }

        const isMatch = await bcrypt.compare(password, user.Haslo);
        if (!isMatch) {
            throw new Error('Nieprawidłowe hasło');
        }

        return [user, survey];
    } catch (error) {
        console.error("Błąd przy logowaniu użytkownika:", error);
        throw error;
    }
}


module.exports = {
    registerUser,
    loginUser
};
