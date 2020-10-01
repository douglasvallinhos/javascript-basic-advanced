class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
  set setNome(valor) {
    this.nome = valor;
  }

  metodo1() {
    //corpo do metodo
  }
  metodo2() {
    //corpo do metodo
  }
}

const p1 = new Pessoa('Douglas', 'Vallinhos');
p1.setNome = 'Diego';
console.log(p1.nomeCompleto);
