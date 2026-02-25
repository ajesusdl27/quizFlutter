import type { Pregunta, Tema } from '../types';

export const preguntas61_100: Pregunta[] = [
  {
    id: 61,
    pregunta: 'Dentro del código del componente Tarjeta en Astro, ¿qué valor adopta por defecto la propiedad color si no se envía al instanciarlo?',
    opciones: [
      'Adopta automáticamente el valor correspondiente a la cadena de texto llamada red.',
      'Adopta automáticamente el valor correspondiente a la cadena de texto llamada blue.',
      'Adopta automáticamente el valor correspondiente a la cadena de texto llamada gray.',
      'Adopta automáticamente el valor correspondiente a la cadena de texto llamada dark.'
    ],
    correcta: 1,
    explicacion: 'En el ejemplo indicado, la prop color usa blue como valor por defecto cuando no se pasa desde el componente padre.',
    categoria: 'Astro'
  },
  {
    id: 62,
    pregunta: '¿Qué indica el símbolo ? seguido de cuando se utiliza dentro del bloque HTML en un archivo con extensión.astro?',
    opciones: [
      'Define la asignación de propiedades opcionales para tipar las interfaces del componente.',
      'Establece la declaración de variables dinámicas que serán interpretadas por el servidor.',
      'Implementa la estructura condicional conocida comúnmente como el operador de tipo ternario.',
      'Representa el método seguro para acceder a objetos que podrían estar indefinidos.'
    ],
    correcta: 2,
    explicacion: 'El patrón ? : corresponde al operador ternario para renderizar una u otra salida condicionalmente.',
    categoria: 'Astro'
  },
  {
    id: 63,
    pregunta: 'Según las mejores prácticas mencionadas para Supabase, ¿qué medida resulta fundamental al realizar operaciones críticas relacionadas con pagos en la base de datos?',
    opciones: [
      'Se aconseja utilizar bloques de transacciones SQL para asegurar la integridad estructural.',
      'Se recomienda duplicar cada registro creado para mantener copias de seguridad inmediatas.',
      'Se sugiere enviar copias ocultas de todos los recibos emitidos a la administración.',
      'Se requiere bloquear el sistema de acceso público durante la ventana de guardado.'
    ],
    correcta: 0,
    explicacion: 'Las transacciones SQL garantizan atomicidad y consistencia en operaciones de pagos.',
    categoria: 'Supabase'
  },
  {
    id: 64,
    pregunta: '¿Cuál de los siguientes objetos representa la forma más moderna recomendada por Stripe para procesar los cobros a los usuarios?',
    opciones: [
      'Los elementos denominados Payment Links diseñados para compras rápidas e integraciones simples.',
      'Los elementos denominados Payment Intents creados para gestionar el ciclo de cobros.',
      'Los elementos denominados Charge Objects orientados a la compatibilidad con plataformas heredadas.',
      'Los elementos denominados Setup Intents enfocados en almacenar métodos de pago futuros.'
    ],
    correcta: 1,
    explicacion: 'Stripe recomienda Payment Intents para gestionar autenticación, confirmación y estados del pago.',
    categoria: 'Stripe'
  },
  {
    id: 65,
    pregunta: 'Al intentar acceder a la API/api/clientes.ts mediante una petición GET, ¿qué respuesta se genera si el usuario no cuenta con una sesión activa?',
    opciones: [
      'Devuelve una redirección automática hacia la página de inicio del portal web.',
      'Devuelve un código de estado número cuatrocientos indicando que existe un error.',
      'Devuelve una estructura JSON vacía simulando que no hay registros almacenados actualmente.',
      'Devuelve un error de formato JSON acompañado por el estado cuatrocientos uno.'
    ],
    correcta: 3,
    explicacion: 'Sin sesión activa la respuesta correcta es no autorizado (401) con mensaje JSON de error.',
    categoria: 'API'
  },
  {
    id: 66,
    pregunta: '¿Cuál es el nombre de la variable de estado utilizada en React para guardar la foto una vez subida a Cloudinary según el esquema conceptual?',
    opciones: [
      'Se identifica con el nombre descriptivo de variable asignado como foto URL.',
      'Se identifica con el nombre descriptivo de variable asignado como imagen URL.',
      'Se identifica con el nombre descriptivo de variable asignado como archivo Subido.',
      'Se identifica con el nombre descriptivo de variable asignado como enlace Seguro.'
    ],
    correcta: 0,
    explicacion: 'En el esquema indicado, la URL final de la imagen se guarda en un estado llamado fotoURL.',
    categoria: 'Cloudinary'
  },
  {
    id: 67,
    pregunta: 'Si el proyecto configurado en Coolify requiere acceso exclusivo al código fuente alojado, ¿en qué sección del repositorio de GitHub se añade la llave pública?',
    opciones: [
      'Debe ser introducida navegando hasta el panel de configuración de los Webhooks.',
      'Debe ser introducida dentro de la configuración general de acciones de repositorio.',
      'Debe ser introducida directamente a través de la pestaña denominada Deploy Keys.',
      'Debe ser introducida configurando los secretos protegidos del entorno del propio proyecto.'
    ],
    correcta: 2,
    explicacion: 'La clave pública de Coolify se añade como Deploy Key en GitHub para acceso de lectura al repo.',
    categoria: 'Coolify'
  },
  {
    id: 68,
    pregunta: 'Al añadir estilos CSS globales a un proyecto Astro (global.css), ¿dónde recomiendan los apuntes realizar su importación principal?',
    opciones: [
      'Dentro del archivo de configuración general del entorno alojado en la raíz.',
      'En el componente estructurado como plantilla base situado en la carpeta layouts.',
      'Directamente en el fichero de indice que sirve como inicio de la aplicación.',
      'A través de la etiqueta de enlace insertada manualmente en cada documento individual.'
    ],
    correcta: 1,
    explicacion: 'La importación global se recomienda en el layout base para aplicarse a todas las páginas.',
    categoria: 'Astro'
  },
  {
    id: 69,
    pregunta: '¿Cómo maneja Astro por defecto la interactividad basada en JavaScript diseñada para ejecutarse del lado del cliente?',
    opciones: [
      'Compila todas las variables del servidor para convertirlas inmediatamente en código reactivo.',
      'Los componentes base no requieren que el entorno cargue JavaScript del cliente.',
      'Depende obligatoriamente de la instalación de una librería complementaria como puede ser React.',
      'Integra un estado global persistente gestionado mediante la herramienta nativa del framework.'
    ],
    correcta: 1,
    explicacion: 'Por defecto Astro prioriza HTML sin JS de cliente salvo que se hidrate explícitamente.',
    categoria: 'Astro'
  },
  {
    id: 70,
    pregunta: '¿Qué prefijo utilizan los comandos de base de datos dentro del entorno de Supabase SQL Editor para generar automáticamente el identificador único id?',
    opciones: [
      'Utiliza la directiva nativa autoincrement para garantizar la continuidad secuencial del sistema.',
      'Utiliza la instrucción gen_random_uuid() asegurando un nivel alto de entropía matemática.',
      'Utiliza la función incorporada uuid_generate_v4() proporcionada por la extensión correspondiente al motor.',
      'Utiliza el comando automático default_id_generator() programado dentro del núcleo de la base.'
    ],
    correcta: 1,
    explicacion: 'En el ejemplo de Supabase se usa gen_random_uuid() como valor por defecto para UUID.',
    categoria: 'Supabase'
  },
  {
    id: 71,
    pregunta: 'Al configurar Webhooks de Stripe mediante Express Node.js, ¿cómo intercepta el servidor el evento entrante enviado por la plataforma?',
    opciones: [
      'Accede al cuerpo del mensaje transformado previamente utilizando un analizador genérico de texto.',
      'Procesa la información empleando un analizador de cuerpo configurado como formato JSON estándar.',
      'Lee el archivo temporal creado por el sistema tras recibir la señal cifrada.',
      'Extrae la información conservando el formato crudo mediante el analizador express raw.'
    ],
    correcta: 3,
    explicacion: 'Para validar firma de Stripe, Express debe procesar el cuerpo en formato raw, no JSON parseado.',
    categoria: 'Stripe'
  },
  {
    id: 72,
    pregunta: 'Según el diseño del componente TablaClientes.astro, ¿qué acción visual diferencia específicamente el botón diseñado para modificar la información?',
    opciones: [
      'Se identifica claramente porque se renderiza en la pantalla con color amarillo.',
      'Se identifica claramente porque se renderiza en la pantalla con color púrpura.',
      'Se identifica claramente porque se renderiza en la pantalla con color turquesa.',
      'Se identifica claramente porque se renderiza en la pantalla con color naranja.'
    ],
    correcta: 1,
    explicacion: 'En ese diseño, el botón de edición se distingue con estilo púrpura.',
    categoria: 'CRM'
  },
  {
    id: 73,
    pregunta: 'En el manual del CRM, al definir el diseño de la pantalla de transacciones, ¿cuántos céntimos se especifican como equivalente al monto de cincuenta euros?',
    opciones: [
      'Se calcula la cantidad total multiplicando hasta alcanzar el valor de cincuenta.',
      'Se calcula la cantidad total multiplicando hasta alcanzar el valor de quinientos.',
      'Se calcula la cantidad total multiplicando hasta alcanzar el valor de cinco mil.',
      'Se calcula la cantidad total multiplicando hasta alcanzar el valor de cincuenta mil.'
    ],
    correcta: 2,
    explicacion: '50€ equivalen a 5000 céntimos para enviar importes a Stripe.',
    categoria: 'Stripe'
  },
  {
    id: 74,
    pregunta: 'Según la arquitectura de carpetas descrita en los apuntes básicos de Astro, ¿qué tipo de código reside dentro del subdirectorio llamado utils/?',
    opciones: [
      'Las funciones auxiliares, métodos de ayuda, constantes estructurales y lógicas de uso compartido.',
      'Los componentes visuales que conforman elementos aislados y repetitivos de la interfaz gráfica.',
      'Las plantillas principales encargadas de organizar el contenido general del cuerpo de páginas.',
      'Los archivos estáticos y recursos multimedia que no sufren modificaciones por el compilador.'
    ],
    correcta: 0,
    explicacion: 'La carpeta utils agrupa helpers y lógica reutilizable no visual.',
    categoria: 'Astro'
  },
  {
    id: 75,
    pregunta: 'En el script propuesto para el CRM de Astro, ¿qué evento JavaScript activa la función central de registro de usuarios en el archivo registrarse.astro?',
    opciones: [
      'Se desencadena al detectar el evento de pulsación sobre el elemento de validación.',
      'Se desencadena al detectar el evento de tipo submit asociado al formulario principal.',
      'Se desencadena al detectar el evento de teclado registrado en el último campo de texto.',
      'Se desencadena al detectar el evento de carga del modelo asíncrono sobre la ventana.'
    ],
    correcta: 1,
    explicacion: 'El alta de usuario se lanza con el evento submit del formulario.',
    categoria: 'Astro'
  },
  {
    id: 76,
    pregunta: '¿Qué función matemática se utiliza dentro del servidor MCP de Stripe para lograr filtrar adecuadamente las fechas en Unix Timestamp?',
    opciones: [
      'Ejecuta la instrucción nativa Math.round() aplicada a los milisegundos extraídos mediante código.',
      'Ejecuta la instrucción nativa Math.floor() sobre el cálculo del tiempo convertido a segundos.',
      'Ejecuta la instrucción nativa Math.ceil() para asegurar la inclusión completa del último día.',
      'Ejecuta la instrucción nativa Math.trunc() eliminando completamente el residuo del valor numérico procesado.'
    ],
    correcta: 1,
    explicacion: 'Para timestamp Unix en segundos se usa Math.floor(Date.now() / 1000).',
    categoria: 'MCP'
  },
  {
    id: 77,
    pregunta: '¿Cuál es el formato predeterminado utilizado por la herramienta Supabase para devolver los datos solicitados a la base de datos a través del cliente JavaScript?',
    opciones: [
      'Emite la respuesta empaquetada como un documento extendido estructurado mediante lenguaje XML estricto.',
      'Emite la respuesta empaquetada como una colección de elementos ordenados en un Array JavaScript.',
      'Emite la respuesta empaquetada dentro de un objeto contenedor que separa datos y error.',
      'Emite la respuesta empaquetada simulando un conjunto de cadenas formateadas con separadores de coma.'
    ],
    correcta: 2,
    explicacion: 'El cliente Supabase suele devolver un objeto con propiedades data y error.',
    categoria: 'Supabase'
  },
  {
    id: 78,
    pregunta: 'Al configurar el componente de Stripe en Astro, ¿qué función se exporta desde la librería @stripe/stripe-js para iniciar el procesamiento en el frontend?',
    opciones: [
      'Importa el método configurado para montar la instancia conocido bajo el nombre initStripe.',
      'Importa el método configurado para montar la instancia conocido bajo el nombre startStripe.',
      'Importa el método configurado para montar la instancia conocido bajo el nombre loadStripe.',
      'Importa el método configurado para montar la instancia conocido bajo el nombre createStripe.'
    ],
    correcta: 2,
    explicacion: 'En frontend Stripe se inicializa con loadStripe desde @stripe/stripe-js.',
    categoria: 'Stripe'
  },
  {
    id: 79,
    pregunta: 'Dentro del objeto "Payment Intent" de Stripe configurado en el backend, ¿qué propiedad asegura que la pasarela solicite automáticamente los impuestos locales correspondientes?',
    opciones: [
      'Añadiendo la configuración que incluye el objeto estructurado bajo el nombre tax_rates.',
      'Añadiendo la configuración que incluye el objeto estructurado bajo el nombre automatic_tax.',
      'Añadiendo la configuración que incluye el objeto estructurado bajo el nombre calculate_vat.',
      'Añadiendo la configuración que incluye el objeto estructurado bajo el nombre regional_tax.'
    ],
    correcta: 1,
    explicacion: 'La configuración automatic_tax habilita cálculo automático de impuestos cuando aplica.',
    categoria: 'Stripe'
  },
  {
    id: 80,
    pregunta: 'Según las características de Supabase, al comparar su capacidad de ejecución de consultas SQL frente a la herramienta de bases de datos Firebase, ¿cómo se catalogan ambas respectivamente?',
    opciones: [
      'Supabase ofrece un acceso altamente restringido mientras Firebase permite consultas complejas sin ningún límite.',
      'Supabase soporta un acceso completo al sistema relacional mientras Firebase dispone de acceso limitado.',
      'Ambas herramientas se caracterizan por ofrecer el mismo nivel avanzado de ejecución mediante subconsultas.',
      'Ninguna herramienta incluye características nativas para ejecutar código tradicional, requiriendo de integración externa.'
    ],
    correcta: 1,
    explicacion: 'Supabase ofrece SQL completo sobre PostgreSQL, mientras Firebase no es SQL relacional tradicional.',
    categoria: 'Supabase'
  }
];

export const tema61_100Info: Tema = {
  id: '61-100',
  titulo: '4/5',
  descripcion: 'Preguntas 61 a 80 del bloque SGE (Astro, Supabase, Stripe, MCP, API y CRM).',
  temas: ['Astro', 'Supabase', 'Stripe', 'MCP', 'API', 'Cloudinary', 'Coolify', 'CRM'],
  color: 'from-violet-500 to-fuchsia-700',
  icono: '🧪',
  asignaturaId: 'sge'
};
