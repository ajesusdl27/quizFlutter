import type { Pregunta, Tema } from '../types';

export const preguntas41_100: Pregunta[] = [
  {
    id: 41,
    pregunta: '¿Qué información almacena la función auth.uid() cuando es utilizada dentro de una política RLS de Supabase?',
    opciones: [
      'Retorna el identificador de sesión único generado por el token del servidor.',
      'Contiene el identificador universal único correspondiente al usuario autenticado en sesión.',
      'Almacena el código de autorización temporal para las solicitudes de tipo API.',
      'Guarda la llave pública anónima configurada en las variables de entorno locales.'
    ],
    correcta: 1,
    explicacion: 'auth.uid() representa el UUID del usuario autenticado, usado en políticas RLS para filtrar filas propias.',
    categoria: 'Supabase'
  },
  {
    id: 42,
    pregunta: 'Al integrar un webhook de Stripe en un entorno Node.js, ¿qué elemento se emplea para validar que el evento proviene legítimamente de Stripe?',
    opciones: [
      'Se verifica utilizando el identificador público del cliente en la base de datos.',
      'Se comprueba mediante la firma criptográfica enviada dentro de las cabeceras HTTP.',
      'Se valida confrontando la dirección IP de origen con los servidores autorizados.',
      'Se autoriza comprobando el token de sesión almacenado en las cookies locales.'
    ],
    correcta: 1,
    explicacion: 'La validación de webhooks de Stripe se basa en su firma criptográfica del header Stripe-Signature.',
    categoria: 'Stripe'
  },
  {
    id: 43,
    pregunta: 'En el esquema SQL recomendado para conectar Supabase y Stripe, ¿qué campo de la tabla de suscripciones se sugiere marcar como único (UNIQUE)?',
    opciones: [
      'El campo que almacena el identificador del plan de precios configurado originalmente.',
      'El campo que enlaza con el identificador del cliente registrado en Stripe.',
      'El campo designado para registrar el identificador de suscripción generado por Stripe.',
      'El campo que relaciona la fila con el identificador del usuario interno.'
    ],
    correcta: 2,
    explicacion: 'El identificador de suscripción de Stripe debe ser único para evitar duplicados de la misma suscripción.',
    categoria: 'Stripe'
  },
  {
    id: 44,
    pregunta: 'Si un asistente IA consulta datos mediante un servidor MCP integrado con Supabase, ¿por qué resulta un proceso seguro?',
    opciones: [
      'Porque el asistente genera tokens de un solo uso para cada petición.',
      'Porque el sistema cifra los resultados antes de mostrarlos en la pantalla.',
      'Porque MCP maneja toda la seguridad sin exponer las credenciales al modelo.',
      'Porque la base de datos restringe las consultas exclusivamente a horarios laborales.'
    ],
    correcta: 2,
    explicacion: 'MCP desacopla razonamiento e integración, evitando exponer credenciales sensibles directamente al modelo.',
    categoria: 'MCP'
  },
  {
    id: 45,
    pregunta: 'Al configurar las variables de entorno para el manual del CRM con Astro, ¿qué clave de Supabase NO lleva el prefijo PUBLIC_?',
    opciones: [
      'La clave de acceso anonimizado que se emplea en el lado cliente.',
      'La ruta del servidor base que direcciona las peticiones de las consultas.',
      'La clave de rol de servicio que cuenta con permisos de administrador.',
      'La variable que determina la configuración regional del formato de las fechas.'
    ],
    correcta: 2,
    explicacion: 'La service role key es sensible y solo debe usarse en servidor, por eso no lleva PUBLIC_.',
    categoria: 'Supabase'
  },
  {
    id: 46,
    pregunta: 'Según el código SQL del manual del CRM, ¿qué tipo de dato se utiliza para definir el identificador principal (id) de la tabla "clientes"?',
    opciones: [
      'Se emplea el formato numérico serial con capacidad de autoincremento por registro.',
      'Se utiliza el estándar universal UUID generado automáticamente de forma completamente aleatoria.',
      'Se declara como una cadena de texto (TEXT) limitada a veinte caracteres.',
      'Se configura como un número entero grande (BIGINT) para manejar gran volumen.'
    ],
    correcta: 1,
    explicacion: 'La tabla clientes usa UUID para identificar registros de forma única y segura.',
    categoria: 'CRM'
  },
  {
    id: 47,
    pregunta: 'En la tabla de transacciones de la base de datos del CRM, ¿qué acción se desencadena si se elimina el registro del usuario (ON DELETE CASCADE)?',
    opciones: [
      'La transacción queda almacenada pero el identificador del usuario se vuelve nulo.',
      'Se genera una alerta de auditoría bloqueando la eliminación del usuario principal.',
      'Se eliminan automáticamente todas las transacciones vinculadas a ese usuario en particular.',
      'Se pausa la operación hasta que un administrador confirme el borrado definitivo.'
    ],
    correcta: 2,
    explicacion: 'ON DELETE CASCADE borra automáticamente los registros hijos asociados al usuario eliminado.',
    categoria: 'CRM'
  },
  {
    id: 48,
    pregunta: 'En la función API creada para registrar un cliente (POST en /api/clientes.ts), ¿qué estado se asigna por defecto al nuevo cliente creado?',
    opciones: [
      'El sistema le asigna automáticamente la etiqueta correspondiente al estado denominado prospecto.',
      'El sistema le asigna automáticamente la etiqueta correspondiente al estado denominado pendiente.',
      'El sistema le asigna automáticamente la etiqueta correspondiente al estado denominado activo.',
      'El sistema le asigna automáticamente la etiqueta correspondiente al estado denominado verificado.'
    ],
    correcta: 2,
    explicacion: 'El estado por defecto de alta en esa API es activo para nuevos clientes.',
    categoria: 'CRM'
  },
  {
    id: 49,
    pregunta: 'Al cargar los clientes en el dashboard (clientes.astro), ¿cómo se distinguen visualmente los clientes "activos" de los "inactivos" en la interfaz de la tabla?',
    opciones: [
      'Mediante insignias de color donde el activo es verde y el inactivo rojo.',
      'Mediante iconos vectoriales acompañando al nombre en la primera columna del listado.',
      'Mediante fuentes tipográficas donde el texto activo aparece en estilo negrita gruesa.',
      'Mediante sombreados de fondo que resaltan únicamente las filas de usuarios conectados.'
    ],
    correcta: 0,
    explicacion: 'La UI usa badges de color para distinguir estados, con verde para activo y rojo para inactivo.',
    categoria: 'CRM'
  },
  {
    id: 50,
    pregunta: 'En el archivo stripe.ts del CRM, ¿qué propiedad de configuración adicional se envía al instanciar el cliente oficial de Stripe?',
    opciones: [
      'Se define explícitamente el tiempo de espera máximo permitido para cada solicitud.',
      'Se especifica obligatoriamente la versión de la API correspondiente a la fecha.',
      'Se adjunta un objeto con los encabezados personalizados para sortear los cortafuegos.',
      'Se habilita el modo de pruebas globales de forma estricta mediante parámetros.'
    ],
    correcta: 1,
    explicacion: 'Se suele fijar la apiVersion al crear el cliente Stripe para un comportamiento estable.',
    categoria: 'Stripe'
  },
  {
    id: 51,
    pregunta: 'En la función crearIntencionPago del CRM, ¿qué utilidad principal tienen los metadatos (metadata) que se envían a los servidores de Stripe?',
    opciones: [
      'Servir como claves de cifrado temporales para validar la tarjeta de crédito.',
      'Determinar la tasa impositiva que debe aplicarse según la región del cliente.',
      'Almacenar referencias internas importantes como el identificador de cliente y de usuario.',
      'Clasificar la transacción en las diferentes categorías contables del panel de control.'
    ],
    correcta: 2,
    explicacion: 'metadata permite vincular pagos de Stripe con IDs internos (usuario/cliente) para trazabilidad.',
    categoria: 'Stripe'
  },
  {
    id: 52,
    pregunta: 'En el endpoint de pagos (/api/pagos.ts), ¿qué información exacta responde el servidor cuando la intención de pago se crea exitosamente en Stripe?',
    opciones: [
      'Devuelve un objeto confirmando el estado del pago junto al recibo digital.',
      'Devuelve el secreto del cliente y el identificador de la intención de pago.',
      'Devuelve el comprobante de liquidación junto al registro actualizado de la factura.',
      'Devuelve una URL de redirección segura para finalizar la compra en otra ventana.'
    ],
    correcta: 1,
    explicacion: 'La API retorna client_secret e id de PaymentIntent para que el frontend confirme el pago.',
    categoria: 'Stripe'
  },
  {
    id: 53,
    pregunta: 'Dentro del componente Formulario Pago.astro, ¿qué cantidad mínima permite introducir el campo numérico configurado en el código HTML?',
    opciones: [
      'El campo numérico establece una restricción con un valor mínimo de cero céntimos.',
      'El campo numérico establece una restricción con un valor mínimo de diez céntimos.',
      'El campo numérico establece una restricción con un valor mínimo de cincuenta céntimos.',
      'El campo numérico establece una restricción con un valor mínimo de cien céntimos.'
    ],
    correcta: 2,
    explicacion: 'El formulario fija mínimo de 0.50€, es decir, cincuenta céntimos.',
    categoria: 'Stripe'
  },
  {
    id: 54,
    pregunta: '¿Qué acción realiza el script del FormularioPago. astro si el método stripe.confirmCard Payment devuelve un estado "succeeded"?',
    opciones: [
      'Descarga automáticamente un documento en formato PDF con la factura del usuario.',
      'Muestra un mensaje de éxito, limpia el formulario y redirige hacia clientes.',
      'Oculta la pasarela de pagos y activa el botón de descarga del producto.',
      'Envía un correo electrónico de notificación utilizando una función nativa del cliente.'
    ],
    correcta: 1,
    explicacion: 'Con pago exitoso, la UX habitual es avisar, resetear formulario y redirigir al listado de clientes.',
    categoria: 'Stripe'
  },
  {
    id: 55,
    pregunta: 'Según las instrucciones del prompt para la IA, ¿de qué colores debe ser el gradiente especificado para el diseño de los estilos visuales?',
    opciones: [
      'Debe implementarse un gradiente lineal que combine tonos oscuros de azul marino.',
      'Debe implementarse un gradiente lineal que alterne matices brillantes de color naranja.',
      'Debe implementarse un gradiente lineal que oscile entre el verde y turquesa.',
      'Debe implementarse un gradiente lineal que transicione utilizando tonos de color morado.'
    ],
    correcta: 3,
    explicacion: 'El prompt describe un gradiente en gama morada como guía visual del diseño.',
    categoria: 'Diseño'
  },
  {
    id: 56,
    pregunta: 'En la estructura de carpetas de Astro sugerida por la IA, ¿dónde debería colocarse el componente de la barra de navegación lateral (Sidebar)?',
    opciones: [
      'Tiene que ubicarse directamente dentro del directorio central designado como src layouts.',
      'Tiene que ubicarse directamente dentro del directorio central designado como src components.',
      'Tiene que ubicarse directamente dentro del directorio central designado como src pages.',
      'Tiene que ubicarse directamente dentro del directorio central designado como src utils.'
    ],
    correcta: 1,
    explicacion: 'Los componentes reutilizables como Sidebar se ubican en src/components.',
    categoria: 'Astro'
  },
  {
    id: 57,
    pregunta: '¿Qué plataforma backend se sugiere como la principal alternativa de código cerrado al utilizar Supabase para la gestión de datos?',
    opciones: [
      'La plataforma en la nube gestionada por Amazon denominada como AWS RDS.',
      'La infraestructura de servicios integrados administrada por Google y conocida como Firebase.',
      'El entorno de alojamiento web especializado en despliegues estáticos llamado Netlify Cloud.',
      'La red de distribución de contenidos dinámicos operada globalmente por Cloudflare Workers.'
    ],
    correcta: 1,
    explicacion: 'Firebase suele citarse como alternativa cerrada frente al enfoque open-source de Supabase.',
    categoria: 'Supabase'
  },
  {
    id: 58,
    pregunta: 'En un servidor MCP configurado para consultar métricas de Stripe (getRevenue), ¿cómo filtra el sistema para sumar solo el dinero real ganado?',
    opciones: [
      'Seleccionando aquellas transacciones que tengan asignado un estado etiquetado como fully paid.',
      'Seleccionando aquellas transacciones que tengan asignado un estado etiquetado como charge captured.',
      'Seleccionando aquellas transacciones que tengan asignado un estado etiquetado como payment succeeded.',
      'Seleccionando aquellas transacciones que tengan asignado un estado etiquetado como balance settled.'
    ],
    correcta: 2,
    explicacion: 'Solo las transacciones con pago exitoso (succeeded) deben contarse como ingreso real.',
    categoria: 'Stripe'
  },
  {
    id: 59,
    pregunta: 'En el flujo típico de integración MCP-Supabase-Stripe, ¿qué componente es el responsable final de almacenar el registro de la transacción exitosa?',
    opciones: [
      'Es almacenado por el proveedor de autenticación al confirmar el registro temporal.',
      'Es almacenado por la aplicación cliente mediante una variable de estado global.',
      'Es almacenado por la base de datos de Supabase completando el ciclo trazado.',
      'Es almacenado por la interfaz de programación de aplicaciones nativa de Stripe.'
    ],
    correcta: 2,
    explicacion: 'Stripe procesa el pago, pero el registro persistente de negocio queda en Supabase.',
    categoria: 'Integración'
  },
  {
    id: 60,
    pregunta: 'Al configurar las opciones de autenticación en la aplicación CRM, ¿qué requisito de seguridad incluye la etiqueta HTML de la contraseña en el formulario de registro?',
    opciones: [
      'Incorpora un atributo nativo que requiere incluir al menos un símbolo especial.',
      'Incorpora un atributo nativo que obliga a incluir letras en formato mayúscula.',
      'Incorpora un atributo nativo que fuerza a que el contenido sea alfanumérico.',
      'Incorpora un atributo nativo que exige una longitud mínima de ocho caracteres.'
    ],
    correcta: 3,
    explicacion: 'El input usa minlength="8" para exigir una longitud mínima de seguridad básica.',
    categoria: 'Supabase'
  }
];

export const tema41_100Info: Tema = {
  id: '41-100',
  titulo: '3/5',
  descripcion: 'Preguntas 41 a 60 del bloque SGE (Supabase, Stripe, MCP, CRM y Astro).',
  temas: ['Supabase', 'Stripe', 'MCP', 'CRM', 'Astro', 'Diseño', 'Integración'],
  color: 'from-fuchsia-500 to-purple-700',
  icono: '🧩',
  asignaturaId: 'sge'
};
