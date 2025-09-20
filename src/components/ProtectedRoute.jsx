import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// Componente para proteger rutas que requieren autenticación
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Si el usuario no está autenticado, redirigir al login
  // Guardar la ubicación actual para redirigir después del login
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si está autenticado, mostrar el componente hijo
  return children;
};

export default ProtectedRoute;
