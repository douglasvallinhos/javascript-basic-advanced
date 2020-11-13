const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController.js');
const contatoController = require('./controllers/contatoController.js');

//ROTAS DA PAGINA HOME
route.get('/', homeController.home);
route.post('/', homeController.trataPost);

//ROTAS DA PAGINA CONTATOroute.get('/contato', contatoController.contatoInicial);

module.exports = route;
