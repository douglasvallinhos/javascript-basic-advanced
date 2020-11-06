//No primeiro exemplo exportamos no final cada item {nome,soma}
const nome = 'Douglas Vallinhos';
const soma = (n1, n2) => {
  return n1 + n2;
};

export { nome, soma };

//---------------------------------------------------------------
//nesse exemplo abaixo exportamos antes de criar nossas const e funcoes

export const idade = '28';
export function subtracao(n1, n2) {
  return n1 - n2;
}
//export default pode ter apenas uma por arquivo(pode ser importada com qualquer nome)
export default function divisao(n1, n2) {
  return n1 / n2;
}
