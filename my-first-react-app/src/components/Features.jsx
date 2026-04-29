import '../styles/Features.css';

function Features() {
  const features = [
    {
      icon: '01',
      title: 'Interfaz Moderna',
      description: 'Diseño limpio y elegante adaptado a todos los dispositivos'
    },
    {
      icon: '02',
      title: 'Rendimiento Rápido',
      description: 'Velocidad optimizada para una experiencia sin interrupciones'
    },
    {
      icon: '03',
      title: 'Totalmente Seguro',
      description: 'Protección avanzada de datos con estándares internacionales'
    },
    {
      icon: '04',
      title: 'Adaptable',
      description: 'Funciona perfecto en móviles, tablets y computadoras'
    },
    {
      icon: '05',
      title: 'Modo Nocturno',
      description: 'Ahorro de batería y comodidad visual en cualquier momento'
    },
    {
      icon: '06',
      title: 'Características Premium',
      description: 'Acceso a funcionalidades exclusivas y personalizadas'
    }
  ];

  return (
    <section className="features">
      <div className="features-header">
        <h2>Características Principales</h2>
        <p>Todas las herramientas que necesitas en un lugar</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
