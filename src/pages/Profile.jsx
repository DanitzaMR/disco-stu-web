import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [reservas, setReservas] = useState([]);

  // Cargar reservas del usuario al montar el componente
  useEffect(() => {
    if (user) {
      const allReservations = JSON.parse(localStorage.getItem('userReservations')) || {};
      const userReservations = allReservations[user.id] || [];
      setReservas(userReservations);
    }
  }, [user]);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Función para cancelar reserva
  const handleCancelReservation = (reservaId) => {
    if (window.confirm('¿Estás seguro de que quieres cancelar esta reserva?')) {
      const allReservations = JSON.parse(localStorage.getItem('userReservations')) || {};
      const userReservations = allReservations[user.id] || [];
      
      // Filtrar la reserva cancelada
      const updatedReservations = userReservations.filter(r => r.id !== reservaId);
      allReservations[user.id] = updatedReservations;
      
      // Actualizar localStorage
      localStorage.setItem('userReservations', JSON.stringify(allReservations));
      
      // Actualizar estado local
      setReservas(updatedReservations);
    }
  };

  // Formatear fecha de registro
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Formatear fecha para reservas
  const formatEventDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-vh-100 py-5">
      <div className="container">
        
        {/* Encabezado del perfil */}
        <div className="card card-disco mb-4">
          <div className="card-body p-4">
            <div className="row align-items-center">
              
              {/* Avatar */}
              <div className="col-12 col-md-auto text-center mb-3 mb-md-0">
                <div className="disco-ball rounded-circle d-inline-flex align-items-center justify-content-center" 
                     style={{ width: '6rem', height: '6rem', fontSize: '2.5rem' }}>
                  🕺
                </div>
              </div>
              
              {/* Información del usuario */}
              <div className="col-12 col-md text-center text-md-start">
                <h1 className="h3 fw-bold text-white mb-2">
                  ¡Hola, <span className="neon-text">{user.name}</span>!
                </h1>
                <p className="text-light opacity-75 mb-3">
                  Bienvenido a tu perfil de Disco Stu
                </p>
                
                {/* Información adicional */}
                <div className="d-flex flex-column gap-1">
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <span className="me-2">📧</span>
                    <small className="text-light">{user.email}</small>
                  </div>
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <span className="me-2">📅</span>
                    <small className="text-light">Miembro desde {formatDate(user.createdAt)}</small>
                  </div>
                </div>
              </div>
              
              {/* Botón de cerrar sesión */}
              <div className="col-12 col-md-auto text-center mt-3 mt-md-0">
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de estadísticas */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card card-disco text-center">
              <div className="card-body">
                <div className="h2 fw-bold mb-2" style={{ color: 'var(--disco-purple)' }}>{reservas.length}</div>
                <div className="text-light opacity-75">Reservas Totales</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-disco text-center">
              <div className="card-body">
                <div className="h2 fw-bold mb-2" style={{ color: 'var(--disco-pink)' }}>
                  {reservas.filter(r => r.estado === 'confirmada').length}
                </div>
                <div className="text-light opacity-75">Reservas Activas</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-disco text-center">
              <div className="card-body">
                <div className="h2 fw-bold mb-2" style={{ color: 'var(--disco-blue)' }}>
                  {reservas.length > 0 ? '🌟' : '🆕'}
                </div>
                <div className="text-light opacity-75">
                  {reservas.length > 2 ? 'Bailarín Experto' : reservas.length > 0 ? 'Bailarín Activo' : 'Bailarín Novato'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de reservas */}
        <div className="card card-disco">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="h4 fw-bold text-white d-flex align-items-center mb-0">
                <span className="me-2">🎫</span>
                Mis Reservas ({reservas.length})
              </h2>
              <Link
                to="/eventos"
                className="btn btn-disco btn-sm"
              >
                + Nueva Reserva
              </Link>
            </div>
            
            {reservas.length === 0 ? (
              /* Mensaje cuando no hay reservas */
              <div className="text-center py-5">
                <div style={{ fontSize: '4rem' }} className="mb-3">🎭</div>
                <p className="text-light opacity-75 fs-5 mb-3">
                  Aún no tienes ninguna reserva
                </p>
                <p className="text-light opacity-50 mb-4">
                  ¡Explora nuestros eventos y haz tu primera reserva!
                </p>
                <Link
                  to="/eventos"
                  className="btn btn-disco px-4"
                >
                  Ver Eventos Disponibles
                </Link>
              </div>
            ) : (
              /* Lista de reservas */
              <div className="d-flex flex-column gap-3">
                {reservas.map((reserva) => (
                  <div key={reserva.id} className="border rounded p-3" style={{ borderColor: 'var(--disco-light-gray)', backgroundColor: 'var(--disco-light-gray)' }}>
                    <div className="row g-3">
                      
                      {/* Imagen del evento */}
                      <div className="col-12 col-md-auto">
                        <img 
                          src={reserva.eventoImagen} 
                          alt={reserva.eventoTitulo}
                          className="img-fluid rounded"
                          style={{ width: '100%', maxWidth: '8rem', height: '8rem', objectFit: 'cover' }}
                        />
                      </div>
                      
                      {/* Información de la reserva */}
                      <div className="col">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                          <div>
                            <h3 className="h5 fw-bold text-white mb-2">
                              {reserva.eventoTitulo}
                            </h3>
                            <div className="d-flex flex-column gap-1">
                              <div className="d-flex align-items-center">
                                <span className="me-2">📅</span>
                                <small className="text-light">{formatEventDate(reserva.eventoFecha)} • {reserva.eventoHora}</small>
                              </div>
                              <div className="d-flex align-items-center">
                                <span className="me-2">👥</span>
                                <small className="text-light">{reserva.cantidad} {reserva.cantidad === 1 ? 'persona' : 'personas'}</small>
                              </div>
                              <div className="d-flex align-items-center">
                                <span className="me-2">💰</span>
                                <small className="text-light">Total: ${reserva.total}</small>
                              </div>
                              <div className="d-flex align-items-center">
                                <span className="me-2">📞</span>
                                <small className="text-light">{reserva.telefono}</small>
                              </div>
                            </div>
                          </div>
                          
                          {/* Estado y acciones */}
                          <div className="d-flex flex-column align-items-end gap-2">
                            <span className={`badge ${
                              reserva.estado === 'confirmada' 
                                ? 'bg-success' 
                                : 'bg-secondary'
                            }`}>
                              {reserva.estado === 'confirmada' ? 'Confirmada' : 'Pendiente'}
                            </span>
                            
                            <div className="d-flex gap-2">
                              <Link
                                to={`/eventos/${reserva.eventoId}`}
                                className="btn btn-link btn-sm p-0 hover-text-disco"
                              >
                                Ver Evento
                              </Link>
                              <button
                                onClick={() => handleCancelReservation(reserva.id)}
                                className="btn btn-link btn-sm p-0 text-danger hover-text-danger"
                              >
                                Cancelar
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Comentarios si los hay */}
                        {reserva.comentarios && (
                          <div className="p-2 rounded mb-2" style={{ backgroundColor: 'var(--disco-gray)' }}>
                            <h4 className="small fw-semibold text-light opacity-75 mb-1">Comentarios:</h4>
                            <p className="small text-light opacity-50 mb-0">{reserva.comentarios}</p>
                          </div>
                        )}
                        
                        {/* Fecha de reserva */}
                        <div className="text-light opacity-50" style={{ fontSize: '0.75rem' }}>
                          Reservado el {formatDate(reserva.fechaReserva)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sección de acciones rápidas */}
        <div className="row g-3 mt-4">
          <div className="col-md-6">
            <div className="card card-disco">
              <div className="card-body">
                <h3 className="h5 fw-bold text-white mb-3">🎵 Próximos Eventos</h3>
                <p className="text-light opacity-75 mb-3">
                  Descubre los eventos más emocionantes que vienen
                </p>
                <Link
                  to="/eventos"
                  className="hover-text-disco fw-semibold text-decoration-none"
                >
                  Ver Eventos →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card card-disco">
              <div className="card-body">
                <h3 className="h5 fw-bold text-white mb-3">🎁 Promociones</h3>
                <p className="text-light opacity-75 mb-3">
                  Aprovecha nuestras ofertas especiales
                </p>
                <Link
                  to="/"
                  className="hover-text-success fw-semibold text-decoration-none"
                >
                  Ver Promociones →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
