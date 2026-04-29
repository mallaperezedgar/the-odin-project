import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo">✦ MiApp</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#features">Características</a></li>
          <li><a href="#trending">Popular</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <button className="nav-toggle">☰</button>
      </nav>
    </header>
  );
}

export default Header;
