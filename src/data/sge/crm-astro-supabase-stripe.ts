import type { Pregunta, Tema } from '../types';

export const preguntasCrmAstroSupabaseStripe: Pregunta[] = [
  {
    id: 1,
    pregunta: '¿Qué versión mínima de Node.js se requiere para el proyecto CRM?',
    opciones: [
      'Node 14',
      'Node 16',
      'Node 18',
      'Node 20'
    ],
    correcta: 2,
    explicacion: 'El proyecto CRM requiere Node.js versión 18 o superior para funcionar correctamente con Astro y sus dependencias.',
    categoria: 'Setup'
  },
  {
    id: 2,
    pregunta: '¿Qué comando crea el proyecto Astro minimal?',
    opciones: [
      'npm create astro-app',
      'npm create astro@latest crm-app -- --template minimal --install --git',
      'npx astro init',
      'npm init astro'
    ],
    correcta: 1,
    explicacion: 'El comando npm create astro@latest con las opciones --template minimal, --install y --git crea un proyecto Astro mínimo con instalación automática y repositorio git.',
    categoria: 'Setup'
  },
  {
    id: 3,
    pregunta: '¿Cuál de las siguientes dependencias NO es necesaria según el manual?',
    opciones: [
      '@supabase/supabase-js',
      'stripe',
      'express',
      'dotenv'
    ],
    correcta: 2,
    explicacion: 'Express no es necesario porque Astro tiene su propio sistema de rutas y endpoints API sin necesidad de un servidor Express adicional.',
    categoria: 'Setup'
  },
  {
    id: 4,
    pregunta: '¿Qué variable de entorno se usa en el frontend para Stripe?',
    opciones: [
      'STRIPE_SECRET_KEY',
      'PUBLIC_STRIPE_PUBLISHABLE_KEY',
      'STRIPE_PRIVATE_KEY',
      'STRIPE_WEBHOOK_SECRET'
    ],
    correcta: 1,
    explicacion: 'PUBLIC_STRIPE_PUBLISHABLE_KEY es la clave pública de Stripe que puede ser expuesta en el frontend para inicializar pagos.',
    categoria: 'Setup'
  },
  {
    id: 5,
    pregunta: '¿Por qué debe añadirse el archivo .env al .gitignore?',
    opciones: [
      'Para mejorar rendimiento',
      'Para evitar subir claves secretas',
      'Para reducir tamaño del repo',
      'No es necesario'
    ],
    correcta: 1,
    explicacion: 'El archivo .env contiene credenciales sensibles que nunca deben ser compartidas públicamente en el repositorio.',
    categoria: 'Setup'
  },
  {
    id: 6,
    pregunta: '¿Qué valor debe tener PUBLIC_CURRENCY en España?',
    opciones: [
      'USD',
      'EUR',
      'ES',
      'EURO'
    ],
    correcta: 1,
    explicacion: 'EUR es el código ISO 4217 para el Euro, la moneda oficial de España y la zona euro.',
    categoria: 'Setup'
  },
  {
    id: 7,
    pregunta: '¿Qué representa PUBLIC_REGION=es_ES?',
    opciones: [
      'Tipo de base de datos',
      'Configuración regional española',
      'Tipo de autenticación',
      'Región de Stripe'
    ],
    correcta: 1,
    explicacion: 'es_ES es el código de configuración regional para español de España, afectando formatos de fecha, números y moneda.',
    categoria: 'Setup'
  },
  {
    id: 8,
    pregunta: 'La tabla clientes tiene como clave primaria:',
    opciones: [
      'email',
      'usuario_id',
      'id UUID',
      'nombre'
    ],
    correcta: 2,
    explicacion: 'La tabla clientes usa un UUID como clave primaria, lo cual es una práctica común en PostgreSQL para identificadores únicos distribuidos.',
    categoria: 'Base de Datos'
  },
  {
    id: 9,
    pregunta: '¿Qué ocurre si se elimina un usuario en auth.users?',
    opciones: [
      'No pasa nada',
      'Se eliminan sus clientes por ON DELETE CASCADE',
      'Se bloquean sus pagos',
      'Se pierde la conexión'
    ],
    correcta: 1,
    explicacion: 'La restricción ON DELETE CASCADE garantiza que al eliminar un usuario, todos sus clientes relacionados también se eliminen automáticamente.',
    categoria: 'Base de Datos'
  },
  {
    id: 10,
    pregunta: 'La tabla interacciones está relacionada con:',
    opciones: [
      'Solo usuarios',
      'Solo transacciones',
      'Usuarios y clientes',
      'Stripe directamente'
    ],
    correcta: 2,
    explicacion: 'La tabla interacciones registra las interacciones entre usuarios y clientes, relacionándose con ambas tablas.',
    categoria: 'Base de Datos'
  },
  {
    id: 11,
    pregunta: 'En la tabla transacciones, la moneda por defecto es:',
    opciones: [
      'usd',
      'euro',
      'eur',
      '€'
    ],
    correcta: 2,
    explicacion: 'El código de moneda "eur" (en minúsculas) es el formato estándar utilizado por Stripe y sistemas de pago internacionales.',
    categoria: 'Base de Datos'
  },
  {
    id: 12,
    pregunta: '¿Qué significa habilitar RLS?',
    opciones: [
      'Reiniciar la base de datos',
      'Activar seguridad a nivel de fila',
      'Bloquear inserciones',
      'Crear índices'
    ],
    correcta: 1,
    explicacion: 'RLS (Row Level Security) permite definir políticas de seguridad que controlan qué filas puede ver o modificar cada usuario.',
    categoria: 'Base de Datos'
  },
  {
    id: 13,
    pregunta: 'La política "Usuarios ven solo sus clientes" usa:',
    opciones: [
      'auth.id()',
      'auth.uid()',
      'user.id()',
      'supabase.auth()'
    ],
    correcta: 1,
    explicacion: 'auth.uid() es la función de PostgreSQL/Supabase que devuelve el ID del usuario autenticado actualmente.',
    categoria: 'Base de Datos'
  },
  {
    id: 14,
    pregunta: '¿Qué campo registra la última actualización en clientes?',
    opciones: [
      'updated',
      'fecha_actualizacion',
      'fecha_modificada',
      'last_update'
    ],
    correcta: 1,
    explicacion: 'El campo fecha_actualizacion almacena automáticamente la fecha y hora de la última modificación del registro.',
    categoria: 'Base de Datos'
  },
  {
    id: 15,
    pregunta: '¿Qué método obtiene el usuario autenticado?',
    opciones: [
      'supabase.auth.user()',
      'supabase.auth.getUser()',
      'supabase.getSession()',
      'auth.currentUser()'
    ],
    correcta: 1,
    explicacion: 'supabase.auth.getUser() es el método actual para obtener la información del usuario autenticado en Supabase.',
    categoria: 'Autenticación'
  },
  {
    id: 16,
    pregunta: 'Si no hay usuario autenticado, la API debe responder con:',
    opciones: [
      '200',
      '500',
      '401',
      '302'
    ],
    correcta: 2,
    explicacion: 'El código HTTP 401 (Unauthorized) indica que la petición requiere autenticación y el usuario no está autenticado.',
    categoria: 'Autenticación'
  },
  {
    id: 17,
    pregunta: 'La contraseña en registro debe tener mínimo:',
    opciones: [
      '6 caracteres',
      '8 caracteres',
      '10 caracteres',
      '12 caracteres'
    ],
    correcta: 1,
    explicacion: 'Por seguridad, se requiere un mínimo de 8 caracteres para las contraseñas en el sistema de registro.',
    categoria: 'Autenticación'
  },
  {
    id: 18,
    pregunta: 'El endpoint GET /api/clientes ordena por:',
    opciones: [
      'nombre',
      'fecha_actualizacion',
      'fecha_creacion descendente',
      'estado'
    ],
    correcta: 2,
    explicacion: 'Los clientes se ordenan por fecha_creacion en orden descendente para mostrar los más recientes primero.',
    categoria: 'CRUD'
  },
  {
    id: 19,
    pregunta: 'Para actualizar un cliente se usa método HTTP:',
    opciones: [
      'POST',
      'PATCH',
      'PUT',
      'UPDATE'
    ],
    correcta: 2,
    explicacion: 'El método HTTP PUT se utiliza para actualizar completamente un recurso existente.',
    categoria: 'CRUD'
  },
  {
    id: 20,
    pregunta: 'Para eliminar un cliente se usa:',
    opciones: [
      'GET',
      'DELETE',
      'REMOVE',
      'POST'
    ],
    correcta: 1,
    explicacion: 'El método HTTP DELETE es el estándar para eliminar un recurso en APIs RESTful.',
    categoria: 'CRUD'
  },
  {
    id: 21,
    pregunta: '¿Qué condición evita que un usuario edite clientes ajenos?',
    opciones: [
      "eq('id', cuerpo.id)",
      "eq('usuario_id', user.id)",
      'RLS deshabilitado',
      'Middleware externo'
    ],
    correcta: 1,
    explicacion: 'La condición eq(\'usuario_id\', user.id) asegura que solo se puedan editar clientes que pertenezcan al usuario autenticado.',
    categoria: 'CRUD'
  },
  {
    id: 22,
    pregunta: 'Después de eliminar un cliente, la tabla debe:',
    opciones: [
      'Recargarse automáticamente',
      'Reiniciar sesión',
      'Cambiar moneda',
      'Desconectarse'
    ],
    correcta: 0,
    explicacion: 'La tabla debe recargarse automáticamente para reflejar los cambios y mostrar la lista actualizada sin el cliente eliminado.',
    categoria: 'CRUD'
  },
  {
    id: 23,
    pregunta: '¿En qué unidad se envían los montos a Stripe?',
    opciones: [
      'Euros',
      'Céntimos',
      'Decimales flotantes',
      'Miles'
    ],
    correcta: 1,
    explicacion: 'Stripe siempre trabaja con la unidad mínima (céntimos) para evitar problemas de precisión con decimales.',
    categoria: 'Stripe'
  },
  {
    id: 24,
    pregunta: '¿Cuántos céntimos son 50€?',
    opciones: [
      '50',
      '500',
      '5000',
      '50000'
    ],
    correcta: 2,
    explicacion: '50 euros equivalen a 5000 céntimos (50 × 100 = 5000), que es el formato que usa Stripe.',
    categoria: 'Stripe'
  },
  {
    id: 25,
    pregunta: 'La función crearIntencionPago convierte euros a céntimos usando:',
    opciones: [
      'cantidad * 10',
      'cantidad / 100',
      'Math.round(cantidad * 100)',
      'parseInt(cantidad)'
    ],
    correcta: 2,
    explicacion: 'Math.round(cantidad * 100) convierte euros a céntimos y redondea el resultado para evitar decimales.',
    categoria: 'Stripe'
  },
  {
    id: 26,
    pregunta: 'La moneda usada en Stripe para España es:',
    opciones: [
      'usd',
      'eur',
      '€',
      'es'
    ],
    correcta: 1,
    explicacion: 'El código "eur" (en minúsculas) es el identificador de moneda estándar ISO 4217 que usa Stripe para Euros.',
    categoria: 'Stripe'
  },
  {
    id: 27,
    pregunta: 'El id de Stripe se guarda en transacciones como:',
    opciones: [
      'stripe_id',
      'payment_id',
      'id_intencion_pago_stripe',
      'stripe_reference'
    ],
    correcta: 2,
    explicacion: 'El campo id_intencion_pago_stripe almacena el identificador único del Payment Intent de Stripe.',
    categoria: 'Stripe'
  },
  {
    id: 28,
    pregunta: 'Si ocurre un error en Stripe, la API responde con:',
    opciones: [
      '200',
      '404',
      '400',
      '302'
    ],
    correcta: 2,
    explicacion: 'El código HTTP 400 (Bad Request) indica que hubo un error en la petición, como datos inválidos o un problema con Stripe.',
    categoria: 'Stripe'
  },
  {
    id: 29,
    pregunta: '¿Cuál es la cantidad mínima validada en el formulario de pago?',
    opciones: [
      '1€',
      '0.10€',
      '0.50€',
      '5€'
    ],
    correcta: 2,
    explicacion: 'Se valida una cantidad mínima de 0.50€ (50 céntimos) para transacciones válidas en el sistema.',
    categoria: 'Stripe'
  },
  {
    id: 30,
    pregunta: 'El endpoint GET /api/pagos devuelve:',
    opciones: [
      'Clientes',
      'Interacciones',
      'Transacciones del usuario',
      'Productos'
    ],
    correcta: 2,
    explicacion: 'El endpoint /api/pagos devuelve todas las transacciones asociadas al usuario autenticado.',
    categoria: 'API'
  },
  {
    id: 31,
    pregunta: 'Las transacciones se ordenan por:',
    opciones: [
      'cantidad',
      'fecha_creacion descendente',
      'estado',
      'moneda'
    ],
    correcta: 1,
    explicacion: 'Las transacciones se ordenan por fecha_creacion en orden descendente para mostrar las más recientes primero.',
    categoria: 'API'
  },
  {
    id: 32,
    pregunta: 'El Header incluye:',
    opciones: [
      'Solo logo',
      'Logo, navegación, email y cerrar sesión',
      'Solo sidebar',
      'Solo footer'
    ],
    correcta: 1,
    explicacion: 'El Header es un componente completo que incluye logo, navegación principal, email del usuario y botón de cerrar sesión.',
    categoria: 'Componentes'
  },
  {
    id: 33,
    pregunta: 'El Sidebar debe:',
    opciones: [
      'Ser horizontal',
      'Tener menú vertical con estado activo',
      'No ser responsive',
      'Usar solo texto'
    ],
    correcta: 1,
    explicacion: 'El Sidebar es un menú vertical que indica visualmente la sección activa en la que se encuentra el usuario.',
    categoria: 'Componentes'
  },
  {
    id: 34,
    pregunta: 'El gradiente principal usado es:',
    opciones: [
      'rojo a azul',
      'verde a amarillo',
      '#667eea a #764ba2',
      'negro a blanco'
    ],
    correcta: 2,
    explicacion: 'El gradiente principal del diseño va desde #667eea (azul) hasta #764ba2 (morado), creando un estilo moderno.',
    categoria: 'Componentes'
  },
  {
    id: 35,
    pregunta: 'El FormularioCliente valida obligatoriamente:',
    opciones: [
      'Teléfono',
      'Empresa',
      'Nombre y correo',
      'Notas'
    ],
    correcta: 2,
    explicacion: 'El formulario requiere obligatoriamente que se complete el nombre y correo electrónico del cliente.',
    categoria: 'Componentes'
  },
  {
    id: 36,
    pregunta: 'Tras guardar un cliente exitosamente debe:',
    opciones: [
      'Recargar servidor',
      'Redirigir a /clientes',
      'Cerrar sesión',
      'Eliminar cliente'
    ],
    correcta: 1,
    explicacion: 'Después de guardar un cliente exitosamente, la aplicación debe redirigir al usuario a la página /clientes.',
    categoria: 'Componentes'
  },
  {
    id: 37,
    pregunta: 'El CRM permite gestionar:',
    opciones: [
      'Solo pagos',
      'Solo clientes',
      'Clientes, interacciones y pagos',
      'Solo usuarios'
    ],
    correcta: 2,
    explicacion: 'El CRM es una aplicación completa que gestiona clientes, sus interacciones y los pagos realizados.',
    categoria: 'Arquitectura'
  },
  {
    id: 38,
    pregunta: 'La interfaz está diseñada en:',
    opciones: [
      'Inglés',
      'Alemán',
      'Español',
      'Multilenguaje automático'
    ],
    correcta: 2,
    explicacion: 'Toda la interfaz de usuario está diseñada y desarrollada específicamente en español.',
    categoria: 'Arquitectura'
  },
  {
    id: 39,
    pregunta: 'El proyecto está configurado específicamente para:',
    opciones: [
      'Estados Unidos',
      'Latinoamérica',
      'España con EUR',
      'Global sin moneda'
    ],
    correcta: 2,
    explicacion: 'El proyecto está configurado específicamente para España, utilizando EUR como moneda y configuración regional es_ES.',
    categoria: 'Arquitectura'
  },
  {
    id: 40,
    pregunta: 'La combinación Astro + Supabase + Stripe permite:',
    opciones: [
      'Crear solo frontend',
      'Backend manual completo',
      'CRM fullstack con autenticación y pagos',
      'Reemplazar Node.js'
    ],
    correcta: 2,
    explicacion: 'Esta combinación de tecnologías permite crear un CRM fullstack completo con autenticación, gestión de datos y procesamiento de pagos.',
    categoria: 'Arquitectura'
  }
];

export const crmAstroSupabaseStripeInfo: Tema = {
  id: 'crm-astro-supabase-stripe',
  titulo: 'Astro - Quiz CRM',
  descripcion: 'Proyecto completo de CRM en español configurado para España: setup, base de datos, autenticación, CRUD, pagos en EUR y arquitectura fullstack.',
  temas: ['Setup', 'Base de Datos', 'Autenticación', 'CRUD', 'Stripe EUR', 'API', 'Componentes', 'Arquitectura'],
  color: 'from-purple-500 to-pink-600',
  icono: '💼',
  asignaturaId: 'sge'
};
