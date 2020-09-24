const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//exercicio: Dobre o valor dos numeros com Map
const numerosDobrados = numeros.map((item, indice, array) => {
  return item * 2;
});
console.log(numerosDobrados);

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

//exercicio: retorne apenas uma string com o nome da pessoa
const nomeString = pessoas.map((item) => {
  return item.nome;
});
console.log(nomeString);

//exercicio: remova a chave 'nome' do objeto SEM ALTERAR O ARRAY ORIGINAL
const removaNome = pessoas.map((item) => {
  const copyItem = { ...item };
  delete copyItem.nome;
  return copyItem;
});
console.log(removaNome);

//exercicio: adicione uma chave id em cada objeto
const adicionaID = pessoas.map((item, indice) => {
  return {
    id: indice + 1,
    nome: item.nome,
    idade: item.idade,
  };
});
console.log(adicionaID);
