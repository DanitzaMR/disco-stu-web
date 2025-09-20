import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventos } from '../mockData';
import { useAuth } from '../hooks/useAuth';

/**
 * 🎫 COMPONENTE EVENTDETAIL - GESTIÓN COMPLEJA DE RESERVAS
 * 
 * FUNCIONALIDADES REACT IMPLEMENTADAS:
 * - useParams: Hook de React Router para obtener parámetros de URL
 * - useState múltiple: Gestión de estados complejos anidados
 * - Custom Hooks: useAuth para acceder al contexto de autenticación
 * - Conditional Rendering: Mostrar diferentes UI según estado
 * - Form Handling: Formulario de reserva con validaciones
 * - localStorage: Persistencia de reservas por usuario
 * - Early Return: Patrón para manejo de casos edge
 */

const EventDetail = () => {
  // 🧭 HOOKS DE REACT ROUTER - Obtener parámetros de URL
  const { eventId } = useParams(); // Extrae :eventId de la URL /eventos/:eventId
  
  // 🔐 CUSTOM HOOK - Acceso al contexto de autenticación
  const { user, isAuthenticated } = useAuth(); // Desestructuring del contexto
  
  // 🔍 BÚSQUEDA DE DATOS - Encontrar evento por ID
  // parseInt() convierte string de URL a number para comparación
  const evento = eventos.find(e => e.id === parseInt(eventId));
  
  // 📋 ESTADOS MÚLTIPLES - Gestión compleja de formulario de reserva
  
  // Boolean para mostrar/ocultar formulario (UI state)
  const [showReservationForm, setShowReservationForm] = useState(false);
  
  // Objeto con datos del formulario - ESTADO INICIAL INTELIGENTE
  const [reservationData, setReservationData] = useState({
    cantidad: 1,
    nombre: user?.name || '',     // Optional chaining: usa nombre del usuario si existe
    email: user?.email || '',     // Fallback a string vacío si no hay usuario
    telefono: '',
    comentarios: ''
  });
  
  // Objeto para errores de validación (dinámico)
  const [errors, setErrors] = useState({});
  
  // Boolean para estado de carga durante envío
  const [loading, setLoading] = useState(false);
  
  // Boolean para mostrar mensaje de éxito
  const [reservationSuccess, setReservationSuccess] = useState(false);

  // 🚨 EARLY RETURN PATTERN - Manejo de caso edge
  // Si no existe el evento, renderizar error inmediatamente
  if (!evento) {
    console.log('❌ Evento no encontrado:', eventId);
    return (
      <div className="min-vh-100 bg-disco-dark d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="display-1 mb-4">😕</div>
          <h2 className="h3 fw-bold text-white mb-4">Evento no encontrado</h2>
          <p className="text-secondary mb-4">El evento que buscas no existe o ha sido eliminado.</p>
          <Link 
            to="/eventos" 
            className="btn btn-disco btn-lg rounded-pill fw-semibold px-4"
          >
            Ver Todos los Eventos
          </Link>
        </div>
      </div>
    );
  }

  // 📅 FUNCIÓN HELPER - Formateo de datos (función pura)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar errores cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validar formulario de reserva
  const validateReservation = () => {
    const newErrors = {};

    if (!reservationData.cantidad || reservationData.cantidad < 1) {
      newErrors.cantidad = 'La cantidad debe ser al menos 1';
    }
    if (reservationData.cantidad > evento.disponibles) {
      newErrors.cantidad = `Solo hay ${evento.disponibles} lugares disponibles`;
    }
    if (!reservationData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    if (!reservationData.email.trim()) {
      newErrors.email = 'El email es requerido';
    }
    if (!reservationData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }

    return newErrors;
  };

  // Enviar reserva
  const handleReservationSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateReservation();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);

    // Simular procesamiento
    setTimeout(() => {
      // Crear la reserva
      const nuevaReserva = {
        id: Date.now().toString(),
        eventoId: evento.id,
        eventoTitulo: evento.titulo,
        eventoFecha: evento.fecha,
        eventoHora: evento.hora,
        eventoImagen: evento.imagen,
        eventoPrecio: evento.precio,
        cantidad: parseInt(reservationData.cantidad),
        nombre: reservationData.nombre,
        email: reservationData.email,
        telefono: reservationData.telefono,
        comentarios: reservationData.comentarios,
        fechaReserva: new Date().toISOString(),
        estado: 'confirmada',
        total: parseFloat(evento.precio.replace('$', '')) * parseInt(reservationData.cantidad)
      };

      // Obtener reservas existentes del usuario
      const existingReservations = JSON.parse(localStorage.getItem('userReservations')) || {};
      const userReservations = existingReservations[user.id] || [];
      
      // Agregar nueva reserva
      userReservations.push(nuevaReserva);
      existingReservations[user.id] = userReservations;
      
      // Guardar en localStorage
      localStorage.setItem('userReservations', JSON.stringify(existingReservations));

      setLoading(false);
      setReservationSuccess(true);
      setShowReservationForm(false);

      // Mostrar mensaje de éxito por 3 segundos
      setTimeout(() => {
        setReservationSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-vh-100 bg-disco-dark py-4">
      <div className="container">
        
        {/* Breadcrumb */}
        <div className="mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none">Inicio</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/eventos" className="text-decoration-none">Eventos</Link>
              </li>
              <li className="breadcrumb-item active text-disco-purple" aria-current="page">
                {evento.titulo}
              </li>
            </ol>
          </nav>
        </div>

        {/* Mensaje de éxito */}
        {reservationSuccess && (
          <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
            <i className="bi bi-check-circle-fill me-2"></i>
            <div>
              <div className="fw-bold">¡Reserva realizada con éxito!</div>
              <small>Puedes ver tu reserva en tu perfil. Te enviaremos un email de confirmación.</small>
            </div>
          </div>
        )}

        <div className="row g-4">
          
          <div className="col-lg-8">
            
            {/* Imagen principal */}
            <div className="position-relative mb-4">
              <img 
                src={evento.imagen} 
                alt={evento.titulo}
                className="img-fluid rounded shadow-lg"
                style={{ height: '400px', width: '100%', objectFit: 'cover' }}
              />
              <div className="position-absolute top-0 end-0 m-3 d-flex flex-column gap-2">
                <span className="badge bg-disco-pink text-white px-3 py-2 rounded-pill fs-5 fw-bold">
                  {evento.precio}
                </span>
                <span className={`badge text-white px-3 py-2 rounded-pill fw-semibold ${
                  evento.disponibles > 50 ? 'bg-success' :
                  evento.disponibles > 20 ? 'bg-warning' : 'bg-danger'
                }`}>
                  {evento.disponibles} disponibles
                </span>
              </div>
            </div>

            {/* Título y información básica */}
            <div className="mb-4">
              <h1 className="display-4 fw-bold text-white mb-4">
                {evento.titulo}
              </h1>
              
              <div className="d-flex flex-wrap gap-3 text-light mb-4" style={{ opacity: '0.9' }}>
                <div className="d-flex align-items-center">
                  <i className="bi bi-calendar3 me-2"></i>
                  <span>{formatDate(evento.fecha)}</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-clock me-2"></i>
                  <span>{evento.hora}</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt me-2"></i>
                  <span>{evento.ubicacion}</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge bg-disco-purple text-white px-3 py-2 rounded-pill fw-semibold">
                  {evento.categoria}
                </span>
                <span className="badge bg-secondary text-light px-3 py-2 rounded-pill">
                  Edad mínima: {evento.edadMinima}+ años
                </span>
                <span className="badge bg-secondary text-light px-3 py-2 rounded-pill">
                  Duración: {evento.duracion}
                </span>
              </div>
            </div>

            {/* Descripción detallada */}
            <div className="card card-disco border-0 p-4 mb-4">
              <h2 className="h4 fw-bold text-white mb-3">Descripción del Evento</h2>
              <p className="text-light mb-4" style={{ opacity: '0.9', lineHeight: '1.6' }}>
                {evento.descripcionDetallada}
              </p>
              
              {/* Información del DJ */}
              <div className="bg-disco-light-gray rounded p-3 mb-3">
                <h3 className="h6 fw-semibold text-white mb-2">🎧 DJ Principal</h3>
                <p className="text-light mb-0" style={{ opacity: '0.8' }}>{evento.dj}</p>
              </div>

              {/* Dress code */}
              <div className="bg-disco-light-gray rounded p-3">
                <h3 className="h6 fw-semibold text-white mb-2">👔 Código de Vestimenta</h3>
                <p className="text-light mb-0" style={{ opacity: '0.8' }}>{evento.dresscode}</p>
              </div>
            </div>

            {/* Video promocional */}
            <div className="card card-disco border-0 p-4 mb-4">
              <h2 className="h4 fw-bold text-white mb-3">Video Promocional</h2>
              <div className="ratio ratio-16x9">
                <iframe
                  src={evento.videoUrl}
                  title={`Video de ${evento.titulo}`}
                  className="rounded"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Incluye */}
            <div className="card card-disco border-0 p-4">
              <h2 className="h4 fw-bold text-white mb-3">¿Qué incluye?</h2>
              <ul className="list-unstyled">
                {evento.incluye.map((item, index) => (
                  <li key={index} className="d-flex align-items-center text-light mb-2">
                    <span className="text-success me-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Premios (si los hay) */}
              {evento.premios && (
                <div className="mt-4">
                  <h3 className="h5 fw-semibold text-white mb-3">🏆 Premios</h3>
                  <ul className="list-unstyled">
                    {evento.premios.map((premio, index) => (
                      <li key={index} className="d-flex align-items-center text-light mb-2">
                        <span className="text-warning me-2">★</span>
                        {premio}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Columna lateral - Formulario de reserva */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '2rem' }}>
              
              <div className="card card-disco border-0 p-4 mb-4">
                <h3 className="h5 fw-bold text-white mb-3">Información del Evento</h3>
                
                <div className="d-flex flex-column gap-2 small">
                  <div className="d-flex justify-content-between">
                    <span className="text-secondary">Precio:</span>
                    <span className="text-white fw-semibold">{evento.precio}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-secondary">Capacidad:</span>
                    <span className="text-white">{evento.capacidad} personas</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-secondary">Disponibles:</span>
                    <span className={`fw-semibold ${
                      evento.disponibles > 50 ? 'text-success' :
                      evento.disponibles > 20 ? 'text-warning' : 'text-danger'
                    }`}>
                      {evento.disponibles} lugares
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-secondary">Duración:</span>
                    <span className="text-white">{evento.duracion}</span>
                  </div>
                </div>
              </div>

              {/* Formulario de reserva */}
              {isAuthenticated() ? (
                <div className="card card-disco border-0 p-4">
                  <h3 className="h5 fw-bold text-white mb-4">Hacer Reserva</h3>
                  
                  {!showReservationForm ? (
                    <button
                      onClick={() => setShowReservationForm(true)}
                      className="btn btn-disco w-100 fw-semibold"
                    >
                      Reservar Ahora
                    </button>
                  ) : (
                    <form onSubmit={handleReservationSubmit}>
                      
                      {/* Cantidad */}
                      <div className="mb-3">
                        <label className="form-label fw-bold text-disco-purple">
                          Cantidad de personas
                        </label>
                        <input
                          type="number"
                          name="cantidad"
                          min="1"
                          max={evento.disponibles}
                          value={reservationData.cantidad}
                          onChange={handleInputChange}
                          className={`form-control form-control-disco ${
                            errors.cantidad ? 'is-invalid' : ''
                          }`}
                        />
                        {errors.cantidad && <div className="invalid-feedback">{errors.cantidad}</div>}
                      </div>

                      {/* Nombre */}
                      <div className="mb-3">
                        <label className="form-label fw-bold text-disco-purple">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          value={reservationData.nombre}
                          onChange={handleInputChange}
                          className={`form-control form-control-disco ${
                            errors.nombre ? 'is-invalid' : ''
                          }`}
                        />
                        {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <label className="form-label fw-bold text-disco-purple">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={reservationData.email}
                          onChange={handleInputChange}
                          className={`form-control form-control-disco ${
                            errors.email ? 'is-invalid' : ''
                          }`}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>

                      {/* Teléfono */}
                      <div className="mb-3">
                        <label className="form-label fw-bold text-disco-purple">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          value={reservationData.telefono}
                          onChange={handleInputChange}
                          className={`form-control form-control-disco ${
                            errors.telefono ? 'is-invalid' : ''
                          }`}
                        />
                        {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                      </div>

                      {/* Comentarios */}
                      <div className="mb-3">
                        <label className="form-label fw-bold text-disco-purple">
                          Comentarios (opcional)
                        </label>
                        <textarea
                          name="comentarios"
                          rows="3"
                          value={reservationData.comentarios}
                          onChange={handleInputChange}
                          className="form-control form-control-disco"
                          placeholder="Solicitudes especiales, alergias, etc."
                        ></textarea>
                      </div>

                      {/* Total */}
                      <div className="card bg-disco-light-gray border-0 p-3 mb-3">
                        <div className="d-flex justify-content-between h5 fw-bold text-white mb-0">
                          <span>Total:</span>
                          <span>${(parseFloat(evento.precio.replace('$', '')) * reservationData.cantidad).toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Botones */}
                      <div className="d-flex gap-3">
                        <button
                          type="button"
                          onClick={() => setShowReservationForm(false)}
                          className="btn btn-outline-secondary flex-fill"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className={`btn flex-fill fw-semibold ${
                            loading 
                              ? 'btn-secondary' 
                              : 'btn-disco'
                          }`}
                        >
                          {loading ? 'Procesando...' : 'Confirmar Reserva'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ) : (
                /* Usuario no autenticado */
                <div className="card card-disco border-0 p-4 text-center">
                  <div className="display-4 mb-4">🔒</div>
                  <h3 className="h5 fw-bold text-white mb-2">Inicia Sesión para Reservar</h3>
                  <p className="text-secondary mb-4">Necesitas una cuenta para hacer reservas</p>
                  <div className="d-flex flex-column gap-3">
                    <Link
                      to="/login"
                      state={{ from: { pathname: `/eventos/${eventId}` } }}
                      className="btn btn-disco fw-semibold text-decoration-none"
                    >
                      Iniciar Sesión
                    </Link>
                    <Link
                      to="/register"
                      className="btn btn-outline-light fw-semibold text-decoration-none"
                    >
                      Crear Cuenta
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
