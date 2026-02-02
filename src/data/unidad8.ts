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
  }
];
