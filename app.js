const express = require('express');
const app = express();

const rotaPacientes = require('./routes/pacientes');

app.use('/pacientes', rotaPacientes);

module.exports = app;