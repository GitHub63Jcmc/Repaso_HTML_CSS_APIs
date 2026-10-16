document.addEventListener('DOMContentLoaded', () => {
  const descripcionProd = document.querySelector('[itemprop="description"]');
  const btnModificarDOM = document.getElementById('btnModificarDOM');
  const btnAñadirNodo = document.getElementById('btnAñadirNodo');
  const listaCaracteristicas = document.getElementById('listaCaracteristicas');

  let contadorCaracteristicas = 0;

  btnModificarDOM.addEventListener('click', () => {
    // Uso seguro de textContent para evitar XSS
    if (descripcionProd.textContent.includes('actualizada')) {
      descripcionProd.textContent = 'Dispositivo móvil con soporte completo para APIs de HTML5.';
    } else {
      descripcionProd.textContent = '¡Descripción actualizada dinámicamente mediante la API DOM!';
    }
  });

  btnAñadirNodo.addEventListener('click', () => {
    contadorCaracteristicas++;
    
    // Creación limpia de elementos mediante createElement y textContent
    if (contadorCaracteristicas === 1) {
      listaCaracteristicas.innerHTML = ''; // Limpiar el mensaje de "sin elementos"
    }

    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = `Característica dinámica #${contadorCaracteristicas} añadida de forma segura.`;
    listaCaracteristicas.appendChild(nuevoLi);
  });
});