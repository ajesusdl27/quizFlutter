import type { Pregunta } from '../types';

export const preguntasTema7Cuentalo: Pregunta[] = [
  // Bloque 1: Resultados de Aprendizaje (RA) y Objetivos (Q1-6)
  {
    id: 1,
    pregunta: '¿Cuál es el título principal de la Unidad 1?',
    opciones: [
      'Emprendimiento y Empresa.',
      'Emprendimiento en acción V. Hazlo realidad y cuéntalo.',
      'Itinerario de Empleabilidad II.'
    ],
    correcta: 1,
    explicacion: 'La unidad se presenta con el enfoque de pasar a la acción para materializar y comunicar el proyecto.',
    categoria: 'RA y Objetivos'
  },
  {
    id: 2,
    pregunta: '¿Qué busca el Resultado de Aprendizaje 2 (RA2)?',
    opciones: [
      'Crear una base de datos.',
      'Aplicar estrategias de competencias personales, sociales y emocionales para mejorar la empleabilidad.',
      'Diseñar un plan de marketing digital.'
    ],
    correcta: 1,
    explicacion: 'El RA2 se centra en desarrollar competencias clave para la empleabilidad integral.',
    categoria: 'RA y Objetivos'
  },
  {
    id: 3,
    pregunta: 'Según el RA3, ¿para qué se ponen en práctica las habilidades emprendedoras?',
    opciones: [
      'Para modernizar el sector productivo hacia un modelo sostenible.',
      'Para obtener financiación bancaria.',
      'Para registrar una patente.'
    ],
    correcta: 0,
    explicacion: 'RA3 orienta la acción emprendedora hacia la transformación y sostenibilidad del entorno productivo.',
    categoria: 'RA y Objetivos'
  },
  {
    id: 4,
    pregunta: '¿Qué tipo de metodologías se deben utilizar según el RA4 para validar ideas?',
    opciones: [
      'Metodologías tradicionales de gestión.',
      'Metodologías ágiles para el emprendimiento.',
      'Análisis de balances contables.'
    ],
    correcta: 1,
    explicacion: 'RA4 destaca la validación iterativa mediante metodologías ágiles y experimentación.',
    categoria: 'RA y Objetivos'
  },
  {
    id: 5,
    pregunta: 'El RA5 se centra en el desarrollo de un proyecto de innovación:',
    opciones: [
      'Exclusivamente tecnológico.',
      'Social y/o tecnológico en colaboración con el entorno.',
      'De carácter puramente teórico.'
    ],
    correcta: 1,
    explicacion: 'RA5 pone el foco en proyectos conectados con el entorno y con impacto real.',
    categoria: 'RA y Objetivos'
  },
  {
    id: 6,
    pregunta: '¿Cuál es uno de los objetivos de "entrenar" competencias en este proyecto?',
    opciones: [
      'Memorizar leyes mercantiles.',
      'Responder a la demanda del sector productivo en comunicación y trabajo en equipo.',
      'Aprender a programar en lenguajes específicos.'
    ],
    correcta: 1,
    explicacion: 'Entrenar competencias permite ajustarse a las demandas reales del mercado y del trabajo colaborativo.',
    categoria: 'RA y Objetivos'
  },

  // Bloque 2: Definición y Ciclo del Emprendimiento (Q7-10)
  {
    id: 7,
    pregunta: '¿Cómo se define el emprendimiento en el texto?',
    opciones: [
      'Como la creación de una empresa con fines de lucro.',
      'Como la capacidad de actuar sobre oportunidades e ideas para crear valor para los demás.',
      'Como el estudio de mercados financieros.'
    ],
    correcta: 1,
    explicacion: 'El emprendimiento se entiende como una capacidad de generar valor más allá del lucro empresarial.',
    categoria: 'Definición y Ciclo'
  },
  {
    id: 8,
    pregunta: '¿Qué tipos de valor puede generar el emprendimiento?',
    opciones: [
      'Solo valor económico.',
      'Valor social, cultural o económico.',
      'Únicamente valor tecnológico.'
    ],
    correcta: 1,
    explicacion: 'El valor emprendedor es multidimensional: social, cultural y económico.',
    categoria: 'Definición y Ciclo'
  },
  {
    id: 9,
    pregunta: '¿Qué componentes activan una "acción emprendedora" de manera simple?',
    opciones: [
      'Dinero y oficina.',
      'Idea/oportunidad y movilización de recursos necesarios.',
      'Un jefe y empleados.'
    ],
    correcta: 1,
    explicacion: 'La acción emprendedora parte de una oportunidad y de movilizar recursos para convertirla en realidad.',
    categoria: 'Definición y Ciclo'
  },
  {
    id: 10,
    pregunta: 'En el gráfico del ciclo emprendedor, ¿qué sigue a "Recursos"?',
    opciones: [
      'Ideas.',
      'Acción.',
      'Evaluación final.'
    ],
    correcta: 1,
    explicacion: 'Tras identificar y movilizar recursos, el siguiente paso del ciclo es actuar.',
    categoria: 'Definición y Ciclo'
  },

  // Bloque 3: Pasar a la Acción e Implementación (Q11-15)
  {
    id: 11,
    pregunta: '¿De qué factores depende el "cómo" pasar a la acción?',
    opciones: [
      'Solo del presupuesto disponible.',
      'Del contexto académico, si es una propuesta real o simulada, o si es un reto social.',
      'Únicamente de la decisión del profesor.'
    ],
    correcta: 1,
    explicacion: 'La forma de implementar varía según contexto, finalidad y naturaleza del reto.',
    categoria: 'Acción e Implementación'
  },
  {
    id: 12,
    pregunta: '¿Cuál de estas NO es una actuación para pasar a la acción según el texto?',
    opciones: [
      'Diseñar un plan de acción.',
      'Implementar la propuesta.',
      'Comprar acciones en bolsa.'
    ],
    correcta: 2,
    explicacion: 'Comprar acciones no forma parte del proceso de implementación del proyecto emprendedor planteado.',
    categoria: 'Acción e Implementación'
  },
  {
    id: 13,
    pregunta: '¿Qué implica específicamente "implementar" la propuesta?',
    opciones: [
      'Escribir un libro.',
      'Tomar decisiones reales y resolver problemas imprevistos.',
      'Realizar un examen teórico.'
    ],
    correcta: 1,
    explicacion: 'Implementar implica ejecutar, decidir y resolver incidencias en escenarios reales.',
    categoria: 'Acción e Implementación'
  },
  {
    id: 14,
    pregunta: 'Durante la implementación, ¿qué debe hacerse con la idea inicial?',
    opciones: [
      'Mantenerla fija sin cambios.',
      'Ajustarla según sea necesario.',
      'Descartarla al primer error.'
    ],
    correcta: 1,
    explicacion: 'La mejora continua exige adaptar la idea según evidencias y aprendizajes del proceso.',
    categoria: 'Acción e Implementación'
  },
  {
    id: 15,
    pregunta: '¿Qué requiere la implementación respecto a otras personas?',
    opciones: [
      'Ignorar sus opiniones.',
      'Coordinación.',
      'Competición agresiva.'
    ],
    correcta: 1,
    explicacion: 'La implementación efectiva necesita coordinación y trabajo conjunto con otras personas.',
    categoria: 'Acción e Implementación'
  },

  // Bloque 4: Plan de Acción y Marketing (Q16-20)
  {
    id: 16,
    pregunta: '¿Qué tipo de objetivos se deben pensar para el Plan de Acción?',
    opciones: [
      'Objetivos abstractos.',
      'Objetivos SMART.',
      'Objetivos a muy corto plazo únicamente.'
    ],
    correcta: 1,
    explicacion: 'Los objetivos SMART ayudan a concretar, medir y evaluar el progreso.',
    categoria: 'Plan y Marketing'
  },
  {
    id: 17,
    pregunta: '¿Cuántos objetivos se recomienda establecer inicialmente?',
    opciones: [
      'Uno solo.',
      'Entre 10 y 15.',
      '2 o 3 objetivos.'
    ],
    correcta: 2,
    explicacion: 'Se recomienda comenzar con pocos objetivos bien definidos para facilitar la ejecución.',
    categoria: 'Plan y Marketing'
  },
  {
    id: 18,
    pregunta: '¿Qué es necesario realizar antes de trazar el camino hacia los objetivos?',
    opciones: [
      'Un diagnóstico realista de la situación del proyecto.',
      'Una fiesta de lanzamiento.',
      'El registro legal de la marca.'
    ],
    correcta: 0,
    explicacion: 'El diagnóstico inicial permite decidir acciones coherentes con la situación real.',
    categoria: 'Plan y Marketing'
  },
  {
    id: 19,
    pregunta: '¿Qué debe señalarse en las actividades específicas del plan?',
    opciones: [
      'Solo el coste.',
      'Tiempo, responsables y cómo se medirá el progreso.',
      'El color del logotipo.'
    ],
    correcta: 1,
    explicacion: 'Toda actividad debe incluir plazos, responsables e indicadores de seguimiento.',
    categoria: 'Plan y Marketing'
  },
  {
    id: 20,
    pregunta: '¿Cuál es el propósito de aplicar estrategias de marketing en el proyecto?',
    opciones: [
      'Engañar al cliente.',
      'Poner en valor el proyecto.',
      'Gastar el presupuesto.'
    ],
    correcta: 1,
    explicacion: 'El marketing comunica y visibiliza el valor real del proyecto.',
    categoria: 'Plan y Marketing'
  },

  // Bloque 5: Comunicación del Proyecto ("Cuéntalo") (Q21-25)
  {
    id: 21,
    pregunta: '¿Qué significa "contar tu proyecto"?',
    opciones: [
      'Guardar el secreto profesional.',
      'Compartir el proceso, aprendizajes y resultados con la comunidad o entorno.',
      'Publicar solo los beneficios económicos.'
    ],
    correcta: 1,
    explicacion: 'Contar el proyecto implica abrir el aprendizaje y resultados al entorno para generar impacto.',
    categoria: 'Comunicación'
  },
  {
    id: 22,
    pregunta: '¿Cuál de estos es un formato mencionado para presentar el proyecto?',
    opciones: [
      'Carta certificada.',
      'PechaKucha.',
      'Conversación telefónica.'
    ],
    correcta: 1,
    explicacion: 'PechaKucha es un formato ágil y visual de presentación de proyectos.',
    categoria: 'Comunicación'
  },
  {
    id: 23,
    pregunta: '¿Se pueden usar redes sociales para "contar" el proyecto?',
    opciones: [
      'Sí, es una de las formas mencionadas.',
      'No, es poco profesional.',
      'Solo si el proyecto es de marketing.'
    ],
    correcta: 0,
    explicacion: 'Las redes sociales forman parte de los canales válidos de difusión del proyecto.',
    categoria: 'Comunicación'
  },
  {
    id: 24,
    pregunta: '¿Qué otro formato de audio/video se sugiere?',
    opciones: [
      'Solo radio tradicional.',
      'Podcast o Vídeo.',
      'No se sugiere ninguno.'
    ],
    correcta: 1,
    explicacion: 'Podcast y vídeo permiten comunicar el proyecto de forma accesible y actual.',
    categoria: 'Comunicación'
  },
  {
    id: 25,
    pregunta: '¿Qué es un "Pitch"?',
    opciones: [
      'Una herramienta de diseño.',
      'Una forma de presentar o contar el proyecto brevemente.',
      'Un tipo de contrato laboral.'
    ],
    correcta: 1,
    explicacion: 'El pitch resume la propuesta de valor de forma breve, clara y persuasiva.',
    categoria: 'Comunicación'
  },

  // Bloque 6: Competencias al Pasar a la Acción (Q26-35)
  {
    id: 26,
    pregunta: '¿Cuántas competencias clave se detallan al pasar a la acción?',
    opciones: [
      'Tres.',
      'Cinco.',
      'Diez.'
    ],
    correcta: 1,
    explicacion: 'Se plantean cinco competencias clave para ejecutar y sostener la acción emprendedora.',
    categoria: 'Competencias'
  },
  {
    id: 27,
    pregunta: '¿Qué implica la competencia de "Planificación y gestión"?',
    opciones: [
      'No hacer nada hasta tener todo perfecto.',
      'Plantear objetivos a corto, medio y largo plazo y adaptarse a cambios.',
      'Delegar todo el trabajo en otros.'
    ],
    correcta: 1,
    explicacion: 'Planificar y gestionar implica ordenar objetivos por horizonte temporal y ajustar el rumbo.',
    categoria: 'Competencias'
  },
  {
    id: 28,
    pregunta: '"Tomar la iniciativa" incluye:',
    opciones: [
      'Esperar órdenes del profesor.',
      'Asumir responsabilidades y alentar a otros a tomarlas.',
      'Trabajar siempre solo.'
    ],
    correcta: 1,
    explicacion: 'La iniciativa combina responsabilidad personal y capacidad de activar al equipo.',
    categoria: 'Competencias'
  },
  {
    id: 29,
    pregunta: 'Manejar la incertidumbre significa tomar decisiones cuando:',
    opciones: [
      'Tenemos todos los datos confirmados.',
      'La información es parcial, ambigua o el resultado es incierto.',
      'No hay ningún riesgo.'
    ],
    correcta: 1,
    explicacion: 'La competencia surge precisamente en escenarios incompletos o inciertos.',
    categoria: 'Competencias'
  },
  {
    id: 30,
    pregunta: 'Para reducir riesgos de fallar, ¿qué se debe incluir en el proceso?',
    opciones: [
      'Más tiempo de estudio teórico.',
      'Formas estructuradas de probar ideas y prototipos desde el inicio.',
      'Un seguro de responsabilidad civil.'
    ],
    correcta: 1,
    explicacion: 'Validar pronto mediante pruebas y prototipos reduce incertidumbre y errores costosos.',
    categoria: 'Competencias'
  },
  {
    id: 31,
    pregunta: 'La competencia "Trabajar con otras personas" se basa en:',
    opciones: [
      'La jerarquía estricta.',
      'Trabajar juntos y cooperar para convertir ideas en acción.',
      'Evitar la competencia a toda costa.'
    ],
    correcta: 1,
    explicacion: 'La cooperación efectiva transforma ideas individuales en resultados compartidos.',
    categoria: 'Competencias'
  },
  {
    id: 32,
    pregunta: 'Ante un conflicto en el equipo, ¿qué sugiere la competencia social?',
    opciones: [
      'Disolver el grupo.',
      'Resolver conflictos con actitud positiva.',
      'Ignorar el problema.'
    ],
    correcta: 1,
    explicacion: 'La gestión positiva del conflicto fortalece el equipo y mejora el trabajo conjunto.',
    categoria: 'Competencias'
  },
  {
    id: 33,
    pregunta: '¿Qué implica "Aprender de la experiencia"?',
    opciones: [
      'Solo reflexionar sobre los éxitos.',
      'Reflexionar y aprender tanto del éxito como del fracaso.',
      'No cometer nunca errores.'
    ],
    correcta: 1,
    explicacion: 'El aprendizaje completo exige analizar resultados positivos y también los fallos.',
    categoria: 'Competencias'
  },
  {
    id: 34,
    pregunta: '¿De quiénes se puede aprender según el texto?',
    opciones: [
      'Solo de los libros.',
      'De compañeros/as y mentores/as.',
      'Únicamente de uno mismo.'
    ],
    correcta: 1,
    explicacion: 'El aprendizaje social con pares y mentores acelera el desarrollo emprendedor.',
    categoria: 'Competencias'
  },
  {
    id: 35,
    pregunta: '¿Qué conlleva también el "pasar a la acción"?',
    opciones: [
      'Un ejercicio profundo de evaluación del proceso e impacto.',
      'El fin inmediato del aprendizaje.',
      'Un aumento automático de sueldo.'
    ],
    correcta: 0,
    explicacion: 'Pasar a la acción incluye revisar críticamente lo hecho y su impacto para mejorar.',
    categoria: 'Competencias'
  },

  // Bloque 7: Impacto y Conclusiones (Q36-40)
  {
    id: 36,
    pregunta: '¿Qué tipo de impacto mejora el bienestar, la inclusión y la cohesión?',
    opciones: [
      'Impacto económico.',
      'Impacto social.',
      'Impacto tecnológico.'
    ],
    correcta: 1,
    explicacion: 'La mejora del bienestar, la inclusión y la cohesión corresponde al impacto social.',
    categoria: 'Impacto y Conclusiones'
  },
  {
    id: 37,
    pregunta: 'El impacto ecológico se relaciona con:',
    opciones: [
      'La generación de ingresos.',
      'La sostenibilidad y el respeto al medio ambiente.',
      'La identidad cultural.'
    ],
    correcta: 1,
    explicacion: 'El impacto ecológico evalúa cómo el proyecto cuida recursos y entorno natural.',
    categoria: 'Impacto y Conclusiones'
  },
  {
    id: 38,
    pregunta: '¿A qué modelos económicos puede contribuir el proyecto?',
    opciones: [
      'Economía de libre mercado puro.',
      'Economía circular o del Bien Común.',
      'Economía de subsistencia.'
    ],
    correcta: 1,
    explicacion: 'Se destaca la contribución a modelos con enfoque sostenible y de beneficio colectivo.',
    categoria: 'Impacto y Conclusiones'
  },
  {
    id: 39,
    pregunta: '¿Cómo debe analizarse el impacto del proyecto?',
    opciones: [
      'De forma optimista siempre.',
      'De forma crítica y responsable, ya sea positivo o negativo.',
      'Solo si el profesor lo pide.'
    ],
    correcta: 1,
    explicacion: 'El análisis de impacto exige criterio crítico y responsabilidad en cualquier resultado.',
    categoria: 'Impacto y Conclusiones'
  },
  {
    id: 40,
    pregunta: '¿Cuál es la conclusión final sobre lo que es "emprender"?',
    opciones: [
      'Es solo crear una empresa para hacerse rico.',
      'Es una forma de afrontar la vida profesional con actitud activa, crítica y responsable.',
      'Es un proceso que termina al entregar el proyecto.'
    ],
    correcta: 1,
    explicacion: 'Emprender se plantea como una actitud profesional continua, no como un acto puntual.',
    categoria: 'Impacto y Conclusiones'
  }
];

export const tema7CuentaloInfo = {
  id: 'tema7-cuentalo',
  titulo: 'UNIDAD 1 Emprendimiento en acción V. Hazlo realidad y cuéntalo',
  descripcion: 'Resultados de aprendizaje, plan de acción, marketing, comunicación del proyecto, competencias e impacto.',
  temas: [
    'Resultados de Aprendizaje (RA) y Objetivos',
    'Definición y Ciclo del Emprendimiento',
    'Pasar a la Acción e Implementación',
    'Plan de Acción y Marketing',
    'Comunicación del Proyecto (Cuéntalo)',
    'Competencias al Pasar a la Acción',
    'Impacto y Conclusiones'
  ],
  color: 'from-amber-500 to-orange-600',
  icono: '🗣️'
};
