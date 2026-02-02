import type { Pregunta } from './types';

export const preguntasUnidad3: Pregunta[] = [
  // Sintaxis básica y variables (5)
  {
    id: 1,
    pregunta: "¿Cuál es la palabra clave para declarar una variable que no puede ser reasignada en Dart?",
    opciones: ["var", "const", "final", "let"],
    correcta: 2,
    explicacion: "La palabra clave 'final' declara una variable que solo puede ser asignada una vez y no puede ser reasignada posteriormente.",
    categoria: "Variables"
  },
  {
    id: 2,
    pregunta: "¿Qué diferencia hay entre 'const' y 'final' en Dart?",
    opciones: [
      "No hay diferencia, son sinónimos",
      "'const' es para tiempo de compilación, 'final' para tiempo de ejecución",
      "'final' es más rápido que 'const'",
      "'const' solo funciona con números"
    ],
    correcta: 1,
    explicacion: "'const' crea constantes en tiempo de compilación (debe conocerse el valor antes de ejecutar), mientras 'final' permite asignar valores en tiempo de ejecución.",
    categoria: "Variables"
  },
  {
    id: 3,
    pregunta: "¿Cómo se declara una variable con tipo inferido en Dart?",
    opciones: ["auto nombre = 'Juan'", "var nombre = 'Juan'", "let nombre = 'Juan'", "dynamic nombre = 'Juan'"],
    correcta: 1,
    explicacion: "La palabra clave 'var' permite que Dart infiera automáticamente el tipo de la variable según el valor asignado.",
    categoria: "Variables"
  },
  {
    id: 4,
    pregunta: "¿Cuál es el valor por defecto de una variable no inicializada en Dart con null safety?",
    opciones: ["0", "''", "null", "No compila sin inicializar"],
    correcta: 3,
    explicacion: "Con null safety activado, las variables no nulables deben ser inicializadas antes de usarse, de lo contrario el código no compila.",
    categoria: "Variables"
  },
  {
    id: 5,
    pregunta: "¿Cómo se declara una variable que puede contener null en Dart?",
    opciones: ["String nombre = null", "String? nombre", "nullable String nombre", "String nombre?"],
    correcta: 1,
    explicacion: "El operador '?' después del tipo indica que la variable puede contener null (nullable type).",
    categoria: "Variables"
  },

  // Tipos de datos y colecciones (5)
  {
    id: 6,
    pregunta: "¿Cuál NO es un tipo de dato básico en Dart?",
    opciones: ["int", "double", "float", "bool"],
    correcta: 2,
    explicacion: "Dart no tiene tipo 'float'. Para números decimales se usa 'double' que es de 64 bits.",
    categoria: "Tipos de datos"
  },
  {
    id: 7,
    pregunta: "¿Cómo se crea una lista vacía de tipo String en Dart?",
    opciones: ["List<String> lista = []", "var lista = new List<String>()", "String[] lista = []", "list<String> lista = []"],
    correcta: 0,
    explicacion: "La sintaxis correcta es List<String> lista = [] o var lista = <String>[].",
    categoria: "Colecciones"
  },
  {
    id: 8,
    pregunta: "¿Qué estructura de datos en Dart NO permite elementos duplicados?",
    opciones: ["List", "Map", "Set", "Queue"],
    correcta: 2,
    explicacion: "Set es una colección que solo almacena elementos únicos, descartando automáticamente los duplicados.",
    categoria: "Colecciones"
  },
  {
    id: 9,
    pregunta: "¿Cómo se accede al valor de un Map en Dart?",
    opciones: ["map.get('clave')", "map['clave']", "map.value('clave')", "map->clave"],
    correcta: 1,
    explicacion: "En Dart se usa la notación de corchetes map['clave'] para acceder a valores del Map.",
    categoria: "Colecciones"
  },
  {
    id: 10,
    pregunta: "¿Cuál es la diferencia entre 'num' e 'int' en Dart?",
    opciones: [
      "Son lo mismo",
      "'num' es la superclase de 'int' y 'double'",
      "'num' solo acepta enteros positivos",
      "'int' es más rápido que 'num'"
    ],
    correcta: 1,
    explicacion: "'num' es el tipo padre que engloba tanto 'int' como 'double', permitiendo almacenar cualquier número.",
    categoria: "Tipos de datos"
  },

  // Funciones y parámetros (5)
  {
    id: 11,
    pregunta: "¿Cómo se define un parámetro opcional con nombre en Dart?",
    opciones: [
      "void funcion(String? nombre)",
      "void funcion({String nombre})",
      "void funcion([String nombre])",
      "void funcion(optional String nombre)"
    ],
    correcta: 1,
    explicacion: "Los parámetros con nombre se definen entre llaves {} y se llaman especificando el nombre: funcion(nombre: 'valor').",
    categoria: "Funciones"
  },
  {
    id: 12,
    pregunta: "¿Qué es una arrow function en Dart?",
    opciones: [
      "Una función que retorna una flecha",
      "Una función de una sola expresión con sintaxis =>",
      "Una función recursiva",
      "Una función que no retorna nada"
    ],
    correcta: 1,
    explicacion: "Las arrow functions usan => para funciones de una sola expresión: int suma(a, b) => a + b;",
    categoria: "Funciones"
  },
  {
    id: 13,
    pregunta: "¿Cómo se define un valor por defecto para un parámetro en Dart?",
    opciones: [
      "void saludar(String nombre = 'Usuario')",
      "void saludar(String nombre := 'Usuario')",
      "void saludar(default String nombre = 'Usuario')",
      "void saludar(String nombre || 'Usuario')"
    ],
    correcta: 0,
    explicacion: "Se usa el operador = para asignar valores por defecto a parámetros opcionales.",
    categoria: "Funciones"
  },
  {
    id: 14,
    pregunta: "¿Qué tipo de retorno indica que una función no devuelve nada?",
    opciones: ["null", "None", "void", "empty"],
    correcta: 2,
    explicacion: "'void' indica que la función no retorna ningún valor.",
    categoria: "Funciones"
  },
  {
    id: 15,
    pregunta: "¿Qué son los parámetros posicionales opcionales en Dart?",
    opciones: [
      "Parámetros que van entre llaves {}",
      "Parámetros que van entre corchetes []",
      "Parámetros que empiezan con ?",
      "Parámetros con la palabra optional"
    ],
    correcta: 1,
    explicacion: "Los parámetros posicionales opcionales se definen entre corchetes [] y se pasan en orden sin nombre.",
    categoria: "Funciones"
  },

  // Programación Orientada a Objetos (5)
  {
    id: 16,
    pregunta: "¿Cómo se define un constructor en Dart?",
    opciones: [
      "constructor Clase() {}",
      "def __init__(self)",
      "Clase() {}",
      "new Clase() {}"
    ],
    correcta: 2,
    explicacion: "El constructor en Dart tiene el mismo nombre que la clase: class Persona { Persona() {} }",
    categoria: "POO"
  },
  {
    id: 17,
    pregunta: "¿Qué es un constructor con nombre en Dart?",
    opciones: [
      "Un constructor que acepta parámetros con nombre",
      "Un constructor con un identificador adicional después del nombre de la clase",
      "Un constructor privado",
      "Un constructor que no necesita parámetros"
    ],
    correcta: 1,
    explicacion: "Los constructores con nombre permiten múltiples constructores: Persona.vacio() o Persona.fromJson(json).",
    categoria: "POO"
  },
  {
    id: 18,
    pregunta: "¿Cómo se hace un atributo privado en Dart?",
    opciones: [
      "Usando la palabra private",
      "Prefijando con guion bajo _",
      "Usando @private",
      "Usando protected"
    ],
    correcta: 1,
    explicacion: "En Dart, los miembros privados se prefijan con _ (guion bajo). La privacidad es a nivel de biblioteca.",
    categoria: "POO"
  },
  {
    id: 19,
    pregunta: "¿Cuál es la sintaxis correcta para heredar de una clase en Dart?",
    opciones: [
      "class Hijo inherits Padre",
      "class Hijo : Padre",
      "class Hijo extends Padre",
      "class Hijo <- Padre"
    ],
    correcta: 2,
    explicacion: "La palabra clave 'extends' se usa para herencia: class Estudiante extends Persona {}",
    categoria: "POO"
  },
  {
    id: 20,
    pregunta: "¿Qué palabra clave se usa para implementar una interfaz en Dart?",
    opciones: ["interface", "implements", "extends", "with"],
    correcta: 1,
    explicacion: "'implements' obliga a la clase a implementar todos los métodos definidos en la interfaz.",
    categoria: "POO"
  },

  // Control de flujo y operadores (5)
  {
    id: 21,
    pregunta: "¿Qué hace el operador ?? en Dart?",
    opciones: [
      "Compara si dos valores son iguales",
      "Retorna el valor de la izquierda si no es null, sino el de la derecha",
      "Convierte a booleano",
      "Es el operador de concatenación"
    ],
    correcta: 1,
    explicacion: "El operador ?? (null-coalescing) retorna el operando izquierdo si no es null, de lo contrario retorna el derecho.",
    categoria: "Operadores"
  },
  {
    id: 22,
    pregunta: "¿Qué hace el operador ?. en Dart?",
    opciones: [
      "Convierte a nullable",
      "Accede a un miembro solo si el objeto no es null",
      "Comprueba si es null",
      "Lanza una excepción si es null"
    ],
    correcta: 1,
    explicacion: "El operador ?. (null-aware) permite acceder a propiedades/métodos solo si el objeto no es null, evitando excepciones.",
    categoria: "Operadores"
  },
  {
    id: 23,
    pregunta: "¿Cuál es la sintaxis de un bucle for-in en Dart?",
    opciones: [
      "for item in lista:",
      "for (var item in lista) {}",
      "foreach (item in lista) {}",
      "lista.forEach(item => {})"
    ],
    correcta: 1,
    explicacion: "La sintaxis correcta es: for (var elemento in coleccion) { ... }",
    categoria: "Control de flujo"
  },
  {
    id: 24,
    pregunta: "¿Qué hace el operador ! al final de una variable en Dart?",
    opciones: [
      "Niega el valor booleano",
      "Hace la variable privada",
      "Afirma que el valor no es null (null assertion)",
      "Convierte a String"
    ],
    correcta: 2,
    explicacion: "El operador ! (bang operator) le dice al compilador que confíe en que el valor no es null.",
    categoria: "Operadores"
  },
  {
    id: 25,
    pregunta: "¿Cómo se escribe una expresión condicional ternaria en Dart?",
    opciones: [
      "condicion then valor1 else valor2",
      "if condicion ? valor1 : valor2",
      "condicion ? valor1 : valor2",
      "condicion ?? valor1 :: valor2"
    ],
    correcta: 2,
    explicacion: "El operador ternario usa la sintaxis: condicion ? valorSiTrue : valorSiFalse",
    categoria: "Control de flujo"
  }
];
