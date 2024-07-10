const userService = require('../services/userService');

// Definicja kontrolera dla użytkownika
class UserController {
    async register(req, res) {
        try {
            const newUser = await userService.registerUser(req.body);
            if (newUser) {
                // Przekierowanie do ankiety z userID
                
                console.log("Rejestracja udana, przekierowanie:", { userID: newUser.IDUzytkownika, redirectUrl: '/ankieta.html' });
                res.json({ message: 'Rejestracja zakończona sukcesem', userID: newUser.IDUzytkownika, redirectUrl: '/ankieta.html' });
            } else {
                res.status(400).json({ error: 'Nie udało się zarejestrować użytkownika' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    

    async login(req, res) {
        try {
            const user = await userService.loginUser(req.body);
            console.log("Otrzymany użytkownik z userService: ", user);  // Sprawdź co dokładnie zwraca userService
            if (user) {
                req.session.userId = user.IDUzytkownika;  // Użyj właściwej nazwy klucza z obiektu użytkownika
                req.session.username = user.Pseudonim;  // Użyj właściwej nazwy klucza z obiektu użytkownika
                console.log("Sesja ustawiona: ", req.session.userId, req.session.username);
                res.json({ message: 'Zalogowano pomyślnie', userId: user[0].IDUzytkownika, username: user[0].Pseudonim, redirectUrl: '/users/zalogowano', survey: user[1] });
            } else {
                res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    
    
    logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send("Nie udało się wylogować");
            }
            res.redirect('/'); // Przekieruj na stronę główną po pomyślnym wylogowaniu
        });
    }
}

module.exports = new UserController();
