// models/restaurante.js
const mongoose = require('mongoose');

const restauranteSchema = new mongoose.Schema({
    nome: String,
    localizacao: String,
    cardapio: [{
        nome: String,
        preco: Number,
        descricao: String
    }]
});

module.exports = mongoose.model('Restaurante', restauranteSchema);
