const HomeModel = require('../models/HomeModel.js');

// HomeModel.create({
//   titulo: 'Titulo teste',
//   descricao: 'DEscrição de teste',
// });

exports.home = (req, res) => {
  res.render('index');
};

exports.trataPost = (req, res) => {
  res.send('Router Post');
};
