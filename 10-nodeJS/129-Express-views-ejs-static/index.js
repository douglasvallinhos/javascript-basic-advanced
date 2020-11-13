const express = require('express');
const app = express();
const routes = require('./routes.js');
const path = require('path');

//urlencoded -> para formularios enviarem submit no req (request)
app.use(express.urlencoded({ extended: true }));

//static -> escolher a pasta para arquivos estaticos (imagens, css entre outros)
app.use(express.static(path.resolve(__dirname, 'public')));

//views -> views seria as paginas html renderizadas seguindo o padrao MVC
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);
app.listen('3000', () => {
  console.log('Server Started');
});
