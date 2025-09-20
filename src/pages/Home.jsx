import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedBanner from '../components/AnimatedBanner';
import EventCard from '../components/EventCard';
import PromoCard from '../components/PromoCard';
import { eventos, promociones } from '../mockData';

const Home = () => {
  // Obtener solo los primeros 3 eventos para mostrar
  const eventosDestacados = eventos.slice(0, 3);

  return (
    <div className="min-vh-100">
      {/* Banner principal */}
      <AnimatedBanner />

      {/* Sección de Eventos Destacados */}
      <section className="py-5 bg-disco-gray">
        <div className="container">
          {/* Título de sección */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white mb-4">
              <span className="neon-text">Eventos</span> Destacados
            </h2>
            <p className="fs-6 text-light mx-auto" style={{ maxWidth: '600px', opacity: '0.8' }}>
              No te pierdas nuestros próximos eventos llenos de música, baile y diversión.
            </p>
            <div className="disco-gradient mx-auto mt-4" style={{ width: '80px', height: '4px' }}></div>
          </div>

          {/* Grid de eventos */}
          <div className="row g-4">
            {eventosDestacados.map((evento) => (
              <div key={evento.id} className="col-md-6 col-lg-4">
                <EventCard evento={evento} />
              </div>
            ))}
          </div>

          {/* Botón para ver más */}
          <div className="text-center mt-5">
            <Link 
              to="/eventos"
              className="btn btn-disco rounded-pill fw-bold px-4"
            >
              Ver Todos los Eventos 
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Promociones */}
      <section className="py-5 bg-disco-dark">
        <div className="container">
          {/* Título de sección */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white mb-4">
              Promociones <span className="text-success">Especiales</span>
            </h2>
            <p className="fs-6 text-light mx-auto" style={{ maxWidth: '600px', opacity: '0.8' }}>
              ¡Aprovecha nuestras increíbles ofertas! Más diversión por menos dinero.
            </p>
            <div className="bg-success mx-auto mt-4" style={{ width: '80px', height: '4px' }}></div>
          </div>

          {/* Grid de promociones */}
          <div className="row g-4">
            {promociones.map((promocion) => (
              <div key={promocion.id} className="col-sm-6 col-lg-3">
                <PromoCard promocion={promocion} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección final Call to Action */}
      <section className="py-5 disco-gradient position-relative">
        {/* Círculos decorativos simples */}
        <div className="position-absolute top-0 start-0 m-4 rounded-circle bg-disco-pink opacity-25" 
             style={{ width: '80px', height: '80px', animation: 'pulse 2s infinite' }}></div>
        <div className="position-absolute bottom-0 end-0 m-4 rounded-circle bg-info opacity-25" 
             style={{ width: '64px', height: '64px', animation: 'pulse 2s infinite' }}></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center position-relative">
              <h2 className="display-4 fw-bold text-white mb-4">
                ¿Listo para <span className="neon-text">BAILAR?</span>
              </h2>
              <p className="fs-6 text-light mb-5 mx-auto" style={{ maxWidth: '500px', opacity: '0.9' }}>
                Únete a la diversión. Reserva tu mesa y prepárate para una noche inolvidable.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mb-5">
                <button className="btn btn-light rounded-pill fw-bold px-4 text-disco-purple">
                  🎟️ Reservar Ahora
                </button>
                <button className="btn btn-outline-light rounded-pill fw-bold px-4">
                  📞 Contactar
                </button>
              </div>

              {/* Información de contacto */}
              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 text-light" 
                   style={{ opacity: '0.85' }}>
                <div className="d-flex align-items-center">
                  <span className="me-2">📞</span>
                  <span>(555) DISCO-70</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2">📍</span>
                  <span>742 Avenida Siempreviva</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2">🕒</span>
                  <span>Abierto hasta 3:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
