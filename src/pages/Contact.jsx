import React, { useState } from 'react';

/**
 * 📧 COMPONENTE CONTACT - FORMULARIO COMPLEJO CON VALIDACIONES
 * 
 * FUNCIONALIDADES REACT IMPLEMENTADAS:
 * - useState múltiple: Gestión de estado complejo para formulario
 * - Controlled Components: Todos los inputs están controlados por React
 * - Event Handling: Manejo de eventos onChange y onSubmit
 * - Conditional Rendering: Mostrar/ocultar mensajes y errores dinámicamente
 * - Form Validation: Validación en tiempo real y al enviar
 * - localStorage: Persistencia de mensajes de contacto
 */

const Contact = () => {
  // 📋 ESTADO DEL FORMULARIO - useState con objeto
  // Controlled Components: React controla completamente el valor de cada input
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  // ❌ ESTADO DE ERRORES - Objeto dinámico para validaciones en tiempo real
  const [errors, setErrors] = useState({});
  
  // ⏳ ESTADO DE CARGA - Boolean para UX durante el envío
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 💬 ESTADO DE MENSAJE - String para feedback al usuario
  const [submitMessage, setSubmitMessage] = useState('');

  // 🎯 MANEJADOR DE CAMBIOS - PATRÓN CONTROLLED COMPONENTS
  // Esta función se ejecuta cada vez que el usuario escribe en cualquier input
  const handleInputChange = (e) => {
    // Destructuring para obtener name y value del input que cambió
    const { name, value } = e.target;
    
    console.log(`📝 Campo ${name} cambió a:`, value);
    
    // 🔄 ACTUALIZACIÓN INMUTABLE DEL ESTADO
    // Usamos función callback con el estado previo para evitar conflictos
    setFormData(prev => ({
      ...prev,        // Spread: mantener todos los campos existentes
      [name]: value   // Computed property: actualizar solo el campo que cambió
    }));
    
    // 🧹 LIMPIEZA DE ERRORES EN TIEMPO REAL
    // Si el campo tenía error, lo eliminamos cuando el usuario empieza a corregir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''  // Limpiar error específico del campo
      }));
    }
  };

  // ✅ FUNCIÓN DE VALIDACIÓN - LÓGICA DE NEGOCIO PURA
  // Función pura que recibe datos y retorna errores (sin efectos secundarios)
  const validateForm = () => {
    console.log('🔍 Validando formulario...');
    const newErrors = {};

    // Validación de nombre - required field
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    // Validación de email - required + formato
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    // Validación de teléfono - required + formato numérico
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else if (!/^\d{10,}$/.test(formData.telefono.replace(/\D/g, ''))) {
      newErrors.telefono = 'El teléfono debe tener al menos 10 dígitos';
    }

    // Validación de asunto - required
    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es obligatorio';
    }

    // Validación de mensaje - required + longitud mínima
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    console.log('📊 Errores encontrados:', Object.keys(newErrors).length);
    return newErrors;
  };

  // 📤 MANEJADOR DE ENVÍO - FUNCIÓN ASYNC CON SIMULACIÓN Y PERSISTENCIA
  // Esta función maneja todo el flujo de envío del formulario
  const handleSubmit = async (e) => {
    // Prevenir comportamiento default del form (recarga de página)
    e.preventDefault();
    
    console.log('📤 Iniciando envío de formulario...');
    
    // 🔍 VALIDACIÓN PREVIA AL ENVÍO
    const newErrors = validateForm();
    
    // Si hay errores, mostrarlos y detener el envío
    if (Object.keys(newErrors).length > 0) {
      console.log('❌ Formulario inválido, mostrando errores');
      setErrors(newErrors);
      return; // Early return - no continuar con el envío
    }

    // 🔄 CAMBIAR ESTADOS PARA UX
    setIsSubmitting(true);  // Mostrar loading al usuario
    setErrors({});          // Limpiar errores previos

    try {
      console.log('⏳ Simulando envío del formulario...');
      
      // 🕐 SIMULACIÓN DE REQUEST ASYNC (en producción sería fetch/axios)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 💾 PERSISTENCIA EN localStorage - OPERACIÓN CRUD
      console.log('💾 Guardando mensaje en localStorage...');
      
      // 1. LEER: Obtener mensajes existentes
      const contactos = JSON.parse(localStorage.getItem('contactos') || '[]');
      
      // 2. CREAR: Nuevo mensaje con metadatos
      const nuevoContacto = {
        ...formData,                        // Spread: copiar todos los campos del form
        id: Date.now(),                     // ID único basado en timestamp
        fecha: new Date().toISOString(),    // Timestamp de creación
        estado: 'pendiente'                 // Estado inicial
      };
      
      // 3. ACTUALIZAR: Agregar al array y guardar
      contactos.push(nuevoContacto);
      localStorage.setItem('contactos', JSON.stringify(contactos));
      
      console.log('✅ Mensaje guardado exitosamente');

      // 🎉 ACTUALIZAR UI CON FEEDBACK POSITIVO
      setSubmitMessage('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
      
      // 🧹 RESETEAR FORMULARIO - Volver al estado inicial
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
      
    } catch (error) {
      console.error('❌ Error al enviar:', error);
      setSubmitMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      // 🔄 LIMPIAR ESTADO DE LOADING - Siempre se ejecuta (éxito o error)
      setIsSubmitting(false);
      console.log('🏁 Proceso de envío finalizado');
    }
  };

  // 🎨 RENDER - JSX CON CONDITIONAL RENDERING
  return (
    <div className="min-vh-100 bg-disco-dark text-white">
      {/* Header */}
      <div className="disco-gradient-bg py-5">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-4 neon-text">
            Contacto
          </h1>
          <p className="fs-5 text-light mx-auto" style={{ maxWidth: '500px', opacity: '0.8' }}>
            ¿Tienes alguna pregunta o quieres organizar un evento especial? ¡Contáctanos!
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* Formulario de contacto */}
          <div className="col-lg-6">
            <div className="card card-disco p-4">
              <h2 className="h3 fw-bold mb-4 text-disco-purple">
                Envíanos un mensaje
              </h2>

              {submitMessage && (
                <div className={`alert mb-4 ${
                  submitMessage.includes('Error') 
                    ? 'alert-danger' 
                    : 'alert-success'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Nombre */}
                <div className="mb-3">
                  <label className="form-label fw-bold text-disco-purple">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={`form-control form-control-disco ${errors.nombre ? 'is-invalid' : ''}`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.nombre && (
                    <div className="invalid-feedback">{errors.nombre}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-bold text-disco-purple">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-control form-control-disco ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Teléfono */}
                <div className="mb-3">
                  <label className="form-label fw-bold text-disco-purple">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={`form-control form-control-disco ${errors.telefono ? 'is-invalid' : ''}`}
                    placeholder="Tu número de teléfono"
                  />
                  {errors.telefono && (
                    <div className="invalid-feedback">{errors.telefono}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold text-disco-purple">
                    Asunto *
                  </label>
                  <select
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    className={`form-select form-control-disco ${errors.asunto ? 'is-invalid' : ''}`}
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="reserva">Reserva de evento</option>
                    <option value="evento-privado">Evento privado</option>
                    <option value="informacion">Información general</option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="quejas">Quejas y sugerencias</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.asunto && (
                    <div className="invalid-feedback">{errors.asunto}</div>
                  )}
                </div>

                {/* Mensaje */}
                <div className="mb-4">
                  <label className="form-label fw-bold text-disco-purple">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows="5"
                    className={`form-control form-control-disco ${errors.mensaje ? 'is-invalid' : ''}`}
                    placeholder="Escribe tu mensaje aquí..."
                  />
                  {errors.mensaje && (
                    <div className="invalid-feedback">{errors.mensaje}</div>
                  )}
                </div>

                {/* Botón enviar */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn w-100 btn-lg fw-bold ${
                    isSubmitting ? 'btn-secondary' : 'btn-disco'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {/* Información de contacto */}
              <div className="card card-disco p-4">
                <h2 className="h3 fw-bold mb-4 text-disco-purple">
                  Información de contacto
                </h2>
                
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-disco-purple rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                      <i className="bi bi-geo-alt text-white fs-5"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold text-disco-purple mb-1">Dirección</h5>
                      <p className="text-light mb-0">Avenida Siempreviva 742<br />Springfield, EE.UU.</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-disco-purple rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                      <i className="bi bi-telephone text-white fs-5"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold text-disco-purple mb-1">Teléfono</h5>
                      <p className="text-light mb-0">+56 75 234 5678</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-disco-purple rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                      <i className="bi bi-envelope text-white fs-5"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold text-disco-purple mb-1">Email</h5>
                      <p className="text-light mb-0">info@discostu.com</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-disco-purple rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                      <i className="bi bi-clock text-white fs-5"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold text-disco-purple mb-1">Horarios</h5>
                      <p className="text-light mb-0">
                        Miércoles - Domingo<br />
                        8:00 PM - 4:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="card card-disco overflow-hidden">
                <div className="card-header bg-disco-gray">
                  <h5 className="fw-bold mb-0 text-disco-purple">
                    Encuéntranos
                  </h5>
                </div>
                <div style={{ height: '250px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52092.53434856849!2d-71.27084785!3d-34.9836479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b8e1a1a1a1a1%3A0x50e3b3e3e3e3e3e3!2sCuric%C3%B3%2C%20Maule%2C%20Chile!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Disco Stu en Curicó"
                  />
                </div>
              </div>

              {/* Redes sociales */}
              <div className="card card-disco p-4">
                <h5 className="fw-bold mb-3 text-disco-purple">
                  Síguenos en redes sociales
                </h5>
                
                <div className="d-flex gap-3">
                  <a
                    href="https://facebook.com/discostu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px' }}
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  
                  <a
                    href="https://instagram.com/discostu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px' }}
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  
                  <a
                    href="https://twitter.com/discostu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px' }}
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  
                  <a
                    href="https://tiktok.com/@discostu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px' }}
                  >
                    <i className="bi bi-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
