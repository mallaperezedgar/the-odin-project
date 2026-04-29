import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Información</h3>
          <ul>
            <li><a href="#about">Acerca de Nosotros</a></li>
            <li><a href="#team">Nuestro Equipo</a></li>
            <li><a href="#careers">Oportunidades</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Recursos</h3>
          <ul>
            <li><a href="#docs">Documentación</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#api">API</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#privacy">Privacidad</a></li>
            <li><a href="#terms">Términos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            <a href="#twitter">Twitter</a>
            <a href="#github">GitHub</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MiApp React. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
