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
  },

  // Null safety avanzado (8 preguntas nuevas)
  {
    id: 26,
    pregunta: "¿Qué es null safety en Dart?",
    opciones: [
      "Un sistema de seguridad de Firebase",
      "Un sistema de tipos que previene errores de null en tiempo de compilación",
      "Una forma de eliminar variables",
      "Un método de validación"
    ],
    correcta: 1,
    explicacion: "Null safety hace que los tipos no puedan ser null por defecto, previniendo NullPointerException.",
    categoria: "Null Safety"
  },
  {
    id: 27,
    pregunta: "¿Qué hace el operador ??= en Dart?",
    opciones: [
      "Compara valores",
      "Asigna un valor solo si la variable es null",
      "Verifica si es null",
      "Elimina valores null"
    ],
    correcta: 1,
    explicacion: "El operador ??= asigna un valor a una variable solo si actualmente es null: valor ??= 10;",
    categoria: "Null Safety"
  },
  {
    id: 28,
    pregunta: "¿Cuándo se usa el operador ! (bang operator)?",
    opciones: [
      "Siempre que sea posible",
      "Solo cuando estás absolutamente seguro de que el valor no es null",
      "Para convertir a bool",
      "Para hacer variables privadas"
    ],
    correcta: 1,
    explicacion: "! fuerza al compilador a tratar un nullable como non-null. Si es null en runtime, lanzará excepción.",
    categoria: "Null Safety"
  },
  {
    id: 29,
    pregunta: "¿Cuál es la diferencia entre T? y T en Dart?",
    opciones: [
      "No hay diferencia",
      "T? puede ser null, T nunca puede ser null",
      "T? es más rápido",
      "T? es para tipos dinámicos"
    ],
    correcta: 1,
    explicacion: "T es non-nullable (nunca null), T? es nullable (puede ser null).",
    categoria: "Null Safety"
  },
  {
    id: 30,
    pregunta: "¿Qué palabra clave declara que una variable non-nullable se inicializará después pero antes de usarse?",
    opciones: ["late", "lazy", "defer", "async"],
    correcta: 0,
    explicacion: "late permite declarar variables non-nullable sin inicializar inmediatamente, pero deben inicializarse antes de usar.",
    categoria: "Null Safety"
  },
  {
    id: 31,
    pregunta: "¿Qué es el cascade operator en Dart?",
    opciones: [
      "Un operador para caídas de agua",
      "El operador .. que permite encadenar llamadas sobre el mismo objeto",
      "Un operador matemático",
      "Un operador de comparación"
    ],
    correcta: 1,
    explicacion: "El operador .. permite llamar múltiples métodos/propiedades sobre el mismo objeto: objeto..metodo1()..metodo2();",
    categoria: "Operadores"
  },
  {
    id: 32,
    pregunta: "¿Qué hace el operador ...? (null-aware spread)?",
    opciones: [
      "Expande una lista",
      "Expande una lista solo si no es null, si es null no hace nada",
      "Elimina nulls de una lista",
      "Verifica si hay nulls"
    ],
    correcta: 1,
    explicacion: "...? expande elementos de una colección solo si no es null, evitando errores: [...?lista1, ...?lista2]",
    categoria: "Null Safety"
  },
  {
    id: 33,
    pregunta: "¿Cómo se maneja el caso null al usar el operador ! si hay posibilidad de null?",
    opciones: [
      "Nunca usar ! si puede ser null",
      "Usar try-catch alrededor del !",
      "Usar ?? antes del !",
      "Verificar con if (variable != null) antes"
    ],
    correcta: 3,
    explicacion: "Antes de usar !, verificar if (variable != null) o usar ?. en su lugar para acceso seguro.",
    categoria: "Null Safety"
  },

  // Async/await y Futures (7 preguntas nuevas)
  {
    id: 34,
    pregunta: "¿Qué representa un Future en Dart?",
    opciones: [
      "El futuro del programa",
      "Un valor que estará disponible en el futuro (operación asíncrona)",
      "Una función que se ejecuta después",
      "Una variable del futuro"
    ],
    correcta: 1,
    explicacion: "Future<T> representa un valor de tipo T que estará disponible en algún momento futuro.",
    categoria: "Asincronía"
  },
  {
    id: 35,
    pregunta: "¿Cómo se marca una función como asíncrona en Dart?",
    opciones: [
      "async function nombre()",
      "Future nombre() async {}",
      "async nombre() {}",
      "nombre() @async {}"
    ],
    correcta: 1,
    explicacion: "Las funciones async se marcan con async después de los parámetros y retornan Future: Future<void> getData() async {}",
    categoria: "Asincronía"
  },
  {
    id: 36,
    pregunta: "¿Qué hace la palabra clave await?",
    opciones: [
      "Espera 1 segundo",
      "Pausa la ejecución hasta que el Future se complete",
      "Crea un Future",
      "Cancela una operación"
    ],
    correcta: 1,
    explicacion: "await pausa la ejecución de la función async hasta que el Future se resuelva, retornando el valor.",
    categoria: "Asincronía"
  },
  {
    id: 37,
    pregunta: "¿Dónde se puede usar await?",
    opciones: [
      "En cualquier lugar",
      "Solo dentro de funciones marcadas como async",
      "Solo en main()",
      "Solo con Future.delayed()"
    ],
    correcta: 1,
    explicacion: "await solo puede usarse dentro de funciones async, de lo contrario es un error de compilación.",
    categoria: "Asincronía"
  },
  {
    id: 38,
    pregunta: "¿Cómo se crea un Future que se completa con un valor inmediatamente?",
    opciones: [
      "Future.immediate(valor)",
      "Future.value(valor)",
      "new Future(valor)",
      "Future.now(valor)"
    ],
    correcta: 1,
    explicacion: "Future.value(valor) crea un Future que se completa inmediatamente con el valor dado.",
    categoria: "Asincronía"
  },
  {
    id: 39,
    pregunta: "¿Qué hace Future.delayed()?",
    opciones: [
      "Retrasa todo el programa",
      "Crea un Future que se completa después de una duración específica",
      "Cancela un Future",
      "Acelera un Future"
    ],
    correcta: 1,
    explicacion: "Future.delayed(Duration(...)) espera el tiempo especificado antes de completarse.",
    categoria: "Asincronía"
  },
  {
    id: 40,
    pregunta: "¿Cómo se ejecutan múltiples Futures en paralelo esperando que todos terminen?",
    opciones: [
      "await Future.all([future1, future2])",
      "await Future.wait([future1, future2])",
      "await [future1, future2]",
      "Future.parallel([future1, future2])"
    ],
    correcta: 1,
    explicacion: "Future.wait() toma una lista de Futures y retorna cuando todos se completan.",
    categoria: "Asincronía"
  },

  // Streams (5 preguntas nuevas)
  {
    id: 41,
    pregunta: "¿Qué es un Stream en Dart?",
    opciones: [
      "Un flujo de datos",
      "Una secuencia asíncrona de valores que llegan con el tiempo",
      "Un tipo de lista",
      "Una función de streaming"
    ],
    correcta: 1,
    explicacion: "Stream emite múltiples valores a lo largo del tiempo, útil para eventos, datos en tiempo real, etc.",
    categoria: "Streams"
  },
  {
    id: 42,
    pregunta: "¿Cómo se escucha un Stream?",
    opciones: [
      "stream.listen((data) => print(data))",
      "await stream",
      "stream.watch()",
      "for (var item in stream)"
    ],
    correcta: 0,
    explicacion: "stream.listen() registra un callback que se ejecuta cada vez que el stream emite un valor.",
    categoria: "Streams"
  },
  {
    id: 43,
    pregunta: "¿Cuál es la diferencia entre Stream y Future?",
    opciones: [
      "No hay diferencia",
      "Future emite un valor único, Stream emite múltiples valores",
      "Stream es más rápido",
      "Future es para listas"
    ],
    correcta: 1,
    explicacion: "Future<T> produce un valor único en el futuro. Stream<T> produce múltiples valores a lo largo del tiempo.",
    categoria: "Streams"
  },
  {
    id: 44,
    pregunta: "¿Cómo se usa await for con Streams?",
    opciones: [
      "await for (var item in stream) {}",
      "for await (var item in stream) {}",
      "stream.forEach(await item => {})",
      "async for (var item : stream) {}"
    ],
    correcta: 0,
    explicacion: "await for itera sobre cada valor emitido por el stream en una función async.",
    categoria: "Streams"
  },
  {
    id: 45,
    pregunta: "¿Qué hace StreamController?",
    opciones: [
      "Controla la velocidad del stream",
      "Permite crear y controlar un stream personalizado añadiendo valores",
      "Pausa streams",
      "Valida streams"
    ],
    correcta: 1,
    explicacion: "StreamController permite crear streams y añadir valores con controller.add() o errores con addError().",
    categoria: "Streams"
  },

  // Exception handling (5 preguntas nuevas)
  {
    id: 46,
    pregunta: "¿Cómo se captura una excepción en Dart?",
    opciones: [
      "catch (e) {}",
      "try {} catch (e) {}",
      "except Exception {}",
      "error (e) {}"
    ],
    correcta: 1,
    explicacion: "Se usa try-catch: try { código } catch (e) { manejar error }",
    categoria: "Excepciones"
  },
  {
    id: 47,
    pregunta: "¿Para qué sirve el bloque finally?",
    opciones: [
      "Para finalizar el programa",
      "Para ejecutar código siempre, haya o no excepción",
      "Para capturar el error final",
      "Para limpiar excepciones"
    ],
    correcta: 1,
    explicacion: "finally se ejecuta siempre después de try-catch, ideal para liberar recursos.",
    categoria: "Excepciones"
  },
  {
    id: 48,
    pregunta: "¿Cómo se lanza una excepción en Dart?",
    opciones: [
      "raise Exception('mensaje')",
      "throw Exception('mensaje')",
      "error('mensaje')",
      "exception('mensaje')"
    ],
    correcta: 1,
    explicacion: "throw lanza excepciones: throw Exception('Error personalizado');",
    categoria: "Excepciones"
  },
  {
    id: 49,
    pregunta: "¿Cómo se captura un tipo específico de excepción?",
    opciones: [
      "catch (Exception e) {}",
      "on TipoException catch (e) {}",
      "catch TipoException (e) {}",
      "if (e is TipoException) {}"
    ],
    correcta: 1,
    explicacion: "on TipoException catch (e) captura solo excepciones de ese tipo específico.",
    categoria: "Excepciones"
  },
  {
    id: 50,
    pregunta: "¿Qué es rethrow en Dart?",
    opciones: [
      "Lanzar una nueva excepción",
      "Re-lanzar la excepción actual después de manejarla parcialmente",
      "Eliminar excepciones",
      "Convertir excepciones"
    ],
    correcta: 1,
    explicacion: "rethrow vuelve a lanzar la excepción capturada para que la maneje código superior.",
    categoria: "Excepciones"
  },

  // Métodos de colecciones (6 preguntas nuevas)
  {
    id: 51,
    pregunta: "¿Qué hace el método map() en una lista?",
    opciones: [
      "Crea un Map",
      "Transforma cada elemento aplicando una función y retorna un nuevo iterable",
      "Filtra elementos",
      "Ordena la lista"
    ],
    correcta: 1,
    explicacion: "map() aplica una función a cada elemento y retorna un nuevo Iterable: [1,2,3].map((n) => n * 2)",
    categoria: "Colecciones"
  },
  {
    id: 52,
    pregunta: "¿Qué hace el método where() en una lista?",
    opciones: [
      "Busca un elemento",
      "Filtra elementos que cumplen una condición",
      "Cuenta elementos",
      "Ordena elementos"
    ],
    correcta: 1,
    explicacion: "where() retorna un iterable con elementos que cumplen la condición: lista.where((n) => n > 5)",
    categoria: "Colecciones"
  },
  {
    id: 53,
    pregunta: "¿Qué hace el método reduce() en una lista?",
    opciones: [
      "Reduce el tamaño de la lista",
      "Combina todos los elementos en un único valor aplicando una función acumuladora",
      "Elimina elementos",
      "Filtra elementos"
    ],
    correcta: 1,
    explicacion: "reduce() acumula un resultado: [1,2,3,4].reduce((a, b) => a + b) retorna 10",
    categoria: "Colecciones"
  },
  {
    id: 54,
    pregunta: "¿Cuál es la diferencia entre forEach() y map()?",
    opciones: [
      "No hay diferencia",
      "forEach() ejecuta código sin retornar nada, map() transforma y retorna nueva colección",
      "map() es más rápido",
      "forEach() modifica la lista original"
    ],
    correcta: 1,
    explicacion: "forEach() solo ejecuta código por cada elemento (void). map() transforma y retorna un Iterable nuevo.",
    categoria: "Colecciones"
  },
  {
    id: 55,
    pregunta: "¿Qué hace el método any() en una lista?",
    opciones: [
      "Retorna cualquier elemento",
      "Retorna true si al menos un elemento cumple la condición",
      "Cuenta elementos",
      "Retorna todos los elementos"
    ],
    correcta: 1,
    explicacion: "any() retorna true si al menos un elemento satisface la condición: [1,2,3].any((n) => n > 2) es true",
    categoria: "Colecciones"
  },
  {
    id: 56,
    pregunta: "¿Qué hace el método every() en una lista?",
    opciones: [
      "Itera cada elemento",
      "Retorna true si todos los elementos cumplen la condición",
      "Cuenta elementos",
      "Ordena elementos"
    ],
    correcta: 1,
    explicacion: "every() retorna true solo si todos los elementos cumplen la condición: [2,4,6].every((n) => n % 2 == 0) es true",
    categoria: "Colecciones"
  },

  // Mixins y abstract classes (4 preguntas nuevas)
  {
    id: 57,
    pregunta: "¿Qué es un mixin en Dart?",
    opciones: [
      "Una mezcla de datos",
      "Una forma de reutilizar código de una clase en múltiples jerarquías sin herencia",
      "Una clase abstracta",
      "Un tipo de interface"
    ],
    correcta: 1,
    explicacion: "Mixin permite compartir código entre clases sin herencia: class A with MixinB, MixinC",
    categoria: "POO"
  },
  {
    id: 58,
    pregunta: "¿Cómo se define un mixin en Dart?",
    opciones: [
      "mixin NombreMixin {}",
      "class NombreMixin mixin {}",
      "abstract mixin NombreMixin {}",
      "interface NombreMixin {}"
    ],
    correcta: 0,
    explicacion: "Se define con mixin NombreMixin {} y se usa con 'with': class Clase with Mixin",
    categoria: "POO"
  },
  {
    id: 59,
    pregunta: "¿Qué es una clase abstracta en Dart?",
    opciones: [
      "Una clase que no se puede usar",
      "Una clase que no puede ser instanciada directamente, solo heredada",
      "Una clase vacía",
      "Una clase obsoleta"
    ],
    correcta: 1,
    explicacion: "abstract class no puede instanciarse, solo extenderse. Puede tener métodos abstractos sin implementación.",
    categoria: "POO"
  },
  {
    id: 60,
    pregunta: "¿Cuándo se usa 'with' vs 'extends' vs 'implements' en Dart?",
    opciones: [
      "Son intercambiables",
      "extends: herencia, with: mixins, implements: contratos de interface",
      "with es más moderno",
      "implements es deprecated"
    ],
    correcta: 1,
    explicacion: "extends hereda comportamiento, with añade mixins, implements obliga a implementar todos los métodos.",
    categoria: "POO"
  }
];
