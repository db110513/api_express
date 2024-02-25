const express = require('express');
const bodyParser = require('body-parser');

// express -> crea un el servidor

// app -> té les propietats d'express (servidor)
const app = express();

// exporta app per poder fer-la servir en altres fitxers
module.exports = app;