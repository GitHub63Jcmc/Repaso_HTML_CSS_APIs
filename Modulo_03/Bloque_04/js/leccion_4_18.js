document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      // Cerrar los demás
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });
      // Alternar el actual
      item.classList.toggle('active');
    });
  });
});