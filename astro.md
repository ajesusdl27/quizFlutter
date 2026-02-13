1. ¿Cuál es el objetivo principal del proyecto "FashionStore" según el contexto del
cliente?
a) Crear una tienda en Shopify para vender rápido.
b) Digitalizar un negocio físico con una solución a medida, escalable y con control total de
datos.
c) Crear un blog de moda sin funcionalidades de venta.
d) Desplegar una aplicación móvil nativa en iOS y Android.
Respuesta correcta: b
2. ¿Qué modo de renderizado de Astro se requiere obligatoriamente para este proyecto?
a) output: 'static' (Solo estático).
b) output: 'server' (Solo servidor).
c) output: 'hybrid' (Híbrido: SSG + SSR).
d) output: 'client' (Single Page Application).
Respuesta correcta: c
3. ¿Por qué se utiliza Generación Estática (SSG) para el catálogo público de productos?
a) Porque es más fácil de programar.
b) Para mejorar el SEO (posicionamiento en Google) y la velocidad de carga.
c) Porque Supabase no permite conexiones en tiempo real.
d) Para que el carrito de compra funcione mejor.
Respuesta correcta: b
4. ¿Qué parte de la aplicación debe funcionar obligatoriamente con Renderizado en
Servidor (SSR)?
a) La página de "Quiénes Somos".
b) El listado de categorías.
c) El Panel de Administración y el Carrito (lógica de sesión y stock en tiempo real).
d) El footer de la web.
Respuesta correcta: c
5. En la estructura de carpetas de Astro, ¿qué función cumple la carpeta src/pages?
a) Almacenar los componentes reutilizables como botones.
b) Definir las rutas de la aplicación basadas en archivos.
c) Guardar las configuraciones de la base de datos.
d) Almacenar las imágenes estáticas.
Respuesta correcta: b
6. ¿Qué tecnología se utilizará para manejar el estado persistente del carrito de compra
entre navegaciones?
a) Redux.
b) Context API de React.
c) Nano Stores.
d) Cookies nativas exclusivamente.
Respuesta correcta: c
7. ¿Qué es una "Isla" en la arquitectura de Astro?
a) Una imagen aislada del resto del contenido.
b) Un componente interactivo (React/Preact) que vive dentro de una página estática de HTML.
c) Una base de datos separada del proyecto principal.
d) Un servidor VPS dedicado.
Respuesta correcta: b
8. ¿Cuál es la estética de diseño requerida para "FashionStore"?
a) Brutalismo web con colores neón.
b) Diseño corporativo clásico tipo Windows 95.
c) "Minimalismo Sofisticado" con priorización de espacio en blanco y tipografías elegantes.
d) Estilo "Gamification" con muchos elementos interactivos.
Respuesta correcta: c
9. ¿Qué archivo en Astro se utiliza para definir las variables de entorno como las claves
de Supabase?
a) config.json
b) .env
c) astro.config.mjs
d) package.json
Respuesta correcta: b
10. En un componente .astro, ¿qué código se ejecuta entre los guiones triples ---?
a) El código JavaScript que se envía al navegador del cliente.
b) Los estilos CSS globales.
c) La lógica del servidor (Frontmatter), que no se envía al cliente.
d) El HTML final.
Respuesta correcta: c
11. ¿Cómo se pasan datos de un componente padre a un hijo en Astro?
a) Usando Astro.props.
b) Usando Astro.state.
c) Mediante variables globales.
d) Usando localStorage.
Respuesta correcta: a
12. ¿Qué funcionalidad específica permite insertar contenido HTML anidado dentro de un
Layout en Astro?
a) <insert />
b) <children />
c) <slot />
d) <yield />
Respuesta correcta: c
13. Para la sección "Ofertas Flash", el cliente necesita un "interruptor". ¿Qué implica
esto técnicamente?
a) Modificar el código HTML manualmente cada vez que se quiera ocultar.
b) Un campo booleano en la base de datos que el frontend consulta para renderizar o no la
sección.
c) Borrar los productos de oferta de la base de datos.
d) Usar un display: none en CSS fijo.
Respuesta correcta: b
14. ¿Qué framework CSS se utilizará para los estilos del proyecto?
a) Bootstrap.
b) Sass puro.
c) Tailwind CSS.
d) CSS Modules.
Respuesta correcta: c
15. ¿Qué significa que Astro es "UI-agnostic"?
a) Que no tiene interfaz de usuario.
b) Que puedes usar componentes de React, Vue, Svelte o Preact en el mismo proyecto.
c) Que solo funciona con HTML puro.
d) Que no soporta CSS.
Respuesta correcta: b
16. ¿Dónde se deben colocar los archivos estáticos como favicon.svg o logo.png en
Astro?
a) En src/assets.
b) En src/images.
c) En la carpeta public/.
d) En la raíz del proyecto.
Respuesta correcta: c
17. Si queremos crear una ruta dinámica para productos (ej: /productos/camisa-lino),
¿cómo se debe llamar el archivo en src/pages/productos/?
a) producto.astro
b) [slug].astro
c) _slug.astro
d) id.astro
Respuesta correcta: b
18. En el Hito 2 ("El Prototipo Funcional"), ¿cuál es el objetivo principal?
a) Que la pasarela de pago cobre dinero real.
b) Tener el diseño final perfecto.
c) Asegurar que la conexión Base de Datos <-> Web está hecha y el Login funciona.
d) Tener la documentación técnica terminada.
Respuesta correcta: c
19. ¿Qué ventaja tiene usar TypeScript en el proyecto (env.d.ts, interfaces)?
a) Hace que la web cargue más rápido.
b) Permite autocompletado y detección de errores de tipos durante el desarrollo.
c) Es obligatorio para usar Supabase.
d) Permite escribir menos código.
Respuesta correcta: b
20. El componente AddToCartButton debe ser interactivo. ¿Qué extensión debe tener
preferiblemente si usamos React?
a) .astro
b) .html
c) .tsx o .jsx
d) .css
Respuesta correcta: c
Bloque 2: Supabase y Base de Datos (25 Preguntas)
21. ¿Qué rol cumple Supabase en la arquitectura de "FashionStore"?
a) Solo base de datos.
b) Backend-as-a-Service (Base de datos, Auth, Storage, Realtime).
c) Solo proveedor de autenticación.
d) Servidor de alojamiento web.
Respuesta correcta: b
22. ¿Qué motor de base de datos utiliza Supabase por debajo?
a) MySQL.
b) MongoDB.
c) PostgreSQL.
d) SQLite.
Respuesta correcta: c
23. ¿Qué mecanismo de seguridad se debe implementar en Supabase para proteger los
datos?
a) Firewalls externos.
b) RLS (Row Level Security).
c) Contraseñas en texto plano.
d) Ocultar la URL de la API.
Respuesta correcta: b
24. ¿Cómo se debe almacenar el precio de los productos en la base de datos para evitar
errores de redondeo?
a) Como float (decimales).
b) Como string con el símbolo del euro.
c) Como integer en céntimos (ej: 2000 para 20,00€).
d) Como double.
Respuesta correcta: c
25. ¿Qué tabla es necesaria para relacionar productos con sus tipos (Camisas,
Pantalones...)?
a) tags
b) categories
c) inventory
d) users
Respuesta correcta: b
26. En la tabla products, ¿qué tipo de dato es adecuado para almacenar múltiples URLs
de imágenes?
a) TEXT
b) VARCHAR(255)
c) ARRAY de textos (text[]) o JSONB.
d) BLOB.
Respuesta correcta: c
27. ¿Qué política RLS es la correcta para la tabla products en la tienda pública?
a) ENABLE READ para anon (público) y ENABLE ALL para authenticated (admin).
b) DISABLE ALL para todos.
c) ENABLE ALL para anon.
d) Solo lectura para el admin.
Respuesta correcta: a
28. ¿Qué servicio de Supabase se usará para guardar las fotos de los productos?
a) Supabase Database (en base64).
b) Supabase Storage (Buckets).
c) Google Drive API.
d) LocalStorage del navegador.
Respuesta correcta: b
29. Para gestionar el stock, ¿qué concepto de base de datos es vital para impedir vender
productos sin existencias?
a) Índices.
b) Vistas.
c) Atomicidad / Transacciones.
d) Backups.
Respuesta correcta: c
30. ¿Qué función cumple la tabla auth.users en Supabase?
a) Es una tabla creada manualmente por nosotros para guardar clientes.
b) Es una tabla interna de Supabase que gestiona los usuarios registrados y sus credenciales.
c) Es donde se guardan los administradores del VPS.
d) No existe esa tabla.
Respuesta correcta: b
31. Si queremos que un usuario solo vea sus propios pedidos, ¿qué condición
usaríamos en una política RLS?
a) auth.uid() = user_id
b) user.role === 'admin'
c) public.access = true
d) request.ip = user_ip
Respuesta correcta: a
32. ¿Qué librería de JavaScript se utiliza para conectar Astro con Supabase?
a) axios
b) pg-promise
c) @supabase/supabase-js
d) sequelize
Respuesta correcta: c
33. En el manual CRM, ¿qué clave de API es segura para usar en el lado del cliente
(navegador)?
a) SUPABASE_SERVICE_ROLE_KEY
b) PUBLIC_SUPABASE_ANON_KEY
c) La contraseña de la base de datos.
d) DB_PASSWORD
Respuesta correcta: b
34. ¿Qué clave de API tiene permisos totales y NUNCA debe exponerse en el cliente?
a) PUBLIC_SUPABASE_URL
b) PUBLIC_SUPABASE_ANON_KEY
c) SUPABASE_SERVICE_ROLE_KEY
d) PUBLIC_STRIPE_KEY
Respuesta correcta: c
35. ¿Cuál es el comando SQL para crear una tabla con un ID autogenerado?
a) id INT PRIMARY KEY
b) id UUID PRIMARY KEY DEFAULT gen_random_uuid()
c) id TEXT UNIQUE
d) create id auto_increment
Respuesta correcta: b
36. Para subir imágenes desde el Backoffice, ¿qué elemento HTML es necesario
configurar correctamente?
a) Un input de tipo file con multiple si son varias fotos.
b) Un textarea.
c) Un iframe.
d) Un canvas.
Respuesta correcta: a
37. ¿Qué significa que Supabase ofrece "Realtime"?
a) Que la base de datos es muy rápida.
b) Que podemos suscribirnos a cambios (INSERT, UPDATE, DELETE) en la base de datos y
recibirlos al instante en el frontend.
c) Que el soporte técnico responde en vivo.
d) Que no tiene caché.
Respuesta correcta: b
38. En el esquema de base de datos sugerido, ¿cuál es la clave foránea (Foreign Key) en
la tabla products?
a) slug
b) stock
c) category_id (que apunta a la tabla categories).
d) price
Respuesta correcta: c
39. ¿Qué debemos hacer para obtener los productos de una categoría específica usando
el cliente JS de Supabase?
a) .from('products').select('*')
b) .from('products').select('*').eq('category_id', id_categoria)
c) .from('categories').insert(products)
d) .from('products').delete().eq('category', id)
Respuesta correcta: b
40. ¿Qué ventaja ofrece usar UUIDs en lugar de IDs numéricos incrementales (1, 2, 3...)?
a) Son más cortos.
b) Son más seguros y evitan que se adivine el número de registros o se iteren fácilmente.
c) Son más fáciles de recordar.
d) Ocupan menos espacio en disco.
Respuesta correcta: b
41. Al integrar Supabase Auth en Astro SSR, ¿dónde verificamos si el usuario está
logueado?
a) En el localStorage.
b) En el servidor (Astro frontmatter), comprobando la sesión/cookie con
supabase.auth.getUser().
c) Solo mediante CSS.
d) No se puede verificar en SSR.
Respuesta correcta: b
42. ¿Qué ocurre si un usuario intenta acceder a /admin sin estar autenticado?
a) Entra igualmente.
b) Debe ser redirigido (Redirect) a la página de Login.
c) Se bloquea su IP.
d) Se borra la base de datos.
Respuesta correcta: b
43. ¿Cuál es el propósito de la tabla interacciones mencionada en los apuntes del CRM?
a) Guardar los likes de Facebook.
b) Registrar el historial de comunicación o acciones con un cliente.
c) Guardar las sesiones de usuario.
d) Almacenar errores del sistema.
Respuesta correcta: b
44. ¿Qué instrucción SQL activa la seguridad a nivel de fila (RLS) en una tabla?
a) SECURE TABLE products
b) ALTER TABLE products ENABLE ROW LEVEL SECURITY
c) CREATE POLICY products
d) LOCK TABLE products
Respuesta correcta: b
45. ¿Qué método de autenticación usaremos principalmente para los administradores de
FashionStore?
a) Login con GitHub.
b) Email y Contraseña.
c) FaceID.
d) Acceso anónimo.
Respuesta correcta: b
Bloque 3: Pagos (Stripe) e Integraciones (15 Preguntas)
46. Según el enunciado, ¿qué pasarela de pago debemos investigar y utilizar?
a) PayPal.
b) Redsys.
c) Stripe.
d) Bizum manual.
Respuesta correcta: c
47. ¿Qué concepto de Stripe representa la "intención" de realizar un cobro antes de que
ocurra?
a) PaymentIntent.
b) Charge.
c) Customer.
d) Invoice.
Respuesta correcta: a
48. En la integración de Stripe, ¿qué información NO debe pasar nunca por nuestro
servidor ni guardarse en nuestra base de datos?
a) El importe de la compra.
b) El email del cliente.
c) El número completo de la tarjeta de crédito y el CVC.
d) La descripción del producto.
Respuesta correcta: c
49. ¿Por qué es importante configurar la moneda en EUR para este proyecto?
a) Porque Stripe solo funciona en dólares si no se cambia.
b) Porque el proyecto es para un cliente en España y se requiere soporte de euros.
c) Porque es más barato.
d) Porque Astro no soporta otras monedas.
Respuesta correcta: b
50. ¿Qué herramienta nos permite simular pagos seguros en el frontend sin manejar
datos sensibles?
a) Stripe Elements / Stripe.js.
b) Un formulario HTML básico.
c) Un prompt de JavaScript.
d) Enviar los datos por URL.
Respuesta correcta: a
51. ¿Qué es un Webhook en el contexto de Stripe?
a) Un gancho para pescar clientes.
b) Una notificación automática que Stripe envía a nuestro servidor cuando ocurre un evento (ej:
pago completado).
c) Un tipo de base de datos.
d) El botón de pagar.
Respuesta correcta: b
52. Al crear un PaymentIntent, ¿qué unidad de valor espera Stripe para la cantidad
(amount)?
a) Euros con decimales (ej: 10.50).
b) La unidad más pequeña de la moneda (céntimos para EUR). Ej: 1050 para 10.50€.
c) Bitcoins.
d) Strings de texto.
Respuesta correcta: b
53. Si un pago falla, ¿quién nos informa del estado status: 'failed'?
a) El objeto PaymentIntent devuelto por la API de Stripe.
b) El navegador del cliente se cierra.
c) Supabase borra el usuario.
d) No se puede saber.
Respuesta correcta: a
54. ¿Qué claves de Stripe necesitamos en el archivo .env?
a) Solo la clave pública.
b) La STRIPE_PUBLISHABLE_KEY (pública) y la STRIPE_SECRET_KEY (privada).
c) El número de cuenta bancaria.
d) La clave de Supabase.
Respuesta correcta: b
55. Según los apuntes MCP, ¿qué es un "Customer" en Stripe?
a) Un producto.
b) Una entidad que representa al usuario/empresa que realiza los pagos.
c) Un descuento.
d) Una suscripción cancelada.
Respuesta correcta: b
56. ¿Para qué sirve el campo metadata en una transacción de Stripe?
a) Para guardar fotos.
b) Para adjuntar datos personalizados nuestros (ej: user_id, cart_id) a la transacción de Stripe.
c) Para hackear la transacción.
d) Es un campo obligatorio para la fecha.
Respuesta correcta: b
57. ¿Qué función se utiliza en el frontend para confirmar el pago con la tarjeta
introducida?
a) stripe.payMoney()
b) stripe.confirmCardPayment(clientSecret, { payment_method: ... })
c) stripe.sendMoney()
d) fetch('/api/pagar')
Respuesta correcta: b
58. Si usamos Cloudinary (según la guía adicional) en lugar de Supabase Storage, ¿qué
ventaja principal ofrece?
a) Es más barato siempre.
b) Permite transformación y optimización de imágenes al vuelo (cambiar tamaño, formato
f_auto) mediante la URL.
c) No requiere internet.
d) Se integra peor con React.
Respuesta correcta: b
59. ¿Qué es un "Upload Preset" en Cloudinary?
a) Una foto predefinida.
b) Una configuración que permite subir archivos sin autenticación de servidor (unsigned)
definiendo reglas básicas.
c) Una carpeta en mi PC.
d) Un plugin de Astro.
Respuesta correcta: b
60. ¿Cuál es el flujo correcto al subir una imagen de producto?
a) Subir a la BD -> Generar URL.
b) Subir al Storage/CDN -> Obtener URL -> Guardar URL en la Base de Datos.
c) Guardar la imagen en la carpeta src del proyecto en producción.
d) Enviar la imagen por email al admin.
Respuesta correcta: b
Bloque 4: Infraestructura y Despliegue (Coolify/Docker)
(20 Preguntas)
61. ¿Dónde se desplegará el proyecto "FashionStore"?
a) Vercel.
b) Netlify.
c) En nuestra propia infraestructura VPS gestionada con Coolify.
d) En un hosting compartido (Cpanel).
Respuesta correcta: c
62. ¿Qué es Coolify?
a) Un framework de JavaScript.
b) Una herramienta "Self-hosted PaaS" alternativa a Vercel/Heroku para gestionar tus propios
servidores.
c) Un editor de código.
d) Una base de datos.
Respuesta correcta: b
63. ¿Qué tecnología subyacente usa Coolify para desplegar las aplicaciones?
a) FTP.
b) Docker y contenedores.
c) Copia y pega de archivos.
d) Máquinas virtuales de Java.
Respuesta correcta: b
64. Si desplegamos un proyecto Astro en modo Híbrido/SSR en Coolify, ¿qué tipo de
recurso debemos seleccionar?
a) Static Site.
b) Server resource (Node.js).
c) Database only.
d) PHP Server.
Respuesta correcta: b
65. ¿Qué es Nixpacks en el contexto de Coolify?
a) Un virus.
b) Una herramienta que detecta automáticamente el lenguaje de tu app (Node, PHP, Python) y
crea la imagen Docker sin configuración manual.
c) Un pack de iconos.
d) La base de datos de Coolify.
Respuesta correcta: b
66. ¿Qué puerto suele exponer por defecto una aplicación Astro/Node.js que debemos
configurar en Coolify?
a) 80
b) 443
c) 3000 o 4321.
d) 21
Respuesta correcta: c
67. Para conectar un repositorio Privado de GitHub con Coolify, ¿qué necesitamos añadir
en GitHub?
a) Nuestra contraseña de usuario.
b) Una "Deploy Key" (Clave pública generada por Coolify).
c) Darle permisos de administrador a Coolify.
d) Hacer el repositorio público.
Respuesta correcta: b
68. ¿Qué ventaja tiene usar un VPS con Coolify frente a un hosting compartido
tradicional?
a) Es más caro.
b) Tienes control total, aislamiento mediante Docker y puedes desplegar cualquier tecnología
(Node, DBs, Dockerfiles).
c) Es más fácil de romper.
d) Solo sirve para PHP.
Respuesta correcta: b
69. En el proceso de despliegue, ¿qué archivo lee Coolify/Nixpacks para saber cómo
instalar las dependencias?
a) package.json
b) index.html
c) readme.md
d) style.css
Respuesta correcta: a
70. Si cambiamos una variable de entorno en Coolify (ej: clave de base de datos), ¿qué
debemos hacer para que surta efecto?
a) Nada, es automático.
b) Redesplegar (Redeploy) la aplicación.
c) Reiniciar el ordenador.
d) Cambiar el código.
Respuesta correcta: b
71. ¿Qué debemos configurar en Coolify para que nuestra web tenga un dominio propio
(ej: mi-tienda.com)?
a) Editar el archivo hosts de Windows.
b) Configurar el campo "Domains" en la configuración del recurso en Coolify.
c) No se puede, Coolify solo usa IPs.
d) Enviar un correo a Google.
Respuesta correcta: b
72. ¿Qué significa CI/CD en el contexto del despliegue automático conectado a GitHub?
a) Código Importante / Código Directo.
b) Integración Continua / Despliegue Continuo (cada "push" a la rama main actualiza la web).
c) Copiar Información / Copiar Datos.
d) Un comando de Linux.
Respuesta correcta: b
73. ¿Por qué se pide que la aplicación sea compatible con Docker?
a) Porque es la mascota del proyecto.
b) Para asegurar que funciona igual en el ordenador del desarrollador y en el servidor de
producción (estandarización del entorno).
c) Para que vaya más lento.
d) Porque Docker es un editor de texto.
Respuesta correcta: b
74. ¿Qué es un VPS?
a) Virtual Private Server (Servidor Privado Virtual).
b) Very Personal System.
c) Variable Public Storage.
d) Un antivirus.
Respuesta correcta: a
75. En la configuración de "Build Pack" en Coolify, si no usamos Nixpacks, ¿qué archivo
necesitaríamos crear manualmente en la raíz del proyecto?
a) Dockerfile
b) Buildfile
c) Server.exe
d) Config.txt
Respuesta correcta: a
76. ¿Qué comando de npm se ejecuta normalmente para construir la versión de
producción de Astro antes de servirla?
a) npm run dev
b) npm run build
c) npm test
d) npm start
Respuesta correcta: b
77. ¿Cuál es el propósito del archivo .gitignore?
a) Ignorar errores de código.
b) Evitar subir archivos innecesarios (node_modules) o sensibles (.env) al repositorio git.
c) Ignorar usuarios molestos.
d) Documentar el proyecto.
Respuesta correcta: b
78. Si la aplicación necesita subir archivos grandes, ¿dónde es mejor almacenarlos, en el
sistema de archivos del contenedor Docker o en un servicio externo (Bucket)?
a) En el contenedor Docker, porque es efímero.
b) En un servicio externo (Bucket Supabase/S3), porque los contenedores pueden reiniciarse y
perder datos no persistentes.
c) En la memoria RAM.
d) En el código fuente.
Respuesta correcta: b
79. ¿Qué indica el color verde en el estado de despliegue de Coolify?
a) Que está procesando.
b) Que ha fallado.
c) Que el despliegue ha sido exitoso ("Deployed").
d) Que el servidor está apagado.
Respuesta correcta: c
80. Al configurar el dominio en Coolify, si usamos https, ¿quién se encarga normalmente
de gestionar el certificado SSL (candado de seguridad)?
a) Debemos comprarlo manualmente.
b) Coolify gestiona automáticamente la generación de certificados (Let's Encrypt/Traefik).
c) No se soporta HTTPS.
d) El usuario final.
Respuesta correcta: b
Claro que sí. Aquí tienes 20 preguntas adicionales (de la 81 a la 100) para completar tu
banco de preguntas, enfocadas en detalles técnicos más específicos de Astro, la gestión del
estado, seguridad y optimización mencionados en la documentación.
81. En la arquitectura de Astro, si tenemos un componente de React CartIcon.tsx que
debe actualizarse cuando el usuario añade un producto, ¿qué directiva es necesaria para
que funcione el JavaScript en el cliente?
a) server:always
b) client:load o client:idle (Hidratación).
c) static:true
d) render:client
Respuesta correcta: b
82. ¿Qué archivo del proyecto se encarga de interceptar las peticiones a /admin para
comprobar la autenticación antes de renderizar la página?
a) src/pages/admin/check.ts
b) src/middleware.ts
c) astro.config.mjs
d) components/AuthGuard.astro
Respuesta correcta: b
83. En el esquema de base de datos, si borramos una categoría padre, ¿qué debería
pasar idealmente con los productos asociados para mantener la integridad (Integridad
Referencial)?
a) Nada, los productos se quedan huérfanos.
b) Se deberían borrar también (ON DELETE CASCADE) o impedir el borrado (RESTRICT).
c) Se mueven a la categoría "Varios" automáticamente.
d) Supabase no permite relaciones.
Respuesta correcta: b
84. ¿Cuál es la función principal de la librería nanostores en el proyecto FashionStore?
a) Gestionar la base de datos PostgreSQL.
b) Compartir el estado del carrito de compra entre diferentes componentes (islas) e incluso
entre distintas páginas.
c) Comprimir imágenes.
d) Gestionar las rutas de Astro.
Respuesta correcta: b
85. Si utilizamos Cloudinary para las imágenes, ¿qué parámetro en la URL se encarga de
servir automáticamente el formato más eficiente (WebP/AVIF) según el navegador del
usuario?
a) fmt=auto
b) f_auto
c) optimize=true
d) type=smart
Respuesta correcta: b
86. En la integración con Stripe, ¿por qué NO podemos crear el PaymentIntent
directamente desde el navegador (Frontend)?
a) Porque JavaScript es lento.
b) Porque requiere usar la STRIPE_SECRET_KEY, y exponer esa clave en el navegador
comprometería la seguridad de toda la cuenta.
c) Porque Stripe no tiene librería de cliente.
d) Porque Astro no permite hacer fetch en el cliente.
Respuesta correcta: b
87. ¿Qué tipo de dato en Supabase PostgreSQL es ideal para guardar atributos variables
de un producto (talla, color, material) sin crear muchas columnas nuevas?
a) VARCHAR
b) INTEGER
c) JSONB
d) DATE
Respuesta correcta: c
88. En el despliegue con Coolify, si tu repositorio de GitHub es privado, ¿qué ocurre si
no configuras la "Deploy Key"?
a) El despliegue fallará porque Coolify no tendrá permiso para descargar (clonar) el código.
b) Coolify te pedirá tu contraseña de GitHub en cada despliegue.
c) Se desplegará una versión antigua pública.
d) GitHub hará el repositorio público automáticamente.
Respuesta correcta: a
89. ¿Qué ventaja tiene definir las tipografías personalizadas en tailwind.config.mjs?
a) Hace que la fuente cargue antes.
b) Permite usar clases de utilidad como font-sans o font-serif que apliquen automáticamente la
tipografía de marca en todo el proyecto.
c) Es obligatorio para que funcionen las Google Fonts.
d) Reduce el tamaño del archivo HTML.
Respuesta correcta: b
90. Para validar la seguridad de un Webhook de Stripe en nuestro servidor, ¿qué
cabecera HTTP debemos verificar?
a) Authorization
b) stripe-signature
c) x-api-key
d) user-agent
Respuesta correcta: b
91. ¿Qué es el "Hito 3: La Tienda Viva" en la planificación del proyecto?
a) Cuando se diseña el logotipo.
b) La entrega final donde la URL en Coolify es pública, se pueden realizar compras de prueba y
el stock se descuenta correctamente.
c) Cuando se conecta la base de datos por primera vez.
d) La presentación de diapositivas.
Respuesta correcta: b
92. En Astro, si queremos crear un Layout específico para el panel de administración que
incluya una barra lateral de gestión, ¿dónde deberíamos crearlo?
a) En src/pages/admin.astro.
b) En src/layouts/AdminLayout.astro.
c) En public/layouts.
d) En src/components/Sidebar.astro.
Respuesta correcta: b
93. ¿Qué código de estado HTTP debe devolver nuestro endpoint /api/pagos si la
creación del intento de pago es exitosa?
a) 404 Not Found.
b) 500 Internal Server Error.
c) 200 OK.
d) 301 Redirect.
Respuesta correcta: c
94. Si un usuario deshabilita JavaScript en su navegador, ¿qué parte de la tienda
"FashionStore" dejará de funcionar obligatoriamente?
a) La visualización de productos (SSG).
b) Los estilos CSS.
c) Las "Islas" interactivas como el botón de "Añadir al Carrito" o el CartSlideOver.
d) Las imágenes.
Respuesta correcta: c
95. ¿Para qué sirve el archivo .dockerignore (similar a .gitignore) si usamos Docker?
a) Para ignorar errores de compilación.
b) Para evitar copiar archivos innecesarios (como node_modules local o .git) dentro de la
imagen del contenedor, reduciendo su tamaño y tiempo de build.
c) Para ignorar virus.
d) Es un archivo de configuración de Astro.
Respuesta correcta: b
96. En la gestión de "Ofertas Flash", si el administrador desactiva el interruptor en el
panel, ¿qué debe ocurrir en la Home pública?
a) La sección debe desaparecer visualmente para los usuarios.
b) La web debe mostrar un error 404.
c) Se borran los productos de la base de datos.
d) El servidor se reinicia.
Respuesta correcta: a
97. ¿Cuál es la mejor práctica para manejar las credenciales de Stripe (sk_test_...) en el
código?
a) Escribirlas directamente en el archivo .ts.
b) Usar import.meta.env.STRIPE_SECRET_KEY y tenerla definida solo en el servidor (archivo
.env).
c) Guardarlas en una base de datos pública.
d) Enviarlas por correo al cliente.
Respuesta correcta: b
98. ¿Qué significa que el proyecto es "Headless E-commerce"?
a) Que no tiene cabecera en el HTML.
b) Que el Frontend (Astro/Tienda visual) está desacoplado del Backend (Supabase/Lógica de
negocio), comunicándose vía API.
c) Que no tiene administrador.
d) Que es una plantilla todo-en-uno como Shopify.
Respuesta correcta: b
99. Al usar Nano Stores, ¿qué método se usa para actualizar el valor de una tienda tipo
map (objeto)?
a) store.setKey('propiedad', valor)
b) store = valor
c) store.push(valor)
d) store.update()
Respuesta correcta: a
100. ¿Qué debemos hacer en Coolify si nuestra aplicación falla al iniciarse y los logs
indican "Error: Missing env variable"?
a) Reinstalar Coolify.
b) Ir a la sección "Environment Variables" del proyecto en Coolify y añadir las claves que faltan
(ej: SUPABASE_URL).
c) Cambiar el código para no usar variables.
d) Cambiar de servidor.
Respuesta correcta: b