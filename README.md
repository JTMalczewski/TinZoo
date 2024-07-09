# TinZOO
### Used Technologies
-
-
-
### Install guide
Before running app you will need to create database and your own .env file. See `baza_danych.txt` for further instructions.
### Runing app guide
to run frontend go to the `./client/` and paste:
```
$ npm run dev
```
to run backend go to the `./app/tinzoo/` and paste:
```
$ node app.js
```


**before open set up:**

npm install mysql2

npm install bcrypt

npm install express-session

npm install mult

ALTER TABLE Pieski MODIFY Zdjecie MEDIUMBLOB;



# DOUMENTACJA PROJEKTU

#d. Implementacja

### databse.js
Opis Działania:

- Użycie mysql2 do połączenia z bazą danych MySQL.
- Konfiguracja połączenia przy użyciu zmiennych środowiskowych (dotenv).
- Eksportowanie obiektu połączenia do dalszego użytku w aplikacji.

### app.js
Opis Działania:

- Użycie express do stworzenia serwera HTTP.
- Middleware do parsowania JSON i tradycyjnych danych formularza.
- Konfiguracja sesji przy użyciu express-session.
- Podłączenie routerów dla użytkowników i innych zasobów.
- Serwowanie statycznych plików HTML.
- Nasłuchiwanie na określonym porcie.

## USER
### userController.js
Opis Działania:

- Rejestracja i logowanie użytkowników przy użyciu userService.
- Przechowywanie danych sesji w express-session.
- 
                req.session.userId = user.IDUzytkownika;
  
                req.session.username = user.Pseudonim;
  
- Obsługa wylogowania poprzez zniszczenie sesji.
### userModel.js
Opis Działania:

- Klasa User reprezentuje model użytkownika.
- Metody createUser i findByUsername do tworzenia nowych użytkowników i wyszukiwania po nazwie użytkownika.
- Korzystanie z Promise do obsługi asynchronicznych zapytań do bazy danych.
### userRoutes.js
Opis Działania:

- Definicje tras dla rejestracji, logowania, wylogowania oraz wyświetlania strony po zalogowaniu.
- Wykorzystanie kontrolera userController do obsługi logiki biznesowej.

### userService.js
Opis Działania:

- registerUser: Rejestruje nowego użytkownika, haszując jego hasło przed zapisaniem w bazie danych.
- loginUser: Loguje użytkownika, sprawdzając poprawność nazwy użytkownika i hasła.

## PIESEK
### piesekController.js
Opis Działania:

- addPiesek: Obsługuje dodawanie nowego pieska, w tym przesyłanie zdjęcia, które jest zapisywane jako buffer.

        const piesekData = req.body;
        
        piesekData.Zdjecie = req.file ? req.file.buffer : null;
        
        const result = await piesekService.addPiesek(piesekData);
        
- getAllPieski: Zwraca wszystkie pieski z bazy danych.
- updatePiesek: Aktualizuje dane pieska, w tym jego zdjęcie, jeśli jest dostarczone.
- getPiesek: Zwraca dane pieska na podstawie jego ID.
- deletePiesek: Usuwa pieska z bazy danych na podstawie jego ID.

### piesek.js
Opis Działania:

- create: Dodaje nowego pieska do bazy danych, w tym jego zdjęcie jako buffer.
- getAll: Pobiera wszystkie pieski z bazy danych i zwraca ich dane, w tym zdjęcia zakodowane jako base64.
- update: Aktualizuje dane pieska, w tym zdjęcie, jeśli jest dostarczone.
- getById: Zwraca dane pieska na podstawie jego ID.
- delete: Usuwa pieska z bazy danych na podstawie jego ID.

### piesekRoutes.js
Opis Działania:

- Trasy do: dodawania nowego pieska, obsługuje przesyłanie plików; pobierania wszystkich piesków; aktualizacji danych pieska, obsługuje przesyłanie plików; pobierania danych pieska na podstawie jego ID; usuwania pieska na podstawie jego ID.

### piesekService.js
- użycie async i await, pozwala na nieblokowanie innych działań w programie

## SURVEY
### surveyController.js
Opis Działania:

- submitSurvey: Odbiera dane ankiety, weryfikuje obecność userID, zapisuje dane ankiety za pomocą surveyService i zwraca wynik z informacją o sukcesie lub błędzie.

### survey.js
Opis Działania:

- saveSurvey: Zapisuje dane ankiety do bazy danych MySQL za pomocą metody INSERT INTO.

### surveyService.js
Opis Działania:

- saveSurveyData: Wywołuje metodę saveSurvey z modelu Survey w celu zapisania danych ankiety do bazy danych i zwraca wynik operacji.

## WYKORZYSTANE NARZĘDZIA I BIBLIOTEKI
- mysql2: Biblioteka do obsługi bazy danych MySQL.
- dotenv: Do zarządzania zmiennymi środowiskowymi.
- express: Framework do budowy aplikacji webowych.
- express-session: Middleware do zarządzania sesjami w Express.
- path: Moduł do pracy ze ścieżkami plików.
- Promise: Wbudowany obiekt JavaScript do obsługi asynchroniczności.
- multer: Middleware do obsługi przesyłania plików.
- bcrypt: Biblioteka do haszowania haseł.
