import '../styles/Trending.css';

function Trending() {
  const trendingItems = [
    {
      id: 1,
      title: 'Tecnología 2026',
      category: 'Innovación',
      views: '15.2K',
      badge: 'TOP'
    },
    {
      id: 2,
      title: 'Bienestar y Salud',
      category: 'Vida Saludable',
      views: '12.8K',
      badge: 'HOT'
    },
    {
      id: 3,
      title: 'Destinos Increibles',
      category: 'Viajes',
      views: '18.5K',
      badge: 'TOP'
    },
    {
      id: 4,
      title: 'Creación Digital',
      category: 'Diseño',
      views: '9.3K',
      badge: 'NEW'
    },
    {
      id: 5,
      title: 'Crecimiento Profesional',
      category: 'Negocios',
      views: '21.1K',
      badge: 'TOP'
    },
    {
      id: 6,
      title: 'Entretenimiento Puro',
      category: 'Diversión',
      views: '16.7K',
      badge: 'HOT'
    }
  ];

  return (
    <section className="trending">
      <div className="trending-header">
        <h2>Lo Más Popular</h2>
        <p>Contenido destacado en este momento</p>
      </div>
      <div className="trending-grid">
        {trendingItems.map((item) => (
          <div key={item.id} className="trending-card">
            <div className="trending-header-card">
              <span className="trending-badge">{item.badge}</span>
              <span className="trending-category">{item.category}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="trending-views">👁 {item.views} vistas</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
