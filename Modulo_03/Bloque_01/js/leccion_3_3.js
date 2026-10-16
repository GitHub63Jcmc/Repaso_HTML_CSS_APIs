document.addEventListener('DOMContentLoaded', () => {
  // --- EJEMPLO 1: Degradados y Sombra (Primer Lienzo) ---
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

  // --- EJEMPLO 2: Personalizador Interactivo de Texto y Colores (Segundo Lienzo) ---
  const lienzoPers = document.getElementById('lienzoPersonalizado');
  if (lienzoPers) {
    const ctxPers = lienzoPers.getContext('2d');
    const customText = document.getElementById('customText');
    const customColor = document.getElementById('customColor');

    document.getElementById('btnDibujarRect').addEventListener('click', () => {
      ctxPers.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctxPers.shadowBlur = 8;
      ctxPers.shadowOffsetX = 3;
      ctxPers.shadowOffsetY = 3;

      const x = Math.random() * (lienzoPers.width - 180);
      const y = Math.random() * (lienzoPers.height - 110);

      let gradRect = ctxPers.createLinearGradient(x, y, x + 180, y + 110);
      gradRect.addColorStop(0, customColor.value);
      gradRect.addColorStop(1, '#ffffff');

      ctxPers.fillStyle = gradRect;
      ctxPers.fillRect(x, y, 180, 110);

      ctxPers.shadowColor = 'transparent';
    });

    document.getElementById('btnEscribirTexto').addEventListener('click', () => {
      ctxPers.font = 'bold 26px sans-serif';
      ctxPers.textAlign = 'left';
      ctxPers.textBaseline = 'alphabetic';

      ctxPers.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctxPers.shadowBlur = 6;
      ctxPers.shadowOffsetX = 2;
      ctxPers.shadowOffsetY = 2;

      const x = Math.random() * (lienzoPers.width - 260) + 20;
      const y = Math.random() * (lienzoPers.height - 80) + 40;

      let gradText = ctxPers.createLinearGradient(x, y - 20, x + 200, y);
      gradText.addColorStop(0, customColor.value);
      gradText.addColorStop(1, '#f39c12');

      ctxPers.fillStyle = gradText;
      ctxPers.fillText(customText.value || 'Texto por defecto', x, y);

      ctxPers.shadowColor = 'transparent';
    });

    document.getElementById('btnLimpiarPersonalizado').addEventListener('click', () => {
      ctxPers.clearRect(0, 0, lienzoPers.width, lienzoPers.height);
    });
  }
});