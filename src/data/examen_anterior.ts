import type { Pregunta } from './types';

export const preguntasExamenAnterior: Pregunta[] = [
  // Bloque 1: View Binding (10)
  {
    id: 1,
    pregunta: "¿Cuál es el principal propósito de View Binding?",
    opciones: [
      "Reemplazar completamente el uso de archivos XML de diseño",
      "Proporcionar un acceso seguro y eficiente a las vistas, eliminando la necesidad de findViewById()",
      "Simplificar la gestión de la lógica de negocio en la Activity",
      "Generar código para manejar la persistencia de datos"
    ],
    correcta: 1,
    explicacion: "View Binding automatiza la conexión entre el código y las vistas del layout, proporcionando acceso seguro y eficiente.",
    categoria: "View Binding"
  },
  {
    id: 2,
    pregunta: "¿Qué se debe añadir en el archivo build.gradle (Module: app) para activar View Binding?",
    opciones: [
      "dataBinding = true dentro de defaultConfig {}",
      "viewBinding = true dentro de buildFeatures {}",
      "Una nueva dependencia de viewbinding-ktx",
      "apply plugin: 'kotlin-view-binding'"
    ],
    correcta: 1,
    explicacion: "La configuración se realiza en el bloque buildFeatures del build.gradle (Module: app) con viewBinding = true.",
    categoria: "View Binding"
  },
  {
    id: 3,
    pregunta: "Si tienes un archivo de diseño llamado fragment_perfil.xml, ¿cómo se llamará la clase de enlace (binding) generada automáticamente por View Binding?",
    opciones: [
      "FragmentPerfilBinding",
      "PerfilFragmentBinding",
      "fragment_perfil_binding",
      "PerfilBinding"
    ],
    correcta: 0,
    explicacion: "El IDE usa la convención de PascalCase del nombre del layout, eliminando guiones bajos: FragmentPerfilBinding.",
    categoria: "View Binding"
  },
  {
    id: 4,
    pregunta: "¿Cuál de los siguientes es un beneficio clave de usar View Binding?",
    opciones: [
      "Reduce el tamaño de la aplicación al compilar",
      "Elimina el riesgo de NullPointerException al acceder a las vistas",
      "Permite crear interfaces de usuario dinámicas sin código Kotlin",
      "Hace que el código Kotlin sea compatible con Java"
    ],
    correcta: 1,
    explicacion: "View Binding proporciona seguridad de tipo (Type Safety) y seguridad nula (Null Safety) en el acceso a vistas.",
    categoria: "View Binding"
  },
  {
    id: 5,
    pregunta: "En una Activity, ¿cuál es el método correcto para inicializar la clase de enlace?",
    opciones: [
      "binding = ActivityMainBinding.bind(view)",
      "binding = ActivityMainBinding.newInstance()",
      "binding = ActivityMainBinding.inflate(layoutInflater)",
      "binding = findViewById(R.layout.activity_main)"
    ],
    correcta: 2,
    explicacion: "En una Activity, se usa el método estático inflate() de la clase generada, pasando el layoutInflater.",
    categoria: "View Binding"
  },
  {
    id: 6,
    pregunta: "¿Cómo se accede a un Button con el android:id=\"@+id/buttonChange\" en la Activity usando View Binding?",
    opciones: [
      "binding.R.id.buttonChange",
      "binding.buttonChange",
      "binding.getButtonChange()",
      "binding[\"buttonChange\"]"
    ],
    correcta: 1,
    explicacion: "Las vistas se referencian directamente como propiedades de la clase binding, usando su ID sin @+id/.",
    categoria: "View Binding"
  },
  {
    id: 7,
    pregunta: "¿Por qué se recomienda establecer la referencia de View Binding a null en el método onDestroyView() de un Fragment?",
    opciones: [
      "Para liberar memoria y evitar fugas de memoria (memory leaks)",
      "Porque View Binding no funciona después de onViewCreated()",
      "Es un requisito de la API de Fragments",
      "Para forzar una nueva inflación del diseño al regresar al Fragment"
    ],
    correcta: 0,
    explicacion: "En Fragments, la vista existe solo entre onCreateView y onDestroyView, limpiar la referencia previene leaks.",
    categoria: "View Binding"
  },
  {
    id: 8,
    pregunta: "View Binding se considera a menudo más rápido y eficiente que otra característica similar de Android. ¿Cuál es esa característica?",
    opciones: [
      "LiveData",
      "Kotlin Coroutines",
      "Data Binding",
      "findViewById()"
    ],
    correcta: 2,
    explicacion: "View Binding es más sencillo y no requiere el procesamiento de anotaciones, lo que lo hace más rápido que Data Binding para acceder a vistas.",
    categoria: "View Binding"
  },
  {
    id: 9,
    pregunta: "En el código de una Activity, después de inicializar el objeto binding, ¿qué método se utiliza para establecer la vista raíz de la Activity?",
    opciones: [
      "setContentView(R.layout.activity_main)",
      "setContentView(binding)",
      "setContentView(binding.root)",
      "setContentView(this)"
    ],
    correcta: 2,
    explicacion: "La propiedad root del objeto binding es la vista raíz del layout inflado, que se pasa a setContentView().",
    categoria: "View Binding"
  },
  {
    id: 10,
    pregunta: "¿En qué escenario no generará una clase de enlace View Binding para un archivo XML?",
    opciones: [
      "Si el archivo XML está en la carpeta layout-land",
      "Si el archivo XML contiene solo un TextView",
      "Si se añade el atributo tools:viewBindingIgnore=\"true\" en la vista raíz del XML",
      "View Binding siempre genera una clase para cada archivo XML de diseño"
    ],
    correcta: 2,
    explicacion: "Este atributo es la forma de excluir diseños específicos del proceso de generación de View Binding.",
    categoria: "View Binding"
  },

  // Bloque 2: ConstraintLayout y Layouts (10)
  {
    id: 11,
    pregunta: "¿Qué Layout se considera generalmente más eficiente y flexible para crear diseños complejos de una sola jerarquía plana?",
    opciones: [
      "LinearLayout",
      "FrameLayout",
      "TableLayout",
      "ConstraintLayout"
    ],
    correcta: 3,
    explicacion: "ConstraintLayout minimiza la jerarquía y es ideal para diseños complejos.",
    categoria: "ConstraintLayout"
  },
  {
    id: 12,
    pregunta: "¿Cuál es la propiedad del LinearLayout que determina si las vistas se apilan de arriba a abajo o de izquierda a derecha?",
    opciones: [
      "android:gravity",
      "android:layout_weight",
      "android:orientation",
      "android:layout_span"
    ],
    correcta: 2,
    explicacion: "La orientación (vertical o horizontal) es fundamental en LinearLayout.",
    categoria: "ConstraintLayout"
  },
  {
    id: 13,
    pregunta: "En ConstraintLayout, si una vista está anclada a app:layout_constraintStart_toStartOf=\"parent\" y app:layout_constraintEnd_toEndOf=\"parent\", ¿qué atributo se usa para desplazarla hacia la derecha de forma no centrada?",
    opciones: [
      "app:layout_constraintRight_bias",
      "app:layout_constraintHorizontal_weight",
      "app:layout_constraintHorizontal_bias",
      "app:layout_constraintStart_margin"
    ],
    correcta: 2,
    explicacion: "app:layout_constraintHorizontal_bias controla el 'sesgo' o desplazamiento horizontal entre dos anclajes opuestos (0.0 a 1.0).",
    categoria: "ConstraintLayout"
  },
  {
    id: 14,
    pregunta: "¿Cuál de los siguientes problemas resuelve ConstraintLayout al usar una Barrier?",
    opciones: [
      "La alineación de un botón entre varios campos de texto que tienen longitudes variables (ej. nombres en distintos idiomas)",
      "La distribución uniforme del espacio entre un grupo de tres botones en la parte inferior de la pantalla",
      "Mantener un margen fijo de 16dp desde el borde del padre",
      "La superposición de una imagen de fondo con un texto encima"
    ],
    correcta: 0,
    explicacion: "Las Barriers se ajustan al borde del elemento más grande para alinear los elementos siguientes, resolviendo problemas de longitud variable.",
    categoria: "ConstraintLayout"
  },
  {
    id: 15,
    pregunta: "En el contexto de ConstraintLayout, ¿qué tipo de Chain agrupa los elementos en el centro de la pantalla, dejando el espacio uniforme solo en los extremos?",
    opciones: [
      "Spread Chain",
      "Packed Chain",
      "Weighted Chain",
      "Spread Inside Chain"
    ],
    correcta: 1,
    explicacion: "La Packed Chain agrupa los elementos juntos, distribuyendo el espacio solo en los costados extremos.",
    categoria: "ConstraintLayout"
  },
  {
    id: 16,
    pregunta: "¿Qué componente de ConstraintLayout se utiliza para crear líneas de referencia invisibles (por porcentaje o distancia fija) que ayudan a alinear múltiples vistas de forma adaptable?",
    opciones: [
      "Helper",
      "Guideline",
      "ViewStub",
      "Barrier"
    ],
    correcta: 1,
    explicacion: "La Guideline permite crear referencias proporcionales o fijas sin ser visibles o ocupar espacio.",
    categoria: "ConstraintLayout"
  },
  {
    id: 17,
    pregunta: "¿Cuál es el caso de uso más apropiado para un FrameLayout?",
    opciones: [
      "Crear un formulario de registro con etiquetas y campos en dos columnas",
      "Construir una galería de 3x3 imágenes",
      "Mostrar un icono de loading (cargando) superpuesto sobre el contenido principal",
      "Alinear una lista de elementos verticalmente con separadores"
    ],
    correcta: 2,
    explicacion: "FrameLayout es un contenedor que se usa principalmente para apilar vistas (superposición), como un cargador sobre el contenido.",
    categoria: "ConstraintLayout"
  },
  {
    id: 18,
    pregunta: "En un GridLayout de 4 columnas, ¿qué propiedad debe aplicarse a un botón para que ocupe las dos últimas columnas de su fila?",
    opciones: [
      "android:layout_rowSpan",
      "android:layout_width=\"match_parent\"",
      "android:layout_columnSpan=\"2\"",
      "android:columnCount=\"2\""
    ],
    correcta: 2,
    explicacion: "android:layout_columnSpan=\"2\" le indica al GridLayout que esta vista debe ocupar el ancho de dos columnas.",
    categoria: "ConstraintLayout"
  },
  {
    id: 19,
    pregunta: "¿Por qué es ConstraintLayout más eficiente en términos de rendimiento (renderizado) que anidar múltiples LinearLayouts?",
    opciones: [
      "Utiliza menos memoria RAM durante la ejecución",
      "Su código XML es más corto",
      "Reduce la profundidad de la jerarquía de vistas (View Hierarchy)",
      "Soporta más atributos de diseño que LinearLayout"
    ],
    correcta: 2,
    explicacion: "La reducción de la profundidad de la jerarquía mejora el rendimiento de medición y dibujo (measure and draw) en Android.",
    categoria: "ConstraintLayout"
  },
  {
    id: 20,
    pregunta: "Para crear una cadena horizontal (Chain) en ConstraintLayout, ¿qué se debe hacer principalmente con el primer elemento de la cadena?",
    opciones: [
      "Darle un layout_width de wrap_content",
      "Anclar su inicio al inicio del padre y su final al inicio del siguiente elemento",
      "Establecer su android:id en el atributo app:constraint_referenced_ids del padre",
      "Aplicarle el estilo de cadena deseado (app:layout_constraintHorizontal_chainStyle)"
    ],
    correcta: 3,
    explicacion: "El estilo de la cadena (spread, packed, spread_inside) solo necesita definirse en el primer elemento de la cadena.",
    categoria: "ConstraintLayout"
  },

  // Bloque 3: LayoutInflater y Ciclo de Vida (10)
  {
    id: 21,
    pregunta: "¿Cuál es el rol fundamental de la clase LayoutInflater en Android?",
    opciones: [
      "Ejecutar tareas en segundo plano",
      "Manejar el ciclo de vida de las Activities",
      "Convertir un archivo XML de layout en un objeto View en memoria",
      "Gestionar la persistencia de datos en la aplicación"
    ],
    correcta: 2,
    explicacion: "LayoutInflater es el 'motor' que convierte el diseño XML en una jerarquía de objetos View en tiempo de ejecución.",
    categoria: "LayoutInflater"
  },
  {
    id: 22,
    pregunta: "¿En qué método de un Fragment se debe usar típicamente LayoutInflater para generar la vista del fragment?",
    opciones: [
      "onAttach()",
      "onCreate()",
      "onViewCreated()",
      "onCreateView()"
    ],
    correcta: 3,
    explicacion: "onCreateView() es el lugar canónico en un Fragment para inflar y devolver la vista que el fragment debe usar.",
    categoria: "LayoutInflater"
  },
  {
    id: 23,
    pregunta: "Si se llama a inflater.inflate(R.layout.mi_item, parent, false), ¿qué devuelve el método?",
    opciones: [
      "El objeto parent (el contenedor)",
      "El Activity Context",
      "El objeto View inflado (mi_item) sin ser añadido al parent",
      "Un error de NullPointerException"
    ],
    correcta: 2,
    explicacion: "Al ser false, la vista se infla (existe en memoria) pero no se adjunta al contenedor (parent).",
    categoria: "LayoutInflater"
  },
  {
    id: 24,
    pregunta: "¿Qué ocurre si en la llamada a inflate() se usa attachToRoot = true?",
    opciones: [
      "El método devuelve null",
      "El método devuelve la vista inflada (el hijo) y el desarrollador debe llamar addView() manualmente",
      "La vista inflada se añade inmediatamente al root y el método devuelve el objeto root (el padre)",
      "El sistema ignora los LayoutParams definidos en el XML"
    ],
    correcta: 2,
    explicacion: "attachToRoot = true adjunta la vista inmediatamente y devuelve el contenedor (root).",
    categoria: "LayoutInflater"
  },
  {
    id: 25,
    pregunta: "En un RecyclerView.Adapter, ¿por qué se utiliza la convención al inflar el item layout con parent y false?",
    opciones: [
      "Porque false es obligatorio en los adapters y fragments",
      "Porque permite que Android calcule y aplique correctamente los LayoutParams del padre sin añadir el item dos veces",
      "Porque ahorra memoria al no adjuntar la vista",
      "Porque es la única forma de acceder al ViewHolder"
    ],
    correcta: 1,
    explicacion: "Pasar el parent permite que la vista hija herede los parámetros de layout adecuados, mientras que false evita que el item se añada dos veces.",
    categoria: "LayoutInflater"
  },
  {
    id: 26,
    pregunta: "¿Qué clase o patrón de Android elimina la necesidad de usar findViewById() después de que un layout ha sido inflado?",
    opciones: [
      "Data Binding",
      "View Binding",
      "LiveData",
      "Resource Binding"
    ],
    correcta: 1,
    explicacion: "View Binding genera una clase de enlace por cada XML, permitiendo el acceso directo y seguro a los elementos por su ID.",
    categoria: "LayoutInflater"
  },
  {
    id: 27,
    pregunta: "Si el parámetro root es null en la llamada a inflate(resource, root, attachToRoot), ¿cuál es la principal consecuencia?",
    opciones: [
      "La vista no puede ser manipulada desde Kotlin",
      "La vista no puede ser añadida manualmente al layout",
      "Los parámetros de layout definidos en el XML (android:layout_...) pueden ignorarse o no aplicarse correctamente",
      "Es la práctica recomendada para Fragments"
    ],
    correcta: 2,
    explicacion: "Sin el contexto del root (padre), el inflater no tiene la información necesaria para aplicar las reglas de posicionamiento y tamaño de la vista hija (LayoutParams).",
    categoria: "LayoutInflater"
  },
  {
    id: 28,
    pregunta: "Si estás en una Activity y quieres obtener el LayoutInflater asociado a ella para inflar vistas, ¿cuál es la forma más directa de obtener una referencia?",
    opciones: [
      "Usar la función de extensión LayoutInflater.getInstance()",
      "Llamar a la propiedad context.getSystemService(Context.LAYOUT_INFLATER_SERVICE)",
      "Usar la propiedad layoutInflater (propiedad ya disponible en AppCompatActivity)",
      "Crear una nueva instancia de LayoutInflater() con el constructor"
    ],
    correcta: 2,
    explicacion: "layoutInflater es una propiedad de conveniencia ya disponible en Activities y Contexts para obtener el servicio de inflación.",
    categoria: "LayoutInflater"
  },
  {
    id: 29,
    pregunta: "¿Qué error común ocurre si llamas addView() después de haber usado attachToRoot = true en la llamada a inflate()?",
    opciones: [
      "Un error de formato en el XML",
      "Un NullPointerException",
      "Un error de IllegalStateException por intentar añadir una vista que ya tiene un padre",
      "La aplicación no se compila"
    ],
    correcta: 2,
    explicacion: "Si attachToRoot = true, la vista inflada ya tiene un padre; intentar añadirla de nuevo con addView resultará en un error porque una vista solo puede tener un padre.",
    categoria: "LayoutInflater"
  },
  {
    id: 30,
    pregunta: "Al usar View Binding, ¿cómo se obtiene un objeto de binding a partir de un LayoutInflater?",
    opciones: [
      "Llamando al método estático ItemUsuarioBinding.bind(view) después de la inflación",
      "Llamando al método ItemUsuarioBinding.inflate(layoutInflater, parent, false)",
      "Llamando al método ItemUsuarioBinding.getRoot()",
      "No es posible, View Binding solo funciona con setContentView"
    ],
    correcta: 1,
    explicacion: "Al usar View Binding, la clase de binding generada tiene un método estático inflate() que recibe el inflater, el padre y el valor de attachToRoot.",
    categoria: "LayoutInflater"
  },

  // Bloque 4: Conceptos Generales Android & MVVM (4)
  {
    id: 31,
    pregunta: "¿Qué archivo dentro de la carpeta res/ se utiliza para almacenar cadenas de texto reutilizables, facilitando la internacionalización y evitando el hardcode?",
    opciones: [
      "AndroidManifest.xml",
      "layout/activity_main.xml",
      "values/themes.xml",
      "values/strings.xml"
    ],
    correcta: 3,
    explicacion: "res/values/strings.xml es el recurso estándar para almacenar todo el texto de la interfaz, esencial para el mantenimiento y la traducción.",
    categoria: "Conceptos Android"
  },
  {
    id: 32,
    pregunta: "En Kotlin, si se declara una variable con la palabra clave val, ¿qué característica clave de esa variable se está garantizando?",
    opciones: [
      "Que su tipo de dato debe ser especificado explícitamente",
      "Que es mutable y puede cambiar su valor en tiempo de ejecución",
      "Que es inmutable y su valor no puede ser reasignado después de la inicialización",
      "Que solo puede almacenar valores nulos (null)"
    ],
    correcta: 2,
    explicacion: "val se utiliza para declarar propiedades inmutables (Read-only), mientras que var se usa para propiedades mutables.",
    categoria: "Conceptos Android"
  },
  {
    id: 33,
    pregunta: "¿Cuál es el principal propósito de un ViewModel dentro del patrón de arquitectura MVVM en Android?",
    opciones: [
      "Realizar operaciones pesadas de red y base de datos en el hilo principal",
      "Actuar como la interfaz de usuario (la View) y manejar eventos de clic",
      "Almacenar y gestionar datos relacionados con la UI de manera que sobrevivan a los cambios de configuración (como la rotación)",
      "Declarar los permisos necesarios en el Manifest"
    ],
    correcta: 2,
    explicacion: "El ViewModel tiene como objetivo mantener el estado y la lógica de negocio de la UI, independiente del ciclo de vida de Activities/Fragments.",
    categoria: "Conceptos Android"
  },
  {
    id: 34,
    pregunta: "¿Qué elemento del ciclo de vida de una Activity es el responsable de inflar el layout y realizar la configuración inicial (por ejemplo, configurar el ViewModel)?",
    opciones: [
      "onStart()",
      "onResume()",
      "onCreate()",
      "onPause()"
    ],
    correcta: 2,
    explicacion: "onCreate() es la primera función de callback del ciclo de vida, donde se inicializan la mayoría de los componentes, incluyendo la llamada a setContentView().",
    categoria: "Conceptos Android"
  },

  // Bloque 5: RecyclerView Avanzado (10)
  {
    id: 35,
    pregunta: "¿Qué característica de configuración es marcada como 'CRÍTICA' en el build.gradle (Module: app) para el desarrollo moderno del RecyclerView?",
    opciones: [
      "targetSdk 34",
      "minSdk 24",
      "viewBinding true",
      "jvmTarget = '11'"
    ],
    correcta: 2,
    explicacion: "Habilitar viewBinding true es esencial para el desarrollo moderno, ya que proporciona las clases de binding tipadas y seguras, reemplazando findViewById().",
    categoria: "RecyclerView"
  },
  {
    id: 36,
    pregunta: "¿Cuál es el riesgo principal de definir la clase ViewHolder como una inner class dentro del RecyclerView.Adapter?",
    opciones: [
      "El ViewHolder pierde acceso a las vistas de su ítem",
      "Se genera un error de compilación inmediato",
      "Puede causar un Memory Leak (fuga de memoria) al mantener una referencia implícita al Adapter",
      "Impide la reutilización de vistas por parte del RecyclerView"
    ],
    correcta: 2,
    explicacion: "Una inner class mantiene una referencia implícita a su clase externa (el Adapter), impidiendo su recolección de basura.",
    categoria: "RecyclerView"
  },
  {
    id: 37,
    pregunta: "En el onCreateViewHolder, ¿cuál es el propósito de pasar parent y false en el método inflate() de View Binding?",
    opciones: [
      "Permite que el ViewHolder sea una inner class",
      "Evita el Memory Leak y asegura que se apliquen los LayoutParams correctos",
      "Optimiza el proceso de scrolling (desplazamiento) en listas largas",
      "Indica que el RecyclerView utilizará un GridLayoutManager"
    ],
    correcta: 1,
    explicacion: "Pasar parent permite el cálculo correcto de LayoutParams. Usar false evita el adjunto automático, dejando el control al RecyclerView.",
    categoria: "RecyclerView"
  },
  {
    id: 38,
    pregunta: "¿Cuál de los siguientes problemas se corrige en el bind del ViewHolder al reemplazar findViewById()?",
    opciones: [
      "Fallo de rendimiento al inflar la vista",
      "Inseguridad de tipo (Type Safety) y el riesgo de NullPointerException",
      "Exclusivamente la complejidad del código",
      "La lentitud en la carga inicial de datos"
    ],
    correcta: 1,
    explicacion: "findViewById() es inseguro porque devuelve null si el ID es incorrecto y requiere casting. View Binding resuelve esto en tiempo de compilación.",
    categoria: "RecyclerView"
  },
  {
    id: 39,
    pregunta: "En el bind de un ViewHolder, ¿por qué es necesario llamar a cbCompletada.setOnCheckedChangeListener(null) antes de asignar el nuevo valor de isChecked?",
    opciones: [
      "Es necesario para evitar que el listener se active al asignar el valor",
      "Es necesario para liberar la memoria del Adapter",
      "Es una optimización que solo se usa con View Binding",
      "Es un requisito de la clase CheckBox"
    ],
    correcta: 0,
    explicacion: "Al reutilizar el ViewHolder, si se asigna isChecked al estado de la nueva tarea, el listener anterior se activaría innecesariamente. Limpiarlo primero evita este callback no deseado.",
    categoria: "RecyclerView"
  },
  {
    id: 40,
    pregunta: "¿Qué componente debe ser modificado y notificado mediante notifyItemRemoved(position) cuando se elimina un elemento de una lista dinámica?",
    opciones: [
      "La Activity contenedora",
      "La lista de datos (tareas en este caso) dentro del Adapter",
      "El LayoutManager",
      "El ViewHolder específico"
    ],
    correcta: 1,
    explicacion: "Para que el Adapter refleje los cambios en la UI, primero se debe actualizar la fuente de datos (MutableList) y luego notificar al RecyclerView.",
    categoria: "RecyclerView"
  },
  {
    id: 41,
    pregunta: "Si quisiéramos mostrar los ítems en una cuadrícula de 2 columnas, ¿qué gestor de diseño se usaría?",
    opciones: [
      "LinearLayoutManager",
      "StaggeredGridLayoutManager",
      "GridLayoutManager",
      "ItemDecoration"
    ],
    correcta: 2,
    explicacion: "GridLayoutManager se utiliza específicamente para crear listas que se muestran en una cuadrícula bidimensional (filas y columnas).",
    categoria: "RecyclerView"
  },
  {
    id: 42,
    pregunta: "¿Cómo se comunica el evento de clic de un ítem de vuelta a la Activity o Fragment contenedor?",
    opciones: [
      "Mediante un Intent",
      "Mediante el método onItemClick pasado como función Lambda en el constructor del Adapter",
      "Mediante una propiedad public del ViewHolder",
      "Mediante una llamada a super.onBindViewHolder()"
    ],
    correcta: 1,
    explicacion: "La forma más limpia y moderna es pasar una función Lambda (el onItemClick) al constructor del Adapter y luego ejecutarla en el setOnClickListener del ViewHolder.",
    categoria: "RecyclerView"
  },
  {
    id: 43,
    pregunta: "¿Qué propiedad del TextView se manipula para agregar o quitar el efecto de tachado (strikethrough)?",
    opciones: [
      "android:textStyle",
      "TextView.setDecoration()",
      "TextView.paintFlags",
      "TextView.textColor"
    ],
    correcta: 2,
    explicacion: "La propiedad paintFlags del TextView es la que controla si el texto está tachado (Paint.STRIKE_THRU_TEXT_FLAG).",
    categoria: "RecyclerView"
  },
  {
    id: 44,
    pregunta: "¿Cuál de las siguientes es una práctica moderna correcta para pasar el contexto (Context) al LayoutInflater dentro del onCreateViewHolder?",
    opciones: [
      "LayoutInflater.from(this)",
      "LayoutInflater.from(parent.context)",
      "LayoutInflater.from(rootView.context)",
      "LayoutInflater.from(getSystemContext())"
    ],
    correcta: 1,
    explicacion: "parent.context es el método preferido porque utiliza el Context del ViewGroup que contiene el item.",
    categoria: "RecyclerView"
  },

  // Bloque 6: Git y GitHub (10)
  {
    id: 45,
    pregunta: "¿Cuál es el comando correcto que debe utilizar un miembro del equipo para descargar por primera vez el proyecto completo desde GitHub a su máquina local?",
    opciones: [
      "git pull origin main",
      "git checkout -b new-repo",
      "git clone [url]",
      "git push origin main"
    ],
    correcta: 2,
    explicacion: "git clone [url] descarga una copia inicial completa del repositorio remoto.",
    categoria: "Git y GitHub"
  },
  {
    id: 46,
    pregunta: "¿Qué par de comandos se utiliza para crear y cambiar a una nueva rama de trabajo simultáneamente?",
    opciones: [
      "git add . y git commit",
      "git branch feature/checkout y git merge",
      "git checkout main y git pull",
      "git checkout -b feature/checkout"
    ],
    correcta: 3,
    explicacion: "git checkout -b [nombre-rama] es el comando que crea y cambia a la nueva rama.",
    categoria: "Git y GitHub"
  },
  {
    id: 47,
    pregunta: "Si un desarrollador ha modificado varios archivos localmente, ¿qué comando debe ejecutar antes de confirmar (commit) los cambios en su historial local?",
    opciones: [
      "git push origin [rama]",
      "git add .",
      "git pull origin [rama]",
      "git status"
    ],
    correcta: 1,
    explicacion: "git add . mueve los cambios al área de preparación (staging area), lo cual es un paso obligatorio antes de confirmar.",
    categoria: "Git y GitHub"
  },
  {
    id: 48,
    pregunta: "¿Qué comando se utiliza para guardar los cambios en el historial local de Git, añadiendo un mensaje descriptivo?",
    opciones: [
      "git add .",
      "git commit -m \"Mensaje\"",
      "git status",
      "git push origin [rama]"
    ],
    correcta: 1,
    explicacion: "git commit -m \"Mensaje\" es el comando para guardar el estado del proyecto en el historial de tu rama local.",
    categoria: "Git y GitHub"
  },
  {
    id: 49,
    pregunta: "Después de confirmar cambios localmente (commit), ¿qué comando se utiliza para subir esa nueva versión del código a GitHub?",
    opciones: [
      "git pull origin [rama]",
      "git push origin [rama]",
      "git merge [rama]",
      "git checkout [rama]"
    ],
    correcta: 1,
    explicacion: "git push origin [rama] sube los commits locales a la versión remota del repositorio en GitHub.",
    categoria: "Git y GitHub"
  },
  {
    id: 50,
    pregunta: "¿Cuál es el mecanismo que se utiliza en GitHub para solicitar formalmente que el código de una rama de desarrollo sea revisado y fusionado con la rama principal?",
    opciones: [
      "Issue",
      "Commit",
      "Pull Request (PR)",
      "Milestone"
    ],
    correcta: 2,
    explicacion: "El Pull Request (PR) es el mecanismo estándar para la revisión de código y la solicitud de fusión.",
    categoria: "Git y GitHub"
  },
  {
    id: 51,
    pregunta: "Antes de crear una nueva rama de trabajo, ¿qué comando es crucial para descargar las últimas actualizaciones de la rama principal?",
    opciones: [
      "git push origin main",
      "git status",
      "git pull origin main",
      "git add ."
    ],
    correcta: 2,
    explicacion: "git pull origin main descarga e integra la versión más reciente del código principal.",
    categoria: "Git y GitHub"
  },
  {
    id: 52,
    pregunta: "Si dos miembros del equipo modifican las mismas líneas de código en el mismo archivo, ¿qué puede surgir al intentar fusionar las ramas?",
    opciones: [
      "Una advertencia de git add .",
      "Un Pull Request automático",
      "Un conflicto de fusión (merge conflict)",
      "Una solicitud para eliminar la rama"
    ],
    correcta: 2,
    explicacion: "Un conflicto de fusión ocurre cuando Git no puede resolver automáticamente las modificaciones concurrentes en las mismas líneas.",
    categoria: "Git y GitHub"
  },
  {
    id: 53,
    pregunta: "¿Qué herramienta o función de GitHub se recomienda usar para la asignación de tareas y la discusión de problemas en el equipo?",
    opciones: [
      "Archivo README.md",
      "El comando git clone",
      "Issues",
      "Pull Requests"
    ],
    correcta: 2,
    explicacion: "Los Issues en GitHub son la herramienta diseñada para el seguimiento de tareas, errores y discusiones.",
    categoria: "Git y GitHub"
  },
  {
    id: 54,
    pregunta: "¿Cuál de los siguientes comandos te permite cambiar tu contexto de trabajo de vuelta a la rama principal?",
    opciones: [
      "git checkout -b main",
      "git checkout main",
      "git branch main",
      "git pull main"
    ],
    correcta: 1,
    explicacion: "git checkout main cambia al contexto de la rama principal (asumiendo que ya existe).",
    categoria: "Git y GitHub"
  },

  // Bloque 7: Lenguaje Dart (10)
  {
    id: 55,
    pregunta: "¿Cuál es el propósito principal de la compilación JIT (Just-In-Time) en Dart, y para qué etapa del desarrollo es ideal?",
    opciones: [
      "Compilar a código máquina nativo para un arranque más rápido en producción",
      "Permitir el 'Hot Reload' y las iteraciones rápidas durante la fase de desarrollo",
      "Aislar las operaciones intensivas de la CPU en un hilo separado (Isolate)",
      "Convertir el código a JavaScript para su ejecución en navegadores web"
    ],
    correcta: 1,
    explicacion: "JIT permite Hot Reload y desarrollo iterativo rápido, compilando el código sobre la marcha durante el desarrollo.",
    categoria: "Lenguaje Dart"
  },
  {
    id: 56,
    pregunta: "Señala la principal diferencia en el uso y propósito entre las palabras clave final y const en Dart.",
    opciones: [
      "Ambas son sinónimos y se pueden usar indistintamente para cualquier constante",
      "final se asigna una única vez en tiempo de ejecución, mientras que const debe ser una constante en tiempo de compilación",
      "const solo se usa con números y final solo con objetos de clase",
      "final se utiliza para variables mutables y const para variables inmutables"
    ],
    correcta: 1,
    explicacion: "final permite asignar valores en tiempo de ejecución (una sola vez), mientras const requiere valores conocidos en tiempo de compilación.",
    categoria: "Lenguaje Dart"
  },
  {
    id: 57,
    pregunta: "Dada la declaración String? usuario;, ¿qué operadores de Null Safety usarías para acceder a la propiedad length solo si usuario no es nulo, y asignar el texto 'Invitado' si es nulo?",
    opciones: [
      "Operador: ! y Valor por defecto: ??",
      "Operador: ?? y Valor por defecto: ?",
      "Operador: ?. y Valor por defecto: ??",
      "Operador: !. y Valor por defecto: ??="
    ],
    correcta: 2,
    explicacion: "El operador ?. accede condicionalmente a propiedades, y ?? proporciona un valor por defecto si el resultado es nulo.",
    categoria: "Lenguaje Dart"
  },
  {
    id: 58,
    pregunta: "¿Cuál es el propósito principal de utilizar un mixin en la Programación Orientada a Objetos de Dart, usando la palabra clave with?",
    opciones: [
      "Establecer la herencia de una clase base (equivalente a extends)",
      "Añadir funcionalidades (métodos y propiedades) a una clase sin depender de la herencia tradicional de una clase base",
      "Implementar una interfaz de manera explícita (equivalente a implements)",
      "Crear una instancia única de una clase (Singleton)"
    ],
    correcta: 1,
    explicacion: "Los mixins permiten reutilizar código de clases en múltiples jerarquías sin usar herencia tradicional.",
    categoria: "Lenguaje Dart"
  },
  {
    id: 59,
    pregunta: "En la declaración de funciones, ¿cuál es la principal ventaja de usar parámetros nombrados entre llaves {}?",
    opciones: [
      "Son obligatorios por defecto y no pueden tener valores predeterminados",
      "Permiten que el compilador infiera automáticamente el tipo de retorno",
      "Mejoran la legibilidad al especificar el nombre del argumento al llamar a la función, permitiendo omitir no obligatorios",
      "Fuerzan al desarrollador a utilizar el operador ! (bang operator)"
    ],
    correcta: 2,
    explicacion: "Los parámetros nombrados mejoran la legibilidad del código al hacer explícito el propósito de cada argumento.",
    categoria: "Lenguaje Dart"
  },
  {
    id: 60,
    pregunta: "¿Cuál es el caso de uso más común y fundamental del constructor factory en Dart?",
    opciones: [
      "Crear una nueva instancia de la clase de manera simple (el uso predeterminado del constructor)",
      "Devolver siempre una única instancia de la clase ya existente (patrón Singleton)",
      "Crear una clase que no puede ser instanciada directamente (clase abstracta)",
      "Implementar una interfaz de forma implícita"
    ],
    correcta: 1,
    explicacion: "Los constructores factory son ideales para implementar el patrón Singleton, devolviendo siempre la misma instancia.",
    categoria: "Lenguaje Dart"
  },
  {
    id: 61,
    pregunta: "Al realizar operaciones intensivas de CPU (CPU-bound), ¿qué mecanismo de concurrencia se debe utilizar para evitar el bloqueo del hilo principal?",
    opciones: [
      "Futures y async/await",
      "El operador Cascade (..)",
      "Isolates",
      "Extensions"
    ],
    correcta: 2,
    explicacion: "Los Isolates permiten ejecutar código en hilos separados con memoria aislada, ideal para operaciones CPU-intensive.",
    categoria: "Lenguaje Dart"
  },
  {
    id: 62,
    pregunta: "En Dart, ¿cuál es el propósito principal de la palabra clave yield dentro de una función de tipo sync* o async* (Generators)?",
    opciones: [
      "Lanzar una excepción personalizada si la función encuentra un error",
      "Forzar una pausa en la ejecución del código asíncrono, similar a Future.delayed",
      "Devolver un valor, 'pausar' la función y reanudar la ejecución cuando se solicita el siguiente elemento (evaluación lazy)",
      "Marcar la función como asíncrona, similar a la palabra clave async"
    ],
    correcta: 2,
    explicacion: "yield permite crear generadores que producen valores bajo demanda, pausando y reanudando la ejecución.",
    categoria: "Lenguaje Dart"
  },
  {
    id: 63,
    pregunta: "Si necesitas almacenar una colección de valores únicos sin orden específico, y quieres garantizar que no haya elementos duplicados, ¿qué tipo de colección de Dart debes utilizar?",
    opciones: [
      "List<dynamic>",
      "Map<String, dynamic>",
      "Set<T>",
      "Iterable<T>"
    ],
    correcta: 2,
    explicacion: "Set es una colección que automáticamente elimina duplicados y garantiza unicidad de elementos.",
    categoria: "Lenguaje Dart"
  },
  {
    id: 64,
    pregunta: "¿Cuál es el tipo de comentario que es procesado por la herramienta dart doc para generar documentación HTML del código fuente?",
    opciones: [
      "Comentario de una línea (//)",
      "Comentario multilínea (/* ... */)",
      "Comentario de documentación (///)",
      "Comentario de bloque (/* ... */)"
    ],
    correcta: 2,
    explicacion: "Los comentarios con triple slash (///) son comentarios de documentación que dart doc procesa para generar documentación.",
    categoria: "Lenguaje Dart"
  },

  // Bloque 8: Introducción a Flutter (10)
  {
    id: 65,
    pregunta: "¿Cuál es el propósito principal de la compilación AOT (Ahead-Of-Time) en Dart/Flutter, y para qué etapa es crucial?",
    opciones: [
      "Permitir cambios de código instantáneos manteniendo el estado (Hot Reload) durante el desarrollo",
      "Compilar el código a código máquina nativo antes de la ejecución para un arranque más rápido y menor consumo de CPU en producción",
      "Gestionar el árbol de dependencias del proyecto en el archivo pubspec.yaml",
      "Permitir la comunicación asíncrona entre diferentes componentes de la aplicación"
    ],
    correcta: 1,
    explicacion: "AOT compila el código a nativo antes de la ejecución, optimizando el rendimiento en producción.",
    categoria: "Introducción Flutter"
  },
  {
    id: 66,
    pregunta: "¿Qué widget de Flutter es análogo al andamiaje de una casa, ya que proporciona la estructura visual estándar de una pantalla?",
    opciones: [
      "MaterialApp",
      "Container",
      "Scaffold",
      "Center"
    ],
    correcta: 2,
    explicacion: "Scaffold proporciona la estructura básica de Material Design: AppBar, body, FloatingActionButton, etc.",
    categoria: "Introducción Flutter"
  },
  {
    id: 67,
    pregunta: "¿Cuál es el comando correcto de la CLI de Flutter para generar un paquete optimizado de Android (AAB) para su distribución en Google Play Store?",
    opciones: [
      "flutter build apk",
      "flutter build android-bundle",
      "flutter build web",
      "flutter build appbundle"
    ],
    correcta: 3,
    explicacion: "flutter build appbundle genera el archivo .aab optimizado para Google Play Store.",
    categoria: "Introducción Flutter"
  },
  {
    id: 68,
    pregunta: "Una de las mayores ventajas del Hot Reload sobre el Hot Restart es que:",
    opciones: [
      "El Hot Reload compila a código nativo (AOT) para un mejor rendimiento",
      "El Hot Reload reinicia toda la aplicación y es ideal cuando cambian las variables globales",
      "El Hot Reload permite ver los cambios al instante, manteniendo el estado actual de la aplicación",
      "El Hot Reload solo funciona en navegadores web, mientras que el Hot Restart funciona en móvil"
    ],
    correcta: 2,
    explicacion: "Hot Reload aplica cambios instantáneamente preservando el estado de la aplicación, mejorando la productividad.",
    categoria: "Introducción Flutter"
  },
  {
    id: 69,
    pregunta: "¿Qué archivo dentro del proyecto Flutter se utiliza para definir las dependencias externas y los assets?",
    opciones: [
      "main.dart",
      "pubspec.yaml",
      "build.gradle",
      "AndroidManifest.xml"
    ],
    correcta: 1,
    explicacion: "pubspec.yaml es el archivo de configuración central donde se definen dependencias, assets y metadatos del proyecto.",
    categoria: "Introducción Flutter"
  },
  {
    id: 70,
    pregunta: "¿Cuál es la principal ventaja de que Flutter utilice su propio motor de renderizado (Skia) en lugar de depender de los componentes nativos?",
    opciones: [
      "Permite que la aplicación sea más pequeña en tamaño (menos KB)",
      "Garantiza una consistencia visual perfecta de la UI en todas las plataformas sin las inconsistencias entre los sistemas operativos",
      "Mejora el acceso directo a las APIs de bajo nivel de cada sistema operativo (GPS, cámara)",
      "Elimina la necesidad de usar el lenguaje Dart, permitiendo el uso de JavaScript"
    ],
    correcta: 1,
    explicacion: "Skia permite que Flutter renderice la UI de forma idéntica en todas las plataformas, garantizando consistencia visual.",
    categoria: "Introducción Flutter"
  },
  {
    id: 71,
    pregunta: "Según los requisitos, ¿qué es esencialmente necesario para generar un binario ejecutable (.ipa) para la distribución de Flutter en dispositivos iOS?",
    opciones: [
      "Tener instalado el JDK 11 o superior y una cuenta de Google Play Developer",
      "Tener instalado el SDK de Android y el Dart DevTools",
      "Tener instalado Xcode en macOS y una cuenta de desarrollador de Apple ($99/año)",
      "Ejecutar el comando flutter build web con el renderizador CanvasKit"
    ],
    correcta: 2,
    explicacion: "Para compilar aplicaciones iOS se requiere Xcode (solo en macOS) y una cuenta de desarrollador de Apple.",
    categoria: "Introducción Flutter"
  },
  {
    id: 72,
    pregunta: "¿Cuál es la función principal del widget MaterialApp en el árbol de widgets de una aplicación Flutter?",
    opciones: [
      "Proporcionar la funcionalidad de scroll y el manejo de gestos táctiles",
      "Definir la configuración global de la aplicación, como el tema, las rutas de navegación y el título de la app",
      "Realizar la compilación del código Dart a código nativo AOT",
      "Servir como el contenedor donde se cargan los assets de imágenes y fuentes"
    ],
    correcta: 1,
    explicacion: "MaterialApp es el widget raíz que configura el tema, navegación, localización y otros aspectos globales de la aplicación.",
    categoria: "Introducción Flutter"
  },
  {
    id: 73,
    pregunta: "Si quieres añadir un nuevo paquete, por ejemplo provider, a tu proyecto Flutter utilizando la CLI, ¿cuál es el comando optimizado y directo que debes usar?",
    opciones: [
      "flutter pub get provider",
      "flutter pub update provider",
      "flutter add provider",
      "flutter pub add provider"
    ],
    correcta: 3,
    explicacion: "flutter pub add [paquete] añade automáticamente la dependencia a pubspec.yaml y descarga el paquete.",
    categoria: "Introducción Flutter"
  },
  {
    id: 74,
    pregunta: "¿Qué herramienta integrada de Flutter te permite inspeccionar la jerarquía de widgets, analizar el rendimiento de la UI en tiempo real y detectar fugas de memoria?",
    opciones: [
      "Android Studio Emulator",
      "Dart DevTools",
      "Xcode",
      "Skia"
    ],
    correcta: 1,
    explicacion: "Dart DevTools es la suite de herramientas de desarrollo que incluye inspector de widgets, profiler, debugger y más.",
    categoria: "Introducción Flutter"
  },

  // Bloque 9: Widgets y Estado en Flutter (10)
  {
    id: 75,
    pregunta: "En Flutter, ¿qué principio fundamental define cómo se construye la interfaz de usuario?",
    opciones: [
      "La UI se construye mediante un puente de código nativo (Android/iOS) que interactúa con Dart",
      "La UI se basa en un sistema de plantillas HTML y CSS importadas",
      "Absolutamente todo lo que se ve o afecta a la pantalla es un widget que se combina en un árbol jerárquico",
      "La interfaz se construye únicamente con clases abstractas y métodos de render nativo"
    ],
    correcta: 2,
    explicacion: "En Flutter, todo es un widget: desde botones hasta padding, layouts y animaciones, organizados en un árbol.",
    categoria: "Widgets y Estado"
  },
  {
    id: 76,
    pregunta: "¿Cuál es el propósito principal del método setState() en un StatefulWidget?",
    opciones: [
      "Inicializar las variables de estado por primera vez",
      "Marcar el estado del widget como 'sucio' para forzar a Flutter a reconstruir únicamente ese widget en el árbol",
      "Liberar los recursos de la clase State justo antes de que el widget sea eliminado",
      "Definir la alineación principal de los widgets hijos dentro de un Column"
    ],
    correcta: 1,
    explicacion: "setState() notifica a Flutter que el estado interno ha cambiado y que debe reconstruir el widget para reflejar los nuevos datos.",
    categoria: "Widgets y Estado"
  },
  {
    id: 77,
    pregunta: "¿Qué tipo de widget elegirías para representar un botón que siempre muestra el texto 'Enviar' y no necesita recordar si fue pulsado o no?",
    opciones: [
      "StatefulWidget",
      "StatelessWidget",
      "CustomScaffold",
      "BuildContext"
    ],
    correcta: 1,
    explicacion: "StatelessWidget es inmutable y es la opción más eficiente para elementos de UI cuya apariencia no cambia después de su creación.",
    categoria: "Widgets y Estado"
  },
  {
    id: 78,
    pregunta: "¿Qué widget de diseño se utiliza principalmente para organizar una lista de widgets horizontalmente?",
    opciones: [
      "Column",
      "ListView.builder",
      "Stack",
      "Row"
    ],
    correcta: 3,
    explicacion: "Row organiza sus widgets hijos en una fila horizontal, de izquierda a derecha.",
    categoria: "Widgets y Estado"
  },
  {
    id: 79,
    pregunta: "¿Cuál es el objetivo principal de crear un Widget Personalizado (Custom Widget) a partir de un StatelessWidget?",
    opciones: [
      "Garantizar que se manejen correctamente los eventos de ciclo de vida (initState, dispose)",
      "Forzar la mutabilidad del widget para que pueda cambiar de estado",
      "Aumentar la reutilización de código, mejorar la legibilidad y simplificar el mantenimiento del diseño repetitivo",
      "Implementar el motor de renderizado Skia para mejorar el rendimiento"
    ],
    correcta: 2,
    explicacion: "Los Custom Widgets encapsulan diseños repetitivos, mejorando la reutilización, legibilidad y mantenimiento del código.",
    categoria: "Widgets y Estado"
  },
  {
    id: 80,
    pregunta: "Si estás diseñando un elemento que requiere superponer texto sobre una imagen de fondo, ¿qué widget de layout es el más adecuado?",
    opciones: [
      "Column",
      "Row",
      "Stack",
      "Expanded"
    ],
    correcta: 2,
    explicacion: "Stack permite colocar widgets unos encima de otros en capas, ideal para superposiciones.",
    categoria: "Widgets y Estado"
  },
  {
    id: 81,
    pregunta: "¿Cuál es la principal diferencia funcional entre los widgets Expanded y Flexible cuando se usan dentro de un Row o Column?",
    opciones: [
      "Expanded permite que el widget crezca y se encoja, mientras que Flexible lo mantiene fijo",
      "Expanded toma todo el espacio disponible que no está ocupado, mientras que Flexible solo ocupa el espacio necesario pero permite el crecimiento",
      "Flexible solo funciona si se le asigna un flex mayor a 1",
      "Expanded solo se usa con StatelessWidget"
    ],
    correcta: 1,
    explicacion: "Expanded fuerza al widget a ocupar todo el espacio restante. Flexible permite que ocupe solo el espacio necesario, pero puede crecer.",
    categoria: "Widgets y Estado"
  },
  {
    id: 82,
    pregunta: "En la estructura básica de una aplicación, el widget Scaffold generalmente se anida directamente dentro de:",
    opciones: [
      "Un Center",
      "Un Text",
      "El home de un MaterialApp",
      "El body de otro Scaffold"
    ],
    correcta: 2,
    explicacion: "Scaffold se establece típicamente como el valor del parámetro home en MaterialApp.",
    categoria: "Widgets y Estado"
  },
  {
    id: 83,
    pregunta: "¿Qué widget utilizarías para mostrar eficientemente una lista de 500 productos, asegurando que solo se rendericen los ítems visibles en la pantalla?",
    opciones: [
      "Row con SingleChildScrollView",
      "ListView.builder",
      "Column con SizedBox",
      "Stack"
    ],
    correcta: 1,
    explicacion: "ListView.builder crea elementos bajo demanda (lazy loading), optimizando el rendimiento y la memoria en listas largas.",
    categoria: "Widgets y Estado"
  },
  {
    id: 84,
    pregunta: "¿Cuál de los siguientes métodos es parte del ciclo de vida de un StatefulWidget y se utiliza para liberar recursos justo antes de que el widget sea eliminado permanentemente?",
    opciones: [
      "initState()",
      "build()",
      "setState()",
      "dispose()"
    ],
    correcta: 3,
    explicacion: "dispose() es el último método del ciclo de vida de un StatefulWidget y se utiliza para limpiar recursos y evitar fugas de memoria.",
    categoria: "Widgets y Estado"
  }
];
