const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando get clientes'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando Post clientes'
    });
});


module.exports = router;