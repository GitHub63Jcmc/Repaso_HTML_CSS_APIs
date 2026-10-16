class MainFooter extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block'; // Asegura que sea bloque
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="main-footer">
        <p>&copy; jcmc -  ${year} Repaso HTML5, CSS3 & APIs. Todos los derechos reservados.</p>
      </footer>
    `;
  }
}

customElements.define('main-footer', MainFooter);