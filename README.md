# TinZOO
Aplikacja, która przybliża psiaki ze schroniska do ich nowych rodzin.

## Wykorzystane technologie, narzędzia i biblioteki
corowe technologie:
- node v21.0.0
- react 18.3.1
- vite

oraz pomniejsze:

- mysql2: Biblioteka do obsługi bazy danych MySQL.
- dotenv: Do zarządzania zmiennymi środowiskowymi.
- express: Framework do budowy aplikacji webowych.
- express-session: Middleware do zarządzania sesjami w Express.
- path: Moduł do pracy ze ścieżkami plików.
- Promise: Wbudowany obiekt JavaScript do obsługi asynchroniczności.
- multer: Middleware do obsługi przesyłania plików.
- bcrypt: Biblioteka do haszowania haseł.
- popmotion: bibioteka do animacji
- framer-motion: biblioteka do animacji

## Install guide
Przed uruchomieniem aplikacji będziesz musiał zainicjować własną bazę danych oraz stworzyć plik .env z danymi potrzebnymi do dostępu. Potrzebne komendy znajdziesz w pliku `baza_danych.txt`

### Runing app guide
aby uruchomić część forntendową przejdź do `./client/` i wklej poniższą komendę:
```
$ npm run dev
```
apy uruchomić częśc backendową przejdź do `./app/tinzoo/` i wklej poniższą komendę:
```
$ node app.js
```


**upewnij się, że wcześniej wykonałeś:**
backend:
```
npm install mysql2
npm install bcrypt
npm install express-session
npm install mult
```
frontend:
```
npm install popmotion
npm install framer-motion
```

# DOUMENTACJA PROJEKTU

## a. Identyfikacja zagadnienia biznesowego (problemu)
Naszym celem było stworzenie aplikacji, która odpowiadać będzie na realny problem społeczny. Chcieliśmy, aby projekt miał potencjał na rozwinięcie i ewentualną wersję producyjną. Padło na pomoc bezdomym zwierzętom.

Raport roczny Głównego Lekarza Weterynarnii na rok 2021, na podstawie danych z 228 placówek, szacuje liczbę psów w schroniskach na ponad 82 tysiące, a roczny procent adopcji utrzymuje się w okolicy 60%. Zakładamy, że potencjał adopcyjny jest większy, lecz ogranicza go utrudniona dostępność schronisk, ich niewystarczająca promocja, lub brak świadomości populacji o ilości zwierząt potrzebujących pomocy.

Nasz projekt __TinZoo__ ma odpowiedzieć na te potrzeby.

Celując w sylistykę znanej aplikacji randkowej, opracowaliśmy wersje aplikacji w ramach _proof of concept_, która pozwala rejestrować, przeglądać i dopasowywać podopiecznych schronisk do osób chętnych do adopcji. Filtrujemy wyświetlane zwierzęta, tak aby zwierzęta wymagające dodatkowej opieki wyświetlały się osobą, które mogą zapewnić im odpowiednią pomoc. Mamy nadzieje, rozpromować tą aplikację zarówno wśród pracowników schronisk, jak i osób szukających nowego pupila.

## b. Wymagania systemowe i funkcjonalne
### Wymagania Funkcjonalne
Aplikacja umożliwia zarządzanie użytkownikami, pieskami oraz ankietami:

- Użytkownicy: Rejestracja, logowanie, wylogowywanie.
- Pieski: Dodawanie, aktualizacja, usuwanie i wyświetlanie.
- Ankiety: Wypełnianie formularzy ankietowych i zarządzanie wynikami.

### Wymagania Techniczne
- Backend: Node.js z Express.js.
- Frontend: React.js.
- Komunikacja: RESTful API.
- Baza danych: MySQL.
- Autentykacja i sesje: express-session.
- Przesyłanie plików: multer.
- Zarządzanie hasłami: bcrypt.

### Wymagania dot. Baz Danych
Struktura obejmuje tabele dla użytkowników, piesków i ankiet. Dane są zapisywane i odczytywane z MySQL z użyciem mysql2.

### Stuktura
Aplikacja opiera się na wzorcu MVC (Model-View-Controller) z dodatkowymi warstwami usług, co zapewnia modułowość i ułatwia zarządzanie kodem.

