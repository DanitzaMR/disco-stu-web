import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Funcionalidad del boletín se implementará más adelante
    console.log('Suscripción al boletín:', email);
    setEmail('');
  };

  return (
    <footer className="bg-disco-gray border-top border-disco-purple mt-auto">
      <div className="container py-5">
        <div className="row g-4">
          
          {/* Información de contacto */}
          <div className="col-lg-3 col-md-6">
            <h3 className="h5 fw-bold text-disco-pink mb-3">Contacto</h3>
            <div className="d-flex flex-column gap-2 text-light" style={{ opacity: '0.8' }}>
              <p className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-geo-alt"></i>
                <span>Avenida Siempreviva, 742, Springfield</span>
              </p>
              <p className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-telephone"></i>
                <span>+56 75 231 4567</span>
              </p>
              <p className="d-flex align-items-center gap-2 mb-0">
                <i className="bi bi-envelope"></i>
                <span>info@discostu.com</span>
              </p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="col-lg-3 col-md-6">
            <h3 className="h5 fw-bold text-disco-pink mb-3">Síguenos</h3>
            <div className="d-flex gap-3">
              <a href="#" className="text-light hover-text-info fs-4" style={{ opacity: '0.8', transition: 'all 0.3s ease' }}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light hover-text-primary fs-4" style={{ opacity: '0.8', transition: 'all 0.3s ease' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light hover-text-disco-pink fs-4" style={{ opacity: '0.8', transition: 'all 0.3s ease' }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light hover-text-danger fs-4" style={{ opacity: '0.8', transition: 'all 0.3s ease' }}>
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Suscripción al boletín */}
          <div className="col-lg-3 col-md-6">
            <h3 className="h5 fw-bold text-disco-pink mb-3">Boletín Disco</h3>
            <p className="text-light small mb-3" style={{ opacity: '0.8' }}>
              Recibe las últimas noticias y eventos directamente en tu email
            </p>
            <form onSubmit={handleNewsletterSubmit} className="d-flex flex-column gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="form-control form-control-disco"
                required
              />
              <button
                type="submit"
                className="btn btn-disco fw-semibold rounded-pill"
              >
                Suscribirme
              </button>
            </form>
          </div>

          {/* Mapa de ubicación */}
          <div className="col-lg-3 col-md-6">
            <h3 className="h5 fw-bold text-disco-pink mb-3">Ubicación</h3>
            <div className="rounded overflow-hidden border" style={{ height: '128px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26265.738515729387!2d-71.25306075273936!3d-34.98298737158203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c7ccac4b7e85%3A0x4b8b6f7b8c7c5c8e!2sCuric%C3%B3%2C+Chile!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Disco Stu - Curicó, Chile"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-5 pt-4 border-top border-secondary text-center text-secondary">
          <p className="mb-0">&copy; 2025 Disco Stu's Dance Palace. Todos los derechos reservados. ¡Disco no está muerto!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
