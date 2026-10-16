onmessage = function(event) {
  if (event.data === 'iniciar') {
    let suma = 0;
    // Bucle pesado simulado
    for (let i = 0; i < 2000000000; i++) {
      suma += i;
    }
    postMessage(suma);
  }
};