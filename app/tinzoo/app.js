const express = require('express');
const path = require('path');
const userRouter = require('./routes/userRoutes.js'); // Upewnij się, że ścieżka do tego pliku jest prawidłowa
const piesekRoutes = require('./routes/piesekRoutes');
const db = require('./config/database.js');
const session = require('express-session');

const app = express();
app.use(express.json());  // Middleware do parsowania JSON

app.use(express.urlencoded({ extended: true }));  // Do przetwarzania tradycyjnych danych formularza

// Konfiguracja sesji
app.use(session({
  secret: 'tajny_klucz',  // Klucz używany do szyfrowania identyfikatora sesji
  resave: false,
  saveUninitialized: true,  // Zmienione dla celów testowych
  cookie: { secure: false } // Ustaw na true tylko, jeśli Twoja strona działa na HTTPS
}));

// Podłączenie routera użytkowników
app.use('/users', userRouter);
app.use('/pieski', piesekRoutes);  // używaj ścieżki bazowej /pieski dla wszystkich tras w piesekRoutes

// Obsługa statycznych plików HTML
app.use(express.static(path.join(__dirname, 'views')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
