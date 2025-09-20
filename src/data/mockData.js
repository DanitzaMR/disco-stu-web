// Mock data para simular una API
export const eventos = [
  {
    id: 1,
    titulo: "Noche de Fiebre del Sábado",
    fecha: "2025-07-12",
    hora: "21:00",
    imagen: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop&crop=center",
    descripcion: "¡La clásica noche disco con los mejores hits de los 70s y 80s! DJ Disco Danny mezclará los éxitos que te harán bailar toda la noche.",
    precio: "$25",
    categoria: "Clásico"
  },
  {
    id: 2,
    titulo: "Batalla de Baile Retro",
    fecha: "2025-07-18",
    hora: "20:30",
    imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    descripcion: "Compite en nuestra épica batalla de baile. Premios increíbles para los mejores movimientos disco. ¡Trae tu mejor outfit setentas!",
    precio: "$30",
    categoria: "Competencia"
  },
  {
    id: 3,
    titulo: "Disco Bajo las Estrellas",
    fecha: "2025-07-25",
    hora: "19:00",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop&crop=center",
    descripcion: "Evento especial al aire libre en nuestra terraza. Luces de neón, música disco y una vista espectacular de la ciudad.",
    precio: "$35",
    categoria: "Especial"
  },
  {
    id: 4,
    titulo: "Ladies Night Disco",
    fecha: "2025-08-02",
    hora: "22:00",
    imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
    descripcion: "Noche especial para las damas con descuentos en bebidas y música disco de divas como Diana Ross, Donna Summer y Gloria Gaynor.",
    precio: "$20",
    categoria: "Temático"
  }
];

export const promociones = [
  {
    id: 1,
    titulo: "2x1 en Cócteles Disco",
    descripcion: "Todos los martes y miércoles, lleva 2 cócteles clásicos por el precio de 1. Incluye nuestros famosos 'Disco Martini' y 'Saturday Night Fever'.",
    validoHasta: "2025-08-31",
    imagen: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=300&h=200&fit=crop&crop=center",
    descuento: "50%",
    tipo: "Bebidas"
  },
  {
    id: 2,
    titulo: "Grupo de 6+ Personas",
    descripcion: "¿Vienes con tu pandilla? Grupos de 6 o más personas obtienen 25% de descuento en la entrada y mesa reservada gratis.",
    validoHasta: "2025-12-31",
    imagen: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop&crop=center",
    descuento: "25%",
    tipo: "Grupos"
  },
  {
    id: 3,
    titulo: "Cumpleañeros VIP",
    descripcion: "¡Celebra tu cumpleaños con nosotros! Entrada gratis para el cumpleañero, corona disco incluida y shot especial de la casa.",
    validoHasta: "2025-12-31",
    imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center",
    descuento: "100%",
    tipo: "Cumpleaños"
  },
  {
    id: 4,
    titulo: "Estudiantes Disco",
    descripcion: "Estudiantes universitarios con credencial válida reciben 30% de descuento todos los domingos. ¡Baila y estudia el ritmo!",
    validoHasta: "2025-07-31",
    imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center",
    descuento: "30%",
    tipo: "Estudiantes"
  }
];

export const testimonios = [
  {
    id: 1,
    nombre: "María González",
    comentario: "¡El mejor lugar para bailar en la ciudad! La música es increíble y el ambiente es súper divertido. Disco Stu realmente sabe cómo hacer una fiesta.",
    rating: 5,
    fecha: "2025-06-28"
  },
  {
    id: 2,
    nombre: "Carlos Ruiz",
    comentario: "Vine para la batalla de baile y quedé impresionado. El DJ, las luces, todo está perfectamente sincronizado. ¡Volveré sin duda!",
    rating: 5,
    fecha: "2025-06-25"
  },
  {
    id: 3,
    nombre: "Ana Silva",
    comentario: "Celebré mi cumpleaños aquí y fue espectacular. El personal es muy amable y realmente te hacen sentir especial. ¡Gracias Disco Stu!",
    rating: 5,
    fecha: "2025-06-20"
  }
];
