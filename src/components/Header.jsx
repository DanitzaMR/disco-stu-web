import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-disco sticky-top">
      <div className="container">
        {/* Logo y título */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div className="disco-ball rounded-circle me-2 d-flex align-items-center justify-content-center" 
               style={{width: '40px', height: '40px'}}>
            <span className="text-white fw-bold fs-5">DS</span>
          </div>
          <h1 className="h4 mb-0 neon-text">
            Disco Stu's Dance Palace
          </h1>
        </Link>

        {/* Toggle button para móvil */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{color: 'white'}}
        >
          <i className="bi bi-list fs-3 text-white"></i>
        </button>

        {/* Navegación principal */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/eventos" className="nav-link">Eventos</Link>
            </li>
            <li className="nav-item">
              <Link to="/galeria" className="nav-link">Galería</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
          </ul>

          {/* Área de usuario y autenticación */}
          <div className="d-flex align-items-center">
            {isAuthenticated() ? (
              /* Usuario autenticado */
              <div className="dropdown">
                <button
                  className="btn btn-link text-white d-flex align-items-center text-decoration-none dropdown-toggle"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <div className="disco-gradient rounded-circle me-2 d-flex align-items-center justify-content-center" 
                       style={{width: '32px', height: '32px'}}>
                    <span className="fw-bold">🕺</span>
                  </div>
                  <span className="d-none d-sm-inline">{user.name}</span>
                </button>

                {/* Menú desplegable */}
                <ul className={`dropdown-menu dropdown-menu-end bg-disco-gray border-0 ${showUserMenu ? 'show' : ''}`}>
                  <li>
                    <Link
                      to="/perfil"
                      className="dropdown-item text-light"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <i className="bi bi-person me-2"></i>
                      Mi Perfil
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider border-secondary" /></li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="dropdown-item text-light"
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              /* Usuario no autenticado */
              <div className="d-flex gap-2">
                <Link to="/login" className="btn btn-disco-outline btn-sm">
                  Iniciar Sesión
                </Link>
                <Link to="/register" className="btn btn-disco btn-sm">
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
