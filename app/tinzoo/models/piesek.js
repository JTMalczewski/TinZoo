// models/Piesek.js
const db = require('../config/database');

class Piesek {
    static async create(data) {
        // inne pola
        const sql = `INSERT INTO Pieski (Przestrzen, Podworko, InneZwierzeta, DlugieSpacery, Dzieci, Agresja, MozeSam, Choroby, Lekliwosc, Dieta, Zdjecie)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result = await db.promise().execute(sql, [data.Przestrzen, data.Podworko, data.InneZwierzeta, data.DlugieSpacery, data.Dzieci, data.Agresja, data.MozeSam, data.Choroby, data.Lekliwosc, data.Dieta, data.Zdjecie]);
        return result[0].insertId;
    }


    static async getAll() {
        const sql = `SELECT IDPieska, Przestrzen, Podworko, InneZwierzeta, DlugieSpacery, Dzieci, Agresja, MozeSam, Choroby, Lekliwosc, Dieta, TO_BASE64(Zdjecie) AS Zdjecie FROM Pieski`;
        const [rows] = await db.promise().execute(sql);
        return rows;
    }

    static async update(data) {
        const { Przestrzen, Podworko, InneZwierzeta, DlugieSpacery, Dzieci, Agresja, MozeSam, Choroby, Lekliwosc, Dieta, Zdjecie, idPieska } = data;
        const currentPiesek = await this.getById(idPieska);
        let imageToSave = currentPiesek.Zdjecie;  // Default to existing image
    
        if (Zdjecie) {  // Only update if a new image is provided
            imageToSave = Zdjecie;  // No need to convert to base64 here, let it be as buffer
        }
    
        const sql = `
            UPDATE Pieski
            SET
                Przestrzen = ?, 
                Podworko = ?, 
                InneZwierzeta = ?, 
                DlugieSpacery = ?, 
                Dzieci = ?, 
                Agresja = ?, 
                MozeSam = ?, 
                Choroby = ?, 
                Lekliwosc = ?, 
                Dieta = ?, 
                Zdjecie = ?
            WHERE IDPieska = ?
        `;
        await db.promise().execute(sql, [Przestrzen, Podworko, InneZwierzeta, DlugieSpacery, Dzieci, Agresja, MozeSam, Choroby, Lekliwosc, Dieta, imageToSave, idPieska]);
        return { success: true, message: "Piesek zaktualizowany", id: idPieska };
    }    
    
    static async getById(id) {
        const sql = `SELECT * FROM Pieski WHERE IDPieska = ?`;
        const [rows] = await db.promise().execute(sql, [id]);
        if (rows.length > 0) {
            return rows[0];
        } else {
            return null;
        }
    }

    static async delete(id) {
        const sql = `DELETE FROM Pieski WHERE IDPieska = ?`;
        const [result] = await db.promise().execute(sql, [id]);
        return result.affectedRows > 0;
    }
    
}

module.exports = Piesek;
