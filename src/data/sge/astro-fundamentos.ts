import type { Pregunta } from '../types';

export const preguntasAstroFundamentos: Pregunta[] = [
  {
    id: 1,
    pregunta: '¿Cuál es el objetivo principal del proyecto "FashionStore" según el contexto del cliente?',
    opciones: [
      'Crear una tienda en Shopify para vender rápido.',
      'Digitalizar un negocio físico con una solución a medida, escalable y con control total de datos.',
      'Crear un blog de moda sin funcionalidades de venta.',
      'Desplegar una aplicación móvil nativa en iOS y Android.'
    ],
    correcta: 1,
    explicacion: 'FashionStore busca digitalizar un negocio físico con una solución personalizada que ofrezca escalabilidad y control total sobre los datos, a diferencia de las plataformas preconfiguradas como Shopify que limitan la personalización.',
    categoria: 'Arquitectura'
  },
  {
    id: 2,
    pregunta: '¿Qué modo de renderizado de Astro se requiere obligatoriamente para este proyecto?',
    opciones: [
      "output: 'static' (Solo estático).",
      "output: 'server' (Solo servidor).",
      "output: 'hybrid' (Híbrido: SSG + SSR).",
      "output: 'client' (Single Page Application)."
    ],
    correcta: 2,
    explicacion: 'El modo híbrido combina lo mejor de ambos mundos: páginas estáticas (SSG) para el catálogo público con excelente SEO y velocidad, más renderizado en servidor (SSR) para funcionalidades dinámicas como el panel de administración y el carrito.',
    categoria: 'Arquitectura'
  },
  {
    id: 3,
    pregunta: '¿Por qué se utiliza Generación Estática (SSG) para el catálogo público de productos?',
    opciones: [
      'Porque es más fácil de programar.',
      'Para mejorar el SEO (posicionamiento en Google) y la velocidad de carga.',
      'Porque Supabase no permite conexiones en tiempo real.',
      'Para que el carrito de compra funcione mejor.'
    ],
    correcta: 1,
    explicacion: 'Las páginas generadas estáticamente se sirven instantáneamente como HTML pregenerado, lo que mejora drásticamente la velocidad de carga y el SEO ya que los motores de búsqueda pueden indexar el contenido completo sin ejecutar JavaScript.',
    categoria: 'Renderizado'
  },
  {
    id: 4,
    pregunta: '¿Qué parte de la aplicación debe funcionar obligatoriamente con Renderizado en Servidor (SSR)?',
    opciones: [
      'La página de "Quiénes Somos".',
      'El listado de categorías.',
      'El Panel de Administración y el Carrito (lógica de sesión y stock en tiempo real).',
      'El footer de la web.'
    ],
    correcta: 2,
    explicacion: 'El panel de administración requiere verificación de sesión en cada request, y el carrito necesita validar el stock en tiempo real para evitar sobreventa. Ambos casos requieren SSR para ejecutar lógica en el servidor que no puede ser expuesta al cliente.',
    categoria: 'Renderizado'
  },
  {
    id: 5,
    pregunta: 'En la estructura de carpetas de Astro, ¿qué función cumple la carpeta src/pages?',
    opciones: [
      'Almacenar los componentes reutilizables como botones.',
      'Definir las rutas de la aplicación basadas en archivos.',
      'Guardar las configuraciones de la base de datos.',
      'Almacenar las imágenes estáticas.'
    ],
    correcta: 1,
    explicacion: 'En Astro, cada archivo en src/pages/ se convierte automáticamente en una ruta. Por ejemplo, pages/productos/[slug].astro genera rutas dinámicas como /productos/camisa-lino. Este sistema de file-based routing simplifica la gestión de rutas.',
    categoria: 'Arquitectura'
  },
  {
    id: 6,
    pregunta: '¿Qué tecnología se utilizará para manejar el estado persistente del carrito de compra entre navegaciones?',
    opciones: [
      'Redux.',
      'Context API de React.',
      'Nano Stores.',
      'Cookies nativas exclusivamente.'
    ],
    correcta: 2,
    explicacion: 'Nano Stores es una librería ligera de gestión de estado framework-agnostic que permite compartir estado entre diferentes "islas" de Astro (componentes React/Preact) e incluso persistir datos entre páginas mediante localStorage.',
    categoria: 'Componentes'
  },
  {
    id: 7,
    pregunta: '¿Qué es una "Isla" en la arquitectura de Astro?',
    opciones: [
      'Una imagen aislada del resto del contenido.',
      'Un componente interactivo (React/Preact) que vive dentro de una página estática de HTML.',
      'Una base de datos separada del proyecto principal.',
      'Un servidor VPS dedicado.'
    ],
    correcta: 1,
    explicacion: 'Las "islas" son componentes interactivos que se hidratan en el cliente mientras el resto de la página permanece como HTML estático. Esto implementa el patrón "Islands Architecture" que minimiza el JavaScript enviado al navegador.',
    categoria: 'Arquitectura'
  },
  {
    id: 8,
    pregunta: '¿Cuál es la estética de diseño requerida para "FashionStore"?',
    opciones: [
      'Brutalismo web con colores neón.',
      'Diseño corporativo clásico tipo Windows 95.',
      '"Minimalismo Sofisticado" con priorización de espacio en blanco y tipografías elegantes.',
      'Estilo "Gamification" con muchos elementos interactivos.'
    ],
    correcta: 2,
    explicacion: 'El minimalismo sofisticado es ideal para e-commerce de moda, ya que permite que los productos sean protagonistas sin distracciones, usando espacios blancos generosos y tipografías elegantes que transmiten calidad y profesionalismo.',
    categoria: 'Diseño'
  },
  {
    id: 9,
    pregunta: '¿Qué archivo en Astro se utiliza para definir las variables de entorno como las claves de Supabase?',
    opciones: [
      'config.json',
      '.env',
      'astro.config.mjs',
      'package.json'
    ],
    correcta: 1,
    explicacion: 'El archivo .env almacena variables de entorno sensibles (claves API, URLs de base de datos) que no deben subirse al repositorio git. Astro accede a estas variables mediante import.meta.env.',
    categoria: 'Configuración'
  },
  {
    id: 10,
    pregunta: 'En un componente .astro, ¿qué código se ejecuta entre los guiones triples ---?',
    opciones: [
      'El código JavaScript que se envía al navegador del cliente.',
      'Los estilos CSS globales.',
      'La lógica del servidor (Frontmatter), que no se envía al cliente.',
      'El HTML final.'
    ],
    correcta: 2,
    explicacion: 'El frontmatter (código entre ---) se ejecuta únicamente en el servidor durante el build o en cada request (SSR). Aquí puedes hacer consultas a bases de datos, leer archivos o ejecutar lógica que no quieres exponer al cliente.',
    categoria: 'Componentes'
  },
  {
    id: 11,
    pregunta: '¿Cómo se pasan datos de un componente padre a un hijo en Astro?',
    opciones: [
      'Usando Astro.props.',
      'Usando Astro.state.',
      'Mediante variables globales.',
      'Usando localStorage.'
    ],
    correcta: 0,
    explicacion: 'Astro.props es el objeto que contiene todas las propiedades pasadas desde el componente padre al hijo, similar a props en React. Se define mediante la interfaz Props en TypeScript para type safety.',
    categoria: 'Componentes'
  },
  {
    id: 12,
    pregunta: '¿Qué funcionalidad específica permite insertar contenido HTML anidado dentro de un Layout en Astro?',
    opciones: [
      '<insert />',
      '<children />',
      '<slot />',
      '<yield />'
    ],
    correcta: 2,
    explicacion: 'El elemento <slot /> en Astro funciona como en Web Components: marca el lugar donde se insertará el contenido hijo. Es fundamental para crear layouts reutilizables que envuelven diferentes páginas.',
    categoria: 'Componentes'
  },
  {
    id: 13,
    pregunta: 'Para la sección "Ofertas Flash", el cliente necesita un "interruptor". ¿Qué implica esto técnicamente?',
    opciones: [
      'Modificar el código HTML manualmente cada vez que se quiera ocultar.',
      'Un campo booleano en la base de datos que el frontend consulta para renderizar o no la sección.',
      'Borrar los productos de oferta de la base de datos.',
      'Usar un display: none en CSS fijo.'
    ],
    correcta: 1,
    explicacion: 'Un campo booleano (ej: "ofertas_activas") en una tabla de configuración permite al administrador activar/desactivar la sección sin tocar código. El frontend consulta esta flag y renderiza condicionalmente la sección.',
    categoria: 'Arquitectura'
  },
  {
    id: 14,
    pregunta: '¿Qué framework CSS se utilizará para los estilos del proyecto?',
    opciones: [
      'Bootstrap.',
      'Sass puro.',
      'Tailwind CSS.',
      'CSS Modules.'
    ],
    correcta: 2,
    explicacion: 'Tailwind CSS es un framework utility-first que permite construir diseños personalizados rápidamente usando clases predefinidas, sin escribir CSS custom. Se integra perfectamente con Astro y facilita el mantenimiento.',
    categoria: 'Diseño'
  },
  {
    id: 15,
    pregunta: '¿Qué significa que Astro es "UI-agnostic"?',
    opciones: [
      'Que no tiene interfaz de usuario.',
      'Que puedes usar componentes de React, Vue, Svelte o Preact en el mismo proyecto.',
      'Que solo funciona con HTML puro.',
      'Que no soporta CSS.'
    ],
    correcta: 1,
    explicacion: 'UI-agnostic significa que Astro no te obliga a usar un framework específico. Puedes mezclar componentes de React, Vue, Svelte y Preact en el mismo proyecto, usando cada uno donde tenga más sentido.',
    categoria: 'Arquitectura'
  },
  {
    id: 16,
    pregunta: '¿Dónde se deben colocar los archivos estáticos como favicon.svg o logo.png en Astro?',
    opciones: [
      'En src/assets.',
      'En src/images.',
      'En la carpeta public/.',
      'En la raíz del proyecto.'
    ],
    correcta: 2,
    explicacion: 'Los archivos en public/ se copian tal cual al build final sin procesamiento. Se acceden directamente mediante /favicon.svg. Es ideal para archivos que no necesitan optimización como favicons, robots.txt o manifests.',
    categoria: 'Configuración'
  },
  {
    id: 17,
    pregunta: 'Si queremos crear una ruta dinámica para productos (ej: /productos/camisa-lino), ¿cómo se debe llamar el archivo en src/pages/productos/?',
    opciones: [
      'producto.astro',
      '[slug].astro',
      '_slug.astro',
      'id.astro'
    ],
    correcta: 1,
    explicacion: 'Los corchetes [slug].astro indican un parámetro dinámico en la ruta. Astro captura el valor de la URL y lo pasa como params.slug, permitiendo generar páginas dinámicas para cada producto.',
    categoria: 'Configuración'
  },
  {
    id: 18,
    pregunta: 'En el Hito 2 ("El Prototipo Funcional"), ¿cuál es el objetivo principal?',
    opciones: [
      'Que la pasarela de pago cobre dinero real.',
      'Tener el diseño final perfecto.',
      'Asegurar que la conexión Base de Datos <-> Web está hecha y el Login funciona.',
      'Tener la documentación técnica terminada.'
    ],
    correcta: 2,
    explicacion: 'El Hito 2 se centra en establecer las conexiones fundamentales: base de datos operativa, autenticación funcionando y flujo básico de datos. Es la base técnica sobre la que se construirá el resto de funcionalidades.',
    categoria: 'Arquitectura'
  },
  {
    id: 19,
    pregunta: '¿Qué ventaja tiene usar TypeScript en el proyecto (env.d.ts, interfaces)?',
    opciones: [
      'Hace que la web cargue más rápido.',
      'Permite autocompletado y detección de errores de tipos durante el desarrollo.',
      'Es obligatorio para usar Supabase.',
      'Permite escribir menos código.'
    ],
    correcta: 1,
    explicacion: 'TypeScript añade tipado estático a JavaScript, lo que permite al IDE ofrecer autocompletado inteligente y detectar errores de tipos antes de ejecutar el código, reduciendo bugs y mejorando la experiencia de desarrollo.',
    categoria: 'Configuración'
  },
  {
    id: 20,
    pregunta: 'El componente AddToCartButton debe ser interactivo. ¿Qué extensión debe tener preferiblemente si usamos React?',
    opciones: [
      '.astro',
      '.html',
      '.tsx o .jsx',
      '.css'
    ],
    correcta: 2,
    explicacion: 'Los componentes React se escriben en archivos .tsx (TypeScript + JSX) o .jsx (JavaScript + JSX). Para interactividad en el cliente, necesitamos React con su sistema de estado y eventos, no componentes .astro que son estáticos por defecto.',
    categoria: 'Componentes'
  }
];

export const astroFundamentosInfo = {
  id: 'astro-fundamentos',
  titulo: 'Fundamentos de Astro',
  descripcion: 'Arquitectura, renderizado y conceptos core de Astro para desarrollo web moderno',
  temas: [
    'Arquitectura del Proyecto',
    'Sistema de Renderizado (SSG/SSR/Hybrid)',
    'Componentes e Islas',
    'Configuración y File-based Routing'
  ],
  color: 'from-purple-500 to-blue-600',
  icono: '🚀'
};
