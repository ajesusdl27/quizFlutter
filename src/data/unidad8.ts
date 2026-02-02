import type { Pregunta } from './types';

export const preguntasUnidad8: Pregunta[] = [
  // Consumo de APIs REST (10)
  {
    id: 1,
    pregunta: "¿Qué paquete es el más usado para hacer peticiones HTTP en Flutter?",
    opciones: ["flutter_http", "http", "requests", "network"],
    correcta: 1,
    explicacion: "El paquete 'http' es el oficial y más utilizado para peticiones HTTP en Flutter.",
    categoria: "APIs REST"
  },
  {
    id: 2,
    pregunta: "¿Qué método HTTP se usa para obtener datos?",
    opciones: ["POST", "GET", "PUT", "FETCH"],
    correcta: 1,
    explicacion: "GET es el método estándar para recuperar/leer datos de un servidor.",
    categoria: "APIs REST"
  },
  {
    id: 3,
    pregunta: "¿Qué método HTTP se usa para crear un nuevo recurso?",
    opciones: ["GET", "CREATE", "POST", "NEW"],
    correcta: 2,
    explicacion: "POST se usa para enviar datos al servidor y crear nuevos recursos.",
    categoria: "APIs REST"
  },
  {
    id: 4,
    pregunta: "¿Cómo se convierte JSON a un objeto Dart?",
    opciones: [
      "JSON.parse()",
      "jsonDecode() y luego mapear al modelo",
      "convert(json)",
      "Dart.fromJSON()"
    ],
    correcta: 1,
    explicacion: "jsonDecode() convierte el String JSON a Map/List, luego se mapea a un modelo con factory fromJson().",
    categoria: "APIs REST"
  },
  {
    id: 5,
    pregunta: "¿Qué código de estado HTTP indica éxito?",
    opciones: ["100", "200", "300", "400"],
    correcta: 1,
    explicacion: "Los códigos 2xx indican éxito. 200 OK es el más común para respuestas exitosas.",
    categoria: "APIs REST"
  },
  {
    id: 6,
    pregunta: "¿Cómo se maneja una petición HTTP asíncrona en Dart?",
    opciones: [
      "Con callbacks solamente",
      "Con async/await o .then()",
      "Sincronizando el hilo",
      "Con threads"
    ],
    correcta: 1,
    explicacion: "Dart usa async/await o Futures con .then() para manejar operaciones asíncronas.",
    categoria: "APIs REST"
  },
  {
    id: 7,
    pregunta: "¿Qué header se usa comúnmente para enviar JSON en el body?",
    opciones: [
      "'Accept': 'application/json'",
      "'Content-Type': 'application/json'",
      "'Data-Type': 'json'",
      "'Format': 'application/json'"
    ],
    correcta: 1,
    explicacion: "Content-Type: application/json indica que el cuerpo de la petición es JSON.",
    categoria: "APIs REST"
  },
  {
    id: 8,
    pregunta: "¿Qué widget es útil para mostrar datos mientras se cargan desde una API?",
    opciones: ["AsyncWidget", "FutureBuilder", "StreamLoader", "DataLoader"],
    correcta: 1,
    explicacion: "FutureBuilder construye widgets basándose en el estado de un Future (loading, data, error).",
    categoria: "APIs REST"
  },
  {
    id: 9,
    pregunta: "¿Cómo se envía un token de autenticación en una petición HTTP?",
    opciones: [
      "En la URL",
      "En los headers: 'Authorization': 'Bearer token'",
      "En el body siempre",
      "No se puede enviar tokens"
    ],
    correcta: 1,
    explicacion: "Los tokens se envían típicamente en el header Authorization con el prefijo 'Bearer'.",
    categoria: "APIs REST"
  },
  {
    id: 10,
    pregunta: "¿Qué paquete es una alternativa más potente a http con interceptores?",
    opciones: ["super_http", "dio", "retrofit", "axios_dart"],
    correcta: 1,
    explicacion: "Dio ofrece interceptores, cancelación de peticiones, FormData, y más funcionalidades avanzadas.",
    categoria: "APIs REST"
  },

  // Firebase (10)
  {
    id: 11,
    pregunta: "¿Qué es Firebase?",
    opciones: [
      "Un lenguaje de programación",
      "Una plataforma de Google con servicios backend como DB, auth, storage",
      "Un framework de UI",
      "Un sistema operativo"
    ],
    correcta: 1,
    explicacion: "Firebase es una plataforma BaaS (Backend as a Service) que ofrece base de datos, autenticación, storage y más.",
    categoria: "Firebase"
  },
  {
    id: 12,
    pregunta: "¿Qué comando CLI se usa para configurar Firebase en Flutter?",
    opciones: [
      "firebase init flutter",
      "flutterfire configure",
      "flutter firebase setup",
      "firebase-flutter init"
    ],
    correcta: 1,
    explicacion: "FlutterFire CLI con 'flutterfire configure' genera la configuración automáticamente.",
    categoria: "Firebase"
  },
  {
    id: 13,
    pregunta: "¿Qué servicio de Firebase se usa para autenticación de usuarios?",
    opciones: ["Firebase Database", "Firebase Auth", "Firebase Users", "Firebase Login"],
    correcta: 1,
    explicacion: "Firebase Authentication maneja registro, login, y autenticación con email, Google, Facebook, etc.",
    categoria: "Firebase"
  },
  {
    id: 14,
    pregunta: "¿Cómo se registra un usuario con email y contraseña en Firebase?",
    opciones: [
      "FirebaseAuth.register()",
      "FirebaseAuth.instance.createUserWithEmailAndPassword()",
      "Firebase.createUser()",
      "Auth.signUp()"
    ],
    correcta: 1,
    explicacion: "createUserWithEmailAndPassword(email: '', password: '') crea una nueva cuenta.",
    categoria: "Firebase"
  },
  {
    id: 15,
    pregunta: "¿Qué es Firestore?",
    opciones: [
      "Un servicio de archivos",
      "Una base de datos NoSQL en tiempo real basada en documentos",
      "Un sistema de caché",
      "Un servidor web"
    ],
    correcta: 1,
    explicacion: "Cloud Firestore es una DB NoSQL flexible que organiza datos en colecciones y documentos.",
    categoria: "Firebase"
  },
  {
    id: 16,
    pregunta: "¿Cómo se estructura la data en Firestore?",
    opciones: [
      "Tablas y filas",
      "Colecciones que contienen documentos",
      "Archivos JSON",
      "Arrays y objetos"
    ],
    correcta: 1,
    explicacion: "Firestore usa colecciones (como carpetas) que contienen documentos (como archivos JSON).",
    categoria: "Firebase"
  },
  {
    id: 17,
    pregunta: "¿Cómo se obtienen datos en tiempo real de Firestore?",
    opciones: [
      "collection.get()",
      "collection.snapshots() retorna un Stream",
      "collection.listen()",
      "collection.realtime()"
    ],
    correcta: 1,
    explicacion: "snapshots() retorna un Stream que emite datos cada vez que hay cambios en la colección.",
    categoria: "Firebase"
  },
  {
    id: 18,
    pregunta: "¿Qué widget se usa para mostrar datos de un Stream de Firestore?",
    opciones: ["FutureBuilder", "StreamBuilder", "FirebaseBuilder", "DataBuilder"],
    correcta: 1,
    explicacion: "StreamBuilder escucha un Stream y reconstruye el widget cuando llegan nuevos datos.",
    categoria: "Firebase"
  },
  {
    id: 19,
    pregunta: "¿Qué servicio de Firebase almacena archivos como imágenes y videos?",
    opciones: ["Firestore", "Firebase Storage", "Firebase Files", "Firebase Media"],
    correcta: 1,
    explicacion: "Firebase Storage permite subir y descargar archivos como imágenes, videos y documentos.",
    categoria: "Firebase"
  },
  {
    id: 20,
    pregunta: "¿Cómo se escucha el estado de autenticación del usuario?",
    opciones: [
      "FirebaseAuth.userState",
      "FirebaseAuth.instance.authStateChanges()",
      "FirebaseAuth.onUserChange",
      "FirebaseAuth.listen()"
    ],
    correcta: 1,
    explicacion: "authStateChanges() retorna un Stream que emite cuando el usuario inicia o cierra sesión.",
    categoria: "Firebase"
  },

  // Riverpod (8)
  {
    id: 21,
    pregunta: "¿Qué es Riverpod?",
    opciones: [
      "Un widget de Flutter",
      "Un framework de gestión de estado, evolución de Provider",
      "Una base de datos",
      "Un paquete de animaciones"
    ],
    correcta: 1,
    explicacion: "Riverpod es una solución de gestión de estado compile-safe, sin dependencia del contexto.",
    categoria: "Riverpod"
  },
  {
    id: 22,
    pregunta: "¿Qué widget debe envolver la app para usar Riverpod?",
    opciones: ["RiverpodApp", "ProviderScope", "StateScope", "RiverpodProvider"],
    correcta: 1,
    explicacion: "ProviderScope debe estar en la raíz del árbol de widgets para que Riverpod funcione.",
    categoria: "Riverpod"
  },
  {
    id: 23,
    pregunta: "¿Cómo se define un provider simple que retorna un valor?",
    opciones: [
      "Provider((ref) => valor)",
      "final provider = SimpleProvider(valor)",
      "createProvider(valor)",
      "new Provider(valor)"
    ],
    correcta: 0,
    explicacion: "final myProvider = Provider((ref) => 'valor'); define un provider básico.",
    categoria: "Riverpod"
  },
  {
    id: 24,
    pregunta: "¿Qué tipo de provider se usa para estado mutable?",
    opciones: ["Provider", "StateProvider", "MutableProvider", "ChangeProvider"],
    correcta: 1,
    explicacion: "StateProvider permite leer y modificar un estado simple de forma reactiva.",
    categoria: "Riverpod"
  },
  {
    id: 25,
    pregunta: "¿Cómo se lee un provider en un widget con Riverpod?",
    opciones: [
      "context.read(provider)",
      "ref.watch(provider) en ConsumerWidget",
      "Provider.of(context)",
      "useProvider(provider)"
    ],
    correcta: 1,
    explicacion: "En ConsumerWidget o Consumer, ref.watch() escucha cambios y ref.read() lee sin escuchar.",
    categoria: "Riverpod"
  },
  {
    id: 26,
    pregunta: "¿Qué provider se usa para manejar operaciones asíncronas?",
    opciones: ["AsyncProvider", "FutureProvider", "StreamProvider", "Ambas B y C"],
    correcta: 3,
    explicacion: "FutureProvider para Futures únicos y StreamProvider para Streams de datos continuos.",
    categoria: "Riverpod"
  },
  {
    id: 27,
    pregunta: "¿Qué es un StateNotifierProvider?",
    opciones: [
      "Un provider que notifica errores",
      "Un provider que combina StateNotifier para lógica compleja de estado",
      "Un provider para notificaciones push",
      "Un provider obsoleto"
    ],
    correcta: 1,
    explicacion: "StateNotifierProvider expone un StateNotifier que encapsula lógica de estado compleja.",
    categoria: "Riverpod"
  },
  {
    id: 28,
    pregunta: "¿Cuál es la ventaja de Riverpod sobre Provider tradicional?",
    opciones: [
      "Es más lento pero más seguro",
      "No depende de BuildContext, compile-safe, y permite providers globales",
      "Solo funciona con Firebase",
      "Es más fácil de aprender"
    ],
    correcta: 1,
    explicacion: "Riverpod es compile-safe (errores en compilación), no necesita context, y tiene mejor testing.",
    categoria: "Riverpod"
  },

  // Freezed (7)
  {
    id: 29,
    pregunta: "¿Qué es Freezed?",
    opciones: [
      "Un paquete para animaciones de congelamiento",
      "Un generador de código para clases inmutables y union types",
      "Un sistema de caché",
      "Un framework de testing"
    ],
    correcta: 1,
    explicacion: "Freezed genera código para data classes inmutables con copyWith, ==, hashCode, y más.",
    categoria: "Freezed"
  },
  {
    id: 30,
    pregunta: "¿Qué anotación marca una clase para usar Freezed?",
    opciones: ["@immutable", "@freezed", "@dataClass", "@frozen"],
    correcta: 1,
    explicacion: "@freezed antes de la clase indica que Freezed debe generar código para ella.",
    categoria: "Freezed"
  },
  {
    id: 31,
    pregunta: "¿Qué comando genera el código de Freezed?",
    opciones: [
      "flutter generate",
      "dart run build_runner build",
      "freezed generate",
      "flutter freezed"
    ],
    correcta: 1,
    explicacion: "build_runner ejecuta los generadores de código: dart run build_runner build",
    categoria: "Freezed"
  },
  {
    id: 32,
    pregunta: "¿Qué método genera Freezed para crear copias modificadas del objeto?",
    opciones: ["clone()", "copy()", "copyWith()", "duplicate()"],
    correcta: 2,
    explicacion: "copyWith() crea una copia del objeto permitiendo cambiar solo algunas propiedades.",
    categoria: "Freezed"
  },
  {
    id: 33,
    pregunta: "¿Qué extensión tienen los archivos generados por Freezed?",
    opciones: [".generated.dart", ".g.dart", ".freezed.dart", ".auto.dart"],
    correcta: 2,
    explicacion: "Freezed genera archivos con extensión .freezed.dart (ej: user.freezed.dart).",
    categoria: "Freezed"
  },
  {
    id: 34,
    pregunta: "¿Qué son los Union Types en Freezed?",
    opciones: [
      "Tipos numéricos",
      "Clases que pueden tener múltiples estados/variantes",
      "Unión de bases de datos",
      "Tipos de texto"
    ],
    correcta: 1,
    explicacion: "Union types permiten modelar estados: @freezed class State { factory loading(); factory data(User); factory error(String); }",
    categoria: "Freezed"
  },
  {
    id: 35,
    pregunta: "¿Cómo se integra Freezed con json_serializable para JSON?",
    opciones: [
      "No se puede integrar",
      "Agregando @JsonSerializable a la clase",
      "Usando la directiva @Freezed() con fromJson en el factory",
      "Importando freezed_json"
    ],
    correcta: 2,
    explicacion: "Se agrega factory MyClass.fromJson(Map<String, dynamic> json) => _$MyClassFromJson(json);",
    categoria: "Freezed"
  },

  // Dio avanzado e interceptores (6 preguntas nuevas)
  {
    id: 36,
    pregunta: "¿Qué es un interceptor en Dio?",
    opciones: [
      "Un middleware que puede modificar peticiones y respuestas antes/después de enviarlas",
      "Un bloqueador de peticiones",
      "Un validador de datos",
      "Un caché de peticiones"
    ],
    correcta: 0,
    explicacion: "Los interceptores permiten interceptar requests/responses/errors para logging, autenticación, etc.",
    categoria: "APIs REST"
  },
  {
    id: 37,
    pregunta: "¿Qué métodos tiene un interceptor de Dio?",
    opciones: [
      "before(), after()",
      "onRequest(), onResponse(), onError()",
      "intercept(), handle()",
      "request(), response()"
    ],
    correcta: 1,
    explicacion: "onRequest() modifica peticiones, onResponse() modifica respuestas, onError() maneja errores.",
    categoria: "APIs REST"
  },
  {
    id: 38,
    pregunta: "¿Para qué sirve un interceptor de autenticación?",
    opciones: [
      "Validar usuarios",
      "Añadir automáticamente el token de autenticación a todas las peticiones",
      "Encriptar contraseñas",
      "Crear sesiones"
    ],
    correcta: 1,
    explicacion: "El interceptor añade el header Authorization automáticamente en onRequest() sin repetir código.",
    categoria: "APIs REST"
  },
  {
    id: 39,
    pregunta: "¿Cómo se implementa retry automático en Dio con interceptores?",
    opciones: [
      "No se puede con interceptores",
      "En onError(), verificar el error y reintentar con dio.fetch()",
      "Con dio.retry()",
      "Con el parámetro retryOnError"
    ],
    correcta: 1,
    explicacion: "En onError() se puede verificar el tipo de error y reintentar la petición original con dio.fetch().",
    categoria: "APIs REST"
  },
  {
    id: 40,
    pregunta: "¿Qué es el timeout en peticiones HTTP?",
    opciones: [
      "El tiempo de vida de un token",
      "El tiempo máximo de espera antes de cancelar la petición",
      "El tiempo entre peticiones",
      "El tiempo de caché"
    ],
    correcta: 1,
    explicacion: "timeout define cuánto esperar antes de considerar que la petición falló por tiempo de espera.",
    categoria: "APIs REST"
  },
  {
    id: 41,
    pregunta: "¿Cómo se configura timeout en Dio?",
    opciones: [
      "dio.timeout = Duration(seconds: 30)",
      "En BaseOptions: connectTimeout y receiveTimeout",
      "dio.setTimeoutDuration()",
      "En el header 'Timeout'"
    ],
    correcta: 1,
    explicacion: "BaseOptions tiene connectTimeout (conectar) y receiveTimeout (recibir respuesta) en milisegundos.",
    categoria: "APIs REST"
  },

  // Estrategias de caché y manejo de errores (5 preguntas nuevas)
  {
    id: 42,
    pregunta: "¿Para qué sirve una estrategia cache-first?",
    opciones: [
      "Limpiar el caché primero",
      "Mostrar datos del caché primero y luego actualizar con red",
      "Solo usar caché",
      "Priorizar velocidad sobre precisión"
    ],
    correcta: 1,
    explicacion: "Cache-first muestra datos rápidos del caché mientras obtiene datos actualizados de la red en background.",
    categoria: "APIs REST"
  },
  {
    id: 43,
    pregunta: "¿Qué paquete ayuda con caché de peticiones HTTP en Flutter?",
    opciones: ["dio_cache", "dio_http_cache", "flutter_cache_manager", "Todos los anteriores"],
    correcta: 3,
    explicacion: "Hay varios paquetes: dio_cache_interceptor, flutter_cache_manager, hive para caché local.",
    categoria: "APIs REST"
  },
  {
    id: 44,
    pregunta: "¿Qué estrategia maneja peticiones fallidas reintentándolas exponencialmente?",
    opciones: [
      "Linear retry",
      "Exponential backoff",
      "Immediate retry",
      "Constant retry"
    ],
    correcta: 1,
    explicacion: "Exponential backoff espera 1s, 2s, 4s, 8s... entre reintentos para no sobrecargar el servidor.",
    categoria: "APIs REST"
  },
  {
    id: 45,
    pregunta: "¿Cómo se maneja el error de red sin conexión?",
    opciones: [
      "Ignorarlo",
      "Mostrar mensaje y permitir reintentar cuando haya conexión",
      "Cerrar la app",
      "No se puede detectar"
    ],
    correcta: 1,
    explicacion: "Se captura SocketException, se muestra UI offline y se puede usar connectivity_plus para detectar conexión.",
    categoria: "APIs REST"
  },
  {
    id: 46,
    pregunta: "¿Qué patrón maneja diferentes estados de una petición (loading, success, error)?",
    opciones: [
      "State pattern",
      "Result/Either pattern con sealed classes",
      "Observer pattern",
      "Factory pattern"
    ],
    correcta: 1,
    explicacion: "Result<Success, Error> o Either<Left, Right> encapsulan los estados posibles de forma type-safe.",
    categoria: "APIs REST"
  },

  // Firebase Firestore avanzado (5 preguntas nuevas)
  {
    id: 47,
    pregunta: "¿Cómo se realiza una query compuesta en Firestore?",
    opciones: [
      "where().where().where()",
      "Encadenando múltiples where(): collection.where('edad', isGreaterThan: 18).where('activo', isEqualTo: true)",
      "No se pueden hacer queries compuestas",
      "Con un SQL query"
    ],
    correcta: 1,
    explicacion: "Se encadenan múltiples where() pero requiere índices compuestos en Firebase Console.",
    categoria: "Firebase"
  },
  {
    id: 48,
    pregunta: "¿Cómo se implementa paginación en Firestore?",
    opciones: [
      "Con skip() y take()",
      "Con limit() y startAfter(lastDocument)",
      "Con page() y size()",
      "No soporta paginación"
    ],
    correcta: 1,
    explicacion: "limit(pageSize) limita resultados y startAfter(lastDoc) continúa desde el último documento.",
    categoria: "Firebase"
  },
  {
    id: 49,
    pregunta: "¿Qué son las Security Rules en Firestore?",
    opciones: [
      "Reglas de cifrado",
      "Reglas que definen quién puede leer/escribir qué datos",
      "Reglas de validación de datos",
      "Reglas de backup"
    ],
    correcta: 1,
    explicacion: "Security Rules controlan el acceso basado en autenticación, validación y lógica personalizada.",
    categoria: "Firebase"
  },
  {
    id: 50,
    pregunta: "¿Qué operador de Security Rules verifica si el usuario está autenticado?",
    opciones: [
      "if authenticated()",
      "if request.auth != null",
      "if user.loggedIn",
      "if hasAuth()"
    ],
    correcta: 1,
    explicacion: "request.auth contiene información del usuario autenticado, null si no está autenticado.",
    categoria: "Firebase"
  },
  {
    id: 51,
    pregunta: "¿Cómo se ejecuta una transacción en Firestore?",
    opciones: [
      "db.transaction()",
      "FirebaseFirestore.instance.runTransaction((transaction) async {...})",
      "beginTransaction()",
      "startTransaction()"
    ],
    correcta: 1,
    explicacion: "runTransaction() asegura que múltiples operaciones se ejecuten atómicamente (todo o nada).",
    categoria: "Firebase"
  },

  // Firebase Cloud Functions y Analytics (4 preguntas nuevas)
  {
    id: 52,
    pregunta: "¿Qué son Cloud Functions en Firebase?",
    opciones: [
      "Funciones del cliente",
      "Código backend que se ejecuta en servidores de Google en respuesta a eventos",
      "Funciones matemáticas",
      "Funciones de UI"
    ],
    correcta: 1,
    explicacion: "Cloud Functions ejecutan código Node.js en respuesta a triggers: HTTP, Firestore, Auth, Storage.",
    categoria: "Firebase"
  },
  {
    id: 53,
    pregunta: "¿Cómo se llama una Cloud Function desde Flutter?",
    opciones: [
      "http.get() a la URL de la función",
      "FirebaseFunctions.instance.httpsCallable('nombreFuncion').call()",
      "Firebase.callFunction()",
      "CloudFunction.execute()"
    ],
    correcta: 1,
    explicacion: "httpsCallable crea una referencia callable que maneja automáticamente la autenticación.",
    categoria: "Firebase"
  },
  {
    id: 54,
    pregunta: "¿Para qué sirve Firebase Analytics?",
    opciones: [
      "Analizar el código",
      "Rastrear eventos de usuario y comportamiento en la app",
      "Analizar bases de datos",
      "Optimizar rendimiento"
    ],
    correcta: 1,
    explicacion: "Analytics rastrea eventos personalizados, pantallas vistas, conversiones y comportamiento del usuario.",
    categoria: "Firebase"
  },
  {
    id: 55,
    pregunta: "¿Cómo se registra un evento personalizado en Analytics?",
    opciones: [
      "Analytics.track()",
      "FirebaseAnalytics.instance.logEvent(name: 'evento', parameters: {})",
      "Firebase.logEvent()",
      "Analytics.record()"
    ],
    correcta: 1,
    explicacion: "logEvent() registra eventos con nombre y parámetros opcionales para análisis detallado.",
    categoria: "Firebase"
  },

  // Crashlytics y Remote Config (3 preguntas nuevas)
  {
    id: 56,
    pregunta: "¿Qué es Firebase Crashlytics?",
    opciones: [
      "Un sistema de caché",
      "Un servicio de reporte de crashes en tiempo real",
      "Un debugger",
      "Un analizador de rendimiento"
    ],
    correcta: 1,
    explicacion: "Crashlytics recopila crashes automáticamente con stack traces, logs y contexto del dispositivo.",
    categoria: "Firebase"
  },
  {
    id: 57,
    pregunta: "¿Cómo se registra un log personalizado en Crashlytics?",
    opciones: [
      "Crashlytics.log()",
      "FirebaseCrashlytics.instance.log('mensaje')",
      "Firebase.logCrash()",
      "print() automáticamente"
    ],
    correcta: 1,
    explicacion: "log() añade mensajes personalizados que aparecen en el reporte cuando ocurre un crash.",
    categoria: "Firebase"
  },
  {
    id: 58,
    pregunta: "¿Qué es Firebase Remote Config?",
    opciones: [
      "Configuración remota del servidor",
      "Servicio que permite cambiar comportamiento/apariencia de la app sin actualizar",
      "Control remoto de dispositivos",
      "Backup de configuración"
    ],
    correcta: 1,
    explicacion: "Remote Config permite A/B testing, feature flags y cambios dinámicos sin publicar nueva versión.",
    categoria: "Firebase"
  },

  // Manejo de tokens y autenticación avanzada (2 preguntas nuevas)
  {
    id: 59,
    pregunta: "¿Qué es un refresh token?",
    opciones: [
      "Un token que actualiza la UI",
      "Un token de larga duración usado para obtener nuevos access tokens sin re-login",
      "Un token que refresca la página",
      "Un token temporal"
    ],
    correcta: 1,
    explicacion: "Access token expira pronto (15min). Refresh token (30 días) obtiene nuevos access tokens sin login.",
    categoria: "Firebase"
  },
  {
    id: 60,
    pregunta: "¿Cómo se persiste la sesión de Firebase Auth?",
    opciones: [
      "Manualmente con SharedPreferences",
      "Firebase Auth persiste automáticamente el estado de autenticación",
      "Con Hive",
      "No se puede persistir"
    ],
    correcta: 1,
    explicacion: "Firebase Auth mantiene la sesión automáticamente. authStateChanges() detecta el estado al iniciar.",
    categoria: "Firebase"
  }
];
