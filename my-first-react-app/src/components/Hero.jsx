import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Tu Espacio Personal</h1>
        <p className="hero-subtitle">Descubre, explora y conecta con el contenido que te apasiona</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Comenzar</button>
          <button className="btn btn-secondary">Explorar</button>
        </div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  );
}

export default Hero;
