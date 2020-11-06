import geraSenha from './geradores.js';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const btnGerarSenha = document.querySelector('.gerar-senha');

export default () => {
  btnGerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = geraSenha(
      qtdCaracteres.value,
      chkMaiusculas.checked,
      chkMinusculas.checked,
      chkNumeros.checked,
      chkSimbolos.checked
    );
  });
};
