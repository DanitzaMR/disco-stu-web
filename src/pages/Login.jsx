import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  // Obtener la ruta de donde vino el usuario (para redirigir después del login)
  const from = location.state?.from?.pathname || '/';
  
  // Estado para el formulario
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
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

    // Intentar iniciar sesión
    const result = login(formData.email, formData.password);

    setLoading(false);

    if (result.success) {
      // Redirigir a donde venía el usuario o al home
      navigate(from, { replace: true });
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
              ¡Bienvenido de vuelta!
            </h1>
            <p className="text-light opacity-75">Inicia sesión para continuar bailando</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit}>
            
            {/* Error general */}
            {errors.general && (
              <div className="alert alert-danger" role="alert">
                {errors.general}
              </div>
            )}

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
            <div className="mb-4">
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
                placeholder="Tu contraseña"
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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
                  Iniciando Sesión...
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </form>

          {/* Enlaces */}
          <div className="mt-4 text-center">
            <p className="text-light mb-3">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="hover-text-disco fw-semibold">
                Regístrate
              </Link>
            </p>
            
            {/* Divider */}
            <hr className="my-3" style={{ borderColor: '#6b7280' }} />
            
            <Link 
              to="/" 
              className="btn btn-link text-secondary hover-text-disco text-decoration-none"
            >
              <i className="bi bi-arrow-left me-1"></i>
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
