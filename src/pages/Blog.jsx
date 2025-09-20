import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../mockData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  
  // Obtener categorías únicas
  const categories = ['todas', ...new Set(blogPosts.map(post => post.category))];
  
  // Filtrar posts por categoría
  const filteredPosts = selectedCategory === 'todas' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Ordenar posts por fecha (más recientes primero)
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="min-vh-100 bg-disco-dark text-white">
      {/* Header del blog */}
      <div className="disco-gradient-bg py-5">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-4 neon-text">
            🕺 Disco Stu's Blog
          </h1>
          <p className="fs-5 text-light mx-auto" style={{ maxWidth: '600px', opacity: '0.8' }}>
            Las aventuras, secretos y sabiduría disco directamente desde Springfield. 
            ¡Disco Stu tells his story, baby!
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Filtros por categoría */}
        <div className="mb-5">
          <div className="card card-disco p-4">
            <h2 className="h4 fw-bold mb-4 text-disco-purple text-center">
              Categorías del Blog
            </h2>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn rounded-pill fw-bold ${
                    selectedCategory === category
                      ? 'btn-disco'
                      : 'btn-outline-secondary text-light'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <div className="text-center mt-3 text-secondary">
              Mostrando {sortedPosts.length} artículo{sortedPosts.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Grid de artículos */}
        <div className="row g-4">
          {sortedPosts.map(post => (
            <div key={post.id} className="col-md-6 col-lg-4">
              <article className="card card-disco h-100 overflow-hidden">
                {/* Imagen del artículo */}
                <div className="position-relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-disco-purple px-3 py-2 rounded-pill fw-bold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Contenido del artículo */}
                <div className="card-body d-flex flex-column">
                  <h3 className="h5 fw-bold mb-3 text-disco-purple">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-decoration-none text-disco-purple hover-link"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <div className="d-flex align-items-center mb-3 small text-secondary">
                    <div className="d-flex align-items-center gap-2">
                      <div className="rounded-circle disco-gradient d-flex align-items-center justify-content-center text-white fw-bold"
                           style={{ width: '28px', height: '28px' }}>
                        <span style={{ fontSize: '12px' }}>
                          {post.author === 'Disco Stu' ? '🕺' : '👤'}
                        </span>
                      </div>
                      <span className="fw-bold text-disco-purple">{post.author}</span>
                    </div>
                    <span className="mx-2">•</span>
                    <time>{formatDate(post.date)}</time>
                  </div>

                  <p className="text-light mb-4" style={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    opacity: '0.85'
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Estadísticas del post */}
                  <div className="mt-auto">
                    <div className="border-top border-secondary pt-3 d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-3 small text-secondary">
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill text-warning"></i>
                          <span>{post.votes}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-chat-dots text-info"></i>
                          <span>{post.comments.length}</span>
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="btn btn-disco btn-sm rounded-pill fw-bold"
                      >
                        Leer más
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay posts */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-5">
            <div className="display-1 mb-4">📝</div>
            <h3 className="h3 fw-bold mb-3">No hay artículos en esta categoría</h3>
            <p className="text-secondary">
              Prueba seleccionando una categoría diferente
            </p>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-5">
          <div className="card disco-gradient p-4 text-center">
            <h2 className="h3 fw-bold mb-4 text-white">
              ¡Únete a la Comunidad Disco de Springfield!
            </h2>
            <p className="fs-5 text-light mx-auto" style={{ maxWidth: '500px', opacity: '0.8' }}>
              Suscríbete para recibir las últimas aventuras de Disco Stu, 
              consejos de baile exclusivos y historias épicas de la pista.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="tu-email@springfield.com"
                    style={{ 
                      backgroundColor: 'white',
                      color: '#333',
                      border: 'none'
                    }}
                  />
                  <button 
                    className="btn btn-light btn-lg fw-bold text-disco-purple"
                    type="button"
                  >
                    ¡Suscribirme! 🕺
                  </button>
                </div>
              </div>
            </div>
            <p className="small text-light opacity-50 mb-0">
              * Disco Stu respeta tu privacidad. No spam, solo disco vibes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
