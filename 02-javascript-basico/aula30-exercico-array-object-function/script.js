window.addEventListener('load', loadEnd);

function loadEnd() {
  const form = document.querySelector('#formulario');
  //form.onsubmit = (event) => event.preventDefault();
  form.addEventListener('submit', (event) => event.preventDefault());

  const enviar = document.querySelector('#enviar');
  enviar.addEventListener('click', listar);
  let listagem = document.querySelector('#lista');
  const lista = [];

  function listar() {
    listagem.innerHTML = '';
    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    lista.push({
      nome,
      sobrenome,
      peso,
      altura,
    });
    console.log(lista);
    lista.map((item) => {
      return (listagem.innerHTML += `${item.nome} ${item.sobrenome} ${item.peso} ${item.altura} </br>`);
    });
  }
}
