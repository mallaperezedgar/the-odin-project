import '../styles/Newsletter.css';
import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>Recibe las Mejores Actualizaciones</h2>
        <p>Súscribete para obtener contenido exclusivo en tu correo</p>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Súscribirse
          </button>
        </form>
        {subscribed && (
          <p className="success-message">✓ ¡Gracias por suscribirte!</p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
