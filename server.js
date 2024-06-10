// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Restaurante = require('./models/restaurantes');
const Pedido = require('./models/pedidos');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/delivery', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/restaurantes', async (req, res) => {
    try {
        const restaurantes = await Restaurante.find();
        res.json(restaurantes);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/pedidos', async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/pedidos', async (req, res) => {
    try {
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.send('Pedido realizado com sucesso!');
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
