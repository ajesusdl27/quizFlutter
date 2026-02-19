import type { Pregunta } from "../types";

export const tema2PythonIaInfo = {
  id: "tema2-python-ia",
  titulo: "Tema 2 – Python para IA (2º Trimestre)",
  descripcion:
    "Preguntas del 2º trimestre: limpieza de datos, Pandas y NumPy, outliers, visualización y evaluación de modelos.",
  temas: [
    "Carga y limpieza de datos",
    "Pandas y NumPy",
    "Outliers y normalización",
    "Visualización",
    "Evaluación de modelos",
  ],
  color: "from-violet-500 to-purple-600",
  icono: "🐍",
};

export const preguntasTema2PythonIa: Pregunta[] = [
  { id: 1, pregunta: "¿Cuál es el primer paso habitual en un proyecto de IA basado en datos?", opciones: ["Entrenar el modelo", "Cargar y explorar los datos", "Visualizar resultados", "Desplegar el modelo"], correcta: 1, explicacion: "Antes de entrenar, se debe conocer y revisar el dataset.", categoria: "Python para IA" },
  { id: 2, pregunta: "¿Qué significa “limpiar datos”?", opciones: ["Borrar el dataset", "Eliminar columnas siempre", "Corregir errores, nulos y formatos", "Reducir el tamaño del modelo"], correcta: 2, explicacion: "Limpiar datos implica mejorar la calidad del dato corrigiendo inconsistencias.", categoria: "Python para IA" },
  { id: 3, pregunta: "¿Qué problema indica la presencia de valores nulos?", opciones: ["Error del modelo", "Problema de calidad del dato", "Error de Python", "Problema de GPU"], correcta: 1, explicacion: "Los nulos suelen señalar datos incompletos o problemas de recogida.", categoria: "Python para IA" },
  { id: 4, pregunta: "¿Qué es el feature engineering?", opciones: ["Crear gráficos", "Crear nuevas variables útiles", "Cambiar el lenguaje", "Reducir el dataset"], correcta: 1, explicacion: "Consiste en construir características que ayuden al modelo a aprender mejor.", categoria: "Python para IA" },
  { id: 5, pregunta: "¿Qué significa transformar una variable categórica a numérica?", opciones: ["Eliminarla", "Codificarla para que el modelo la entienda", "Dibujarla", "Ordenarla alfabéticamente"], correcta: 1, explicacion: "Los algoritmos suelen requerir entradas numéricas para operar.", categoria: "Python para IA" },
  { id: 6, pregunta: "NumPy se utiliza principalmente para:", opciones: ["Crear interfaces gráficas", "Trabajo eficiente con arrays numéricos", "Crear servidores", "Programar videojuegos"], correcta: 1, explicacion: "NumPy optimiza operaciones matemáticas sobre arrays.", categoria: "Python para IA" },
  { id: 7, pregunta: "¿Qué devuelve `.to_numpy()` en Pandas?", opciones: ["Lista", "Diccionario", "Array NumPy", "DataFrame"], correcta: 2, explicacion: "Devuelve los datos como un array de NumPy.", categoria: "Python para IA" },
  { id: 8, pregunta: "¿Qué función de NumPy calcula la desviación típica?", opciones: ["np.mean()", "np.std()", "np.sum()", "np.varianza()"], correcta: 1, explicacion: "`np.std()` calcula la desviación estándar.", categoria: "Python para IA" },
  { id: 9, pregunta: "¿Para qué sirven las máscaras booleanas?", opciones: ["Dibujar gráficos", "Filtrar datos", "Crear modelos", "Guardar archivos"], correcta: 1, explicacion: "Permiten seleccionar filas o valores que cumplen una condición.", categoria: "Python para IA" },
  { id: 10, pregunta: "¿Qué es normalizar datos?", opciones: ["Eliminarlos", "Escalarlos a un rango comparable", "Ordenarlos", "Convertirlos a texto"], correcta: 1, explicacion: "Normalizar coloca variables en escalas similares.", categoria: "Python para IA" },
  { id: 11, pregunta: "¿Qué estructura principal usa Pandas?", opciones: ["Array", "DataFrame", "Diccionario", "Tensor"], correcta: 1, explicacion: "El DataFrame es la estructura tabular central de Pandas.", categoria: "Python para IA" },
  { id: 12, pregunta: "¿Qué muestra `df.head()`?", opciones: ["Últimas filas", "Primeras filas", "Columnas", "Estadísticas"], correcta: 1, explicacion: "Muestra por defecto las primeras filas del DataFrame.", categoria: "Python para IA" },
  { id: 13, pregunta: "¿Qué función resume estadísticas numéricas?", opciones: ["df.info()", "df.describe()", "df.stats()", "df.summary()"], correcta: 1, explicacion: "`df.describe()` resume métricas como media y percentiles.", categoria: "Python para IA" },
  { id: 14, pregunta: "¿Qué método cuenta valores por categoría?", opciones: ["count()", "value_counts()", "group()", "unique_count()"], correcta: 1, explicacion: "`value_counts()` devuelve frecuencias por valor.", categoria: "Python para IA" },
  { id: 15, pregunta: "¿Qué hace `df.info()`?", opciones: ["Gráficos", "Tipos y nulos", "Ordena datos", "Calcula media"], correcta: 1, explicacion: "Muestra tipos de columna y conteo de valores no nulos.", categoria: "Python para IA" },
  { id: 16, pregunta: "Un valor fuera de rango es:", opciones: ["Feature", "Outlier", "Etiqueta", "Métrica"], correcta: 1, explicacion: "Un valor atípico respecto al resto de la distribución.", categoria: "Python para IA" },
  { id: 17, pregunta: "El método IQR se usa para:", opciones: ["Entrenar modelos", "Detectar outliers", "Normalizar", "Clasificar"], correcta: 1, explicacion: "IQR ayuda a identificar valores extremos.", categoria: "Python para IA" },
  { id: 18, pregunta: "¿Qué indica un outlier?", opciones: ["Error siempre", "Valor inusual respecto al resto", "Dato categórico", "Media del dataset"], correcta: 1, explicacion: "Es un valor poco habitual comparado con la mayoría.", categoria: "Python para IA" },
  { id: 19, pregunta: "¿Por qué es importante detectar outliers?", opciones: ["Para hacer gráficos más bonitos", "Porque pueden distorsionar el modelo", "Para eliminar datos siempre", "Para acelerar Python"], correcta: 1, explicacion: "Pueden sesgar métricas y afectar el rendimiento del modelo.", categoria: "Python para IA" },
  { id: 20, pregunta: "¿Qué librería es más usada para gráficos básicos?", opciones: ["NumPy", "Matplotlib", "Requests", "Flask"], correcta: 1, explicacion: "Matplotlib es la referencia para gráficos base en Python.", categoria: "Python para IA" },
  { id: 21, pregunta: "Seaborn se usa para:", opciones: ["Redes", "Visualización estadística", "ML", "Bases de datos"], correcta: 1, explicacion: "Seaborn facilita visualizaciones estadísticas.", categoria: "Python para IA" },
  { id: 22, pregunta: "Un boxplot permite ver:", opciones: ["Solo la media", "Distribución y outliers", "Columnas", "Texto"], correcta: 1, explicacion: "Muestra cuartiles y posibles valores atípicos.", categoria: "Python para IA" },
  { id: 23, pregunta: "Un scatterplot sirve para:", opciones: ["Ver relación entre variables", "Contar categorías", "Ver tipos", "Limpiar datos"], correcta: 0, explicacion: "Representa relación entre dos variables numéricas.", categoria: "Python para IA" },
  { id: 24, pregunta: "¿Qué indica la correlación visual?", opciones: ["Causalidad", "Relación posible entre variables", "Error del dataset", "Overfitting"], correcta: 1, explicacion: "Sugiere asociación, pero no demuestra causalidad.", categoria: "Python para IA" },
  { id: 25, pregunta: "¿Qué significa “dataset fuera de distribución”?", opciones: ["Dataset grande", "Datos distintos a los de entrenamiento", "Dataset limpio", "Dataset normalizado"], correcta: 1, explicacion: "Son datos nuevos con patrón diferente al visto en entrenamiento.", categoria: "Python para IA" },
  { id: 26, pregunta: "¿Qué problema ocurre si el modelo aprende demasiado los datos?", opciones: ["Underfitting", "Overfitting", "Drift", "Bias"], correcta: 1, explicacion: "Overfitting: memoriza entrenamiento y falla al generalizar.", categoria: "Python para IA" },
  { id: 27, pregunta: "¿Qué significa evaluar un modelo?", opciones: ["Dibujarlo", "Medir su rendimiento", "Guardarlo", "Visualizarlo"], correcta: 1, explicacion: "Evaluar es medir desempeño con métricas adecuadas.", categoria: "Python para IA" },
  { id: 28, pregunta: "¿Qué métrica prioriza no perder casos positivos?", opciones: ["Accuracy", "Precision", "Recall", "Loss"], correcta: 2, explicacion: "Recall prioriza capturar la mayor cantidad de positivos reales.", categoria: "Python para IA" },
  { id: 29, pregunta: "¿Qué significa “modelo caduca”?", opciones: ["Error de Python", "Concept drift", "Overfitting", "Dataset pequeño"], correcta: 1, explicacion: "Se refiere al cambio de distribución con el tiempo (concept drift).", categoria: "Python para IA" },
  { id: 30, pregunta: "En IA aplicada, la combinación más habitual es:", opciones: ["IA sola", "IA + humano", "Humano sin IA", "Reglas fijas"], correcta: 1, explicacion: "Lo normal es combinar automatización de IA con supervisión humana.", categoria: "Python para IA" },
];

