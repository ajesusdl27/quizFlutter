import type { Pregunta } from '../types';

export const preguntasOrmJpa: Pregunta[] = [
  // Conceptos básicos de ORM (preguntas 1-8)
  {
    id: 1,
    pregunta: "¿Qué significa ORM?",
    opciones: [
      "Object-Relational Management",
      "Object-Relational Mapping",
      "Oriented-Relational Model",
      "Object Resource Manager"
    ],
    correcta: 1,
    explicacion: "ORM significa Object-Relational Mapping (Correspondencia Objeto-Relacional), una técnica que permite trabajar con bases de datos relacionales utilizando un enfoque orientado a objetos.",
    categoria: "Conceptos de ORM"
  },
  {
    id: 2,
    pregunta: "En un ORM, ¿qué representan las tablas de la base de datos?",
    opciones: [
      "Métodos",
      "Clases",
      "Atributos",
      "Interfaces"
    ],
    correcta: 1,
    explicacion: "En un ORM, las tablas de la base de datos representan clases, las filas representan objetos y las columnas representan atributos.",
    categoria: "Conceptos de ORM"
  },
  {
    id: 3,
    pregunta: "¿Cuál de las siguientes NO es una ventaja del uso de ORM?",
    opciones: [
      "Mayor abstracción del código",
      "Mejor portabilidad entre diferentes bases de datos",
      "Mayor velocidad en todas las consultas complejas",
      "Reducción de riesgos de inyección SQL"
    ],
    correcta: 2,
    explicacion: "Aunque ORM tiene muchas ventajas, no garantiza mayor velocidad en todas las consultas. En algunos casos, consultas SQL nativas pueden ser más eficientes.",
    categoria: "Ventajas de ORM"
  },
  {
    id: 4,
    pregunta: "¿Qué información indica el mapeo en un ORM?",
    opciones: [
      "Solo qué clase corresponde a qué tabla",
      "La clase-tabla, atributo-columna, clave primaria y relaciones entre objetos",
      "Únicamente las claves primarias",
      "Solo las relaciones muchos a muchos"
    ],
    correcta: 1,
    explicacion: "El mapeo indica qué clase corresponde a la tabla, qué atributo corresponde a la columna, qué atributo es la clave primaria y qué relaciones existen entre objetos.",
    categoria: "Conceptos de ORM"
  },
  {
    id: 5,
    pregunta: "¿Cuál es el ORM más utilizado en Java?",
    opciones: [
      "Entity Framework",
      "Hibernate",
      "SQLAlchemy",
      "Sequelize"
    ],
    correcta: 1,
    explicacion: "Hibernate es el ORM más utilizado en Java, especialmente para aplicaciones empresariales.",
    categoria: "Herramientas ORM"
  },
  {
    id: 6,
    pregunta: "¿Qué ORM se utiliza comúnmente con Node.js?",
    opciones: [
      "Django ORM",
      "Laravel Eloquent",
      "Sequelize",
      "Hibernate"
    ],
    correcta: 2,
    explicacion: "Sequelize es el ORM más utilizado para aplicaciones web con Node.js y JavaScript.",
    categoria: "Herramientas ORM"
  },
  {
    id: 7,
    pregunta: "¿Cómo convierte un ORM los objetos en datos de base de datos?",
    opciones: [
      "Manualmente mediante código SQL",
      "Automáticamente convirtiendo objetos en filas (INSERT/UPDATE)",
      "Solo permite lectura de datos",
      "Requiere conversión manual para cada operación"
    ],
    correcta: 1,
    explicacion: "El ORM convierte automáticamente objetos en filas (INSERT/UPDATE) y filas en objetos (SELECT), ejecutando el SQL necesario sin que el programador tenga que escribirlo explícitamente.",
    categoria: "Funcionamiento de ORM"
  },
  {
    id: 8,
    pregunta: "¿Cuál de estas NO es una ventaja de usar ORM?",
    opciones: [
      "Mayor productividad por reducir código repetitivo",
      "Mejor mantenibilidad del código",
      "Necesidad de conocer SQL en profundidad",
      "Mayor portabilidad entre diferentes bases de datos"
    ],
    correcta: 2,
    explicacion: "Una ventaja del ORM es precisamente que NO se necesita conocer SQL en profundidad, ya que el ORM abstrae las consultas SQL.",
    categoria: "Ventajas de ORM"
  },

  // JPA y Hibernate (preguntas 9-16)
  {
    id: 9,
    pregunta: "¿Qué es JPA?",
    opciones: [
      "Un framework ORM completo",
      "Un conjunto de reglas, interfaces y anotaciones que definen cómo funciona un ORM en Java",
      "Una implementación específica de base de datos",
      "Un lenguaje de consultas"
    ],
    correcta: 1,
    explicacion: "JPA (Java Persistence API) es un conjunto de reglas, interfaces, anotaciones y comportamientos que definen cómo funciona un ORM en Java. No es un framework ni ejecuta código directamente.",
    categoria: "JPA"
  },
  {
    id: 10,
    pregunta: "¿Qué es Hibernate?",
    opciones: [
      "Un estándar de Java para ORM",
      "Una implementación real de JPA que genera SQL y ejecuta consultas",
      "Una base de datos relacional",
      "Un lenguaje de programación"
    ],
    correcta: 1,
    explicacion: "Hibernate es un framework ORM, una implementación real de JPA que se encarga de generar el SQL, ejecutar las consultas, gestionar las conexiones y convertir filas en objetos y viceversa.",
    categoria: "Hibernate"
  },
  {
    id: 11,
    pregunta: "¿Cuál es la relación correcta entre JPA e Hibernate?",
    opciones: [
      "JPA implementa Hibernate",
      "Hibernate es una alternativa a JPA",
      "JPA define qué métodos existen y Hibernate implementa cómo funcionan",
      "Son tecnologías incompatibles"
    ],
    correcta: 2,
    explicacion: "JPA define qué métodos y anotaciones existen, mientras que Hibernate implementa cómo funcionan realmente. El programador trabaja con JPA y Hibernate trabaja 'por debajo'.",
    categoria: "JPA y Hibernate"
  },
  {
    id: 12,
    pregunta: "¿Por qué usar Hibernate a través de JPA en lugar de usar Hibernate directamente?",
    opciones: [
      "Es más rápido",
      "Código más estándar, menor dependencia y mayor portabilidad",
      "JPA tiene más funcionalidades",
      "Hibernate no se puede usar directamente"
    ],
    correcta: 1,
    explicacion: "Usar Hibernate a través de JPA proporciona código más estándar, menor dependencia de una tecnología concreta, mayor portabilidad y facilidad para cambiar de implementación ORM en el futuro.",
    categoria: "JPA y Hibernate"
  },
  {
    id: 13,
    pregunta: "¿Qué elementos aporta JPA?",
    opciones: [
      "Solo anotaciones",
      "Entity, anotaciones de mapeo, EntityManager, JPQL y gestión de transacciones",
      "Únicamente el EntityManager",
      "Solo consultas SQL"
    ],
    correcta: 1,
    explicacion: "JPA aporta Entity, anotaciones de mapeo (@Id, @Column, etc.), EntityManager, EntityManagerFactory, consultas JPQL y gestión de transacciones.",
    categoria: "Elementos de JPA"
  },
  {
    id: 14,
    pregunta: "¿Cuál de estas afirmaciones sobre JPA es CORRECTA?",
    opciones: [
      "JPA accede directamente a la base de datos",
      "JPA es un framework que ejecuta código",
      "JPA no ejecuta código, solo define reglas e interfaces",
      "JPA reemplaza completamente a SQL"
    ],
    correcta: 2,
    explicacion: "JPA no es un framework ni ejecuta código directamente. Es un conjunto de reglas, interfaces y anotaciones que definen cómo debe funcionar un ORM en Java.",
    categoria: "JPA"
  },
  {
    id: 15,
    pregunta: "¿Qué hace realmente el 'trabajo pesado' cuando usamos JPA?",
    opciones: [
      "El programador manualmente",
      "La base de datos",
      "Hibernate (la implementación de JPA)",
      "El servidor de aplicaciones"
    ],
    correcta: 2,
    explicacion: "Cuando programamos contra JPA, Hibernate (u otra implementación) hace el trabajo pesado: generar SQL, ejecutar consultas, gestionar conexiones, etc.",
    categoria: "JPA y Hibernate"
  },
  {
    id: 16,
    pregunta: "¿Qué ORM se utiliza en aplicaciones C# del ecosistema Microsoft?",
    opciones: [
      "Hibernate",
      "Entity Framework",
      "Django ORM",
      "SQLAlchemy"
    ],
    correcta: 1,
    explicacion: "Entity Framework es el ORM más utilizado en C# para aplicaciones en el ecosistema de Microsoft.",
    categoria: "Herramientas ORM"
  },

  // Entidades (preguntas 17-22)
  {
    id: 17,
    pregunta: "¿Qué es una entidad en el contexto de JPA?",
    opciones: [
      "Una interfaz que define métodos de persistencia",
      "Una clase Java que representa una tabla de base de datos",
      "Un tipo de base de datos",
      "Un método para ejecutar consultas"
    ],
    correcta: 1,
    explicacion: "Una entidad es una clase Java que representa una tabla de una base de datos relacional. Es una clase que puede almacenarse de forma permanente en la base de datos.",
    categoria: "Entidades"
  },
  {
    id: 18,
    pregunta: "¿Qué es un POJO en el contexto de entidades JPA?",
    opciones: [
      "Una clase que hereda de Entity",
      "Una clase simple de Java con atributos, constructores, getters y setters",
      "Una clase especial de Hibernate",
      "Un tipo de base de datos"
    ],
    correcta: 1,
    explicacion: "POJO (Plain Old Java Object) son clases simples de Java que tienen atributos, constructores, getters y setters. No heredan de clases especiales ni dependen de frameworks para existir.",
    categoria: "Entidades"
  },
  {
    id: 19,
    pregunta: "¿Cuál de estos requisitos NO es necesario para que una clase sea una entidad JPA válida?",
    opciones: [
      "Estar anotada con @Entity",
      "Tener un atributo identificador",
      "Heredar de una clase base 'Entity'",
      "Tener un constructor vacío"
    ],
    correcta: 2,
    explicacion: "Una entidad NO necesita heredar de ninguna clase especial. Debe ser una clase normal (POJO) anotada con @Entity, con un identificador y un constructor vacío.",
    categoria: "Entidades"
  },
  {
    id: 20,
    pregunta: "¿Qué debe tener obligatoriamente una entidad JPA?",
    opciones: [
      "Solo getters y setters",
      "Un atributo identificador (clave primaria)",
      "Métodos de persistencia",
      "Una interfaz serializable"
    ],
    correcta: 1,
    explicacion: "Toda entidad JPA debe tener un atributo identificador que actúe como clave primaria. Sin ella, la entidad no es válida y Hibernate no puede gestionarla.",
    categoria: "Entidades"
  },
  {
    id: 21,
    pregunta: "¿Qué características deben tener los atributos de una entidad?",
    opciones: [
      "Deben ser todos públicos",
      "Deben poder persistir en la base de datos",
      "Deben ser inmutables",
      "Deben ser todos String"
    ],
    correcta: 1,
    explicacion: "Los atributos de una entidad deben poder persistir en la base de datos, es decir, ser tipos de datos que puedan almacenarse en columnas de una tabla.",
    categoria: "Entidades"
  },
  {
    id: 22,
    pregunta: "Sin la anotación @Entity, ¿qué ocurre con una clase?",
    opciones: [
      "Funciona igual pero más lento",
      "No será gestionada por Hibernate",
      "Solo funcionará con MySQL",
      "Requiere configuración XML adicional"
    ],
    correcta: 1,
    explicacion: "Sin la anotación @Entity, la clase no será gestionada por Hibernate y no podrá persistirse en la base de datos.",
    categoria: "Anotaciones JPA"
  },

  // Anotaciones JPA (preguntas 23-28)
  {
    id: 23,
    pregunta: "¿Qué indica la anotación @Entity?",
    opciones: [
      "Que es una interfaz",
      "Que la clase es una entidad JPA y debe almacenarse en la base de datos",
      "Que la clase es abstracta",
      "Que la clase tiene relaciones"
    ],
    correcta: 1,
    explicacion: "La anotación @Entity indica que una clase es una entidad JPA y debe almacenarse en la base de datos.",
    categoria: "Anotaciones JPA"
  },
  {
    id: 24,
    pregunta: "¿Para qué sirve la anotación @Table?",
    opciones: [
      "Para crear automáticamente la tabla",
      "Para indicar explícitamente el nombre de la tabla asociada a la entidad",
      "Para definir el tipo de base de datos",
      "Para establecer permisos"
    ],
    correcta: 1,
    explicacion: "@Table permite indicar explícitamente el nombre de la tabla asociada a la entidad. Si no se pone, JPA usa el nombre de la clase como nombre de tabla por defecto.",
    categoria: "Anotaciones JPA"
  },
  {
    id: 25,
    pregunta: "¿Qué anotación indica que un atributo es la clave primaria?",
    opciones: [
      "@PrimaryKey",
      "@Key",
      "@Id",
      "@Identity"
    ],
    correcta: 2,
    explicacion: "La anotación @Id indica que el atributo es la clave primaria de la entidad.",
    categoria: "Anotaciones JPA"
  },
  {
    id: 26,
    pregunta: "¿Qué indica la anotación @GeneratedValue?",
    opciones: [
      "Que el atributo es obligatorio",
      "Que el valor de la clave primaria se genera automáticamente",
      "Que el atributo tiene un valor por defecto",
      "Que el atributo es único"
    ],
    correcta: 1,
    explicacion: "@GeneratedValue indica que el valor de la clave primaria se genera automáticamente, sin que el programador tenga que asignarlo manualmente.",
    categoria: "Anotaciones JPA"
  },
  {
    id: 27,
    pregunta: "Si no se especifica @Table, ¿qué nombre de tabla usará JPA?",
    opciones: [
      "Un nombre aleatorio",
      "El nombre de la clase",
      "El nombre del atributo @Id",
      "No funcionará sin @Table"
    ],
    correcta: 1,
    explicacion: "Si no se especifica @Table, JPA usa el nombre de la clase como nombre de tabla por defecto.",
    categoria: "Anotaciones JPA"
  },
  {
    id: 28,
    pregunta: "¿Qué tipo de dato se recomienda para el atributo @Id?",
    opciones: [
      "String",
      "Integer",
      "Long",
      "Double"
    ],
    correcta: 2,
    explicacion: "Se recomienda usar Long para el atributo @Id, ya que soporta un rango mayor de valores y es más eficiente.",
    categoria: "Claves primarias"
  },

  // EntityManager y configuración (preguntas 29-35)
  {
    id: 29,
    pregunta: "¿Para qué sirve EntityManagerFactory?",
    opciones: [
      "Para ejecutar consultas",
      "Para leer la configuración y crear objetos EntityManager",
      "Para cerrar conexiones",
      "Para eliminar entidades"
    ],
    correcta: 1,
    explicacion: "EntityManagerFactory lee la configuración de persistence.xml, crea objetos EntityManager y mantiene la configuración global de la persistencia.",
    categoria: "EntityManager"
  },
  {
    id: 30,
    pregunta: "¿Cuántas veces se debe crear EntityManagerFactory en una aplicación?",
    opciones: [
      "Por cada consulta",
      "Una vez por aplicación",
      "Por cada entidad",
      "Por cada transacción"
    ],
    correcta: 1,
    explicacion: "EntityManagerFactory se crea una vez por aplicación. Es un objeto pesado que normalmente se reutiliza durante toda la ejecución.",
    categoria: "EntityManager"
  },
  {
    id: 31,
    pregunta: "¿Qué operaciones permite realizar EntityManager?",
    opciones: [
      "Solo consultas SELECT",
      "Guardar, buscar, modificar, eliminar y ejecutar consultas sobre entidades",
      "Solo insertar datos",
      "Solo configurar la base de datos"
    ],
    correcta: 1,
    explicacion: "EntityManager permite guardar, buscar, modificar, eliminar entidades y ejecutar consultas. Es el objeto que se usa realmente para trabajar con la base de datos.",
    categoria: "EntityManager"
  },
  {
    id: 32,
    pregunta: "¿Qué característica tiene EntityManager respecto a su ciclo de vida?",
    opciones: [
      "Es un objeto pesado de larga duración",
      "Es un objeto ligero de ciclo de vida corto",
      "Solo existe durante el arranque",
      "Se crea automáticamente sin EntityManagerFactory"
    ],
    correcta: 1,
    explicacion: "EntityManager es un objeto ligero que tiene un ciclo de vida corto. Se crea a partir del EntityManagerFactory para realizar operaciones específicas.",
    categoria: "EntityManager"
  },
  {
    id: 33,
    pregunta: "¿Dónde debe colocarse el archivo persistence.xml?",
    opciones: [
      "En la raíz del proyecto",
      "En src/main/resources/META-INF/",
      "En el directorio de clases",
      "En cualquier lugar"
    ],
    correcta: 1,
    explicacion: "El archivo persistence.xml debe colocarse en src/main/resources/META-INF/persistence.xml para que JPA pueda encontrarlo.",
    categoria: "Configuración"
  },
  {
    id: 34,
    pregunta: "¿Qué información contiene persistence.xml?",
    opciones: [
      "Solo las entidades",
      "El código Java de las entidades",
      "Configuración de ORM, conexión a BD, entidades y comportamiento de Hibernate",
      "Solo la contraseña de la base de datos"
    ],
    correcta: 2,
    explicacion: "persistence.xml indica qué ORM se usa, cómo conectarse a la base de datos, qué entidades se gestionan y cómo debe comportarse Hibernate.",
    categoria: "Configuración"
  },
  {
    id: 35,
    pregunta: "¿Qué define persistence.xml?",
    opciones: [
      "Solo entidades",
      "Una o varias unidades de persistencia",
      "Solo la conexión a la base de datos",
      "El código SQL"
    ],
    correcta: 1,
    explicacion: "persistence.xml define una o varias unidades de persistencia. Es leído por JPA al iniciar la aplicación y es el punto de arranque de JPA.",
    categoria: "Configuración"
  },

  // Ciclo de vida y operaciones (preguntas 36-42)
  {
    id: 36,
    pregunta: "¿Cuál es el estado de una entidad recién creada con 'new'?",
    opciones: [
      "Managed",
      "Transient",
      "Detached",
      "Removed"
    ],
    correcta: 1,
    explicacion: "Una entidad recién creada con 'new' está en estado Transient (Nueva/Transitoria): no está en el EntityManager y no existe en la base de datos.",
    categoria: "Ciclo de vida"
  },
  {
    id: 37,
    pregunta: "¿Qué significa que una entidad esté en estado 'Managed'?",
    opciones: [
      "Ha sido eliminada",
      "Se asocia a un EntityManager y Hibernate la gestiona",
      "Está en memoria pero no en BD",
      "Está marcada para eliminación"
    ],
    correcta: 1,
    explicacion: "Managed (gestionada/persistente) significa que la entidad se asocia a un EntityManager y Hibernate empieza a gestionar sus cambios automáticamente.",
    categoria: "Ciclo de vida"
  },
  {
    id: 38,
    pregunta: "¿Cuándo una entidad pasa al estado 'Detached'?",
    opciones: [
      "Cuando se crea",
      "Cuando el EntityManager se cierra o la entidad se separa del contexto",
      "Cuando se guarda",
      "Cuando se elimina"
    ],
    correcta: 1,
    explicacion: "Detached (desvinculada) significa que ha sido gestionada, pero el EntityManager se ha cerrado o la entidad se ha separado del contexto de persistencia.",
    categoria: "Ciclo de vida"
  },
  {
    id: 39,
    pregunta: "¿Qué método se usa para buscar una entidad por su ID?",
    opciones: [
      "get()",
      "search()",
      "find()",
      "select()"
    ],
    correcta: 2,
    explicacion: "Para buscar una entidad se usa find(). Hibernate ejecuta un SELECT, devuelve el objeto, o devuelve null si no existe.",
    categoria: "Operaciones CRUD"
  },
  {
    id: 40,
    pregunta: "Para actualizar una entidad Managed, ¿qué hay que hacer?",
    opciones: [
      "Llamar a update() explícitamente",
      "Buscar el objeto, hacer setters y commit",
      "Ejecutar SQL manualmente",
      "Recrear la entidad"
    ],
    correcta: 1,
    explicacion: "Para actualizar una entidad Managed solo hay que buscar el objeto, modificarlo con setters y hacer commit(). Hibernate detecta los cambios automáticamente.",
    categoria: "Operaciones CRUD"
  },
  {
    id: 41,
    pregunta: "Si una entidad está Detached y quieres modificarla, ¿qué debes hacer?",
    opciones: [
      "Nada, modificar directamente",
      "Hacer merge() antes de modificar",
      "Eliminarla y recrearla",
      "No se puede modificar"
    ],
    correcta: 1,
    explicacion: "Si la entidad está Detached, hay que hacer merge() del objeto antes de modificarla para volver a asociarla al contexto de persistencia.",
    categoria: "Operaciones CRUD"
  },
  {
    id: 42,
    pregunta: "¿Para qué sirve Hibernate usar el ID de una entidad?",
    opciones: [
      "Solo para ordenar",
      "Para saber si es un objeto nuevo o existente y decidir INSERT o UPDATE",
      "Para calcular el hash",
      "Para la visualización"
    ],
    correcta: 1,
    explicacion: "Hibernate usa el ID para saber si es un objeto nuevo (INSERT) o existente (UPDATE). Cambiarlo puede dar errores de duplicado o pérdida de referencia.",
    categoria: "Claves primarias"
  },

  // JPQL (preguntas 43-46)
  {
    id: 43,
    pregunta: "¿Qué es JPQL?",
    opciones: [
      "Java Public Query Language",
      "Java Persistence Query Language",
      "Java Private Query List",
      "Java Package Query Library"
    ],
    correcta: 1,
    explicacion: "JPQL (Java Persistence Query Language) es el lenguaje de consultas de JPA que permite realizar consultas usando entidades y atributos, no tablas ni columnas.",
    categoria: "JPQL"
  },
  {
    id: 44,
    pregunta: "¿Con qué trabaja JPQL?",
    opciones: [
      "Tablas y columnas SQL",
      "Entidades y atributos Java",
      "Solo procedimientos almacenados",
      "Archivos XML"
    ],
    correcta: 1,
    explicacion: "JPQL no trabaja con tablas, trabaja con entidades y atributos Java. Esto lo hace independiente de la base de datos específica.",
    categoria: "JPQL"
  },
  {
    id: 45,
    pregunta: "¿Qué método se usa para crear una consulta JPQL?",
    opciones: [
      "newQuery()",
      "query()",
      "createQuery()",
      "makeQuery()"
    ],
    correcta: 2,
    explicacion: "Para crear una consulta JPQL se usa el método createQuery() del EntityManager.",
    categoria: "JPQL"
  },
  {
    id: 46,
    pregunta: "¿Qué método de JPQL se usa para obtener una lista de resultados?",
    opciones: [
      "getList()",
      "getResultList()",
      "fetchAll()",
      "selectList()"
    ],
    correcta: 1,
    explicacion: "getResultList() se usa para obtener una lista de resultados. Para un solo resultado se usa getSingleResult().",
    categoria: "JPQL"
  },

  // Relaciones (preguntas 47-48)
  {
    id: 47,
    pregunta: "¿Cuántos tipos principales de relaciones existen entre entidades?",
    opciones: [
      "2: uno a uno y uno a muchos",
      "3: uno a uno, uno a muchos y muchos a uno",
      "4: uno a uno, uno a muchos, muchos a uno y muchos a muchos",
      "5: incluyendo cero a uno"
    ],
    correcta: 2,
    explicacion: "Existen 4 tipos principales de relaciones: uno a uno (OneToOne), uno a muchos (OneToMany), muchos a uno (ManyToOne) y muchos a muchos (ManyToMany).",
    categoria: "Relaciones"
  },
  {
    id: 48,
    pregunta: "En una relación bidireccional, ¿qué propiedad se usa para evitar duplicación?",
    opciones: [
      "cascade",
      "fetch",
      "mappedBy",
      "orphanRemoval"
    ],
    correcta: 2,
    explicacion: "En relaciones bidireccionales se usa mappedBy para indicar cuál es el lado 'dueño' de la relación y evitar duplicación en el mapeo.",
    categoria: "Relaciones"
  },

  // Transacciones (preguntas 49-50)
  {
    id: 49,
    pregunta: "¿Por qué son necesarias las transacciones?",
    opciones: [
      "Solo para hacer más lento el proceso",
      "Para consistencia de datos, integridad de BD y control de cuándo se escriben cambios",
      "No son necesarias",
      "Solo para bases de datos grandes"
    ],
    correcta: 1,
    explicacion: "Las transacciones son necesarias para garantizar consistencia de datos, integridad de la base de datos y control sobre cuándo se escriben realmente los cambios.",
    categoria: "Transacciones"
  },
  {
    id: 50,
    pregunta: "¿Cuál es la diferencia entre commit() y rollback()?",
    opciones: [
      "No hay diferencia",
      "commit() confirma y guarda cambios, rollback() cancela y revierte cambios",
      "Ambos guardan cambios",
      "Ambos cancelan cambios"
    ],
    correcta: 1,
    explicacion: "commit() confirma la transacción y guarda los cambios definitivamente, mientras que rollback() cancela la transacción y revierte todos los cambios.",
    categoria: "Transacciones"
  }
];

export const ormJpaInfo = {
  id: 'orm-jpa',
  titulo: 'ORM, JPA y Hibernate',
  descripcion: 'Conceptos fundamentales de ORM, JPA, Hibernate, entidades, ciclo de vida, JPQL y configuración.',
  temas: ['Conceptos ORM', 'JPA y Hibernate', 'Entidades', 'Anotaciones', 'EntityManager', 'JPQL', 'Transacciones'],
  color: 'from-teal-500 to-cyan-600',
  icono: '🔗',
  asignaturaId: 'acceso-datos'
};
