import React, { useState } from 'react';
import { galeriaFotos } from '../mockData';
import SmartImage from '../components/SmartImage';

/**
 * 🖼️ COMPONENTE GALLERY - FILTROS DINÁMICOS Y MODAL
 * 
 * FUNCIONALIDADES REACT IMPLEMENTADAS:
 * - useState: Gestión de filtros y estado de modal
 * - Array Methods: map, filter, Set para procesamiento de datos
 * - Computed Values: Cálculos derivados que se recalculan automáticamente
 * - Event Handlers: Manejo de clicks y cambios de filtros
 * - Conditional Rendering: Modal y estados de lista vacía
 * - Functional Programming: Funciones puras para transformaciones
 */

const Gallery = () => {
  // 🎛️ ESTADOS DE FILTROS - Control de UI interactiva
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [selectedYear, setSelectedYear] = useState('todos');
  
  // 🖼️ ESTADO DEL MODAL - Control de imagen ampliada
  const [selectedImage, setSelectedImage] = useState(null);

  // 🏷️ COMPUTED VALUES - Se recalculan automáticamente cuando cambian las dependencias
  // Estas variables se recalculan en cada render, pero son rápidas debido a los datos pequeños
  
  // Extraer categorías únicas usando Set (elimina duplicados)
  const categories = ['todas', ...new Set(galeriaFotos.map(foto => foto.categoria))];
  console.log('📂 Categorías disponibles:', categories);
  
  // Extraer años únicos usando Set
  const years = ['todos', ...new Set(galeriaFotos.map(foto => foto.año))];
  console.log('📅 Años disponibles:', years);

  // 🔍 FILTRADO REACTIVO - PROGRAMACIÓN FUNCIONAL
  // Esta computed property se recalcula automáticamente cuando cambian los filtros
  const filteredPhotos = galeriaFotos.filter(foto => {
    // Múltiples condiciones de filtro usando operadores lógicos
    const categoryMatch = selectedCategory === 'todas' || foto.categoria === selectedCategory;
    const yearMatch = selectedYear === 'todos' || foto.año === selectedYear;
    
    // Retorna true solo si ambas condiciones se cumplen (AND lógico)
    return categoryMatch && yearMatch;
  });
  
  console.log(`🔍 Filtros activos: ${selectedCategory}/${selectedYear} - Resultados: ${filteredPhotos.length}`);

  // 📖 EVENT HANDLERS - Funciones para interacción del usuario
  
  // Abrir modal con imagen seleccionada
  const openModal = (foto) => {
    console.log('🖼️ Abriendo modal para:', foto.titulo);
    setSelectedImage(foto);
  };

  // Cerrar modal (resetear estado)
  const closeModal = () => {
    console.log('❌ Cerrando modal');
    setSelectedImage(null);
  };

  // 🔧 UTILITY FUNCTION - Función helper pura
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="min-vh-100 bg-disco-dark text-white">
      {/* Header de la galería */}
      <div className="disco-gradient-bg py-5">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-4 neon-text">
            Galería de Fotos
          </h1>
          <p className="fs-5 text-light mx-auto" style={{ maxWidth: '500px', opacity: '0.8' }}>
            Revive los mejores momentos de Disco Stu a través de nuestra colección de fotos
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="container py-5">
        <div className="card card-disco p-4 mb-5">
          <h2 className="h4 fw-bold mb-4 text-center text-disco-purple">Filtrar Fotos</h2>
          
          <div className="row g-4">
            {/* Filtro por categoría */}
            <div className="col-md-6">
              <label className="form-label fw-bold text-disco-purple">
                Categoría
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-select form-control-disco"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {capitalize(category)}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por año */}
            <div className="col-md-6">
              <label className="form-label fw-bold text-disco-purple">
                Año
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="form-select form-control-disco"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'todos' ? 'Todos los años' : year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="text-center mt-3 text-secondary">
            Mostrando {filteredPhotos.length} foto{filteredPhotos.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'todas' && ` de ${selectedCategory}`}
            {selectedYear !== 'todos' && ` del ${selectedYear}`}
          </div>
        </div>

        {/* Grid de fotos */}
        {filteredPhotos.length > 0 ? (
          <div className="row g-4">
            {filteredPhotos.map(foto => (
              <div key={foto.id} className="col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card card-disco h-100 overflow-hidden gallery-card"
                  onClick={() => openModal(foto)}
                >
                  {/* Imagen */}
                  <div className="position-relative overflow-hidden">
                    <SmartImage
                      src={foto.imagenThumb}
                      alt={foto.titulo}
                      className="gallery-image"
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-content">
                        <i className="bi bi-eye fs-1 d-block mb-2"></i>
                        <small>Ver imagen completa</small>
                      </div>
                    </div>
                  </div>

                  {/* Información */}
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-disco-purple mb-2">
                      {foto.titulo}
                    </h5>
                    <p className="card-text text-light small mb-3" style={{ opacity: '0.8' }}>
                      {foto.descripcion}
                    </p>
                    <div className="d-flex justify-content-between align-items-center small">
                      <span className="badge bg-disco-purple px-2 py-1 rounded-pill">
                        {capitalize(foto.categoria)}
                      </span>
                      <span className="text-secondary">{foto.fecha}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <div className="display-1 mb-4">📸</div>
            <h3 className="h3 fw-bold mb-3">No se encontraron fotos</h3>
            <p className="text-secondary">
              Intenta cambiar los filtros para ver más resultados
            </p>
          </div>
        )}
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div 
          className="modal d-block"
          style={{ 
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 1060
          }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content bg-transparent border-0">
              <div className="position-relative">
                {/* Botón cerrar */}
                <button
                  type="button"
                  className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                  style={{ zIndex: 1070 }}
                  onClick={closeModal}
                ></button>

                {/* Imagen principal */}
                <SmartImage
                  src={selectedImage.imagen}
                  alt={selectedImage.titulo}
                  className="modal-image"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Información de la imagen */}
                <div 
                  className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white p-3 rounded-bottom"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h4 className="fw-bold mb-2">{selectedImage.titulo}</h4>
                  <p className="text-light mb-2">{selectedImage.descripcion}</p>
                  <div className="d-flex justify-content-between align-items-center small">
                    <span className="badge bg-disco-purple px-2 py-1 rounded-pill">
                      {capitalize(selectedImage.categoria)}
                    </span>
                    <span className="text-light opacity-75">
                      {selectedImage.evento} • {selectedImage.fecha}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
