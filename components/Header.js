class MainHeader extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block';
    
    // Detectamos si estamos dentro de un subdirectorio como /Modulo_01/
    const isSubdir = window.location.pathname.includes('/Modulo_01/');
    const basePath = isSubdir ? '../' : './';

    this.innerHTML = `
      <header class="main-header">
        <div class="logo">
          <h1><a href="${basePath}index.html" style="color: inherit; text-decoration: none;">Repaso HTML5, CSS3 & APIs</a></h1>
        </div>
        <nav class="nav-menu">
          <a href="${basePath}index.html">Inicio</a>
          
          <!-- Dropdown Módulo 01 -->
          <div class="dropdown">
            <a href="${basePath}Modulo_01/index.html" class="dropdown-trigger">Módulo 01 ▾</a>
            <div class="dropdown-content">
              <a href="${basePath}Modulo_01/index.html">Índice del Módulo</a>
              <a href="${basePath}Modulo_01/leccion_1_1.html">1.1 Desarrollo Web Cliente</a>
              <a href="${basePath}Modulo_01/leccion_1_2.html">1.2 Semántica HTML5</a>
              <a href="${basePath}Modulo_01/leccion_1_3.html">1.3 Estructura semántica</a>
              <a href="${basePath}Modulo_01/leccion_1_4.html">1.4 Nuevos elementos multimedia</a>
              <a href="${basePath}Modulo_01/leccion_1_5.html">1.5 Elementos de formulario avanzados</a>
              <a href="${basePath}Modulo_01/leccion_1_6.html">1.6 Atributos globales y específicos</a>
              <a href="${basePath}Modulo_01/leccion_1_7.html">1.7 Panorama de las nuevas APIs</a>
              <a href="${basePath}Modulo_01/leccion_1_8.html">1.8 Resumen del módulo 1</a>
            </div>
          </div>

          <a href="#">Módulo 02</a>
          <a href="#">Módulo 03</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('main-header', MainHeader);