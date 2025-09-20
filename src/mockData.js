// Datos simulados para la página de Disco Stu
// Estos datos normalmente vendrían de una base de datos

export const eventos = [
  {
    id: 1,
    titulo: "Noche de Fiebre del Sábado",
    fecha: "2025-07-12",
    hora: "21:00",
    imagen: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
    descripcion: "¡La clásica noche disco con los mejores hits de los 70s y 80s! DJ Disco Danny mezclará los éxitos que te harán bailar toda la noche.",
    descripcionDetallada: "Prepárate para una noche inolvidable llena de música disco clásica. DJ Disco Danny, reconocido internacionalmente, estará a cargo de los platos giratorios con una selección especial de los mejores hits de la era dorada del disco. La pista de baile estará iluminada con luces de neón y bolas de espejos que crearán una atmósfera mágica. Incluye: entrada, primera consumición gratis, y sorpresas especiales durante toda la noche.",
    precio: "$25",
    categoria: "Clásico",
    capacidad: 200,
    disponibles: 45,
    ubicacion: "Sala Principal",
    dj: "DJ Disco Danny",
    duracion: "4 horas",
    edadMinima: 18,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    incluye: ["Entrada", "Primera consumición", "Acceso VIP al área de fotos", "Sorpresas especiales"],
    dresscode: "Ropa estilo años 70s-80s (opcional pero recomendado)"
  },
  {
    id: 2,
    titulo: "Batalla de Baile Retro",
    fecha: "2025-07-18",
    hora: "20:30",
    imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    descripcion: "Compite en nuestra épica batalla de baile. Premios increíbles para los mejores movimientos disco. ¡Trae tu mejor outfit setentas!",
    descripcionDetallada: "¡La competencia de baile más esperada del año! Muestra tus mejores movimientos disco en una batalla épica donde el público decidirá a los ganadores. Habrá múltiples categorías: mejor solista, mejor pareja, y mejor grupo. Los premios incluyen trofeos personalizados, cenas gratis por un mes, y la oportunidad de presentarse en nuestro evento especial de fin de año. Jurado profesional y premios increíbles te esperan.",
    precio: "$30",
    categoria: "Competencia",
    capacidad: 150,
    disponibles: 23,
    ubicacion: "Pista Central",
    dj: "DJ Funk Master",
    duracion: "3 horas",
    edadMinima: 16,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    incluye: ["Entrada", "Número de competencia", "Acceso a camerinos", "Bebida energética"],
    dresscode: "Obligatorio: outfit años 70s completo",
    premios: ["1er lugar: $500 + trofeo", "2do lugar: $300 + trofeo", "3er lugar: $200 + trofeo"]
  },
  {
    id: 3,
    titulo: "Disco Bajo las Estrellas",
    fecha: "2025-07-25",
    hora: "19:00",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
    descripcion: "Evento especial al aire libre en nuestra terraza. Luces de neón, música disco y una vista espectacular de la ciudad.",
    descripcionDetallada: "Una experiencia única bajo el cielo estrellado en nuestra exclusiva terraza panorámica. Disfruta de la mejor música disco mientras contemplas las luces de la ciudad. Este evento especial incluye un área lounge VIP, barra premium con cócteles temáticos, food trucks gourmet, y una instalación de arte lumínico interactiva. La terraza está climatizada y cuenta con áreas cubiertas en caso de lluvia.",
    precio: "$35",
    categoria: "Especial",
    capacidad: 100,
    disponibles: 67,
    ubicacion: "Terraza Sky Lounge",
    dj: "DJ Stellar Sounds",
    duracion: "5 horas",
    edadMinima: 21,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    incluye: ["Entrada", "Acceso a Sky Lounge", "2 cócteles premium", "Aperitivos gourmet"],
    dresscode: "Elegante casual con toques disco",
    extras: "Vista panorámica 360°, área de fotos profesionales, DJ set exclusivo"
  },
  {
    id: 4,
    titulo: "Noche de Karaoke Disco",
    fecha: "2025-08-02",
    hora: "20:00",
    imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    descripcion: "Canta tus canciones disco favoritas en nuestro karaoke temático. Premios para las mejores interpretaciones.",
    descripcionDetallada: "¿Siempre has soñado con ser una estrella del disco? Esta es tu oportunidad. Nuestra noche de karaoke cuenta con un sistema de sonido profesional, luces de escenario, y un repertorio de más de 500 canciones disco clásicas y modernas. Concursos cada hora con premios, cabinas privadas disponibles para grupos, y la posibilidad de grabar tu performance profesionalmente.",
    precio: "$20",
    categoria: "Karaoke",
    capacidad: 120,
    disponibles: 89,
    ubicacion: "Sala Karaoke",
    dj: "DJ Micro Master",
    duracion: "4 horas",
    edadMinima: 18,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    incluye: ["Entrada", "3 canciones gratis", "Bebida de bienvenida", "Acceso a concursos"],
    dresscode: "Libre (se premian los outfits más creativos)"
  }
];

