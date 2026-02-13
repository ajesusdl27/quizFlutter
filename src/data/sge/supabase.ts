import type { Pregunta } from '../types';

export const preguntasSupabase: Pregunta[] = [
  {
    id: 21,
    pregunta: '¿Qué rol cumple Supabase en la arquitectura de "FashionStore"?',
    opciones: [
      'Solo base de datos.',
      'Backend-as-a-Service (Base de datos, Auth, Storage, Realtime).',
      'Solo proveedor de autenticación.',
      'Servidor de alojamiento web.'
    ],
    correcta: 1,
    explicacion: 'Supabase es un BaaS completo que proporciona PostgreSQL, autenticación, almacenamiento de archivos y suscripciones en tiempo real, eliminando la necesidad de configurar múltiples servicios independientes.',
    categoria: 'Arquitectura'
  },
  {
    id: 22,
    pregunta: '¿Qué motor de base de datos utiliza Supabase por debajo?',
    opciones: [
      'MySQL.',
      'MongoDB.',
      'PostgreSQL.',
      'SQLite.'
    ],
    correcta: 2,
    explicacion: 'Supabase utiliza PostgreSQL, un sistema de gestión de bases de datos relacional de código abierto conocido por su robustez, extensibilidad y cumplimiento de estándares SQL.',
    categoria: 'Arquitectura'
  },
  {
    id: 23,
    pregunta: '¿Qué mecanismo de seguridad se debe implementar en Supabase para proteger los datos?',
    opciones: [
      'Firewalls externos.',
      'RLS (Row Level Security).',
      'Contraseñas en texto plano.',
      'Ocultar la URL de la API.'
    ],
    correcta: 1,
    explicacion: 'Row Level Security (RLS) es el mecanismo nativo de PostgreSQL que permite definir políticas de acceso a nivel de fila. Controla quién puede ver, crear, actualizar o eliminar cada registro basándose en el usuario actual.',
    categoria: 'RLS'
  },
  {
    id: 24,
    pregunta: '¿Cómo se debe almacenar el precio de los productos en la base de datos para evitar errores de redondeo?',
    opciones: [
      'Como float (decimales).',
      'Como string con el símbolo del euro.',
      'Como integer en céntimos (ej: 2000 para 20,00€).',
      'Como double.'
    ],
    correcta: 2,
    explicacion: 'Almacenar precios como enteros en la unidad más pequeña (céntimos) evita errores de precisión flotante que pueden causar problemas en cálculos monetarios. 2000 céntimos = 20,00€.',
    categoria: 'Datos'
  },
  {
    id: 25,
    pregunta: '¿Qué tabla es necesaria para relacionar productos con sus tipos (Camisas, Pantalones...)?',
    opciones: [
      'tags',
      'categories',
      'inventory',
      'users'
    ],
    correcta: 1,
    explicacion: 'Una tabla "categories" permite clasificar productos en tipos jerárquicos. La relación se establece mediante una clave foránea "category_id" en la tabla products que referencia a categories.',
    categoria: 'Datos'
  },
  {
    id: 26,
    pregunta: 'En la tabla products, ¿qué tipo de dato es adecuado para almacenar múltiples URLs de imágenes?',
    opciones: [
      'TEXT',
      'VARCHAR(255)',
      'ARRAY de textos (text[]) o JSONB.',
      'BLOB.'
    ],
    correcta: 2,
    explicacion: 'PostgreSQL soporta arrays nativos (text[]) y JSONB para datos estructurados. Ambos permiten almacenar múltiples URLs sin necesidad de crear tablas relacionales adicionales, facilitando consultas y manipulación.',
    categoria: 'Datos'
  },
  {
    id: 27,
    pregunta: '¿Qué política RLS es la correcta para la tabla products en la tienda pública?',
    opciones: [
      'ENABLE READ para anon (público) y ENABLE ALL para authenticated (admin).',
      'DISABLE ALL para todos.',
      'ENABLE ALL para anon.',
      'Solo lectura para el admin.'
    ],
    correcta: 0,
    explicacion: 'Los usuarios anónimos (visitantes) solo necesitan leer productos, mientras que los administradores autenticados requieren permisos completos (CRUD) para gestionar el catálogo. Esta política implementa el principio de mínimo privilegio.',
    categoria: 'RLS'
  },
  {
    id: 28,
    pregunta: '¿Qué servicio de Supabase se usará para guardar las fotos de los productos?',
    opciones: [
      'Supabase Database (en base64).',
      'Supabase Storage (Buckets).',
      'Google Drive API.',
      'LocalStorage del navegador.'
    ],
    correcta: 1,
    explicacion: 'Supabase Storage proporciona buckets S3-compatibles para almacenar archivos binarios como imágenes. Es más eficiente que base64 en la BD y ofrece URLs públicas directas con políticas de acceso configurables.',
    categoria: 'Storage'
  },
  {
    id: 29,
    pregunta: 'Para gestionar el stock, ¿qué concepto de base de datos es vital para impedir vender productos sin existencias?',
    opciones: [
      'Índices.',
      'Vistas.',
      'Atomicidad / Transacciones.',
      'Backups.'
    ],
    correcta: 2,
    explicacion: 'Las transacciones atómicas garantizan que operaciones como "verificar stock + decrementar + crear pedido" se ejecuten completamente o fallen juntas, previniendo race conditions donde múltiples usuarios compren el último artículo simultáneamente.',
    categoria: 'Datos'
  },
  {
    id: 30,
    pregunta: '¿Qué función cumple la tabla auth.users en Supabase?',
    opciones: [
      'Es una tabla creada manualmente por nosotros para guardar clientes.',
      'Es una tabla interna de Supabase que gestiona los usuarios registrados y sus credenciales.',
      'Es donde se guardan los administradores del VPS.',
      'No existe esa tabla.'
    ],
    correcta: 1,
    explicacion: 'auth.users es una tabla del esquema interno de Supabase Auth que almacena usuarios, credenciales, metadatos y estado de confirmación. No debe manipularse directamente; se gestiona mediante la API de Auth.',
    categoria: 'Auth'
  },
  {
    id: 31,
    pregunta: 'Si queremos que un usuario solo vea sus propios pedidos, ¿qué condición usaríamos en una política RLS?',
    opciones: [
      'auth.uid() = user_id',
      "user.role === 'admin'",
      'public.access = true',
      'request.ip = user_ip'
    ],
    correcta: 0,
    explicacion: 'auth.uid() devuelve el UUID del usuario autenticado actual. Al compararlo con el campo user_id del registro, la política asegura que cada usuario solo acceda a sus propios pedidos.',
    categoria: 'RLS'
  },
  {
    id: 32,
    pregunta: '¿Qué librería de JavaScript se utiliza para conectar Astro con Supabase?',
    opciones: [
      'axios',
      'pg-promise',
      '@supabase/supabase-js',
      'sequelize'
    ],
    correcta: 2,
    explicacion: '@supabase/supabase-js es el cliente oficial de JavaScript/TypeScript que proporciona métodos para Auth, Database, Storage y Realtime. Se instala con npm y funciona tanto en servidor como en cliente.',
    categoria: 'Arquitectura'
  },
  {
    id: 33,
    pregunta: 'En el manual CRM, ¿qué clave de API es segura para usar en el lado del cliente (navegador)?',
    opciones: [
      'SUPABASE_SERVICE_ROLE_KEY',
      'PUBLIC_SUPABASE_ANON_KEY',
      'La contraseña de la base de datos.',
      'DB_PASSWORD'
    ],
    correcta: 1,
    explicacion: 'La ANON_KEY (anónima) está diseñada para ser pública. Las políticas RLS siguen aplicándose cuando se usa esta key, protegiendo los datos. Es segura para exponerse en el código cliente.',
    categoria: 'RLS'
  },
  {
    id: 34,
    pregunta: '¿Qué clave de API tiene permisos totales y NUNCA debe exponerse en el cliente?',
    opciones: [
      'PUBLIC_SUPABASE_URL',
      'PUBLIC_SUPABASE_ANON_KEY',
      'SUPABASE_SERVICE_ROLE_KEY',
      'PUBLIC_STRIPE_KEY'
    ],
    correcta: 2,
    explicacion: 'La SERVICE_ROLE_KEY bypasea todas las políticas RLS y tiene acceso total a la base de datos. Solo debe usarse en el servidor (backend) para operaciones administrativas. Su exposición compromete completamente la seguridad.',
    categoria: 'RLS'
  },
  {
    id: 35,
    pregunta: '¿Cuál es el comando SQL para crear una tabla con un ID autogenerado?',
    opciones: [
      'id INT PRIMARY KEY',
      'id UUID PRIMARY KEY DEFAULT gen_random_uuid()',
      'id TEXT UNIQUE',
      'create id auto_increment'
    ],
    correcta: 1,
    explicacion: 'gen_random_uuid() es la función de PostgreSQL que genera UUIDs únicos automáticamente. DEFAULT hace que se invoque al insertar sin especificar ID. Los UUIDs son ideales para sistemas distribuidos y seguridad.',
    categoria: 'Datos'
  },
  {
    id: 36,
    pregunta: 'Para subir imágenes desde el Backoffice, ¿qué elemento HTML es necesario configurar correctamente?',
    opciones: [
      'Un input de tipo file con multiple si son varias fotos.',
      'Un textarea.',
      'Un iframe.',
      'Un canvas.'
    ],
    correcta: 0,
    explicacion: 'El input type="file" permite seleccionar archivos del sistema. El atributo "multiple" habilita la selección de varios archivos simultáneamente, útil para productos con múltiples imágenes. accept="image/*" limita a imágenes.',
    categoria: 'Storage'
  },
  {
    id: 37,
    pregunta: '¿Qué significa que Supabase ofrece "Realtime"?',
    opciones: [
      'Que la base de datos es muy rápida.',
      'Que podemos suscribirnos a cambios (INSERT, UPDATE, DELETE) en la base de datos y recibirlos al instante en el frontend.',
      'Que el soporte técnico responde en vivo.',
      'Que no tiene caché.'
    ],
    correcta: 1,
    explicacion: 'Supabase Realtime usa WebSockets para enviar notificaciones al cliente cuando ocurren cambios en tablas específicas. Permite construir interfaces reactivas que se actualizan automáticamente sin polling.',
    categoria: 'Arquitectura'
  },
  {
    id: 38,
    pregunta: 'En el esquema de base de datos sugerido, ¿cuál es la clave foránea (Foreign Key) en la tabla products?',
    opciones: [
      'slug',
      'stock',
      'category_id (que apunta a la tabla categories).',
      'price'
    ],
    correcta: 2,
    explicacion: 'category_id es una clave foránea que relaciona cada producto con una categoría. La constraint FOREIGN KEY garantiza integridad referencial: no puedes asignar un category_id inexistente.',
    categoria: 'Datos'
  },
  {
    id: 39,
    pregunta: '¿Qué debemos hacer para obtener los productos de una categoría específica usando el cliente JS de Supabase?',
    opciones: [
      ".from('products').select('*')",
      ".from('products').select('*').eq('category_id', id_categoria)",
      ".from('categories').insert(products)",
      ".from('products').delete().eq('category', id)"
    ],
    correcta: 1,
    explicacion: 'El método .eq() (equals) filtra registros donde el campo especificado coincide con el valor dado. Esta query construye un SELECT * FROM products WHERE category_id = id_categoria en SQL.',
    categoria: 'Datos'
  },
  {
    id: 40,
    pregunta: '¿Qué ventaja ofrece usar UUIDs en lugar de IDs numéricos incrementales (1, 2, 3...)?',
    opciones: [
      'Son más cortos.',
      'Son más seguros y evitan que se adivine el número de registros o se iteren fácilmente.',
      'Son más fáciles de recordar.',
      'Ocupan menos espacio en disco.'
    ],
    correcta: 1,
    explicacion: 'Los UUIDs son aleatorios y no secuenciales, previniendo que atacantes enumeren recursos (/productos/1, /productos/2...) o estimen el volumen de negocio. También evitan conflictos en sistemas distribuidos.',
    categoria: 'Datos'
  },
  {
    id: 41,
    pregunta: 'Al integrar Supabase Auth en Astro SSR, ¿dónde verificamos si el usuario está logueado?',
    opciones: [
      'En el localStorage.',
      'En el servidor (Astro frontmatter), comprobando la sesión/cookie con supabase.auth.getUser().',
      'Solo mediante CSS.',
      'No se puede verificar en SSR.'
    ],
    correcta: 1,
    explicacion: 'En SSR, debemos verificar la sesión en el servidor (frontmatter de Astro) leyendo la cookie de sesión y validándola con getUser(). Esto protege rutas sensibles antes de renderizar contenido confidencial.',
    categoria: 'Auth'
  },
  {
    id: 42,
    pregunta: '¿Qué ocurre si un usuario intenta acceder a /admin sin estar autenticado?',
    opciones: [
      'Entra igualmente.',
      'Debe ser redirigido (Redirect) a la página de Login.',
      'Se bloquea su IP.',
      'Se borra la base de datos.'
    ],
    correcta: 1,
    explicacion: 'Un middleware o guard en el servidor debe verificar la sesión. Si no está autenticado, devuelve un Astro.redirect("/login") con código 302/303, previniendo acceso no autorizado al panel de administración.',
    categoria: 'Auth'
  },
  {
    id: 43,
    pregunta: '¿Cuál es el propósito de la tabla interacciones mencionada en los apuntes del CRM?',
    opciones: [
      'Guardar los likes de Facebook.',
      'Registrar el historial de comunicación o acciones con un cliente.',
      'Guardar las sesiones de usuario.',
      'Almacenar errores del sistema.'
    ],
    correcta: 1,
    explicacion: 'Una tabla de interacciones registra cada punto de contacto con clientes (emails, llamadas, notas) creando un historial completo. Es fundamental para un CRM efectivo que mejore el seguimiento y personalización.',
    categoria: 'Datos'
  },
  {
    id: 44,
    pregunta: '¿Qué instrucción SQL activa la seguridad a nivel de fila (RLS) en una tabla?',
    opciones: [
      'SECURE TABLE products',
      'ALTER TABLE products ENABLE ROW LEVEL SECURITY',
      'CREATE POLICY products',
      'LOCK TABLE products'
    ],
    correcta: 1,
    explicacion: 'ALTER TABLE ... ENABLE ROW LEVEL SECURITY activa RLS en la tabla. Después, debes crear políticas con CREATE POLICY que definan qué usuarios pueden ver/modificar qué filas.',
    categoria: 'RLS'
  },
  {
    id: 45,
    pregunta: '¿Qué método de autenticación usaremos principalmente para los administradores de FashionStore?',
    opciones: [
      'Login con GitHub.',
      'Email y Contraseña.',
      'FaceID.',
      'Acceso anónimo.'
    ],
    correcta: 1,
    explicacion: 'Email y contraseña es el método más directo y controlado para un panel administrativo. Ofrece control total sobre credenciales sin depender de proveedores externos, ideal para administración interna.',
    categoria: 'Auth'
  }
];

export const supabaseInfo = {
  id: 'supabase',
  titulo: 'Supabase y Base de Datos',
  descripcion: 'PostgreSQL, RLS, Auth, Storage y gestión de datos en Supabase',
  temas: [
    'Arquitectura de Supabase',
    'Row Level Security (RLS)',
    'Gestión de Datos y Tipos',
    'Authentication y Storage',
    'Consultas y Seguridad'
  ],
  color: 'from-green-500 to-emerald-600',
  icono: '🗄️'
};
