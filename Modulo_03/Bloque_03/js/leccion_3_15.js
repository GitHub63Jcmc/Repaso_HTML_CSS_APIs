document.addEventListener('DOMContentLoaded', () => {
  const btnCompletar = document.getElementById('btnCompletarBloque3');
  if (btnCompletar) {
    btnCompletar.addEventListener('click', () => {
      alert('¡Excelente trabajo! Has completado el Bloque 3: APIs de Interactividad y Rendimiento.');
      btnCompletar.textContent = '¡Bloque 3 Completado!';
      btnCompletar.style.backgroundColor = '#2980b9';
      btnCompletar.disabled = true;
    });
  }
});