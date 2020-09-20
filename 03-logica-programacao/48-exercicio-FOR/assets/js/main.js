const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' },
];
const resultado = document.querySelector('#resultado');
for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  const tagHtml = document.createElement(tag);
  tagHtml.innerHTML = texto;
  resultado.appendChild(tagHtml);
}
