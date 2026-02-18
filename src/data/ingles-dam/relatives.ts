import type { Pregunta } from '../types';

export const relativesInfo = {
  id: "relatives",
  titulo: "Relative Clauses",
  descripcion:
    "Who, which, that, whose, where, why — defining and non-defining relative clauses.",
  temas: [
    "Who (people)",
    "Which / That (things)",
    "Whose (possession)",
    "Where (places)",
    "Why (reasons)",
  ],
  color: "from-violet-500 to-purple-600",
  icono: "🔗",
};

export const preguntasRelatives: Pregunta[] = [
  // Q2
  {
    id: 1,
    pregunta: "The man ___ lives next door is a lawyer.",
    opciones: ["which", "who", "whose"],
    correcta: 1,
    explicacion:
      "'Who' se usa para personas como sujeto de una oración de relativo. 'The man' es una persona, por eso usamos 'who'.",
    categoria: "Who – People",
  },
  // Q6
  {
    id: 2,
    pregunta: "This is the film ___ I told you about.",
    opciones: ["who", "where", "that"],
    correcta: 2,
    explicacion:
      "'That' (o 'which') se usa para cosas. 'The film' es una cosa, por eso usamos 'that'.",
    categoria: "That / Which – Things",
  },
  // Q10
  {
    id: 3,
    pregunta: "The place ___ we met was very crowded.",
    opciones: ["which", "who", "where"],
    correcta: 2,
    explicacion:
      "'Where' se usa para lugares. 'The place where we met' hace referencia a una ubicación.",
    categoria: "Where – Places",
  },
  // Q14
  {
    id: 4,
    pregunta: "The woman ___ bag was stolen called the police.",
    opciones: ["who", "which", "whose"],
    correcta: 2,
    explicacion:
      "'Whose' indica posesión. El bolso pertenece a la mujer, por eso 'whose' es correcto.",
    categoria: "Whose – Possession",
  },
  // Q18
  {
    id: 5,
    pregunta: "That's the reason ___ he left early.",
    opciones: ["which", "who", "why"],
    correcta: 2,
    explicacion:
      "'Why' se usa después de 'reason' para explicar una causa. 'The reason why' es una construcción muy común.",
    categoria: "Why – Reasons",
  },
  // Q22
  {
    id: 6,
    pregunta: "This is the student ___ won the prize.",
    opciones: ["which", "who", "whose"],
    correcta: 1,
    explicacion:
      "'Who' se usa para personas como sujeto. El estudiante es una persona que realizó una acción.",
    categoria: "Who – People",
  },
  // Q26
  {
    id: 7,
    pregunta: "The book ___ I'm reading is interesting.",
    opciones: ["who", "whose", "that"],
    correcta: 2,
    explicacion:
      "'That' (o 'which') se usa para cosas. El libro es una cosa, por eso usamos 'that'.",
    categoria: "That / Which – Things",
  },
  // Q30
  {
    id: 8,
    pregunta: "The teacher ___ helped me was very patient.",
    opciones: ["who", "which", "where"],
    correcta: 0,
    explicacion:
      "'Who' se usa para personas. El profesor es una persona que realizó la acción de ayudar.",
    categoria: "Who – People",
  },
  // Q34
  {
    id: 9,
    pregunta: "That's the house ___ roof is red.",
    opciones: ["which", "who", "whose"],
    correcta: 2,
    explicacion:
      "'Whose' indica posesión. El tejado pertenece a la casa, por eso 'whose' es correcto.",
    categoria: "Whose – Possession",
  },
  // Q38
  {
    id: 10,
    pregunta: "I know someone ___ can help you.",
    opciones: ["which", "who", "where"],
    correcta: 1,
    explicacion:
      "'Who' se usa para personas. 'Someone' hace referencia a una persona, por eso usamos 'who'.",
    categoria: "Who – People",
  },
  // Q42
  {
    id: 11,
    pregunta: "The restaurant ___ we ate was very noisy.",
    opciones: ["who", "where", "which"],
    correcta: 1,
    explicacion:
      "'Where' se usa para lugares. El restaurante es un lugar donde ocurrió una acción.",
    categoria: "Where – Places",
  },
  // Q46
  {
    id: 12,
    pregunta: "The girl ___ brother is famous is my friend.",
    opciones: ["who", "which", "whose"],
    correcta: 2,
    explicacion:
      "'Whose' indica posesión. El hermano pertenece a la chica, por eso 'whose' es correcto.",
    categoria: "Whose – Possession",
  },
  // Q49
  {
    id: 13,
    pregunta: "This is the reason ___ I called you.",
    opciones: ["who", "which", "why"],
    correcta: 2,
    explicacion:
      "'Why' se usa después de 'reason'. 'The reason why I called' explica la causa.",
    categoria: "Why – Reasons",
  },
  // Q52
  {
    id: 14,
    pregunta: "The man ___ car was damaged is angry.",
    opciones: ["who", "whose", "which"],
    correcta: 1,
    explicacion:
      "'Whose' indica posesión. El coche pertenece al hombre, por eso 'whose' es correcto.",
    categoria: "Whose – Possession",
  },
  // Q56
  {
    id: 15,
    pregunta: "The movie ___ we watched last night was boring.",
    opciones: ["who", "that", "whose"],
    correcta: 1,
    explicacion:
      "'That' (o 'which') se usa para cosas. La película es una cosa, por eso usamos 'that'.",
    categoria: "That / Which – Things",
  },
  // Q60
  {
    id: 16,
    pregunta: "The picture ___ is on the wall is old.",
    opciones: ["who", "which", "whose"],
    correcta: 1,
    explicacion:
      "'Which' se usa para cosas como sujeto. El cuadro es una cosa que actúa como sujeto de la oración.",
    categoria: "That / Which – Things",
  },
  // Q64
  {
    id: 17,
    pregunta: "She's the person ___ helped me most.",
    opciones: ["which", "who", "whose"],
    correcta: 1,
    explicacion:
      "'Who' se usa para personas. La persona es el sujeto de la oración de relativo.",
    categoria: "Who – People",
  },
  // Q68
  {
    id: 18,
    pregunta: "The reason ___ she failed is clear.",
    opciones: ["which", "why", "who"],
    correcta: 1,
    explicacion:
      "'Why' se usa después de 'reason' para expresar una causa. 'The reason why she failed' es correcto.",
    categoria: "Why – Reasons",
  },
  // Q72
  {
    id: 19,
    pregunta: "That's the song ___ everyone loves.",
    opciones: ["who", "that", "whose"],
    correcta: 1,
    explicacion:
      "'That' (o 'which') se usa para cosas. La canción es una cosa, por eso usamos 'that'.",
    categoria: "That / Which – Things",
  },
  // Q76
  {
    id: 20,
    pregunta: "The house ___ they bought is very old.",
    opciones: ["who", "where", "that"],
    correcta: 2,
    explicacion:
      "'That' (o 'which') se usa para cosas. Aquí la casa es el objeto de la oración de relativo.",
    categoria: "That / Which – Things",
  },
  // Q80
  {
    id: 21,
    pregunta: "I know a woman ___ works with my sister.",
    opciones: ["which", "who", "where"],
    correcta: 1,
    explicacion:
      "'Who' se usa para personas. La mujer es una persona que actúa como sujeto de la oración de relativo.",
    categoria: "Who – People",
  },
  // Q84
  {
    id: 22,
    pregunta: "That's the boy ___ bike was stolen.",
    opciones: ["who", "which", "whose"],
    correcta: 2,
    explicacion:
      "'Whose' indica posesión. La bicicleta pertenece al chico, por eso 'whose' es correcto.",
    categoria: "Whose – Possession",
  },
  // Q88
  {
    id: 23,
    pregunta: "The café ___ we met is closed now.",
    opciones: ["which", "where", "who"],
    correcta: 1,
    explicacion:
      "'Where' se usa para lugares. El café es un lugar donde ocurrió la acción de quedar.",
    categoria: "Where – Places",
  },
  // Q92
  {
    id: 24,
    pregunta: "This is the friend ___ I told you about.",
    opciones: ["who", "whose", "where"],
    correcta: 0,
    explicacion:
      "'Who' (o 'that') se usa para referirse a personas. 'The friend who I told you about' es correcto.",
    categoria: "Who – People",
  },
  // Q96
  {
    id: 25,
    pregunta: "The boy ___ won the race is my cousin.",
    opciones: ["who", "which", "whose"],
    correcta: 0,
    explicacion:
      "'Who' se usa para personas como sujeto. El chico es una persona que ganó la carrera.",
    categoria: "Who – People",
  },
];