- Model: Zarządza strukturą danych i bezpośrednim dostępem do bazy danych MySQL, obsługując wszystkie operacje CRUD dla użytkowników, piesków i ankiet.
- Widok (View): Wykorzystuje React.js do tworzenia responsywnego i interaktywnego interfejsu użytkownika, który komunikuje się z backendem poprzez REST API.
- Kontroler: Odpowiada za przyjmowanie i przetwarzanie żądań od użytkowników, a następnie deleguje logikę biznesową do odpowiednich serwisów.
- Serwisy: Oddzielają logikę biznesową od kontrolerów, zajmując się specyficznymi zadaniami przetwarzania danych, takimi jak walidacja, operacje na danych i ich bezpieczeństwo.

## c. Analiza zagadnienia i jego modelowanie
Należało opracować model użytkownika oraz zwierzęcia oraz stworzyć odpowiednie połączenia, umożliwiające identyfikacje odpowiednich powiązań. Charakter problemu biznesowego nie wymagał spożądzenia złożonych metod strukturalnych.

W przyszłości, po rozwinięciu tego rozwiązania, będzie trzeba opracować algorytm dopasowujący wyświetlane zwierzęta urzytkownikom. Jak również, stowrzyć inny rodzaj konta dla schronisk, tak aby mogły dowolnie zarządzać widocznością swoich podopiecznych.

Dodatkowo w finalnej wersji aplikacji nie będzie mogło zabraknąć funkcji czatu z urzytkownikami zarządzającymi schroniskami.

Aktuale podział danych został umieszczony w pliku `baza_danych.txt`

## d. Implementacja
Poniżej rozpisano funkcjonalność poszczególnych elementów projektu z podziałem na frontend i backend.

### BACKEND:

#### databse.js
Opis Działania:

- Użycie mysql2 do połączenia z bazą danych MySQL.
- Konfiguracja połączenia przy użyciu zmiennych środowiskowych (dotenv).
- Eksportowanie obiektu połączenia do dalszego użytku w aplikacji.

#### app.js
Opis Działania:

- Użycie express do stworzenia serwera HTTP.
- Middleware do parsowania JSON i tradycyjnych danych formularza.
- Konfiguracja sesji przy użyciu express-session.
- Podłączenie routerów dla użytkowników i innych zasobów.
- Serwowanie statycznych plików HTML.
- Nasłuchiwanie na określonym porcie.

#### userController.js
Opis Działania:

- Rejestracja i logowanie użytkowników przy użyciu userService.
- Przechowywanie danych sesji w express-session.
```
req.session.userId = user.IDUzytkownika;
req.session.username = user.Pseudonim;
```
- Obsługa wylogowania poprzez zniszczenie sesji.
#### userModel.js
Opis Działania:

- Klasa User reprezentuje model użytkownika.
- Metody createUser i findByUsername do tworzenia nowych użytkowników i wyszukiwania po nazwie użytkownika.
- Korzystanie z Promise do obsługi asynchronicznych zapytań do bazy danych.
#### userRoutes.js
Opis Działania:

- Definicje tras dla rejestracji, logowania, wylogowania oraz wyświetlania strony po zalogowaniu.
- Wykorzystanie kontrolera userController do obsługi logiki biznesowej.

#### userService.js
Opis Działania:

- registerUser: Rejestruje nowego użytkownika, haszując jego hasło przed zapisaniem w bazie danych.
- loginUser: Loguje użytkownika, sprawdzając poprawność nazwy użytkownika i hasła.

#### piesekController.js
Opis Działania:

- addPiesek: Obsługuje dodawanie nowego pieska, w tym przesyłanie zdjęcia, które jest zapisywane jako buffer.

```
const piesekData = req.body;
piesekData.Zdjecie = req.file ? req.file.buffer : null;
const result = await piesekService.addPiesek(piesekData);
```

- getAllPieski: Zwraca wszystkie pieski z bazy danych.
- updatePiesek: Aktualizuje dane pieska, w tym jego zdjęcie, jeśli jest dostarczone.
- getPiesek: Zwraca dane pieska na podstawie jego ID.
- deletePiesek: Usuwa pieska z bazy danych na podstawie jego ID.

#### piesek.js
Opis Działania:

- create: Dodaje nowego pieska do bazy danych, w tym jego zdjęcie jako buffer.
- getAll: Pobiera wszystkie pieski z bazy danych i zwraca ich dane, w tym zdjęcia zakodowane jako base64.
- update: Aktualizuje dane pieska, w tym zdjęcie, jeśli jest dostarczone.
- getById: Zwraca dane pieska na podstawie jego ID.
- delete: Usuwa pieska z bazy danych na podstawie jego ID.

#### piesekRoutes.js
Opis Działania:

- Trasy do: dodawania nowego pieska, obsługuje przesyłanie plików; pobierania wszystkich piesków; aktualizacji danych pieska, obsługuje przesyłanie plików; pobierania danych pieska na podstawie jego ID; usuwania pieska na podstawie jego ID.

