# 🕺 Disco Stu's Dance Palace - Documentación del Proyecto

## 📁 Estructura del Proyecto

```
disco-stu-web/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── AnimatedBanner.jsx    # Banner principal con animaciones
│   │   ├── EventCard.jsx         # Tarjeta para mostrar eventos
│   │   ├── PromoCard.jsx         # Tarjeta para promociones
│   │   ├── TestimonialCard.jsx   # Tarjeta para testimonios
│   │   ├── Header.jsx            # Navegación principal
│   │   ├── Footer.jsx            # Pie de página
│   │   └── Layout.jsx            # Layout principal
│   ├── pages/               # Páginas principales
│   │   └── Home.jsx              # Página de inicio
│   ├── data/                # Datos mock
│   │   └── mockData.js           # Datos de eventos, promociones y testimonios
│   ├── hooks/               # Hooks personalizados
│   │   └── useData.js            # Hooks para manejo de datos
│   ├── utils/               # Utilidades
│   │   └── formatters.js         # Funciones de formateo
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos personalizados y animaciones
│   └── index.css            # Configuración de Tailwind CSS
├── public/                  # Archivos públicos
├── package.json             # Dependencias del proyecto
├── tailwind.config.js       # Configuración de Tailwind
├── postcss.config.js        # Configuración de PostCSS
└── vite.config.js          # Configuración de Vite
```

## 🎨 Componentes Principales

### 🏠 HomePage
- **Banner Animado**: Efectos de neón, partículas flotantes y texto brillante
- **Eventos Destacados**: Grid responsivo con los próximos 3 eventos
- **Promociones**: Muestra todas las promociones activas
- **Call to Action**: Sección final con botones de reserva

### 🃏 EventCard
- Imagen del evento con precio destacado
- Información de fecha y hora
- Descripción truncada
- Botón de compra
- Efectos hover con escalado

### 🎫 PromoCard  
- Imagen con descuento destacado
- Descripción de la promoción
- Fecha de validez
- Clasificación por tipo (Bebidas, Grupos, etc.)

### ✨ AnimatedBanner
- Partículas flotantes animadas
- Círculos de neón pulsantes
- Texto con efectos de brillo
- Estadísticas de la discoteca
- Botones de acción principales

## 🎯 Funcionalidades Implementadas

### ✅ Completadas
- ✅ Diseño responsivo (mobile-first)
- ✅ Tema dark mode con colores neón
- ✅ Animaciones CSS avanzadas
- ✅ Componentes reutilizables
- ✅ Mock data para eventos y promociones
- ✅ Sistema de navegación con React Router
- ✅ Layout persistente (Header/Footer)
- ✅ Hooks personalizados para datos
- ✅ Utilidades de formateo

### 🔄 En Desarrollo
- 🔄 Páginas individuales (Eventos, Galería, Blog, Contacto)
- 🔄 Funcionalidad de reservas
- 🔄 Integración con localStorage
- 🔄 Sistema de testimonios
- 🔄 Mapa interactivo

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal
- **Vite** - Build tool y dev server
- **Tailwind CSS 3.4** - Framework de estilos
- **React Router DOM** - Manejo de rutas
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Compatibilidad de navegadores

## 🎨 Paleta de Colores

```css
/* Colores principales */
slate-900    # Fondo principal
slate-800    # Superficies
slate-700    # Elementos secundarios

/* Colores de acento */
purple-500   # Acento principal
pink-500     # Acento secundario  
blue-500     # Acento terciario
green-500    # Promociones
```

## 🚀 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Preview de la build
npm run lint     # Verificar código con ESLint
```

## 📱 Diseño Responsivo

El diseño se adapta a:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### Breakpoints de Tailwind:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

## 🎭 Animaciones y Efectos

### Animaciones CSS Personalizadas:
- `disco-text-glow` - Texto con efecto de brillo
- `neon-text-animated` - Texto con parpadeo neón
- `floating-particles` - Partículas flotantes
- `pulse-neon` - Círculos pulsantes
- `gradient-shift` - Gradientes animados

### Efectos Hover:
- Escalado suave en tarjetas
- Cambios de color en navegación
- Brillos y sombras en botones
- Transiciones fluidas

## 📝 Convenciones de Código

### Nomenclatura:
- **Componentes**: PascalCase (EventCard.jsx)
- **Variables**: camelCase (eventosDestacados)
- **Funciones**: camelCase (formatDate)
- **Constantes**: UPPER_SNAKE_CASE

### Estructura de Componentes:
```jsx
import React from 'react';

const ComponentName = ({ props }) => {
  // Estado y efectos
  
  // Funciones auxiliares
  
  // Render
  return (
    <div className="tailwind-classes">
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

## 🐛 Debugging

Para depurar problemas comunes:

1. **Estilos no aplicados**: Verificar configuración de Tailwind
2. **Imágenes no cargan**: Revisar URLs en mockData.js
3. **Rutas no funcionan**: Verificar React Router setup
4. **Animaciones cortadas**: Revisar overflow en contenedores

## 🔮 Próximas Mejoras

- [ ] Página de eventos completa con filtros
- [ ] Sistema de reservas con formularios
- [ ] Galería de fotos con lightbox
- [ ] Blog con posts dinámicos
- [ ] Página de contacto con mapa
- [ ] Integración con API real
- [ ] Sistema de usuarios
- [ ] Carrito de compras
- [ ] Pagos integrados
- [ ] PWA (Progressive Web App)

---

**¡Disco no está muerto! 🕺✨**
