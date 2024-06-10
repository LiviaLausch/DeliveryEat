// models/pedido.js
const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    cliente: String,
    itens: [{
        nome: String,
        quantidade: Number
    }],
    status: String,
    entrega: {
        endereco: String,
        entregador: String,
        status: String // pendente, em andamento, entregue
    }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
