import type { Pregunta } from '../types';

export const prepositionsInfo = {
  id: "prepositions",
  titulo: "Prepositions",
  descripcion:
    "At, in, on, for, of, with, under, between, since — prepositions of time, place and dependent prepositions.",
  temas: ["Time", "Place", "Dependent Prepositions", "Phrasal Verbs"],
  color: "from-emerald-500 to-teal-600",
  icono: "📍",
};

export const preguntasPrepositions: Pregunta[] = [
  // Q4
  {
    id: 1,
    pregunta: "She is good ___ maths but bad ___ history.",
    opciones: ["at / at", "in / in", "at / in"],
    correcta: 0,
    explicacion:
      "We say 'good at' and 'bad at' something. Both use the preposition 'at' after adjectives describing ability.",
    categoria: "Dependent Prepositions",
  },
  // Q8
  {
    id: 2,
    pregunta: "He arrived ___ the airport late.",
    opciones: ["in", "on", "at"],
    correcta: 2,
    explicacion:
      "We use 'at' with specific places like the airport, the station, or a building.",
    categoria: "Prepositions of Place",
  },
  // Q12
  {
    id: 3,
    pregunta: "I'm interested ___ learning Italian.",
    opciones: ["at", "in", "on"],
    correcta: 1,
    explicacion:
      "The adjective 'interested' is followed by 'in'. 'Interested in' is a fixed collocation.",
    categoria: "Dependent Prepositions",
  },
  // Q16
  {
    id: 4,
    pregunta: "She apologized ___ being late.",
    opciones: ["of", "about", "for"],
    correcta: 2,
    explicacion:
      "The verb 'apologize' is followed by 'for'. 'Apologize for' is a fixed collocation.",
    categoria: "Dependent Prepositions",
  },
  // Q20
  {
    id: 5,
    pregunta: "The keys are ___ the table.",
    opciones: ["at", "on", "in"],
    correcta: 1,
    explicacion:
      "We use 'on' for surfaces. The keys are resting on the surface of the table.",
    categoria: "Prepositions of Place",
  },
  // Q24
  {
    id: 6,
    pregunta: "She's afraid ___ spiders.",
    opciones: ["from", "of", "with"],
    correcta: 1,
    explicacion:
      "The adjective 'afraid' is followed by 'of'. 'Afraid of' is a fixed collocation.",
    categoria: "Dependent Prepositions",
  },
  // Q28
  {
    id: 7,
    pregunta: "I'll see you ___ Monday.",
    opciones: ["in", "at", "on"],
    correcta: 2,
    explicacion:
      "We use 'on' with days of the week (on Monday, on Friday, etc.).",
    categoria: "Prepositions of Time",
  },
  // Q32
  {
    id: 8,
    pregunta: "He was born ___ 2003.",
    opciones: ["at", "on", "in"],
    correcta: 2,
    explicacion:
      "We use 'in' with years (in 2003), months (in June), and longer periods.",
    categoria: "Prepositions of Time",
  },
  // Q36
  {
    id: 9,
    pregunta: "She works ___ a hospital.",
    opciones: ["on", "at", "in"],
    correcta: 2,
    explicacion:
      "We use 'in' for enclosed spaces or buildings where someone works inside. 'In a hospital' means inside the building.",
    categoria: "Prepositions of Place",
  },
  // Q40
  {
    id: 10,
    pregunta: "The cat is hiding ___ the bed.",
    opciones: ["under", "between", "among"],
    correcta: 0,
    explicacion:
      "'Under' means below or beneath something. The cat is hiding below the bed.",
    categoria: "Prepositions of Place",
  },
  // Q44
  {
    id: 11,
    pregunta: "She arrived ___ time for the interview.",
    opciones: ["in", "on", "at"],
    correcta: 0,
    explicacion:
      "'In time' means 'early enough' or 'not late'. It is a fixed expression meaning she wasn't late for the interview.",
    categoria: "Prepositions of Time",
  },
  // Q48
  {
    id: 12,
    pregunta: "I'm looking ___ my glasses.",
    opciones: ["for", "at", "after"],
    correcta: 0,
    explicacion:
      "'Look for' means to search for something. She is searching for her glasses.",
    categoria: "Phrasal Verbs / Dependent Prepositions",
  },
  // Q54
  {
    id: 13,
    pregunta: "We arrived ___ the hotel at night.",
    opciones: ["in", "on", "at"],
    correcta: 2,
    explicacion:
      "We use 'at' to indicate arrival at a specific destination (at the hotel, at the airport).",
    categoria: "Prepositions of Place",
  },
  // Q58
  {
    id: 14,
    pregunta: "She's responsible ___ the children.",
    opciones: ["of", "about", "for"],
    correcta: 2,
    explicacion:
      "'Responsible for' is a fixed collocation meaning she is in charge of the children.",
    categoria: "Dependent Prepositions",
  },
  // Q62
  {
    id: 15,
    pregunta: "I'm not good ___ dancing.",
    opciones: ["in", "on", "at"],
    correcta: 2,
    explicacion:
      "We say 'good at' or 'not good at' to describe ability. 'At' always follows good/bad in this context.",
    categoria: "Dependent Prepositions",
  },
  // Q66
  {
    id: 16,
    pregunta: "He has lived here ___ 2018.",
    opciones: ["for", "during", "since"],
    correcta: 2,
    explicacion:
      "'Since' is used with a specific point in time (since 2018). 'For' would be used with a duration.",
    categoria: "Prepositions of Time",
  },
  // Q70
  {
    id: 17,
    pregunta: "The kids are playing ___ the garden.",
    opciones: ["in", "on", "at"],
    correcta: 0,
    explicacion:
      "We use 'in' for enclosed or defined areas like a garden, a park, a room.",
    categoria: "Prepositions of Place",
  },
  // Q74
  {
    id: 18,
    pregunta: "She was angry ___ him.",
    opciones: ["at", "with", "on"],
    correcta: 1,
    explicacion:
      "'Angry with' a person is the correct collocation. We can also say 'angry at' a situation.",
    categoria: "Dependent Prepositions",
  },
  // Q78
  {
    id: 19,
    pregunta: "She arrived ___ home late.",
    opciones: ["at", "in", "to"],
    correcta: 0,
    explicacion:
      "We normally say 'arrive home' without a preposition, but if one is used, it is 'arrived at home'. Note: 'arrive home' (no preposition) is the most natural form.",
    categoria: "Prepositions of Place",
  },
  // Q82
  {
    id: 20,
    pregunta: "The clock is hanging ___ the wall.",
    opciones: ["at", "in", "on"],
    correcta: 2,
    explicacion:
      "'On' is used for surfaces. The clock is attached to the surface of the wall.",
    categoria: "Prepositions of Place",
  },
  // Q86
  {
    id: 21,
    pregunta: "He's interested ___ science.",
    opciones: ["at", "in", "on"],
    correcta: 1,
    explicacion:
      "'Interested in' is a fixed collocation. We always use 'in' after 'interested'.",
    categoria: "Dependent Prepositions",
  },
  // Q90
  {
    id: 22,
    pregunta: "The dog is sleeping ___ the sofa.",
    opciones: ["in", "at", "on"],
    correcta: 2,
    explicacion:
      "'On' is used for surfaces. The dog is lying on the surface of the sofa.",
    categoria: "Prepositions of Place",
  },
  // Q94
  {
    id: 23,
    pregunta: "She works ___ an international company.",
    opciones: ["at", "in", "on"],
    correcta: 0,
    explicacion:
      "'At' is commonly used with companies and organizations (at Google, at a company). 'In' is also possible when emphasizing being inside.",
    categoria: "Prepositions of Place",
  },
  // Q98
  {
    id: 24,
    pregunta: "I apologized ___ my mistake.",
    opciones: ["for", "about", "of"],
    correcta: 0,
    explicacion:
      "'Apologize for' is the fixed collocation. We always apologize for something.",
    categoria: "Dependent Prepositions",
  },
  // Q100
  {
    id: 25,
    pregunta: "You ___ leave early today if you want.",
    opciones: ["must", "may", "have to"],
    correcta: 1,
    explicacion:
      "'May' gives permission. The sentence allows the person to leave early if they choose to.",
    categoria: "Modals – Permission",
  },
];
