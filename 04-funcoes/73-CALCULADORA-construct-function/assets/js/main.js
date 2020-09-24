function CriaCalculadora() {
  (this.display = document.querySelector('.display')),
    (this.btnClear = document.querySelector('.btn-clear'));
  this.inicia = () => {
    this.cliqueBotoes();
    this.pressEnter();
  };
  this.pressEnter = () => {
    this.display.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.realizaConta();
      }
    });
  };
  this.deleteOne = () => (this.display.value = this.display.value.slice(0, -1));

  this.clearDisplay = () => (this.display.value = '');

  this.realizaConta = () => {
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
  };
  this.cliqueBotoes = () => {
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
  };
  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
    this.display.focus();
  };
}
const calculadora = new CriaCalculadora();
calculadora.inicia();
