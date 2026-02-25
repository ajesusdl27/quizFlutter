import type { Pregunta, Tema } from '../types';

export const preguntas21_100: Pregunta[] = [
  {
    id: 21,
    pregunta: '¿Cuál es la característica principal de renderizado por defecto que hace que las páginas de Astro sean tan eficientes?',
    opciones: [
      'Renderizado local en el cliente',
      'Renderizado principal en el servidor',
      'Renderizado mixto para bases remotas',
      'Renderizado dinámico en tiempo real'
    ],
    correcta: 1,
    explicacion: 'Astro prioriza el renderizado en servidor/generación HTML, reduciendo JavaScript enviado al cliente.',
    categoria: 'Astro'
  },
  {
    id: 22,
    pregunta: 'Según los apuntes del protocolo MCP, ¿qué responsabilidad específica se le delega al modelo de IA en lugar del middleware?',
    opciones: [
      'Enfocarse exclusivamente en el razonamiento',
      'Enfocarse exclusivamente en la integración',
      'Enfocarse exclusivamente en los datos',
      'Enfocarse exclusivamente en la seguridad'
    ],
    correcta: 0,
    explicacion: 'En el enfoque MCP, el modelo se centra en razonar mientras las integraciones recaen en el protocolo/herramientas.',
    categoria: 'MCP'
  },
  {
    id: 23,
    pregunta: '¿Qué característica avanzada de Supabase permite escuchar alteraciones en la base de datos de manera inmediata?',
    opciones: [
      'Sistema de eventos llamado Storage',
      'Sistema de eventos llamado Realtime',
      'Sistema de eventos llamado Postgres',
      'Sistema de eventos llamado Webhook'
    ],
    correcta: 1,
    explicacion: 'Supabase Realtime transmite cambios de tablas por websockets en tiempo real.',
    categoria: 'Supabase'
  },
  {
    id: 24,
    pregunta: 'Al crear un objeto de suscripción recurrente con Stripe, ¿qué identificador se debe enviar obligatoriamente dentro del array "items"?',
    opciones: [
      'Identificador interno de nombre customer',
      'Identificador interno de nombre price',
      'Identificador interno de nombre token',
      'Identificador interno de nombre intent'
    ],
    correcta: 1,
    explicacion: 'Las suscripciones de Stripe requieren al menos un objeto items con el price id del plan.',
    categoria: 'Stripe'
  },
  {
    id: 25,
    pregunta: 'Al generar el proyecto Astro para el CRM en la terminal, ¿qué plantilla de inicio exacta se especifica en el comando?',
    opciones: [
      'Usar plantilla de tipo blog',
      'Usar plantilla de tipo minimal',
      'Usar plantilla de tipo starlight',
      'Usar plantilla de tipo portfolio'
    ],
    correcta: 1,
    explicacion: 'El manual del CRM parte de la plantilla minimal para empezar con una base limpia.',
    categoria: 'Astro'
  },
  {
    id: 26,
    pregunta: 'En el código SQL del CRM, si se elimina un cliente, ¿qué ocurre automáticamente con sus interacciones en la base de datos?',
    opciones: [
      'Conservan datos de forma huérfana',
      'Generan error por clave foránea',
      'Pasan estado inactivo por defecto',
      'Eliminan registros mediante borrado cascada'
    ],
    correcta: 3,
    explicacion: 'Con ON DELETE CASCADE, al borrar el cliente también se eliminan sus filas relacionadas.',
    categoria: 'CRM'
  },
  {
    id: 27,
    pregunta: 'Al registrar un nuevo pago en el CRM, ¿qué valor de estado predeterminado recibe la transacción en la tabla de Supabase?',
    opciones: [
      'Estado inicial definido como fallido',
      'Estado inicial definido como activo',
      'Estado inicial definido como pendiente',
      'Estado inicial definido como completado'
    ],
    correcta: 2,
    explicacion: 'El estado inicial suele ser pendiente hasta que Stripe confirma o falla la operación.',
    categoria: 'CRM'
  },
  {
    id: 28,
    pregunta: 'Para procesar correctamente los pagos en euros (EUR) con Stripe en el backend, ¿qué operación matemática se aplica a la cantidad?',
    opciones: [
      'Multiplica la cantidad por diez',
      'Multiplica la cantidad por cien',
      'Divide la cantidad por diez',
      'Divide la cantidad por cien'
    ],
    correcta: 1,
    explicacion: 'Stripe recibe importes en la unidad mínima; en EUR se multiplica por 100 para convertir a céntimos.',
    categoria: 'Stripe'
  },
  {
    id: 29,
    pregunta: 'Al optimizar imágenes en Cloudinary mediante la URL, ¿qué parámetro se encarga de reducir la calidad de forma visualmente imperceptible?',
    opciones: [
      'Parámetro URL de nombre f_auto',
      'Parámetro URL de nombre q_auto',
      'Parámetro URL de nombre w_500',
      'Parámetro URL de nombre c_fill'
    ],
    correcta: 1,
    explicacion: 'q_auto ajusta automáticamente la calidad para equilibrar peso y apariencia visual.',
    categoria: 'Cloudinary'
  },
  {
    id: 30,
    pregunta: 'En la página de "registrarse.astro" del CRM, ¿qué validación nativa se exige estrictamente en el input de la contraseña?',
    opciones: [
      'Longitud mínima de seis caracteres',
      'Longitud mínima de ocho caracteres',
      'Longitud mínima de diez caracteres',
      'Longitud mínima de doce caracteres'
    ],
    correcta: 1,
    explicacion: 'El campo de contraseña exige minlength de 8 para una seguridad básica del alta.',
    categoria: 'Supabase'
  },
  {
    id: 31,
    pregunta: 'En Cloudinary, ¿cuál es el propósito exacto de configurar la carpeta (Folder) en el Upload Preset?',
    opciones: [
      'Sirve exclusivamente para restringir el tamaño máximo permitido por cada archivo subido.',
      'Se utiliza principalmente para mantener el orden de los archivos en el servidor.',
      'Funciona como una capa de seguridad extra para bloquear accesos no autorizados.',
      'Determina automáticamente el formato de salida de todas las imágenes procesadas allí.'
    ],
    correcta: 1,
    explicacion: 'La opción Folder organiza recursos en rutas lógicas para mantener orden y facilitar gestión posterior.',
    categoria: 'Cloudinary'
  },
  {
    id: 32,
    pregunta: '¿Qué tipo de petición HTTP requiere la API REST de Cloudinary para ejecutar la subida de un archivo?',
    opciones: [
      'Requiere la ejecución de una petición de tipo GET hacia el servidor.',
      'Requiere la ejecución de una petición de tipo PUT hacia el servidor.',
      'Requiere la ejecución de una petición de tipo POST hacia el servidor.',
      'Requiere la ejecución de una petición de tipo PATCH hacia el servidor.'
    ],
    correcta: 2,
    explicacion: 'La subida de archivos a Cloudinary se hace mediante endpoint HTTP POST multipart/form-data.',
    categoria: 'Cloudinary'
  },
  {
    id: 33,
    pregunta: 'Según la guía de Coolify, si tu proyecto utiliza un repositorio privado en GitHub, ¿qué tipo de permiso específico NO es necesario marcar al configurar la llave?',
    opciones: [
      'No hace falta marcar la opción que permite el acceso de lectura.',
      'No hace falta marcar la opción que permite el acceso de escritura.',
      'No hace falta marcar la opción que habilita la ejecución de scripts.',
      'No hace falta marcar la opción que autoriza la clonación del código.'
    ],
    correcta: 1,
    explicacion: 'Para desplegar desde repositorio privado normalmente basta acceso de lectura; escritura no es necesaria.',
    categoria: 'Coolify'
  },
  {
    id: 34,
    pregunta: 'En la configuración de dominios dentro de Coolify, ¿qué elemento se aconseja sustituir por el nombre de tu proyecto personal?',
    opciones: [
      'Debes sustituir la dirección IP estática que el sistema asigna por defecto.',
      'Debes sustituir el prefijo de subdominio que Coolify proporciona de manera predeterminada.',
      'Debes sustituir la extensión del dominio principal por una de carácter comercial.',
      'Debes sustituir el certificado de seguridad interno por uno validado externamente siempre.'
    ],
    correcta: 1,
    explicacion: 'Se recomienda personalizar el subdominio por defecto para identificar el proyecto y su URL final.',
    categoria: 'Coolify'
  },
  {
    id: 35,
    pregunta: 'En un proyecto de Astro, ¿qué ocurre con los archivos almacenados dentro del directorio public/ durante el proceso de compilación (build)?',
    opciones: [
      'Son procesados intensivamente por el compilador para minificar todo su contenido interno.',
      'Se compilan internamente para transformarse en módulos dinámicos de JavaScript del cliente.',
      'Se copian directamente al directorio final sin recibir ningún tipo de procesamiento.',
      'Son analizados por el sistema para inyectar automáticamente las variables de entorno.'
    ],
    correcta: 2,
    explicacion: 'Los recursos de public/ no pasan por transformaciones de Astro: se copian directamente al output.',
    categoria: 'Astro'
  },
  {
    id: 36,
    pregunta: '¿Para qué sirve exactamente el archivo de configuración astro.config.mjs en la estructura estándar de Astro?',
    opciones: [
      'Está destinado a gestionar las dependencias y paquetes de librerías externas instaladas.',
      'Sirve exclusivamente para definir las variables de entorno secretas del lado servidor.',
      'Se utiliza para configurar las integraciones, los adaptadores y las opciones globales.',
      'Actúa como el controlador principal para las políticas de seguridad del framework.'
    ],
    correcta: 2,
    explicacion: 'astro.config.mjs centraliza integraciones, adaptadores y ajustes globales del proyecto.',
    categoria: 'Astro'
  },
  {
    id: 37,
    pregunta: 'Al usar la directiva map() en Astro para renderizar listas, ¿qué atributo se recomienda usar siempre para optimizar el rendimiento?',
    opciones: [
      'Se debe incluir un atributo de clase único para identificar el elemento.',
      'Se debe incluir un atributo de índice numérico en la etiqueta principal.',
      'Se debe incluir un atributo de clave única denominado key en elementos.',
      'Se debe incluir un atributo identificador dinámico asignado a la propiedad id.'
    ],
    correcta: 2,
    explicacion: 'Usar key en listas facilita reconciliación y evita renderizados incorrectos al actualizar elementos.',
    categoria: 'Astro'
  },
  {
    id: 38,
    pregunta: '¿Qué tipo de comentarios dentro de un componente Astro serán visibles posteriormente en el código HTML generado para el navegador?',
    opciones: [
      'Los comentarios multilínea definidos en la sección superior del bloque de frontmatter.',
      'Los comentarios estándar de formato HTML declarados en la sección del template.',
      'Los comentarios creados utilizando la sintaxis especial de expresiones de tipo JSX.',
      'Los comentarios de una sola línea insertados dentro de las etiquetas script.'
    ],
    correcta: 1,
    explicacion: 'Los comentarios HTML en el template se incluyen en el HTML final; los del frontmatter no llegan al cliente.',
    categoria: 'Astro'
  },
  {
    id: 39,
    pregunta: 'Según el material introductorio sobre MCP, ¿cuál es el beneficio clave que ofrece la separación de responsabilidades?',
    opciones: [
      'El middleware puede optimizar las consultas mientras el modelo almacena los datos.',
      'El modelo de IA se enfoca en razonar mientras MCP maneja integraciones.',
      'El sistema operativo ejecuta tareas pesadas mientras el cliente valida respuestas.',
      'El usuario final aprueba las transacciones mientras el servidor cifra la red.'
    ],
    correcta: 1,
    explicacion: 'Separar razonamiento e integración simplifica arquitectura y reduce acoplamiento entre modelo y sistemas externos.',
    categoria: 'MCP'
  },
  {
    id: 40,
    pregunta: 'En una estructura de Supabase, ¿qué mecanismo tecnológico permite procesar las políticas de seguridad denominadas Row Level Security (RLS)?',
    opciones: [
      'Se ejecutan a través del motor de base de datos relacional PostgreSQL.',
      'Son gestionadas directamente por el servicio perimetral alojado en la red CDN.',
      'Dependen exclusivamente del middleware de autenticación construido mediante funciones de Node.',
      'Se procesan en el entorno de cliente antes de enviar la solicitud.'
    ],
    correcta: 0,
    explicacion: 'RLS se implementa en PostgreSQL, que evalúa políticas en cada consulta sobre las filas.',
    categoria: 'Supabase'
  }
];

export const tema21_100Info: Tema = {
  id: '21-100',
  titulo: '2/5',
  descripcion: 'Preguntas 21 a 40 del bloque SGE (Astro, MCP, Supabase, Stripe, Cloudinary, Coolify y CRM).',
  temas: ['Astro', 'MCP', 'Supabase', 'Stripe', 'Cloudinary', 'Coolify', 'CRM'],
  color: 'from-indigo-500 to-blue-700',
  icono: '📘',
  asignaturaId: 'sge'
};
