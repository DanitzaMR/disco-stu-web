import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  
  // Estado para el formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    return newErrors;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar formulario
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    // Intentar registrar usuario
    const result = register({
      name: formData.name,
      email: formData.email,
      password: formData.password
    });

    setLoading(false);

    if (result.success) {
      // Redirigir al perfil o home después del registro exitoso
      navigate('/perfil');
    } else {
      setErrors({ general: result.error });
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-4">
      <div className="card card-disco" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-4">
          
          {/* Encabezado */}
          <div className="text-center mb-4">
            <div className="disco-ball mx-auto d-flex align-items-center justify-content-center rounded-circle mb-3" 
                 style={{ width: '4rem', height: '4rem', fontSize: '2rem' }}>
              🕺
            </div>
            <h1 className="h3 fw-bold text-white mb-2">
              ¡Únete a <span className="neon-text">Disco Stu!</span>
            </h1>
            <p className="text-light opacity-75">Crea tu cuenta y comienza a bailar</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit}>
            
            {/* Error general */}
            {errors.general && (
              <div className="alert alert-danger" role="alert">
                {errors.general}
              </div>
            )}

            {/* Campo Nombre */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-light">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-control form-control-disco ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Tu nombre completo"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Campo Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control form-control-disco ${errors.email ? 'is-invalid' : ''}`}
                placeholder="tu@email.com"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Campo Contraseña */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-control form-control-disco ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Mínimo 6 caracteres"
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            {/* Campo Confirmar Contraseña */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label text-light">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-control form-control-disco ${errors.confirmPassword ? 'is-invalid' : ''}`}
                placeholder="Repite tu contraseña"
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={loading}
              className={`btn w-100 ${loading ? 'btn-secondary' : 'btn-disco'}`}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Registrando...
                </>
              ) : (
                'Crear Cuenta'
              )}
            </button>
          </form>

          {/* Enlaces */}
          <div className="mt-4 text-center">
            <p className="text-light">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="hover-text-disco fw-semibold">
                Inicia Sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
