const num = Number(prompt('Digite um número: '));
const h4 = document.querySelector('#numero-titulo');
const divTexto = document.querySelector('#texto');

const raizQuadrada = num ** 0.5;
const isInteiro = Number.isInteger(num);
const isNan = Number.isNaN(num);
const arredondadoBaixo = Math.floor(num);
const arredondadoCima = Math.ceil(num);
const duasCasasDecimais = num.toFixed(2);

h4.innerHTML += `${num}`;
divTexto.innerHTML += `Raiz Quadrada: ${raizQuadrada}  </br>`;
divTexto.innerHTML += `${num} é inteiro: ${isInteiro}  </br>`;
divTexto.innerHTML += `${num} é NAN: ${isNan}   </br>`;
divTexto.innerHTML += `Arredondado para baixo: ${arredondadoBaixo}   </br>`;
divTexto.innerHTML += `Arredondado para cima: ${arredondadoCima}   </br>`;
divTexto.innerHTML += `Com duas casas decimais: ${duasCasasDecimais}   </br>`;
