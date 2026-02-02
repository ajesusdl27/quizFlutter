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
  },

  // Navegación avanzada y go_router (10 preguntas nuevas)
  {
    id: 31,
    pregunta: "¿Qué es deep linking en Flutter?",
    opciones: [
      "Enlaces profundos en la base de datos",
      "Navegación hacia una pantalla específica desde URL externa",
      "Enlaces entre widgets",
      "Conexiones de red profundas"
    ],
    correcta: 1,
    explicacion: "Deep linking permite abrir una pantalla específica de la app desde una URL externa o notificación.",
    categoria: "Navegación"
  },
  {
    id: 32,
    pregunta: "¿Qué widget permite navegación por pestañas superiores?",
    opciones: ["BottomNavigationBar", "TabBar con TabBarView", "TopNavigation", "HeaderTabs"],
    correcta: 1,
    explicacion: "TabBar muestra pestañas en la parte superior y TabBarView muestra el contenido correspondiente.",
    categoria: "Navegación"
  },
  {
    id: 33,
    pregunta: "¿Qué widget muestra un menú lateral deslizable?",
    opciones: ["SideMenu", "Drawer", "SlideMenu", "NavPanel"],
    correcta: 1,
    explicacion: "Drawer se define en Scaffold y crea un menú lateral que se desliza desde el borde.",
    categoria: "Navegación"
  },
  {
    id: 34,
    pregunta: "¿Cómo se abre el Drawer programáticamente?",
    opciones: [
      "Scaffold.openDrawer()",
      "Scaffold.of(context).openDrawer()",
      "Navigator.openDrawer()",
      "context.openDrawer()"
    ],
    correcta: 1,
    explicacion: "Scaffold.of(context).openDrawer() abre el drawer desde código sin interacción del usuario.",
    categoria: "Navegación"
  },
  {
    id: 35,
    pregunta: "¿Qué controlador maneja las pestañas en TabBar?",
    opciones: ["PageController", "TabController", "TabManager", "TabHandler"],
    correcta: 1,
    explicacion: "TabController sincroniza el TabBar con el TabBarView y maneja el índice de pestaña activa.",
    categoria: "Navegación"
  },
  {
    id: 36,
    pregunta: "¿Qué propiedad de go_router define rutas anidadas?",
    opciones: ["children", "routes", "nested", "subRoutes"],
    correcta: 0,
    explicacion: "La propiedad routes (o children en versiones recientes) de GoRoute define rutas hijas anidadas.",
    categoria: "Navegación"
  },
  {
    id: 37,
    pregunta: "¿Cómo se pasan parámetros en la ruta con go_router?",
    opciones: [
      "Con queryParams",
      "Usando :paramName en el path como '/user/:id'",
      "Con arguments",
      "Solo con state"
    ],
    correcta: 1,
    explicacion: "Los parámetros de ruta se definen con : en el path ('/user/:id') y se acceden con state.params['id'].",
    categoria: "Navegación"
  },
  {
    id: 38,
    pregunta: "¿Qué método de go_router navega de forma imperativa reemplazando?",
    opciones: ["context.go()", "context.push()", "context.replace()", "context.goNamed()"],
    correcta: 0,
    explicacion: "context.go() reemplaza todo el stack de navegación, mientras push() añade sobre el stack existente.",
    categoria: "Navegación"
  },
  {
    id: 39,
    pregunta: "¿Para qué sirve refreshListenable en GoRouter?",
    opciones: [
      "Para refrescar la UI",
      "Para reaccionar a cambios de estado y recalcular redirecciones",
      "Para actualizar rutas dinámicamente",
      "Para limpiar el caché"
    ],
    correcta: 1,
    explicacion: "refreshListenable escucha cambios (ej: estado de autenticación) y reevalúa redirecciones automáticamente.",
    categoria: "Navegación"
  },
  {
    id: 40,
    pregunta: "¿Qué tipo de navegación permite mantener el estado entre cambios de tab?",
    opciones: [
      "Navigator con preserveState",
      "IndexedStack o AutomaticKeepAliveClientMixin",
      "StatefulNavigation",
      "PersistentNavigator"
    ],
    correcta: 1,
    explicacion: "IndexedStack muestra solo un hijo pero mantiene el estado de todos, útil para BottomNavigationBar.",
    categoria: "Navegación"
  },

  // Provider avanzado y patrones (8 preguntas nuevas)
  {
    id: 41,
    pregunta: "¿Qué es MultiProvider en Provider?",
    opciones: [
      "Un provider que soporta múltiples plataformas",
      "Un widget que permite proveer múltiples providers en un solo lugar",
      "Un provider con múltiples valores",
      "Un provider para bases de datos"
    ],
    correcta: 1,
    explicacion: "MultiProvider evita anidar múltiples providers, permitiendo definirlos en una lista limpia.",
    categoria: "Estado"
  },
  {
    id: 42,
    pregunta: "¿Cuándo se debe usar ProxyProvider?",
    opciones: [
      "Para crear proxies de red",
      "Cuando un provider depende del valor de otro provider",
      "Para proveer proxies de datos",
      "Para cachear providers"
    ],
    correcta: 1,
    explicacion: "ProxyProvider crea un provider que depende de otro, útil para inyección de dependencias.",
    categoria: "Estado"
  },
  {
    id: 43,
    pregunta: "¿Qué es ValueListenableProvider?",
    opciones: [
      "Un provider para listas de valores",
      "Un provider que expone un ValueListenable y notifica cambios automáticamente",
      "Un provider que valida datos",
      "Un provider para valores numéricos"
    ],
    correcta: 1,
    explicacion: "ValueListenableProvider convierte un ValueListenable en un provider reactivo.",
    categoria: "Estado"
  },
  {
    id: 44,
    pregunta: "¿Cuál es la diferencia entre Provider y ChangeNotifierProvider?",
    opciones: [
      "No hay diferencia",
      "Provider expone un valor inmutable, ChangeNotifierProvider expone un objeto que notifica cambios",
      "ChangeNotifierProvider es más lento",
      "Provider es deprecated"
    ],
    correcta: 1,
    explicacion: "Provider expone valores que no cambian. ChangeNotifierProvider permite notificar cambios con notifyListeners().",
    categoria: "Estado"
  },
  {
    id: 45,
    pregunta: "¿Para qué sirve FutureProvider?",
    opciones: [
      "Para programar eventos futuros",
      "Para exponer el valor de un Future y reconstruir cuando se completa",
      "Para predicciones de datos",
      "Para caché futuro"
    ],
    correcta: 1,
    explicacion: "FutureProvider expone un Future, mostrando loading inicialmente y el valor cuando se resuelve.",
    categoria: "Estado"
  },
  {
    id: 46,
    pregunta: "¿Qué es StreamProvider en Provider?",
    opciones: [
      "Un provider para streaming de video",
      "Un provider que expone los valores emitidos por un Stream",
      "Un provider para datos en tiempo real",
      "Un provider para audio"
    ],
    correcta: 1,
    explicacion: "StreamProvider escucha un Stream y actualiza el valor cada vez que el stream emite datos.",
    categoria: "Estado"
  },
  {
    id: 47,
    pregunta: "¿Cuándo se llama dispose() en un provider?",
    opciones: [
      "Al iniciar la app",
      "Cuando el provider ya no es necesario y se elimina del árbol",
      "Cada vez que se actualiza",
      "Nunca se llama automáticamente"
    ],
    correcta: 1,
    explicacion: "dispose() se llama automáticamente para liberar recursos cuando el provider se elimina del árbol.",
    categoria: "Estado"
  },
  {
    id: 48,
    pregunta: "¿Qué problema resuelve el patrón Repository en Flutter?",
    opciones: [
      "Organizar carpetas",
      "Separar la lógica de obtención de datos de la UI y permitir múltiples fuentes de datos",
      "Guardar datos en repositorios Git",
      "Crear copias de seguridad"
    ],
    correcta: 1,
    explicacion: "Repository abstrae el origen de datos (API, DB local, caché) permitiendo cambiarlos sin afectar la UI.",
    categoria: "Estado"
  },

  // BLoC y Cubit (7 preguntas nuevas)
  {
    id: 49,
    pregunta: "¿Qué significa BLoC?",
    opciones: [
      "Block of Code",
      "Business Logic Component",
      "Base Logic Controller",
      "Binary Logic Circuit"
    ],
    correcta: 1,
    explicacion: "BLoC (Business Logic Component) separa la lógica de negocio usando Streams: eventos entran, estados salen.",
    categoria: "Estado"
  },
  {
    id: 50,
    pregunta: "¿Cuál es la diferencia principal entre BLoC y Cubit?",
    opciones: [
      "No hay diferencia",
      "BLoC usa eventos (event-driven), Cubit usa métodos directos para emitir estados",
      "Cubit es más complejo",
      "BLoC es deprecated"
    ],
    correcta: 1,
    explicacion: "Cubit simplifica BLoC usando métodos (increment()) en vez de eventos, ideal para casos simples.",
    categoria: "Estado"
  },
  {
    id: 51,
    pregunta: "¿Qué widget se usa para proveer un BLoC?",
    opciones: ["BlocProvider", "ProvideBloc", "BlocWrapper", "BlocScope"],
    correcta: 0,
    explicacion: "BlocProvider crea y proporciona una instancia de BLoC a sus descendientes.",
    categoria: "Estado"
  },
  {
    id: 52,
    pregunta: "¿Qué widget reconstruye la UI cuando cambia el estado del BLoC?",
    opciones: ["BlocWatcher", "BlocBuilder", "BlocConsumer", "Ambas B y C"],
    correcta: 3,
    explicacion: "BlocBuilder escucha estados y reconstruye. BlocConsumer combina builder con listener para side effects.",
    categoria: "Estado"
  },
  {
    id: 53,
    pregunta: "¿Cómo se emite un nuevo estado en Cubit?",
    opciones: [
      "cubit.setState()",
      "cubit.emit(nuevoEstado)",
      "cubit.notify()",
      "cubit.update()"
    ],
    correcta: 1,
    explicacion: "emit() dentro de un método de Cubit emite un nuevo estado que escuchan los listeners.",
    categoria: "Estado"
  },
  {
    id: 54,
    pregunta: "¿Para qué sirve BlocListener?",
    opciones: [
      "Para reconstruir widgets",
      "Para ejecutar código en respuesta a cambios de estado sin reconstruir (navegación, snackbar)",
      "Para escuchar eventos",
      "Para depuración"
    ],
    correcta: 1,
    explicacion: "BlocListener ejecuta side effects (navegación, mostrar diálogos) sin reconstruir la UI.",
    categoria: "Estado"
  },
  {
    id: 55,
    pregunta: "¿Qué método se sobrescribe en BLoC para manejar eventos?",
    opciones: ["handleEvent()", "mapEventToState()", "on<Event>()", "processEvent()"],
    correcta: 2,
    explicacion: "on<Event>() registra handlers para cada tipo de evento: on<IncrementEvent>((event, emit) => ...).",
    categoria: "Estado"
  },

  // GetX (5 preguntas nuevas)
  {
    id: 56,
    pregunta: "¿Qué es GetX?",
    opciones: [
      "Un widget de Flutter",
      "Un framework completo para gestión de estado, navegación y dependencias",
      "Un paquete solo para HTTP",
      "Una base de datos"
    ],
    correcta: 1,
    explicacion: "GetX ofrece gestión de estado reactivo, navegación sin context, inyección de dependencias y más.",
    categoria: "Estado"
  },
  {
    id: 57,
    pregunta: "¿Cómo se navega sin context en GetX?",
    opciones: [
      "Navigator.push()",
      "Get.to(Pantalla())",
      "context.push()",
      "GetX.navigate()"
    ],
    correcta: 1,
    explicacion: "Get.to(), Get.off(), Get.offAll() permiten navegar sin necesidad de BuildContext.",
    categoria: "Estado"
  },
  {
    id: 58,
    pregunta: "¿Qué clase se usa para gestión de estado reactivo en GetX?",
    opciones: ["GetController", "GetxController", "StateController", "RxController"],
    correcta: 1,
    explicacion: "GetxController maneja la lógica y estado, exponiéndolos a la UI mediante Obx o GetBuilder.",
    categoria: "Estado"
  },
  {
    id: 59,
    pregunta: "¿Qué widget de GetX reconstruye reactivamente cuando cambian observables .obs?",
    opciones: ["GetBuilder", "Obx", "GetX", "Ambas B y C"],
    correcta: 3,
    explicacion: "Obx(() => ...) y GetX<Controller>() reconstruyen automáticamente cuando cambian variables .obs.",
    categoria: "Estado"
  },
  {
    id: 60,
    pregunta: "¿Cómo se define una variable reactiva en GetX?",
    opciones: [
      "var count = 0.reactive;",
      "var count = 0.obs;",
      "var count = Rx(0);",
      "Ambas B y C"
    ],
    correcta: 3,
    explicacion: "Se puede usar var count = 0.obs; o var count = Rx<int>(0); para crear variables reactivas.",
    categoria: "Estado"
  }
];
