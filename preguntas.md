Aquí tienes un cuestionario de 80 preguntas tipo test sobre el tema de Correspondencia Objeto-Relacional (ORM) y Hibernate, basado en los contenidos del temario y excluyendo los procesos de instalación.

Bloque 1: Conceptos de ORM y JDBC
1. ¿Qué significan las siglas ORM? A) Object-Relational Mapping. B) Object-Relational Management. C) Optimized-Relationship Model. D) Operational-Relational Mapping. Respuesta correcta: A

2. ¿Cuál es el objetivo principal de un ORM? A) Sustituir completamente a la base de datos relacional. B) Eliminar la necesidad de usar Java en el acceso a datos. C) Establecer un puente entre el modelo orientado a objetos y el modelo relacional. D) Aumentar la velocidad de red entre el servidor y el cliente. Respuesta correcta: C

3. En el mapeo objeto-relacional, ¿a qué equivale normalmente una Clase Java? A) A una columna. B) A una fila. C) A una tabla. D) A una clave foránea. Respuesta correcta: C

4. ¿A qué equivale una instancia u objeto de una clase en la base de datos? A) A una tabla. B) A un registro o fila. C) A un esquema. D) A un atributo de columna. Respuesta correcta: B

5. ¿Cuál es uno de los principales inconvenientes de usar JDBC directamente? A) No permite ejecutar SQL. B) El código está muy ligado al modelo relacional y es muy repetitivo. C) No soporta conexiones con MySQL. D) Es demasiado automático y no permite control manual. Respuesta correcta: B

6. ¿Qué ventaja ofrece la "Portabilidad" en un ORM como Hibernate? A) Permite cambiar de motor de base de datos cambiando solo el dialecto en la configuración. B) Permite que la aplicación funcione sin internet. C) Hace que el código Java se ejecute más rápido en móviles. D) Permite exportar los datos a Excel automáticamente. Respuesta correcta: A

7. ¿Qué es el "Desajuste de Impedancia" (Impedance Mismatch)? A) Un error de conexión en el driver JDBC. B) La diferencia conceptual entre el modelo de objetos y el modelo relacional. C) La falta de electricidad en los servidores de bases de datos. D) Un problema de sincronización de hilos en Java. Respuesta correcta: B

8. ¿Cuál de los siguientes NO es un framework ORM para Java? A) Hibernate. B) EclipseLink. C) MyBatis. D) React. Respuesta correcta: D

9. ¿Cómo ayuda el ORM a la seguridad de la aplicación? A) Cifrando el disco duro del servidor. B) Evitando ataques de inyección SQL mediante el uso de consultas parametrizadas. C) Impidiendo que el usuario use contraseñas cortas. D) Bloqueando el acceso root a la base de datos. Respuesta correcta: B

10. ¿Qué capa de la aplicación se encarga de la lógica de negocio en un sistema con ORM? A) El motor de la base de datos. /B) El modelo de objetos (entidades). C) El driver JDBC exclusivamente. D) El servidor web. Respuesta correcta: B

Bloque 2: Arquitectura de Hibernate
11. ¿Cuál es el componente encargado de crear objetos Session? A) TransactionManager. B) SessionFactory. C) QueryFactory. D) DriverManager. Respuesta correcta: B

12. El objeto SessionFactory es: A) Ligero y se crea uno por cada consulta. B) Pesado, inmutable y normalmente se crea uno por cada base de datos. C) Un objeto que se destruye tras cada inserción. D) El encargado de escribir el código SQL a mano. Respuesta correcta: B

13. ¿Qué objeto representa una unidad de trabajo con la base de datos y es de corta duración? A) Session. B) SessionFactory. C) Configuration. D) Dialect. Respuesta correcta: A

14. ¿Qué interfaz de Hibernate se utiliza para definir y ejecutar consultas contra la base de datos? A) Statement. B) Query. C) Transaction. D) Connection. Respuesta correcta: B

15. ¿Qué componente de Hibernate permite que este se comunique con diferentes bases de datos (Oracle, MySQL, PostgreSQL)? A) El Driver manager. B) El Dialecto (Dialect). C) El Mapeador XML. D) El Serializador. Respuesta correcta: B

16. ¿Es Session un objeto seguro para hilos (thread-safe)? A) Sí, puede compartirse entre varios hilos. B) No, no debe compartirse entre diferentes hilos. C) Solo si se usa con Oracle. D) Solo si la base de datos es local. Respuesta correcta: B

