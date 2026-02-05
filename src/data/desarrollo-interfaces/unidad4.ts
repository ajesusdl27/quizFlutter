import type { Pregunta } from '../types';

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
  },

  // Hot Reload vs Hot Restart profundizado (5 preguntas nuevas)
  {
    id: 21,
    pregunta: "¿En qué situaciones Hot Reload NO funcionará correctamente?",
    opciones: [
      "Siempre funciona",
      "Cambios en main(), enum, variables globales, estructura de clases",
      "Solo en cambios de UI",
      "Cuando hay errores de sintaxis"
    ],
    correcta: 1,
    explicacion: "Hot Reload tiene limitaciones: no detecta cambios en main(), enums, variables globales o cambios estructurales de clase.",
    categoria: "Comandos CLI"
  },
  {
    id: 22,
    pregunta: "¿Cuál es la tecla para activar Hot Reload desde la terminal?",
    opciones: ["h", "r", "l", "s"],
    correcta: 1,
    explicacion: "Presionar 'r' en la terminal con flutter run activo ejecuta Hot Reload.",
    categoria: "Comandos CLI"
  },
  {
    id: 23,
    pregunta: "¿Cuál es la tecla para activar Hot Restart desde la terminal?",
    opciones: ["R (mayúscula)", "Ctrl+R", "r+r", "restart"],
    correcta: 0,
    explicacion: "Presionar 'R' (mayúscula) ejecuta Hot Restart, reiniciando completamente el estado de la app.",
    categoria: "Comandos CLI"
  },
  {
    id: 24,
    pregunta: "¿Qué ventaja tiene Hot Reload sobre recompilar completamente?",
    opciones: [
      "Es más seguro",
      "Es mucho más rápido (segundos vs minutos) y mantiene el estado de la app",
      "Funciona en más dispositivos",
      "Usa menos memoria"
    ],
    correcta: 1,
    explicacion: "Hot Reload toma segundos y mantiene el estado actual, evitando navegar de nuevo a la pantalla en prueba.",
    categoria: "Comandos CLI"
  },
  {
    id: 25,
    pregunta: "¿Qué se debe hacer si Hot Reload no refleja los cambios?",
    opciones: [
      "Reiniciar la computadora",
      "Hacer Hot Restart (R) o detener y ejecutar flutter run de nuevo",
      "Cambiar de IDE",
      "Reinstalar Flutter"
    ],
    correcta: 1,
    explicacion: "Si Hot Reload no funciona, usar Hot Restart (R) o full restart resuelve la mayoría de problemas.",
    categoria: "Comandos CLI"
  },

  // Git avanzado - branching y merge (8 preguntas nuevas)
  {
    id: 26,
    pregunta: "¿Qué es una rama (branch) en Git?",
    opciones: [
      "Una carpeta del proyecto",
      "Una línea de desarrollo independiente del código",
      "Un tipo de commit",
      "Una versión del proyecto"
    ],
    correcta: 1,
    explicacion: "Una rama permite trabajar en features o fixes sin afectar la rama principal (main/master).",
    categoria: "Git"
  },
  {
    id: 27,
    pregunta: "¿Qué comando crea una nueva rama?",
    opciones: ["git new-branch nombre", "git branch nombre", "git create nombre", "git add-branch nombre"],
    correcta: 1,
    explicacion: "'git branch nombre' crea una nueva rama. 'git checkout -b nombre' crea y cambia a ella.",
    categoria: "Git"
  },
  {
    id: 28,
    pregunta: "¿Qué comando cambia a otra rama existente?",
    opciones: ["git switch nombre", "git checkout nombre", "git change nombre", "Ambas A y B"],
    correcta: 3,
    explicacion: "Tanto 'git checkout nombre' como 'git switch nombre' (más nuevo) cambian de rama.",
    categoria: "Git"
  },
  {
    id: 29,
    pregunta: "¿Qué comando fusiona una rama con la rama actual?",
    opciones: ["git combine rama", "git merge rama", "git join rama", "git fuse rama"],
    correcta: 1,
    explicacion: "'git merge rama' fusiona los cambios de la rama especificada en la rama actual.",
    categoria: "Git"
  },
  {
    id: 30,
    pregunta: "¿Qué es un conflicto de merge en Git?",
    opciones: [
      "Un error de Git",
      "Cuando dos ramas modificaron las mismas líneas de código de forma diferente",
      "Un problema de red",
      "Un error de sintaxis"
    ],
    correcta: 1,
    explicacion: "Conflictos ocurren cuando Git no puede fusionar automáticamente cambios porque afectan las mismas líneas.",
    categoria: "Git"
  },
  {
    id: 31,
    pregunta: "¿Cómo se resuelve un conflicto de merge?",
    opciones: [
      "git fix",
      "Editar manualmente los archivos conflictivos, luego git add y git commit",
      "git resolve",
      "Eliminar una rama"
    ],
    correcta: 1,
    explicacion: "Se editan los archivos (Git marca conflictos con <<<<< ===== >>>>>), se añaden con add y se confirman con commit.",
    categoria: "Git"
  },
  {
    id: 32,
    pregunta: "¿Qué comando muestra todas las ramas locales?",
    opciones: ["git list", "git branch", "git show-branches", "git branches"],
    correcta: 1,
    explicacion: "'git branch' lista todas las ramas locales, marcando con * la rama actual.",
    categoria: "Git"
  },
  {
    id: 33,
    pregunta: "¿Qué comando elimina una rama local?",
    opciones: ["git delete rama", "git branch -d rama", "git remove rama", "git drop rama"],
    correcta: 1,
    explicacion: "'git branch -d rama' elimina una rama fusionada. '-D' fuerza eliminación de rama no fusionada.",
    categoria: "Git"
  },

  // .gitignore y configuración (5 preguntas nuevas)
  {
    id: 34,
    pregunta: "¿Qué carpetas de Flutter se deben incluir en .gitignore?",
    opciones: [
      "lib/ y test/",
      "build/, .dart_tool/, *.iml",
      "android/ e ios/",
      "Todas las carpetas"
    ],
    correcta: 1,
    explicacion: "Se ignoran build/, .dart_tool/, archivos .iml y otros generados. lib/ y test/ SÍ se incluyen en Git.",
    categoria: "Git"
  },
  {
    id: 35,
    pregunta: "¿Por qué se ignora la carpeta build/ en Git?",
    opciones: [
      "Porque no es importante",
      "Porque contiene archivos generados que se pueden reconstruir con flutter build",
      "Por seguridad",
      "Para ahorrar espacio"
    ],
    correcta: 1,
    explicacion: "build/ contiene archivos compilados que se regeneran automáticamente, no son código fuente.",
    categoria: "Git"
  },
  {
    id: 36,
    pregunta: "¿Qué hace la línea '*.log' en .gitignore?",
    opciones: [
      "Ignora el archivo log",
      "Ignora todos los archivos que terminan en .log",
      "Crea logs",
      "Activa logging"
    ],
    correcta: 1,
    explicacion: "El asterisco * es un wildcard que coincide con cualquier nombre, ignorando todos los .log.",
    categoria: "Git"
  },
  {
    id: 37,
    pregunta: "¿Cómo se añade un comentario en .gitignore?",
    opciones: ["// comentario", "/* comentario */", "# comentario", "<!-- comentario -->"],
    correcta: 2,
    explicacion: "Las líneas que comienzan con # son comentarios en .gitignore.",
    categoria: "Git"
  },
  {
    id: 38,
    pregunta: "¿Qué comando muestra qué archivos están siendo ignorados?",
    opciones: ["git ignored", "git status --ignored", "git show-ignore", "git list-ignored"],
    correcta: 1,
    explicacion: "'git status --ignored' muestra archivos que coinciden con patrones de .gitignore.",
    categoria: "Git"
  },

  // pubspec.yaml avanzado (7 preguntas nuevas)
  {
    id: 39,
    pregunta: "¿Qué sección de pubspec.yaml define las dependencias del proyecto?",
    opciones: ["packages:", "dependencies:", "imports:", "libraries:"],
    correcta: 1,
    explicacion: "dependencies: lista paquetes de pub.dev que el proyecto usa en runtime.",
    categoria: "Build"
  },
  {
    id: 40,
    pregunta: "¿Cuál es la diferencia entre dependencies y dev_dependencies?",
    opciones: [
      "No hay diferencia",
      "dependencies son para producción, dev_dependencies solo para desarrollo (tests, linters)",
      "dev_dependencies son opcionales",
      "dependencies son más rápidas"
    ],
    correcta: 1,
    explicacion: "dev_dependencies incluye herramientas de desarrollo que no se incluyen en el build final.",
    categoria: "Build"
  },
  {
    id: 41,
    pregunta: "¿Cómo se especifica una versión exacta de un paquete en pubspec.yaml?",
    opciones: ["paquete: 1.0.0", "paquete: =1.0.0", "paquete: '1.0.0'", "paquete: ^1.0.0"],
    correcta: 0,
    explicacion: "paquete: 1.0.0 (sin ^) fija la versión exacta. ^1.0.0 permite actualizaciones compatibles.",
    categoria: "Build"
  },
  {
    id: 42,
    pregunta: "¿Qué significa el símbolo ^ en versiones de paquetes (^1.2.3)?",
    opciones: [
      "Versión exacta",
      "Permite actualizaciones compatibles (ej: 1.2.4, 1.3.0 pero no 2.0.0)",
      "Versión beta",
      "Versión experimental"
    ],
    correcta: 1,
    explicacion: "^ permite actualizaciones menores y patches que no rompen compatibilidad según semantic versioning.",
    categoria: "Build"
  },
  {
    id: 43,
    pregunta: "¿Dónde se declaran los assets (imágenes, fonts) en pubspec.yaml?",
    opciones: ["resources:", "assets:", "flutter: assets:", "files:"],
    correcta: 2,
    explicacion: "Dentro de la sección flutter:, se define assets: con la lista de rutas a archivos o carpetas.",
    categoria: "Build"
  },
  {
    id: 44,
    pregunta: "¿Qué comando actualiza los paquetes a sus versiones más recientes compatibles?",
    opciones: ["flutter update", "flutter pub upgrade", "flutter upgrade packages", "flutter pub update"],
    correcta: 1,
    explicacion: "'flutter pub upgrade' actualiza paquetes respetando las restricciones de versión en pubspec.yaml.",
    categoria: "Build"
  },
  {
    id: 45,
    pregunta: "¿Qué archivo genera Flutter para bloquear versiones exactas de dependencias?",
    opciones: ["pubspec.lock", "packages.lock", "dependencies.lock", "versions.lock"],
    correcta: 0,
    explicacion: "pubspec.lock registra las versiones exactas instaladas, asegurando builds reproducibles.",
    categoria: "Build"
  },

  // Flutter upgrade y channels (5 preguntas nuevas)
  {
    id: 46,
    pregunta: "¿Qué comando actualiza Flutter a la última versión?",
    opciones: ["flutter update", "flutter upgrade", "flutter refresh", "flutter install-latest"],
    correcta: 1,
    explicacion: "'flutter upgrade' descarga y actualiza Flutter y sus herramientas a la última versión del canal actual.",
    categoria: "Instalación"
  },
  {
    id: 47,
    pregunta: "¿Qué canales (channels) de Flutter existen?",
    opciones: [
      "main, dev, prod",
      "stable, beta, dev, master",
      "release, preview, nightly",
      "prod, test, dev"
    ],
    correcta: 1,
    explicacion: "Canales: stable (estable), beta (pre-release), dev (desarrollo) y master (última versión).",
    categoria: "Instalación"
  },
  {
    id: 48,
    pregunta: "¿Qué comando cambia al canal estable de Flutter?",
    opciones: ["flutter switch stable", "flutter channel stable", "flutter set-channel stable", "flutter use stable"],
    correcta: 1,
    explicacion: "'flutter channel stable' cambia al canal estable. Luego se debe ejecutar 'flutter upgrade'.",
    categoria: "Instalación"
  },
  {
    id: 49,
    pregunta: "¿Cuál es el canal recomendado para producción?",
    opciones: ["dev", "master", "beta", "stable"],
    correcta: 3,
    explicacion: "El canal stable es el más estable y recomendado para apps en producción.",
    categoria: "Instalación"
  },
  {
    id: 50,
    pregunta: "¿Qué comando muestra la versión actual de Flutter?",
    opciones: ["flutter info", "flutter version", "flutter --version", "flutter ver"],
    correcta: 2,
    explicacion: "'flutter --version' muestra la versión de Flutter, Dart, canal y commit actual.",
    categoria: "Instalación"
  },

  // DevTools y debugging (5 preguntas nuevas)
  {
    id: 51,
    pregunta: "¿Qué son las Flutter DevTools?",
    opciones: [
      "Herramientas de desarrollo",
      "Suite de herramientas para debugging, profiling e inspección de UI",
      "Un IDE alternativo",
      "Herramientas de testing"
    ],
    correcta: 1,
    explicacion: "DevTools incluye inspector de widgets, profiler de rendimiento, debugger, network inspector y más.",
    categoria: "Comandos CLI"
  },
  {
    id: 52,
    pregunta: "¿Cómo se activan las Flutter DevTools?",
    opciones: [
      "flutter devtools",
      "Desde la URL que aparece al ejecutar flutter run",
      "flutter debug --tools",
      "flutter tools"
    ],
    correcta: 1,
    explicacion: "Al ejecutar flutter run, se muestra una URL para abrir DevTools en el navegador.",
    categoria: "Comandos CLI"
  },
  {
    id: 53,
    pregunta: "¿Qué tecla activa el performance overlay desde la terminal?",
    opciones: ["p", "o", "v", "f"],
    correcta: 0,
    explicacion: "Presionar 'p' muestra el performance overlay con gráficos de FPS y rendimiento.",
    categoria: "Comandos CLI"
  },
  {
    id: 54,
    pregunta: "¿Qué tecla activa el widget inspector overlay desde la terminal?",
    opciones: ["w", "i", "d", "x"],
    correcta: 0,
    explicacion: "Presionar 'w' activa el widget inspector overlay que muestra estructura y límites de widgets.",
    categoria: "Comandos CLI"
  },
  {
    id: 55,
    pregunta: "¿Qué comando lista todos los dispositivos/emuladores disponibles?",
    opciones: ["flutter list", "flutter devices", "flutter emulators", "flutter targets"],
    correcta: 1,
    explicacion: "'flutter devices' muestra todos los dispositivos físicos y emuladores conectados o en ejecución.",
    categoria: "Comandos CLI"
  },

  // Configuraciones Android/iOS (5 preguntas nuevas)
  {
    id: 56,
    pregunta: "¿En qué archivo se configura el nombre del paquete Android en Flutter?",
    opciones: [
      "pubspec.yaml",
      "android/app/build.gradle",
      "android/settings.gradle",
      "android/app/AndroidManifest.xml"
    ],
    correcta: 1,
    explicacion: "El applicationId en android/app/build.gradle define el package name único de la app Android.",
    categoria: "Build"
  },
  {
    id: 57,
    pregunta: "¿Dónde se cambia el ícono de la app en Android?",
    opciones: [
      "assets/icon.png",
      "android/app/src/main/res/mipmap-*/",
      "icons/",
      "pubspec.yaml"
    ],
    correcta: 1,
    explicacion: "Los íconos están en android/app/src/main/res/ en carpetas mipmap de diferentes densidades (hdpi, xhdpi, etc).",
    categoria: "Build"
  },
  {
    id: 58,
    pregunta: "¿Qué archivo configura los permisos en Android?",
    opciones: [
      "permissions.xml",
      "AndroidManifest.xml",
      "build.gradle",
      "pubspec.yaml"
    ],
    correcta: 1,
    explicacion: "AndroidManifest.xml declara permisos necesarios con <uses-permission android:name='...' />",
    categoria: "Build"
  },
  {
    id: 59,
    pregunta: "¿Cómo se cambia el nombre visible de la app en Android?",
    opciones: [
      "En pubspec.yaml",
      "En android/app/src/main/AndroidManifest.xml (android:label)",
      "En build.gradle",
      "En main.dart"
    ],
    correcta: 1,
    explicacion: "El atributo android:label en AndroidManifest.xml define el nombre que aparece en el launcher.",
    categoria: "Build"
  },
  {
    id: 60,
    pregunta: "¿Qué comando abre el proyecto Android en Android Studio?",
    opciones: [
      "flutter open android",
      "Abrir la carpeta android/ directamente en Android Studio",
      "flutter android-studio",
      "flutter edit android"
    ],
    correcta: 1,
    explicacion: "Se abre Android Studio y se selecciona la carpeta android/ del proyecto Flutter como proyecto.",
    categoria: "Build"
  }
];