#### piesekService.js
- użycie async i await, pozwala na nieblokowanie innych działań w programie

#### surveyController.js
Opis Działania:

- submitSurvey: Odbiera dane ankiety, weryfikuje obecność userID, zapisuje dane ankiety za pomocą surveyService i zwraca wynik z informacją o sukcesie lub błędzie.

#### survey.js
Opis Działania:

- saveSurvey: Zapisuje dane ankiety do bazy danych MySQL za pomocą metody INSERT INTO.

#### surveyService.js
Opis Działania:

- saveSurveyData: Wywołuje metodę saveSurvey z modelu Survey w celu zapisania danych ankiety do bazy danych i zwraca wynik operacji.

### FRONTEND

#### index.html
- Główny plik HTML, który ładuje aplikację React.
#### package.json
- Plik konfiguracyjny npm, zawierający zależności projektu oraz skrypty.
#### vite.config.js
- Plik konfiguracyjny dla Vite, narzędzia do budowania aplikacji.
#### main.jsx
- Główny plik wejściowy aplikacji React, obsługuje Routing.
#### add.jsx
- Komponent `Add`, który umożliwia dodawanie nowych elementów.
#### errorPage.jsx
- Komponent `ErrorPage`, który wyświetla stronę błędu.
#### home.jsx
- Komponent `Home`, który wyświetla stronę główną aplikacji. Tutaj można wyświetlać zdjęcia załadowanych piesków.
#### login.jsx
- Komponent `Login`, który umożliwia użytkownikom logowanie się do aplikacji.
#### register.jsx
- Komponent `Register`, który umożliwia użytkownikom rejestrację w aplikacji.
#### survey.jsx
- Komponent `Survey`, który umożliwia użytkownikom wypełnianie ankiet.
#### topBar.jsx
- Komponent `TopBar`, który wyświetla górny pasek nawigacyjny z funkcjonalnościami takimi jak zmiana trybu, wylogowanie oraz linki do rejestracji i logowania.
#### App.jsx
- Główny komponent aplikacji, który zarządza trybem (jasny/ciemny) oraz renderuje komponenty `TopBar` i `Register`.
#### index.css
- Główny plik stylów dla całej aplikacji.

# e. Podsumowanie
Celem projektu było stworzenie aplikacji internetowej umożliwiającej zarządzanie informacjami o pieskach (atrakcyjne zachęcenie do adopcji bezdomniaka bazowane na aplikacji tinder), a także przeprowadzanie i zarządzanie ankietami dotyczącymi tych zwierząt. Użytkownicy aplikacji mogą rejestrować się, logować i decydowac o atrakcyjności danego pieska. Można dodawać, przeglądać, edytować i usuwać dane o pieskach, a także wypełniać ankiety związane z ich zachowaniami i potrzebami. 

Osiągnięcia:
- Modułowa Architektura: Wykorzystanie wzorca MVC z rozszerzeniami usługowymi pozwoliło na wyraźne oddzielenie logiki biznesowej od interfejsu użytkownika oraz warstwy danych.
- Interaktywny Interfejs Użytkownika: Dzięki React.js, interfejs użytkownika jest dynamiczny i przyjazny, co ułatwia użytkownikom zarządzanie informacjami.
- Bezpieczeństwo Danych: Implementacja haszowania haseł za pomocą bcrypt oraz sesji użytkownika zapewnia ochronę danych osobowych i sesji.

Napotkane trudności:
- Zapytania do bazy danych: nie zawsze wyświetlały się oczekiwane rekordy
- Integracja z Backendem: Zapewnienie płynnej komunikacji między frontendem a backendem przy użyciu REST API
- Problem z dodawaniem i wyświetlaniem zdjęć z bazy danych (BLOB)
- Problemy z refaktorem
- Problemy z obsługą błędów
- Problem z sesją (przekazywanie danych ID i pseudonimu)
- Problem z przekazywaniem danych z ankiety
- Problem z odzyskaniem danych podczas edytowania danych z ankiety

Perspektywy Rozwoju
- Rozbudowa Funkcjonalności: dodanie większej ilości zwierząt (prosta do rozbudowania struktua bazy danych), panel administratora, logowanie nie tylko dla uzytkownika ale także dla różnych schronisk  i fundacji ze zwierzakami, dodanie lokalizacji żeby wyświetlały się zwierzątka najbliżej nas itp..
- Mobilna Wersja Aplikacji: rozwój dedykowanej aplikacji mobilnej, która zwiększy dostępność i wygodę użytkowania.