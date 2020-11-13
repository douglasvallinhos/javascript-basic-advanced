const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');
const contatoController = require('./src/controllers/contatoController.js');

//ROTAS DA PAGINA HOME
route.get('/', homeController.home);
route.post('/', homeController.trataPost);

//ROTAS DA PAGINA CONTATO

route.get('/contato', contatoController.contatoInicial);

module.exports = route;
