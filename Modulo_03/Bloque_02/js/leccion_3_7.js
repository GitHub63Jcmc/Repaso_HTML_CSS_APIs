document.addEventListener('DOMContentLoaded', () => {
  const inputDato = document.getElementById('inputDato');
  const spanValor = document.getElementById('spanValor');
  const btnGuardar = document.getElementById('btnGuardar');
  const btnLeer = document.getElementById('btnLeer');
  const btnBorrar = document.getElementById('btnBorrar');

  const valorActual = localStorage.getItem('miDatoClave');
  if (valorActual) {
    spanValor.textContent = valorActual;
  }

  btnGuardar.addEventListener('click', () => {
    const texto = inputDato.value.trim();
    if (!texto) {
      alert('Por favor, escribe algo para guardar.');
      return;
    }
    localStorage.setItem('miDatoClave', texto);
    spanValor.textContent = texto;
    inputDato.value = '';
    alert('¡Dato guardado en localStorage!');
  });

  btnLeer.addEventListener('click', () => {
    const valor = localStorage.getItem('miDatoClave');
    if (valor) {
      spanValor.textContent = valor;
      alert(`Dato recuperado: ${valor}`);
    } else {
      spanValor.textContent = 'Ninguno';
      alert('No hay ningún dato guardado con esa clave.');
    }
  });

  btnBorrar.addEventListener('click', () => {
    localStorage.removeItem('miDatoClave');
    spanValor.textContent = 'Ninguno';
    alert('Dato borrado del almacenamiento local.');
  });
});