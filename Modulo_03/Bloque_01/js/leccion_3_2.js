document.addEventListener('DOMContentLoaded', () => {
  // --- EJEMPLO 1: Formas y Triángulo mediante Trazados ---
  const lienzo = document.getElementById('lienzoTrazados');
  if (lienzo) {
    const ctx = lienzo.getContext('2d');

    document.getElementById('btnTriangulo').addEventListener('click', () => {
      ctx.beginPath();
      ctx.moveTo(250, 50);   // Vértice superior
      ctx.lineTo(150, 220);  // Vértice inferior izquierdo
      ctx.lineTo(350, 220);  // Vértice inferior derecho
      ctx.closePath();       // Cierra el triángulo
      ctx.fillStyle = '#e67e22';
      ctx.fill();
    });

    document.getElementById('btnLineas').addEventListener('click', () => {
      ctx.strokeStyle = '#3498db';
      ctx.lineWidth = 4;
      
      // Línea diagonal 1
      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.lineTo(450, 250);
      ctx.stroke();

      // Línea diagonal 2
      ctx.beginPath();
      ctx.moveTo(450, 50);
      ctx.lineTo(50, 250);
      ctx.stroke();
    });

    document.getElementById('btnLimpiar').addEventListener('click', () => {
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    });
  }

  // --- EJEMPLO 2: Pizarra Interactiva de Trazados Libres ---
  const lienzoLibre = document.getElementById('lienzoLibre');
  if (lienzoLibre) {
    const ctxLibre = lienzoLibre.getContext('2d');
    let dibujando = false;

    const colorPicker = document.getElementById('colorPicker');
    const grosorRange = document.getElementById('grosorRange');

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

      ctxLibre.strokeStyle = colorPicker.value;
      ctxLibre.lineWidth = grosorRange.value;
      ctxLibre.lineCap = 'round';
      ctxLibre.lineJoin = 'round';

      ctxLibre.beginPath();
      ctxLibre.moveTo(pos.x, pos.y);
    });

    lienzoLibre.addEventListener('mousemove', (e) => {
      if (!dibujando) return;
      const pos = obtenerPosicion(e);
      ctxLibre.lineTo(pos.x, pos.y);
      ctxLibre.stroke();
    });

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