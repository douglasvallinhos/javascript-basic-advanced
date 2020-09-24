const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//exercicio: some os valores
const somaNumeros = numeros.reduce((acc, curr) => {
  return (acc += curr);
}, 0);
console.log(somaNumeros);

//exercicio: some os valores PARES
const numerosPares = numeros.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc += curr;
  }
  return acc;
}, 0);
console.log(numerosPares);

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

//exercicio: retorne a pessoa mais velha
const pessoaMaisVelha = pessoas.reduce((acc, curr) => {
  if (curr.idade > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(pessoaMaisVelha);
