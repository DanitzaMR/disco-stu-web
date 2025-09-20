import { useState, useEffect } from 'react';
import { eventos, promociones } from '../data/mockData';

// Hook personalizado para manejar datos de eventos
export const useEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de API con delay
    const loadEvents = () => {
      setTimeout(() => {
        setEventsData(eventos);
        setLoading(false);
      }, 500);
    };

    loadEvents();
  }, []);

  const getEventById = (id) => {
    return eventsData.find(event => event.id === id);
  };

  const getUpcomingEvents = (limit = 3) => {
    const today = new Date();
    return eventsData
      .filter(event => new Date(event.fecha) >= today)
      .slice(0, limit);
  };

  return {
    events: eventsData,
    loading,
    getEventById,
    getUpcomingEvents
  };
};

// Hook personalizado para manejar promociones
export const usePromotions = () => {
  const [promotionsData, setPromotionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de API con delay
    const loadPromotions = () => {
      setTimeout(() => {
        setPromotionsData(promociones);
        setLoading(false);
      }, 300);
    };

    loadPromotions();
  }, []);

  const getActivePromotions = () => {
    const today = new Date();
    return promotionsData.filter(promo => 
      new Date(promo.validoHasta) >= today
    );
  };

  return {
    promotions: promotionsData,
    loading,
    getActivePromotions
  };
};

// Hook para manejo de localStorage (para futuras funcionalidades)
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};
