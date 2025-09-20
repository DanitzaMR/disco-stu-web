import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ evento }) => {
  // Función simple para formatear fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Link to={`/eventos/${evento.id}`} className="text-decoration-none">
      <div className="card card-disco h-100 border-0 shadow hover-lift">
        {/* Imagen del evento */}
        <div className="position-relative">
          <img 
            src={evento.imagen} 
            alt={evento.titulo}
            className="card-img-top"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          {/* Precio en esquina */}
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge bg-disco-pink text-white px-3 py-2 rounded-pill fw-bold">
              {evento.precio}
            </span>
          </div>
          {/* Categoría en esquina inferior */}
          <div className="position-absolute bottom-0 start-0 m-3">
            <span className="badge bg-disco-purple text-white px-2 py-1 rounded fw-semibold">
              {evento.categoria}
            </span>
          </div>
        </div>
        
        {/* Contenido de la tarjeta */}
        <div className="card-body d-flex flex-column">
          <h3 className="card-title h5 fw-bold text-white mb-2 hover-text-disco">
            {evento.titulo}
          </h3>
          
          {/* Fecha y hora */}
          <div className="d-flex align-items-center text-light mb-3" style={{ opacity: '0.8' }}>
            <i className="bi bi-calendar3 me-2"></i>
            <span className="small">
              {formatDate(evento.fecha)} • {evento.hora}
            </span>
          </div>
          
          {/* Descripción */}
          <p className="card-text text-light small mb-4 flex-grow-1" 
             style={{ opacity: '0.8', lineHeight: '1.4' }}>
            {evento.descripcion}
          </p>
          
          {/* Botón de acción */}
          <div className="btn btn-disco w-100 fw-semibold rounded-pill">
            Ver Detalles 
            <i className="bi bi-arrow-right ms-2"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
