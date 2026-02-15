import type { Pregunta, Tema } from '../types';

export const preguntasMcpSupabaseStripe: Pregunta[] = [
  {
    id: 1,
    pregunta: '¿Qué significa MCP?',
    opciones: [
      'Model Communication Platform',
      'Model Context Protocol',
      'Modular Control Process',
      'Multi Cloud Protocol'
    ],
    correcta: 1,
    explicacion: 'MCP significa Model Context Protocol, un protocolo creado por Anthropic para conectar modelos de IA con herramientas externas.',
    categoria: 'MCP'
  },
  {
    id: 2,
    pregunta: '¿Quién creó MCP?',
    opciones: [
      'Google',
      'Microsoft',
      'Anthropic',
      'Stripe'
    ],
    correcta: 2,
    explicacion: 'MCP fue creado por Anthropic para facilitar la integración de modelos de IA con recursos externos.',
    categoria: 'MCP'
  },
  {
    id: 3,
    pregunta: '¿Cuál es el propósito principal de MCP?',
    opciones: [
      'Reemplazar bases de datos',
      'Conectar modelos de IA con herramientas externas',
      'Crear interfaces gráficas',
      'Sustituir APIs REST'
    ],
    correcta: 1,
    explicacion: 'El propósito principal de MCP es conectar modelos de IA con herramientas externas de forma segura y estandarizada.',
    categoria: 'MCP'
  },
  {
    id: 4,
    pregunta: '¿Cuál NO es una característica principal de MCP?',
    opciones: [
      'Seguridad',
      'Interoperabilidad',
      'Compilación de código',
      'Flexibilidad'
    ],
    correcta: 2,
    explicacion: 'MCP se enfoca en seguridad, interoperabilidad y flexibilidad. La compilación de código no es una característica principal del protocolo.',
    categoria: 'MCP'
  },
  {
    id: 5,
    pregunta: 'MCP permite a los modelos de IA acceder a:',
    opciones: [
      'Solo bases de datos locales',
      'Recursos externos y APIs',
      'Archivos del sistema operativo sin control',
      'Solo servidores privados'
    ],
    correcta: 1,
    explicacion: 'MCP permite que los modelos de IA accedan de forma controlada a recursos externos y APIs.',
    categoria: 'MCP'
  },
  {
    id: 6,
    pregunta: 'Una ventaja clave de MCP es:',
    opciones: [
      'Eliminar la autenticación',
      'Evitar el uso de APIs',
      'Integración sin middleware personalizado',
      'Reemplazar PostgreSQL'
    ],
    correcta: 2,
    explicacion: 'MCP facilita la integración sin necesidad de desarrollar middleware personalizado para cada conexión.',
    categoria: 'MCP'
  },
  {
    id: 7,
    pregunta: 'MCP mejora la seguridad porque:',
    opciones: [
      'Expone credenciales al cliente',
      'Controla accesos y autenticaciones',
      'Evita el uso de tokens',
      'No requiere validaciones'
    ],
    correcta: 1,
    explicacion: 'MCP mejora la seguridad controlando accesos y autenticaciones, evitando exponer credenciales directamente.',
    categoria: 'MCP'
  },
  {
    id: 8,
    pregunta: 'Un caso de uso común de MCP es:',
    opciones: [
      'Diseñar interfaces móviles',
      'Conectar asistentes IA con bases de datos',
      'Reemplazar Stripe',
      'Compilar aplicaciones Flutter'
    ],
    correcta: 1,
    explicacion: 'Un caso de uso típico de MCP es conectar asistentes de IA con bases de datos y servicios externos.',
    categoria: 'MCP'
  },
  {
    id: 9,
    pregunta: 'Supabase es:',
    opciones: [
      'Un framework frontend',
      'Un sistema operativo',
      'Un Backend como Servicio (BaaS)',
      'Un CMS'
    ],
    correcta: 2,
    explicacion: 'Supabase es una plataforma Backend como Servicio (BaaS) que proporciona base de datos, autenticación, storage y más.',
    categoria: 'Supabase'
  },
  {
    id: 10,
    pregunta: 'Supabase utiliza como base de datos:',
    opciones: [
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'SQLite'
    ],
    correcta: 2,
    explicacion: 'Supabase está construido sobre PostgreSQL, ofreciendo todas sus características avanzadas.',
    categoria: 'Supabase'
  },
  {
    id: 11,
    pregunta: 'Supabase es alternativa principalmente a:',
    opciones: [
      'AWS EC2',
      'Firebase',
      'Docker',
      'Heroku'
    ],
    correcta: 1,
    explicacion: 'Supabase es una alternativa open source a Firebase, ofreciendo funcionalidades similares con PostgreSQL.',
    categoria: 'Supabase'
  },
  {
    id: 12,
    pregunta: '¿Qué significa RLS en Supabase?',
    opciones: [
      'Remote Login System',
      'Row Level Security',
      'Real-time Login Service',
      'Role Level System'
    ],
    correcta: 1,
    explicacion: 'RLS significa Row Level Security, un sistema de seguridad que permite controlar el acceso a nivel de filas en PostgreSQL.',
    categoria: 'Supabase'
  },
  {
    id: 13,
    pregunta: 'Supabase genera automáticamente:',
    opciones: [
      'Interfaces móviles',
      'APIs REST y GraphQL',
      'Aplicaciones Flutter',
      'Webhooks de Stripe'
    ],
    correcta: 1,
    explicacion: 'Supabase genera automáticamente APIs REST a partir del esquema de la base de datos PostgreSQL.',
    categoria: 'Supabase'
  },
  {
    id: 14,
    pregunta: 'El sistema de autenticación de Supabase soporta:',
    opciones: [
      'JWT',
      'OAuth',
      'RLS',
      'Todas las anteriores'
    ],
    correcta: 3,
    explicacion: 'Supabase Auth soporta JWT para tokens, OAuth para proveedores externos y se integra con RLS para seguridad.',
    categoria: 'Supabase'
  },
  {
    id: 15,
    pregunta: '¿Qué permite Supabase Realtime?',
    opciones: [
      'Actualizar código automáticamente',
      'Suscribirse a cambios en la base de datos',
      'Generar facturas',
      'Crear dominios web'
    ],
    correcta: 1,
    explicacion: 'Supabase Realtime permite suscribirse a cambios en la base de datos en tiempo real mediante WebSockets.',
    categoria: 'Supabase'
  },
  {
    id: 16,
    pregunta: 'Supabase Storage es similar a:',
    opciones: [
      'Google Docs',
      'AWS S3',
      'MySQL',
      'Redis'
    ],
    correcta: 1,
    explicacion: 'Supabase Storage es similar a AWS S3, permitiendo almacenar archivos con control de acceso basado en RLS.',
    categoria: 'Supabase'
  },
  {
    id: 17,
    pregunta: '¿Cuál es una ventaja de Supabase frente a Firebase?',
    opciones: [
      'Es completamente open source',
      'No usa base de datos',
      'No requiere autenticación',
      'Es más caro'
    ],
    correcta: 0,
    explicacion: 'Una ventaja clave de Supabase es que es completamente open source, permitiendo self-hosting.',
    categoria: 'Supabase'
  },
  {
    id: 18,
    pregunta: 'En Supabase Auth, los usuarios se almacenan en:',
    opciones: [
      'auth.users',
      'public.payments',
      'storage.files',
      'api.users'
    ],
    correcta: 0,
    explicacion: 'Los usuarios de Supabase Auth se almacenan en la tabla auth.users del esquema de autenticación.',
    categoria: 'Supabase'
  },
  {
    id: 19,
    pregunta: 'Stripe es:',
    opciones: [
      'Un framework backend',
      'Una base de datos',
      'Una plataforma de pagos',
      'Un servidor MCP'
    ],
    correcta: 2,
    explicacion: 'Stripe es una plataforma de pagos en línea que permite procesar transacciones y gestionar suscripciones.',
    categoria: 'Stripe'
  },
  {
    id: 20,
    pregunta: '¿Qué representa un Customer en Stripe?',
    opciones: [
      'Una factura',
      'Un usuario que paga',
      'Una tarjeta',
      'Una API'
    ],
    correcta: 1,
    explicacion: 'Un Customer en Stripe representa a un usuario o cliente que realiza pagos en la plataforma.',
    categoria: 'Stripe'
  },
  {
    id: 21,
    pregunta: '¿Qué es un Payment Intent?',
    opciones: [
      'Un registro contable',
      'Una intención de realizar un pago',
      'Una suscripción activa',
      'Una base de datos'
    ],
    correcta: 1,
    explicacion: 'Un Payment Intent representa una intención de realizar un pago, gestionando todo el proceso hasta su confirmación.',
    categoria: 'Stripe'
  },
  {
    id: 22,
    pregunta: 'Stripe maneja pagos en:',
    opciones: [
      'Euros únicamente',
      'Centavos (unidad mínima)',
      'Bitcoins exclusivamente',
      'Tokens JWT'
    ],
    correcta: 1,
    explicacion: 'Stripe maneja cantidades en centavos (unidad mínima) para evitar problemas con decimales.',
    categoria: 'Stripe'
  },
  {
    id: 23,
    pregunta: '¿Qué permite Subscriptions en Stripe?',
    opciones: [
      'Pagos únicos',
      'Pagos recurrentes',
      'Crear APIs',
      'Autenticación OAuth'
    ],
    correcta: 1,
    explicacion: 'Subscriptions en Stripe permite gestionar pagos recurrentes automáticos con diferentes periodicidades.',
    categoria: 'Stripe'
  },
  {
    id: 24,
    pregunta: '¿Qué son los Webhooks en Stripe?',
    opciones: [
      'Consultas SQL',
      'Eventos enviados al servidor cuando ocurre algo',
      'Métodos de autenticación',
      'Tablas internas'
    ],
    correcta: 1,
    explicacion: 'Los Webhooks de Stripe son notificaciones HTTP que se envían a tu servidor cuando ocurren eventos importantes.',
    categoria: 'Stripe'
  },
  {
    id: 25,
    pregunta: 'Stripe cumple con estándares de seguridad como:',
    opciones: [
      'GDPR',
      'PCI-DSS',
      'ISO 9001',
      'HIPAA exclusivamente'
    ],
    correcta: 1,
    explicacion: 'Stripe cumple con PCI-DSS (Payment Card Industry Data Security Standard), el estándar de seguridad para pagos.',
    categoria: 'Stripe'
  },
  {
    id: 26,
    pregunta: 'En una integración típica, Supabase gestiona:',
    opciones: [
      'Solo pagos',
      'Usuarios y datos',
      'Infraestructura AWS',
      'Dominios web'
    ],
    correcta: 1,
    explicacion: 'En una integración típica, Supabase se encarga de gestionar usuarios, autenticación y datos de la aplicación.',
    categoria: 'Integración'
  },
  {
    id: 27,
    pregunta: 'Stripe gestiona principalmente:',
    opciones: [
      'Autenticación',
      'Base de datos',
      'Procesamiento de pagos',
      'Servidores MCP'
    ],
    correcta: 2,
    explicacion: 'Stripe se especializa en el procesamiento y gestión de pagos, suscripciones y transacciones.',
    categoria: 'Integración'
  },
  {
    id: 28,
    pregunta: 'El stripe_customer_id se guarda normalmente en:',
    opciones: [
      'Tabla de transacciones',
      'Tabla users en Supabase',
      'Storage',
      'auth.sessions'
    ],
    correcta: 1,
    explicacion: 'El stripe_customer_id se almacena en la tabla de usuarios de Supabase para vincular usuarios con sus perfiles de Stripe.',
    categoria: 'Integración'
  },
  {
    id: 29,
    pregunta: 'El campo amount en Stripe suele almacenarse en:',
    opciones: [
      'Dólares',
      'Euros',
      'Centavos',
      'Decimales flotantes'
    ],
    correcta: 2,
    explicacion: 'Los montos en Stripe siempre se almacenan en centavos (la unidad mínima) para evitar problemas de precisión.',
    categoria: 'Integración'
  },
  {
    id: 30,
    pregunta: '¿Qué evento indica que un pago fue exitoso?',
    opciones: [
      'invoice.failed',
      'payment_intent.succeeded',
      'customer.created',
      'subscription.paused'
    ],
    correcta: 1,
    explicacion: 'El evento payment_intent.succeeded indica que un pago se completó exitosamente en Stripe.',
    categoria: 'Integración'
  },
  {
    id: 31,
    pregunta: 'Un MCP Server puede:',
    opciones: [
      'Ejecutar funciones en Supabase',
      'Consultar Stripe',
      'Exponer herramientas al modelo de IA',
      'Todas las anteriores'
    ],
    correcta: 3,
    explicacion: 'Un MCP Server puede realizar todas estas acciones: ejecutar funciones en Supabase, consultar Stripe y exponer herramientas al modelo de IA.',
    categoria: 'MCP Avanzado'
  },
  {
    id: 32,
    pregunta: 'MCP evita exponer:',
    opciones: [
      'Interfaces',
      'Credenciales directamente al modelo',
      'APIs',
      'Bases de datos'
    ],
    correcta: 1,
    explicacion: 'MCP actúa como capa de seguridad evitando exponer credenciales sensibles directamente al modelo de IA.',
    categoria: 'MCP Avanzado'
  },
  {
    id: 33,
    pregunta: 'En un MCP de Supabase, se usa normalmente:',
    opciones: [
      'SUPABASE_SERVICE_ROLE_KEY',
      'STRIPE_PUBLISHABLE_KEY',
      'JWT público',
      'API pública sin clave'
    ],
    correcta: 0,
    explicacion: 'Para operaciones del servidor en Supabase se usa la SUPABASE_SERVICE_ROLE_KEY que tiene permisos completos.',
    categoria: 'MCP Avanzado'
  },
  {
    id: 34,
    pregunta: 'En producción se recomienda usar:',
    opciones: [
      'Claves de prueba',
      'Claves expuestas al frontend',
      'Variables de entorno',
      'Credenciales hardcodeadas'
    ],
    correcta: 2,
    explicacion: 'En producción siempre se deben usar variables de entorno para almacenar credenciales de forma segura.',
    categoria: 'Buenas Prácticas'
  },
  {
    id: 35,
    pregunta: '¿Por qué validar la firma de un webhook?',
    opciones: [
      'Para mejorar velocidad',
      'Para evitar fraudes',
      'Para reducir costos',
      'Para crear logs'
    ],
    correcta: 1,
    explicacion: 'Validar la firma de un webhook asegura que la petición proviene realmente de Stripe y no es fraudulenta.',
    categoria: 'Buenas Prácticas'
  },
  {
    id: 36,
    pregunta: 'Nunca debes:',
    opciones: [
      'Usar RLS',
      'Exponer claves secretas en el cliente',
      'Usar webhooks',
      'Monitorear errores'
    ],
    correcta: 1,
    explicacion: 'Nunca se deben exponer claves secretas en el cliente, ya que compromete la seguridad de la aplicación.',
    categoria: 'Buenas Prácticas'
  },
  {
    id: 37,
    pregunta: 'Para operaciones críticas en BD se recomienda usar:',
    opciones: [
      'Loops infinitos',
      'Transacciones',
      'Consola manual',
      'Variables globales'
    ],
    correcta: 1,
    explicacion: 'Las transacciones garantizan que las operaciones críticas se completen totalmente o se reviertan en caso de error.',
    categoria: 'Buenas Prácticas'
  },
  {
    id: 38,
    pregunta: 'El monitoreo debe incluir:',
    opciones: [
      'Webhooks fallidos',
      'Transacciones anormales',
      'Logs de errores',
      'Todas las anteriores'
    ],
    correcta: 3,
    explicacion: 'Un monitoreo completo debe incluir webhooks fallidos, transacciones anormales y logs de errores.',
    categoria: 'Buenas Prácticas'
  },
  {
    id: 39,
    pregunta: 'MCP permite que el modelo de IA se enfoque en:',
    opciones: [
      'Gestión de infraestructura',
      'Razonamiento',
      'Manejo de claves',
      'Creación de bases de datos'
    ],
    correcta: 1,
    explicacion: 'MCP maneja la infraestructura y seguridad, permitiendo que el modelo de IA se enfoque en el razonamiento.',
    categoria: 'MCP Avanzado'
  },
  {
    id: 40,
    pregunta: 'La combinación MCP + Supabase + Stripe permite:',
    opciones: [
      'Reemplazar el frontend',
      'Crear un backend SaaS completo con pagos y automatización',
      'Evitar autenticación',
      'Eliminar bases de datos'
    ],
    correcta: 1,
    explicacion: 'La combinación de MCP, Supabase y Stripe permite construir un backend SaaS completo con pagos y automatización inteligente.',
    categoria: 'Arquitectura'
  }
];

export const mcpSupabaseStripeInfo: Tema = {
  id: 'mcp-supabase-stripe',
  titulo: 'Astro - Quiz MCP',
  descripcion: 'Integración completa de Model Context Protocol con Supabase y Stripe para crear backends SaaS con IA.',
  temas: ['MCP', 'Supabase', 'Stripe', 'Integración', 'Webhooks', 'Buenas Prácticas'],
  color: 'from-indigo-500 to-purple-600',
  icono: '🔌',
  asignaturaId: 'sge'
};