export const promociones = [
  {
    id: 1,
    titulo: "2x1 en Cócteles Disco",
    descripcion: "Todos los martes y miércoles, lleva 2 cócteles clásicos por el precio de 1.",
    validoHasta: "2025-08-31",
    imagen: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=300&h=200&fit=crop",
    descuento: "50%",
    tipo: "Bebidas"
  },
  {
    id: 2,
    titulo: "Grupo de 6+ Personas", 
    descripcion: "Grupos de 6 o más personas obtienen 25% de descuento en la entrada y mesa reservada gratis.",
    validoHasta: "2025-12-31",
    imagen: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop",
    descuento: "25%",
    tipo: "Grupos"
  },
  {
    id: 3,
    titulo: "Cumpleañeros VIP",
    descripcion: "¡Celebra tu cumpleaños con nosotros! Entrada gratis para el cumpleañero, corona disco incluida.",
    validoHasta: "2025-12-31",
    imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
    descuento: "100%",
    tipo: "Cumpleaños"
  },
  {
    id: 4,
    titulo: "Estudiantes Disco",
    descripcion: "Estudiantes universitarios con credencial válida reciben 30% de descuento todos los domingos.",
    validoHasta: "2025-07-31",
    imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    descuento: "30%",
    tipo: "Estudiantes"
  }
];

