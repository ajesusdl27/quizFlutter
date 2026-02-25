import type { Pregunta, Tema } from '../types';

export const preguntas20_100: Pregunta[] = [
  {
    id: 1,
    pregunta: '¿Qué definición describe mejor a Cloudinary en lugar de considerarlo solo un disco duro?',
    opciones: [
      'Guardar fotos en formato local',
      'Actuar como CDN de medios',
      'Procesar bases de datos grandes',
      'Renderizar código de lado servidor'
    ],
    correcta: 1,
    explicacion: 'Cloudinary se usa principalmente como plataforma de gestión y entrega de medios vía CDN, no como simple almacenamiento local.',
    categoria: 'Cloudinary'
  },
  {
    id: 2,
    pregunta: '¿Qué modo en el "Upload Preset" de Cloudinary permite subir archivos desde el frontend sin contraseña?',
    opciones: [
      'Utilizar el modo llamado Public',
      'Utilizar el modo llamado Signed',
      'Utilizar el modo llamado Unsigned',
      'Utilizar el modo llamado Direct'
    ],
    correcta: 2,
    explicacion: 'El modo Unsigned permite subidas directas desde cliente sin firmar cada petición con una clave secreta.',
    categoria: 'Cloudinary'
  },
  {
    id: 3,
    pregunta: 'En Next.js, ¿qué prefijo requieren las variables de entorno para ser legibles desde el navegador?',
    opciones: [
      'Prefijo global con nombre REACT_APP_',
      'Prefijo público con nombre NEXT_PUBLIC_',
      'Prefijo seguro con nombre NEXT_SECURE_',
      'Prefijo interno con nombre NEXT_INTERNAL_'
    ],
    correcta: 1,
    explicacion: 'Solo las variables con prefijo NEXT_PUBLIC_ se exponen al bundle del cliente en Next.js.',
    categoria: 'Next.js'
  },
  {
    id: 4,
    pregunta: '¿Qué hace exactamente el parámetro f_auto en una URL de imagen de Cloudinary?',
    opciones: [
      'Reduce calidad visual sin notarlo',
      'Cambia imagen a quinientos pixeles',
      'Entrega el formato más ligero',
      'Aplica filtros automáticos de color'
    ],
    correcta: 2,
    explicacion: 'f_auto selecciona automáticamente el formato óptimo (como WebP o AVIF) para reducir peso en cada dispositivo.',
    categoria: 'Cloudinary'
  },
  {
    id: 5,
    pregunta: 'Al configurar un repositorio en Coolify, ¿qué opción de "Build Pack" configura todo automáticamente?',
    opciones: [
      'Opción de paquete llamada Webpack',
      'Opción de paquete llamada Nixpacks',
      'Opción de paquete llamada Docker',
      'Opción de paquete llamada ViteJS'
    ],
    correcta: 1,
    explicacion: 'Nixpacks detecta el stack automáticamente y genera la build sin requerir Dockerfile manual en casos comunes.',
    categoria: 'Coolify'
  },
  {
    id: 6,
    pregunta: 'Si tu repositorio de GitHub es privado, ¿qué tipo de clave te proporcionará Coolify para leerlo?',
    opciones: [
      'Clave pública de tipo SSH',
      'Token privado de uso único',
      'Contraseña maestra de base secreta',
      'Llave secreta para uso interno'
    ],
    correcta: 0,
    explicacion: 'Coolify genera un par SSH y te da la clave pública para añadirla como Deploy Key de solo lectura en GitHub.',
    categoria: 'Coolify'
  },
  {
    id: 7,
    pregunta: 'En un componente de Astro, ¿dónde se ejecuta el código escrito entre los tres guiones ---?',
    opciones: [
      'Directamente en el lado cliente',
      'Solamente en el lado servidor',
      'En ambos entornos de ejecución',
      'Únicamente durante la compilación final'
    ],
    correcta: 1,
    explicacion: 'El frontmatter de Astro se ejecuta en servidor, no en el navegador del usuario.',
    categoria: 'Astro'
  },
  {
    id: 8,
    pregunta: '¿Qué propósito principal tiene la carpeta public/ en la estructura de un proyecto de Astro?',
    opciones: [
      'Contener componentes para uso global',
      'Guardar archivos que requieren procesamiento',
      'Alojar archivos estáticos sin procesamiento',
      'Almacenar rutas dinámicas del sistema'
    ],
    correcta: 2,
    explicacion: 'En public/ van assets estáticos que Astro copia tal cual al build final.',
    categoria: 'Astro'
  },
  {
    id: 9,
    pregunta: '¿Qué etiqueta HTML se utiliza en Astro para inyectar contenido anidado dentro de un Layout?',
    opciones: [
      'Etiqueta especial de nombre children',
      'Etiqueta especial de nombre outlet',
      'Etiqueta especial de nombre content',
      'Etiqueta especial de nombre slot'
    ],
    correcta: 3,
    explicacion: 'La etiqueta <slot /> es el punto de inserción del contenido hijo dentro de layouts y componentes en Astro.',
    categoria: 'Astro'
  },
  {
    id: 10,
    pregunta: '¿Qué es exactamente el protocolo MCP (Model Context Protocol) creado originalmente por Anthropic?',
    opciones: [
      'Protocolo cerrado para bases relacionales',
      'Estándar abierto para integrar IA',
      'Sistema automático para cobrar suscripciones',
      'Librería frontend para renderizar tablas'
    ],
    correcta: 1,
    explicacion: 'MCP es un estándar abierto para conectar modelos de IA con herramientas y fuentes externas de forma estructurada.',
    categoria: 'MCP'
  },
  {
    id: 11,
    pregunta: 'En Supabase, ¿qué mecanismo protege la información de la base de datos a nivel de las filas?',
    opciones: [
      'Políticas de Row Level Security',
      'Sistema de Json Web Tokens',
      'Autenticación basada en O Auth',
      'Reglas de Cross Origin Resource'
    ],
    correcta: 0,
    explicacion: 'RLS aplica reglas por fila para controlar qué registros puede leer o modificar cada usuario.',
    categoria: 'Supabase'
  },
  {
    id: 12,
    pregunta: 'En la API de Stripe, ¿qué concepto moderno representa el intento de completar un cobro?',
    opciones: [
      'Objeto llamado Customer Payment Method',
      'Objeto llamado Stripe Payment Intent',
      'Objeto llamado Automated Webhook Event',
      'Objeto llamado Setup Session Intent'
    ],
    correcta: 1,
    explicacion: 'PaymentIntent modela el ciclo de vida de un pago, desde creación hasta confirmación o fallo.',
    categoria: 'Stripe'
  },
  {
    id: 13,
    pregunta: 'Según el manual del CRM, al usar Stripe en España (EUR), ¿cómo se deben enviar los montos?',
    opciones: [
      'Convertidos siempre a formato dólar',
      'Transformados a valores en céntimos',
      'Redondeados a dos números enteros',
      'Separados usando comas en strings'
    ],
    correcta: 1,
    explicacion: 'Stripe espera la unidad mínima de moneda; en EUR eso significa céntimos.',
    categoria: 'Stripe'
  },
  {
    id: 14,
    pregunta: 'Al crear la página de inicio de sesión del CRM, ¿qué método específico de Supabase se utiliza?',
    opciones: [
      'Método llamado signInWithOAuth en auth',
      'Método llamado signInWithPassword en auth',
      'Método llamado authenticateUser en auth',
      'Método llamado login WithEmail en auth'
    ],
    correcta: 1,
    explicacion: 'Para login por email y contraseña en Supabase Auth se usa auth.signInWithPassword.',
    categoria: 'Supabase'
  },
  {
    id: 15,
    pregunta: 'En la tabla de clientes del CRM, ¿qué tres estados puede tener asignado un cliente por defecto?',
    opciones: [
      'Estado nuevo, recurrente o eliminado',
      'Estado activo, inactivo o prospecto',
      'Estado pendiente, completado o fallido',
      'Estado básico, premium o empresarial'
    ],
    correcta: 1,
    explicacion: 'El modelo del CRM clasifica clientes como activo, inactivo o prospecto para segmentación comercial.',
    categoria: 'CRM'
  },
  {
    id: 16,
    pregunta: '¿Qué versión de la API de Cloudinary se utiliza por defecto en la URL de subida estándar descrita en la guía?',
    opciones: [
      'Emplea la versión uno cero',
      'Emplea la versión uno uno',
      'Emplea la versión dos cero',
      'Emplea la versión dos uno'
    ],
    correcta: 1,
    explicacion: 'La endpoint estándar de subida se publica en la versión v1_1 de la API de Cloudinary.',
    categoria: 'Cloudinary'
  },
  {
    id: 17,
    pregunta: 'Al enviar la imagen a Cloudinary en JavaScript, ¿qué objeto agrupa el archivo y el "Upload Preset" para la petición POST?',
    opciones: [
      'Objeto JavaScript llamado Form Data',
      'Objeto JavaScript llamado Local Storage',
      'Objeto JavaScript llamado Session Data',
      'Objeto JavaScript llamado Window Object'
    ],
    correcta: 0,
    explicacion: 'La subida multipart se construye con FormData incluyendo el archivo y parámetros como upload_preset.',
    categoria: 'Cloudinary'
  },
  {
    id: 18,
    pregunta: 'Para evitar duplicar datos pesados, ¿qué dato exacto que devuelve Cloudinary se guarda finalmente en Supabase?',
    opciones: [
      'Guardar la propiedad secure url',
      'Guardar la propiedad file object',
      'Guardar la propiedad public id',
      'Guardar la propiedad base data'
    ],
    correcta: 0,
    explicacion: 'Guardar secure_url evita almacenar binarios en la base de datos y permite servir el recurso directamente desde CDN.',
    categoria: 'Cloudinary'
  },
  {
    id: 19,
    pregunta: 'Según la guía de Coolify, ¿qué puerto por defecto suele usarse para desplegar aplicaciones creadas con Node.js o React?',
    opciones: [
      'Puerto de conexión ochenta web',
      'Puerto de conexión mil normal',
      'Puerto de conexión tres mil',
      'Puerto de conexión ocho mil'
    ],
    correcta: 2,
    explicacion: 'En despliegues Node/React, el puerto 3000 es una configuración común y habitual en Coolify.',
    categoria: 'Coolify'
  },
  {
    id: 20,
    pregunta: 'En la estructura de carpetas de Astro, ¿qué directorio convierte automáticamente sus archivos internos en rutas de tu sitio?',
    opciones: [
      'Directorio principal llamado src components',
      'Directorio principal llamado src layouts',
      'Directorio principal llamado src pages',
      'Directorio principal llamado src styles'
    ],
    correcta: 2,
    explicacion: 'Astro usa file-based routing en src/pages, convirtiendo cada archivo en una ruta del sitio.',
    categoria: 'Astro'
  }
];

export const tema20_100Info: Tema = {
  id: '20-100',
  titulo: '1/5',
  descripcion: 'Preguntas 1 a 20 del bloque SGE (Cloudinary, Astro, Coolify, MCP, Supabase y Stripe).',
  temas: ['Cloudinary', 'Astro', 'Coolify', 'MCP', 'Supabase', 'Stripe', 'CRM'],
  color: 'from-sky-500 to-blue-600',
  icono: '🧠',
  asignaturaId: 'sge'
};
