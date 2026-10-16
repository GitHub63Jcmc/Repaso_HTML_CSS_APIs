document.addEventListener('DOMContentLoaded', () => {
  const btnEjecutar = document.getElementById('btnEjecutar');
  const btnSaludar = document.getElementById('btnSaludar');
  const spanEstado = document.getElementById('spanEstado');
  const spanClicks = document.getElementById('spanClicks');
  
  let contadorClicks = 0;

  btnSaludar.addEventListener('click', () => {
    contadorClicks++;
    spanClicks.textContent = contadorClicks;
  });

  if (window.Worker) {
    const miWorker = new Worker('js/leccion_3_11_workers.js');

    btnEjecutar.addEventListener('click', () => {
      spanEstado.textContent = 'Calculando en segundo plano...';
      btnEjecutar.disabled = true;
      miWorker.postMessage('iniciar');
    });

    miWorker.onmessage = (event) => {
      spanEstado.textContent = `¡Completado! Resultado: ${event.data}`;
      btnEjecutar.disabled = false;
    };
  } else {
    spanEstado.textContent = 'Tu navegador no soporta Web Workers.';
  }
});