17. ¿Qué objeto de Hibernate se encarga de gestionar la integridad de las operaciones (todo o nada)? A) Session. B) Transaction. C) Query. D) Criteria. Respuesta correcta: B

18. ¿Para qué sirve el archivo hibernate.cfg.xml? A) Para definir los colores de la interfaz. B) Para configurar la conexión a la base de datos y los recursos de mapeo. C) Para guardar los nombres de los usuarios de la aplicación. D) Para compilar el código Java. Respuesta correcta: B

19. ¿Cuál es la función del objeto Configuration en Hibernate? A) Ejecutar consultas SQL. /B) Leer el archivo de configuración y los mapeos para crear el SessionFactory. C) Cerrar las conexiones inactivas. D) Cifrar las contraseñas de la base de datos. Respuesta correcta: B

20. ¿Qué estándar de Java implementa Hibernate? A) J2EE. B) JPA (Java Persistence API). C) JNDI. D) JSF. Respuesta correcta: B

Bloque 3: Mapeo de Entidades
21. ¿Qué anotación se utiliza para indicar que una clase es una entidad persistente? A) @Table. B) @Entity. C) @Persistent. D) @Id. Respuesta correcta: B

22. Si una clase se llama Producto pero la tabla se llama PROD_ALMACEN, ¿qué anotación usamos? A) @Entity(name="PROD_ALMACEN"). B) @Table(name="PROD_ALMACEN"). C) @Column(table="PROD_ALMACEN"). D) @Mapping("PROD_ALMACEN"). Respuesta correcta: B

23. ¿Qué anotación es obligatoria para identificar la clave primaria en una entidad? A) @Key. B) @PrimaryKey. C) @Id. D) @Column(pk=true). Respuesta correcta: C

24. ¿Para qué sirve la anotación @GeneratedValue? A) Para generar el código de la clase automáticamente. B) Para indicar cómo se debe generar el valor de la clave primaria (ej: autoincremento). C) Para crear una tabla nueva. D) Para validar que el campo no sea nulo. Respuesta correcta: B

25. ¿Cómo se mapea un atributo de clase a una columna con un nombre diferente en la tabla? A) @Column(name="nombre_columna"). B) @Attribute(name="nombre_columna"). C) @Field(column="nombre_columna"). D) @Property("nombre_columna"). Respuesta correcta: A

26. ¿Qué ocurre si no ponemos la anotación @Column en un atributo de una clase marcada como @Entity? A) Hibernate da un error al arrancar. B) El atributo no se guarda en la base de datos. C) Hibernate lo mapea automáticamente usando el nombre del atributo. D) El atributo se convierte en clave primaria por defecto. Respuesta correcta: C

27. ¿Qué anotación se usa para que un atributo no se persista en la base de datos? A) @NoPersist. B) @Ignore. C) @Transient. D) @Exclude. Respuesta correcta: C

28. En los archivos de mapeo XML (.hbm.xml), ¿qué etiqueta equivale a la anotación @Id? A) <pk>. B) <id>. C) <key>. D) <identifier>. Respuesta correcta: B

29. ¿Qué propiedad se utiliza en el XML de mapeo para indicar el nombre de la tabla? A) El atributo table en la etiqueta <class>. B) El atributo name en la etiqueta <hibernate-mapping>. C) La etiqueta <table-name>. D) No se puede indicar en el XML, solo por anotaciones. Respuesta correcta: A

30. ¿Qué significa la estrategia de generación GenerationType.IDENTITY? A) Hibernate genera el ID usando una secuencia de la base de datos. B) La base de datos asigna el valor (como AUTO_INCREMENT en MySQL). C) El programador debe asignar el ID manualmente antes de guardar. D) Se genera un número aleatorio único. Respuesta correcta: B

Bloque 4: Ciclo de Vida de los Objetos
31. ¿En qué estado está un objeto recién creado con new que aún no está asociado a una sesión? A) Persistente (Persistent). B) Transitorio (Transient). C) Desprendido (Detached). D) Eliminado (Removed). Respuesta correcta: B

32. ¿Qué estado adquiere un objeto cuando se guarda mediante session.save()? A) Transitorio. B) Persistente. C) Desprendido. D) Volátil. Respuesta correcta: B

33. Un objeto en estado "Persistente": A) No tiene representación en la base de datos. B) Está asociado a una sesión y sus cambios se sincronizarán con la base de datos. C) Solo existe en la memoria caché del navegador. D) Ha sido borrado de la base de datos pero sigue en la sesión. Respuesta correcta: B

