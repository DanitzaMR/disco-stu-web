import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EventsList from './pages/EventsList';
import EventDetail from './pages/EventDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Rutas de eventos */}
            <Route path="/eventos" element={<EventsList />} />
            <Route path="/eventos/:eventId" element={<EventDetail />} />
            
            {/* Ruta protegida para el perfil */}
            <Route path="/perfil" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            
            {/* Rutas adicionales */}
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
