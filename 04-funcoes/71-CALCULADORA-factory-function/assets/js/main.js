function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    inicia() {
      this.cliqueBotoes();
      this.pressEnter();
    },
    pressEnter() {
      this.display.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          this.realizaConta();
        }
      });
    },
    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
      this.display.focus();
    },
    clearDisplay() {
      this.display.value = '';
      this.display.focus();
    },
    realizaConta() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert('Conta Inválida');
          return;
        }
        this.display.value = conta;
      } catch (error) {
        alert('Conta Inválida');
        return;
      }
      this.display.focus();
    },
    cliqueBotoes() {
      document.addEventListener('click', (event) => {
        const el = event.target;
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if (el.classList.contains('btn-del')) {
          this.deleteOne();
        }
        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
      this.display.focus();
    },
  };
}
const calculadora = criaCalculadora();
calculadora.inicia();