34. ¿Qué ocurre cuando una sesión se cierra (session.close()) con los objetos que estaban asociados a ella? A) Se borran de la base de datos. B) Pasan al estado "Desprendido" (Detached). C) Vuelven al estado "Transitorio". D) Se bloquean para siempre. Respuesta correcta: B

35. ¿Cómo se vuelve a asociar un objeto "Desprendido" a una nueva sesión para actualizar sus cambios? A) Usando session.persist(). B) Usando session.update() o session.merge(). C) Creando el objeto de nuevo con new. D) No es posible volver a asociarlo. Respuesta correcta: B

36. ¿Qué método se utiliza para pasar un objeto de Persistente a Eliminado (Removed)? A) session.remove(). B) session.delete(). C) session.discard(). D) Tanto A como B son correctas (dependiendo de si se usa JPA puro o Hibernate). Respuesta correcta: D

37. En el estado "Persistent", si cambiamos un valor de un atributo con un setNombre(): A) Hay que llamar obligatoriamente a update() para que se entere. B) Hibernate detectará el cambio y lo sincronizará al hacer commit (Dirty Checking). C) El cambio se pierde si no cerramos la sesión. D) Se produce una excepción de solo lectura. Respuesta correcta: B

38. ¿Qué significa "Dirty Checking" en Hibernate? A) Limpiar la caché de consultas SQL. B) El mecanismo por el cual Hibernate detecta qué objetos persistentes han sido modificados. C) Comprobar si la base de datos tiene virus. D) Validar que los campos no tengan caracteres extraños. Respuesta correcta: B

39. ¿Cuál es la diferencia principal entre un objeto Detached y uno Transient? A) El Detached tiene un ID de base de datos, el Transient normalmente no. B) El Transient vive en el servidor y el Detached en el cliente. C) No hay diferencia. D) El Transient ya ha sido borrado. Respuesta correcta: A

40. ¿Qué método elimina todos los objetos de la sesión actual pasando todos a estado Detached? A) session.clear(). B) session.flush(). C) session.evict(). D) session.purge(). Respuesta correcta: A

Bloque 5: Operaciones CRUD y Sesiones
41. ¿Qué diferencia hay entre session.get() y session.load()? A) No hay diferencia, son alias. B) get() devuelve null si no existe; load() lanza una excepción o devuelve un proxy. C) get() es para XML y load() para anotaciones. D) load() siempre va a la base de datos y get() solo a la caché. Respuesta correcta: B

42. ¿Cuál es la función del método session.flush()? A) Vaciar la papelera de reciclaje. B) Sincronizar el estado de los objetos en memoria con la base de datos antes del commit. C) Cerrar la conexión inmediatamente. D) Borrar todos los registros de la tabla. Respuesta correcta: B

43. Para guardar un objeto por primera vez, ¿qué método es el más adecuado en JPA/Hibernate? A) save(). B) persist(). C) insert(). D) create(). Respuesta correcta: B

44. Si queremos guardar un objeto o actualizarlo si ya existe, ¿qué método de Hibernate usamos? A) session.saveOrUpdate(). B) session.merge(). C) session.sync(). D) Las opciones A y B pueden servir para este propósito. Respuesta correcta: D

45. ¿Qué método se usa para desalojar un objeto específico de la sesión (quitarlo de la memoria caché)? A) session.remove(). B) session.evict(). C) session.clear(). D) session.detach(). Respuesta correcta: B

46. ¿Qué ocurre si intentas guardar un objeto que ya tiene un ID que existe en la base de datos con persist()? A) Se sobreescribe el anterior. B) Se lanza una excepción de clave duplicada. C) Se crea un ID nuevo automáticamente. D) No ocurre nada, se ignora. Respuesta correcta: B

47. ¿Es necesario iniciar una transacción para realizar una consulta de lectura (get)? A) Sí, siempre es obligatorio. B) No es estrictamente obligatorio para lecturas, pero sí muy recomendable. C) Solo si la tabla tiene más de 100 filas. D) No, Hibernate lo prohíbe. Respuesta correcta: B

48. ¿Para qué sirve el método transaction.commit()? A) Para cancelar los cambios. B) Para confirmar permanentemente los cambios realizados en la transacción. C) Para cerrar la sesión. D) Para borrar los logs. Respuesta correcta: B

