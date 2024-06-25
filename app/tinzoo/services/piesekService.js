// services/piesekService.js
const Piesek = require('../models/piesek');

async function addPiesek(piesekData) {
    try {
        const id = await Piesek.create(piesekData);
        return id;
    } catch (error) {
        throw error;
    }
}

async function getAllPieski() {
    return await Piesek.getAll();
}

async function updatePiesek(piesekData) {
    return await Piesek.update(piesekData);
}

async function getPiesekById(id) {
    return await Piesek.getById(id);
}

async function deletePiesek(id) {
    return await Piesek.delete(id);
}


module.exports = { addPiesek, getAllPieski, updatePiesek, getPiesekById, deletePiesek };
