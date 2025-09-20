// Utilidades para formateo de fechas y texto
export const formatDate = (dateString, options = {}) => {
  const defaultOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options
  };
  
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', defaultOptions);
};

export const formatTime = (timeString) => {
  return timeString;
};

export const formatPrice = (price) => {
  // Si el precio ya incluye el símbolo $, lo devolvemos tal como está
  if (typeof price === 'string' && price.includes('$')) {
    return price;
  }
  
  // Si es un número, lo formateamos con $
  if (typeof price === 'number') {
    return `$${price}`;
  }
  
  return price;
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Utilidad para calcular días restantes hasta un evento
export const getDaysUntilEvent = (eventDate) => {
  const today = new Date();
  const event = new Date(eventDate);
  const diffTime = event - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'Evento pasado';
  if (diffDays === 0) return '¡Hoy!';
  if (diffDays === 1) return 'Mañana';
  if (diffDays < 7) return `En ${diffDays} días`;
  if (diffDays < 30) return `En ${Math.ceil(diffDays / 7)} semanas`;
  return `En ${Math.ceil(diffDays / 30)} meses`;
};

// Utilidad para validar si una promoción está activa
export const isPromotionActive = (validUntil) => {
  const today = new Date();
  const expiration = new Date(validUntil);
  return expiration >= today;
};
