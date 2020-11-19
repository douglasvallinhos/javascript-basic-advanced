require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//prettier-ignore
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true,useUnifiedTopology: true,})
  .then(()=> {
    console.log('Conectado ao MongoDB Com Sucesso')
    // emit -> emite um sinal para a variavel app somente quando mongo estiver carregado
    // no final utilizamos 'app.on' para ver o sinal e iniciar o server com o 'app.listen'
    app.emit('MongoDB_Carregado')
  })
  .catch((error)=> console.log(error));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const routes = require('./routes.js');
const path = require('path');

//urlencoded -> para formularios enviarem submit no req (request)
app.use(express.urlencoded({ extended: true }));

//static -> escolher a pasta para arquivos estaticos (imagens, css entre outros)
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'qweqweqwheuyryweryweiryweiryweir',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

//views -> views seria as paginas html renderizadas seguindo o padrao MVC
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.on('MongoDB_Carregado', () => {
  app.listen('3001', () => {
    console.log('Server Started | http://localhost:3001');
  });
});
