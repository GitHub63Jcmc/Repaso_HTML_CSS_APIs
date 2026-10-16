document.addEventListener('DOMContentLoaded', () => {
  const btnGeo = document.getElementById('btnObtenerGeo');
  const geoResultado = document.getElementById('geoResultado');
  const spanLat = document.getElementById('lat');
  const spanLon = document.getElementById('lon');
  const spanAcc = document.getElementById('acc');

  if (btnGeo) {
    btnGeo.addEventListener('click', () => {
      if (!navigator.geolocation) {
        alert('Tu navegador no soporta la API de Geolocalización.');
        return;
      }

      btnGeo.textContent = 'Obteniendo posición...';
      btnGeo.disabled = true;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const acc = position.coords.accuracy;

          spanLat.textContent = lat;
          spanLon.textContent = lon;
          spanAcc.textContent = acc;

          geoResultado.style.display = 'block';
          btnGeo.textContent = 'Obtener Mi Posición Actual';
          btnGeo.disabled = false;
        },
        (error) => {
          alert(`Error al obtener geolocalización: ${error.message}`);
          btnGeo.textContent = 'Obtener Mi Posición Actual';
          btnGeo.disabled = false;
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    });
  }
});