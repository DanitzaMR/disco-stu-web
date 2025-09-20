import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContextProvider';

/**
 * 🔐 CONTEXTO DE AUTENTICACIÓN - FUNCIONALIDAD CLAVE DE REACT
 * 
 * Este componente implementa el patrón Context API de React para gestionar
 * el estado de autenticación de forma global en toda la aplicación.
 * 
 * FUNCIONALIDADES REACT IMPLEMENTADAS:
 * - useState: Para manejar el estado del usuario y loading
 * - useEffect: Para verificar sesión persistente al cargar la app
 * - Context API: Para compartir estado entre componentes sin prop drilling
 * - localStorage: Para persistir la sesión del usuario entre recargas
 */

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  // 📦 ESTADO LOCAL CON useState
  // user: Almacena la información del usuario autenticado (null si no hay sesión)
  const [user, setUser] = useState(null);
  
  // loading: Controla el estado de carga mientras se verifica la sesión
  const [loading, setLoading] = useState(true);

  // 🔄 EFECTO DE INICIALIZACIÓN - useEffect
  // Se ejecuta UNA SOLA VEZ al montar el componente (array de dependencias vacío [])
  // Verifica si hay una sesión guardada en localStorage y la restaura
  useEffect(() => {
    console.log('🔍 Verificando sesión existente en localStorage...');
    
    // Intentar recuperar sesión persistente
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser); // Restaurar estado del usuario
        console.log('✅ Sesión restaurada:', parsedUser.email);
      } catch (error) {
        console.error('❌ Error al parsear sesión guardada:', error);
        localStorage.removeItem('currentUser'); // Limpiar datos corruptos
      }
    } else {
      console.log('ℹ️ No hay sesión previa guardada');
    }
    
    setLoading(false); // Finalizar estado de carga
  }, []); // Array vacío = solo se ejecuta al montar el componente

  // 📝 FUNCIÓN DE REGISTRO - LÓGICA DE PERSISTENCIA EN localStorage
  // Maneja el registro de nuevos usuarios y actualiza el estado local
  const register = (userData) => {
    try {
      console.log('📝 Iniciando registro de usuario:', userData.email);
      
      // 🗄️ OPERACIÓN CRUD EN localStorage
      // 1. LEER: Obtener usuarios existentes del almacenamiento local
      const existingUsers = JSON.parse(localStorage.getItem('discoStuUsers')) || [];
      console.log('📚 Usuarios existentes:', existingUsers.length);
      
      // 2. VALIDAR: Verificar si el email ya existe (evitar duplicados)
      const userExists = existingUsers.find(u => u.email === userData.email);
      if (userExists) {
        throw new Error('El email ya está registrado');
      }

      // 3. CREAR: Nuevo usuario con ID único basado en timestamp
      const newUser = {
        id: Date.now().toString(), // ID único basado en timestamp
        name: userData.name,
        email: userData.email,
        password: userData.password, // ⚠️ En producción esto debe estar hasheado
        createdAt: new Date().toISOString(),
        reservations: [] // Array para futuras reservas del usuario
      };

      // 4. ACTUALIZAR: Agregar usuario al array y guardar en localStorage
      const updatedUsers = [...existingUsers, newUser]; // Spread operator para inmutabilidad
      localStorage.setItem('discoStuUsers', JSON.stringify(updatedUsers));
      console.log('💾 Usuario guardado en localStorage');

      // 5. CREAR SESIÓN: Objeto sin password para la sesión activa
      const userSession = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt
        // ❗ password NO se incluye en la sesión por seguridad
      };

      // 6. PERSISTIR SESIÓN: Guardar sesión actual en localStorage
      localStorage.setItem('currentUser', JSON.stringify(userSession));
      
      // 7. ACTUALIZAR ESTADO: Cambiar estado local para re-renderizar componentes
      setUser(userSession); // ← Esto causa re-render en todos los componentes que usan AuthContext
      
      console.log('✅ Registro exitoso y sesión iniciada');
      return { success: true, user: userSession };
    } catch (error) {
      console.error('❌ Error en registro:', error.message);
      return { success: false, error: error.message };
    }
  };

  // 🔐 FUNCIÓN DE INICIO DE SESIÓN - VALIDACIÓN Y AUTENTICACIÓN
  // Valida credenciales y establece sesión activa
  const login = (email, password) => {
    try {
      console.log('🔐 Intentando iniciar sesión:', email);
      
      // 📖 LEER DATOS: Obtener usuarios registrados del localStorage
      const existingUsers = JSON.parse(localStorage.getItem('discoStuUsers')) || [];
      console.log('🔍 Buscando usuario en', existingUsers.length, 'registros');
      
      // 🔍 BUSCAR Y VALIDAR: Encontrar usuario con credenciales correctas
      // En producción, el password debe compararse usando hash (bcrypt, etc.)
      const user = existingUsers.find(u => u.email === email && u.password === password);
      
      if (!user) {
        console.log('❌ Credenciales incorrectas');
        throw new Error('Email o contraseña incorrectos');
      }

      console.log('✅ Usuario encontrado:', user.name);

      // 🎫 CREAR SESIÓN: Objeto limpio sin información sensible
      const userSession = {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
        // ❗ password NO se incluye en la sesión por seguridad
      };

      // 💾 PERSISTIR: Guardar sesión en localStorage para mantenerla entre recargas
      localStorage.setItem('currentUser', JSON.stringify(userSession));
      
      // 🔄 ACTUALIZAR ESTADO: Cambiar estado global, esto re-renderiza automáticamente
      // todos los componentes que consumen el AuthContext
      setUser(userSession);
      
      console.log('🎉 Sesión iniciada exitosamente');
      return { success: true, user: userSession };
    } catch (error) {
      console.error('❌ Error en login:', error.message);
      return { success: false, error: error.message };
    }
  };

  // 🚪 FUNCIÓN DE CIERRE DE SESIÓN - LIMPIEZA DE ESTADO
  // Elimina la sesión persistente y resetea el estado global
  const logout = () => {
    console.log('🚪 Cerrando sesión...');
    
    // 🗑️ LIMPIAR: Eliminar sesión del almacenamiento persistente
    localStorage.removeItem('currentUser');
    
    // 🔄 RESETEAR ESTADO: Cambiar estado a null causa re-render automático
    // Todos los componentes que dependen del usuario se actualizarán
    setUser(null);
    
    console.log('✅ Sesión cerrada exitosamente');
  };

  // ✅ FUNCIÓN DE VALIDACIÓN - COMPUTED VALUE
  // Función pura que retorna true/false basado en el estado actual
  // Se recalcula automáticamente cada vez que 'user' cambia
  const isAuthenticated = () => {
    const authenticated = user !== null;
    console.log('🔍 Estado de autenticación:', authenticated);
    return authenticated;
  };

  // 📦 OBJETO DE CONTEXTO - VALORES COMPARTIDOS GLOBALMENTE
  // Estos valores estarán disponibles en cualquier componente hijo
  // que use el hook useAuth() o useContext(AuthContext)
  const value = {
    // Estado de datos
    user,           // Información del usuario actual (null si no autenticado)
    loading,        // Boolean para mostrar loading mientras se inicializa
    
    // Funciones de autenticación
    register,       // Función para registrar nuevos usuarios
    login,          // Función para iniciar sesión
    logout,         // Función para cerrar sesión
    isAuthenticated // Función para verificar si hay sesión activa
  };

  return (
    // 🌐 PROVEEDOR DE CONTEXTO - WRAPPER GLOBAL
    // Todos los componentes hijo tendrán acceso a 'value'
    // !loading asegura que no se rendericen los hijos hasta que se verifique la sesión
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
