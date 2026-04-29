import '../styles/Stats.css';

function Stats() {
  const stats = [
    {
      number: '2.5M+',
      label: 'Personas Conectadas'
    },
    {
      number: '150K+',
      label: 'Nuevos Contenidos'
    },
    {
      number: '99.9%',
      label: 'Disponibilidad'
    },
    {
      number: '24/7',
      label: 'Atención Premium'
    }
  ];

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
