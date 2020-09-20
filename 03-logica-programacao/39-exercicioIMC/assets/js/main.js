window.addEventListener('load', start);

function start() {
  const form = document.querySelector('#formulario');
  form.addEventListener('submit', (event) => event.preventDefault());

  const enviar = document.querySelector('#enviar');
  enviar.addEventListener('click', calculoImc);

  function calculoImc() {
    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);

    const imc = (peso / altura ** 2).toFixed(2);
    let texto = '';
    if (imc < 18.5) {
      texto = 'Abaixo do peso';
    } else if (imc <= 24.9) {
      texto = 'Peso Nornal';
    } else if (imc <= 29.9) {
      texto = 'Sobrepeso';
    } else if (imc <= 34.9) {
      texto = 'Obesidade grau 1';
    } else if (imc <= 39.9) {
      texto = 'Obesidade grau 2';
    } else if (imc >= 40) {
      texto = 'Obesidade grau 3';
    }

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = `IMC: ${imc} - ${texto}`;
    p.classList.add(imc <= 29.9 ? 'verde' : 'vermelho');
    resultado.appendChild(p);
  }
}
