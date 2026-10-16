document.addEventListener('DOMContentLoaded', () => {
  const cajaInteractiva = document.getElementById('cajaInteractiva');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const btnNotif = document.getElementById('btnNotif');
  const spanFsStatus = document.getElementById('spanFsStatus');

  // Control Fullscreen
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      cajaInteractiva.requestFullscreen().catch(err => {
        alert(`Error al activar pantalla completa: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      spanFsStatus.textContent = 'Activo (Pantalla Completa)';
    } else {
      spanFsStatus.textContent = 'Inactivo';
    }
  });

  // Control Web Notifications
  btnNotif.addEventListener('click', async () => {
    if (!('Notification' in window)) {
      alert('Este navegador no soporta notificaciones de escritorio.');
      return;
    }

    let permission = Notification.permission;
    
    if (permission === 'default') {
      permission = await Notification.requestPermission();
    }

    if (permission === 'granted') {
      new Notification('¡Hola desde la Lección 3.14!', {
        body: 'Las notificaciones web funcionan correctamente.',
        icon: '../../favicon.ico'
      });
    } else {
      alert('Permiso de notificaciones denegado.');
    }
  });
});