import type { Pregunta } from '../types';

export const conditionalsInfo = {
  id: "conditionals",
  titulo: "Conditionals",
  descripcion:
    "Zero, First, Second and Third Conditional — real and unreal situations, wishes and mixed conditionals.",
  temas: [
    "Zero Conditional",
    "First Conditional",
    "Second Conditional",
    "Third Conditional",
    "Mixed Conditionals",
  ],
  color: "from-amber-500 to-orange-600",
  icono: "🔀",
};

export const preguntasConditionals: Pregunta[] = [
  // Q3
  {
    id: 1,
    pregunta: "If it ___ tomorrow, we'll stay at home.",
    opciones: ["rains", "rained", "would rain"],
    correcta: 0,
    explicacion:
      "First Conditional: If + present simple, will + infinitive. 'If it rains' is the correct form for a real future possibility.",
    categoria: "First Conditional",
  },
  // Q7
  {
    id: 2,
    pregunta: "If I were you, I ___ study more.",
    opciones: ["will", "would", "can"],
    correcta: 1,
    explicacion:
      "Second Conditional: If + past simple, would + infinitive. Used for hypothetical or unreal present situations.",
    categoria: "Second Conditional",
  },
  // Q11
  {
    id: 3,
    pregunta: "If they had left earlier, they ___ on time.",
    opciones: ["arrive", "would arrive", "would have arrived"],
    correcta: 2,
    explicacion:
      "Third Conditional: If + past perfect, would have + past participle. Used for unreal past situations.",
    categoria: "Third Conditional",
  },
  // Q15
  {
    id: 4,
    pregunta: "If you don't hurry, you ___ miss the bus.",
    opciones: ["miss", "would miss", "will miss"],
    correcta: 2,
    explicacion:
      "First Conditional: If + present simple, will + infinitive. A real warning about a future consequence.",
    categoria: "First Conditional",
  },
  // Q19
  {
    id: 5,
    pregunta: "If I ___ more free time, I would travel.",
    opciones: ["have", "had", "will have"],
    correcta: 1,
    explicacion:
      "Second Conditional: If + past simple, would + infinitive. 'Had' is the past simple form used for an unreal present situation.",
    categoria: "Second Conditional",
  },
  // Q23
  {
    id: 6,
    pregunta: "If it stops raining, we ___ go out.",
    opciones: ["would", "will", "went"],
    correcta: 1,
    explicacion:
      "First Conditional: If + present simple, will + infinitive. A real possibility about the near future.",
    categoria: "First Conditional",
  },
  // Q27
  {
    id: 7,
    pregunta: "If she had studied more, she ___ the exam.",
    opciones: ["passes", "would pass", "would have passed"],
    correcta: 2,
    explicacion:
      "Third Conditional: If + past perfect, would have + past participle. An unreal past situation — she didn't study enough.",
    categoria: "Third Conditional",
  },
  // Q31
  {
    id: 8,
    pregunta: "If we miss the train, we ___ a taxi.",
    opciones: ["take", "would take", "will take"],
    correcta: 2,
    explicacion:
      "First Conditional: If + present simple, will + infinitive. A real plan if a real event occurs.",
    categoria: "First Conditional",
  },
  // Q35
  {
    id: 9,
    pregunta: "If I ___ you, I wouldn't do that.",
    opciones: ["am", "was", "were"],
    correcta: 2,
    explicacion:
      "Second Conditional: 'If I were you' is the correct form (subjunctive mood), even though 'was' is sometimes used informally.",
    categoria: "Second Conditional",
  },
  // Q39
  {
    id: 10,
    pregunta: "If he studies harder, he ___ pass the exam.",
    opciones: ["would", "will", "would have"],
    correcta: 1,
    explicacion:
      "First Conditional: If + present simple, will + infinitive. A real possibility depending on his effort.",
    categoria: "First Conditional",
  },
  // Q43
  {
    id: 11,
    pregunta: "If they had known the truth, they ___ angry.",
    opciones: ["are", "would be", "would have been"],
    correcta: 2,
    explicacion:
      "Third Conditional: If + past perfect, would have + past participle. They didn't know the truth, so this is an unreal past.",
    categoria: "Third Conditional",
  },
  // Q47
  {
    id: 12,
    pregunta: "If you heat ice, it ___.",
    opciones: ["melts", "would melt", "melted"],
    correcta: 0,
    explicacion:
      "Zero Conditional: If + present simple, present simple. Used for scientific facts and general truths.",
    categoria: "Zero Conditional",
  },
  // Q53
  {
    id: 13,
    pregunta: "If she ___ earlier, she wouldn't be late now.",
    opciones: ["leaves", "left", "had left"],
    correcta: 2,
    explicacion:
      "Mixed Conditional: If + past perfect, would + infinitive (now). Past action affecting a present result.",
    categoria: "Mixed Conditional",
  },
  // Q57
  {
    id: 14,
    pregunta: "If I had known, I ___ you.",
    opciones: ["tell", "would tell", "would have told"],
    correcta: 2,
    explicacion:
      "Third Conditional: If + past perfect, would have + past participle. An unreal past — I didn't know.",
    categoria: "Third Conditional",
  },
  // Q61
  {
    id: 15,
    pregunta: "If it were warmer, we ___ outside.",
    opciones: ["sit", "will sit", "would sit"],
    correcta: 2,
    explicacion:
      "Second Conditional: If + past simple (were), would + infinitive. An unreal present — it is not warm enough.",
    categoria: "Second Conditional",
  },
  // Q65
  {
    id: 16,
    pregunta: "If you ___ attention, you wouldn't make mistakes.",
    opciones: ["pay", "paid", "would pay"],
    correcta: 1,
    explicacion:
      "Second Conditional: If + past simple, would + infinitive. An unreal present — you are not paying attention now.",
    categoria: "Second Conditional",
  },
  // Q69
  {
    id: 17,
    pregunta: "If we leave now, we ___ arrive on time.",
    opciones: ["would", "will", "would have"],
    correcta: 1,
    explicacion:
      "First Conditional: If + present simple, will + infinitive. A real possibility about the immediate future.",
    categoria: "First Conditional",
  },
  // Q73
  {
    id: 18,
    pregunta: "If I had more money, I ___ a new car.",
    opciones: ["buy", "will buy", "would buy"],
    correcta: 2,
    explicacion:
      "Second Conditional: If + past simple, would + infinitive. An unreal present — I don't have enough money.",
    categoria: "Second Conditional",
  },
  // Q77
  {
    id: 19,
    pregunta: "If you don't wear a coat, you ___ cold.",
    opciones: ["get", "would get", "got"],
    correcta: 0,
    explicacion:
      "Zero/First Conditional: This can be a general truth (zero) or a warning (first). 'You get cold' works as a zero conditional for a general fact.",
    categoria: "Zero Conditional",
  },
  // Q81
  {
    id: 20,
    pregunta: "If he had listened, he ___ in trouble now.",
    opciones: ["isn't", "wouldn't be", "won't be"],
    correcta: 1,
    explicacion:
      "Mixed Conditional: If + past perfect, would + infinitive (now). Past action with a present consequence.",
    categoria: "Mixed Conditional",
  },
  // Q85
  {
    id: 21,
    pregunta: "If we ___ earlier, we wouldn't be late.",
    opciones: ["leave", "left", "had left"],
    correcta: 2,
    explicacion:
      "Mixed Conditional: If + past perfect, would + infinitive (now). A past action affecting a present situation.",
    categoria: "Mixed Conditional",
  },
  // Q89
  {
    id: 22,
    pregunta: "If she calls, I ___ answer.",
    opciones: ["would", "will", "would have"],
    correcta: 1,
    explicacion:
      "First Conditional: If + present simple, will + infinitive. A real future possibility.",
    categoria: "First Conditional",
  },
  // Q93
  {
    id: 23,
    pregunta: "If they had taken a taxi, they ___ earlier.",
    opciones: ["arrive", "would arrive", "would have arrived"],
    correcta: 2,
    explicacion:
      "Third Conditional: If + past perfect, would have + past participle. They didn't take a taxi — an unreal past situation.",
    categoria: "Third Conditional",
  },
  // Q97
  {
    id: 24,
    pregunta: "If you mix blue and yellow, you ___ green.",
    opciones: ["get", "would get", "got"],
    correcta: 0,
    explicacion:
      "Zero Conditional: If + present simple, present simple. This is a scientific fact that is always true.",
    categoria: "Zero Conditional",
  },
  // Combined Q (additional)
  {
    id: 25,
    pregunta: "If we ___ earlier, we wouldn't be late.",
    opciones: ["left", "had left", "leave"],
    correcta: 1,
    explicacion:
      "Mixed Conditional: If + past perfect, would + infinitive (present). The past action of not leaving earlier causes the present result of being late.",
    categoria: "Mixed Conditional",
  },
];
