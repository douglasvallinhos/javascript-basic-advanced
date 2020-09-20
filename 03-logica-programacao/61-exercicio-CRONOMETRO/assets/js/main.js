window.addEventListener('load', start);

function start() {
  const cronometro = document.querySelector('#cronometro');
  const iniciar = document.querySelector('#iniciar');
  const pausar = document.querySelector('#pausar');
  const resetar = document.querySelector('#resetar');

  function createhourSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  }
  let segundos = 0;
  let timer;
  function iniciaRelogio() {
    cronometro.classList.remove('pausado');
    clearInterval(timer);
    timer = setInterval(function () {
      segundos++;
      cronometro.innerHTML = createhourSeconds(segundos);
    }, 1000);
  }
  function pausarRelogio() {
    clearInterval(timer);
    cronometro.classList.add('pausado');
  }

  function resetarRelogio() {
    cronometro.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    cronometro.innerHTML = '00:00:00';
  }
  // USANDO UM eVENTlISTENER PRA VARIOS BOTOES
  document.addEventListener('click', (event) => {
    console.log(event.target.id);
    const { id } = event.target;
    if (id === 'iniciar') {
      iniciaRelogio();
    } else if (id === 'pausar') {
      pausarRelogio();
    } else if (id === 'resetar') {
      resetarRelogio();
    }
  });

  //iniciar.addEventListener('click', iniciaRelogio);
  //pausar.addEventListener('click', pausarRelogio);
  //resetar.addEventListener('click', resetarRelogio);
}
