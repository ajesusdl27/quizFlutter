import type { Pregunta } from './types';

export const preguntasUnidad7: Pregunta[] = [
  // Navegación y routing (10)
  {
    id: 1,
    pregunta: "¿Qué clase maneja la navegación entre pantallas en Flutter?",
    opciones: ["Router", "Navigator", "Navigation", "PageController"],
    correcta: 1,
    explicacion: "Navigator es el widget que maneja una pila de Route objects para la navegación entre pantallas.",
    categoria: "Navegación"
  },
  {
    id: 2,
    pregunta: "¿Qué método se usa para navegar a una nueva pantalla?",
    opciones: [
      "Navigator.go(context, ruta)",
      "Navigator.push(context, route)",
      "Navigator.navigate(context, screen)",
      "Navigator.open(context, page)"
    ],
    correcta: 1,
    explicacion: "Navigator.push() agrega una nueva ruta a la pila de navegación.",
    categoria: "Navegación"
  },
  {
    id: 3,
    pregunta: "¿Cómo se vuelve a la pantalla anterior?",
    opciones: [
      "Navigator.back(context)",
      "Navigator.pop(context)",
      "Navigator.return(context)",
      "Navigator.previous(context)"
    ],
    correcta: 1,
    explicacion: "Navigator.pop(context) elimina la ruta actual de la pila, volviendo a la anterior.",
    categoria: "Navegación"
  },
  {
    id: 4,
    pregunta: "¿Qué es una ruta nombrada (named route)?",
    opciones: [
      "Una ruta con un nombre de archivo",
      "Una ruta identificada por un string como '/home' o '/perfil'",
      "Una ruta sin parámetros",
      "Una ruta solo para iOS"
    ],
    correcta: 1,
    explicacion: "Las named routes usan strings como identificadores, definidas en MaterialApp routes: {'/home': (ctx) => Home()}",
    categoria: "Navegación"
  },
  {
    id: 5,
    pregunta: "¿Cómo se navega usando rutas nombradas?",
    opciones: [
      "Navigator.goNamed(context, '/home')",
      "Navigator.pushNamed(context, '/home')",
      "Navigator.route(context, '/home')",
      "Navigator.named(context, '/home')"
    ],
    correcta: 1,
    explicacion: "Navigator.pushNamed() navega usando el nombre de ruta definido en MaterialApp.",
    categoria: "Navegación"
  },
  {
    id: 6,
    pregunta: "¿Cómo se pasan argumentos a una ruta nombrada?",
    opciones: [
      "Navigator.pushNamed(context, '/detalle', arguments: datos)",
      "Navigator.pushNamed(context, '/detalle?data=datos')",
      "Navigator.pushNamed(context, '/detalle').withArgs(datos)",
      "No se pueden pasar argumentos"
    ],
    correcta: 0,
    explicacion: "El parámetro arguments permite pasar cualquier objeto a la siguiente pantalla.",
    categoria: "Navegación"
  },
  {
    id: 7,
    pregunta: "¿Cómo se obtienen los argumentos en la pantalla de destino?",
    opciones: [
      "widget.arguments",
      "ModalRoute.of(context)!.settings.arguments",
      "Navigator.arguments(context)",
      "context.arguments"
    ],
    correcta: 1,
    explicacion: "ModalRoute.of(context)!.settings.arguments recupera los argumentos pasados a la ruta.",
    categoria: "Navegación"
  },
  {
    id: 8,
    pregunta: "¿Qué método reemplaza la pantalla actual en lugar de apilarla?",
    opciones: [
      "Navigator.replace()",
      "Navigator.pushReplacement()",
      "Navigator.swap()",
      "Navigator.change()"
    ],
    correcta: 1,
    explicacion: "pushReplacement() navega a nueva pantalla eliminando la actual, útil para login -> home.",
    categoria: "Navegación"
  },
  {
    id: 9,
    pregunta: "¿Qué método elimina todas las rutas y navega a una nueva?",
    opciones: [
      "Navigator.pushAndClear()",
      "Navigator.pushAndRemoveUntil()",
      "Navigator.clearAndPush()",
      "Navigator.resetTo()"
    ],
    correcta: 1,
    explicacion: "pushAndRemoveUntil() navega a una ruta eliminando las anteriores según una condición.",
    categoria: "Navegación"
  },
  {
    id: 10,
    pregunta: "¿Qué widget permite crear navegación con pestañas inferiores?",
    opciones: [
      "TabNavigator",
      "BottomNavigationBar",
      "TabBar",
      "NavigationTabs"
    ],
    correcta: 1,
    explicacion: "BottomNavigationBar crea una barra de navegación inferior típica de apps móviles.",
    categoria: "Navegación"
  },

  // Gestión de estado (10)
  {
    id: 11,
    pregunta: "¿Qué problema resuelve la gestión de estado?",
    opciones: [
      "Hacer la app más rápida",
      "Compartir y sincronizar datos entre widgets que no son padre-hijo directo",
      "Reducir el tamaño de la app",
      "Mejorar los gráficos"
    ],
    correcta: 1,
    explicacion: "La gestión de estado permite que widgets distantes compartan datos sin pasar props por toda la jerarquía.",
    categoria: "Estado"
  },
  {
    id: 12,
    pregunta: "¿Cuál es la forma más básica de manejar estado en Flutter?",
    opciones: [
      "Variables globales",
      "setState() en StatefulWidget",
      "Archivos JSON",
      "SharedPreferences"
    ],
    correcta: 1,
    explicacion: "setState() es la forma nativa de Flutter para manejar estado local en un StatefulWidget.",
    categoria: "Estado"
  },
  {
    id: 13,
    pregunta: "¿Cuándo es apropiado usar solo setState()?",
    opciones: [
      "Siempre",
      "Para estado local de un widget que no necesita compartirse",
      "Nunca, siempre usar Provider",
      "Solo en apps pequeñas"
    ],
    correcta: 1,
    explicacion: "setState() es perfecto para estado local como un contador o toggle que no afecta otros widgets.",
    categoria: "Estado"
  },
  {
    id: 14,
    pregunta: "¿Qué es 'lifting state up' (elevar el estado)?",
    opciones: [
      "Usar animaciones para el estado",
      "Mover el estado al ancestro común más cercano de los widgets que lo necesitan",
      "Guardar estado en la nube",
      "Usar variables const"
    ],
    correcta: 1,
    explicacion: "Lifting state up mueve el estado al widget padre común para compartirlo entre hijos.",
    categoria: "Estado"
  },
  {
    id: 15,
    pregunta: "¿Qué widget de Flutter permite pasar datos hacia abajo sin prop drilling?",
    opciones: [
      "DataWidget",
      "InheritedWidget",
      "StateWidget",
      "ContextWidget"
    ],
    correcta: 1,
    explicacion: "InheritedWidget permite que descendientes accedan a datos sin pasarlos explícitamente por cada nivel.",
    categoria: "Estado"
  },
  {
    id: 16,
    pregunta: "¿Qué paquete es una solución popular y sencilla para gestión de estado?",
    opciones: ["state_manager", "flutter_state", "provider", "easy_state"],
    correcta: 2,
    explicacion: "Provider es el paquete recomendado por Flutter para gestión de estado de complejidad media.",
    categoria: "Estado"
  },
  {
    id: 17,
    pregunta: "¿Cómo se accede a un valor de Provider en un widget?",
    opciones: [
      "Provider.get(context)",
      "context.read<T>() o context.watch<T>()",
      "Provider.of<T>(context)",
      "Ambas B y C son correctas"
    ],
    correcta: 3,
    explicacion: "Se puede usar Provider.of<T>(context), context.read<T>() para una lectura, o context.watch<T>() para escuchar cambios.",
    categoria: "Estado"
  },
  {
    id: 18,
    pregunta: "¿Cuál es la diferencia entre context.read() y context.watch()?",
    opciones: [
      "No hay diferencia",
      "read() lee una vez sin escuchar cambios, watch() escucha y reconstruye",
      "watch() es más rápido",
      "read() solo funciona en initState"
    ],
    correcta: 1,
    explicacion: "read<T>() obtiene el valor sin suscribirse. watch<T>() se suscribe y reconstruye el widget cuando cambia.",
    categoria: "Estado"
  },
  {
    id: 19,
    pregunta: "¿Qué clase de Provider notifica a los listeners cuando cambia el estado?",
    opciones: ["StateNotifier", "ChangeNotifier", "ValueNotifier", "UpdateNotifier"],
    correcta: 1,
    explicacion: "ChangeNotifier tiene notifyListeners() que avisa a los widgets suscritos para reconstruirse.",
    categoria: "Estado"
  },
  {
    id: 20,
    pregunta: "¿Qué es el patrón BLoC?",
    opciones: [
      "Un tipo de widget",
      "Business Logic Component: separa lógica de UI usando Streams",
      "Un sistema de archivos",
      "Una base de datos"
    ],
    correcta: 1,
    explicacion: "BLoC usa Streams para separar la lógica de negocio de la UI, recibiendo eventos y emitiendo estados.",
    categoria: "Estado"
  },

  // Responsive design y MediaQuery (10)
  {
    id: 21,
    pregunta: "¿Qué clase proporciona información sobre el tamaño de la pantalla?",
    opciones: ["ScreenSize", "MediaQuery", "DeviceInfo", "DisplayMetrics"],
    correcta: 1,
    explicacion: "MediaQuery.of(context) proporciona información sobre tamaño, orientación, padding del dispositivo.",
    categoria: "Responsive"
  },
  {
    id: 22,
    pregunta: "¿Cómo se obtiene el ancho de la pantalla?",
    opciones: [
      "Screen.width",
      "MediaQuery.of(context).size.width",
      "context.screenWidth",
      "Device.width"
    ],
    correcta: 1,
    explicacion: "MediaQuery.of(context).size.width retorna el ancho de la pantalla en píxeles lógicos.",
    categoria: "Responsive"
  },
  {
    id: 23,
    pregunta: "¿Qué widget construye diferente UI según las restricciones de espacio?",
    opciones: ["ResponsiveWidget", "LayoutBuilder", "SizeBuilder", "ConstraintWidget"],
    correcta: 1,
    explicacion: "LayoutBuilder provee las constraints del padre, permitiendo construir UI adaptativa.",
    categoria: "Responsive"
  },
  {
    id: 24,
    pregunta: "¿Cómo se detecta si el dispositivo está en orientación horizontal?",
    opciones: [
      "MediaQuery.of(context).isLandscape",
      "MediaQuery.of(context).orientation == Orientation.landscape",
      "Device.orientation == 'landscape'",
      "context.isLandscape"
    ],
    correcta: 1,
    explicacion: "MediaQuery proporciona orientation que puede ser Orientation.portrait o Orientation.landscape.",
    categoria: "Responsive"
  },
  {
    id: 25,
    pregunta: "¿Qué es un breakpoint en diseño responsive?",
    opciones: [
      "Un error en el código",
      "Un punto de quiebre donde cambia el layout según el tamaño de pantalla",
      "Un punto de depuración",
      "El final de una animación"
    ],
    correcta: 1,
    explicacion: "Los breakpoints definen anchos donde la UI cambia: móvil (<600), tablet (600-1200), desktop (>1200).",
    categoria: "Responsive"
  },
  {
    id: 26,
    pregunta: "¿Qué widget ajusta su hijo para evitar el notch y áreas del sistema?",
    opciones: ["NotchAware", "SafeArea", "SystemPadding", "ScreenSafe"],
    correcta: 1,
    explicacion: "SafeArea agrega padding para evitar el notch, barra de estado y barra de navegación del sistema.",
    categoria: "Responsive"
  },
  {
    id: 27,
    pregunta: "¿Qué propiedad de MediaQuery indica el padding del sistema (notch, etc.)?",
    opciones: ["systemPadding", "padding", "viewPadding", "safePadding"],
    correcta: 1,
    explicacion: "MediaQuery.of(context).padding contiene el padding necesario para áreas del sistema.",
    categoria: "Responsive"
  },
  {
    id: 28,
    pregunta: "¿Cómo se crea un grid responsive que ajusta columnas según el ancho?",
    opciones: [
      "ResponsiveGrid",
      "GridView con crossAxisCount calculado según ancho",
      "AutoGrid",
      "FlexGrid"
    ],
    correcta: 1,
    explicacion: "Se calcula crossAxisCount dividiendo el ancho disponible entre el ancho deseado de cada item.",
    categoria: "Responsive"
  },
  {
    id: 29,
    pregunta: "¿Qué widget permite crear layouts flexibles como Flexbox en CSS?",
    opciones: ["FlexBox", "Flex", "Flexible dentro de Row/Column", "FlexLayout"],
    correcta: 2,
    explicacion: "Flexible y Expanded dentro de Row/Column permiten layouts flexibles similares a Flexbox.",
    categoria: "Responsive"
  },
  {
    id: 30,
    pregunta: "¿Qué parámetro de FractionallySizedBox define el ancho como porcentaje del padre?",
    opciones: ["percentWidth", "widthFactor", "widthPercent", "relativeWidth"],
    correcta: 1,
    explicacion: "widthFactor: 0.5 hace que el widget ocupe 50% del ancho del padre.",
    categoria: "Responsive"
  }
];
