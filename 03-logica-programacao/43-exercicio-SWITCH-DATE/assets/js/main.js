const resultado = document.querySelector('#resultado');
const data = new Date();
function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
resultado.innerHTML =
  data.toLocaleDateString('pt-BR', { dateStyle: 'full' }) +
  ' ' +
  zeroEsquerda(data.getHours()) +
  ':' +
  zeroEsquerda(data.getMinutes());
// window.addEventListener('load', start);

// function start() {
//   const date = new Date();
//   const day = date.getDay();
//   console.log(getDay(day));
//   const dia = date.getDate();
//   const mes = date.getMonth() + 1;
//   const ano = date.getFullYear();
//   const hora = date.getHours();
//   const min = date.getMinutes();
//   const resultado = document.querySelector('#resultado');
//   resultado.innerHTML = `${getDay(day)}, ${dia} de ${getMonth(mes)}
//    de ${ano} ${hora}:${min}`;
// }

// function getDay(date) {
//   let day = '';
//   switch (date) {
//     case 0:
//       day = 'Domingo';
//       break;
//     case 1:
//       day = 'Segunda-Feira';
//       break;
//     case 2:
//       day = 'Terça-Feira';
//       break;
//     case 3:
//       day = 'Quarta-Feira';
//       break;
//     case 4:
//       day = 'Quinta-Feira';
//       break;
//     case 5:
//       day = 'Sexta-Feira';
//       break;
//     case 6:
//       day = 'Sabado';
//       break;
//   }
//   return day;
// }

// function getMonth(date) {
//   let mes = '';
//   switch (date) {
//     case 1:
//       mes = 'Janeiro';
//       break;
//     case 2:
//       mes = 'Fevereiro';
//       break;
//     case 3:
//       mes = 'Março';
//       break;
//     case 4:
//       mes = 'Abril';
//       break;
//     case 5:
//       mes = 'Maio';
//       break;
//     case 6:
//       mes = 'Junho';
//       break;
//     case 7:
//       mes = 'Julho';
//       break;
//     case 8:
//       mes = 'Agosto';
//       break;
//     case 9:
//       mes = 'Setembro';
//       break;
//     case 10:
//       mes = 'Outubro';
//       break;
//     case 11:
//       mes = 'Novembro';
//       break;
//     case 12:
//       mes = 'Dezembro';
//       break;
//   }
//   return mes;
// }
