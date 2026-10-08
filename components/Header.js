class MainHeader extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block';

    this.innerHTML = `
      <header class="main-header">
        <div class="logo">
          <h1><a href="/index.html" style="color: inherit; text-decoration: none;">Repaso HTML5, CSS3 & APIs</a></h1>
        </div>
        <nav class="nav-menu">
          <a href="/index.html">Inicio</a>
          
          <!-- Dropdown Módulo 01 -->
          <div class="dropdown">
            <a href="/Modulo_01/index.html" class="dropdown-trigger">Módulo 01 ▾</a>
            <div class="dropdown-content">
              <a href="/Modulo_01/index.html">Índice del Módulo</a>
              <a href="/Modulo_01/leccion_1_1.html">1.1 Desarrollo Web Cliente</a>
              <a href="/Modulo_01/leccion_1_2.html">1.2 Semántica HTML5</a>
              <a href="/Modulo_01/leccion_1_3.html">1.3 Estructura semántica</a>
              <a href="/Modulo_01/leccion_1_4.html">1.4 Nuevos elementos multimedia</a>
              <a href="/Modulo_01/leccion_1_5.html">1.5 Elementos de formulario avanzados</a>
              <a href="/Modulo_01/leccion_1_6.html">1.6 Atributos globales y específicos</a>
              <a href="/Modulo_01/leccion_1_7.html">1.7 Panorama de las nuevas APIs</a>
              <a href="/Modulo_01/leccion_1_8.html">1.8 Resumen del módulo 1</a>
            </div>
          </div>

          <!-- Dropdown Módulo 02 -->
          <div class="dropdown">
            <a href="/Modulo_02/index.html" class="dropdown-trigger">Módulo 02 ▾</a>
            <div class="dropdown-content">
              <a href="/Modulo_02/index.html">Índice del Módulo</a>
              <a href="/Modulo_02/leccion_2_1.html">2.1 Selectores avanzados</a>
              <a href="/Modulo_02/leccion_2_2.html">2.2 Bordes, sombras y degradados</a>
              <a href="/Modulo_02/leccion_2_3.html">2.3 Efectos de texto</a>
              <a href="/Modulo_02/leccion_2_4.html">2.4 Tipografías externas con @font-face</a>
              <a href="/Modulo_02/leccion_2_5.html">2.5 Transformaciones</a>
            </div>
          </div>

          <a href="#">Módulo 03</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('main-header', MainHeader);