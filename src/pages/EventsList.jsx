import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { eventos } from '../mockData';

const EventsList = () => {
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  
  // Obtener categorías únicas para el filtro
  const categorias = ['todos', ...new Set(eventos.map(evento => evento.categoria))];
  
  // Filtrar eventos según la categoría seleccionada
  const eventosFiltrados = filtroCategoria === 'todos' 
    ? eventos 
    : eventos.filter(evento => evento.categoria === filtroCategoria);

  // Función para formatear fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Función para obtener color de categoría
  const getCategoryColor = (categoria) => {
    const colors = {
      'Clásico': 'bg-disco-purple',
      'Competencia': 'bg-danger',
      'Especial': 'bg-warning',
      'Karaoke': 'bg-success'
    };
    return colors[categoria] || 'bg-secondary';
  };

  return (
    <div className="min-vh-100 bg-disco-dark py-5">
      <div className="container">
        
        {/* Encabezado */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-white mb-4">
            <span className="neon-text">Eventos</span> Disponibles
          </h1>
          <p className="fs-5 text-light mx-auto" style={{ maxWidth: '600px', opacity: '0.9' }}>
            Descubre todos nuestros eventos y vive la experiencia disco más increíble
          </p>
          <div className="disco-gradient mx-auto mt-4" style={{ width: '80px', height: '4px' }}></div>
        </div>

        {/* Filtros */}
        <div className="mb-4">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setFiltroCategoria(categoria)}
                className={`btn rounded-pill fw-semibold px-4 ${
                  filtroCategoria === categoria
                    ? 'btn-disco shadow'
                    : 'btn-outline-light'
                }`}
              >
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Contador de eventos */}
        <div className="text-center mb-4">
          <p className="text-secondary">
            Mostrando <span className="text-disco-purple fw-semibold">{eventosFiltrados.length}</span> 
            {eventosFiltrados.length === 1 ? ' evento' : ' eventos'}
            {filtroCategoria !== 'todos' && ` en la categoría "${filtroCategoria}"`}
          </p>
        </div>

        {/* Grid de eventos */}
        <div className="row g-4">
          {eventosFiltrados.map((evento) => (
            <div key={evento.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card card-disco h-100 border-0 shadow hover-lift">
                
                {/* Imagen del evento */}
                <div className="position-relative">
                  <img 
                    src={evento.imagen} 
                    alt={evento.titulo}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  
                  {/* Precio y disponibilidad */}
                  <div className="position-absolute top-0 end-0 m-3 d-flex flex-column gap-2">
                    <span className="badge bg-disco-pink text-white px-3 py-2 rounded-pill fw-bold">
                      {evento.precio}
                    </span>
                    <span className={`badge text-white px-2 py-1 rounded fw-semibold ${
                      evento.disponibles > 50 ? 'bg-success' :
                      evento.disponibles > 20 ? 'bg-warning' : 'bg-danger'
                    }`}>
                      {evento.disponibles} disponibles
                    </span>
                  </div>
                  
                  {/* Categoría */}
                  <div className="position-absolute bottom-0 start-0 m-3">
                    <span className={`badge ${getCategoryColor(evento.categoria)} text-white px-2 py-1 rounded fw-semibold`}>
                      {evento.categoria}
                    </span>
                  </div>
                </div>
                
                {/* Contenido de la tarjeta */}
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title h6 fw-bold text-white mb-2 hover-text-disco">
                    {evento.titulo}
                  </h3>
                  
                  {/* Fecha y hora */}
                  <div className="d-flex align-items-center text-light mb-2" style={{ opacity: '0.8' }}>
                    <i className="bi bi-calendar3 me-2"></i>
                    <span className="small">
                      {formatDate(evento.fecha)}
                    </span>
                  </div>

                  {/* Hora y ubicación */}
                  <div className="d-flex align-items-center text-light mb-3" style={{ opacity: '0.8' }}>
                    <i className="bi bi-clock me-2"></i>
                    <span className="small">
                      {evento.hora} • {evento.ubicacion}
                    </span>
                  </div>
                  
                  {/* Descripción corta */}
                  <p className="card-text text-light small mb-3 flex-grow-1" 
                     style={{ opacity: '0.8', lineHeight: '1.4' }}>
                    {evento.descripcion}
                  </p>
                  
                  {/* Información adicional */}
                  <div className="d-flex justify-content-between align-items-center text-secondary small mb-3">
                    <span>DJ: {evento.dj}</span>
                    <span>{evento.duracion}</span>
                  </div>
                  
                  {/* Botón para ver detalles */}
                  <Link 
                    to={`/eventos/${evento.id}`}
                    className="btn btn-disco w-100 fw-semibold rounded-pill"
                  >
                    Ver Detalles 
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay eventos */}
        {eventosFiltrados.length === 0 && (
          <div className="text-center py-5">
            <div className="display-1 mb-4">🎭</div>
            <h3 className="h4 fw-bold text-white mb-2">No hay eventos disponibles</h3>
            <p className="text-secondary">Intenta con otra categoría o vuelve pronto para ver nuevos eventos.</p>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-5 text-center">
          <div className="card card-disco border-0 p-5">
            <h3 className="h4 fw-bold text-white mb-3">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-light mb-4" style={{ opacity: '0.9' }}>
              Contáctanos para eventos privados o solicita información sobre próximos eventos especiales
            </p>
            <Link 
              to="/contacto"
              className="btn btn-disco btn-lg rounded-pill fw-semibold px-4"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
