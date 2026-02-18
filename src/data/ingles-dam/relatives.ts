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
      "'Who' is used for people as the subject of a relative clause. The man is a person, so we use 'who'.",
    categoria: "Who – People",
  },
  // Q6
  {
    id: 2,
    pregunta: "This is the film ___ I told you about.",
    opciones: ["who", "where", "that"],
    correcta: 2,
    explicacion:
      "'That' (or 'which') is used for things. The film is a thing, so we use 'that'.",
    categoria: "That / Which – Things",
  },
  // Q10
  {
    id: 3,
    pregunta: "The place ___ we met was very crowded.",
    opciones: ["which", "who", "where"],
    correcta: 2,
    explicacion:
      "'Where' is used for places. 'The place where we met' refers to a location.",
    categoria: "Where – Places",
  },
  // Q14
  {
    id: 4,
    pregunta: "The woman ___ bag was stolen called the police.",
    opciones: ["who", "which", "whose"],
    correcta: 2,
    explicacion:
      "'Whose' indicates possession. The bag belongs to the woman, so 'whose' is correct.",
    categoria: "Whose – Possession",
  },
  // Q18
  {
    id: 5,
    pregunta: "That's the reason ___ he left early.",
    opciones: ["which", "who", "why"],
    correcta: 2,
    explicacion:
      "'Why' is used after 'reason' to explain a cause. 'The reason why' is a common construction.",
    categoria: "Why – Reasons",
  },
  // Q22
  {
    id: 6,
    pregunta: "This is the student ___ won the prize.",
    opciones: ["which", "who", "whose"],
    correcta: 1,
    explicacion:
      "'Who' is used for people as the subject. The student is a person who performed an action.",
    categoria: "Who – People",
  },
  // Q26
  {
    id: 7,
    pregunta: "The book ___ I'm reading is interesting.",
    opciones: ["who", "whose", "that"],
    correcta: 2,
    explicacion:
      "'That' (or 'which') is used for things. The book is a thing, so we use 'that'.",
    categoria: "That / Which – Things",
  },
  // Q30
  {
    id: 8,
    pregunta: "The teacher ___ helped me was very patient.",
    opciones: ["who", "which", "where"],
    correcta: 0,
    explicacion:
      "'Who' is used for people. The teacher is a person who performed the action of helping.",
    categoria: "Who – People",
  },
  // Q34
  {
    id: 9,
    pregunta: "That's the house ___ roof is red.",
    opciones: ["which", "who", "whose"],
    correcta: 2,
    explicacion:
      "'Whose' shows possession. The roof belongs to the house, so 'whose' is correct.",
    categoria: "Whose – Possession",
  },
  // Q38
  {
    id: 10,
    pregunta: "I know someone ___ can help you.",
    opciones: ["which", "who", "where"],
    correcta: 1,
    explicacion:
      "'Who' is used for people. 'Someone' refers to a person, so we use 'who'.",
    categoria: "Who – People",
  },
  // Q42
  {
    id: 11,
    pregunta: "The restaurant ___ we ate was very noisy.",
    opciones: ["who", "where", "which"],
    correcta: 1,
    explicacion:
      "'Where' is used for places. The restaurant is a place where an action happened.",
    categoria: "Where – Places",
  },
  // Q46
  {
    id: 12,
    pregunta: "The girl ___ brother is famous is my friend.",
    opciones: ["who", "which", "whose"],
    correcta: 2,
    explicacion:
      "'Whose' shows possession. The brother belongs to the girl, so 'whose' is correct.",
    categoria: "Whose – Possession",
  },
  // Q49
  {
    id: 13,
    pregunta: "This is the reason ___ I called you.",
    opciones: ["who", "which", "why"],
    correcta: 2,
    explicacion:
      "'Why' is used after 'reason'. 'The reason why I called' explains the cause.",
    categoria: "Why – Reasons",
  },
  // Q52
  {
    id: 14,
    pregunta: "The man ___ car was damaged is angry.",
    opciones: ["who", "whose", "which"],
    correcta: 1,
    explicacion:
      "'Whose' indicates possession. The car belongs to the man, so 'whose' is correct.",
    categoria: "Whose – Possession",
  },
  // Q56
  {
    id: 15,
    pregunta: "The movie ___ we watched last night was boring.",
    opciones: ["who", "that", "whose"],
    correcta: 1,
    explicacion:
      "'That' (or 'which') is used for things. The movie is a thing, so we use 'that'.",
    categoria: "That / Which – Things",
  },
  // Q60
  {
    id: 16,
    pregunta: "The picture ___ is on the wall is old.",
    opciones: ["who", "which", "whose"],
    correcta: 1,
    explicacion:
      "'Which' is used for things as the subject. The picture is a thing performing the role of subject.",
    categoria: "That / Which – Things",
  },
  // Q64
  {
    id: 17,
    pregunta: "She's the person ___ helped me most.",
    opciones: ["which", "who", "whose"],
    correcta: 1,
    explicacion:
      "'Who' is used for people. The person is the subject of the relative clause.",
    categoria: "Who – People",
  },
  // Q68
  {
    id: 18,
    pregunta: "The reason ___ she failed is clear.",
    opciones: ["which", "why", "who"],
    correcta: 1,
    explicacion:
      "'Why' is used after 'reason' to express a cause. 'The reason why she failed' is correct.",
    categoria: "Why – Reasons",
  },
  // Q72
  {
    id: 19,
    pregunta: "That's the song ___ everyone loves.",
    opciones: ["who", "that", "whose"],
    correcta: 1,
    explicacion:
      "'That' (or 'which') is used for things. The song is a thing, so we use 'that'.",
    categoria: "That / Which – Things",
  },
  // Q76
  {
    id: 20,
    pregunta: "The house ___ they bought is very old.",
    opciones: ["who", "where", "that"],
    correcta: 2,
    explicacion:
      "'That' (or 'which') is used for things. Here the house is the object of the relative clause.",
    categoria: "That / Which – Things",
  },
  // Q80
  {
    id: 21,
    pregunta: "I know a woman ___ works with my sister.",
    opciones: ["which", "who", "where"],
    correcta: 1,
    explicacion:
      "'Who' is used for people. The woman is a person who is the subject of the relative clause.",
    categoria: "Who – People",
  },
  // Q84
  {
    id: 22,
    pregunta: "That's the boy ___ bike was stolen.",
    opciones: ["who", "which", "whose"],
    correcta: 2,
    explicacion:
      "'Whose' shows possession. The bike belongs to the boy, so 'whose' is correct.",
    categoria: "Whose – Possession",
  },
  // Q88
  {
    id: 23,
    pregunta: "The café ___ we met is closed now.",
    opciones: ["which", "where", "who"],
    correcta: 1,
    explicacion:
      "'Where' is used for places. The café is a place where the action of meeting happened.",
    categoria: "Where – Places",
  },
  // Q92
  {
    id: 24,
    pregunta: "This is the friend ___ I told you about.",
    opciones: ["who", "whose", "where"],
    correcta: 0,
    explicacion:
      "'Who' (or 'that') is used when referring to people. 'The friend who I told you about' is correct.",
    categoria: "Who – People",
  },
  // Q96
  {
    id: 25,
    pregunta: "The boy ___ won the race is my cousin.",
    opciones: ["who", "which", "whose"],
    correcta: 0,
    explicacion:
      "'Who' is used for people as the subject. The boy is a person who won the race.",
    categoria: "Who – People",
  },
];
