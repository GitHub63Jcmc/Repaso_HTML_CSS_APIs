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
              <a href="/Modulo_01/resumen.html">1.8 Resumen del módulo 1</a>
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
              <a href="/Modulo_02/leccion_2_6.html">2.6 Transiciones</a>
              <a href="/Modulo_02/leccion_2_7.html">2.7 Animaciones (@keyframes)</a>
              <a href="/Modulo_02/leccion_2_8.html">2.8 Flexbox</a>
              <a href="/Modulo_02/leccion_2_9.html">2.9 Grid Layout</a>
              <a href="/Modulo_02/leccion_2_10.html">2.10 Texto en columnas</a>
              <a href="/Modulo_02/leccion_2_11.html">2.11 Diseño Adaptable</a>
              <a href="/Modulo_02/resumen.html">2.12 Resumen del Módulo 2</a>
            </div>
          </div>

          <!-- Dropdown Módulo 03 -->
          <div class="dropdown">
            <a href="/Modulo_03/index.html" class="dropdown-trigger">Módulo 03 ▼</a>
            <div class="dropdown-content">
              <a href="/Modulo_03/index.html">Índice del Módulo</a>
              <a href="/Modulo_03/Bloque_01/leccion_3_1.html">3.1 Introducción al elemento canvas</a>
              <a href="/Modulo_03/Bloque_01/leccion_3_2.html">3.2 Creación de formas básicas</a>
              <a href="/Modulo_03/Bloque_01/leccion_3_3.html">3.3 Gestión de colores y estilos</a>
              <a href="/Modulo_03/Bloque_01/leccion_3_4.html">3.4 Manipulación de imágenes y exportación</a>
              <a href="/Modulo_03/Bloque_01/leccion_3_5.html">3.5 Resumen del bloque 1</a>
              <a href="/Modulo_03/Bloque_02/leccion_3_6.html">3.6 API de Geolocalización</a>
              <a href="/Modulo_03/Bloque_02/leccion_3_7.html">3.7 Almacenamiento local con Web Storage</a>
              <a href="/Modulo_03/Bloque_02/leccion_3_8.html">3.8 Introducción a IndexedDB</a>
              <a href="/Modulo_03/Bloque_02/leccion_3_9.html">3.9 Diferencias entre almacenamiento</a>
              <a href="/Modulo_03/Bloque_02/leccion_3_10.html">3.10 Resumen del bloque 2</a>
              <a href="/Modulo_03/Bloque_03/leccion_3_11.html">3.11 Implementación de Web Workers</a>
              <a href="/Modulo_03/Bloque_03/leccion_3_12.html">3.12 Manejo de la navegación con la API</a>
              <a href="/Modulo_03/Bloque_03/leccion_3_13.html">3.13 Implementación de funcionalidad drag and drop</a>
              <a href="/Modulo_03/Bloque_03/leccion_3_14.html">3.14 API Fullscreen y Web Notifications</a>
              <a href="/Modulo_03/Bloque_03/leccion_3_15.html">3.15 Resumen del bloque 3</a>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('main-header', MainHeader);