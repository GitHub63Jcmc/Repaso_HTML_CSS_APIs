document.addEventListener('DOMContentLoaded', () => {
  const elementoArrastrable = document.getElementById('elementoArrastrable');
  const zonaDestino = document.getElementById('zonaDestino');

  elementoArrastrable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.style.opacity = '0.4';
  });

  elementoArrastrable.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1';
  });

  zonaDestino.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necesario para permitir soltar
    zonaDestino.classList.add('hovered');
  });

  zonaDestino.addEventListener('dragleave', () => {
    zonaDestino.classList.remove('hovered');
  });

  zonaDestino.addEventListener('drop', (e) => {
    e.preventDefault();
    zonaDestino.classList.remove('hovered');
    
    const id = e.dataTransfer.getData('text/plain');
    const elemento = document.getElementById(id);
    
    if (elemento) {
      zonaDestino.innerHTML = '';
      zonaDestino.appendChild(elemento);
      zonaDestino.style.borderStyle = 'solid';
      zonaDestino.style.borderColor = '#2ecc71';
      alert('¡Elemento soltado con éxito!');
    }
  });
});