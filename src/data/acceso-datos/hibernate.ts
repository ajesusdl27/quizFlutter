import type { Pregunta } from '../types';

export const preguntasHibernate: Pregunta[] = [
  // Introducción y Conceptos Básicos (ORM) - Preguntas 1-7
  {
    id: 1,
    pregunta: "¿Qué significan las siglas ORM?",
    opciones: [
      "Object-Relation Management",
      "Object-Relational Mapping",
      "Oracle-Relational Model",
      "Object-Recursive Method"
    ],
    correcta: 1,
    explicacion: "ORM significa Object-Relational Mapping, un patrón que permite mapear objetos de programación orientada a objetos a tablas de bases de datos relacionales.",
    categoria: "Introducción ORM"
  },
  {
    id: 2,
    pregunta: "En el contexto de un ORM, ¿a qué corresponde una clase de Java en la base de datos?",
    opciones: [
      "A una fila",
      "A una columna",
      "A una tabla",
      "A una clave foránea"
    ],
    correcta: 2,
    explicacion: "En el mapeo objeto-relacional, una clase de Java corresponde a una tabla en la base de datos.",
    categoria: "Introducción ORM"
  },
  {
    id: 3,
    pregunta: "¿Cuál de las siguientes es una desventaja del uso de JDBC tradicional frente a un ORM?",
    opciones: [
      "No permite ejecutar SQL",
      "Es necesario escribir mucho código repetitivo y el código queda muy ligado al SQL",
      "No soporta transacciones",
      "Es más lento que Hibernate en operaciones simples"
    ],
    correcta: 1,
    explicacion: "JDBC requiere escribir mucho código repetitivo (boilerplate) y el código queda fuertemente acoplado al SQL, dificultando el mantenimiento.",
    categoria: "Introducción ORM"
  },
  {
    id: 4,
    pregunta: "¿Qué tarea realiza automáticamente un ORM?",
    opciones: [
      "Diseñar la interfaz gráfica de usuario",
      "Convertir objetos a filas (INSERT/UPDATE) y filas a objetos (SELECT)",
      "Reiniciar el servidor de base de datos",
      "Crear los getters y setters de las clases Java"
    ],
    correcta: 1,
    explicacion: "El ORM se encarga automáticamente de la conversión bidireccional entre objetos Java y registros de la base de datos.",
    categoria: "Introducción ORM"
  },
  {
    id: 5,
    pregunta: "¿Cuál es una ventaja de seguridad al usar un ORM?",
    opciones: [
      "Encripta toda la base de datos automáticamente",
      "Elimina la necesidad de usuarios y contraseñas",
      "Reduce riesgos de inyección SQL y consultas mal formadas",
      "Bloquea el acceso a la base de datos desde otras aplicaciones"
    ],
    correcta: 2,
    explicacion: "Los ORM utilizan consultas parametrizadas que previenen ataques de inyección SQL y reducen errores en las consultas.",
    categoria: "Introducción ORM"
  },
  {
    id: 6,
    pregunta: "¿Qué herramienta ORM es considerada el estándar en el ecosistema .NET (C#)?",
    opciones: [
      "Hibernate",
      "Entity Framework",
      "SQLAlchemy",
      "Eloquent"
    ],
    correcta: 1,
    explicacion: "Entity Framework es el ORM estándar para .NET/C#, mientras Hibernate es para Java, SQLAlchemy para Python y Eloquent para Laravel/PHP.",
    categoria: "Introducción ORM"
  },
  {
    id: 7,
    pregunta: "En la comparativa entre modelos, ¿qué concepto del Modelo Orientado a Objetos equivale a una 'Fila (registro)' del Modelo Relacional?",
    opciones: [
      "Clase",
      "Atributo",
      "Objeto (instancia de una clase)",
      "Método"
    ],
    correcta: 2,
    explicacion: "Un objeto o instancia de una clase corresponde a una fila o registro en la tabla de la base de datos.",
    categoria: "Introducción ORM"
  },

  // JPA y Hibernate - Preguntas 8-10
  {
    id: 8,
    pregunta: "¿Cuál es la diferencia principal entre JPA y Hibernate?",
    opciones: [
      "JPA es el framework y Hibernate es la especificación",
      "JPA es una especificación (interfaz) y Hibernate es una implementación concreta",
      "Hibernate solo funciona con MySQL y JPA con Oracle",
      "No hay diferencia, son lo mismo"
    ],
    correcta: 1,
    explicacion: "JPA (Java Persistence API) es una especificación estándar de Java, mientras que Hibernate es una implementación concreta de esa especificación.",
    categoria: "JPA y Hibernate"
  },
  {
    id: 9,
    pregunta: "¿Qué función cumple el EntityManager en JPA?",
    opciones: [
      "Es la interfaz principal para interactuar con el contexto de persistencia (guardar, buscar, eliminar)",
      "Se encarga de leer el archivo persistence.xml",
      "Es una anotación para marcar claves primarias",
      "Es el driver JDBC"
    ],
    correcta: 0,
    explicacion: "EntityManager es la interfaz principal de JPA que permite realizar operaciones de persistencia como guardar, buscar, actualizar y eliminar entidades.",
    categoria: "JPA y Hibernate"
  },
  {
    id: 10,
    pregunta: "¿Por qué es recomendable programar usando la interfaz JPA en lugar de las clases propias de Hibernate?",
    opciones: [
      "Porque Hibernate ya no existe",
      "Para tener menor dependencia de una tecnología concreta y mayor portabilidad",
      "Porque JPA es más rápido ejecutando SQL",
      "Porque JPA no necesita configuración XML"
    ],
    correcta: 1,
    explicacion: "Usar la interfaz JPA estándar reduce la dependencia de una implementación específica y facilita cambiar de proveedor ORM si es necesario.",
    categoria: "JPA y Hibernate"
  },

  // Entidades y Anotaciones Básicas - Preguntas 11-18
  {
    id: 11,
    pregunta: "¿Qué anotación es obligatoria para que una clase Java sea considerada una entidad JPA?",
    opciones: [
      "@Table",
      "@Entity",
      "@ORM",
      "@Persist"
    ],
    correcta: 1,
    explicacion: "La anotación @Entity es obligatoria para indicar que una clase Java es una entidad persistente que se mapea a una tabla de base de datos.",
    categoria: "Entidades y Anotaciones"
  },
  {
    id: 12,
    pregunta: "Observa el siguiente código. ¿Qué requisito obligatorio de las entidades JPA falta?\n\n@Entity\npublic class Alumno {\n    @Id\n    private Long id;\n    private String nombre;\n\n    public Alumno(String nombre) {\n        this.nombre = nombre;\n    }\n    // Getters y setters...\n}",
    opciones: [
      "Falta la anotación @Table",
      "Falta el constructor vacío",
      "El atributo id debe ser int",
      "Falta el método toString()"
    ],
    correcta: 1,
    explicacion: "Toda entidad JPA debe tener un constructor sin argumentos (constructor vacío) para que el framework pueda instanciarla.",
    categoria: "Entidades y Anotaciones"
  },
  {
    id: 13,
    pregunta: "Si no se especifica la anotación @Table, ¿qué nombre usa JPA para la tabla por defecto?",
    opciones: [
      "tabla_generica",
      "El nombre de la clase",
      "El nombre del paquete",
      "Da un error de compilación"
    ],
    correcta: 1,
    explicacion: "Por defecto, si no se especifica @Table, JPA usa el nombre de la clase como nombre de la tabla en la base de datos.",
    categoria: "Entidades y Anotaciones"
  },
  {
    id: 14,
    pregunta: "¿Qué anotación se utiliza para indicar que un atributo es la clave primaria?",
    opciones: [
      "@Key",
      "@Primary",
      "@Id",
      "@Identifier"
    ],
    correcta: 2,
    explicacion: "La anotación @Id marca un atributo como la clave primaria de la entidad.",
    categoria: "Entidades y Anotaciones"
  },
  {
    id: 15,
    pregunta: "¿Para qué sirve la anotación @GeneratedValue(strategy = GenerationType.IDENTITY)?",
    opciones: [
      "Para validar que el ID sea único",
      "Para indicar que la base de datos genera el ID (ej. AUTO_INCREMENT)",
      "Para generar un ID aleatorio en Java",
      "Para crear una secuencia en Oracle"
    ],
    correcta: 1,
    explicacion: "Esta anotación indica que la base de datos se encarga de generar automáticamente el valor del ID (por ejemplo, usando AUTO_INCREMENT en MySQL).",
    categoria: "Entidades y Anotaciones"
  },
  {
    id: 16,
    pregunta: "¿Qué tipo de dato se recomienda para el identificador (@Id) en lugar de un primitivo int?",
    opciones: [
      "String",
      "Double",
      "Long (objeto)",
      "float"
    ],
    correcta: 2,
    explicacion: "Se recomienda usar Long (tipo objeto) en lugar de int primitivo para el ID de las entidades.",
    categoria: "Entidades y Anotaciones"
  },
  {
    id: 17,
    pregunta: "¿Por qué es preferible usar Long en lugar de int para el ID?",
    opciones: [
      "Porque ocupa menos memoria",
      "Porque Long permite valores null, lo que ayuda a distinguir una entidad nueva de una existente",
      "Porque int no es compatible con SQL",
      "Porque Long es obligatorio por la especificación JPA"
    ],
    correcta: 1,
    explicacion: "Long puede ser null, lo que permite distinguir si una entidad es nueva (id = null) o ya existe en la base de datos (id != null).",
    categoria: "Entidades y Anotaciones"
  },
  {
    id: 18,
    pregunta: "En el siguiente código, ¿qué personalización se está aplicando a la columna email?\n\n@Column(name = \"correo_electronico\", unique = true, nullable = false)\nprivate String email;",
    opciones: [
      "Se cambia el nombre en la BD a 'email' y se permite nulo",
      "Se cambia el nombre a 'correo_electronico', debe ser único y no permite nulos",
      "Se define como clave primaria",
      "Se ignora el atributo en la base de datos"
    ],
    correcta: 1,
    explicacion: "La anotación @Column personaliza el mapeo: cambia el nombre de la columna, establece una restricción de unicidad y no permite valores nulos.",
    categoria: "Entidades y Anotaciones"
  },

  // Ciclo de Vida y EntityManager - Preguntas 19-25
  {
    id: 19,
    pregunta: "¿Cuáles son los cuatro estados principales del ciclo de vida de una entidad?",
    opciones: [
      "New, Old, Saved, Deleted",
      "Transient, Managed, Detached, Removed",
      "Active, Passive, Static, Dynamic",
      "Open, Closed, Pending, Committed"
    ],
    correcta: 1,
    explicacion: "Los cuatro estados del ciclo de vida de una entidad en JPA son: Transient (nuevo), Managed (gestionado), Detached (desconectado) y Removed (eliminado).",
    categoria: "Ciclo de Vida"
  },
  {
    id: 20,
    pregunta: "¿En qué estado se encuentra el objeto alumno justo después de ejecutar esta línea?\n\nAlumno alumno = new Alumno();",
    opciones: [
      "Managed",
      "Detached",
      "Transient",
      "Removed"
    ],
    correcta: 2,
    explicacion: "Un objeto recién creado con 'new' está en estado Transient, es decir, existe en Java pero JPA no lo conoce ni gestiona.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 21,
    pregunta: "¿Qué método del EntityManager se usa para pasar una entidad de estado Transient a Managed (guardarla en BD)?",
    opciones: [
      "em.save()",
      "em.insert()",
      "em.persist()",
      "em.add()"
    ],
    correcta: 2,
    explicacion: "El método persist() del EntityManager se usa para pasar una entidad de estado Transient a Managed, persistiéndola en la base de datos.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 22,
    pregunta: "Analiza el siguiente fragmento:\n\nem.getTransaction().begin();\nAlumno a = em.find(Alumno.class, 1L);\na.setNombre(\"Nuevo Nombre\");\nem.getTransaction().commit();\n\n¿Qué ocurre en la base de datos al hacer commit?",
    opciones: [
      "Nada, porque no se llamó a em.update()",
      "Se hace un INSERT",
      "Se hace un UPDATE automático porque la entidad estaba en estado Managed",
      "Da un error"
    ],
    correcta: 2,
    explicacion: "Cuando una entidad está en estado Managed, JPA detecta automáticamente los cambios y ejecuta el UPDATE correspondiente al hacer commit.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 23,
    pregunta: "¿Qué ocurre con una entidad en estado 'Detached'?",
    opciones: [
      "Hibernate sigue rastreando sus cambios automáticamente",
      "Ha sido eliminada de la base de datos",
      "Existe en Java, pero Hibernate ya no la controla ni sincroniza cambios",
      "Nunca ha existido en la base de datos"
    ],
    correcta: 2,
    explicacion: "Una entidad Detached existe en Java pero ya no está gestionada por el EntityManager, por lo que los cambios no se sincronizan automáticamente.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 24,
    pregunta: "¿Para qué sirve el método em.merge()?",
    opciones: [
      "Para eliminar una entidad",
      "Para buscar por ID",
      "Para volver a gestionar (pasar a Managed) una entidad que estaba Detached",
      "Para cerrar la conexión"
    ],
    correcta: 2,
    explicacion: "El método merge() se usa para reintegrar una entidad Detached al contexto de persistencia, pasándola al estado Managed.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 25,
    pregunta: "¿Cuál es la función de EntityManagerFactory?",
    opciones: [
      "Gestionar las transacciones una por una",
      "Crear objetos EntityManager y leer la configuración inicial",
      "Ejecutar sentencias SQL directamente",
      "Mapear las clases a tablas manualmente"
    ],
    correcta: 1,
    explicacion: "EntityManagerFactory es responsable de leer la configuración (persistence.xml) y crear instancias de EntityManager.",
    categoria: "Ciclo de Vida"
  },

  // Consultas JPQL - Preguntas 26-30
  {
    id: 26,
    pregunta: "¿Qué significa JPQL?",
    opciones: [
      "Java Programming Query Logic",
      "Java Persistence Query Language",
      "Java Procedure Quick Language",
      "Just Persistence Query List"
    ],
    correcta: 1,
    explicacion: "JPQL significa Java Persistence Query Language, el lenguaje de consultas orientado a objetos de JPA.",
    categoria: "Consultas JPQL"
  },
  {
    id: 27,
    pregunta: "¿Cuál es la diferencia principal entre JPQL y SQL?",
    opciones: [
      "JPQL trabaja con tablas y columnas; SQL con clases y atributos",
      "JPQL trabaja con entidades y atributos; SQL con tablas y columnas",
      "JPQL solo sirve para borrar datos",
      "SQL es orientado a objetos"
    ],
    correcta: 1,
    explicacion: "JPQL es orientado a objetos y trabaja con entidades y sus atributos, mientras SQL trabaja con tablas y columnas.",
    categoria: "Consultas JPQL"
  },
  {
    id: 28,
    pregunta: "Indica cuál de las siguientes consultas JPQL es correcta:",
    opciones: [
      "SELECT * FROM tabla_alumnos",
      "SELECT a FROM Alumno a WHERE a.edad > 18",
      "SELECT nombre FROM Alumno",
      "FROM Alumnos WHERE edad > 18"
    ],
    correcta: 1,
    explicacion: "La sintaxis correcta de JPQL usa el nombre de la entidad (no la tabla), requiere un alias y trabaja con atributos de la clase.",
    categoria: "Consultas JPQL"
  },
  {
    id: 29,
    pregunta: "En el siguiente código, ¿qué representa :edadMin?\n\nquery.setParameter(\"edadMin\", 18);",
    opciones: [
      "Una columna de la tabla",
      "Un error de sintaxis",
      "Un parámetro con nombre para evitar inyección SQL",
      "El nombre de la base de datos"
    ],
    correcta: 2,
    explicacion: ":edadMin es un parámetro con nombre en JPQL que se vincula de forma segura usando setParameter, previniendo inyección SQL.",
    categoria: "Consultas JPQL"
  },
  {
    id: 30,
    pregunta: "¿Qué método se utiliza para obtener una lista de resultados en una consulta JPQL?",
    opciones: [
      "getSingleResult()",
      "execute()",
      "getResultList()",
      "list()"
    ],
    correcta: 2,
    explicacion: "El método getResultList() devuelve una lista con todos los resultados de la consulta JPQL.",
    categoria: "Consultas JPQL"
  },

  // Relaciones entre Entidades - Preguntas 31-35
  {
    id: 31,
    pregunta: "En una relación 1:N (Uno a Muchos) bidireccional, ¿qué anotación se usa normalmente en el lado 'Uno' (ej. Cliente)?",
    opciones: [
      "@ManyToOne",
      "@OneToMany",
      "@OneToOne",
      "@JoinColumn"
    ],
    correcta: 1,
    explicacion: "En el lado 'uno' de una relación 1:N se usa @OneToMany para indicar que una entidad tiene múltiples instancias de otra.",
    categoria: "Relaciones"
  },
  {
    id: 32,
    pregunta: "¿Qué indica el atributo mappedBy en una relación?",
    opciones: [
      "Indica el nombre de la tabla en la base de datos",
      "Indica que esa entidad es la propietaria de la relación",
      "Indica quién es el dueño de la relación (el otro lado) y que no se debe crear columna en este lado",
      "Indica el tipo de dato de la clave primaria"
    ],
    correcta: 2,
    explicacion: "mappedBy indica que el otro lado es el dueño de la relación (tiene la clave foránea) y que esta entidad no debe crear una columna adicional.",
    categoria: "Relaciones"
  },
  {
    id: 33,
    pregunta: "Observa el código. ¿Quién es el lado propietario (el que tiene la FK)?\n\n// Clase Pedido\n@ManyToOne\n@JoinColumn(name = \"cliente_id\")\nprivate Cliente cliente;\n\n// Clase Cliente\n@OneToMany(mappedBy = \"cliente\")\nprivate List<Pedido> pedidos;",
    opciones: [
      "Cliente",
      "Pedido",
      "Ambos",
      "Ninguno"
    ],
    correcta: 1,
    explicacion: "Pedido es el lado propietario porque tiene @JoinColumn y la clave foránea. Cliente usa mappedBy indicando que no tiene la FK.",
    categoria: "Relaciones"
  },
  {
    id: 34,
    pregunta: "¿Qué tipo de relación requiere normalmente una tabla intermedia en la base de datos?",
    opciones: [
      "Uno a Uno",
      "Muchos a Uno",
      "Muchos a Muchos (@ManyToMany)",
      "Uno a Muchos"
    ],
    correcta: 2,
    explicacion: "Las relaciones Muchos a Muchos requieren una tabla intermedia (join table) para almacenar las asociaciones entre las dos entidades.",
    categoria: "Relaciones"
  },
  {
    id: 35,
    pregunta: "En una relación @OneToOne, ¿qué hace la anotación @JoinColumn?",
    opciones: [
      "Define la columna que actuará como clave foránea",
      "Crea una tabla nueva",
      "Indica que la relación es una lista",
      "Ignora el atributo"
    ],
    correcta: 0,
    explicacion: "@JoinColumn especifica el nombre de la columna de clave foránea que se usará para establecer la relación.",
    categoria: "Relaciones"
  },

  // Transacciones - Preguntas 36-40
  {
    id: 36,
    pregunta: "¿Qué es una transacción en JPA?",
    opciones: [
      "Un pago realizado por la aplicación",
      "Una unidad indivisible de operaciones: o se ejecutan todas o ninguna",
      "Una conexión a internet",
      "Un tipo de consulta SELECT"
    ],
    correcta: 1,
    explicacion: "Una transacción es una unidad de trabajo atómica: todas las operaciones se completan exitosamente o ninguna se aplica.",
    categoria: "Transacciones"
  },
  {
    id: 37,
    pregunta: "¿Cuál de las siguientes operaciones NO requiere obligatoriamente una transacción activa (aunque es buena práctica)?",
    opciones: [
      "persist()",
      "remove()",
      "find() (lectura)",
      "merge()"
    ],
    correcta: 2,
    explicacion: "Las operaciones de lectura como find() no requieren obligatoriamente una transacción, aunque es buena práctica usarlas.",
    categoria: "Transacciones"
  },
  {
    id: 38,
    pregunta: "¿Qué método confirma los cambios en la base de datos permanentemente?",
    opciones: [
      "em.getTransaction().begin()",
      "em.getTransaction().rollback()",
      "em.getTransaction().commit()",
      "em.close()"
    ],
    correcta: 2,
    explicacion: "El método commit() confirma y hace permanentes todos los cambios realizados durante la transacción.",
    categoria: "Transacciones"
  },
  {
    id: 39,
    pregunta: "Si ocurre una excepción durante una operación de base de datos, ¿qué se debe ejecutar?",
    opciones: [
      "commit()",
      "rollback()",
      "flush()",
      "persist()"
    ],
    correcta: 1,
    explicacion: "rollback() deshace todos los cambios de la transacción actual, dejando la base de datos en su estado anterior.",
    categoria: "Transacciones"
  },
  {
    id: 40,
    pregunta: "¿Cuándo ejecuta Hibernate realmente el SQL de inserción o actualización?",
    opciones: [
      "Inmediatamente al llamar a setNombre()",
      "Al crear el objeto con new",
      "Normalmente al hacer commit() o flush()",
      "Al cerrar la aplicación"
    ],
    correcta: 2,
    explicacion: "Hibernate retrasa la ejecución del SQL hasta el commit() o flush(), optimizando el rendimiento y permitiendo el batch processing.",
    categoria: "Transacciones"
  },

  // Configuración - Preguntas 41-45
  {
    id: 41,
    pregunta: "¿Dónde debe ubicarse obligatoriamente el archivo persistence.xml?",
    opciones: [
      "En la raíz del proyecto",
      "En src/main/java",
      "En src/main/resources/META-INF/",
      "En src/test/"
    ],
    correcta: 2,
    explicacion: "El archivo persistence.xml debe estar ubicado en src/main/resources/META-INF/ para que JPA lo encuentre.",
    categoria: "Configuración"
  },
  {
    id: 42,
    pregunta: "¿Qué elemento define un grupo de configuración en persistence.xml?",
    opciones: [
      "<hibernate-configuration>",
      "<persistence-unit>",
      "<session-factory>",
      "<entity-manager>"
    ],
    correcta: 1,
    explicacion: "El elemento <persistence-unit> agrupa la configuración de persistencia, incluyendo conexión, entidades y propiedades.",
    categoria: "Configuración"
  },
  {
    id: 43,
    pregunta: "¿Qué propiedad de Hibernate permite ver en la consola las sentencias SQL que se ejecutan?",
    opciones: [
      "hibernate.dialect",
      "hibernate.show_sql",
      "hibernate.connection.url",
      "hibernate.format_sql"
    ],
    correcta: 1,
    explicacion: "La propiedad hibernate.show_sql=true muestra las sentencias SQL ejecutadas en la consola para depuración.",
    categoria: "Configuración"
  },
  {
    id: 44,
    pregunta: "¿Qué valor de hibernate.hbm2ddl.auto es el más seguro para desarrollo porque actualiza la estructura sin borrar datos?",
    opciones: [
      "create",
      "create-drop",
      "update",
      "none"
    ],
    correcta: 2,
    explicacion: "El valor 'update' actualiza el esquema de la base de datos sin eliminar datos existentes, siendo seguro para desarrollo.",
    categoria: "Configuración"
  },
  {
    id: 45,
    pregunta: "¿Qué hace hibernate.hbm2ddl.auto = create?",
    opciones: [
      "Valida el esquema",
      "Borra las tablas existentes y las vuelve a crear desde cero",
      "No hace nada",
      "Actualiza solo las columnas nuevas"
    ],
    correcta: 1,
    explicacion: "El valor 'create' elimina todas las tablas existentes y las recrea desde cero, perdiendo todos los datos.",
    categoria: "Configuración"
  },

  // Preguntas de Código y Prácticas - Preguntas 46-60
  {
    id: 46,
    pregunta: "Dado el siguiente código, ¿qué falta para iniciar la transacción?\n\nEntityManager em = emf.createEntityManager();\nAlumno a = new Alumno();\na.setNombre(\"Luis\");\nem.persist(a);\nem.getTransaction().commit();",
    opciones: [
      "Falta em.close()",
      "Falta em.getTransaction().begin(); antes del persist",
      "Falta @Entity",
      "No falta nada"
    ],
    correcta: 1,
    explicacion: "Antes de realizar operaciones de escritura, es necesario iniciar la transacción con em.getTransaction().begin().",
    categoria: "Prácticas de Código"
  },
  {
    id: 47,
    pregunta: "¿Qué método se utiliza en Hibernate 6.0+ (y JPA estándar) en lugar del deprecado session.save()?",
    opciones: [
      "session.insert()",
      "session.persist()",
      "session.store()",
      "session.create()"
    ],
    correcta: 1,
    explicacion: "En Hibernate 6.0+ y JPA estándar, se usa persist() en lugar del método deprecado save().",
    categoria: "Prácticas de Código"
  },
  {
    id: 48,
    pregunta: "En el archivo hibernate.cfg.xml, ¿qué etiqueta envuelve las propiedades de conexión?",
    opciones: [
      "<persistence-unit>",
      "<session-factory>",
      "<connection-pool>",
      "<jpa-config>"
    ],
    correcta: 1,
    explicacion: "En hibernate.cfg.xml, la etiqueta <session-factory> contiene todas las propiedades de configuración de Hibernate.",
    categoria: "Prácticas de Código"
  },
  {
    id: 49,
    pregunta: "Identifica el error en esta consulta JPQL: SELECT * FROM Alumno",
    opciones: [
      "JPQL no usa *, usa alias (ej. SELECT a FROM Alumno a)",
      "Alumno debe ser el nombre de la tabla, no de la clase",
      "Falta el WHERE",
      "Está correcta"
    ],
    correcta: 0,
    explicacion: "JPQL no permite usar *. Se debe especificar un alias de la entidad (ej. SELECT a FROM Alumno a).",
    categoria: "Prácticas de Código"
  },
  {
    id: 50,
    pregunta: "¿Cómo se inyecta un parámetro de tipo String llamado 'email' en una consulta?\n\nquery.setParameter(\"email\", \"juan@gmail.com\");",
    opciones: [
      "WHERE a.email = ?",
      "WHERE a.email = 'email'",
      "WHERE a.email = :email",
      "WHERE a.email = $email"
    ],
    correcta: 2,
    explicacion: "En JPQL, los parámetros con nombre se indican con dos puntos (:), como :email, y se vinculan con setParameter().",
    categoria: "Prácticas de Código"
  },
  {
    id: 51,
    pregunta: "Si tienes una relación @ManyToMany entre Alumno y Asignatura, ¿qué anotación define la tabla intermedia?",
    opciones: [
      "@JoinColumn",
      "@JoinTable",
      "@IntermediateTable",
      "@OneToMany"
    ],
    correcta: 1,
    explicacion: "@JoinTable define la tabla intermedia en relaciones @ManyToMany, especificando su nombre y columnas.",
    categoria: "Prácticas de Código"
  },
  {
    id: 52,
    pregunta: "¿Qué anotación se usa sobre el atributo List<Asignatura> asignaturas en la clase Alumno para indicar que es una relación de muchos a muchos?",
    opciones: [
      "@OneToMany",
      "@ManyToOne",
      "@ManyToMany",
      "@OneToOne"
    ],
    correcta: 2,
    explicacion: "La anotación @ManyToMany indica una relación de muchos a muchos entre dos entidades.",
    categoria: "Prácticas de Código"
  },
  {
    id: 53,
    pregunta: "Si ejecutas em.remove(alumno) sin una transacción activa (begin/commit), ¿qué ocurre normalmente?",
    opciones: [
      "Se borra el alumno",
      "Se lanza una excepción (TransactionRequiredException)",
      "Se borra temporalmente",
      "Hibernate ignora la orden"
    ],
    correcta: 1,
    explicacion: "Las operaciones de escritura como remove() requieren una transacción activa, de lo contrario se lanza TransactionRequiredException.",
    categoria: "Prácticas de Código"
  },
  {
    id: 54,
    pregunta: "¿Qué devuelve em.find(Alumno.class, 99L) si el alumno con ID 99 no existe?",
    opciones: [
      "Lanza una excepción",
      "Devuelve null",
      "Devuelve un objeto vacío",
      "Crea un nuevo alumno"
    ],
    correcta: 1,
    explicacion: "El método find() devuelve null si no encuentra una entidad con el ID especificado.",
    categoria: "Prácticas de Código"
  },
  {
    id: 55,
    pregunta: "Para configurar el dialecto de MySQL en hibernate.cfg.xml, se usa la propiedad:",
    opciones: [
      "hibernate.connection.driver_class",
      "hibernate.dialect",
      "hibernate.connection.url",
      "hibernate.mysql.version"
    ],
    correcta: 1,
    explicacion: "La propiedad hibernate.dialect especifica el dialecto SQL específico del sistema de base de datos (ej. MySQL, Oracle).",
    categoria: "Prácticas de Código"
  },
  {
    id: 56,
    pregunta: "En Eclipse, si sale un error de 'Wrong Compiler Settings', ¿qué se sugiere hacer?",
    opciones: [
      "Reinstalar Eclipse",
      "Cambiar el nivel de cumplimiento del compilador (Compiler Compliance Level) a una versión superior (ej. de 17 a 20)",
      "Borrar el proyecto",
      "Desactivar Hibernate"
    ],
    correcta: 1,
    explicacion: "Este error se soluciona ajustando el Compiler Compliance Level en las preferencias del proyecto a una versión compatible.",
    categoria: "Prácticas de Código"
  },
  {
    id: 57,
    pregunta: "¿Qué librería (jar) es esencial añadir al Build Path para conectarse con MySQL?",
    opciones: [
      "junit-jupiter-api",
      "mysql-connector-j",
      "hibernate-core",
      "spring-boot"
    ],
    correcta: 1,
    explicacion: "La librería mysql-connector-j (anteriormente mysql-connector-java) es el driver JDBC necesario para conectar con MySQL.",
    categoria: "Prácticas de Código"
  },
  {
    id: 58,
    pregunta: "¿Qué hace la anotación @Transient?",
    opciones: [
      "Marca un atributo para que NO se guarde en la base de datos",
      "Marca un atributo como clave primaria",
      "Marca una clase como entidad",
      "Define una relación"
    ],
    correcta: 0,
    explicacion: "La anotación @Transient indica que un atributo no debe ser persistido en la base de datos, es solo para uso en memoria.",
    categoria: "Prácticas de Código"
  },
  {
    id: 59,
    pregunta: "¿Cuál es el código correcto para obtener un solo resultado en una consulta?",
    opciones: [
      ".getResultList().get(0)",
      ".getSingleResult()",
      ".findOne()",
      ".unique()"
    ],
    correcta: 1,
    explicacion: "El método getSingleResult() devuelve un único resultado de la consulta o lanza una excepción si no hay exactamente uno.",
    categoria: "Prácticas de Código"
  },
  {
    id: 60,
    pregunta: "Al finalizar el trabajo con el EntityManager, ¿qué método se debe llamar para liberar recursos?",
    opciones: [
      "em.stop()",
      "em.finish()",
      "em.close()",
      "em.exit()"
    ],
    correcta: 2,
    explicacion: "El método close() libera los recursos del EntityManager y debe llamarse al finalizar su uso para evitar fugas de memoria.",
    categoria: "Prácticas de Código"
  }
];

export const hibernateInfo = {
  id: 'hibernate',
  titulo: 'Hibernate y JPA',
  descripcion: 'Quiz completo sobre ORM, JPA y Hibernate con 60 preguntas que cubren desde conceptos básicos hasta prácticas avanzadas.',
  temas: [
    'Introducción y Conceptos Básicos (ORM)',
    'JPA y Hibernate',
    'Entidades y Anotaciones Básicas',
    'Ciclo de Vida y EntityManager',
    'Consultas JPQL',
    'Relaciones entre Entidades',
    'Transacciones',
    'Configuración (persistence.xml y hibernate.cfg.xml)',
    'Preguntas de Código y Prácticas'
  ],
  color: 'from-red-500 to-orange-500',
  icono: '💾'
};
