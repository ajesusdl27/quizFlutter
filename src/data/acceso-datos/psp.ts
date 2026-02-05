import type { Pregunta } from '../types';

export const preguntasPsp: Pregunta[] = [
  // Bloque 1: Conceptos de ORM y JDBC
  {
    id: 1,
    pregunta: "¿Qué significan las siglas ORM?",
    opciones: [
      "Object-Relational Mapping",
      "Object-Relational Management",
      "Optimized-Relationship Model",
      "Operational-Relational Mapping"
    ],
    correcta: 0,
    explicacion: "ORM significa Object-Relational Mapping, es decir, mapeo objeto-relacional.",
    categoria: "Conceptos ORM y JDBC"
  },
  {
    id: 2,
    pregunta: "¿Cuál es el objetivo principal de un ORM?",
    opciones: [
      "Sustituir completamente a la base de datos relacional",
      "Eliminar la necesidad de usar Java en el acceso a datos",
      "Establecer un puente entre el modelo orientado a objetos y el modelo relacional",
      "Aumentar la velocidad de red entre el servidor y el cliente"
    ],
    correcta: 2,
    explicacion: "Un ORM conecta el modelo de objetos con el modelo relacional para persistir datos.",
    categoria: "Conceptos ORM y JDBC"
  },
  {
    id: 3,
    pregunta: "En el mapeo objeto-relacional, ¿a qué equivale normalmente una clase Java?",
    opciones: [
      "A una columna",
      "A una fila",
      "A una tabla",
      "A una clave foránea"
    ],
    correcta: 2,
    explicacion: "Una clase suele mapearse a una tabla en la base de datos.",
    categoria: "Conceptos ORM y JDBC"
  },
  {
    id: 4,
    pregunta: "¿A qué equivale una instancia u objeto de una clase en la base de datos?",
    opciones: [
      "A una tabla",
      "A un registro o fila",
      "A un esquema",
      "A un atributo de columna"
    ],
    correcta: 1,
    explicacion: "Un objeto persistido representa un registro (fila) en la tabla.",
    categoria: "Conceptos ORM y JDBC"
  },
  {
    id: 5,
    pregunta: "¿Cuál es uno de los principales inconvenientes de usar JDBC directamente?",
    opciones: [
      "No permite ejecutar SQL",
      "El código está muy ligado al modelo relacional y es muy repetitivo",
      "No soporta conexiones con MySQL",
      "Es demasiado automático y no permite control manual"
    ],
    correcta: 1,
    explicacion: "JDBC implica mucho código repetitivo y acoplamiento al modelo relacional.",
    categoria: "Conceptos ORM y JDBC"
  },
  {
    id: 6,
    pregunta: "¿Qué ventaja ofrece la portabilidad en un ORM como Hibernate?",
    opciones: [
      "Permite cambiar de motor de base de datos cambiando solo el dialecto en la configuración",
      "Permite que la aplicación funcione sin internet",
      "Hace que el código Java se ejecute más rápido en móviles",
      "Permite exportar los datos a Excel automáticamente"
    ],
    correcta: 0,
    explicacion: "Hibernate abstrae el motor y basta con ajustar el dialecto para cambiar de BD.",
    categoria: "Conceptos ORM y JDBC"
  },
  {
    id: 7,
    pregunta: "¿Qué es el desajuste de impedancia (Impedance Mismatch)?",
    opciones: [
      "Un error de conexión en el driver JDBC",
      "La diferencia conceptual entre el modelo de objetos y el modelo relacional",
      "La falta de electricidad en los servidores de bases de datos",
      "Un problema de sincronización de hilos en Java"
    ],
    correcta: 1,
    explicacion: "Se refiere a la discrepancia entre objetos y tablas relacionales.",
    categoria: "Conceptos ORM y JDBC"
  },
  {
    id: 8,
    pregunta: "¿Cuál de los siguientes NO es un framework ORM para Java?",
    opciones: [
      "Hibernate",
      "EclipseLink",
      "MyBatis",
      "React"
    ],
    correcta: 3,
    explicacion: "React es una librería de interfaz, no un ORM.",
    categoria: "Conceptos ORM y JDBC"
  },
  {
    id: 9,
    pregunta: "¿Cómo ayuda el ORM a la seguridad de la aplicación?",
    opciones: [
      "Cifrando el disco duro del servidor",
      "Evitando ataques de inyección SQL mediante el uso de consultas parametrizadas",
      "Impidiendo que el usuario use contraseñas cortas",
      "Bloqueando el acceso root a la base de datos"
    ],
    correcta: 1,
    explicacion: "El ORM usa consultas parametrizadas, reduciendo el riesgo de inyección SQL.",
    categoria: "Conceptos ORM y JDBC"
  },
  {
    id: 10,
    pregunta: "¿Qué capa de la aplicación se encarga de la lógica de negocio en un sistema con ORM?",
    opciones: [
      "El motor de la base de datos",
      "El modelo de objetos (entidades)",
      "El driver JDBC exclusivamente",
      "El servidor web"
    ],
    correcta: 1,
    explicacion: "La lógica de negocio suele residir en el modelo de objetos (entidades).",
    categoria: "Conceptos ORM y JDBC"
  },

  // Bloque 2: Arquitectura de Hibernate
  {
    id: 11,
    pregunta: "¿Cuál es el componente encargado de crear objetos Session?",
    opciones: [
      "TransactionManager",
      "SessionFactory",
      "QueryFactory",
      "DriverManager"
    ],
    correcta: 1,
    explicacion: "SessionFactory crea instancias de Session.",
    categoria: "Arquitectura de Hibernate"
  },
  {
    id: 12,
    pregunta: "El objeto SessionFactory es:",
    opciones: [
      "Ligero y se crea uno por cada consulta",
      "Pesado, inmutable y normalmente se crea uno por cada base de datos",
      "Un objeto que se destruye tras cada inserción",
      "El encargado de escribir el código SQL a mano"
    ],
    correcta: 1,
    explicacion: "SessionFactory es pesado, inmutable y se comparte a nivel de aplicación.",
    categoria: "Arquitectura de Hibernate"
  },
  {
    id: 13,
    pregunta: "¿Qué objeto representa una unidad de trabajo con la base de datos y es de corta duración?",
    opciones: [
      "Session",
      "SessionFactory",
      "Configuration",
      "Dialect"
    ],
    correcta: 0,
    explicacion: "Session representa una unidad de trabajo y tiene vida corta.",
    categoria: "Arquitectura de Hibernate"
  },
  {
    id: 14,
    pregunta: "¿Qué interfaz de Hibernate se utiliza para definir y ejecutar consultas contra la base de datos?",
    opciones: [
      "Statement",
      "Query",
      "Transaction",
      "Connection"
    ],
    correcta: 1,
    explicacion: "Query permite definir y ejecutar consultas HQL/JPQL.",
    categoria: "Arquitectura de Hibernate"
  },
  {
    id: 15,
    pregunta: "¿Qué componente de Hibernate permite que este se comunique con diferentes bases de datos?",
    opciones: [
      "El Driver Manager",
      "El Dialecto (Dialect)",
      "El Mapeador XML",
      "El Serializador"
    ],
    correcta: 1,
    explicacion: "El dialecto adapta el SQL a cada motor de base de datos.",
    categoria: "Arquitectura de Hibernate"
  },
  {
    id: 16,
    pregunta: "¿Es Session un objeto seguro para hilos (thread-safe)?",
    opciones: [
      "Sí, puede compartirse entre varios hilos",
      "No, no debe compartirse entre diferentes hilos",
      "Solo si se usa con Oracle",
      "Solo si la base de datos es local"
    ],
    correcta: 1,
    explicacion: "Session no es thread-safe y no debe compartirse.",
    categoria: "Arquitectura de Hibernate"
  },
  {
    id: 17,
    pregunta: "¿Qué objeto de Hibernate se encarga de gestionar la integridad de las operaciones (todo o nada)?",
    opciones: [
      "Session",
      "Transaction",
      "Query",
      "Criteria"
    ],
    correcta: 1,
    explicacion: "Transaction garantiza atomicidad con commit/rollback.",
    categoria: "Arquitectura de Hibernate"
  },
  {
    id: 18,
    pregunta: "¿Para qué sirve el archivo hibernate.cfg.xml?",
    opciones: [
      "Para definir los colores de la interfaz",
      "Para configurar la conexión a la base de datos y los recursos de mapeo",
      "Para guardar los nombres de los usuarios de la aplicación",
      "Para compilar el código Java"
    ],
    correcta: 1,
    explicacion: "Ahí se definen conexión, dialecto y recursos de mapeo.",
    categoria: "Arquitectura de Hibernate"
  },
  {
    id: 19,
    pregunta: "¿Cuál es la función del objeto Configuration en Hibernate?",
    opciones: [
      "Ejecutar consultas SQL",
      "Leer el archivo de configuración y los mapeos para crear el SessionFactory",
      "Cerrar las conexiones inactivas",
      "Cifrar las contraseñas de la base de datos"
    ],
    correcta: 1,
    explicacion: "Configuration carga la configuración y crea la SessionFactory.",
    categoria: "Arquitectura de Hibernate"
  },
  {
    id: 20,
    pregunta: "¿Qué estándar de Java implementa Hibernate?",
    opciones: [
      "J2EE",
      "JPA (Java Persistence API)",
      "JNDI",
      "JSF"
    ],
    correcta: 1,
    explicacion: "Hibernate implementa el estándar JPA.",
    categoria: "Arquitectura de Hibernate"
  },

  // Bloque 3: Mapeo de Entidades
  {
    id: 21,
    pregunta: "¿Qué anotación se utiliza para indicar que una clase es una entidad persistente?",
    opciones: [
      "@Table",
      "@Entity",
      "@Persistent",
      "@Id"
    ],
    correcta: 1,
    explicacion: "@Entity marca una clase como entidad persistente.",
    categoria: "Mapeo de Entidades"
  },
  {
    id: 22,
    pregunta: "Si una clase se llama Producto pero la tabla se llama PROD_ALMACEN, ¿qué anotación usamos?",
    opciones: [
      "@Entity(name=\"PROD_ALMACEN\")",
      "@Table(name=\"PROD_ALMACEN\")",
      "@Column(table=\"PROD_ALMACEN\")",
      "@Mapping(\"PROD_ALMACEN\")"
    ],
    correcta: 1,
    explicacion: "@Table permite indicar el nombre real de la tabla.",
    categoria: "Mapeo de Entidades"
  },
  {
    id: 23,
    pregunta: "¿Qué anotación es obligatoria para identificar la clave primaria en una entidad?",
    opciones: [
      "@Key",
      "@PrimaryKey",
      "@Id",
      "@Column(pk=true)"
    ],
    correcta: 2,
    explicacion: "@Id identifica el atributo que es clave primaria.",
    categoria: "Mapeo de Entidades"
  },
  {
    id: 24,
    pregunta: "¿Para qué sirve la anotación @GeneratedValue?",
    opciones: [
      "Para generar el código de la clase automáticamente",
      "Para indicar cómo se debe generar el valor de la clave primaria",
      "Para crear una tabla nueva",
      "Para validar que el campo no sea nulo"
    ],
    correcta: 1,
    explicacion: "@GeneratedValue define la estrategia de generación del ID.",
    categoria: "Mapeo de Entidades"
  },
  {
    id: 25,
    pregunta: "¿Cómo se mapea un atributo de clase a una columna con un nombre diferente en la tabla?",
    opciones: [
      "@Column(name=\"nombre_columna\")",
      "@Attribute(name=\"nombre_columna\")",
      "@Field(column=\"nombre_columna\")",
      "@Property(\"nombre_columna\")"
    ],
    correcta: 0,
    explicacion: "@Column(name=...) permite mapear a una columna con nombre distinto.",
    categoria: "Mapeo de Entidades"
  },
  {
    id: 26,
    pregunta: "¿Qué ocurre si no ponemos la anotación @Column en un atributo de una clase marcada como @Entity?",
    opciones: [
      "Hibernate da un error al arrancar",
      "El atributo no se guarda en la base de datos",
      "Hibernate lo mapea automáticamente usando el nombre del atributo",
      "El atributo se convierte en clave primaria por defecto"
    ],
    correcta: 2,
    explicacion: "Por defecto, Hibernate mapea usando el nombre del atributo.",
    categoria: "Mapeo de Entidades"
  },
  {
    id: 27,
    pregunta: "¿Qué anotación se usa para que un atributo no se persista en la base de datos?",
    opciones: [
      "@NoPersist",
      "@Ignore",
      "@Transient",
      "@Exclude"
    ],
    correcta: 2,
    explicacion: "@Transient marca un atributo como no persistente.",
    categoria: "Mapeo de Entidades"
  },
  {
    id: 28,
    pregunta: "En los archivos de mapeo XML (.hbm.xml), ¿qué etiqueta equivale a la anotación @Id?",
    opciones: [
      "<pk>",
      "<id>",
      "<key>",
      "<identifier>"
    ],
    correcta: 1,
    explicacion: "En XML la etiqueta <id> representa la clave primaria.",
    categoria: "Mapeo de Entidades"
  },
  {
    id: 29,
    pregunta: "¿Qué propiedad se utiliza en el XML de mapeo para indicar el nombre de la tabla?",
    opciones: [
      "El atributo table en la etiqueta <class>",
      "El atributo name en la etiqueta <hibernate-mapping>",
      "La etiqueta <table-name>",
      "No se puede indicar en el XML, solo por anotaciones"
    ],
    correcta: 0,
    explicacion: "El atributo table de <class> indica el nombre de la tabla.",
    categoria: "Mapeo de Entidades"
  },
  {
    id: 30,
    pregunta: "¿Qué significa la estrategia de generación GenerationType.IDENTITY?",
    opciones: [
      "Hibernate genera el ID usando una secuencia de la base de datos",
      "La base de datos asigna el valor (como AUTO_INCREMENT en MySQL)",
      "El programador debe asignar el ID manualmente antes de guardar",
      "Se genera un número aleatorio único"
    ],
    correcta: 1,
    explicacion: "IDENTITY delega la generación del ID en la base de datos.",
    categoria: "Mapeo de Entidades"
  },

  // Bloque 4: Ciclo de Vida de los Objetos
  {
    id: 31,
    pregunta: "¿En qué estado está un objeto recién creado con new que aún no está asociado a una sesión?",
    opciones: [
      "Persistente (Persistent)",
      "Transitorio (Transient)",
      "Desprendido (Detached)",
      "Eliminado (Removed)"
    ],
    correcta: 1,
    explicacion: "Un objeto nuevo sin sesión es transitorio.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 32,
    pregunta: "¿Qué estado adquiere un objeto cuando se guarda mediante session.save()?",
    opciones: [
      "Transitorio",
      "Persistente",
      "Desprendido",
      "Volátil"
    ],
    correcta: 1,
    explicacion: "Al guardarlo pasa a estado persistente.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 33,
    pregunta: "Un objeto en estado persistente:",
    opciones: [
      "No tiene representación en la base de datos",
      "Está asociado a una sesión y sus cambios se sincronizarán con la base de datos",
      "Solo existe en la memoria caché del navegador",
      "Ha sido borrado de la base de datos pero sigue en la sesión"
    ],
    correcta: 1,
    explicacion: "Persistente significa asociado a una sesión con sincronización de cambios.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 34,
    pregunta: "¿Qué ocurre cuando una sesión se cierra (session.close()) con los objetos asociados?",
    opciones: [
      "Se borran de la base de datos",
      "Pasan al estado desprendido (Detached)",
      "Vuelven al estado transitorio",
      "Se bloquean para siempre"
    ],
    correcta: 1,
    explicacion: "Al cerrar la sesión, los objetos pasan a detached.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 35,
    pregunta: "¿Cómo se vuelve a asociar un objeto desprendido a una nueva sesión para actualizar sus cambios?",
    opciones: [
      "Usando session.persist()",
      "Usando session.update() o session.merge()",
      "Creando el objeto de nuevo con new",
      "No es posible volver a asociarlo"
    ],
    correcta: 1,
    explicacion: "update() o merge() re-asocian un objeto detached.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 36,
    pregunta: "¿Qué método se utiliza para pasar un objeto de persistente a eliminado (Removed)?",
    opciones: [
      "session.remove()",
      "session.delete()",
      "session.discard()",
      "Tanto A como B son correctas"
    ],
    correcta: 3,
    explicacion: "Dependiendo de JPA o Hibernate, remove o delete son válidos.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 37,
    pregunta: "En estado persistente, si cambiamos un valor de un atributo:",
    opciones: [
      "Hay que llamar obligatoriamente a update()",
      "Hibernate detectará el cambio y lo sincronizará al hacer commit (Dirty Checking)",
      "El cambio se pierde si no cerramos la sesión",
      "Se produce una excepción de solo lectura"
    ],
    correcta: 1,
    explicacion: "Hibernate hace dirty checking y sincroniza al hacer commit.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 38,
    pregunta: "¿Qué significa Dirty Checking en Hibernate?",
    opciones: [
      "Limpiar la caché de consultas SQL",
      "Detectar qué objetos persistentes han sido modificados",
      "Comprobar si la base de datos tiene virus",
      "Validar que los campos no tengan caracteres extraños"
    ],
    correcta: 1,
    explicacion: "Dirty checking detecta cambios en objetos persistentes.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 39,
    pregunta: "¿Cuál es la diferencia principal entre un objeto Detached y uno Transient?",
    opciones: [
      "El Detached tiene un ID de base de datos, el Transient normalmente no",
      "El Transient vive en el servidor y el Detached en el cliente",
      "No hay diferencia",
      "El Transient ya ha sido borrado"
    ],
    correcta: 0,
    explicacion: "Detached suele tener ID porque ya fue persistido previamente.",
    categoria: "Ciclo de Vida"
  },
  {
    id: 40,
    pregunta: "¿Qué método elimina todos los objetos de la sesión actual pasando todos a estado Detached?",
    opciones: [
      "session.clear()",
      "session.flush()",
      "session.evict()",
      "session.purge()"
    ],
    correcta: 0,
    explicacion: "session.clear() vacía la sesión y deja objetos detached.",
    categoria: "Ciclo de Vida"
  },

  // Bloque 5: Operaciones CRUD y Sesiones
  {
    id: 41,
    pregunta: "¿Qué diferencia hay entre session.get() y session.load()?",
    opciones: [
      "No hay diferencia, son alias",
      "get() devuelve null si no existe; load() lanza una excepción o devuelve un proxy",
      "get() es para XML y load() para anotaciones",
      "load() siempre va a la base de datos y get() solo a la caché"
    ],
    correcta: 1,
    explicacion: "get() devuelve null si no existe, load() puede devolver proxy o lanzar excepción.",
    categoria: "CRUD y Sesiones"
  },
  {
    id: 42,
    pregunta: "¿Cuál es la función del método session.flush()?",
    opciones: [
      "Vaciar la papelera de reciclaje",
      "Sincronizar el estado de los objetos en memoria con la base de datos antes del commit",
      "Cerrar la conexión inmediatamente",
      "Borrar todos los registros de la tabla"
    ],
    correcta: 1,
    explicacion: "flush sincroniza el estado en memoria con la base de datos.",
    categoria: "CRUD y Sesiones"
  },
  {
    id: 43,
    pregunta: "Para guardar un objeto por primera vez, ¿qué método es el más adecuado en JPA/Hibernate?",
    opciones: [
      "save()",
      "persist()",
      "insert()",
      "create()"
    ],
    correcta: 1,
    explicacion: "persist() es el método estándar de JPA para nuevas entidades.",
    categoria: "CRUD y Sesiones"
  },
  {
    id: 44,
    pregunta: "Si queremos guardar un objeto o actualizarlo si ya existe, ¿qué método de Hibernate usamos?",
    opciones: [
      "session.saveOrUpdate()",
      "session.merge()",
      "session.sync()",
      "Las opciones A y B pueden servir para este propósito"
    ],
    correcta: 3,
    explicacion: "saveOrUpdate y merge pueden insertar o actualizar según el estado.",
    categoria: "CRUD y Sesiones"
  },
  {
    id: 45,
    pregunta: "¿Qué método se usa para desalojar un objeto específico de la sesión?",
    opciones: [
      "session.remove()",
      "session.evict()",
      "session.clear()",
      "session.detach()"
    ],
    correcta: 1,
    explicacion: "evict() expulsa un objeto concreto de la sesión.",
    categoria: "CRUD y Sesiones"
  },
  {
    id: 46,
    pregunta: "¿Qué ocurre si intentas guardar un objeto que ya tiene un ID que existe en la base de datos con persist()?",
    opciones: [
      "Se sobreescribe el anterior",
      "Se lanza una excepción de clave duplicada",
      "Se crea un ID nuevo automáticamente",
      "No ocurre nada, se ignora"
    ],
    correcta: 1,
    explicacion: "persist() con ID existente suele provocar error de clave duplicada.",
    categoria: "CRUD y Sesiones"
  },
  {
    id: 47,
    pregunta: "¿Es necesario iniciar una transacción para realizar una consulta de lectura (get)?",
    opciones: [
      "Sí, siempre es obligatorio",
      "No es estrictamente obligatorio para lecturas, pero sí muy recomendable",
      "Solo si la tabla tiene más de 100 filas",
      "No, Hibernate lo prohíbe"
    ],
    correcta: 1,
    explicacion: "En lecturas no siempre es obligatorio, pero se recomienda.",
    categoria: "CRUD y Sesiones"
  },
  {
    id: 48,
    pregunta: "¿Para qué sirve el método transaction.commit()?",
    opciones: [
      "Para cancelar los cambios",
      "Para confirmar permanentemente los cambios realizados en la transacción",
      "Para cerrar la sesión",
      "Para borrar los logs"
    ],
    correcta: 1,
    explicacion: "commit confirma y persiste los cambios de la transacción.",
    categoria: "CRUD y Sesiones"
  },
  {
    id: 49,
    pregunta: "¿Y el método transaction.rollback()?",
    opciones: [
      "Para repetir la operación",
      "Para deshacer los cambios realizados si ha ocurrido un error",
      "Para borrar la base de datos",
      "Para saltar a la siguiente transacción"
    ],
    correcta: 1,
    explicacion: "rollback revierte los cambios ante un error.",
    categoria: "CRUD y Sesiones"
  },
  {
    id: 50,
    pregunta: "¿Qué hace session.refresh(objeto)?",
    opciones: [
      "Limpia la pantalla",
      "Vuelve a leer el estado del objeto desde la base de datos, sobrescribiendo los cambios en memoria",
      "Actualiza la base de datos con lo que hay en memoria",
      "Cambia el ID del objeto"
    ],
    correcta: 1,
    explicacion: "refresh recarga el estado desde la BD y descarta cambios no sincronizados.",
    categoria: "CRUD y Sesiones"
  },

  // Bloque 6: Consultas (HQL y JPQL)
  {
    id: 51,
    pregunta: "¿Qué significan las siglas HQL?",
    opciones: [
      "Hibernate Query Language",
      "High Quality Language",
      "Hypertext Query Logic",
      "Hidden Query Layer"
    ],
    correcta: 0,
    explicacion: "HQL significa Hibernate Query Language.",
    categoria: "Consultas HQL/JPQL"
  },
  {
    id: 52,
    pregunta: "¿En qué se diferencia HQL de SQL?",
    opciones: [
      "SQL usa nombres de tablas y columnas; HQL usa nombres de clases y atributos",
      "SQL es más rápido que HQL siempre",
      "HQL solo funciona con MySQL",
      "SQL no permite parámetros y HQL sí"
    ],
    correcta: 0,
    explicacion: "HQL trabaja con entidades y atributos, no con tablas y columnas.",
    categoria: "Consultas HQL/JPQL"
  },
  {
    id: 53,
    pregunta: "Dada la clase Empleado, ¿cuál es una consulta HQL válida para obtener todos?",
    opciones: [
      "SELECT * FROM Empleado",
      "FROM Empleado",
      "SELECT ALL FROM empleados_tabla",
      "GET Empleado"
    ],
    correcta: 1,
    explicacion: "En HQL basta con 'FROM Empleado' para obtener todas las entidades.",
    categoria: "Consultas HQL/JPQL"
  },
  {
    id: 54,
    pregunta: "¿Cómo se define un parámetro nombrado en una consulta HQL?",
    opciones: [
      "Usando el símbolo ?",
      "Usando dos puntos seguido del nombre (ej: :nombreParam)",
      "Usando el símbolo $",
      "No se pueden usar parámetros en HQL"
    ],
    correcta: 1,
    explicacion: "Los parámetros nombrados se indican con :nombreParam.",
    categoria: "Consultas HQL/JPQL"
  },
  {
    id: 55,
    pregunta: "¿Qué método de la interfaz Query se usa para obtener una lista de resultados?",
    opciones: [
      "query.execute()",
      "query.list() o query.getResultList()",
      "query.getArray()",
      "query.fetchAll()"
    ],
    correcta: 1,
    explicacion: "list() o getResultList() devuelve una lista de resultados.",
    categoria: "Consultas HQL/JPQL"
  },
  {
    id: 56,
    pregunta: "¿Qué método se usa para obtener un único resultado de una consulta?",
    opciones: [
      "query.uniqueResult() o query.getSingleResult()",
      "query.first()",
      "query.one()",
      "query.getItem(0)"
    ],
    correcta: 0,
    explicacion: "uniqueResult o getSingleResult devuelve un solo resultado.",
    categoria: "Consultas HQL/JPQL"
  },
  {
    id: 57,
    pregunta: "¿Cómo se limita el número de resultados en una consulta HQL (paginación)?",
    opciones: [
      "Con la cláusula LIMIT de SQL",
      "Con los métodos setFirstResult() y setMaxResults() del objeto Query",
      "Poniendo un contador en un bucle for",
      "Hibernate no permite paginación"
    ],
    correcta: 1,
    explicacion: "Se usa setFirstResult y setMaxResults para paginar.",
    categoria: "Consultas HQL/JPQL"
  },
  {
    id: 58,
    pregunta: "¿Qué es una Named Query?",
    opciones: [
      "Una consulta que se escribe en el código Java directamente",
      "Una consulta predefinida con un nombre en la entidad o en el XML",
      "Una consulta que solo usa nombres de personas",
      "Una consulta que no tiene parámetros"
    ],
    correcta: 1,
    explicacion: "Named Query es una consulta predefinida con nombre.",
    categoria: "Consultas HQL/JPQL"
  },
  {
    id: 59,
    pregunta: "En HQL, para filtrar por un atributo se usa:",
    opciones: [
      "La cláusula WHERE",
      "La cláusula FILTER",
      "La cláusula HAVING exclusivamente",
      "No se puede filtrar"
    ],
    correcta: 0,
    explicacion: "El filtrado en HQL se hace con WHERE.",
    categoria: "Consultas HQL/JPQL"
  },
  {
    id: 60,
    pregunta: "¿Se pueden ejecutar consultas SQL nativas con Hibernate?",
    opciones: [
      "No, Hibernate solo entiende HQL",
      "Sí, usando createNativeQuery() o createSQLQuery()",
      "Sí, pero solo si la base de datos es SQLite",
      "Sí, pero no devuelven objetos, solo texto"
    ],
    correcta: 1,
    explicacion: "Hibernate permite SQL nativo mediante createNativeQuery().",
    categoria: "Consultas HQL/JPQL"
  },

  // Bloque 7: Relaciones
  {
    id: 61,
    pregunta: "¿Qué anotación se usa para una relación de muchos a uno?",
    opciones: [
      "@ManyToOne",
      "@OneToMany",
      "@MultipleToOne",
      "@BelongsTo"
    ],
    correcta: 0,
    explicacion: "@ManyToOne define una relación muchos a uno.",
    categoria: "Relaciones"
  },
  {
    id: 62,
    pregunta: "En una relación @OneToMany en una clase Departamento hacia Empleado, ¿qué suele devolver el atributo?",
    opciones: [
      "Un solo objeto Empleado",
      "Una colección (List, Set) de objetos Empleado",
      "Un String con los nombres",
      "El ID del jefe"
    ],
    correcta: 1,
    explicacion: "@OneToMany devuelve colecciones de entidades relacionadas.",
    categoria: "Relaciones"
  },
  {
    id: 63,
    pregunta: "¿Qué atributo de las anotaciones de relación se usa para indicar que la relación es bidireccional y quién es el dueño?",
    opciones: [
      "ownerBy",
      "mappedBy",
      "relatedTo",
      "reference"
    ],
    correcta: 1,
    explicacion: "mappedBy indica la propiedad dueña en la relación bidireccional.",
    categoria: "Relaciones"
  },
  {
    id: 64,
    pregunta: "¿Qué significa el concepto de carga perezosa (Lazy Loading)?",
    opciones: [
      "Que el programador no quiere escribir código",
      "Que los datos relacionados solo se cargan cuando se accede a ellos por primera vez",
      "Que la base de datos tarda mucho en responder",
      "Que Hibernate guarda los datos en un archivo de texto"
    ],
    correcta: 1,
    explicacion: "Lazy loading carga relaciones solo cuando se acceden.",
    categoria: "Relaciones"
  },
  {
    id: 65,
    pregunta: "¿Cuál es el valor por defecto de fetch en una relación @ManyToOne?",
    opciones: [
      "FetchType.LAZY",
      "FetchType.EAGER",
      "FetchType.RANDOM",
      "No tiene valor por defecto"
    ],
    correcta: 1,
    explicacion: "En @ManyToOne el fetch por defecto es EAGER.",
    categoria: "Relaciones"
  },
  {
    id: 66,
    pregunta: "¿Qué significa cascada (Cascade) en una relación?",
    opciones: [
      "Que si borras la base de datos, se borra el proyecto",
      "Que las operaciones realizadas sobre un objeto se propagan automáticamente a los objetos relacionados",
      "Que el código se escribe de arriba a abajo",
      "Es un tipo de error de red"
    ],
    correcta: 1,
    explicacion: "Cascade propaga operaciones del padre a los hijos.",
    categoria: "Relaciones"
  },
  {
    id: 67,
    pregunta: "Si ponemos cascade = CascadeType.REMOVE, ¿qué ocurre?",
    opciones: [
      "Se borra el objeto hijo pero no el padre",
      "Al borrar el objeto padre, se borran automáticamente todos sus hijos asociados",
      "No permite borrar nada",
      "Se borra toda la tabla"
    ],
    correcta: 1,
    explicacion: "CascadeType.REMOVE elimina los hijos al borrar el padre.",
    categoria: "Relaciones"
  },
  {
    id: 68,
    pregunta: "¿Qué anotación se usa para una relación muchos a muchos?",
    opciones: [
      "@ManyToMany",
      "@AllToAll",
      "@MultiToMulti",
      "@JoinTable"
    ],
    correcta: 0,
    explicacion: "@ManyToMany define relaciones muchos a muchos.",
    categoria: "Relaciones"
  },
  {
    id: 69,
    pregunta: "¿Qué anotación se usa para definir la tabla intermedia en una relación @ManyToMany?",
    opciones: [
      "@TableInter",
      "@JoinTable",
      "@MiddleTable",
      "@LinkTable"
    ],
    correcta: 1,
    explicacion: "@JoinTable define la tabla de unión.",
    categoria: "Relaciones"
  },
  {
    id: 70,
    pregunta: "¿Qué es un proxy en el contexto de Lazy Loading?",
    opciones: [
      "Un servidor intermedio de internet",
      "Un objeto falso o hueco que Hibernate pone en lugar del real hasta que se necesitan los datos",
      "Una clave de licencia de Hibernate",
      "Una clase que traduce de Java a C++"
    ],
    correcta: 1,
    explicacion: "Un proxy representa la entidad hasta que se carga realmente.",
    categoria: "Relaciones"
  },

  // Bloque 8: Configuración y Extras
  {
    id: 71,
    pregunta: "¿Cuál de estas propiedades en hibernate.cfg.xml muestra el SQL por consola?",
    opciones: [
      "hibernate.log_sql",
      "hibernate.show_sql",
      "hibernate.print_queries",
      "hibernate.debug"
    ],
    correcta: 1,
    explicacion: "hibernate.show_sql imprime las sentencias SQL en consola.",
    categoria: "Configuración y Extras"
  },
  {
    id: 72,
    pregunta: "¿Qué hace la propiedad hibernate.hbm2ddl.auto con el valor update?",
    opciones: [
      "Borra la tabla y la crea de nuevo siempre",
      "Actualiza la estructura de la tabla según los cambios en las clases Java",
      "Instala una nueva versión de Hibernate",
      "Actualiza los datos de las filas"
    ],
    correcta: 1,
    explicacion: "update sincroniza el esquema con las entidades sin borrar datos.",
    categoria: "Configuración y Extras"
  },
  {
    id: 73,
    pregunta: "¿Y con el valor create?",
    opciones: [
      "Crea la base de datos si no existe, pero no las tablas",
      "Crea las tablas al arrancar, borrando las que ya existieran",
      "Crea un informe de errores",
      "No existe ese valor"
    ],
    correcta: 1,
    explicacion: "create recrea el esquema al arrancar.",
    categoria: "Configuración y Extras"
  },
  {
    id: 74,
    pregunta: "¿Para qué sirve la propiedad hibernate.connection.url?",
    opciones: [
      "Para poner la página web de la empresa",
      "Para indicar la dirección de conexión del motor relacional",
      "Para descargar el driver JDBC",
      "Para configurar el correo electrónico"
    ],
    correcta: 1,
    explicacion: "Indica la URL de conexión a la base de datos.",
    categoria: "Configuración y Extras"
  },
  {
    id: 75,
    pregunta: "¿Qué es la caché de primer nivel en Hibernate?",
    opciones: [
      "Una caché asociada a la SessionFactory",
      "Una caché asociada a la Session (ámbito de transacción)",
      "El disco SSD del servidor",
      "La memoria RAM del cliente"
    ],
    correcta: 1,
    explicacion: "La caché de primer nivel vive en la Session.",
    categoria: "Configuración y Extras"
  },
  {
    id: 76,
    pregunta: "¿Qué ocurre si intentamos acceder a un atributo cargado de forma Lazy después de cerrar la sesión?",
    opciones: [
      "Devuelve null",
      "Lanza una LazyInitializationException",
      "Funciona correctamente porque ya estaba en memoria",
      "El programa se bloquea infinitamente"
    ],
    correcta: 1,
    explicacion: "Sin sesión activa, el proxy lazy provoca LazyInitializationException.",
    categoria: "Configuración y Extras"
  },
  {
    id: 77,
    pregunta: "¿Qué interfaz se utiliza para crear consultas de forma programática?",
    opciones: [
      "HQLBuilder",
      "CriteriaBuilder / CriteriaQuery",
      "SQLNativeBuilder",
      "ObjectQuery"
    ],
    correcta: 1,
    explicacion: "CriteriaBuilder/CriteriaQuery permiten construir consultas programáticamente.",
    categoria: "Configuración y Extras"
  },
  {
    id: 78,
    pregunta: "¿Cómo se indica en un archivo .hbm.xml que un campo es autoincremental?",
    opciones: [
      "Con <generator class=\"native\"> o \"identity\"",
      "Con la etiqueta <auto-increment>",
      "Con el atributo auto=\"true\"",
      "Hibernate XML no soporta autoincrementos"
    ],
    correcta: 0,
    explicacion: "Se usa <generator class=\"native\"> o identity para autoincremento.",
    categoria: "Configuración y Extras"
  },
  {
    id: 79,
    pregunta: "¿Qué ventaja tiene usar anotaciones frente a ficheros XML de mapeo?",
    opciones: [
      "El código y el mapeo están en el mismo sitio, siendo más fácil de mantener",
      "Las anotaciones son más rápidas de ejecutar",
      "Los XML no funcionan en Java 17",
      "Las anotaciones permiten usar SQL y los XML no"
    ],
    correcta: 0,
    explicacion: "Las anotaciones simplifican el mantenimiento al estar junto al código.",
    categoria: "Configuración y Extras"
  },
  {
    id: 80,
    pregunta: "¿Cuál es la función principal de JPA en el ecosistema Java?",
    opciones: [
      "Ser una base de datos orientada a objetos",
      "Proporcionar una especificación estándar para el ORM en Java",
      "Sustituir a la JVM",
      "Crear interfaces gráficas"
    ],
    correcta: 1,
    explicacion: "JPA define un estándar para el ORM en Java.",
    categoria: "Configuración y Extras"
  }
];
