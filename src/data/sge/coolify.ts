import type { Pregunta } from '../types';

export const preguntasCoolify: Pregunta[] = [
  {
    id: 61,
    pregunta: '¿Dónde se desplegará el proyecto "FashionStore"?',
    opciones: [
      'Vercel.',
      'Netlify.',
      'En nuestra propia infraestructura VPS gestionada con Coolify.',
      'En un hosting compartido (Cpanel).'
    ],
    correcta: 2,
    explicacion: 'FashionStore se despliega en un VPS propio usando Coolify como plataforma de gestión. Esto ofrece control total, costos predecibles y la posibilidad de hospedar múltiples aplicaciones sin límites impuestos por PaaS comerciales.',
    categoria: 'Coolify'
  },
  {
    id: 62,
    pregunta: '¿Qué es Coolify?',
    opciones: [
      'Un framework de JavaScript.',
      'Una herramienta "Self-hosted PaaS" alternativa a Vercel/Heroku para gestionar tus propios servidores.',
      'Un editor de código.',
      'Una base de datos.'
    ],
    correcta: 1,
    explicacion: 'Coolify es una plataforma self-hosted de código abierto que convierte tu VPS en un PaaS similar a Heroku o Vercel. Gestiona despliegues, dominios, SSL y bases de datos mediante una interfaz web intuitiva.',
    categoria: 'Coolify'
  },
  {
    id: 63,
    pregunta: '¿Qué tecnología subyacente usa Coolify para desplegar las aplicaciones?',
    opciones: [
      'FTP.',
      'Docker y contenedores.',
      'Copia y pega de archivos.',
      'Máquinas virtuales de Java.'
    ],
    correcta: 1,
    explicacion: 'Coolify usa Docker para contenerizar cada aplicación. Esto garantiza aislamiento, reproducibilidad y facilita escalado. Cada app corre en su propio contenedor con sus dependencias específicas sin conflictos.',
    categoria: 'Docker'
  },
  {
    id: 64,
    pregunta: 'Si desplegamos un proyecto Astro en modo Híbrido/SSR en Coolify, ¿qué tipo de recurso debemos seleccionar?',
    opciones: [
      'Static Site.',
      'Server resource (Node.js).',
      'Database only.',
      'PHP Server.'
    ],
    correcta: 1,
    explicacion: 'Astro en modo SSR necesita un servidor Node.js que ejecute el código en cada request. "Server resource" mantiene la app corriendo continuamente para manejar peticiones dinámicas, a diferencia de "Static Site" que solo sirve archivos.',
    categoria: 'Coolify'
  },
  {
    id: 65,
    pregunta: '¿Qué es Nixpacks en el contexto de Coolify?',
    opciones: [
      'Un virus.',
      'Una herramienta que detecta automáticamente el lenguaje de tu app (Node, PHP, Python) y crea la imagen Docker sin configuración manual.',
      'Un pack de iconos.',
      'La base de datos de Coolify.'
    ],
    correcta: 1,
    explicacion: 'Nixpacks analiza tu proyecto (detectando package.json, requirements.txt, etc.) y genera automáticamente un Dockerfile optimizado. Simplifica el deployment al eliminar la necesidad de escribir Dockerfiles manualmente para casos comunes.',
    categoria: 'Docker'
  },
  {
    id: 66,
    pregunta: '¿Qué puerto suele exponer por defecto una aplicación Astro/Node.js que debemos configurar en Coolify?',
    opciones: [
      '80',
      '443',
      '3000 o 4321.',
      '21'
    ],
    correcta: 2,
    explicacion: 'Astro dev server usa por defecto el puerto 4321, pero en producción con Node adapter suele ser 3000 o el definido en PORT env variable. Coolify necesita saber este puerto para mapear el proxy inverso correctamente.',
    categoria: 'Configuración'
  },
  {
    id: 67,
    pregunta: 'Para conectar un repositorio Privado de GitHub con Coolify, ¿qué necesitamos añadir en GitHub?',
    opciones: [
      'Nuestra contraseña de usuario.',
      'Una "Deploy Key" (Clave pública generada por Coolify).',
      'Darle permisos de administrador a Coolify.',
      'Hacer el repositorio público.'
    ],
    correcta: 1,
    explicacion: 'Coolify genera un par de claves SSH. Añades la clave pública como "Deploy Key" en la configuración del repositorio de GitHub. Esto da a Coolify acceso de solo lectura para clonar el código sin exponer tu contraseña personal.',
    categoria: 'CI/CD'
  },
  {
    id: 68,
    pregunta: '¿Qué ventaja tiene usar un VPS con Coolify frente a un hosting compartido tradicional?',
    opciones: [
      'Es más caro.',
      'Tienes control total, aislamiento mediante Docker y puedes desplegar cualquier tecnología (Node, DBs, Dockerfiles).',
      'Es más fácil de romper.',
      'Solo sirve para PHP.'
    ],
    correcta: 1,
    explicacion: 'Un VPS con Coolify ofrece control root, posibilidad de instalar cualquier stack tecnológico, aislamiento de recursos y escalabilidad vertical. Los hostings compartidos limitan lenguajes, configuraciones y tienen recursos compartidos que afectan rendimiento.',
    categoria: 'VPS'
  },
  {
    id: 69,
    pregunta: 'En el proceso de despliegue, ¿qué archivo lee Coolify/Nixpacks para saber cómo instalar las dependencias?',
    opciones: [
      'package.json',
      'index.html',
      'readme.md',
      'style.css'
    ],
    correcta: 0,
    explicacion: 'package.json define las dependencias npm y scripts de build (npm run build, npm start). Nixpacks lo detecta para instalar node_modules, ejecutar el build y determinar el comando de inicio de la app.',
    categoria: 'Configuración'
  },
  {
    id: 70,
    pregunta: 'Si cambiamos una variable de entorno en Coolify (ej: clave de base de datos), ¿qué debemos hacer para que surta efecto?',
    opciones: [
      'Nada, es automático.',
      'Redesplegar (Redeploy) la aplicación.',
      'Reiniciar el ordenador.',
      'Cambiar el código.'
    ],
    correcta: 1,
    explicacion: 'Las variables de entorno se leen al iniciar el contenedor. Un redeploy reconstruye y reinicia el contenedor con las nuevas variables. Sin redeploy, el contenedor antiguo sigue corriendo con valores obsoletos.',
    categoria: 'Coolify'
  },
  {
    id: 71,
    pregunta: 'Qué debemos configurar en Coolify para que nuestra web tenga un dominio propio (ej: mi-tienda.com)?',
    opciones: [
      'Editar el archivo hosts de Windows.',
      'Configurar el campo "Domains" en la configuración del recurso en Coolify.',
      'No se puede, Coolify solo usa IPs.',
      'Enviar un correo a Google.'
    ],
    correcta: 1,
    explicacion: 'En la config del recurso, añades el dominio en "Domains". Luego, en tu proveedor DNS (Cloudflare, GoDaddy) creas un registro A que apunte al IP del VPS. Coolify configura el proxy inverso automáticamente.',
    categoria: 'Coolify'
  },
  {
    id: 72,
    pregunta: '¿Qué significa CI/CD en el contexto del despliegue automático conectado a GitHub?',
    opciones: [
      'Código Importante / Código Directo.',
      'Integración Continua / Despliegue Continuo (cada "push" a la rama main actualiza la web).',
      'Copiar Información / Copiar Datos.',
      'Un comando de Linux.'
    ],
    correcta: 1,
    explicacion: 'CI/CD automatiza testing (Continuous Integration) y deployment (Continuous Deployment). Con Coolify + GitHub, cada push a main dispara automáticamente: clone → build → test → deploy, reduciendo errores humanos y acelerando releases.',
    categoria: 'CI/CD'
  },
  {
    id: 73,
    pregunta: '¿Por qué se pide que la aplicación sea compatible con Docker?',
    opciones: [
      'Porque es la mascota del proyecto.',
      'Para asegurar que funciona igual en el ordenador del desarrollador y en el servidor de producción (estandarización del entorno).',
      'Para que vaya más lento.',
      'Porque Docker es un editor de texto.'
    ],
    correcta: 1,
    explicacion: 'Docker encapsula la app con todas sus dependencias. "Funciona en mi máquina" deja de ser excusa: el mismo contenedor que testeas localmente corre en producción. Elimina discrepancias de versiones de Node, librerías del sistema, etc.',
    categoria: 'Docker'
  },
  {
    id: 74,
    pregunta: '¿Qué es un VPS?',
    opciones: [
      'Virtual Private Server (Servidor Privado Virtual).',
      'Very Personal System.',
      'Variable Public Storage.',
      'Un antivirus.'
    ],
    correcta: 0,
    explicacion: 'Un VPS es una máquina virtual con recursos dedicados (CPU, RAM, disco) sobre hardware compartido. Ofrece control root completo, IP dedicada y aislamiento. Proveedores comunes: DigitalOcean, Hetzner, Linode.',
    categoria: 'VPS'
  },
  {
    id: 75,
    pregunta: 'En la configuración de "Build Pack" en Coolify, si no usamos Nixpacks, ¿qué archivo necesitaríamos crear manualmente en la raíz del proyecto?',
    opciones: [
      'Dockerfile',
      'Buildfile',
      'Server.exe',
      'Config.txt'
    ],
    correcta: 0,
    explicacion: 'Un Dockerfile contiene instrucciones paso a paso para construir la imagen Docker: FROM (imagen base), COPY (archivos), RUN (comandos), EXPOSE (puerto), CMD (comando inicio). Es alternativa manual a Nixpacks.',
    categoria: 'Docker'
  },
  {
    id: 76,
    pregunta: '¿Qué comando de npm se ejecuta normalmente para construir la versión de producción de Astro antes de servirla?',
    opciones: [
      'npm run dev',
      'npm run build',
      'npm test',
      'npm start'
    ],
    correcta: 1,
    explicacion: 'npm run build ejecuta el script definido en package.json que llama a astro build. Esto genera páginas estáticas/SSG en dist/ y bundlea código optimizado para producción con minificación y tree-shaking.',
    categoria: 'Configuración'
  },
  {
    id: 77,
    pregunta: '¿Cuál es el propósito del archivo .gitignore?',
    opciones: [
      'Ignorar errores de código.',
      'Evitar subir archivos innecesarios (node_modules) o sensibles (.env) al repositorio git.',
      'Ignorar usuarios molestos.',
      'Documentar el proyecto.'
    ],
    correcta: 1,
    explicacion: '.gitignore lista patrones de archivos/carpetas que git debe ignorar. Previene subir node_modules (reconstruibles), .env (secretos), dist/ (generado) y archivos de editor, manteniendo el repo limpio y seguro.',
    categoria: 'CI/CD'
  },
  {
    id: 78,
    pregunta: 'Si la aplicación necesita subir archivos grandes, ¿dónde es mejor almacenarlos, en el sistema de archivos del contenedor Docker o en un servicio externo (Bucket)?',
    opciones: [
      'En el contenedor Docker, porque es efímero.',
      'En un servicio externo (Bucket Supabase/S3), porque los contenedores pueden reiniciarse y perder datos no persistentes.',
      'En la memoria RAM.',
      'En el código fuente.'
    ],
    correcta: 1,
    explicacion: 'Los contenedores Docker son efímeros: al redeploy se reconstruyen desde cero, perdiendo archivos no persistidos en volúmenes. Usar buckets externos (S3, Supabase Storage) garantiza persistencia y permite CDN para mejor rendimiento.',
    categoria: 'Docker'
  },
  {
    id: 79,
    pregunta: '¿Qué indica el color verde en el estado de despliegue de Coolify?',
    opciones: [
      'Que está procesando.',
      'Que ha fallado.',
      'Que el despliegue ha sido exitoso ("Deployed").',
      'Que el servidor está apagado.'
    ],
    correcta: 2,
    explicacion: 'Verde = "Deployed" = la app está corriendo y health checks pasan. Amarillo = procesando/building. Rojo = error en build o contenedor crasheado. Coolify monitoriza el estado y reinicia automáticamente si detecta fallas.',
    categoria: 'Coolify'
  },
  {
    id: 80,
    pregunta: 'Al configurar el dominio en Coolify, si usamos https, ¿quién se encarga normalmente de gestionar el certificado SSL (candado de seguridad)?',
    opciones: [
      'Debemos comprarlo manualmente.',
      'Coolify gestiona automáticamente la generación de certificados (Let\'s Encrypt/Traefik).',
      'No se soporta HTTPS.',
      'El usuario final.'
    ],
    correcta: 1,
    explicacion: 'Coolify usa Traefik como reverse proxy que integra Let\'s Encrypt. Al añadir un dominio, solicita automáticamente un certificado SSL gratuito, lo instala y renueva antes de expirar (cada 90 días), sin intervención manual.',
    categoria: 'Coolify'
  },
  {
    id: 81,
    pregunta: 'En la arquitectura de Astro, si tenemos un componente de React CartIcon.tsx que debe actualizarse cuando el usuario añade un producto, ¿qué directiva es necesaria para que funcione el JavaScript en el cliente?',
    opciones: [
      'server:always',
      'client:load o client:idle (Hidratación).',
      'static:true',
      'render:client'
    ],
    correcta: 1,
    explicacion: 'Las directivas client:* indican cuándo hidratar el componente en el cliente. client:load = inmediatamente al cargar página. client:idle = cuando el navegador está libre. Sin estas directivas, el componente es HTML estático sin JavaScript interactivo.',
    categoria: 'Arquitectura'
  },
  {
    id: 82,
    pregunta: '¿Qué archivo del proyecto se encarga de interceptar las peticiones a /admin para comprobar la autenticación antes de renderizar la página?',
    opciones: [
      'src/pages/admin/check.ts',
      'src/middleware.ts',
      'astro.config.mjs',
      'components/AuthGuard.astro'
    ],
    correcta: 1,
    explicacion: 'src/middleware.ts define funciones que interceptan requests antes de renderizar páginas. Puedes verificar sesiones, redirigir usuarios no autenticados o añadir headers. Es el lugar ideal para proteger rutas como /admin.',
    categoria: 'Configuración'
  },
  {
    id: 83,
    pregunta: 'En el esquema de base de datos, si borramos una categoría padre, ¿qué debería pasar idealmente con los productos asociados para mantener la integridad (Integridad Referencial)?',
    opciones: [
      'Nada, los productos se quedan huérfanos.',
      'Se deberían borrar también (ON DELETE CASCADE) o impedir el borrado (RESTRICT).',
      'Se mueven a la categoría "Varios" automáticamente.',
      'Supabase no permite relaciones.'
    ],
    correcta: 1,
    explicacion: 'La constraint FK con ON DELETE CASCADE borra automáticamente productos huérfanos. ON DELETE RESTRICT previene borrar categorías con productos. SET NULL o SET DEFAULT son alternativas. Evita datos inconsistentes.',
    categoria: 'Datos'
  },
  {
    id: 84,
    pregunta: '¿Cuál es la función principal de la librería nanostores en el proyecto FashionStore?',
    opciones: [
      'Gestionar la base de datos PostgreSQL.',
      'Compartir el estado del carrito de compra entre diferentes componentes (islas) e incluso entre distintas páginas.',
      'Comprimir imágenes.',
      'Gestionar las rutas de Astro.'
    ],
    correcta: 1,
    explicacion: 'Nanostores es una librería de estado minimalista (<1KB) framework-agnostic. Permite que múltiples islas (React, Preact, Svelte) compartan el mismo estado reactivo del carrito, incluso persistiéndolo en localStorage entre navegaciones.',
    categoria: 'Arquitectura'
  },
  {
    id: 85,
    pregunta: 'Si utilizamos Cloudinary para las imágenes, ¿qué parámetro en la URL se encarga de servir automáticamente el formato más eficiente (WebP/AVIF) según el navegador del usuario?',
    opciones: [
      'fmt=auto',
      'f_auto',
      'optimize=true',
      'type=smart'
    ],
    correcta: 1,
    explicacion: 'f_auto (format auto) hace que Cloudinary detecte el soporte del navegador via Accept headers y sirva WebP/AVIF en navegadores modernos, manteniendo JPEG/PNG como fallback. Reduce significativamente el tamaño sin pérdida de calidad.',
    categoria: 'Optimización'
  },
  {
    id: 86,
    pregunta: 'En la integración con Stripe, ¿por qué NO podemos crear el PaymentIntent directamente desde el navegador (Frontend)?',
    opciones: [
      'Porque JavaScript es lento.',
      'Porque requiere usar la STRIPE_SECRET_KEY, y exponer esa clave en el navegador comprometería la seguridad de toda la cuenta.',
      'Porque Stripe no tiene librería de cliente.',
      'Porque Astro no permite hacer fetch en el cliente.'
    ],
    correcta: 1,
    explicacion: 'La Secret Key otorga acceso total a tu cuenta Stripe (crear cargos, reembolsos, ver todos los clientes). Debe vivir SOLO en el servidor. El cliente obtiene un clientSecret específico de cada PaymentIntent creado por tu backend.',
    categoria: 'Seguridad'
  },
  {
    id: 87,
    pregunta: '¿Qué tipo de dato en Supabase PostgreSQL es ideal para guardar atributos variables de un producto (talla, color, material) sin crear muchas columnas nuevas?',
    opciones: [
      'VARCHAR',
      'INTEGER',
      'JSONB',
      'DATE'
    ],
    correcta: 2,
    explicacion: 'JSONB almacena JSON binario indexable. Es perfecto para datos semi-estructurados con schema variable. Puedes consultar dentro del JSON con operadores específicos (->, ->>) y crear índices GIN para búsquedas rápidas.',
    categoria: 'Datos'
  },
  {
    id: 88,
    pregunta: 'En el despliegue con Coolify, si tu repositorio de GitHub es privado, ¿qué ocurre si no configuras la "Deploy Key"?',
    opciones: [
      'El despliegue fallará porque Coolify no tendrá permiso para descargar (clonar) el código.',
      'Coolify te pedirá tu contraseña de GitHub en cada despliegue.',
      'Se desplegará una versión antigua pública.',
      'GitHub hará el repositorio público automáticamente.'
    ],
    correcta: 0,
    explicacion: 'Sin Deploy Key, el git clone falla con error de autenticación. Coolify no puede acceder a repos privados sin credenciales. La Deploy Key SSH otorga acceso de solo lectura específico al repo sin exponer contraseñas personales.',
    categoria: 'CI/CD'
  },
  {
    id: 89,
    pregunta: '¿Qué ventaja tiene definir las tipografías personalizadas en tailwind.config.mjs?',
    opciones: [
      'Hace que la fuente cargue antes.',
      'Permite usar clases de utilidad como font-sans o font-serif que apliquen automáticamente la tipografía de marca en todo el proyecto.',
      'Es obligatorio para que funcionen las Google Fonts.',
      'Reduce el tamaño del archivo HTML.'
    ],
    correcta: 1,
    explicacion: 'Extender theme.fontFamily en Tailwind config permite definir font-sans: ["Poppins", "sans-serif"]. Luego class="font-sans" aplica Poppins consistentemente. Centraliza la tipografía de marca evitando magic strings en el código.',
    categoria: 'Configuración'
  },
  {
    id: 90,
    pregunta: 'Para validar la seguridad de un Webhook de Stripe en nuestro servidor, ¿qué cabecera HTTP debemos verificar?',
    opciones: [
      'Authorization',
      'stripe-signature',
      'x-api-key',
      'user-agent'
    ],
    correcta: 1,
    explicacion: 'La cabecera stripe-signature contiene un hash HMAC del payload firmado con tu webhook secret. Usar stripe.webhooks.constructEvent() verifica la firma, previniendo que atacantes envíen webhooks falsos a tu endpoint.',
    categoria: 'Seguridad'
  },
  {
    id: 91,
    pregunta: '¿Qué es el "Hito 3: La Tienda Viva" en la planificación del proyecto?',
    opciones: [
      'Cuando se diseña el logotipo.',
      'La entrega final donde la URL en Coolify es pública, se pueden realizar compras de prueba y el stock se descuenta correctamente.',
      'Cuando se conecta la base de datos por primera vez.',
      'La presentación de diapositivas.'
    ],
    correcta: 1,
    explicacion: 'El Hito 3 representa la aplicación completamente funcional en producción: frontend desplegado, backend conectado, pagos procesándose, stock actualizándose y URL pública accesible. Es el MVP listo para usuarios reales.',
    categoria: 'Arquitectura'
  },
  {
    id: 92,
    pregunta: 'En Astro, si queremos crear un Layout específico para el panel de administración que incluya una barra lateral de gestión, ¿dónde deberíamos crearlo?',
    opciones: [
      'En src/pages/admin.astro.',
      'En src/layouts/AdminLayout.astro.',
      'En public/layouts.',
      'En src/components/Sidebar.astro.'
    ],
    correcta: 1,
    explicacion: 'Los layouts van en src/layouts/ y son componentes Astro reutilizables que envuelven páginas. AdminLayout.astro tendría sidebar + <slot /> para contenido dinámico. Las páginas admin importarían y usarían este layout.',
    categoria: 'Arquitectura'
  },
  {
    id: 93,
    pregunta: '¿Qué código de estado HTTP debe devolver nuestro endpoint /api/pagos si la creación del intento de pago es exitosa?',
    opciones: [
      '404 Not Found.',
      '500 Internal Server Error.',
      '200 OK.',
      '301 Redirect.'
    ],
    correcta: 2,
    explicacion: '200 OK indica éxito en la petición. El cuerpo de la respuesta incluiría el clientSecret del PaymentIntent. 201 Created también sería válido si seguimos RESTful estricto para creación de recursos.',
    categoria: 'Configuración'
  },
  {
    id: 94,
    pregunta: 'Si un usuario deshabilita JavaScript en su navegador, ¿qué parte de la tienda "FashionStore" dejará de funcionar obligatoriamente?',
    opciones: [
      'La visualización de productos (SSG).',
      'Los estilos CSS.',
      'Las "Islas" interactivas como el botón de "Añadir al Carrito" o el CartSlideOver.',
      'Las imágenes.'
    ],
    correcta: 2,
    explicacion: 'Las páginas SSG se renderizan como HTML+CSS estático, funcionando sin JS. Pero las islas (componentes React hidratados) requieren JS para interactividad. Sin JS, AddToCartButton sería HTML inerte. Progressive enhancement mitigaría esto.',
    categoria: 'Arquitectura'
  },
  {
    id: 95,
    pregunta: '¿Para qué sirve el archivo .dockerignore (similar a .gitignore) si usamos Docker?',
    opciones: [
      'Para ignorar errores de compilación.',
      'Para evitar copiar archivos innecesarios (como node_modules local o .git) dentro de la imagen del contenedor, reduciendo su tamaño y tiempo de build.',
      'Para ignorar virus.',
      'Es un archivo de configuración de Astro.'
    ],
    correcta: 1,
    explicacion: '.dockerignore lista archivos a excluir del contexto de build. Excluir node_modules, .git, dist/ acelera COPY, reduce tamaño de imagen y previene conflictos entre builds locales y del contenedor.',
    categoria: 'Docker'
  },
  {
    id: 96,
    pregunta: 'En la gestión de "Ofertas Flash", si el administrador desactiva el interruptor en el panel, ¿qué debe ocurrir en la Home pública?',
    opciones: [
      'La sección debe desaparecer visualmente para los usuarios.',
      'La web debe mostrar un error 404.',
      'Se borran los productos de oferta de la base de datos.',
      'El servidor se reinicia.'
    ],
    correcta: 0,
    explicacion: 'El frontend consulta el flag booleano (ofertas_activas) de configuración. Si es false, renderiza condicionalmente (v-if, {mostrar && <Ofertas/>}) ocultando la sección. No se borran datos, solo se oculta visualmente.',
    categoria: 'Arquitectura'
  },
  {
    id: 97,
    pregunta: '¿Cuál es la mejor práctica para manejar las credenciales de Stripe (sk_test_...) en el código?',
    opciones: [
      'Escribirlas directamente en el archivo .ts.',
      'Usar import.meta.env.STRIPE_SECRET_KEY y tenerla definida solo en el servidor (archivo .env).',
      'Guardarlas en una base de datos pública.',
      'Enviarlas por correo al cliente.'
    ],
    correcta: 1,
    explicacion: 'Las variables en .env no se commitean (están en .gitignore). import.meta.env las inyecta en build. Las variables sin prefijo PUBLIC_ solo están disponibles en el servidor, nunca se exponen al bundle del cliente.',
    categoria: 'Seguridad'
  },
  {
    id: 98,
    pregunta: '¿Qué significa que el proyecto es "Headless E-commerce"?',
    opciones: [
      'Que no tiene cabecera en el HTML.',
      'Que el Frontend (Astro/Tienda visual) está desacoplado del Backend (Supabase/Lógica de negocio), comunicándose vía API.',
      'Que no tiene administrador.',
      'Que es una plantilla todo-en-uno como Shopify.'
    ],
    correcta: 1,
    explicacion: 'Headless separa presentación (frontend) de lógica (backend) via APIs. Permite cambiar frontend (web, móvil, PWA) sin tocar backend, o viceversa. Ofrece flexibilidad vs plataformas monolíticas como Shopify.',
    categoria: 'Arquitectura'
  },
  {
    id: 99,
    pregunta: 'Al usar Nano Stores, ¿qué método se usa para actualizar el valor de una tienda tipo map (objeto)?',
    opciones: [
      "store.setKey('propiedad', valor)",
      'store = valor',
      'store.push(valor)',
      'store.update()'
    ],
    correcta: 0,
    explicacion: 'Para map stores (objetos reactivos), nanostores ofrece .setKey(key, value) que actualiza una propiedad específica disparando re-renders solo en componentes suscritos. .set() reemplaza el objeto completo.',
    categoria: 'Arquitectura'
  },
  {
    id: 100,
    pregunta: '¿Qué debemos hacer en Coolify si nuestra aplicación falla al iniciarse y los logs indican "Error: Missing env variable"?',
    opciones: [
      'Reinstalar Coolify.',
      'Ir a la sección "Environment Variables" del proyecto en Coolify y añadir las claves que faltan (ej: SUPABASE_URL).',
      'Cambiar el código para no usar variables.',
      'Cambiar de servidor.'
    ],
    correcta: 1,
    explicacion: 'Los logs indican qué variable falta. En la UI de Coolify, sección Environment Variables, añades VARIABLE_NAME=valor. Luego redeploy para que el contenedor nuevo tenga acceso. Es un error común tras clonar el repo sin .env.',
    categoria: 'Coolify'
  }
];

export const coolifyInfo = {
  id: 'coolify',
  titulo: 'Infraestructura y Despliegue',
  descripcion: 'Coolify, Docker, VPS, CI/CD y configuración de producción',
  temas: [
    'Coolify y Self-hosted PaaS',
    'Docker y Contenedores',
    'VPS y Configuración de Servidores',
    'CI/CD con GitHub',
    'Seguridad y Optimización'
  ],
  color: 'from-orange-500 to-red-600',
  icono: '🐳'
};
