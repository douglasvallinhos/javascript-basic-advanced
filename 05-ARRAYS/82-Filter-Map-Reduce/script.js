// Exercicio: Retorne a Some do Dobro de todos os pares
//   -> Filtrar Pares (Filter)
//   -> Dobrar Valores (map)
//   -> somar tudo (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const resposta = numeros
  .filter((item) => {
    return item % 2 === 0;
  })
  .map((item) => {
    return item * 2;
  })
  .reduce((acc, curr) => {
    return (acc += curr);
  }, 0);

console.log(resposta);
