class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }
  eventos() {
    this.formulario.addEventListener('submit', (event) => {
      this.handleSubmit(event);
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const inputs = this.checkInputs();
    const password = this.checkPassword();
    if (inputs && password) {
      alert('Formulario enviado');
      //formilario.submit vai enviar o formulario de forma padrao
      //this.formulario.submit();
    }
  }
  checkPassword() {
    let valid = true;
    const password = this.formulario.querySelector('#senha');
    //prettier-ignore
    const repeatPassword = this.formulario.querySelector('#repetir-senha');
    if (password.value !== repeatPassword.value) {
      valid = false;
      this.createError(
        repeatPassword,
        'Senha e repetir senha precisam ser iguais'
      );
      this.createError(password, 'Senha e repetir senha precisam ser iguais');
    }
    if (password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.createError(password, 'Senha precisa ter entre 6 a 12 caracteres');
    }
    return valid;
  }
  checkInputs() {
    let valid = true;
    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }
    for (let campo of this.formulario.querySelectorAll('input')) {
      const label = campo.previousElementSibling.innerHTML;

      if (!campo.value) {
        this.createError(campo, `Campo ${label} não pode estar em branco`);
        valid = false;
      }
      if (campo.classList.contains('cpf')) {
        if (!this.validateCpf(campo)) valid = false;
      }
      if (campo.classList.contains('usuario')) {
        if (!this.validateUser(campo)) valid = false;
      }
    }
    return valid;
  }
  createError(campo, mensagem) {
    const div = document.createElement('div');
    div.innerHTML = mensagem;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
  validateUser(campo) {
    const usuario = campo.value;
    let valid = true;
    if (usuario.length < 3 || usuario.length > 12) {
      this.createError(campo, 'Usuário precisa ter de 3 a 12 caracteres');
      valid = false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(campo, 'Uśuario só pode conter letras e/ou números');
      valid = false;
    }
    return valid;
  }
  validateCpf(campo) {
    const cpf = new ValidaCPF(campo.value);
    if (!cpf.valida()) {
      this.createError(campo, 'CPF inválido');
    }
    return true;
  }
}

const valida = new ValidaFormulario();
