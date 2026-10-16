document.addEventListener('DOMContentLoaded', () => {
  const spanVista = document.getElementById('spanVista');
  const spanUrl = document.getElementById('spanUrl');

  function cambiarVista(vista, url, actualizarHistory = true) {
    spanVista.textContent = vista;
    spanUrl.textContent = url;
    
    if (actualizarHistory) {
      history.pushState({ vista: vista }, '', url);
    }
  }

  document.getElementById('btnHome').addEventListener('click', () => {
    cambiarVista('Inicio', '/Modulo_03/Bloque_03/leccion_3_12.html?view=home');
  });

  document.getElementById('btnPerfil').addEventListener('click', () => {
    cambiarVista('Perfil de Usuario', '/Modulo_03/Bloque_03/leccion_3_12.html?view=perfil');
  });

  document.getElementById('btnConfig').addEventListener('click', () => {
    cambiarVista('Configuración', '/Modulo_03/Bloque_03/leccion_3_12.html?view=config');
  });

  // Escuchar el evento popstate para cuando el usuario usa los botones atrás/adelante del navegador
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.vista) {
      cambiarVista(event.state.vista, window.location.pathname + window.location.search, false);
    } else {
      cambiarVista('Inicio', window.location.pathname + window.location.search, false);
    }
  });
});