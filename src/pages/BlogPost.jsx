import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../mockData';
import { useAuth } from '../hooks/useAuth';

const BlogPost = () => {
  const { postId } = useParams();
  const { user, isAuthenticated } = useAuth();
  const [post, setPost] = useState(null);
  const [votes, setVotes] = useState(0);
  const [comments, setComments] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Cargar el post y datos del localStorage
  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === parseInt(postId));
    if (foundPost) {
      setPost(foundPost);
      
      // Cargar votos del localStorage
      const savedVotes = JSON.parse(localStorage.getItem('blogVotes') || '{}');
      setVotes(savedVotes[postId] || foundPost.votes);
      
      // Cargar comentarios del localStorage
      const savedComments = JSON.parse(localStorage.getItem('blogComments') || '{}');
      setComments(savedComments[postId] || foundPost.comments);
      
      // Verificar si el usuario ya votó
      const userVotes = JSON.parse(localStorage.getItem('userVotes') || '{}');
      const userKey = user?.email || 'anonymous';
      setHasVoted(userVotes[userKey]?.includes(postId));
    }
  }, [postId, user]);

  // Función para votar
  const handleVote = () => {
    if (!post) return;
    
    const userKey = user?.email || 'anonymous';
    const userVotes = JSON.parse(localStorage.getItem('userVotes') || '{}');
    
    if (!userVotes[userKey]) {
      userVotes[userKey] = [];
    }
    
    // Verificar si ya votó
    if (userVotes[userKey].includes(postId)) {
      return; // Ya votó
    }
    
    // Agregar voto
    userVotes[userKey].push(postId);
    localStorage.setItem('userVotes', JSON.stringify(userVotes));
    
    // Actualizar conteo de votos
    const savedVotes = JSON.parse(localStorage.getItem('blogVotes') || '{}');
    savedVotes[postId] = (savedVotes[postId] || post.votes) + 1;
    localStorage.setItem('blogVotes', JSON.stringify(savedVotes));
    
    setVotes(savedVotes[postId]);
    setHasVoted(true);
  };

  // Función para agregar comentario
  const handleAddComment = async (e) => {
    e.preventDefault();
    
    if (!newComment.trim() || !isAuthenticated()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Simular delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const comment = {
        id: Date.now(),
        author: user.name,
        date: new Date().toISOString().split('T')[0],
        content: newComment.trim()
      };
      
      // Agregar el nuevo comentario al principio de la lista
      const updatedComments = [comment, ...comments];
      setComments(updatedComments);
      
      // Guardar en localStorage
      const savedComments = JSON.parse(localStorage.getItem('blogComments') || '{}');
      savedComments[postId] = updatedComments;
      localStorage.setItem('blogComments', JSON.stringify(savedComments));
      
      setNewComment('');
      setSubmitMessage('¡Comentario agregado exitosamente!');
      setTimeout(() => setSubmitMessage(''), 3000);
      
    } catch {
      setSubmitMessage('Error al agregar comentario. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Formatear contenido (convertir saltos de línea a párrafos)
  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-3 text-light lh-lg" style={{ opacity: '0.85' }}>
        {paragraph}
      </p>
    ));
  };

  if (!post) {
    return (
      <div className="min-vh-100 bg-disco-dark text-white d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="display-3 mb-4">🕺</div>
          <h2 className="h2 fw-bold mb-3">Artículo no encontrado</h2>
          <p className="text-secondary mb-4">
            El artículo que buscas no existe o ha sido movido.
          </p>
          <Link
            to="/blog"
            className="btn btn-disco btn-lg rounded-pill fw-bold"
          >
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-disco-dark text-white">
      {/* Header del artículo */}
      <div className="disco-gradient-bg py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <Link
                to="/blog"
                className="d-inline-flex align-items-center text-decoration-none text-light mb-4"
                style={{ opacity: '0.8', transition: 'opacity 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.opacity = '1'}
                onMouseLeave={(e) => e.target.style.opacity = '0.8'}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Volver al Blog
              </Link>
              
              <div className="mb-4">
                <span className="badge text-white px-3 py-2 rounded-pill fw-bold" 
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '0.875rem' }}>
                  {post.category}
                </span>
              </div>
              
              <h1 className="display-5 fw-bold mb-4 neon-text">
                {post.title}
              </h1>
              
              <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 text-light" 
                   style={{ opacity: '0.8' }}>
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" 
                       style={{ 
                         width: '40px', 
                         height: '40px',
                         backgroundColor: 'rgba(255, 255, 255, 0.2)'
                       }}>
                    <span className="fs-6">
                      {post.author === 'Disco Stu' ? '🕺' : '👤'}
                    </span>
                  </div>
                  <span className="fw-bold">{post.author}</span>
                </div>
                <span>•</span>
                <time>{formatDate(post.date)}</time>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            {/* Imagen del artículo */}
            <div className="mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="img-fluid rounded shadow-lg"
                style={{ 
                  height: '300px', 
                  width: '100%', 
                  objectFit: 'cover',
                  maxHeight: '250px'
                }}
              />
            </div>

            {/* Contenido principal */}
            <article className="mb-5">
              <div className="card card-disco p-4">
                <div className="fs-6">
                  {formatContent(post.content)}
                </div>
              </div>
            </article>

            {/* Sistema de votación */}
            <div className="card card-disco p-4 mb-5">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="d-flex align-items-center gap-3">
                  <h3 className="h6 fw-bold text-disco-purple mb-0">
                    ¿Te gustó este artículo?
                  </h3>
                  <div className="d-flex align-items-center gap-2 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <span className="fw-bold">{votes}</span>
                  </div>
                </div>

                <button
                  onClick={handleVote}
                  disabled={hasVoted}
                  className={`btn rounded-pill fw-bold ${
                    hasVoted
                      ? 'btn-secondary disabled'
                      : 'btn-disco'
                  }`}
                >
                  {hasVoted ? '¡Ya votaste! 🎉' : 'Votar por este artículo ⭐'}
                </button>
              </div>
              
              {hasVoted && (
                <p className="text-secondary small mt-2 mb-0">
                  ¡Gracias por tu voto! Tu opinión ayuda a mejorar el contenido.
                </p>
              )}
            </div>

            {/* Sección de comentarios */}
            <div className="card card-disco p-4">
              <h3 className="h5 fw-bold mb-4 text-disco-purple">
                Comentarios ({comments.length})
              </h3>

              {/* Formulario para agregar comentario (solo usuarios autenticados) */}
              {isAuthenticated() ? (
                <form onSubmit={handleAddComment} className="mb-5">
                  <div className="mb-3">
                    <label className="form-label fw-bold text-disco-purple">
                      Agregar un comentario
                    </label>
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Comparte tu opinión sobre este artículo..."
                      rows="4"
                      className="form-control form-control-disco"
                      required
                    />
                  </div>
                  
                  {submitMessage && (
                    <div className={`alert ${
                      submitMessage.includes('Error') 
                        ? 'alert-danger' 
                        : 'alert-success'
                    } mb-3`}>
                      {submitMessage}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || !newComment.trim()}
                    className={`btn rounded-pill fw-bold ${
                      isSubmitting || !newComment.trim()
                        ? 'btn-secondary disabled'
                        : 'btn-disco'
                    }`}
                  >
                    {isSubmitting ? 'Publicando...' : 'Publicar comentario'}
                  </button>
                </form>
              ) : (
                <div className="mb-5 p-3 bg-disco-light-gray rounded border">
                  <p className="text-light mb-3">
                    Inicia sesión para poder comentar este artículo.
                  </p>
                  <Link
                    to="/login"
                    className="btn btn-disco rounded-pill fw-bold"
                  >
                    Iniciar Sesión
                  </Link>
                </div>
              )}

              {/* Lista de comentarios */}
              <div className="d-flex flex-column gap-3">
                {comments
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map(comment => (
                  <div key={comment.id} className="bg-disco-light-gray rounded p-3">
                    <div className="d-flex align-items-center mb-2">
                      <div className="d-flex align-items-center gap-3">
                        <div className="rounded-circle disco-gradient d-flex align-items-center justify-content-center text-white fw-bold"
                             style={{ width: '40px', height: '40px' }}>
                          <span className="fs-6">
                            {comment.author.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="fw-bold text-disco-purple fs-6">{comment.author}</div>
                          <div className="small text-secondary">{formatDate(comment.date)}</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-light lh-lg mb-0 ps-5">{comment.content}</p>
                  </div>
                ))}
              </div>

              {/* Mensaje si no hay comentarios */}
              {comments.length === 0 && (
                <div className="text-center py-5 text-secondary">
                  <div className="display-6 mb-3">💬</div>
                  <p>Aún no hay comentarios. ¡Sé el primero en opinar!</p>
                </div>
              )}
            </div>

            {/* Navegación a otros artículos */}
            <div className="text-center mt-5">
              <Link
                to="/blog"
                className="btn btn-disco rounded-pill fw-bold d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-arrow-left"></i>
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
