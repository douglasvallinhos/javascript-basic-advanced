const HomeModel = require('../models/HomeModel.js');

// HomeModel.create({
//   titulo: 'Titulo teste',
//   descricao: 'DEscrição de teste',
// });

exports.home = (req, res) => {
  console.log(req.session.usuario);
  res.render('index', {
    titulo: 'teste de titulo',
  });
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
