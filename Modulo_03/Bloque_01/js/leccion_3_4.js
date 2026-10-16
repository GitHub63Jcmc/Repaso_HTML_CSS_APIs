// 

// -------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // --- EJEMPLO 1: Carga de Imagen Automática (Primer Lienzo) ---
  const lienzo = document.getElementById('lienzoImagen');
  if (lienzo) {
    const ctx = lienzo.getContext('2d');
    let imagenActual = null;

    document.getElementById('btnCargarImg').addEventListener('click', () => {
      const img = new Image();
      img.src = 'https://picsum.photos/500/300';
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        imagenActual = img;
        ctx.clearRect(0, 0, lienzo.width, lienzo.height);
        ctx.drawImage(img, 0, 0, lienzo.width, lienzo.height);
      };
    });

    document.getElementById('btnFiltroGris').addEventListener('click', () => {
      if (!imagenActual) {
        alert('Por favor, carga una imagen primero.');
        return;
      }
      const imgData = ctx.getImageData(0, 0, lienzo.width, lienzo.height);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const gris = (data[i] * 0.3) + (data[i + 1] * 0.59) + (data[i + 2] * 0.11);
        data[i] = gris; data[i + 1] = gris; data[i + 2] = gris;
      }
      ctx.putImageData(imgData, 0, 0);
    });

    document.getElementById('btnExportar').addEventListener('click', () => {
      const dataURL = lienzo.toDataURL('image/png');
      const enlace = document.getElementById('descargaLink');
      enlace.href = dataURL;
      enlace.download = 'canvas-exportado.png';
      enlace.click();
    });

    document.getElementById('btnLimpiar').addEventListener('click', () => {
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
      imagenActual = null;
    });
  }

  // --- EJEMPLO 2: Cargador Personalizado Local u Online (Segundo Lienzo) ---
  const lienzoPers = document.getElementById('lienzoPersonalizado');
  if (lienzoPers) {
    const ctxPers = lienzoPers.getContext('2d');
    const inputFile = document.getElementById('inputFile');
    const inputUrl = document.getElementById('inputUrl');

    function dibujarImagenEnCanvas(img) {
      ctxPers.clearRect(0, 0, lienzoPers.width, lienzoPers.height);
      // Ajustamos manteniendo proporciones o rellenando el lienzo
      ctxPers.drawImage(img, 0, 0, lienzoPers.width, lienzoPers.height);
    }

    // Cargar imagen desde archivo local del equipo
    inputFile.addEventListener('change', (e) => {
      const archivo = e.target.files[0];
      if (!archivo) return;

      const reader = new FileReader();
      reader.onload = (evento) => {
        const img = new Image();
        img.onload = () => dibujarImagenEnCanvas(img);
        img.src = evento.target.result;
      };
      reader.readAsDataURL(archivo);
    });

    // Cargar imagen mediante URL web
    document.getElementById('btnCargarPersonalizada').addEventListener('click', () => {
      const url = inputUrl.value.trim();
      if (!url) {
        alert('Introduce una URL válida.');
        return;
      }

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => dibujarImagenEnCanvas(img);
      img.onerror = () => alert('No se pudo cargar la imagen desde la URL proporcionada (posible restricción CORS).');
      img.src = url;
    });

    // Filtro de grises para el segundo lienzo
    document.getElementById('btnFiltroGrisPers').addEventListener('click', () => {
      try {
        const imgData = ctxPers.getImageData(0, 0, lienzoPers.width, lienzoPers.height);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
          const gris = (data[i] * 0.3) + (data[i + 1] * 0.59) + (data[i + 2] * 0.11);
          data[i] = gris; data[i + 1] = gris; data[i + 2] = gris;
        }
        ctxPers.putImageData(imgData, 0, 0);
      } catch (err) {
        alert('Acción bloqueada por políticas de seguridad CORS en la imagen cargada.');
      }
    });

    // Exportar el segundo lienzo
    document.getElementById('btnExportarPers').addEventListener('click', () => {
      try {
        const dataURL = lienzoPers.toDataURL('image/png');
        const enlace = document.getElementById('descargaLinkPers');
        enlace.href = dataURL;
        enlace.download = 'canvas-personalizado.png';
        enlace.click();
      } catch (err) {
        alert('No se puede exportar debido a restricciones de seguridad CORS de la imagen externa.');
      }
    });

    // Limpiar segundo lienzo
    document.getElementById('btnLimpiarPers').addEventListener('click', () => {
      ctxPers.clearRect(0, 0, lienzoPers.width, lienzoPers.height);
      inputFile.value = '';
      inputUrl.value = '';
    });
  }
});