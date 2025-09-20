import React from 'react';
import SmartImage from './SmartImage';

const AnimatedBanner = () => {
  return (
    <section className="min-vh-100 disco-gradient d-flex align-items-center justify-content-center position-relative overflow-hidden">
      
      {/* Círculos decorativos simples */}
      <div className="position-absolute bg-disco-pink rounded-circle opacity-25" 
           style={{ 
             top: '80px', 
             left: '40px', 
             width: '128px', 
             height: '128px', 
             animation: 'pulse 2s infinite' 
           }}></div>
      <div className="position-absolute bg-info rounded-circle opacity-25" 
           style={{ 
             bottom: '80px', 
             right: '40px', 
             width: '96px', 
             height: '96px', 
             animation: 'pulse 2s infinite' 
           }}></div>

      {/* Contenido principal */}
      <div className="text-center px-4 container position-relative" style={{ zIndex: 10 }}>
        
        {/* Imagen de Disco Stu */}
        <div className="mb-5">
          <div className="mx-auto mb-4 position-relative" 
               style={{ width: '140px', height: '140px' }}>
            <SmartImage 
              src="https://i.scdn.co/image/ab67616d0000b273c58231d14ccfec4ef72596dd"
              alt="Disco Stu Profile" 
              className="rounded-circle shadow-lg"
              style={{ 
                width: '140px', 
                height: '140px',
                objectFit: 'cover',
                border: '4px solid #8b5cf6',
                animation: 'pulse 2s infinite'
              }}
              fallbackSrc="/images/disco-stu/disco-stu-profile.svg"
            />
            {/* Efecto de brillo/glow alrededor */}
            <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                 style={{
                   background: 'linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
                   animation: 'spin 4s linear infinite',
                   zIndex: -1
                 }}>
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="display-1 fw-bold mb-4 text-white">
          <span className="d-block disco-text-glow">
            ¡BAILA TODA LA NOCHE
          </span>
          <span className="d-block neon-text mt-2">
            CON DISCO STU!
          </span>
        </h1>

        {/* Descripción */}
        <p className="fs-4 text-light mb-5 mx-auto" style={{ maxWidth: '600px', opacity: '0.9' }}>
          El lugar donde la música disco nunca muere. Luces de neón, 
          ritmos contagiosos y diversión sin fin.
        </p>

        {/* Botones principales */}
        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mb-5">
          <button className="btn btn-disco btn-lg rounded-pill fw-bold px-4 shadow-lg">
            🎫 Comprar Entradas
          </button>
          <button className="btn btn-outline-info btn-lg rounded-pill fw-bold px-4">
            📹 Ver Video
          </button>
        </div>

        {/* Información básica */}
        <div className="row g-4 justify-content-center">
          <div className="col-6 col-md-3 text-center">
            <div className="h2 fw-bold text-disco-pink">500+</div>
            <div className="text-secondary small">Noches</div>
          </div>
          <div className="col-6 col-md-3 text-center">
            <div className="h2 fw-bold text-info">10K+</div>
            <div className="text-secondary small">Bailarines</div>
          </div>
          <div className="col-6 col-md-3 text-center">
            <div className="h2 fw-bold text-success">24/7</div>
            <div className="text-secondary small">Música</div>
          </div>
          <div className="col-6 col-md-3 text-center">
            <div className="h2 fw-bold text-disco-purple">1970</div>
            <div className="text-secondary small">Desde</div>
          </div>
        </div>
      </div>

      {/* Flecha hacia abajo */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <i className="bi bi-arrow-down text-white fs-4" style={{ opacity: '0.7', animation: 'bounce 2s infinite' }}></i>
      </div>
    </section>
  );
};

export default AnimatedBanner;
