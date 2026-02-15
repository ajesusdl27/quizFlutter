import type { Pregunta, Tema } from '../types';

export const preguntasAstroApuntes: Pregunta[] = [
  {
    id: 1,
    pregunta: '¿Qué es Astro?',
    opciones: [
      'Un gestor de bases de datos',
      'Un framework web moderno',
      'Una librería de CSS',
      'Un servidor Node.js'
    ],
    correcta: 1,
    explicacion: 'Astro es un framework web moderno que permite construir sitios web optimizados y rápidos.',
    categoria: 'Conceptos Básicos'
  },
  {
    id: 2,
    pregunta: '¿Cuál es la principal característica de Astro?',
    opciones: [
      'Solo funciona con React',
      'Renderiza principalmente en el cliente',
      'Renderiza principalmente en el servidor (SSR)',
      'No genera HTML'
    ],
    correcta: 2,
    explicacion: 'Astro se caracteriza por renderizar principalmente en el servidor (SSR), lo que mejora el rendimiento y el SEO.',
    categoria: 'Renderizado'
  },
  {
    id: 3,
    pregunta: '¿Dónde vive todo el código fuente en un proyecto Astro?',
    opciones: [
      'public/',
      'src/',
      'dist/',
      'build/'
    ],
    correcta: 1,
    explicacion: 'Todo el código fuente de un proyecto Astro se organiza dentro de la carpeta src/.',
    categoria: 'Estructura'
  },
  {
    id: 4,
    pregunta: '¿Qué carpeta contiene componentes reutilizables?',
    opciones: [
      'src/pages/',
      'src/styles/',
      'src/components/',
      'public/'
    ],
    correcta: 2,
    explicacion: 'La carpeta src/components/ es donde se colocan todos los componentes reutilizables del proyecto.',
    categoria: 'Estructura'
  },
  {
    id: 5,
    pregunta: '¿Qué carpeta convierte automáticamente archivos en rutas?',
    opciones: [
      'src/layouts/',
      'src/pages/',
      'src/utils/',
      'public/'
    ],
    correcta: 1,
    explicacion: 'La carpeta src/pages/ utiliza enrutamiento basado en archivos, convirtiendo automáticamente cada archivo en una ruta de la aplicación.',
    categoria: 'Enrutamiento'
  },
  {
    id: 6,
    pregunta: '¿Qué carpeta contiene archivos estáticos sin procesamiento?',
    opciones: [
      'src/',
      'src/assets/',
      'public/',
      'src/static/'
    ],
    correcta: 2,
    explicacion: 'La carpeta public/ contiene archivos estáticos que se sirven tal cual, sin ningún procesamiento.',
    categoria: 'Estructura'
  },
  {
    id: 7,
    pregunta: '¿Qué archivo configura integraciones y adaptadores en Astro?',
    opciones: [
      'package.json',
      'astro.config.mjs',
      'tsconfig.json',
      '.env'
    ],
    correcta: 1,
    explicacion: 'El archivo astro.config.mjs es el archivo de configuración principal donde se definen integraciones, adaptadores y otras opciones de Astro.',
    categoria: 'Configuración'
  },
  {
    id: 8,
    pregunta: '¿Qué extensión tienen los componentes principales de Astro?',
    opciones: [
      '.html',
      '.jsx',
      '.astro',
      '.vue'
    ],
    correcta: 2,
    explicacion: 'Los componentes principales de Astro utilizan la extensión .astro, que combina HTML, JavaScript y CSS.',
    categoria: 'Componentes'
  },
  {
    id: 9,
    pregunta: '¿Cómo se llama la sección entre --- en un archivo .astro?',
    opciones: [
      'Template',
      'Script',
      'Frontmatter',
      'Slot'
    ],
    correcta: 2,
    explicacion: 'El frontmatter es la sección entre los delimitadores --- donde se escribe código JavaScript que se ejecuta en el servidor.',
    categoria: 'Componentes'
  },
  {
    id: 10,
    pregunta: 'El código dentro del frontmatter se ejecuta en:',
    opciones: [
      'El navegador',
      'El cliente',
      'El servidor',
      'Ambos'
    ],
    correcta: 2,
    explicacion: 'El código dentro del frontmatter se ejecuta exclusivamente en el servidor durante el proceso de construcción o renderizado.',
    categoria: 'Renderizado'
  },
  {
    id: 11,
    pregunta: '¿Cómo se insertan variables dinámicas en el HTML?',
    opciones: [
      'Con {{ }}',
      'Con { }',
      'Con [[ ]]',
      'Con <% %>'
    ],
    correcta: 1,
    explicacion: 'En Astro, las variables dinámicas se insertan en el HTML utilizando llaves simples { }.',
    categoria: 'Sintaxis'
  },
  {
    id: 12,
    pregunta: '¿Qué método se usa comúnmente para renderizar listas?',
    opciones: [
      'forEach()',
      'filter()',
      'map()',
      'reduce()'
    ],
    correcta: 2,
    explicacion: 'El método map() se utiliza comúnmente para renderizar listas porque devuelve un nuevo array con los elementos transformados.',
    categoria: 'Renderizado'
  },
  {
    id: 13,
    pregunta: '¿Por qué se usa "key" en listas renderizadas?',
    opciones: [
      'Es obligatorio en HTML',
      'Mejora el rendimiento y control del DOM',
      'Cambia el estilo',
      'No tiene función real'
    ],
    correcta: 1,
    explicacion: 'El atributo "key" ayuda a identificar de manera única cada elemento de la lista, mejorando el rendimiento y el control del DOM.',
    categoria: 'Optimización'
  },
  {
    id: 14,
    pregunta: '¿Cómo se reciben props en un componente Astro?',
    opciones: [
      'props()',
      'Astro.props',
      'this.props',
      'useProps()'
    ],
    correcta: 1,
    explicacion: 'En componentes Astro, las props se acceden a través del objeto Astro.props.',
    categoria: 'Componentes'
  },
  {
    id: 15,
    pregunta: '¿Dónde suelen definirse las interfaces de props?',
    opciones: [
      'En public/',
      'Dentro del frontmatter',
      'En CSS',
      'En package.json'
    ],
    correcta: 1,
    explicacion: 'Las interfaces TypeScript de props se definen típicamente dentro del frontmatter del componente.',
    categoria: 'TypeScript'
  },
  {
    id: 16,
    pregunta: '¿Qué operador permite renderizado condicional simple?',
    opciones: [
      '??',
      '&&',
      '||',
      '=>'
    ],
    correcta: 1,
    explicacion: 'El operador && permite renderizado condicional simple: si la condición es verdadera, se renderiza el contenido.',
    categoria: 'Sintaxis'
  },
  {
    id: 17,
    pregunta: '¿Qué operador permite condicional tipo if/else en línea?',
    opciones: [
      '? :',
      '&&',
      '==',
      '=>'
    ],
    correcta: 0,
    explicacion: 'El operador ternario (? :) permite crear condicionales tipo if/else en una sola línea.',
    categoria: 'Sintaxis'
  },
  {
    id: 18,
    pregunta: '¿Qué etiqueta permite insertar contenido anidado?',
    opciones: [
      '<children />',
      '<content />',
      '<slot />',
      '<insert />'
    ],
    correcta: 2,
    explicacion: 'La etiqueta <slot /> permite insertar contenido hijo dentro de un componente, similar a {children} en React.',
    categoria: 'Componentes'
  },
  {
    id: 19,
    pregunta: '¿Dónde se suelen definir estructuras comunes como header y footer?',
    opciones: [
      'src/utils/',
      'src/layouts/',
      'public/',
      'src/components/ui/'
    ],
    correcta: 1,
    explicacion: 'Los layouts (src/layouts/) definen estructuras comunes como headers, footers y estructuras de página que se reutilizan.',
    categoria: 'Estructura'
  },
  {
    id: 20,
    pregunta: '¿Qué ventaja tiene el CSS local en Astro?',
    opciones: [
      'Es más rápido que el global',
      'Evita conflictos de nombres',
      'Es obligatorio',
      'Solo funciona con TypeScript'
    ],
    correcta: 1,
    explicacion: 'El CSS local en Astro está automáticamente scoped al componente, evitando conflictos de nombres entre diferentes componentes.',
    categoria: 'Estilos'
  },
  {
    id: 21,
    pregunta: '¿Dónde se colocan estilos globales?',
    opciones: [
      'src/styles/',
      'public/styles/',
      'src/global/',
      'root/styles/'
    ],
    correcta: 0,
    explicacion: 'Los estilos globales se colocan típicamente en la carpeta src/styles/ del proyecto.',
    categoria: 'Estilos'
  },
  {
    id: 22,
    pregunta: '¿Cómo se importa un CSS global en un layout?',
    opciones: [
      'Con <link>',
      'Con require()',
      'Con import "../styles/global.css";',
      'No se puede'
    ],
    correcta: 2,
    explicacion: 'Los archivos CSS globales se importan en el frontmatter usando la sintaxis de import de ES modules.',
    categoria: 'Estilos'
  },
  {
    id: 23,
    pregunta: '¿Los componentes .astro requieren JavaScript en el cliente por defecto?',
    opciones: [
      'Sí, siempre',
      'No',
      'Solo con TypeScript',
      'Solo en producción'
    ],
    correcta: 1,
    explicacion: 'Por defecto, los componentes .astro no envían JavaScript al cliente, renderizando todo en el servidor para mejor rendimiento.',
    categoria: 'Renderizado'
  },
  {
    id: 24,
    pregunta: '¿Dónde se ejecuta el código dentro de una etiqueta <script> sin atributos especiales?',
    opciones: [
      'En el servidor',
      'En el cliente',
      'En ambos',
      'No se ejecuta'
    ],
    correcta: 1,
    explicacion: 'El código dentro de etiquetas <script> se ejecuta en el cliente (navegador), a diferencia del frontmatter que se ejecuta en el servidor.',
    categoria: 'JavaScript'
  },
  {
    id: 25,
    pregunta: '¿Qué archivo gestiona dependencias npm?',
    opciones: [
      'astro.config.mjs',
      'tsconfig.json',
      'package.json',
      '.env'
    ],
    correcta: 2,
    explicacion: 'El archivo package.json gestiona todas las dependencias npm del proyecto, incluyendo Astro y sus integraciones.',
    categoria: 'Configuración'
  },
  {
    id: 26,
    pregunta: '¿Qué tipo de enrutamiento usa Astro?',
    opciones: [
      'Basado en base de datos',
      'Basado en archivos',
      'Manual',
      'Dinámico obligatorio'
    ],
    correcta: 1,
    explicacion: 'Astro utiliza enrutamiento basado en archivos, donde la estructura de carpetas en src/pages/ define automáticamente las rutas.',
    categoria: 'Enrutamiento'
  },
  {
    id: 27,
    pregunta: '¿Qué carpeta suele contener funciones reutilizables?',
    opciones: [
      'src/helpers/',
      'src/utils/',
      'src/lib/',
      'public/utils/'
    ],
    correcta: 1,
    explicacion: 'La carpeta src/utils/ es donde comúnmente se colocan funciones auxiliares y utilidades reutilizables.',
    categoria: 'Estructura'
  },
  {
    id: 28,
    pregunta: '¿Qué significa SSR?',
    opciones: [
      'Static Server Render',
      'Server-Side Rendering',
      'Super Speed Render',
      'Script Server Response'
    ],
    correcta: 1,
    explicacion: 'SSR significa Server-Side Rendering, el proceso de renderizar páginas en el servidor en lugar del cliente.',
    categoria: 'Conceptos'
  },
  {
    id: 29,
    pregunta: '¿Qué significa SSG?',
    opciones: [
      'Static Site Generation',
      'Server Script Global',
      'Simple Static Grid',
      'Style System Generator'
    ],
    correcta: 0,
    explicacion: 'SSG significa Static Site Generation, el proceso de generar páginas HTML estáticas en tiempo de construcción.',
    categoria: 'Conceptos'
  },
  {
    id: 30,
    pregunta: '¿Qué se recomienda usar para mejor autocompletado?',
    opciones: [
      'Java',
      'PHP',
      'TypeScript',
      'Python'
    ],
    correcta: 2,
    explicacion: 'TypeScript es altamente recomendado en proyectos Astro para obtener mejor autocompletado, detección de errores y tipado.',
    categoria: 'TypeScript'
  },
  {
    id: 31,
    pregunta: '¿Qué archivo se convierte en la ruta "/"?',
    opciones: [
      'home.astro',
      'main.astro',
      'index.astro',
      'root.astro'
    ],
    correcta: 2,
    explicacion: 'El archivo index.astro dentro de src/pages/ se convierte automáticamente en la ruta raíz "/".',
    categoria: 'Enrutamiento'
  },
  {
    id: 32,
    pregunta: '¿Dónde se coloca un favicon?',
    opciones: [
      'src/styles/',
      'public/',
      'src/pages/',
      'src/layouts/'
    ],
    correcta: 1,
    explicacion: 'El favicon se coloca en la carpeta public/ ya que es un archivo estático que se sirve directamente.',
    categoria: 'Estructura'
  },
  {
    id: 33,
    pregunta: '¿Qué atributo permite crear URLs dinámicas?',
    opciones: [
      'src={}',
      'id={}',
      'href={`/usuario/${id}`}',
      'link={}'
    ],
    correcta: 2,
    explicacion: 'El atributo href con template literals permite crear URLs dinámicas interpolando variables.',
    categoria: 'Sintaxis'
  },
  {
    id: 34,
    pregunta: '¿Los comentarios JavaScript en frontmatter se ven en el HTML final?',
    opciones: [
      'Sí',
      'No',
      'Solo en desarrollo',
      'Depende del navegador'
    ],
    correcta: 1,
    explicacion: 'Los comentarios JavaScript en el frontmatter no aparecen en el HTML final porque el frontmatter solo se ejecuta en el servidor.',
    categoria: 'Renderizado'
  },
  {
    id: 35,
    pregunta: '¿Los comentarios HTML se incluyen en el HTML generado?',
    opciones: [
      'Sí',
      'No',
      'Solo en producción',
      'Solo en SSR'
    ],
    correcta: 0,
    explicacion: 'Los comentarios HTML escritos en la parte de template sí se incluyen en el HTML generado.',
    categoria: 'HTML'
  },
  {
    id: 36,
    pregunta: '¿Qué permite usar :global() en estilos?',
    opciones: [
      'Importar CSS externo',
      'Aplicar estilos globales desde un componente',
      'Crear variables CSS',
      'Activar SSR'
    ],
    correcta: 1,
    explicacion: 'El selector :global() permite aplicar estilos globales desde dentro de un componente, escapando del scope local.',
    categoria: 'Estilos'
  },
  {
    id: 37,
    pregunta: '¿Qué archivo puede contener rutas dinámicas como [slug].astro?',
    opciones: [
      'src/components/',
      'src/pages/blog/',
      'public/blog/',
      'src/layouts/'
    ],
    correcta: 1,
    explicacion: 'Los archivos con nombre entre corchetes [slug].astro en src/pages/ crean rutas dinámicas que aceptan parámetros.',
    categoria: 'Enrutamiento'
  },
  {
    id: 38,
    pregunta: '¿Qué ventaja principal ofrece Astro respecto al JS innecesario?',
    opciones: [
      'Más animaciones',
      'Menos HTML',
      'HTML limpio y sin bloat',
      'Más librerías'
    ],
    correcta: 2,
    explicacion: 'Astro genera HTML limpio sin JavaScript innecesario (zero JS by default), mejorando significativamente el rendimiento.',
    categoria: 'Optimización'
  },
  {
    id: 39,
    pregunta: '¿Dónde se recomienda mantener estilos por defecto?',
    opciones: [
      'Siempre globales',
      'En línea',
      'CSS local por defecto',
      'Solo en public/'
    ],
    correcta: 2,
    explicacion: 'Se recomienda usar CSS local por defecto en cada componente para mantener los estilos encapsulados y evitar conflictos.',
    categoria: 'Estilos'
  },
  {
    id: 40,
    pregunta: '¿Cuál es una buena práctica en proyectos Astro?',
    opciones: [
      'Mezclar todo en una carpeta',
      'No usar layouts',
      'Organizar en components, layouts, pages, utils y styles',
      'No usar imports'
    ],
    correcta: 2,
    explicacion: 'Una buena práctica es mantener una estructura organizada con carpetas separadas para componentes, layouts, páginas, utilidades y estilos.',
    categoria: 'Mejores Prácticas'
  }
];

export const astroApuntesInfo: Tema = {
  id: 'astro-apuntes',
  titulo: 'Astro - Quiz Apuntes',
  descripcion: 'Fundamentos completos de Astro: estructura, componentes, renderizado, enrutamiento y mejores prácticas.',
  temas: ['Estructura', 'Componentes', 'Renderizado', 'Enrutamiento', 'Estilos', 'Configuración'],
  color: 'from-violet-500 to-purple-600',
  icono: '🚀',
  asignaturaId: 'sge'
};
