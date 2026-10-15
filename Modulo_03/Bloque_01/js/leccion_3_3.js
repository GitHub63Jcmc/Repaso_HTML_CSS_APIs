document.addEventListener('DOMContentLoaded', () => {
  // --- EJEMPLO 1: Degradados y Sombra ---
  const lienzo = document.getElementById('lienzoEstilos');
  if (lienzo) {
    const ctx = lienzo.getContext('2d');

    document.getElementById('btnDegradado').addEventListener('click', () => {
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
      
      ctx.shadowColor = 'rgba(52, 152, 219, 0.8)';
      ctx.shadowBlur = 15;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;

      let grad = ctx.createLinearGradient(50, 50, 250, 150);
      grad.addColorStop(0, '#e74c3c');
      grad.addColorStop(0.5, '#f1c40f');
      grad.addColorStop(1, '#2ecc71');

      ctx.fillStyle = grad;
      ctx.fillRect(50, 50, 200, 120);

      ctx.shadowColor = 'transparent';
    });

    document.getElementById('btnTexto').addEventListener('click', () => {
      ctx.font = 'bold 32px sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';

      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;

      ctx.fillStyle = '#3498db';
      ctx.fillText('¡Hola Canvas API!', 60, 230);

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.strokeText('¡Hola Canvas API!', 60, 230);

      ctx.shadowColor = 'transparent';
    });

    document.getElementById('btnLimpiar').addEventListener('click', () => {
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    });
  }

  // --- EJEMPLO 2: Personalizador Interactivo ---
  const lienzoPers = document.getElementById('lienzoPersonalizado');
  if (lienzoPers) {
    const ctxPers = lienzoPers.getContext('2d');
    const customText = document.getElementById('customText');
    const customColor = document.getElementById('customColor');

    document.getElementById('btnDibujarRect').addEventListener('click', () => {
      ctxPers.fillStyle = customColor.value;
      // Posiciones aleatorias dentro del canvas para que no se superpongan exactamente
      const x = Math.random() * (lienzoPers.width - 160);
      const y = Math.random() * (lienzoPers.height - 100);
      ctxPers.fillRect(x, y, 160, 100);
    });

    document.getElementById('btnEscribirTexto').addEventListener('click', () => {
      ctxPers.font = 'bold 24px sans-serif';
      ctxPers.fillStyle = customColor.value;
      const x = Math.random() * (lienzoPers.width - 250) + 20;
      const y = Math.random() * (lienzoPers.height - 60) + 30;
      ctxPers.fillText(customText.value || 'Texto por defecto', x, y);
    });

    document.getElementById('btnLimpiarPersonalizado').addEventListener('click', () => {
      ctxPers.clearRect(0, 0, lienzoPers.width, lienzoPers.height);
    });
  }
});