49. ¿Y el método transaction.rollback()? A) Para repetir la operación. B) Para deshacer los cambios realizados si ha ocurrido un error. C) Para borrar la base de datos. D) Para saltar a la siguiente transacción. Respuesta correcta: B

50. ¿Qué hace session.refresh(objeto)? A) Limpia la pantalla. B) Vuelve a leer el estado del objeto desde la base de datos, sobrescribiendo los cambios en memoria. C) Actualiza la base de datos con lo que hay en memoria. D) Cambia el ID del objeto. Respuesta correcta: B

Bloque 6: Consultas (HQL y JPQL)
51. ¿Qué significan las siglas HQL? A) Hibernate Query Language. B) High Quality Language. C) Hypertext Query Logic. D) Hidden Query Layer. Respuesta correcta: A

52. ¿En qué se diferencia HQL de SQL? A) SQL usa nombres de tablas y columnas; HQL usa nombres de clases y atributos. B) SQL es más rápido que HQL siempre. C) HQL solo funciona con MySQL. D) SQL no permite parámetros y HQL sí. Respuesta correcta: A

53. Dada la clase Empleado, ¿cuál es una consulta HQL válida para obtener todos? A) SELECT * FROM Empleado. B) FROM Empleado. C) SELECT ALL FROM empleados_tabla. D) GET Empleado. Respuesta correcta: B

54. ¿Cómo se define un parámetro nombrado en una consulta HQL? A) Usando el símbolo ?. B) Usando dos puntos seguido del nombre (ej: :nombreParam). C) Usando el símbolo $. D) No se pueden usar parámetros en HQL. Respuesta correcta: B

55. ¿Qué método de la interfaz Query se usa para obtener una lista de resultados? A) query.execute(). B) query.list() o query.getResultList(). C) query.getArray(). D) query.fetchAll(). Respuesta correcta: B

56. ¿Qué método se usa para obtener un único resultado de una consulta? A) query.uniqueResult() o query.getSingleResult(). B) query.first(). C) query.one(). D) query.getItem(0). Respuesta correcta: A

57. ¿Cómo se limita el número de resultados en una consulta HQL (paginación)? A) Con la cláusula LIMIT de SQL. B) Con los métodos setFirstResult() y setMaxResults() del objeto Query. C) Poniendo un contador en un bucle for. D) Hibernate no permite paginación. Respuesta correcta: B

58. ¿Qué es una "Named Query"? A) Una consulta que se escribe en el código Java directamente. B) Una consulta predefinida con un nombre en la entidad (anotación @NamedQuery) o en el XML. C) Una consulta que solo usa nombres de personas. D) Una consulta que no tiene parámetros. Respuesta correcta: B

59. En HQL, para filtrar por un atributo se usa: A) La cláusula WHERE. B) La cláusula FILTER. C) La cláusula HAVING exclusivamente. D) No se puede filtrar. Respuesta correcta: A

60. ¿Se pueden ejecutar consultas SQL nativas con Hibernate? A) No, Hibernate solo entiende HQL. B) Sí, usando el método createNativeQuery() o createSQLQuery(). C) Sí, pero solo si la base de datos es SQLite. D) Sí, pero no devuelven objetos, solo texto. Respuesta correcta: B

Bloque 7: Relaciones
61. ¿Qué anotación se usa para una relación de "Muchos a Uno"? A) @ManyToOne. B) @OneToMany. C) @MultipleToOne. D) @BelongsTo. Respuesta correcta: A

62. En una relación @OneToMany en una clase Departamento hacia Empleado, ¿qué suele devolver el atributo? A) Un solo objeto Empleado. /B) Una colección (List, Set) de objetos Empleado. C) Un String con los nombres. D) El ID del jefe. Respuesta correcta: B

63. ¿Qué atributo de las anotaciones de relación se usa para indicar que la relación es bidireccional y quién es el "dueño"? A) ownerBy. B) mappedBy. C) relatedTo. D) reference. Respuesta correcta: B

64. ¿Qué significa el concepto de "Carga Perezosa" (Lazy Loading)? A) Que el programador no quiere escribir código. B) Que los datos relacionados solo se cargan de la base de datos cuando se accede a ellos por primera vez. C) Que la base de datos tarda mucho en responder. D) Que Hibernate guarda los datos en un archivo de texto. Respuesta correcta: B

65. ¿Cuál es el valor por defecto de fetch en una relación @ManyToOne? A) FetchType.LAZY. B) FetchType.EAGER (Carga inmediata). C) FetchType.RANDOM. D) No tiene valor por defecto. Respuesta correcta: B