// Datos de galería de fotos
export const galeriaFotos = [
  {
    id: 1,
    titulo: "Noche de Fiebre del Sábado - Marzo 2025",
    imagen: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
    categoria: "eventos",
    año: "2025",
    evento: "Noche de Fiebre del Sábado",
    fecha: "2025-03-15",
    descripcion: "Una noche épica llena de música disco clásica y baile sin parar"
  },
  {
    id: 2,
    titulo: "Pista de Baile Principal",
    imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    categoria: "instalaciones",
    año: "2025",
    evento: "General",
    fecha: "2025-01-10",
    descripcion: "Nuestra icónica pista de baile con luces de neón y bola disco"
  },
  {
    id: 3,
    titulo: "Batalla de Baile Retro - Febrero 2025",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
    categoria: "eventos",
    año: "2025",
    evento: "Batalla de Baile Retro",
    fecha: "2025-02-20",
    descripcion: "Competencia épica de baile con los mejores movimientos disco"
  },
  {
    id: 4,
    titulo: "DJ Booth y Luces Neón",
    imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    categoria: "instalaciones",
    año: "2025",
    evento: "General",
    fecha: "2025-01-05",
    descripcion: "Nuestro moderno DJ booth con sistema de luces profesional"
  },
  {
    id: 5,
    titulo: "Disco Bajo las Estrellas - Enero 2025",
    imagen: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=300&fit=crop",
    categoria: "eventos",
    año: "2025",
    evento: "Disco Bajo las Estrellas",
    fecha: "2025-01-25",
    descripcion: "Evento especial en nuestra terraza con vista a la ciudad"
  },
  {
    id: 6,
    titulo: "Área VIP Lounge",
    imagen: "https://images.unsplash.com/photo-1574391884720-bbc2f1d7f4e5?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1574391884720-bbc2f1d7f4e5?w=400&h=300&fit=crop",
    categoria: "instalaciones",
    año: "2025",
    evento: "General",
    fecha: "2025-01-15",
    descripcion: "Zona VIP exclusiva con servicio premium y vista privilegiada"
  },
  {
    id: 7,
    titulo: "Noche de Karaoke Disco - Diciembre 2024",
    imagen: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
    categoria: "eventos",
    año: "2024",
    evento: "Noche de Karaoke Disco",
    fecha: "2024-12-15",
    descripcion: "Karaoke temático con las mejores canciones disco de todos los tiempos"
  },
  {
    id: 8,
    titulo: "Barra Principal",
    imagen: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop",
    categoria: "instalaciones",
    año: "2025",
    evento: "General",
    fecha: "2025-01-08",
    descripcion: "Nuestra barra principal con cócteles temáticos y ambiente disco"
  },
  {
    id: 9,
    titulo: "Halloween Disco Night - Octubre 2024",
    imagen: "https://images.unsplash.com/photo-1509715513011-e394f0cb20c4?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1509715513011-e394f0cb20c4?w=400&h=300&fit=crop",
    categoria: "eventos",
    año: "2024",
    evento: "Halloween Disco Night",
    fecha: "2024-10-31",
    descripcion: "Noche especial de Halloween con disfraces y música disco espeluznante"
  },
  {
    id: 10,
    titulo: "Entrada Principal",
    imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    categoria: "instalaciones",
    año: "2025",
    evento: "General",
    fecha: "2025-01-01",
    descripcion: "La icónica entrada de Disco Stu con neones y estilo retro"
  },
  {
    id: 11,
    titulo: "Año Nuevo Disco 2025",
    imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
    categoria: "eventos",
    año: "2025",
    evento: "Año Nuevo Disco",
    fecha: "2025-01-01",
    descripcion: "Celebración de Año Nuevo con la mejor música disco para empezar el 2025"
  },
  {
    id: 12,
    titulo: "Terraza Sky Lounge",
    imagen: "https://images.unsplash.com/photo-1484712401471-05c7215830eb?w=800&h=600&fit=crop",
    imagenThumb: "https://images.unsplash.com/photo-1484712401471-05c7215830eb?w=400&h=300&fit=crop",
    categoria: "instalaciones",
    año: "2025",
    evento: "General",
    fecha: "2025-01-20",
    descripcion: "Nuestra exclusiva terraza con vista panorámica de la ciudad"
  }
];

