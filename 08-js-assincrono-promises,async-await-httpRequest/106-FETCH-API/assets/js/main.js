document.addEventListener('click', (event) => {
  const elementHtml = event.target;
  const tag = elementHtml.tagName.toLowerCase();
  if (tag === 'a') {
    event.preventDefault();
    loadPage(elementHtml);
  }
});

async function loadPage(elemento) {
  try {
    const href = elemento.getAttribute('href');
    const response = await fetch(href);
    const html = await response.text();
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}
