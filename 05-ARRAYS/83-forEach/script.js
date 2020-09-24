const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

//OBS 'in' vai retornar apenas o indice
for (let item in pessoas) {
  console.log(item);
}
//OBS: 'of' retorna o objeto inteiro como é esperado igual o forEach
for (let item of pessoas) {
  console.log(item);
}

pessoas.forEach((item) => {
  console.log(item);
});