// Datos del blog de Disco Stu
export const blogPosts = [
  {
    id: 1,
    title: "La Historia Dorada de Disco Stu: De Springfield al Estrellato",
    author: "Disco Stu",
    date: "2025-06-15",
    content: `¡Hola, amantes del disco! Soy Disco Stu, y quiero contarles mi increíble viaje desde las calles de Springfield hasta convertirme en el rey indiscutible de la pista de baile.

Todo comenzó en los años 70, cuando era solo Stuart Discothèque (sí, ese era mi nombre real antes de cambiar legalmente a Disco Stu). Crecí escuchando a Donna Summer, Bee Gees y Earth Wind & Fire mientras mi madre Selma me decía "¡Deja de moverte tanto, Stuart!"

Mi gran momento llegó cuando conocí a Homer Simpson en la venta de garaje más épica de Springfield. Homer me vendió una chaqueta de rhinestones que decía "Disco Stu" por $2. En ese momento supe que el destino me estaba llamando. No podía devolver la chaqueta porque "Disco Stu no hace publicidad", así que decidí convertirme en Disco Stu para siempre.

Desde entonces, he bailado con las leyendas: tuve una batalla de baile épica contra el mismísimo John Travolta (spoiler: gané), enseñé a bailar a Marge Simpson para impresionar a Homer, y una vez hice que toda Springfield bailara durante 72 horas seguidas en mi primera discoteca.

Mi filosofía es simple: "Disco Stu likes disco music!" Y ahora, después de años perfeccionando mi arte, he abierto este templo sagrado del disco donde todos pueden experimentar la magia que solo la música disco puede ofrecer.

¿Sabían que tengo más de 2,000 discos de vinilo original? Mi colección incluye desde los clásicos de Diana Ross hasta rarezas que ni siquiera Moe conoce. Cada noche en el club, selecciono personalmente cada canción para crear la experiencia disco perfecta.

Recuerden: "Disco Stu doesn't advertise", pero Disco Stu sí comparte su pasión por hacer que Springfield baile. ¡Los veo en la pista!

Peace, Love, and Disco Forever,
Disco Stu ✨🕺`,
    votes: 234,
    excerpt: "Descubre la increíble historia de cómo Disco Stu pasó de ser Stuart Discothèque a convertirse en la leyenda del disco de Springfield...",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    category: "Historia",
    comments: [
      {
        id: 1,
        author: "Homer Simpson",
        date: "2025-06-16",
        content: "¡D'oh! ¡No sabía que esa chaqueta te convertiría en una estrella! ¿Puedo conseguir descuento en cervezas Duff?"
      },
      {
        id: 2,
        author: "Marge Simpson",
        date: "2025-06-17",
        content: "Qué historia tan inspiradora, Disco Stu. Me alegra que hayas encontrado tu pasión. Por cierto, ¿sigues teniendo esa chaqueta original?"
      },
      {
        id: 3,
        author: "Barney Gumble",
        date: "2025-06-18",
        content: "*eructo* Disco Stu me enseñó que incluso yo puedo bailar... cuando estoy lo suficientemente borracho. ¡BURP!"
      }
    ]
  },
  {
    id: 2,
    title: "Los 10 Pasos Secretos de Disco Stu para Dominar la Pista",
    author: "Disco Stu",
    date: "2025-06-10",
    content: `¡Amigos del groove! Después de décadas perfeccionando mi técnica, finalmente revelo los secretos que me han convertido en el bailarín número uno de Springfield.

**Paso 1: El Stance Supremo**
Todo comienza con la postura. Pies separados al ancho de los hombros, rodillas ligeramente flexionadas, y esa confianza que solo viene de saber que eres el rey del disco. Como diría el Chief Wiggum: "Es toda una ciencia, Lou."

**Paso 2: El Point Perfecto**
El dedo índice es tu mejor amigo. Apunta hacia arriba, hacia abajo, hacia los lados. John Travolta lo sabía, Disco Stu lo perfeccionó. Cada point debe tener intención y ritmo.

**Paso 3: El Hip Swing Hipnótico**
Las caderas son el centro del universo disco. Muévelas como si fueran una máquina bien aceitada. Ned Flanders una vez trató de copiar mi hip swing y terminó en el hospital con lumbago.

**Paso 4: La Rotación de Hombros Suprema**
Hacia adelante, hacia atrás, alternando. Es como si tus hombros estuvieran teniendo una conversación con el ritmo. Moe dice que parezco "un robot descompuesto", pero Moe no entiende el arte.

**Paso 5: El Foot Slide Fantástico**
Desliza esos pies como si la pista fuera hielo y tú fueras una estrella olímpica. Michael Jackson tenía su moonwalk, Disco Stu tiene su "disco glide".

**Paso 6: La Expresión Facial Épica**
Tu cara debe reflejar la alegría pura del disco. Sonrisa de oreja a oreja, ojos brillantes. Como dice Lisa Simpson: "La música debe sentirse, no solo escucharse."

**Paso 7: El Timing Telepático**
Conecta con el beat como si fueras uno con la música. Krusty el Payaso una vez dijo que mi timing era mejor que el de sus sketches cómicos.

**Paso 8: La Improvisación Inspirada**
Nunca repitas exactamente los mismos movimientos. El disco es libertad, creatividad. Hasta Groundskeeper Willie admite que mis improvisaciones son "magníficas, aunque raras."

**Paso 9: El Finale Fenomenal**
Cada canción merece un cierre espectacular. Spin, dip, pose dramática. Haz que la multitud grite como cuando Bart hace travesuras épicas.

**Paso 10: La Actitud Auténtica**
Sobre todo, ¡cree en ti mismo! Como siempre digo: "Disco Stu believes in you, so you should believe in you too!"

Practiquen estos pasos, y pronto estarán bailando como verdaderos profesionales. Recuerden: "Disco Stu don't quit, and neither should you!"

Keep on groovin',
Disco Stu 🕺✨`,
    votes: 456,
    excerpt: "¡Los secretos mejor guardados de Disco Stu finalmente revelados! Aprende los 10 pasos fundamentales para dominar cualquier pista de baile...",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    category: "Tutorial",
    comments: [
      {
        id: 1,
        author: "Bart Simpson",
        date: "2025-06-11",
        content: "¡Ay, caramba! Probé estos pasos en la escuela y ahora todos me llaman 'Disco Bart'. ¡Es genial!"
      },
      {
        id: 2,
        author: "Milhouse Van Houten",
        date: "2025-06-12",
        content: "Intenté el hip swing y mi mamá me llevó al doctor pensando que tenía algo roto. Pero valió la pena, ¡Lisa me dijo que bailaba mejor!"
      }
    ]
  },
  {
    id: 3,
    title: "Disco vs Hip-Hop: El Gran Debate Musical de Springfield",
    author: "DJ Duffman",
    date: "2025-06-05",
    content: `¡Oh yeah! Duffman aquí con un tema que divide a Springfield: ¿Disco o Hip-Hop?

Como DJ oficial de muchos eventos de la ciudad (y embajador de Duff Beer), he visto esta batalla desarrollarse en cada fiesta, boda y evento corporativo de la Planta Nuclear.

**El Caso del Disco (presentado por Disco Stu):**
"El disco es eterno," dice Stu mientras hace su signature move. "Es música que une generaciones. Desde mi abuela Jacqueline Bouvier hasta el pequeño Maggie Simpson, todos pueden sentir el groove."

Y tiene razón. En la última boda de Comic Book Guy, cuando puse "Le Freak" de Chic, hasta el Superintendente Chalmers empezó a bailar (aunque después negó todo).

**El Caso del Hip-Hop (presentado por Otto Mann):**
"¡El hip-hop es la voz de la calle, man!" dice Otto desde su autobús escolar convertido en estudio móvil. "Es crudo, real, y habla a las nuevas generaciones."

Otto no miente. Cuando puso Eminem en el último evento de la escuela, hasta Nelson Muntz dejó de hacer bullying para rapear sobre sus sentimientos profundos.

**La Perspectiva de Duffman:**
¡Ambos géneros tienen su lugar en el ecosistema musical de Springfield! El disco trae nostalgia y alegría universal, mientras que el hip-hop aporta energía moderna y autenticidad urbana.

En mi experiencia, la fórmula perfecta para cualquier fiesta exitosa en Springfield es:
- 40% Disco clásico (para los Baby Boomers como Grampa Simpson)
- 30% Hip-Hop moderno (para los millenials como Lisa y Bart)
- 20% Rock alternativo (para los Gen-X como Homer)
- 10% Polka (porque Lou siempre la pide)

**El Veredicto:**
¿Por qué elegir? En Taverna de Moe funcionan juntos, en la iglesia de Reverend Lovejoy hay espacio para ambos, y hasta en la casa de los Flanders se han escuchado ambos géneros (aunque Ned prefiere versiones "cristianas" de ambos).

Como dice Apu: "En mi experiencia en el Kwik-E-Mart, la buena música trasciende géneros y une a las personas en la cola de pago."

**Conclusión de Duffman:**
¡La música es como Duff Beer: mientras más variedad tengas, mejor será la fiesta! 

¡Oh yeah! Duffman nunca discrimina géneros musicales... solo discrimina contra la cerveza de mala calidad.

Keep the music pumping,
DJ Duffman 🎵🍺`,
    votes: 189,
    excerpt: "DJ Duffman analiza el eterno debate musical que divide Springfield. ¿Cuál es superior: el disco clásico o el hip-hop moderno?",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    category: "Debate",
    comments: [
      {
        id: 1,
        author: "Otto Mann",
        date: "2025-06-06",
        content: "¡Duffman, eres un diplomático musical! Aunque yo sigo creyendo que el hip-hop tiene más alma, respeto tu análisis, man."
      },
      {
        id: 2,
        author: "Comic Book Guy",
        date: "2025-06-07",
        content: "Worst. Musical. Debate. Ever. Ambos géneros palidecen ante la supremacía de los soundtracks de anime japonés. Pero acepto que ambos tienen mérito comercial."
      }
    ]
  },
  {
    id: 4,
    title: "Las 5 Mejores Anécdotas de Celebridades que Han Visitado mi Club",
    author: "Disco Stu",
    date: "2025-05-28",
    content: `¡Amigos del disco! Como prometí en mi último post, aquí están las historias más increíbles de famosos que han honrado mi pista de baile.

**1. Krusty el Payaso y la Noche del Maquillaje Corrido**
Era 1998, y Krusty llegó directamente después de grabar su show. Con maquillaje y todo. Al principio pensé que era un fan disfrazado, pero cuando comenzó a hacer su famoso "Krusty Shuffle" al ritmo de "Dancing Queen", supe que era auténtico. El maquillaje se corrió tanto que parecía un payaso zombie disco. ¡La gente pensó que era parte del show!

Anécdota curiosa: Krusty trató de conseguir mi número para que fuera su bailarín de respaldo en su especial de TV, pero "Disco Stu doesn't do backup dancing."

**2. El Alcalde Quimby y su Secreto Mejor Guardado**
Quien diría que nuestro alcalde corrupto... digo, respetado alcalde, era en realidad un maestro del hustle. Una noche llegó con sombrero y gafas oscuras, pensando que nadie lo reconocería. Pero cuando sonó "Boogie Wonderland," su cover se fue al traste. ¡Ese hombre puede moverse!

Ahora entiendo por qué siempre gana las elecciones: ¡sus mítines políticos son básicamente fiestas disco encubiertas!

**3. Sideshow Bob: El Villano con Ritmo**
Esto fue durante uno de sus permisos de salida "rehabilitadora" de prisión. Bob llegó citando a Shakespeare y criticando la "vulgaridad de la música popular moderna." Cinco minutos después estaba haciendo el robot al ritmo de "Robot Rock" de Daft Punk.

Su pelo afro natural le daba una ventaja injusta en la pista. Incluso intentó componer un soneto sobre mis habilidades de baile. "Disco Stu no acepta poetry," pero admito que fue emotivo.

**4. El Profesor Frink y la Ecuación del Groove Perfecto**
¡GLAVIN! El buen profesor llegó con calculadoras y equipos de medición, decidido a encontrar la "fórmula matemática del ritmo perfecto." Terminó bailando durante 6 horas seguidas mientras gritaba teorías sobre la física del movimiento disco.

Sus inventos para "optimizar el baile" fueron... interesantes. Especialmente esas botas con resortes que hicieron que rebotara hasta el techo.

**5. Kent Brockman: De Reportero Serio a Disco King**
Kent llegó para hacer un reportaje "objetivo" sobre "el resurgimiento de la cultura disco en Springfield." Pero cuando comencé mi rutina especial de "Stayin' Alive," el profesionalismo periodístico se fue por la ventana.

Al final de la noche, estava haciendo reportes en vivo desde la pista de baile: "Reportando en vivo desde el paraíso del disco, donde este servidor ha descubierto que... ¡PUEDE BAILAR!"

**Mención Honorífica: La Noche que Vino toda la Familia Simpson**
Homer bailó como si fuera el último hombre en la Tierra, Marge mostró movimientos que hicieron que todos se detuvieran a mirar, Bart inventó nuevos pasos que desafiaban la gravedad, Lisa improvisó un solo de saxofón sobre "Le Freak," y hasta Maggie bailó en su cuna.

Esa noche entendí por qué Springfield es tan especial: ¡hasta las familias más disfuncionales pueden unirse en la pista de baile!

Recuerden: "Disco Stu's door is always open para anyone who wants to boogie!"

Stay groovy,
Disco Stu 🌟🕺`,
    votes: 312,
    excerpt: "Las historias más increíbles y divertidas de las celebridades de Springfield que han visitado el club de Disco Stu...",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
    category: "Anécdotas",
    comments: [
      {
        id: 1,
        author: "Krusty el Payaso",
        date: "2025-05-29",
        content: "¡Hey hey! Esa noche fue épica, Stu. Aunque mi maquillador no me habló por una semana después de ver cómo quedé. ¡Pero valió la pena!"
      },
      {
        id: 2,
        author: "Lisa Simpson",
        date: "2025-05-30",
        content: "Esa noche familiar fue realmente especial. Es increíble cómo la música puede unir a las personas. Mi solo de saxofón sobre disco fue una experiencia musical transformadora."
      }
    ]
  },
  {
    id: 5,
    title: "El Futuro del Disco: NFTs, TikTok y la Nueva Generación",
    author: "Lisa Simpson",
    date: "2025-05-20",
    content: `Como joven saxofonista y entusiasta de la música, he estado observando cómo el disco está evolucionando en la era digital, y debo admitir que Disco Stu ha sido un visionario.

**La Revolución Digital del Disco**
Cuando Disco Stu comenzó a hablar sobre "Disco NFTs" y "blockchain boogie," todos pensamos que había perdido la razón. Pero resulta que estaba adelantado a su tiempo. Su colección de vinilos digitales ahora vale más que la casa de los Flanders.

**TikTok y el Renacimiento Disco**
Es fascinante ver cómo jóvenes de mi generación están redescubriendo el disco a través de TikTok. Bart incluso se hizo viral con un baile que llamó "The Springfield Shuffle" - básicamente robó todos los movimientos de Disco Stu pero agregó un backflip.

Los números son impresionantes:
- #DiscoTok tiene más de 500 millones de views
- "Stayin' Alive" está siendo usada en 2.3 millones de videos
- Incluso Groundskeeper Willie se hizo TikToker disco

**La Ciencia Detrás del Groove Moderno**
Como estudiante aplicada, he analizado los patrones matemáticos en la música disco y su impacto neurológico. El profesor Frink me ayudó a entender por qué el disco produce más endorfinas que otros géneros.

La estructura 4/4, las líneas de bajo repetitivas y los hi-hats constantes crean lo que él llama "The Disco Dopamine Effect." Es literalmente adictivo de manera positiva.

**El Impacto Social del Disco Moderno**
En mi proyecto de ciencias sociales, documenté cómo el club de Disco Stu ha unido a Springfield de maneras impensables:
- Chief Wiggum y Fat Tony ahora bailan juntos los viernes
- El Reverendo Lovejoy incorporó "Gospel Disco" en sus servicios
- Hasta Mr. Burns admitió que el disco "no es completamente horrible"

**Desafíos y Oportunidades**
Sin embargo, hay retos. La generación Z tiene períodos de atención más cortos. Las canciones disco duran 8-12 minutos, pero los TikToks duran 30 segundos. ¿Cómo adaptarse sin perder la esencia?

Disco Stu encontró la solución: "Disco Bites" - versiones de 60 segundos de clásicos que mantienen la esencia pero se adaptan a los nuevos formatos.

**El Futuro es Retro-Futurista**
Predigo que en los próximos 5 años veremos:
- Realidad virtual disco (ya estoy trabajando en esto con Martin Prince)
- AI que compone disco personalizado para cada persona
- Conciertos holográficos de leyendas disco fallecidas
- Terapia psicológica basada en ritmos disco

**Conclusión Personal**
Como joven que creció en la era digital pero ama la música clásica, creo que el disco tiene un futuro brillante. No es solo nostalgia; es evolución.

Disco Stu siempre dice: "Disco Stu adapts to the future, but never forgets the past." Y eso es exactamente lo que necesitamos: honrar las raíces mientras abrazamos la innovación.

El disco no murió en los 80. Solo estaba esperando el momento perfecto para regresar más fuerte que nunca.

With love for music and progress,
Lisa Simpson 🎷✨`,
    votes: 201,
    excerpt: "Lisa Simpson analiza cómo el disco está evolucionando en la era digital y por qué tiene un futuro brillante en Springfield y el mundo...",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=600&h=400&fit=crop",
    category: "Futuro",
    comments: [
      {
        id: 1,
        author: "Disco Stu",
        date: "2025-05-21",
        content: "¡Lisa Simpson gets it! Disco Stu is proud of the young generation. Your analysis of the Disco Dopamine Effect is pure genius!"
      },
      {
        id: 2,
        author: "Professor Frink",
        date: "2025-05-22",
        content: "¡GLAVIN! Excelente trabajo, Lisa. Nuestras investigaciones sobre neuroacústica disco podrían revolucionar la musicoterapia. ¡CON LOS FLAVORIZADORES!"
      }
    ]
  }
];
