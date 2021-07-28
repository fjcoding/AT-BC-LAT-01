const express = require('express');
const app = express();
const scenariosRoutes = require('./routes/scenarios');

app.use('/scenarios', scenariosRoutes);

module.exports = app;