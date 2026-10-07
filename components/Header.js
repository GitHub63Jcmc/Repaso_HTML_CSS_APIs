class MainHeader extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block'; // Asegura que sea bloque
    this.innerHTML = `
      <header class="main-header">
        <div class="logo">
          <h1>Repaso HTML5, CSS3 & APIs</h1>
        </div>
        <nav class="nav-menu">
          <a href="../index.html">Inicio</a>
          <a href="../Modulo_01/leccion_1_1.html">Módulo 01</a>
          <a href="#">Módulo 02</a>
          <a href="#">Módulo 03</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('main-header', MainHeader);