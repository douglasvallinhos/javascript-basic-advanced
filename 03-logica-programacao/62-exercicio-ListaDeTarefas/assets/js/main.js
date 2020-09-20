window.addEventListener('load', start);
function start() {
  const txtTarefa = document.querySelector('#txtTarefa');
  const btnTarefa = document.querySelector('#btnTarefa');
  const resultado = document.querySelector('#resultado');

  btnTarefa.addEventListener('click', addTarefa);
  document.addEventListener('click', removeTarefa);

  const tarefas = [];
  buscarTarefasNavegador();

  function addTarefa() {
    tarefas.push(txtTarefa.value);
    salvarTarefasNavegador();
    render();
  }

  function removeTarefa(event) {
    const { id, classList } = event.target;
    if (classList.contains('deletar')) {
      tarefas.splice(id, 1);
      salvarTarefasNavegador();
      render();
    }
  }

  function salvarTarefasNavegador() {
    const tarefasJson = JSON.stringify(tarefas);
    localStorage.setItem('tarefas', tarefasJson);
  }
  function buscarTarefasNavegador() {
    const tarefasJson = localStorage.getItem('tarefas');
    const tarefasArray = JSON.parse(tarefasJson);
    console.log(tarefasArray);
    for (tarefa of tarefasArray) {
      tarefas.push(tarefa);
    }
    render();
  }

  function render() {
    resultado.innerHTML = '';
    tarefas.map((item, index) => {
      resultado.innerHTML += `<li id="${index}">${item}<button id="${index}" class="deletar">Deletar</button></li>`;
    });
  }
}
