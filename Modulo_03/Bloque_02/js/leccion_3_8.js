document.addEventListener('DOMContentLoaded', () => {
  let db;
  const request = indexedDB.open('MiBaseDatos', 1);

  request.onerror = (event) => {
    console.error('Error al abrir IndexedDB:', event.target.error);
  };

  request.onsuccess = (event) => {
    db = event.target.result;
  };

  request.onupgradeneeded = (event) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains('tareas')) {
      db.createObjectStore('tareas', { keyPath: 'id', autoIncrement: true });
    }
  };

  const inputTarea = document.getElementById('inputTarea');
  const listaTareas = document.getElementById('listaTareas');

  document.getElementById('btnAñadirDB').addEventListener('click', () => {
    const texto = inputTarea.value.trim();
    if (!texto) {
      alert('Introduce un nombre para la tarea.');
      return;
    }

    if (!db) {
      alert('La base de datos aún no está lista.');
      return;
    }

    const transaction = db.transaction(['tareas'], 'readwrite');
    const store = transaction.objectStore('tareas');
    const peticion = store.add({ nombre: texto, fecha: new Date() });

    peticion.onsuccess = () => {
      alert('¡Tarea guardada en IndexedDB!');
      inputTarea.value = '';
    };

    peticion.onerror = (event) => {
      alert(`Error al guardar: ${event.target.error}`);
    };
  });

  document.getElementById('btnLeerDB').addEventListener('click', () => {
    if (!db) {
      alert('La base de datos aún no está lista.');
      return;
    }

    const transaction = db.transaction(['tareas'], 'readonly');
    const store = transaction.objectStore('tareas');
    const peticion = store.getAll();

    peticion.onsuccess = (event) => {
      const tareas = event.target.result;
      listaTareas.innerHTML = '';
      if (tareas.length === 0) {
        listaTareas.innerHTML = '<li><em>No hay tareas registradas</em></li>';
        return;
      }

      tareas.forEach((t) => {
        const li = document.createElement('li');
        li.textContent = `${t.nombre} (Guardada: ${new Date(t.fecha).toLocaleTimeString()})`;
        listaTareas.appendChild(li);
      });
    };
  });
});