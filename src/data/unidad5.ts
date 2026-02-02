import type { Pregunta } from './types';

export const preguntasUnidad5: Pregunta[] = [
  // Widgets básicos (7)
  {
    id: 1,
    pregunta: "¿Qué es un Widget en Flutter?",
    opciones: [
      "Un archivo de configuración",
      "Un elemento de la interfaz de usuario, todo en Flutter es un Widget",
      "Una función de JavaScript",
      "Un tipo de base de datos"
    ],
    correcta: 1,
    explicacion: "En Flutter, todo es un Widget: desde botones hasta layouts, texto e incluso la app completa.",
    categoria: "Conceptos básicos"
  },
  {
    id: 2,
    pregunta: "¿Cuál es el widget para mostrar texto en Flutter?",
    opciones: ["Label", "TextView", "Text", "TextWidget"],
    correcta: 2,
    explicacion: "El widget Text() se usa para mostrar texto: Text('Hola Mundo')",
    categoria: "Widgets básicos"
  },
  {
    id: 3,
    pregunta: "¿Qué widget se usa como contenedor con propiedades de estilo?",
    opciones: ["Box", "Div", "Container", "Wrapper"],
    correcta: 2,
    explicacion: "Container es un widget conveniente que combina padding, margin, decoración, tamaño y más.",
    categoria: "Widgets básicos"
  },
  {
    id: 4,
    pregunta: "¿Cómo se muestra una imagen desde assets en Flutter?",
    opciones: [
      "Image.file('assets/imagen.png')",
      "Image.asset('assets/imagen.png')",
      "Image.load('assets/imagen.png')",
      "Image('assets/imagen.png')"
    ],
    correcta: 1,
    explicacion: "Image.asset() carga imágenes desde los assets del proyecto definidos en pubspec.yaml.",
    categoria: "Widgets básicos"
  },
  {
    id: 5,
    pregunta: "¿Qué widget se usa para crear un botón con texto?",
    opciones: ["Button", "TextButton", "PushButton", "ClickButton"],
    correcta: 1,
    explicacion: "TextButton (antes FlatButton) es un botón de Material Design sin elevación.",
    categoria: "Widgets básicos"
  },
  {
    id: 6,
    pregunta: "¿Qué propiedad del widget Text define el estilo del texto?",
    opciones: ["textStyle", "style", "decoration", "format"],
    correcta: 1,
    explicacion: "La propiedad 'style' acepta un TextStyle para definir fuente, tamaño, color, etc.",
    categoria: "Widgets básicos"
  },
  {
    id: 7,
    pregunta: "¿Qué widget crea un botón elevado con sombra?",
    opciones: ["RaisedButton", "ElevatedButton", "ShadowButton", "MaterialButton"],
    correcta: 1,
    explicacion: "ElevatedButton (reemplazó a RaisedButton) es un botón con elevación y sombra.",
    categoria: "Widgets básicos"
  },

  // Layout widgets (7)
  {
    id: 8,
    pregunta: "¿Qué widget organiza hijos en una fila horizontal?",
    opciones: ["HorizontalLayout", "Row", "Line", "Horizontal"],
    correcta: 1,
    explicacion: "Row organiza sus hijos en una línea horizontal de izquierda a derecha.",
    categoria: "Layout"
  },
  {
    id: 9,
    pregunta: "¿Qué widget organiza hijos en una columna vertical?",
    opciones: ["VerticalLayout", "Column", "Stack", "Vertical"],
    correcta: 1,
    explicacion: "Column organiza sus hijos en una línea vertical de arriba hacia abajo.",
    categoria: "Layout"
  },
  {
    id: 10,
    pregunta: "¿Qué propiedad de Row/Column define la alineación en el eje principal?",
    opciones: ["alignment", "mainAxisAlignment", "primaryAlignment", "axisAlign"],
    correcta: 1,
    explicacion: "mainAxisAlignment controla cómo se distribuyen los hijos en el eje principal (horizontal en Row, vertical en Column).",
    categoria: "Layout"
  },
  {
    id: 11,
    pregunta: "¿Qué widget permite superponer widgets uno encima de otro?",
    opciones: ["Overlay", "Stack", "Layer", "ZIndex"],
    correcta: 1,
    explicacion: "Stack permite posicionar widgets uno encima de otro, útil para superposiciones.",
    categoria: "Layout"
  },
  {
    id: 12,
    pregunta: "¿Qué widget expande un hijo para ocupar el espacio disponible en Row/Column?",
    opciones: ["Flexible", "Expanded", "Fill", "Stretch"],
    correcta: 1,
    explicacion: "Expanded obliga al hijo a ocupar todo el espacio restante disponible.",
    categoria: "Layout"
  },
  {
    id: 13,
    pregunta: "¿Qué propiedad controla la alineación en el eje secundario?",
    opciones: ["secondaryAxisAlignment", "crossAxisAlignment", "minorAlignment", "otherAxis"],
    correcta: 1,
    explicacion: "crossAxisAlignment controla la alineación perpendicular al eje principal.",
    categoria: "Layout"
  },
  {
    id: 14,
    pregunta: "¿Qué widget agrega padding interno a su hijo?",
    opciones: ["Margin", "Padding", "Spacing", "Inset"],
    correcta: 1,
    explicacion: "Padding agrega espacio interno alrededor de su hijo único.",
    categoria: "Layout"
  },

  // Stateless vs Stateful (6)
  {
    id: 15,
    pregunta: "¿Cuál es la diferencia principal entre StatelessWidget y StatefulWidget?",
    opciones: [
      "StatelessWidget es más rápido",
      "StatefulWidget puede cambiar su estado y reconstruirse",
      "StatelessWidget no puede tener hijos",
      "StatefulWidget solo funciona en Android"
    ],
    correcta: 1,
    explicacion: "StatefulWidget mantiene estado mutable que puede cambiar y provocar reconstrucciones del widget.",
    categoria: "State"
  },
  {
    id: 16,
    pregunta: "¿Qué método se sobrescribe en StatelessWidget para construir la UI?",
    opciones: ["render()", "create()", "build()", "draw()"],
    correcta: 2,
    explicacion: "El método build(BuildContext context) retorna el árbol de widgets que define la UI.",
    categoria: "State"
  },
  {
    id: 17,
    pregunta: "¿Qué clase acompaña a StatefulWidget para manejar el estado?",
    opciones: ["StateManager", "State<T>", "WidgetState", "MutableState"],
    correcta: 1,
    explicacion: "La clase State<NombreWidget> contiene el estado mutable y el método build().",
    categoria: "State"
  },
  {
    id: 18,
    pregunta: "¿Qué función se usa para actualizar el estado y reconstruir la UI?",
    opciones: ["updateState()", "refresh()", "setState()", "rebuild()"],
    correcta: 2,
    explicacion: "setState(() { }) notifica a Flutter que el estado cambió y debe reconstruir el widget.",
    categoria: "State"
  },
  {
    id: 19,
    pregunta: "¿Cuándo deberías usar StatelessWidget?",
    opciones: [
      "Cuando necesitas un formulario",
      "Cuando la UI no cambia basada en interacciones",
      "Cuando usas animaciones",
      "Siempre es mejor usar StatefulWidget"
    ],
    correcta: 1,
    explicacion: "Usa StatelessWidget cuando el widget solo depende de su configuración inicial y no cambia.",
    categoria: "State"
  },
  {
    id: 20,
    pregunta: "¿Qué sucede si llamas setState() fuera del ciclo de vida del widget?",
    opciones: [
      "Funciona normalmente",
      "Se ignora silenciosamente",
      "Lanza una excepción",
      "La app se reinicia"
    ],
    correcta: 2,
    explicacion: "Llamar setState() después de dispose() lanza una excepción. Debes verificar 'mounted' en operaciones async.",
    categoria: "State"
  },

  // Ciclo de vida y composición (5)
  {
    id: 21,
    pregunta: "¿Qué método del ciclo de vida se llama cuando el State se crea por primera vez?",
    opciones: ["onCreate()", "initState()", "start()", "initialize()"],
    correcta: 1,
    explicacion: "initState() se llama una vez cuando el State se inserta en el árbol de widgets.",
    categoria: "Ciclo de vida"
  },
  {
    id: 22,
    pregunta: "¿Qué método se llama cuando el widget se elimina permanentemente?",
    opciones: ["destroy()", "remove()", "dispose()", "delete()"],
    correcta: 2,
    explicacion: "dispose() se llama cuando el State se elimina, ideal para liberar recursos (controllers, streams).",
    categoria: "Ciclo de vida"
  },
  {
    id: 23,
    pregunta: "¿Qué significa 'composición sobre herencia' en Flutter?",
    opciones: [
      "Debes heredar de muchas clases",
      "Construyes UIs complejas combinando widgets simples",
      "No puedes usar herencia",
      "Los widgets no pueden tener hijos"
    ],
    correcta: 1,
    explicacion: "Flutter favorece componer widgets pequeños y reutilizables en lugar de crear jerarquías de herencia complejas.",
    categoria: "Composición"
  },
  {
    id: 24,
    pregunta: "¿Cuál es la forma correcta de pasar datos a un widget hijo?",
    opciones: [
      "Variables globales",
      "A través del constructor (props)",
      "Archivos compartidos",
      "Base de datos local"
    ],
    correcta: 1,
    explicacion: "Los datos se pasan de padre a hijo a través de parámetros del constructor (similar a props en React).",
    categoria: "Composición"
  },
  {
    id: 25,
    pregunta: "¿Qué widget se usa para construir listas largas de forma eficiente?",
    opciones: ["List", "Column", "ListView.builder", "ScrollView"],
    correcta: 2,
    explicacion: "ListView.builder construye elementos bajo demanda, ideal para listas grandes ya que solo renderiza los visibles.",
    categoria: "Widgets avanzados"
  },

  // Props y construcción de UI (5)
  {
    id: 26,
    pregunta: "¿Cómo se define una propiedad requerida en un widget?",
    opciones: [
      "@required en el parámetro",
      "required antes del tipo en el constructor",
      "Usando ! después del nombre",
      "No se puede hacer requerida"
    ],
    correcta: 1,
    explicacion: "Usa 'required' antes del parámetro: Widget({required this.titulo})",
    categoria: "Props"
  },
  {
    id: 27,
    pregunta: "¿Qué es el BuildContext?",
    opciones: [
      "El estado actual del widget",
      "La ubicación del widget en el árbol de widgets",
      "Un archivo de configuración",
      "El tema de la aplicación"
    ],
    correcta: 1,
    explicacion: "BuildContext representa la ubicación del widget en el árbol y permite acceder a datos del contexto.",
    categoria: "Conceptos"
  },
  {
    id: 28,
    pregunta: "¿Cómo se accede al tema actual de la aplicación?",
    opciones: [
      "Theme.current",
      "Theme.of(context)",
      "context.theme",
      "getTheme()"
    ],
    correcta: 1,
    explicacion: "Theme.of(context) obtiene el ThemeData más cercano en el árbol de widgets.",
    categoria: "Conceptos"
  },
  {
    id: 29,
    pregunta: "¿Qué widget es la raíz típica de una app Material Design?",
    opciones: ["App", "MaterialApp", "FlutterApp", "MainApp"],
    correcta: 1,
    explicacion: "MaterialApp configura navegación, tema, localización y es el punto de entrada típico.",
    categoria: "Widgets básicos"
  },
  {
    id: 30,
    pregunta: "¿Qué widget proporciona la estructura básica de una pantalla Material?",
    opciones: ["Screen", "Page", "Scaffold", "Layout"],
    correcta: 2,
    explicacion: "Scaffold proporciona appBar, body, drawer, floatingActionButton y más estructura visual.",
    categoria: "Widgets básicos"
  },

  // ListView y GridView avanzados (7 preguntas nuevas)
  {
    id: 31,
    pregunta: "¿Cuál es la ventaja de ListView.builder sobre ListView?",
    opciones: [
      "Es más bonito",
      "Construye elementos bajo demanda (lazy loading), más eficiente para listas grandes",
      "Permite más opciones de estilo",
      "Es más rápido en listas pequeñas"
    ],
    correcta: 1,
    explicacion: "ListView.builder solo crea widgets que son visibles en pantalla, ahorrando memoria en listas largas.",
    categoria: "Listas"
  },
  {
    id: 32,
    pregunta: "¿Qué parámetro de ListView.builder define cuántos elementos hay?",
    opciones: ["count", "length", "itemCount", "size"],
    correcta: 2,
    explicacion: "itemCount define el número total de elementos. itemBuilder se llama para cada índice.",
    categoria: "Listas"
  },
  {
    id: 33,
    pregunta: "¿Qué hace ListView.separated()?",
    opciones: [
      "Separa la lista en páginas",
      "Crea una lista con separadores personalizados entre elementos",
      "Separa elementos por categoría",
      "Crea múltiples listas"
    ],
    correcta: 1,
    explicacion: "ListView.separated() añade un widget separador entre cada elemento, útil para divisores.",
    categoria: "Listas"
  },
  {
    id: 34,
    pregunta: "¿Qué widget crea una grilla de elementos?",
    opciones: ["Grid", "GridView", "Matrix", "TableView"],
    correcta: 1,
    explicacion: "GridView crea layouts tipo grilla con múltiples columnas.",
    categoria: "Listas"
  },
  {
    id: 35,
    pregunta: "¿Qué parámetro de GridView define el número de columnas?",
    opciones: ["columns", "crossAxisCount", "columnCount", "width"],
    correcta: 1,
    explicacion: "crossAxisCount en GridView.count() define cuántos elementos hay en el eje transversal.",
    categoria: "Listas"
  },
  {
    id: 36,
    pregunta: "¿Qué hace SingleChildScrollView?",
    opciones: [
      "Permite scroll con múltiples hijos",
      "Hace scrollable un widget único cuando su contenido excede el espacio",
      "Crea listas",
      "Agranda widgets"
    ],
    correcta: 1,
    explicacion: "SingleChildScrollView envuelve un widget para hacerlo scrollable si no cabe en pantalla.",
    categoria: "Listas"
  },
  {
    id: 37,
    pregunta: "¿Cuándo usar GridView.builder vs GridView?",
    opciones: [
      "Son iguales",
      "GridView.builder para grillas grandes (lazy loading)",
      "GridView.builder es más lento",
      "GridView es deprecated"
    ],
    correcta: 1,
    explicacion: "GridView.builder construye elementos bajo demanda, mejor rendimiento para grillas grandes.",
    categoria: "Listas"
  },

  // TextField y forms (6 preguntas nuevas)
  {
    id: 38,
    pregunta: "¿Qué widget se usa para entrada de texto en Flutter?",
    opciones: ["Input", "TextInput", "TextField", "EditText"],
    correcta: 2,
    explicacion: "TextField es el widget de Material Design para capturar entrada de texto del usuario.",
    categoria: "Input"
  },
  {
    id: 39,
    pregunta: "¿Qué es un TextEditingController?",
    opciones: [
      "Un controlador de teclado",
      "Un objeto que controla el texto y la selección de un TextField",
      "Un validador de texto",
      "Un formateador de texto"
    ],
    correcta: 1,
    explicacion: "TextEditingController permite leer/escribir el texto del TextField programáticamente.",
    categoria: "Input"
  },
  {
    id: 40,
    pregunta: "¿Por qué se debe hacer dispose() de un TextEditingController?",
    opciones: [
      "No es necesario",
      "Para liberar recursos y evitar memory leaks",
      "Para guardar el texto",
      "Para validar el input"
    ],
    correcta: 1,
    explicacion: "dispose() libera recursos nativos. Siempre dispose controllers en dispose() del State.",
    categoria: "Input"
  },
  {
    id: 41,
    pregunta: "¿Qué propiedad de TextField define el texto de placeholder?",
    opciones: ["placeholder", "hint", "decoration: InputDecoration(hintText)", "defaultText"],
    correcta: 2,
    explicacion: "Se usa decoration: InputDecoration(hintText: 'texto...') para el placeholder.",
    categoria: "Input"
  },
  {
    id: 42,
    pregunta: "¿Qué widget agrupa múltiples campos de formulario con validación?",
    opciones: ["FormGroup", "Form", "InputGroup", "FormWrapper"],
    correcta: 1,
    explicacion: "Form envuelve TextFormField widgets y maneja validación con una FormKey.",
    categoria: "Input"
  },
  {
    id: 43,
    pregunta: "¿Cómo se valida un formulario en Flutter?",
    opciones: [
      "form.check()",
      "formKey.currentState?.validate()",
      "form.isValid()",
      "validateForm()"
    ],
    correcta: 1,
    explicacion: "Se llama validate() en el FormState a través de una GlobalKey<FormState>.",
    categoria: "Input"
  },

  // Keys y optimización (5 preguntas nuevas)
  {
    id: 44,
    pregunta: "¿Para qué sirven las Keys en Flutter?",
    opciones: [
      "Para cifrado",
      "Para identificar widgets únicamente y preservar estado cuando el árbol cambia",
      "Para atajos de teclado",
      "Para IDs de base de datos"
    ],
    correcta: 1,
    explicacion: "Keys ayudan a Flutter a identificar qué widgets cambiaron, se añadieron o eliminaron.",
    categoria: "Optimización"
  },
  {
    id: 45,
    pregunta: "¿Cuándo se debe usar una Key?",
    opciones: [
      "Siempre",
      "Cuando tienes widgets del mismo tipo en una lista que pueden reordenarse o eliminarse",
      "Nunca",
      "Solo en StatefulWidgets"
    ],
    correcta: 1,
    explicacion: "Keys son necesarias cuando widgets del mismo tipo necesitan mantener su identidad al reordenarse.",
    categoria: "Optimización"
  },
  {
    id: 46,
    pregunta: "¿Qué tipo de Key usa un valor único para identificar el widget?",
    opciones: ["UniqueKey", "ValueKey", "ObjectKey", "GlobalKey"],
    correcta: 1,
    explicacion: "ValueKey usa un valor (String, int, etc) para identificar: ValueKey('item_\$id')",
    categoria: "Optimización"
  },
  {
    id: 47,
    pregunta: "¿Para qué sirve const en widgets?",
    opciones: [
      "Para hacer variables constantes",
      "Para crear widgets en tiempo de compilación, optimizando rendimiento",
      "Para widgets inmutables",
      "No tiene efecto en widgets"
    ],
    correcta: 1,
    explicacion: "const crea widgets en compile-time que se reutilizan, evitando reconstrucciones innecesarias.",
    categoria: "Optimización"
  },
  {
    id: 48,
    pregunta: "¿Qué es el const constructor en Flutter?",
    opciones: [
      "Un constructor normal",
      "Un constructor que crea instancias inmutables en compile-time",
      "Un constructor deprecated",
      "Un constructor privado"
    ],
    correcta: 1,
    explicacion: "const antes de un widget crea instancias inmutables reutilizables: const Text('hola')",
    categoria: "Optimización"
  },

  // Themes y estilos (6 preguntas nuevas)
  {
    id: 49,
    pregunta: "¿Dónde se define el tema global de la aplicación?",
    opciones: [
      "En cada widget",
      "En la propiedad theme de MaterialApp",
      "En pubspec.yaml",
      "En un archivo CSS"
    ],
    correcta: 1,
    explicacion: "MaterialApp tiene la propiedad theme: ThemeData(...) para definir colores, fuentes, etc.",
    categoria: "Temas"
  },
  {
    id: 50,
    pregunta: "¿Cómo se define el color primario de la app?",
    opciones: [
      "Colors.primary",
      "ThemeData(primaryColor: Colors.blue)",
      "setPrimaryColor()",
      "En AndroidManifest"
    ],
    correcta: 1,
    explicacion: "Se define en ThemeData con primaryColor o usando colorScheme en Material 3.",
    categoria: "Temas"
  },
  {
    id: 51,
    pregunta: "¿Qué clase define el estilo de texto en Flutter?",
    opciones: ["FontStyle", "TextStyle", "TextFormat", "StyleText"],
    correcta: 1,
    explicacion: "TextStyle define fontSize, fontWeight, color, fontFamily y más propiedades de texto.",
    categoria: "Temas"
  },
  {
    id: 52,
    pregunta: "¿Cómo se accede a los colores del tema actual?",
    opciones: [
      "Theme.colors",
      "Theme.of(context).colorScheme.primary",
      "Colors.theme.primary",
      "context.colors"
    ],
    correcta: 1,
    explicacion: "Theme.of(context) retorna el ThemeData actual, luego se accede a colorScheme o propiedades específicas.",
    categoria: "Temas"
  },
  {
    id: 53,
    pregunta: "¿Qué widget permite sobrescribir el tema para una parte del árbol?",
    opciones: ["ThemeWrapper", "Theme", "ThemeScope", "CustomTheme"],
    correcta: 1,
    explicacion: "Theme(data: ThemeData(...), child: ...) aplica un tema diferente a sus descendientes.",
    categoria: "Temas"
  },
  {
    id: 54,
    pregunta: "¿Cómo se aplica una fuente personalizada en Flutter?",
    opciones: [
      "Solo con CSS",
      "Añadiendo la fuente a assets y declarándola en pubspec.yaml con fonts:",
      "No se pueden usar fuentes personalizadas",
      "Con un paquete especial"
    ],
    correcta: 1,
    explicacion: "Se añade la fuente .ttf a assets, se declara en pubspec.yaml y se usa con fontFamily en TextStyle.",
    categoria: "Temas"
  },

  // Animaciones implícitas (4 preguntas nuevas)
  {
    id: 55,
    pregunta: "¿Qué es AnimatedContainer?",
    opciones: [
      "Un Container animado automáticamente",
      "Un Container que anima sus propiedades cuando cambian",
      "Un Container para animaciones 3D",
      "Un Container que no se puede animar"
    ],
    correcta: 1,
    explicacion: "AnimatedContainer anima automáticamente cambios en sus propiedades (tamaño, color, padding, etc).",
    categoria: "Animaciones"
  },
  {
    id: 56,
    pregunta: "¿Qué propiedad define la duración de una animación implícita?",
    opciones: ["time", "duration", "animationTime", "speed"],
    correcta: 1,
    explicacion: "duration: Duration(milliseconds: 500) define cuánto dura la animación.",
    categoria: "Animaciones"
  },
  {
    id: 57,
    pregunta: "¿Qué widget anima cambios de opacidad?",
    opciones: ["AnimatedFade", "AnimatedOpacity", "FadeTransition", "OpacityAnimation"],
    correcta: 1,
    explicacion: "AnimatedOpacity anima transiciones de opacidad cuando cambia su propiedad opacity.",
    categoria: "Animaciones"
  },
  {
    id: 58,
    pregunta: "¿Qué propiedad define la curva de animación?",
    opciones: ["animation", "curve", "easing", "transition"],
    correcta: 1,
    explicacion: "curve: Curves.easeInOut define cómo progresa la animación (linear, bounceIn, etc).",
    categoria: "Animaciones"
  },

  // BuildContext y navegación básica (2 preguntas nuevas)
  {
    id: 59,
    pregunta: "¿Por qué BuildContext es importante?",
    opciones: [
      "Para compilar código",
      "Permite acceder a datos heredados del árbol como Theme, MediaQuery, Navigator",
      "Para crear builds",
      "Para depuración"
    ],
    correcta: 1,
    explicacion: "BuildContext permite buscar datos hacia arriba en el árbol de widgets usando of(context).",
    categoria: "Conceptos"
  },
  {
    id: 60,
    pregunta: "¿Qué hace el widget Builder?",
    opciones: [
      "Construye la app",
      "Proporciona un nuevo BuildContext para su hijo",
      "Compila widgets",
      "Construye layouts"
    ],
    correcta: 1,
    explicacion: "Builder proporciona un nuevo BuildContext, útil cuando necesitas un context hijo (ej: para Scaffold.of()).",
    categoria: "Conceptos"
  }
];
