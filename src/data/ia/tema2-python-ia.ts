import type { Pregunta } from "../types";

export const tema2PythonIaInfo = {
  id: "tema2-python-ia",
  titulo: "Tema 2 – Python para IA",
  descripcion:
    "Fundamentos de Python aplicados a IA: entorno, tipos de datos, estructuras, funciones y librerías básicas.",
  temas: [
    "Python interpretado",
    "JupyterLab",
    "Tipos y estructuras",
    "Funciones básicas",
    "Datos vectoriales",
  ],
  color: "from-violet-500 to-purple-600",
  icono: "🐍",
};

export const preguntasTema2PythonIa: Pregunta[] = [
  {
    id: 16,
    pregunta: "Python se considera un lenguaje:",
    opciones: ["Compilado puro", "Interpretado", "Ensamblador", "De bajo nivel"],
    correcta: 1,
    explicacion:
      "Python se ejecuta principalmente de forma interpretada, facilitando pruebas rápidas y desarrollo iterativo.",
    categoria: "Python para IA",
  },
  {
    id: 17,
    pregunta: "¿Qué archivo genera Python internamente al ejecutar código?",
    opciones: [".exe", ".class", ".pyc", ".bin"],
    correcta: 2,
    explicacion:
      "Python puede generar bytecode en archivos .pyc para acelerar ejecuciones posteriores.",
    categoria: "Python para IA",
  },
  {
    id: 18,
    pregunta:
      "¿Qué entorno es especialmente recomendable para aprender IA paso a paso?",
    opciones: ["Bloc de notas", "JupyterLab", "Consola MS-DOS", "Compilador C"],
    correcta: 1,
    explicacion:
      "JupyterLab permite ejecutar código por celdas y visualizar resultados de forma progresiva.",
    categoria: "Python para IA",
  },
  {
    id: 19,
    pregunta: "¿Qué combinación de teclas ejecuta una celda en JupyterLab?",
    opciones: ["Ctrl + Enter", "Alt + Enter", "Shift + Enter", "Tab + Enter"],
    correcta: 2,
    explicacion:
      "En JupyterLab, Shift + Enter ejecuta la celda actual y avanza a la siguiente.",
    categoria: "Python para IA",
  },
  {
    id: 20,
    pregunta: "¿Qué función muestra información por pantalla en Python?",
    opciones: ["show()", "echo()", "print()", "display()"],
    correcta: 2,
    explicacion: "La función estándar para mostrar salida en consola es print().",
    categoria: "Python para IA",
  },
  {
    id: 21,
    pregunta: "¿Qué tipo de dato es el valor True en Python?",
    opciones: ["String", "Integer", "Boolean", "Float"],
    correcta: 2,
    explicacion:
      "True y False pertenecen al tipo bool, usado para lógica condicional.",
    categoria: "Python para IA",
  },
  {
    id: 22,
    pregunta: "¿Cuál de las siguientes estructuras permite guardar pares clave–valor?",
    opciones: ["Lista", "Tupla", "Diccionario", "Array"],
    correcta: 2,
    explicacion:
      "Los diccionarios en Python almacenan datos como pares clave-valor.",
    categoria: "Python para IA",
  },
  {
    id: 23,
    pregunta: "¿Qué función devuelve el número de elementos de una lista?",
    opciones: ["sum()", "size()", "len()", "count()"],
    correcta: 2,
    explicacion:
      "len() devuelve la longitud de listas, tuplas, cadenas y otras colecciones.",
    categoria: "Python para IA",
  },
  {
    id: 24,
    pregunta: "¿Qué función calcula la suma de los valores de una lista?",
    opciones: ["total()", "add()", "sum()", "len()"],
    correcta: 2,
    explicacion:
      "sum() agrega los elementos numéricos de una lista y devuelve el total.",
    categoria: "Python para IA",
  },
  {
    id: 25,
    pregunta: "¿Qué estructura se utiliza para recorrer elementos uno a uno?",
    opciones: ["Condicional if", "Función", "Bucle for", "Diccionario"],
    correcta: 2,
    explicacion:
      "El bucle for permite iterar sobre cada elemento de una secuencia.",
    categoria: "Python para IA",
  },
  {
    id: 26,
    pregunta:
      "¿Qué operador se usa para comparar si un valor es mayor o igual que otro?",
    opciones: ["=>", ">=", "==", "!="],
    correcta: 1,
    explicacion: "El operador >= evalúa si el operando izquierdo es mayor o igual.",
    categoria: "Python para IA",
  },
  {
    id: 27,
    pregunta: "¿Qué librería se utiliza para generar números aleatorios?",
    opciones: ["math", "random", "numpy", "pandas"],
    correcta: 1,
    explicacion:
      "La librería estándar random incluye funciones para generar valores aleatorios.",
    categoria: "Python para IA",
  },
  {
    id: 28,
    pregunta: "¿Qué función devuelve el valor máximo de una lista?",
    opciones: ["top()", "high()", "max()", "greater()"],
    correcta: 2,
    explicacion: "max() devuelve el elemento mayor dentro de una colección iterable.",
    categoria: "Python para IA",
  },
  {
    id: 29,
    pregunta:
      "¿Qué tipo de estructura se usa para representar datos tabulares en IA?",
    opciones: ["Texto plano", "Vectores y matrices", "Reglas lógicas", "Grafos"],
    correcta: 1,
    explicacion:
      "En IA y análisis numérico, los datos tabulares se representan como vectores y matrices.",
    categoria: "Python para IA",
  },
  {
    id: 30,
    pregunta: "¿Qué objetivo tiene convertir los datos en vectores en ML/DL?",
    opciones: [
      "Hacerlos más legibles",
      "Reducir el tamaño del programa",
      "Permitir que los modelos matemáticos aprendan",
      "Evitar el uso de librerías",
    ],
    correcta: 2,
    explicacion:
      "Los modelos de ML/DL operan con representaciones numéricas, por eso vectorizar datos es fundamental.",
    categoria: "Python para IA",
  },
];
