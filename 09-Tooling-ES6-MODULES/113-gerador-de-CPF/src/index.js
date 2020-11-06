import GeraCPF from './modules/GeraCPF.js';
import './assets/css/style.css';

(() => {
  const btnCPF = document.querySelector('.btn-cpf');
  btnCPF.addEventListener('click', () => {
    const cpfGerado = document.querySelector('.cpf-gerado');
    const CPF = new GeraCPF();
    const novoCPF = String(CPF.newCPF());
    cpfGerado.innerHTML = novoCPF;
  });
})();
