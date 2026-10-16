document.addEventListener('DOMContentLoaded', () => {
  const btnCompletar = document.getElementById('btnCompletarBloque');
  if (btnCompletar) {
    btnCompletar.addEventListener('click', () => {
      alert('¡Felicitaciones! Has completado con éxito el Bloque 1: Gráficos y Dibujo con la API Canvas.');
      btnCompletar.textContent = '¡Bloque Completado!';
      btnCompletar.style.backgroundColor = '#2980b9';
      btnCompletar.disabled = true;
    });
  }
});

