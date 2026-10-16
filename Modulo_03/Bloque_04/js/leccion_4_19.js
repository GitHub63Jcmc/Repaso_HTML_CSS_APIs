document.addEventListener('DOMContentLoaded', () => {
  const btnTerminar = document.getElementById('btnTerminarModulo');
  if (btnTerminar) {
    btnTerminar.addEventListener('click', () => {
      alert('¡Enhorabuena! Has completado el Módulo 3 por completo.');
      btnTerminar.textContent = '¡Módulo 3 Terminado!';
      btnTerminar.style.backgroundColor = '#2980b9';
      btnTerminar.disabled = true;
    });
  }
});