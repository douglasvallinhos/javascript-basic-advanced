const nome = 'Douglas';
const sobrenome = 'Vallinhos';
function nomeSobrenome() {
  console.log(`${nome} ${sobrenome}`);
}

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.nomeSobrenome = nomeSobrenome;

//OU

module.exports = {
  nome,
  sobrenome,
  nomeSobrenome,
};
