document.addEventListener('DOMContentLoaded', () => {
  const btnCompletar = document.getElementById('btnCompletarBloque2');
  if (btnCompletar) {
    btnCompletar.addEventListener('click', () => {
      alert('¡Felicitaciones! Has completado con éxito el Bloque 2: APIs de Geolocalización y Almacenamiento.');
      btnCompletar.textContent = '¡Bloque 2 Completado!';
      btnCompletar.style.backgroundColor = '#2980b9';
      btnCompletar.disabled = true;
    });
  }
});