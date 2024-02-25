
// mostro la creació d'un servidor fent servir el framework Express de Node JS

/* Inicio el projecte > npm init -y
Instal·lo el mòdul necessaris pel projecte > npm i express */

// faig servir el mòdul express per tal de crear el servidor
const express = require('express');

// app -> té les propietats d'express
const app = express();

// exporto app per tal de poder fer-la servir en altres fitxers del projecte
module.exports = app;