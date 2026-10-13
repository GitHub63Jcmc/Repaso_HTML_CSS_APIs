document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('miLienzo');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const btnRect = document.getElementById('btnRectangulo');
  const btnCirc = document.getElementById('btnCirculo');
  const btnClean = document.getElementById('btnLimpiar');

  btnRect.addEventListener('click', () => {
    ctx.fillStyle = '#2196F3';
    ctx.fillRect(50, 50, 120, 80);
  });

  btnCirc.addEventListener('click', () => {
    ctx.beginPath();
    ctx.arc(280, 90, 45, 0, Math.PI * 2);
    ctx.fillStyle = '#4CAF50';
    ctx.fill();
    ctx.closePath();
  });

  btnClean.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
});