import type { Pregunta, Tema } from '../types';

export const preguntas81_100: Pregunta[] = [
  {
    id: 81,
    pregunta: '¿Qué parte de la URL estándar de Cloudinary almacena el identificador único de tu nube personal?',
    opciones: [
      'Se ubica exactamente después del segmento que especifica la versión de la API.',
      'Se ubica exactamente antes del protocolo seguro de transferencia de hipertexto cifrado.',
      'Se ubica exactamente al final del enlace justo antes de la extensión original.',
      'Se ubica exactamente en el parámetro de consulta que define el formato visual.'
    ],
    correcta: 0,
    explicacion: 'En la URL de subida, el cloud name aparece tras el segmento de versión de la API.',
    categoria: 'Cloudinary'
  },
  {
    id: 82,
    pregunta: 'Cuando el proceso de construcción en la plataforma Coolify concluye con total éxito, ¿qué indicador visual aparece?',
    opciones: [
      'El sistema muestra un mensaje de confirmación destacando la palabra desplegado en verde.',
      'El sistema muestra un mensaje de confirmación destacando la palabra publicado en azul.',
      'El sistema muestra un mensaje de confirmación destacando la palabra finalizado en negro.',
      'El sistema muestra un mensaje de confirmación destacando la palabra procesado en blanco.'
    ],
    correcta: 0,
    explicacion: 'Coolify muestra estado de despliegue exitoso en verde como indicador de aplicación activa.',
    categoria: 'Coolify'
  },
  {
    id: 83,
    pregunta: 'Para renderizar un bloque de contenido condicional en Astro mediante el operador lógico AND, ¿qué sintaxis se emplea?',
    opciones: [
      'Se utiliza la expresión evaluada seguida directamente por el doble símbolo de ampersand.',
      'Se utiliza la expresión evaluada seguida directamente por el doble símbolo de tubería.',
      'Se utiliza la expresión evaluada seguida directamente por el doble símbolo de exclamación.',
      'Se utiliza la expresión evaluada seguida directamente por el doble símbolo de interrogación.'
    ],
    correcta: 0,
    explicacion: 'El renderizado condicional simple se hace con condición && contenido.',
    categoria: 'Astro'
  },
  {
    id: 84,
    pregunta: '¿En qué entorno se ejecuta por defecto el código JavaScript insertado dentro de una etiqueta <script> clásica en Astro?',
    opciones: [
      'El bloque de código interactivo se ejecuta de forma exclusiva en el servidor.',
      'El bloque de código interactivo se ejecuta de forma exclusiva en el cliente.',
      'El bloque de código interactivo se ejecuta de forma paralela en ambos entornos.',
      'El bloque de código interactivo se ejecuta de forma asíncrona durante la construcción.'
    ],
    correcta: 1,
    explicacion: 'Una etiqueta <script> en el template se envía al navegador, por tanto se ejecuta en cliente.',
    categoria: 'Astro'
  },
  {
    id: 85,
    pregunta: 'Si deseas incluir múltiples clases CSS almacenadas en una variable dentro de un componente Astro, ¿cómo inyectas el valor?',
    opciones: [
      'Debes envolver el nombre de la variable usando exclusivamente comillas dobles estándar HTML.',
      'Debes envolver el nombre de la variable usando exclusivamente llaves de apertura у cierre.',
      'Debes envolver el nombre de la variable usando exclusivamente corchetes de tipo rectangular.',
      'Debes envolver el nombre de la variable usando exclusivamente paréntesis de tipo circular.'
    ],
    correcta: 1,
    explicacion: 'Las expresiones dinámicas en atributos se inyectan con llaves { } en Astro.',
    categoria: 'Astro'
  },
  {
    id: 86,
    pregunta: '¿Qué directiva se utiliza en la política RLS de Supabase para restringir que los usuarios solo puedan actualizar sus propios clientes?',
    opciones: [
      'La directiva condicional configurada usando la instrucción específica designada como FOR UPDATE.',
      'La directiva condicional configurada usando la instrucción específica designada como FOR INSERT.',
      'La directiva condicional configurada usando la instrucción específica designada como FOR SELECT.',
      'La directiva condicional configurada usando la instrucción específica designada como FOR DELETE.'
    ],
    correcta: 0,
    explicacion: 'Para controlar actualizaciones en RLS se define una política FOR UPDATE con condición de propiedad.',
    categoria: 'Supabase'
  },
  {
    id: 87,
    pregunta: 'Según la interfaz de TypeScript Transaccion del manual CRM, ¿qué tipo de dato se le asigna a la propiedad cantidad?',
    opciones: [
      'Se declara formalmente como una propiedad restrictiva que acepta el formato de string.',
      'Se declara formalmente como una propiedad restrictiva que acepta el formato de number.',
      'Se declara formalmente como una propiedad restrictiva que acepta el formato de bigint.',
      'Se declara formalmente como una propiedad restrictiva que acepta el formato de object.'
    ],
    correcta: 1,
    explicacion: 'La propiedad cantidad se maneja como number para operaciones y validaciones matemáticas.',
    categoria: 'TypeScript'
  },
  {
    id: 88,
    pregunta: 'En los conceptos clave de Stripe, ¿qué entidad se encarga de representar los datos de la tarjeta guardados por un cliente?',
    opciones: [
      'La entidad de la plataforma identificada sistemáticamente con el nombre de Payment Intents.',
      'La entidad de la plataforma identificada sistemáticamente con el nombre de Payment Methods.',
      'La entidad de la plataforma identificada sistemáticamente con el nombre de Setup Sessions.',
      'La entidad de la plataforma identificada sistemáticamente con el nombre de Customer Objects.'
    ],
    correcta: 1,
    explicacion: 'PaymentMethod representa los medios de pago almacenados, incluida tarjeta del cliente.',
    categoria: 'Stripe'
  },
  {
    id: 89,
    pregunta: 'Para establecer correctamente una suscripción en Stripe, ¿qué propiedad interna debe figurar dentro de los elementos del array "items"?',
    opciones: [
      'Una clave descriptiva que asocia directamente el identificador correspondiente al plan de precios.',
      'Una clave descriptiva que asocia directamente el identificador correspondiente al peso del envíο.',
      'Una clave descriptiva que asocia directamente el identificador correspondiente a la tarifa inicial.',
      'Una clave descriptiva que asocia directamente el identificador correspondiente al impuesto del cliente.'
    ],
    correcta: 0,
    explicacion: 'Cada elemento de items debe incluir la clave price con el identificador del plan.',
    categoria: 'Stripe'
  },
  {
    id: 90,
    pregunta: 'En el archivo de servidor MCP de Supabase sugerido, ¿qué variable de entorno se utiliza para instanciar el cliente con permisos administrativos?',
    opciones: [
      'Se emplea la variable secreta de configuración que lleva la denominación SUPABASE_ANON_KEY.',
      'Se emplea la variable secreta de configuración que lleva la denominación SUPABASE_SERVICE_ROLE_KEY.',
      'Se emplea la variable secreta de configuración que lleva la denominación SUPABASE_MASTER_ACCESS_KEY.',
      'Se emplea la variable secreta de configuración que lleva la denominación SUPABASE_ADMIN_PRIVATE_KEY.'
    ],
    correcta: 1,
    explicacion: 'El cliente con privilegios administrativos usa SUPABASE_SERVICE_ROLE_KEY en backend seguro.',
    categoria: 'Supabase'
  },
  {
    id: 91,
    pregunta: 'En el endpoint de la API diseñado para eliminar clientes (DELETE), ¿qué validación de seguridad adicional se ejecuta junto al ID del registro?',
    opciones: [
      'Se comprueba obligatoriamente que coincida con el identificador del usuario autenticado actualmente.',
      'Se comprueba obligatoriamente que coincida con la fecha de creación del documento original.',
      'Se comprueba obligatoriamente que coincida con el rol administrativo del usuario solicitante.',
      'Se comprueba obligatoriamente que coincida con el estado de la conexión del servidor.'
    ],
    correcta: 0,
    explicacion: 'Además del ID del cliente, se valida pertenencia al usuario autenticado para evitar borrados ajenos.',
    categoria: 'CRM'
  },
  {
    id: 92,
    pregunta: 'En el código del componente registrarse.astro, si ocurre un error durante el registro, ¿qué acción visual ejecuta el DOM sobre el bloque HTML?',
    opciones: [
      'Configura la visibilidad del bloque de mensaje pasándolo a estar desplegado en bloque.',
      'Configura la visibilidad del bloque de mensaje pasándolo a estar desplegado como cuadrícula.',
      'Configura la visibilidad del bloque de mensaje pasándolo a estar desplegado como flexible.',
      'Configura la visibilidad del bloque de mensaje pasándolo a estar desplegado en línea.'
    ],
    correcta: 0,
    explicacion: 'El bloque de error se muestra cambiando su display a block para hacerlo visible en la interfaz.',
    categoria: 'Astro'
  },
  {
    id: 93,
    pregunta: 'Al capturar el cuerpo de una petición webhook de Stripe en un entorno Express, ¿qué formato debe procesar el middleware receptor obligatoriamente?',
    opciones: [
      'Debe utilizar el analizador de datos configurado explícitamente para manejar formato de texto.',
      'Debe utilizar el analizador de datos configurado explícitamente para manejar formato binario complejo.',
      'Debe utilizar el analizador de datos configurado explícitamente para manejar formato JSON estándar.',
      'Debe utilizar el analizador de datos configurado explícitamente para manejar formato crudo original.'
    ],
    correcta: 3,
    explicacion: 'Stripe exige el body crudo (raw) para validar la firma del webhook correctamente.',
    categoria: 'Stripe'
  },
  {
    id: 94,
    pregunta: 'Según la tabla comparativa mostrada en los apuntes, ¿qué característica diferencial destaca positivamente a Supabase frente a la alternativa de AWS RDS?',
    opciones: [
      'Proporciona un completo sistema de almacenamiento distribuido geográficamente sin costes de transferencia adicionales.',
      'Proporciona un completo sistema de autenticación integral que ya viene configurado por defecto.',
      'Proporciona un completo sistema de bases de datos documentales optimizado para lecturas masivas.',
      'Proporciona un completo sistema de ejecución de contenedores gestionados mediante complejas orquestaciones automáticas.'
    ],
    correcta: 1,
    explicacion: 'Supabase integra auth de forma nativa, mientras RDS se centra en base de datos administrada.',
    categoria: 'Supabase'
  },
  {
    id: 95,
    pregunta: 'En la herramienta getRevenue del servidor MCP de Stripe, ¿qué método de iteración en JavaScript se emplea para sumar progresivamente todos los montos?',
    opciones: [
      'Se ejecuta una operación secuencial mediante el uso de la función nativa map.',
      'Se ejecuta una operación secuencial mediante el uso de la función nativa reduce.',
      'Se ejecuta una operación secuencial mediante el uso de la función nativa forEach.',
      'Se ejecuta una operación secuencial mediante el uso de la función nativa filter.'
    ],
    correcta: 1,
    explicacion: 'reduce acumula valores del array para obtener la suma total de ingresos.',
    categoria: 'JavaScript'
  },
  {
    id: 96,
    pregunta: 'En la pantalla del CRM para la gestión de clientes, ¿qué atributo HTML ID tiene asignada la etiqueta <tbody> que contiene las filas de usuarios?',
    opciones: [
      'El contenedor principal del listado ha sido bautizado utilizando el identificador designado clientes Tabla.',
      'El contenedor principal del listado ha sido bautizado utilizando el identificador designado tabla Clientes.',
      'El contenedor principal del listado ha sido bautizado utilizando el identificador designado listadoClientes.',
      'El contenedor principal del listado ha sido bautizado utilizando el identificador designado clientesListado.'
    ],
    correcta: 0,
    explicacion: 'Según el material, el tbody usa el ID clientesTabla para insertar dinámicamente las filas.',
    categoria: 'CRM'
  },
  {
    id: 97,
    pregunta: 'Durante el proceso de pago exitoso en el CRM, justo antes de redireccionar la página, ¿qué acción realiza el script sobre el formulario HTML?',
    opciones: [
      'Aplica una instrucción directa encargada de borrar el historial de navegación del usuario.',
      'Aplica una instrucción directa encargada de reiniciar todos los valores ingresados al formulario.',
      'Aplica una instrucción directa encargada de bloquear temporalmente la tarjeta de crédito utilizada.',
      'Aplica una instrucción directa encargada de enviar automáticamente los datos al almacenamiento local.'
    ],
    correcta: 1,
    explicacion: 'Antes de redirigir, el script resetea el formulario para limpiar campos y estado.',
    categoria: 'Stripe'
  },
  {
    id: 98,
    pregunta: 'En la arquitectura de carpetas recomendada para un proyecto básico en Astro, ¿dónde indica el apunte que deben guardarse los ficheros globales de CSS?',
    opciones: [
      'Se aconseja almacenarlos ordenadamente dentro de un directorio principal que se denomina src styles.',
      'Se aconseja almacenarlos ordenadamente dentro de un directorio principal que se denomina src assets.',
      'Se aconseja almacenarlos ordenadamente dentro de un directorio principal que se denomina src global.',
      'Se aconseja almacenarlos ordenadamente dentro de un directorio principal que se denomina src themes.'
    ],
    correcta: 0,
    explicacion: 'La guía recomienda src/styles para estilos globales del proyecto Astro.',
    categoria: 'Astro'
  },
  {
    id: 99,
    pregunta: 'El estándar MCP permite que las aplicaciones de IA interactúen eficazmente con herramientas externas, ¿qué empresa fue la encargada de crearlo originariamente?',
    opciones: [
      'Es un protocolo de comunicación tecnológica desarrollado originalmente por los ingenieros de OpenAl.',
      'Es un protocolo de comunicación tecnológica desarrollado originalmente por los ingenieros de Google.',
      'Es un protocolo de comunicación tecnológica desarrollado originalmente por los ingenieros de Anthropic.',
      'Es un protocolo de comunicación tecnológica desarrollado originalmente por los ingenieros de Microsoft.'
    ],
    correcta: 2,
    explicacion: 'MCP fue propuesto originalmente por Anthropic.',
    categoria: 'MCP'
  },
  {
    id: 100,
    pregunta: 'En el script propuesto para subir una imagen a Cloudinary directamente, ¿qué propiedad de la respuesta de red verifica si el proceso resultó exitoso?',
    opciones: [
      'Verifica detalladamente si el atributo correspondiente a la variable de red devuelve ok.',
      'Verifica detalladamente si el atributo correspondiente a la variable de red devuelve status.',
      'Verifica detalladamente si el atributo correspondiente a la variable de red devuelve message.',
      'Verifica detalladamente si el atributo correspondiente a la variable de red devuelve error.'
    ],
    correcta: 0,
    explicacion: 'En fetch se comprueba response.ok para confirmar que la petición HTTP se completó correctamente.',
    categoria: 'Cloudinary'
  }
];

export const tema81_100Info: Tema = {
  id: '81-100',
  titulo: '5/5',
  descripcion: 'Preguntas 81 a 100 del bloque SGE (Cloudinary, Coolify, Astro, Supabase, Stripe y MCP).',
  temas: ['Cloudinary', 'Coolify', 'Astro', 'Supabase', 'Stripe', 'MCP', 'JavaScript', 'CRM'],
  color: 'from-purple-500 to-indigo-700',
  icono: '🎯',
  asignaturaId: 'sge'
};
