const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', (event) => {
  const elementHtml = event.target;
  const tag = elementHtml.tagName.toLowerCase();
  if (tag === 'a') {
    event.preventDefault();
    loadPage(elementHtml);
  }
});

async function loadPage(elemento) {
  const href = elemento.getAttribute('href');

  const obj = {
    method: 'GET',
    url: href,
  };

  try {
    const response = await request(obj);
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
  } catch (error) {
    console.log(error);
  }
}
