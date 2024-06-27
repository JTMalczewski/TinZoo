// controllers/piesekController.js
const piesekService = require('../services/piesekService');

async function addPiesek(req, res) {
    try {
        console.log("Received file:", req.file); // Sprawdź, czy plik jest dostępny
        const piesekData = req.body;
        piesekData.Zdjecie = req.file ? req.file.buffer : null;
        const result = await piesekService.addPiesek(piesekData);
        res.json({ success: true, message: 'Piesek dodany pomyślnie', id: result });
    } catch (error) {
        console.error("Error in addPiesek:", error);
        res.status(500).json({ error: error.message });
    }
}

async function getAllPieski(req, res) {
    try {
        const pieski = await piesekService.getAllPieski();
        res.json({ success: true, data: pieski });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updatePiesek(req, res) {
    try {
        const piesekData = { ...req.body, Zdjecie: req.file ? req.file.buffer : null };
        const result = await piesekService.updatePiesek(piesekData);
        res.json({ success: true, message: 'Piesek zaktualizowany pomyślnie' });
    } catch (error) {
        console.error("Error updating piesek:", error);
        res.status(500).json({ error: error.message });
    }
}

async function getPiesek(req, res) {
    try {
        const id = req.params.id;
        console.log("Zapytanie o pieska o ID:", id);
        const piesek = await piesekService.getPiesekById(id);
        console.log("Pobrany piesek:", piesek);
        if (piesek) {
            res.json({ success: true, data: piesek });
        } else {
            res.status(404).json({ success: false, message: "Nie znaleziono pieska" });
        }
    } catch (error) {
        console.error('Błąd przy pobieraniu pieska:', error);
        res.status(500).json({ error: error.message });
    }
}

async function deletePiesek(req, res) {
    try {
        const id = req.params.id;
        const result = await piesekService.deletePiesek(id);
        if (result) {
            res.json({ success: true, message: 'Piesek usunięty pomyślnie' });
        } else {
            res.status(404).json({ success: false, message: 'Nie znaleziono pieska' });
        }
    } catch (error) {
        console.error("Error deleting piesek:", error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = { addPiesek, getAllPieski, updatePiesek, getPiesek, deletePiesek };
