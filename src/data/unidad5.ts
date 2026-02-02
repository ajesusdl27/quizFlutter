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
  }
];
