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
  }
];
