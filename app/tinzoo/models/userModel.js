const db = require('../config/database'); // upewnij się, że ścieżka do pliku database.js jest poprawna

class User {
    constructor(id, firstName, lastName, username, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }

    static async createUser(firstName, lastName, username, hashedPassword) {
        const query = 'INSERT INTO Uzytkownicy (Imie, Nazwisko, Pseudonim, Haslo) VALUES (?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [firstName, lastName, username, hashedPassword], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static findByUsername(username) {
        const query = 'SELECT * FROM Uzytkownicy WHERE Pseudonim = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [username], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]); // Zwróć pierwszy wynik
                }
            });
        });
    }
}

module.exports = User;
