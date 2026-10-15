document.addEventListener('DOMContentLoaded', () => {
  // --- EJEMPLO 1: Formas Geométricas Básicas ---
  const lienzo = document.getElementById('lienzo');
  if (lienzo) {
    const ctx = lienzo.getContext('2d');

    document.getElementById('btnRectangulo').addEventListener('click', () => {
      ctx.fillStyle = '#3498db';
      ctx.fillRect(50, 50, 120, 80);
    });

    document.getElementById('btnCirculo').addEventListener('click', () => {
      ctx.beginPath();
      ctx.arc(350, 90, 50, 0, Math.PI * 2);
      ctx.fillStyle = '#2ecc71';
      ctx.fill();
      ctx.closePath();
    });

    document.getElementById('btnLimpiar').addEventListener('click', () => {
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    });
  }

  // --- EJEMPLO 2: Pizarra Interactiva Avanzada ---
  const lienzoLibre = document.getElementById('lienzoLibre');
  if (lienzoLibre) {
    const ctxLibre = lienzoLibre.getContext('2d');
    
    let dibujando = false;
    let modoActual = 'libre'; // 'libre', 'rect', 'circ'
    let inicioX = 0;
    let inicioY = 0;
    let imagenSnapshot = null; // Para previsualizar formas al arrastrar

    const colorPicker = document.getElementById('colorPicker');
    const grosorRange = document.getElementById('grosorRange');
    
    // Botones de selección de herramienta
    const btnLibre = document.getElementById('modoLibre');
    const btnRect = document.getElementById('modoRect');
    const btnCirc = document.getElementById('modoCirc');

    function cambiarHerramienta(modo) {
      modoActual = modo;
      [btnLibre, btnRect, btnCirc].forEach(btn => btn.classList.remove('active'));
      if (modo === 'libre') btnLibre.classList.add('active');
      if (modo === 'rect') btnRect.classList.add('active');
      if (modo === 'circ') btnCirc.classList.add('active');
    }

    btnLibre.addEventListener('click', () => cambiarHerramienta('libre'));
    btnRect.addEventListener('click', () => cambiarHerramienta('rect'));
    btnCirc.addEventListener('click', () => cambiarHerramienta('circ'));

    function obtenerPosicion(e) {
      const rect = lienzoLibre.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }

    lienzoLibre.addEventListener('mousedown', (e) => {
      dibujando = true;
      const pos = obtenerPosicion(e);
      inicioX = pos.x;
      inicioY = pos.y;

      ctxLibre.strokeStyle = colorPicker.value;
      ctxLibre.fillStyle = colorPicker.value;
      ctxLibre.lineWidth = grosorRange.value;
      ctxLibre.lineCap = 'round';

      if (modoActual === 'libre') {
        ctxLibre.beginPath();
        ctxLibre.moveTo(inicioX, inicioY);
      } else {
        // Guardamos el estado del canvas para la previsualización al arrastrar
        imagenSnapshot = ctxLibre.getImageData(0, 0, lienzoLibre.width, lienzoLibre.height);
      }
    });

    lienzoLibre.addEventListener('mousemove', (e) => {
      if (!dibujando) return;
      const pos = obtenerPosicion(e);

      if (modoActual === 'libre') {
        ctxLibre.lineTo(pos.x, pos.y);
        ctxLibre.stroke();
      } else if (modoActual === 'rect') {
        // Restaurar canvas y dibujar rectángulo dinámico
        ctxLibre.putImageData(imagenSnapshot, 0, 0);
        let ancho = pos.x - inicioX;
        let alto = pos.y - inicioY;
        ctxRazonable(ctxLibre, inicioX, inicioY, ancho, alto);
      } else if (modoActual === 'circ') {
        // Restaurar canvas y dibujar círculo dinámico basado en radio
        ctxLibre.putImageData(imagenSnapshot, 0, 0);
        let radio = Math.sqrt(Math.pow(pos.x - inicioX, 2) + Math.pow(pos.y - inicioY, 2));
        ctxLibre.beginPath();
        ctxLibre.arc(inicioX, inicioY, radio, 0, Math.PI * 2);
        ctxLibre.fill();
      }
    });

    function ctxRazonable(ctx, x, y, w, h) {
      ctx.fillRect(x, y, w, h);
    }

    window.addEventListener('mouseup', () => {
      dibujando = false;
    });

    lienzoLibre.addEventListener('mouseleave', () => {
      dibujando = false;
    });

    document.getElementById('btnLimpiarLibre').addEventListener('click', () => {
      ctxLibre.clearRect(0, 0, lienzoLibre.width, lienzoLibre.height);
    });
  }
});