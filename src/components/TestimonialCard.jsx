import React from 'react';

const TestimonialCard = ({ testimonio }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`bi bi-star${i < rating ? '-fill' : ''} ${i < rating ? 'text-warning' : 'text-secondary'}`}
      ></i>
    ));
  };

  return (
    <div className="card card-disco border-0 shadow hover-lift h-100">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          {renderStars(testimonio.rating)}
        </div>
        <p className="card-text text-light mb-4 fst-italic" style={{ opacity: '0.9' }}>
          "{testimonio.comentario}"
        </p>
        <div className="d-flex align-items-center">
          <div className="rounded-circle disco-gradient d-flex align-items-center justify-content-center text-white fw-bold me-3"
               style={{ width: '40px', height: '40px' }}>
            {testimonio.nombre.charAt(0)}
          </div>
          <div>
            <div className="text-white fw-semibold">{testimonio.nombre}</div>
            <div className="text-secondary small">{testimonio.fecha}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
