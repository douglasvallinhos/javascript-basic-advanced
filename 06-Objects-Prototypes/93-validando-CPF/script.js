const validateCpf = (cpf) => {
  //Expressao regular para deixar apenas numeros, removendo pontos e traços
  let cleanCpf = cpf.replace(/\D+/g, '');
  //Verificando se o usuario não digitou uma sequencia ex: 111.111.111-11
  const sequencia = cleanCpf[0].repeat(cleanCpf.length);
  if (cleanCpf === sequencia) return false;
  //Criando Array com cada dígito do cpf
  arrayCpf = Array.from(cleanCpf);
  if (arrayCpf.length !== 11) return false;
  //removendo os 2 ultimos digitos do array
  arrayCpf.splice(9, 2);
  //Realizando o primeiro calculo do penultimo digito
  let firstSum = 0;
  let contador = 10;
  arrayCpf.forEach((item) => {
    firstSum += item * contador;
    contador--;
  });
  contador = 11;
  firstSum = 11 - (firstSum % 11);
  if (firstSum > 9) firstSum = 0;
  arrayCpf.push(String(firstSum));
  //Realizando Calculo do ultimo digito
  let secondSum = 0;
  arrayCpf.forEach((item) => {
    secondSum += item * contador;
    contador--;
  });
  secondSum = 11 - (secondSum % 11);
  if (secondSum > 9) secondSum = 0;

  arrayCpf.push(String(secondSum));
  // Transformando o array em String
  stringCpf = arrayCpf.join('');
  //Comparando a nova string com a cleanCPF do inicio
  if (stringCpf === cleanCpf) {
    console.log(`${cpf}: VERDADEIRO`);
    return true;
  } else {
    console.log(`${cpf}: FALSO`);
    return false;
  }
};
console.log(validateCpf('410.264.398-25'));