66. ¿Qué significa "Cascada" (Cascade) en una relación? A) Que si borras la base de datos, se borra el proyecto. B) Que las operaciones realizadas sobre un objeto se propagan automáticamente a los objetos relacionados. C) Que el código se escribe de arriba a abajo. D) Es un tipo de error de red. Respuesta correcta: B

67. Si ponemos cascade = CascadeType.REMOVE, ¿qué ocurre? A) Se borra el objeto hijo pero no el padre. B) Al borrar el objeto padre, se borran automáticamente todos sus hijos asociados. C) No permite borrar nada. D) Se borra toda la tabla. Respuesta correcta: B

68. ¿Qué anotación se usa para una relación "Muchos a Muchos"? A) @ManyToMany. B) @AllToAll. C) @MultiToMulti. D) @JoinTable. Respuesta correcta: A

69. ¿Qué anotación se usa para definir la tabla intermedia en una relación @ManyToMany? A) @TableInter. B) @JoinTable. C) @MiddleTable. D) @LinkTable. Respuesta correcta: B

70. ¿Qué es un "Proxy" en el contexto de Lazy Loading? A) Un servidor intermedio de internet. B) Un objeto "falso" o hueco que Hibernate pone en lugar del real hasta que se necesitan los datos. C) Una clave de licencia de Hibernate. D) Una clase que traduce de Java a C++. Respuesta correcta: B

Bloque 8: Configuración y Extras
71. ¿Cuál de estas propiedades en hibernate.cfg.xml muestra el SQL por consola? A) hibernate.log_sql. B) hibernate.show_sql. C) hibernate.print_queries. D) hibernate.debug. Respuesta correcta: B

72. ¿Qué hace la propiedad hibernate.hbm2ddl.auto con el valor update? A) Borra la tabla y la crea de nuevo siempre. B) Actualiza la estructura de la tabla en la base de datos según los cambios en las clases Java. C) Instala una nueva versión de Hibernate. D) Actualiza los datos de las filas. Respuesta correcta: B

73. ¿Y con el valor create? A) Crea la base de datos si no existe, pero no las tablas. B) Crea las tablas al arrancar, borrando las que ya existieran. C) Crea un informe de errores. D) No existe ese valor. Respuesta correcta: B

74. ¿Para qué sirve la propiedad hibernate.connection.url? A) Para poner la página web de la empresa. B) Para indicar la dirección de conexión (host, puerto, base de datos) del motor relacional. C) Para descargar el driver JDBC. D) Para configurar el correo electrónico. Respuesta correcta: B

75. ¿Qué es la Caché de Primer Nivel en Hibernate? A) Una caché asociada a la SessionFactory. B) Una caché asociada a la Session (ámbito de transacción). C) El disco SSD del servidor. D) La memoria RAM del cliente. Respuesta correcta: B

76. ¿Qué ocurre si intentamos acceder a un atributo cargado de forma Lazy después de haber cerrado la sesión? A) Devuelve null. B) Lanza una LazyInitializationException. C) Funciona correctamente porque ya estaba en memoria. D) El programa se bloquea infinitamente. Respuesta correcta: B

77. ¿Qué interfaz se utiliza para crear consultas de forma programática (mediante objetos en lugar de texto)? A) HQLBuilder. B) CriteriaBuilder / CriteriaQuery. C) SQLNativeBuilder. D) ObjectQuery. Respuesta correcta: B

78. ¿Cómo se indica en un archivo .hbm.xml que un campo es autoincremental? A) Con <generator class="native"> o "identity". /B) Con la etiqueta <auto-increment>. C) Con el atributo auto="true". D) Hibernate XML no soporta autoincrementos. Respuesta correcta: A

79. ¿Qué ventaja tiene usar anotaciones frente a ficheros XML de mapeo? A) El código y el mapeo están en el mismo sitio, siendo más fácil de mantener. B) Las anotaciones son más rápidas de ejecutar. C) Los XML no funcionan en Java 17. D) Las anotaciones permiten usar SQL y los XML no. Respuesta correcta: A

80. ¿Cuál es la función principal de JPA en el ecosistema Java? A) Ser una base de datos orientada a objetos. B) Proporcionar una especificación estándar para el ORM en Java. C) Sustituir a la JVM. D) Crear interfaces gráficas. Respuesta correcta: B