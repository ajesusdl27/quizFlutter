import type { Pregunta } from './types';

export const preguntasUnidad6: Pregunta[] = [
  // Interfaces naturales y gestos (8)
  {
    id: 1,
    pregunta: "¿Qué widget detecta gestos táctiles como tap, drag y scale?",
    opciones: ["TouchDetector", "GestureDetector", "InputListener", "TouchWidget"],
    correcta: 1,
    explicacion: "GestureDetector envuelve widgets y detecta diversos gestos: onTap, onDoubleTap, onLongPress, etc.",
    categoria: "Gestos"
  },
  {
    id: 2,
    pregunta: "¿Qué callback de GestureDetector se ejecuta cuando el usuario toca y suelta rápidamente?",
    opciones: ["onClick", "onPress", "onTap", "onTouch"],
    correcta: 2,
    explicacion: "onTap se dispara cuando el usuario realiza un toque simple (tap) en el widget.",
    categoria: "Gestos"
  },
  {
    id: 3,
    pregunta: "¿Qué widget proporciona feedback visual de tinta al tocar (ripple effect)?",
    opciones: ["RippleWidget", "InkWell", "TouchFeedback", "MaterialTouch"],
    correcta: 1,
    explicacion: "InkWell muestra el efecto de onda (ripple) característico de Material Design al tocar.",
    categoria: "Gestos"
  },
  {
    id: 4,
    pregunta: "¿Cómo se detecta un gesto de deslizar (swipe) en Flutter?",
    opciones: [
      "GestureDetector con onSwipe",
      "Dismissible widget o GestureDetector con onHorizontalDrag",
      "SwipeDetector widget",
      "TouchListener con swipe"
    ],
    correcta: 1,
    explicacion: "Dismissible permite swipe para eliminar. GestureDetector usa onHorizontalDragEnd/onPanEnd.",
    categoria: "Gestos"
  },
  {
    id: 5,
    pregunta: "¿Qué widget permite hacer zoom con gestos de pinza (pinch)?",
    opciones: ["ZoomWidget", "InteractiveViewer", "ScaleView", "PinchZoom"],
    correcta: 1,
    explicacion: "InteractiveViewer permite pan y zoom con gestos, ideal para imágenes y contenido ampliable.",
    categoria: "Gestos"
  },
  {
    id: 6,
    pregunta: "¿Qué es el Hero widget en Flutter?",
    opciones: [
      "Un widget para mostrar íconos de superhéroes",
      "Un widget que crea animaciones de transición entre pantallas",
      "El widget principal de la app",
      "Un contenedor especial"
    ],
    correcta: 1,
    explicacion: "Hero anima automáticamente la transición de un widget entre dos pantallas cuando comparten el mismo tag.",
    categoria: "Animaciones"
  },
  {
    id: 7,
    pregunta: "¿Qué widget permite crear animaciones implícitas fácilmente?",
    opciones: [
      "AnimationWidget",
      "AnimatedContainer",
      "TransitionBox",
      "MotionWidget"
    ],
    correcta: 1,
    explicacion: "AnimatedContainer anima automáticamente cambios en sus propiedades (color, tamaño, padding, etc.).",
    categoria: "Animaciones"
  },
  {
    id: 8,
    pregunta: "¿Cuál es la duración por defecto recomendada para animaciones en Material Design?",
    opciones: ["100ms", "200-300ms", "500ms", "1 segundo"],
    correcta: 1,
    explicacion: "Material Design recomienda 200-300ms para la mayoría de animaciones de UI.",
    categoria: "Animaciones"
  },

  // Arquitectura de proyecto (7)
  {
    id: 9,
    pregunta: "¿Cuál es la estructura de carpetas recomendada para un proyecto Flutter profesional?",
    opciones: [
      "Todo en la carpeta lib/",
      "lib/ con subcarpetas: screens/, widgets/, models/, services/",
      "src/ con componentes/",
      "app/ con views/"
    ],
    correcta: 1,
    explicacion: "Una estructura organizada separa screens (pantallas), widgets (componentes), models (datos) y services (lógica de negocio).",
    categoria: "Arquitectura"
  },
  {
    id: 10,
    pregunta: "¿Dónde deberían ubicarse los archivos de modelos de datos?",
    opciones: [
      "En la raíz del proyecto",
      "En lib/models/ o lib/data/models/",
      "En assets/",
      "En test/"
    ],
    correcta: 1,
    explicacion: "Los modelos de datos (clases que representan entidades) van en una carpeta models/ dentro de lib/.",
    categoria: "Arquitectura"
  },
  {
    id: 11,
    pregunta: "¿Qué carpeta contiene los recursos estáticos como imágenes y fuentes?",
    opciones: ["lib/resources/", "static/", "assets/", "public/"],
    correcta: 2,
    explicacion: "La carpeta assets/ en la raíz contiene recursos que deben declararse en pubspec.yaml.",
    categoria: "Arquitectura"
  },
  {
    id: 12,
    pregunta: "¿Qué es un Repository en arquitectura de software?",
    opciones: [
      "Una carpeta de Git",
      "Una capa que abstrae el acceso a datos",
      "Un tipo de widget",
      "Un archivo de configuración"
    ],
    correcta: 1,
    explicacion: "El Repository Pattern abstrae la fuente de datos (API, DB, cache), permitiendo cambiarla sin afectar la lógica.",
    categoria: "Arquitectura"
  },
  {
    id: 13,
    pregunta: "¿Qué patrón separa la lógica de negocio de la UI en Flutter?",
    opciones: [
      "MVC únicamente",
      "BLoC, Provider, MVVM o Clean Architecture",
      "Solo herencia de widgets",
      "No existe tal patrón"
    ],
    correcta: 1,
    explicacion: "Patrones como BLoC, Provider/Riverpod, MVVM y Clean Architecture separan UI de lógica de negocio.",
    categoria: "Arquitectura"
  },
  {
    id: 14,
    pregunta: "¿Dónde deberían ubicarse los servicios que hacen llamadas a APIs?",
    opciones: [
      "Directamente en los widgets",
      "En lib/services/ o lib/data/datasources/",
      "En la carpeta android/",
      "En pubspec.yaml"
    ],
    correcta: 1,
    explicacion: "Los servicios de API van en services/ o datasources/, separados de la UI y la lógica de negocio.",
    categoria: "Arquitectura"
  },
  {
    id: 15,
    pregunta: "¿Qué es la inyección de dependencias?",
    opciones: [
      "Agregar paquetes a pubspec.yaml",
      "Proveer dependencias externas a una clase en lugar de crearlas internamente",
      "Importar archivos",
      "Usar variables globales"
    ],
    correcta: 1,
    explicacion: "La inyección de dependencias permite pasar servicios/repositorios a clases, facilitando testing y desacoplamiento.",
    categoria: "Arquitectura"
  },

  // Clean architecture en Flutter (5)
  {
    id: 16,
    pregunta: "¿Cuáles son las capas principales de Clean Architecture?",
    opciones: [
      "Frontend y Backend",
      "Presentación, Dominio y Datos",
      "Vista y Controlador",
      "UI y Base de datos"
    ],
    correcta: 1,
    explicacion: "Clean Architecture divide en: Presentación (UI), Dominio (lógica de negocio) y Datos (fuentes de datos).",
    categoria: "Clean Architecture"
  },
  {
    id: 17,
    pregunta: "¿Qué contiene la capa de Dominio en Clean Architecture?",
    opciones: [
      "Widgets y pantallas",
      "Entidades, casos de uso e interfaces de repositorio",
      "Llamadas HTTP",
      "Configuración de la app"
    ],
    correcta: 1,
    explicacion: "El Dominio contiene la lógica de negocio pura: entidades, use cases y contratos de repositorio.",
    categoria: "Clean Architecture"
  },
  {
    id: 18,
    pregunta: "¿Qué es un Use Case (Caso de Uso)?",
    opciones: [
      "Un tipo de widget",
      "Una clase que encapsula una operación de negocio específica",
      "Un test unitario",
      "Una pantalla de la app"
    ],
    correcta: 1,
    explicacion: "Un Use Case representa una acción específica del negocio como 'ObtenerUsuario' o 'CrearPedido'.",
    categoria: "Clean Architecture"
  },
  {
    id: 19,
    pregunta: "¿Qué regla de dependencias define Clean Architecture?",
    opciones: [
      "Todas las capas pueden depender entre sí",
      "Las capas internas no conocen las externas (el dominio no conoce la UI)",
      "La UI debe conocer la base de datos",
      "No hay reglas de dependencias"
    ],
    correcta: 1,
    explicacion: "La regla de dependencia indica que las capas internas (Dominio) no deben conocer las externas (UI, DB).",
    categoria: "Clean Architecture"
  },
  {
    id: 20,
    pregunta: "¿Por qué es beneficioso usar Clean Architecture?",
    opciones: [
      "El código es más corto",
      "Facilita testing, mantenimiento y cambios de tecnología",
      "Las apps son más rápidas",
      "Solo es útil para apps grandes"
    ],
    correcta: 1,
    explicacion: "Clean Architecture permite testear cada capa independientemente y cambiar implementaciones sin afectar otras capas.",
    categoria: "Clean Architecture"
  },

  // Organización de carpetas (5)
  {
    id: 21,
    pregunta: "¿Qué enfoque de organización agrupa por característica (feature)?",
    opciones: [
      "Agrupar todos los widgets juntos",
      "Crear carpetas por feature: auth/, home/, profile/ con sus propios widgets, models, etc.",
      "Un solo archivo por pantalla",
      "Separar por plataforma"
    ],
    correcta: 1,
    explicacion: "Feature-first organiza por funcionalidad, cada feature tiene su carpeta con screens, widgets, models propios.",
    categoria: "Organización"
  },
  {
    id: 22,
    pregunta: "¿Cuál es la ventaja de organizar por capas (layer-first)?",
    opciones: [
      "Es más rápido de compilar",
      "Fácil encontrar todos los widgets o todos los modelos en un lugar",
      "Usa menos memoria",
      "Es obligatorio en Flutter"
    ],
    correcta: 1,
    explicacion: "Layer-first (screens/, widgets/, models/) facilita encontrar elementos por tipo y mantener consistencia.",
    categoria: "Organización"
  },
  {
    id: 23,
    pregunta: "¿Dónde se recomienda colocar las constantes de la aplicación?",
    opciones: [
      "En cada archivo que las use",
      "En lib/core/constants/ o lib/config/",
      "En pubspec.yaml",
      "En la carpeta assets/"
    ],
    correcta: 1,
    explicacion: "Las constantes (colores, strings, dimensiones) van en una carpeta centralizada como core/constants/.",
    categoria: "Organización"
  },
  {
    id: 24,
    pregunta: "¿Qué archivo exporta múltiples archivos de una carpeta para facilitar imports?",
    opciones: [
      "index.dart",
      "exports.dart o un archivo barrel (ej: widgets.dart)",
      "main.dart",
      "package.dart"
    ],
    correcta: 1,
    explicacion: "Un archivo barrel (ej: widgets.dart) exporta todos los widgets: export 'button.dart'; export 'card.dart';",
    categoria: "Organización"
  },
  {
    id: 25,
    pregunta: "¿Cuál es una buena práctica para nombrar archivos en Flutter?",
    opciones: [
      "CamelCase: MiWidget.dart",
      "snake_case: mi_widget.dart",
      "kebab-case: mi-widget.dart",
      "UPPERCASE: MIWIDGET.dart"
    ],
    correcta: 1,
    explicacion: "Dart/Flutter recomienda snake_case para nombres de archivos: user_profile_screen.dart",
    categoria: "Organización"
  },

  // Sensores (7 preguntas nuevas)
  {
    id: 26,
    pregunta: "¿Qué paquete se usa comúnmente para acceder a sensores en Flutter?",
    opciones: ["flutter_sensors", "sensors", "sensors_plus", "device_sensors"],
    correcta: 2,
    explicacion: "sensors_plus proporciona acceso a acelerómetro, giroscopio y magnetómetro del dispositivo.",
    categoria: "Sensores"
  },
  {
    id: 27,
    pregunta: "¿Qué sensor mide la aceleración del dispositivo incluyendo la gravedad?",
    opciones: ["Giroscopio", "Acelerómetro", "Magnetómetro", "GPS"],
    correcta: 1,
    explicacion: "El acelerómetro mide aceleración en los ejes X, Y, Z. Detecta movimiento, inclinación y sacudidas.",
    categoria: "Sensores"
  },
  {
    id: 28,
    pregunta: "¿Qué sensor mide la rotación angular del dispositivo?",
    opciones: ["Acelerómetro", "Giroscopio", "Brújula", "Inclinómetro"],
    correcta: 1,
    explicacion: "El giroscopio mide velocidad angular (rotación) en los tres ejes, útil para controles de juegos.",
    categoria: "Sensores"
  },
  {
    id: 29,
    pregunta: "¿Qué sensor se usa para detectar la orientación magnética (brújula)?",
    opciones: ["Acelerómetro", "Giroscopio", "Magnetómetro", "Orientómetro"],
    correcta: 2,
    explicacion: "El magnetómetro detecta el campo magnético terrestre, permitiendo determinar el norte magnético.",
    categoria: "Sensores"
  },
  {
    id: 30,
    pregunta: "¿Cómo se escuchan los eventos del acelerómetro?",
    opciones: [
      "accelerometer.listen()",
      "accelerometerEvents.listen((event) => ...)",
      "Accelerometer.stream()",
      "getAccelerometer()"
    ],
    correcta: 1,
    explicacion: "accelerometerEvents es un Stream que emite eventos AccelerometerEvent con valores x, y, z.",
    categoria: "Sensores"
  },
  {
    id: 31,
    pregunta: "¿Qué paquete proporciona retroalimentación háptica (vibración)?",
    opciones: ["haptic", "vibration", "HapticFeedback (de Flutter)", "flutter_vibrate"],
    correcta: 2,
    explicacion: "HapticFeedback.vibrate() o HapticFeedback.heavyImpact() de Flutter proporciona vibración.",
    categoria: "Sensores"
  },
  {
    id: 32,
    pregunta: "¿Para qué se usan los sensores en aplicaciones Flutter?",
    opciones: [
      "Solo para juegos",
      "Para juegos, fitness tracking, realidad aumentada, detección de gestos",
      "No se pueden usar",
      "Solo para debugging"
    ],
    correcta: 1,
    explicacion: "Sensores permiten juegos con controles de inclinación, apps fitness, AR, contadores de pasos, etc.",
    categoria: "Sensores"
  },

  // Cámara (6 preguntas nuevas)
  {
    id: 33,
    pregunta: "¿Qué paquete se usa comúnmente para acceder a la cámara?",
    opciones: ["flutter_camera", "camera", "image_picker", "Ambas B y C"],
    correcta: 3,
    explicacion: "camera permite control completo de la cámara. image_picker captura fotos/videos de forma simple.",
    categoria: "Cámara"
  },
  {
    id: 34,
    pregunta: "¿Qué widget del paquete camera muestra la vista previa de la cámara?",
    opciones: ["CameraView", "CameraPreview", "CameraWidget", "VideoView"],
    correcta: 1,
    explicacion: "CameraPreview(controller) muestra el feed en vivo de la cámara.",
    categoria: "Cámara"
  },
  {
    id: 35,
    pregunta: "¿Qué permisos necesita Android para usar la cámara?",
    opciones: [
      "CAMERA en AndroidManifest.xml",
      "No necesita permisos",
      "Solo para grabar video",
      "Se piden automáticamente"
    ],
    correcta: 0,
    explicacion: "Debe declararse <uses-permission android:name='android.permission.CAMERA'/> y pedirse en runtime.",
    categoria: "Cámara"
  },
  {
    id: 36,
    pregunta: "¿Qué hace CameraController?",
    opciones: [
      "Controla el brillo de la pantalla",
      "Inicializa y controla la cámara (tomar foto, grabar video, zoom)",
      "Gestiona permisos",
      "Edita fotos"
    ],
    correcta: 1,
    explicacion: "CameraController inicializa la cámara y proporciona métodos como takePicture() y startVideoRecording().",
    categoria: "Cámara"
  },
  {
    id: 37,
    pregunta: "¿Cómo se selecciona entre cámara frontal y trasera?",
    opciones: [
      "No se puede cambiar",
      "Especificando CameraLensDirection en availableCameras()",
      "Automáticamente",
      "Solo con ajustes del sistema"
    ],
    correcta: 1,
    explicacion: "availableCameras() lista cámaras. Se filtra por lensDirection (front, back, external).",
    categoria: "Cámara"
  },
  {
    id: 38,
    pregunta: "¿Qué paquete ayuda a pedir permisos en Flutter?",
    opciones: ["permissions", "permission_handler", "flutter_permissions", "ask_permission"],
    correcta: 1,
    explicacion: "permission_handler maneja permisos de cámara, ubicación, micrófono, etc. en Android/iOS.",
    categoria: "Cámara"
  },

  // Ubicación y GPS (7 preguntas nuevas)
  {
    id: 39,
    pregunta: "¿Qué paquete se usa para acceder a la ubicación del dispositivo?",
    opciones: ["flutter_location", "location", "geolocator", "Ambas B y C"],
    correcta: 3,
    explicacion: "geolocator y location son paquetes populares para obtener ubicación GPS del dispositivo.",
    categoria: "Ubicación"
  },
  {
    id: 40,
    pregunta: "¿Qué permisos necesita Android para acceder a la ubicación?",
    opciones: [
      "GPS_PERMISSION",
      "ACCESS_FINE_LOCATION y/o ACCESS_COARSE_LOCATION",
      "LOCATION_ACCESS",
      "No necesita permisos"
    ],
    correcta: 1,
    explicacion: "ACCESS_FINE_LOCATION (precisa) o ACCESS_COARSE_LOCATION (aproximada) en AndroidManifest.xml.",
    categoria: "Ubicación"
  },
  {
    id: 41,
    pregunta: "¿Qué método de geolocator obtiene la ubicación actual una vez?",
    opciones: [
      "getLocation()",
      "Geolocator.getCurrentPosition()",
      "getCurrentLocation()",
      "fetchPosition()"
    ],
    correcta: 1,
    explicacion: "Geolocator.getCurrentPosition() retorna un Future<Position> con latitud, longitud, etc.",
    categoria: "Ubicación"
  },
  {
    id: 42,
    pregunta: "¿Cómo se escucha continuamente la ubicación del usuario?",
    opciones: [
      "Llamando getCurrentPosition() repetidamente",
      "Geolocator.getPositionStream().listen()",
      "No se puede escuchar continuamente",
      "watchPosition()"
    ],
    correcta: 1,
    explicacion: "getPositionStream() retorna un Stream que emite actualizaciones de ubicación continuamente.",
    categoria: "Ubicación"
  },
  {
    id: 43,
    pregunta: "¿Qué información proporciona un objeto Position?",
    opciones: [
      "Solo latitud y longitud",
      "Latitud, longitud, altitud, precisión, velocidad, rumbo",
      "Solo coordenadas",
      "Dirección postal"
    ],
    correcta: 1,
    explicacion: "Position incluye latitude, longitude, altitude, accuracy, speed, heading y timestamp.",
    categoria: "Ubicación"
  },
  {
    id: 44,
    pregunta: "¿Qué es geocoding?",
    opciones: [
      "Encriptar coordenadas",
      "Convertir dirección a coordenadas o viceversa",
      "Comprimir datos GPS",
      "Validar coordenadas"
    ],
    correcta: 1,
    explicacion: "Geocoding convierte direcciones a coordenadas. Reverse geocoding hace lo opuesto (coordenadas → dirección).",
    categoria: "Ubicación"
  },
  {
    id: 45,
    pregunta: "¿Qué paquete se usa para mostrar mapas en Flutter?",
    opciones: ["flutter_map", "google_maps_flutter", "maps", "Ambas A y B"],
    correcta: 3,
    explicacion: "google_maps_flutter usa Google Maps. flutter_map es alternativa open source con OpenStreetMap.",
    categoria: "Ubicación"
  },

  // Voz y audio (5 preguntas nuevas)
  {
    id: 46,
    pregunta: "¿Qué paquete convierte voz a texto (speech-to-text)?",
    opciones: ["voice_recognition", "speech_to_text", "flutter_stt", "voice_to_text"],
    correcta: 1,
    explicacion: "speech_to_text permite transcribir audio del micrófono a texto en tiempo real.",
    categoria: "Voz"
  },
  {
    id: 47,
    pregunta: "¿Qué paquete convierte texto a voz (text-to-speech)?",
    opciones: ["text_to_speech", "flutter_tts", "voice_synthesis", "tts"],
    correcta: 1,
    explicacion: "flutter_tts lee texto en voz alta usando el motor TTS del sistema operativo.",
    categoria: "Voz"
  },
  {
    id: 48,
    pregunta: "¿Qué permisos necesita Android para usar el micrófono?",
    opciones: [
      "AUDIO_PERMISSION",
      "RECORD_AUDIO en AndroidManifest.xml",
      "MICROPHONE",
      "No necesita permisos"
    ],
    correcta: 1,
    explicacion: "<uses-permission android:name='android.permission.RECORD_AUDIO'/> es necesario.",
    categoria: "Voz"
  },
  {
    id: 49,
    pregunta: "¿Qué se puede hacer con speech_to_text?",
    opciones: [
      "Solo reconocer comandos simples",
      "Transcribir voz a texto, detectar idiomas, reconocimiento continuo",
      "Solo funciona en inglés",
      "Sintetizar voz"
    ],
    correcta: 1,
    explicacion: "speech_to_text permite transcripción continua, múltiples idiomas, resultados parciales y finales.",
    categoria: "Voz"
  },
  {
    id: 50,
    pregunta: "¿Para qué aplicaciones son útiles las interfaces de voz?",
    opciones: [
      "Solo asistentes virtuales",
      "Asistentes, accesibilidad, dictado, comandos manos libres, transcripción",
      "Solo para personas con discapacidad",
      "No son útiles en móviles"
    ],
    correcta: 1,
    explicacion: "Interfaces de voz mejoran accesibilidad, permiten uso manos libres y aceleran entrada de texto.",
    categoria: "Voz"
  },

  // Autenticación biométrica (5 preguntas nuevas)
  {
    id: 51,
    pregunta: "¿Qué paquete proporciona autenticación biométrica?",
    opciones: ["biometrics", "local_auth", "fingerprint", "face_id"],
    correcta: 1,
    explicacion: "local_auth permite autenticación con huella dactilar, Face ID, reconocimiento facial, etc.",
    categoria: "Biometría"
  },
  {
    id: 52,
    pregunta: "¿Qué tipos de autenticación biométrica soporta Flutter?",
    opciones: [
      "Solo huella dactilar",
      "Huella dactilar, Face ID, reconocimiento facial, iris",
      "Solo Face ID",
      "No soporta biometría"
    ],
    correcta: 1,
    explicacion: "local_auth usa el sistema biométrico del dispositivo: Touch ID, Face ID, huella, reconocimiento facial.",
    categoria: "Biometría"
  },
  {
    id: 53,
    pregunta: "¿Cómo se verifica si el dispositivo tiene biometría disponible?",
    opciones: [
      "No se puede verificar",
      "LocalAuthentication().canCheckBiometrics",
      "Biometrics.isAvailable()",
      "hasBiometrics()"
    ],
    correcta: 1,
    explicacion: "canCheckBiometrics retorna un Future<bool> indicando si hay hardware biométrico.",
    categoria: "Biometría"
  },
  {
    id: 54,
    pregunta: "¿Qué método autentica al usuario con biometría?",
    opciones: [
      "authenticate()",
      "localAuth.authenticate(localizedReason: 'motivo')",
      "verifyBiometrics()",
      "checkFingerprint()"
    ],
    correcta: 1,
    explicacion: "authenticate() muestra el diálogo de biometría y retorna true si el usuario se autentica exitosamente.",
    categoria: "Biometría"
  },
  {
    id: 55,
    pregunta: "¿Para qué se usa autenticación biométrica en apps?",
    opciones: [
      "Solo para bancos",
      "Seguridad de login, confirmar pagos, desbloquear features sensibles",
      "Solo para Face ID",
      "No es segura"
    ],
    correcta: 1,
    explicacion: "Biometría añade capa de seguridad para login, transacciones, acceso a datos privados, etc.",
    categoria: "Biometría"
  },

  // Animaciones Hero avanzadas (5 preguntas nuevas)
  {
    id: 56,
    pregunta: "¿Qué propiedad debe coincidir entre dos Hero widgets para animarse?",
    opciones: ["id", "tag", "key", "name"],
    correcta: 1,
    explicacion: "El tag debe ser idéntico en ambas pantallas: Hero(tag: 'hero_image', child: ...)",
    categoria: "Animaciones"
  },
  {
    id: 57,
    pregunta: "¿Cuándo se ejecuta la animación Hero?",
    opciones: [
      "Al construir la pantalla",
      "Durante la transición de navegación entre dos pantallas",
      "Al hacer tap",
      "Solo en iOS"
    ],
    correcta: 1,
    explicacion: "Hero se anima automáticamente cuando Navigator cambia entre pantallas que tienen Hero con mismo tag.",
    categoria: "Animaciones"
  },
  {
    id: 58,
    pregunta: "¿Qué tipo de elementos se animan comúnmente con Hero?",
    opciones: [
      "Solo texto",
      "Imágenes, íconos, avatares que aparecen en lista y detalle",
      "Solo botones",
      "No se pueden animar elementos"
    ],
    correcta: 1,
    explicacion: "Hero es ideal para imágenes de productos, perfiles, etc. que van de lista a pantalla detalle.",
    categoria: "Animaciones"
  },
  {
    id: 59,
    pregunta: "¿Se puede personalizar la curva de animación de Hero?",
    opciones: [
      "No, es fija",
      "Sí, con createRectTween y flightShuttleBuilder",
      "Solo en iOS",
      "Solo la duración"
    ],
    correcta: 1,
    explicacion: "Hero permite personalizar la trayectoria con createRectTween y el widget durante el vuelo con flightShuttleBuilder.",
    categoria: "Animaciones"
  },
  {
    id: 60,
    pregunta: "¿Qué sucede si dos Hero tienen el mismo tag en la misma pantalla?",
    opciones: [
      "Se animan ambos",
      "Se lanza una excepción en debug",
      "Solo se anima el primero",
      "No pasa nada"
    ],
    correcta: 1,
    explicacion: "Flutter lanza una excepción porque cada tag debe ser único dentro de una ruta/pantalla.",
    categoria: "Animaciones"
  }
];
