// Filter sempre retorna um array.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//exercicio:  Retorne os numeros maior que 10
const numerosMaiorDez = numeros.filter((item) => item > 10);
console.log(numerosMaiorDez);

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

//exercicio: Retorne pessoas que tem o nome com 7 letras ou mais
const nomeCincoLetras = pessoas.filter((item) => item.nome.length >= 7);
console.log(nomeCincoLetras);

//exercicio: Retorne as pessoas com mais de 50 anos
const cinquentaAnos = pessoas.filter((item) => item.idade > 50);
console.log(cinquentaAnos);

//exercicio: Retorne os que nome termina com a letra 'a'
const letraFinalA = pessoas.filter((item) =>
  item.nome.toLowerCase().endsWith('a')
);
console.log(letraFinalA);
