import React from 'react';

const PromoCard = ({ promocion }) => {
  // Función simple para formatear fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Función para obtener color según tipo
  const getTypeColor = (tipo) => {
    const colors = {
      'Bebidas': 'bg-info',
      'Grupos': 'bg-success',
      'Cumpleaños': 'bg-disco-pink',
      'Estudiantes': 'bg-disco-purple'
    };
    return colors[tipo] || 'bg-secondary';
  };

  return (
    <div className="card card-disco h-100 border-0 shadow hover-lift">
      {/* Imagen de la promoción */}
      <div className="position-relative">
        <img 
          src={promocion.imagen} 
          alt={promocion.titulo}
          className="card-img-top"
          style={{ height: '160px', objectFit: 'cover' }}
        />
        {/* Descuento destacado */}
        <div className="position-absolute top-0 start-0 m-3">
          <span className="badge bg-success text-white px-3 py-2 rounded-pill fw-bold fs-6">
            -{promocion.descuento}
          </span>
        </div>
        {/* Tipo de promoción */}
        <div className="position-absolute top-0 end-0 m-3">
          <span className={`badge ${getTypeColor(promocion.tipo)} text-white px-2 py-1 rounded fw-semibold`}>
            {promocion.tipo}
          </span>
        </div>
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h6 fw-bold text-white mb-2 hover-text-success">
          {promocion.titulo}
        </h3>
        
        <p className="card-text text-light small mb-4 flex-grow-1" style={{ opacity: '0.8' }}>
          {promocion.descripcion}
        </p>
        
        {/* Footer con fecha y botón */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center text-secondary small">
            <i className="bi bi-clock me-1"></i>
            <span>Hasta {formatDate(promocion.validoHasta)}</span>
          </div>
          
          <button className="btn btn-success btn-sm rounded-pill fw-semibold px-3">
            Usar Promo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
