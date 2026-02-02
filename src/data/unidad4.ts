import type { Pregunta } from './types';

export const preguntasUnidad4: Pregunta[] = [
  // Instalación y configuración (5)
  {
    id: 1,
    pregunta: "¿Cuál es el comando para verificar que Flutter está correctamente instalado?",
    opciones: ["flutter check", "flutter doctor", "flutter verify", "flutter status"],
    correcta: 1,
    explicacion: "'flutter doctor' analiza tu sistema y muestra un informe del estado de la instalación de Flutter.",
    categoria: "Instalación"
  },
  {
    id: 2,
    pregunta: "¿Qué SDK necesitas tener instalado además de Flutter para desarrollar apps Android?",
    opciones: ["Node.js", "Android SDK", "Python SDK", "Java JDK solamente"],
    correcta: 1,
    explicacion: "Para desarrollo Android necesitas Android SDK, que normalmente se instala con Android Studio.",
    categoria: "Instalación"
  },
  {
    id: 3,
    pregunta: "¿Cuál es la variable de entorno que debe configurarse para que Flutter funcione globalmente?",
    opciones: ["FLUTTER_HOME", "PATH", "FLUTTER_SDK", "DART_HOME"],
    correcta: 1,
    explicacion: "Debes agregar la carpeta bin de Flutter al PATH del sistema para ejecutar comandos desde cualquier ubicación.",
    categoria: "Instalación"
  },
  {
    id: 4,
    pregunta: "¿Qué IDE es oficialmente recomendado para desarrollo Flutter?",
    opciones: ["Eclipse", "NetBeans", "Android Studio o VS Code", "Sublime Text"],
    correcta: 2,
    explicacion: "Google recomienda Android Studio o VS Code con las extensiones de Flutter y Dart.",
    categoria: "Instalación"
  },
  {
    id: 5,
    pregunta: "¿Qué extensión necesitas instalar en VS Code para desarrollar con Flutter?",
    opciones: ["Dart Extension", "Flutter Extension", "Ambas: Dart y Flutter", "Mobile Development Pack"],
    correcta: 2,
    explicacion: "Necesitas ambas extensiones: Flutter (que incluye herramientas) y Dart (para soporte del lenguaje).",
    categoria: "Instalación"
  },

  // Comandos Flutter CLI (5)
  {
    id: 6,
    pregunta: "¿Qué comando crea un nuevo proyecto Flutter?",
    opciones: ["flutter init proyecto", "flutter new proyecto", "flutter create proyecto", "flutter start proyecto"],
    correcta: 2,
    explicacion: "'flutter create nombre_proyecto' genera la estructura completa de un nuevo proyecto Flutter.",
    categoria: "Comandos CLI"
  },
  {
    id: 7,
    pregunta: "¿Cuál es la diferencia entre Hot Reload y Hot Restart?",
    opciones: [
      "No hay diferencia",
      "Hot Reload mantiene el estado, Hot Restart lo reinicia",
      "Hot Restart es más rápido",
      "Hot Reload solo funciona en iOS"
    ],
    correcta: 1,
    explicacion: "Hot Reload (r) actualiza la UI manteniendo el estado de la app. Hot Restart (R) reinicia completamente la app.",
    categoria: "Comandos CLI"
  },
  {
    id: 8,
    pregunta: "¿Qué comando ejecuta la aplicación en modo debug?",
    opciones: ["flutter start", "flutter debug", "flutter run", "flutter execute"],
    correcta: 2,
    explicacion: "'flutter run' compila y ejecuta la aplicación en el dispositivo/emulador conectado.",
    categoria: "Comandos CLI"
  },
  {
    id: 9,
    pregunta: "¿Qué comando descarga las dependencias definidas en pubspec.yaml?",
    opciones: ["flutter install", "flutter get", "flutter pub get", "flutter dependencies"],
    correcta: 2,
    explicacion: "'flutter pub get' descarga e instala todos los paquetes listados en pubspec.yaml.",
    categoria: "Comandos CLI"
  },
  {
    id: 10,
    pregunta: "¿Qué comando limpia los archivos de build del proyecto?",
    opciones: ["flutter delete", "flutter clean", "flutter clear", "flutter reset"],
    correcta: 1,
    explicacion: "'flutter clean' elimina la carpeta build y otros archivos generados, útil para resolver problemas de compilación.",
    categoria: "Comandos CLI"
  },

  // Git y control de versiones (5)
  {
    id: 11,
    pregunta: "¿Qué comando de Git crea un nuevo repositorio local?",
    opciones: ["git create", "git new", "git init", "git start"],
    correcta: 2,
    explicacion: "'git init' inicializa un nuevo repositorio Git en el directorio actual.",
    categoria: "Git"
  },
  {
    id: 12,
    pregunta: "¿Qué comando sube los cambios al repositorio remoto?",
    opciones: ["git upload", "git send", "git push", "git commit"],
    correcta: 2,
    explicacion: "'git push' envía los commits locales al repositorio remoto (como GitHub).",
    categoria: "Git"
  },
  {
    id: 13,
    pregunta: "¿Cuál es el orden correcto para subir cambios a GitHub?",
    opciones: [
      "commit → add → push",
      "push → add → commit",
      "add → commit → push",
      "add → push → commit"
    ],
    correcta: 2,
    explicacion: "Primero 'add' (preparar archivos), luego 'commit' (guardar cambios localmente), finalmente 'push' (subir al remoto).",
    categoria: "Git"
  },
  {
    id: 14,
    pregunta: "¿Qué archivo se usa para ignorar archivos en Git?",
    opciones: [".gitconfig", ".gitexclude", ".gitignore", ".gitskip"],
    correcta: 2,
    explicacion: "El archivo .gitignore lista los patrones de archivos y carpetas que Git debe ignorar.",
    categoria: "Git"
  },
  {
    id: 15,
    pregunta: "¿Qué comando descarga los cambios del repositorio remoto?",
    opciones: ["git download", "git fetch", "git pull", "git sync"],
    correcta: 2,
    explicacion: "'git pull' descarga y fusiona los cambios del remoto. 'git fetch' solo descarga sin fusionar.",
    categoria: "Git"
  },

  // Despliegue y build (5)
  {
    id: 16,
    pregunta: "¿Qué comando genera un APK para Android?",
    opciones: ["flutter build android", "flutter build apk", "flutter compile apk", "flutter export apk"],
    correcta: 1,
    explicacion: "'flutter build apk' genera un archivo APK listo para instalar en dispositivos Android.",
    categoria: "Build"
  },
  {
    id: 17,
    pregunta: "¿Dónde se encuentra el APK generado después del build?",
    opciones: ["./apk/", "./build/app/outputs/flutter-apk/", "./output/android/", "./dist/apk/"],
    correcta: 1,
    explicacion: "El APK se genera en build/app/outputs/flutter-apk/app-release.apk.",
    categoria: "Build"
  },
  {
    id: 18,
    pregunta: "¿Qué flag se usa para generar un build de release optimizado?",
    opciones: ["--production", "--release", "--optimize", "--final"],
    correcta: 1,
    explicacion: "El flag --release genera una versión optimizada sin herramientas de debug.",
    categoria: "Build"
  },
  {
    id: 19,
    pregunta: "¿Qué comando genera un App Bundle para Google Play Store?",
    opciones: ["flutter build bundle", "flutter build appbundle", "flutter build aab", "flutter build playstore"],
    correcta: 1,
    explicacion: "'flutter build appbundle' genera un .aab optimizado para distribución en Play Store.",
    categoria: "Build"
  },
  {
    id: 20,
    pregunta: "¿Qué archivo contiene la configuración del proyecto Flutter como nombre y dependencias?",
    opciones: ["config.yaml", "flutter.json", "pubspec.yaml", "project.xml"],
    correcta: 2,
    explicacion: "pubspec.yaml es el archivo principal de configuración que define nombre, versión, dependencias y assets.",
    categoria: "Build"
  }
];
