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
      "Se dice 'good at' y 'bad at' algo. Ambas usan la preposición 'at' después de adjetivos que describen habilidad.",
    categoria: "Dependent Prepositions",
  },
  // Q8
  {
    id: 2,
    pregunta: "He arrived ___ the airport late.",
    opciones: ["in", "on", "at"],
    correcta: 2,
    explicacion:
      "Se usa 'at' con lugares específicos como el aeropuerto, la estación o un edificio.",
    categoria: "Prepositions of Place",
  },
  // Q12
  {
    id: 3,
    pregunta: "I'm interested ___ learning Italian.",
    opciones: ["at", "in", "on"],
    correcta: 1,
    explicacion:
      "El adjetivo 'interested' va seguido de 'in'. 'Interested in' es una colocación fija.",
    categoria: "Dependent Prepositions",
  },
  // Q16
  {
    id: 4,
    pregunta: "She apologized ___ being late.",
    opciones: ["of", "about", "for"],
    correcta: 2,
    explicacion:
      "El verbo 'apologize' va seguido de 'for'. 'Apologize for' es una colocación fija.",
    categoria: "Dependent Prepositions",
  },
  // Q20
  {
    id: 5,
    pregunta: "The keys are ___ the table.",
    opciones: ["at", "on", "in"],
    correcta: 1,
    explicacion:
      "Se usa 'on' para superficies. Las llaves están apoyadas sobre la superficie de la mesa.",
    categoria: "Prepositions of Place",
  },
  // Q24
  {
    id: 6,
    pregunta: "She's afraid ___ spiders.",
    opciones: ["from", "of", "with"],
    correcta: 1,
    explicacion:
      "El adjetivo 'afraid' va seguido de 'of'. 'Afraid of' es una colocación fija.",
    categoria: "Dependent Prepositions",
  },
  // Q28
  {
    id: 7,
    pregunta: "I'll see you ___ Monday.",
    opciones: ["in", "at", "on"],
    correcta: 2,
    explicacion:
      "Se usa 'on' con los días de la semana (on Monday, on Friday, etc.).",
    categoria: "Prepositions of Time",
  },
  // Q32
  {
    id: 8,
    pregunta: "He was born ___ 2003.",
    opciones: ["at", "on", "in"],
    correcta: 2,
    explicacion:
      "Se usa 'in' con años (in 2003), meses (in June) y períodos más largos.",
    categoria: "Prepositions of Time",
  },
  // Q36
  {
    id: 9,
    pregunta: "She works ___ a hospital.",
    opciones: ["on", "at", "in"],
    correcta: 2,
    explicacion:
      "Se usa 'in' para espacios cerrados o edificios donde alguien trabaja dentro. 'In a hospital' significa dentro del edificio.",
    categoria: "Prepositions of Place",
  },
  // Q40
  {
    id: 10,
    pregunta: "The cat is hiding ___ the bed.",
    opciones: ["under", "between", "among"],
    correcta: 0,
    explicacion:
      "'Under' significa debajo de algo. El gato está escondido debajo de la cama.",
    categoria: "Prepositions of Place",
  },
  // Q44
  {
    id: 11,
    pregunta: "She arrived ___ time for the interview.",
    opciones: ["in", "on", "at"],
    correcta: 0,
    explicacion:
      "'In time' significa 'con tiempo suficiente' o 'sin llegar tarde'. Es una expresión fija que indica que no llegó tarde a la entrevista.",
    categoria: "Prepositions of Time",
  },
  // Q48
  {
    id: 12,
    pregunta: "I'm looking ___ my glasses.",
    opciones: ["for", "at", "after"],
    correcta: 0,
    explicacion:
      "'Look for' significa buscar algo. Está buscando sus gafas.",
    categoria: "Phrasal Verbs / Dependent Prepositions",
  },
  // Q54
  {
    id: 13,
    pregunta: "We arrived ___ the hotel at night.",
    opciones: ["in", "on", "at"],
    correcta: 2,
    explicacion:
      "Se usa 'at' para indicar la llegada a un destino específico (at the hotel, at the airport).",
    categoria: "Prepositions of Place",
  },
  // Q58
  {
    id: 14,
    pregunta: "She's responsible ___ the children.",
    opciones: ["of", "about", "for"],
    correcta: 2,
    explicacion:
      "'Responsible for' es una colocación fija que significa que está a cargo de los niños.",
    categoria: "Dependent Prepositions",
  },
  // Q62
  {
    id: 15,
    pregunta: "I'm not good ___ dancing.",
    opciones: ["in", "on", "at"],
    correcta: 2,
    explicacion:
      "Se dice 'good at' o 'not good at' para describir habilidad. 'At' siempre sigue a good/bad en este contexto.",
    categoria: "Dependent Prepositions",
  },
  // Q66
  {
    id: 16,
    pregunta: "He has lived here ___ 2018.",
    opciones: ["for", "during", "since"],
    correcta: 2,
    explicacion:
      "'Since' se usa con un punto específico en el tiempo (since 2018). 'For' se usaría con una duración.",
    categoria: "Prepositions of Time",
  },
  // Q70
  {
    id: 17,
    pregunta: "The kids are playing ___ the garden.",
    opciones: ["in", "on", "at"],
    correcta: 0,
    explicacion:
      "Se usa 'in' para áreas cerradas o delimitadas como un jardín, un parque o una habitación.",
    categoria: "Prepositions of Place",
  },
  // Q74
  {
    id: 18,
    pregunta: "She was angry ___ him.",
    opciones: ["at", "with", "on"],
    correcta: 1,
    explicacion:
      "'Angry with' una persona es la colocación correcta. También se puede decir 'angry at' ante una situación.",
    categoria: "Dependent Prepositions",
  },
  // Q78
  {
    id: 19,
    pregunta: "She arrived ___ home late.",
    opciones: ["at", "in", "to"],
    correcta: 0,
    explicacion:
      "Normalmente se dice 'arrive home' sin preposición, pero si se usa una, es 'arrived at home'. Nota: 'arrive home' (sin preposición) es la forma más natural.",
    categoria: "Prepositions of Place",
  },
  // Q82
  {
    id: 20,
    pregunta: "The clock is hanging ___ the wall.",
    opciones: ["at", "in", "on"],
    correcta: 2,
    explicacion:
      "'On' se usa para superficies. El reloj está colgado en la superficie de la pared.",
    categoria: "Prepositions of Place",
  },
  // Q86
  {
    id: 21,
    pregunta: "He's interested ___ science.",
    opciones: ["at", "in", "on"],
    correcta: 1,
    explicacion:
      "'Interested in' es una colocación fija. Siempre se usa 'in' después de 'interested'.",
    categoria: "Dependent Prepositions",
  },
  // Q90
  {
    id: 22,
    pregunta: "The dog is sleeping ___ the sofa.",
    opciones: ["in", "at", "on"],
    correcta: 2,
    explicacion:
      "'On' se usa para superficies. El perro está tumbado sobre la superficie del sofá.",
    categoria: "Prepositions of Place",
  },
  // Q94
  {
    id: 23,
    pregunta: "She works ___ an international company.",
    opciones: ["at", "in", "on"],
    correcta: 0,
    explicacion:
      "'At' se usa comúnmente con empresas y organizaciones (at Google, at a company). 'In' también es posible cuando se enfatiza estar dentro.",
    categoria: "Prepositions of Place",
  },
  // Q98
  {
    id: 24,
    pregunta: "I apologized ___ my mistake.",
    opciones: ["for", "about", "of"],
    correcta: 0,
    explicacion:
      "'Apologize for' es la colocación fija. Siempre se pide disculpas por algo.",
    categoria: "Dependent Prepositions",
  },
  // Q100
  {
    id: 25,
    pregunta: "You ___ leave early today if you want.",
    opciones: ["must", "may", "have to"],
    correcta: 1,
    explicacion:
      "'May' da permiso. La frase permite a la persona marcharse antes si lo desea.",
    categoria: "Modals – Permission",
  },
];
