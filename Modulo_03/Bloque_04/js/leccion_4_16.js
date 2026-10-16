document.addEventListener('DOMContentLoaded', () => {
  const inputMsg = document.getElementById('inputMsg');
  const btnEnviarWS = document.getElementById('btnEnviarWS');
  const listaLogs = document.getElementById('listaLogs');

  function agregarLog(texto) {
    const li = document.createElement('li');
    li.textContent = `[${new Date().toLocaleTimeString()}] ${texto}`;
    listaLogs.appendChild(li);
  }

  // Simulando conexión WebSocket para entorno local de prácticas
  agregarLog('Conectando al servidor WebSocket...');
  
  setTimeout(() => {
    agregarLog('¡Conexión establecida con éxito (Canal abierto)!');
  }, 1000);

  btnEnviarWS.addEventListener('click', () => {
    const texto = inputMsg.value.trim();
    if (!texto) {
      alert('Escribe un mensaje antes de enviar.');
      return;
    }

    agregarLog(`Enviado: "${texto}"`);
    inputMsg.value = '';

    // Simulando respuesta del servidor en tiempo real
    setTimeout(() => {
      agregarLog(`Recibido del servidor: Eco -> "${texto}"`);
    }, 600);
  });
});