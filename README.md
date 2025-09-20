# Disco Stu - Sitio Web de Discoteca

Una aplicación web moderna para la discoteca "Disco Stu" desarrollada con React, Vite y Bootstrap. El sitio presenta un diseño disco/neón llamativo y todas las funcionalidades necesarias para una discoteca moderna.

## 🎆 Características

- **Diseño disco/neón**: Tema visual inspirado en la cultura disco con efectos de neón y gradientes coloridos
- **Totalmente responsivo**: Diseñado con Bootstrap para una experiencia óptima en todos los dispositivos
- **Autenticación de usuarios**: Sistema de login y registro con validación
- **Galería de fotos**: Showcases de eventos y ambiente de la discoteca
- **Blog dinámico**: Artículos sobre música, eventos y cultura disco
- **Gestión de eventos**: Lista y detalles de próximos eventos con sistema de reservas
- **Formularios validados**: Validación tanto del lado cliente como servidor
- **Interactividad**: Efectos visuales y animaciones para una experiencia inmersiva

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19.1.0 + Vite 7.0.0
- **Styling**: Bootstrap 5.3.7 + CSS personalizado
- **Iconos**: Bootstrap Icons 1.13.1
- **Routing**: React Router DOM 7.6.3
- **Linting**: ESLint con configuración para React

## 🏗️ Arquitectura del Proyecto

```
disco-stu-web/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.jsx     # Navegación principal
│   │   ├── Footer.jsx     # Pie de página
│   │   ├── Layout.jsx     # Layout principal
│   │   ├── EventCard.jsx  # Tarjeta de evento
│   │   ├── PromoCard.jsx  # Tarjeta promocional
│   │   ├── AnimatedBanner.jsx # Banner hero animado
│   │   └── TestimonialCard.jsx # Tarjeta de testimonio
│   ├── pages/             # Páginas principales
│   │   ├── Home.jsx       # Página de inicio
│   │   ├── EventsList.jsx # Lista de eventos
│   │   ├── EventDetail.jsx # Detalle de evento
│   │   ├── Gallery.jsx    # Galería de fotos
│   │   ├── Blog.jsx       # Lista de artículos
│   │   ├── BlogPost.jsx   # Detalle de artículo
│   │   └── Contact.jsx    # Página de contacto
│   ├── mockData.js        # Datos de prueba
│   ├── index.css          # Estilos globales y utilidades
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Punto de entrada
├── package.json          # Dependencias y scripts
└── vite.config.js        # Configuración de Vite
```

## 🎨 Sistema de Diseño

### Colores del Tema Disco
- **Púrpura disco**: `#8b5cf6` - Color principal
- **Rosa disco**: `#ec4899` - Color secundario
- **Azul disco**: `#3b82f6` - Acentos
- **Verde disco**: `#10b981` - Success states
- **Amarillo disco**: `#f59e0b` - Warning states
- **Fondo oscuro**: `#111827` - Background principal
- **Gris disco**: `#1f2937` - Cards y componentes

### Efectos Especiales
- **Texto neón**: Efecto de resplandor en textos importantes
- **Gradientes animados**: Backgrounds con movimiento para textos destacados
- **Disco ball**: Animaciones rotatorias con gradientes cónicos
- **Hover effects**: Transformaciones y sombras en interacciones

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd disco-stu-web
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

## 🎯 Funcionalidades Implementadas

### ✅ Estructura y Navegación
- [x] Header responsivo con navegación Bootstrap
- [x] Footer con información de contacto y redes sociales
- [x] Layout principal con estructura semántica
- [x] Routing con React Router

### ✅ Páginas Principales
- [x] Home: Banner hero, eventos destacados, testimonios
- [x] Eventos: Lista filtrable con cards de eventos
- [x] Detalle de Evento: Información completa con formulario de reserva
- [x] Galería: Grid responsivo con modal para imágenes
- [x] Blog: Lista de artículos con paginación
- [x] Post de Blog: Contenido completo con navegación
- [x] Contacto: Formulario de contacto con validación

### ✅ Componentes Interactivos
- [x] Cards con efectos hover y animaciones
- [x] Formularios con validación Bootstrap
- [x] Botones con efectos disco personalizados
- [x] Modal para galería de imágenes
- [x] Breadcrumbs para navegación
- [x] Badges y etiquetas informativas

### ✅ Diseño Responsivo
- [x] Grid system de Bootstrap
- [x] Breakpoints optimizados para móvil
- [x] Imágenes responsivas
- [x] Navegación móvil colapsible

## 🔧 Migración de Tailwind a Bootstrap

Este proyecto fue migrado exitosamente de Tailwind CSS a Bootstrap 5.3.7. Los cambios principales incluyen:

### Cambios en Dependencias
- ❌ Removido: `tailwindcss`, `postcss`, `autoprefixer`
- ✅ Agregado: `bootstrap`, `bootstrap-icons`

### Cambios en Archivos de Configuración
- ❌ Eliminado: `tailwind.config.js`, `postcss.config.js`
- ✅ Modificado: `index.css` con importaciones de Bootstrap y utilidades custom

### Migración de Clases
- **Grid**: `grid grid-cols-*` → `row`, `col-*`
- **Flexbox**: `flex justify-center items-center` → `d-flex justify-content-center align-items-center`
- **Spacing**: `p-4 m-2` → `p-4 m-2` (compatibilidad similar)
- **Colores**: `bg-purple-600` → `bg-primary` o clases custom
- **Texto**: `text-center text-lg` → `text-center fs-5`
- **Botones**: `bg-blue-500 hover:bg-blue-700` → `btn btn-primary`

## 🎭 Criterios Académicos Cumplidos

### ✅ Técnicos
- [x] Uso de Bootstrap como framework CSS principal
- [x] CSS personalizado para efectos disco/neón
- [x] Estructura HTML semántica
- [x] Diseño responsivo en todos los breakpoints
- [x] Interactividad con JavaScript/React
- [x] Formularios con validación completa
- [x] Sistema de autenticación implementado

### ✅ Funcionales
- [x] Galería de imágenes con modal
- [x] Blog dinámico con navegación
- [x] Gestión de eventos con reservas
- [x] Sistema de contacto funcional
- [x] Experiencia de usuario optimizada

### ✅ Documentación
- [x] README completo y detallado
- [x] Comentarios en código
- [x] Estructura de archivos organizada
- [x] Guía de instalación y uso

## 🐛 Resolución de Problemas

### Errores Comunes

**Error de importación de Bootstrap**
```bash
# Solución: Verificar que Bootstrap esté instalado
npm install bootstrap bootstrap-icons
```

**Estilos no aplicándose**
```bash
# Solución: Verificar importación en index.css
@import 'bootstrap/dist/css/bootstrap.min.css';
```

**Problemas de responsive**
```bash
# Solución: Usar clases de Bootstrap correctas
<div className="col-12 col-md-6 col-lg-4">
```

## 🤝 Contribuciones

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autor

Desarrollado como proyecto académico para demostrar competencias en:
- Desarrollo frontend con React
- Implementación de Bootstrap
- Diseño responsivo
- Experiencia de usuario
- Arquitectura de componentes

---

**🎵 "Disco Stu doesn't advertise" - Pero su sitio web sí que impresiona! 🕺💃**
