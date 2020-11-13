const { json } = require('express');
const express = require('express');

const app = express();
//urlencoded, faz todo formulario submit do front ir para req.body automatico
app.use(express.urlencoded({ extended: true }));
//json para receber json das requisicoes
app.use(express.json());

app.get('/:id', (req, res) => {
  //params => www.site.com/12  => vai colocar o valor 12 em id
  res.send(req.params);
});
app.get('/', (req, res) => {
  //query => vem do navegador exemplo www.site.com/?parametro1=valor&parametro2=valor
  res.send(req.query);
});
app.post('/', (req, res) => {
  //body envia um corpo em json do frontend para o backend
  console.log(req.body);
});

app.listen('3000', () => {
  console.log('Server Started on Port 3000');
});
