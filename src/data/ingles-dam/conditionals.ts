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
      "Primera condicional: If + presente simple, will + infinitivo. 'If it rains' es la forma correcta para una posibilidad real en el futuro.",
    categoria: "First Conditional",
  },
  // Q7
  {
    id: 2,
    pregunta: "If I were you, I ___ study more.",
    opciones: ["will", "would", "can"],
    correcta: 1,
    explicacion:
      "Segunda condicional: If + pasado simple, would + infinitivo. Se usa para situaciones hipotéticas o irreales en el presente.",
    categoria: "Second Conditional",
  },
  // Q11
  {
    id: 3,
    pregunta: "If they had left earlier, they ___ on time.",
    opciones: ["arrive", "would arrive", "would have arrived"],
    correcta: 2,
    explicacion:
      "Tercera condicional: If + past perfect, would have + participio. Se usa para situaciones irreales en el pasado.",
    categoria: "Third Conditional",
  },
  // Q15
  {
    id: 4,
    pregunta: "If you don't hurry, you ___ miss the bus.",
    opciones: ["miss", "would miss", "will miss"],
    correcta: 2,
    explicacion:
      "Primera condicional: If + presente simple, will + infinitivo. Una advertencia real sobre una consecuencia futura.",
    categoria: "First Conditional",
  },
  // Q19
  {
    id: 5,
    pregunta: "If I ___ more free time, I would travel.",
    opciones: ["have", "had", "will have"],
    correcta: 1,
    explicacion:
      "Segunda condicional: If + pasado simple, would + infinitivo. 'Had' es la forma de pasado simple usada para una situación irreal en el presente.",
    categoria: "Second Conditional",
  },
  // Q23
  {
    id: 6,
    pregunta: "If it stops raining, we ___ go out.",
    opciones: ["would", "will", "went"],
    correcta: 1,
    explicacion:
      "Primera condicional: If + presente simple, will + infinitivo. Una posibilidad real sobre el futuro cercano.",
    categoria: "First Conditional",
  },
  // Q27
  {
    id: 7,
    pregunta: "If she had studied more, she ___ the exam.",
    opciones: ["passes", "would pass", "would have passed"],
    correcta: 2,
    explicacion:
      "Tercera condicional: If + past perfect, would have + participio. Una situación irreal en el pasado: ella no estudió suficiente.",
    categoria: "Third Conditional",
  },
  // Q31
  {
    id: 8,
    pregunta: "If we miss the train, we ___ a taxi.",
    opciones: ["take", "would take", "will take"],
    correcta: 2,
    explicacion:
      "Primera condicional: If + presente simple, will + infinitivo. Un plan real si ocurre un evento real.",
    categoria: "First Conditional",
  },
  // Q35
  {
    id: 9,
    pregunta: "If I ___ you, I wouldn't do that.",
    opciones: ["am", "was", "were"],
    correcta: 2,
    explicacion:
      "Segunda condicional: 'If I were you' es la forma correcta (modo subjuntivo), aunque 'was' se usa a veces de forma informal.",
    categoria: "Second Conditional",
  },
  // Q39
  {
    id: 10,
    pregunta: "If he studies harder, he ___ pass the exam.",
    opciones: ["would", "will", "would have"],
    correcta: 1,
    explicacion:
      "Primera condicional: If + presente simple, will + infinitivo. Una posibilidad real que depende de su esfuerzo.",
    categoria: "First Conditional",
  },
  // Q43
  {
    id: 11,
    pregunta: "If they had known the truth, they ___ angry.",
    opciones: ["are", "would be", "would have been"],
    correcta: 2,
    explicacion:
      "Tercera condicional: If + past perfect, would have + participio. Ellos no sabían la verdad, por eso es una situación irreal en el pasado.",
    categoria: "Third Conditional",
  },
  // Q47
  {
    id: 12,
    pregunta: "If you heat ice, it ___.",
    opciones: ["melts", "would melt", "melted"],
    correcta: 0,
    explicacion:
      "Condicional cero: If + presente simple, presente simple. Se usa para hechos científicos y verdades generales.",
    categoria: "Zero Conditional",
  },
  // Q53
  {
    id: 13,
    pregunta: "If she ___ earlier, she wouldn't be late now.",
    opciones: ["leaves", "left", "had left"],
    correcta: 2,
    explicacion:
      "Condicional mixto: If + past perfect, would + infinitivo (ahora). Una acción pasada que afecta a un resultado presente.",
    categoria: "Mixed Conditional",
  },
  // Q57
  {
    id: 14,
    pregunta: "If I had known, I ___ you.",
    opciones: ["tell", "would tell", "would have told"],
    correcta: 2,
    explicacion:
      "Tercera condicional: If + past perfect, would have + participio. Una situación irreal en el pasado: yo no lo sabía.",
    categoria: "Third Conditional",
  },
  // Q61
  {
    id: 15,
    pregunta: "If it were warmer, we ___ outside.",
    opciones: ["sit", "will sit", "would sit"],
    correcta: 2,
    explicacion:
      "Segunda condicional: If + pasado simple (were), would + infinitivo. Una situación irreal en el presente: no hace suficiente calor.",
    categoria: "Second Conditional",
  },
  // Q65
  {
    id: 16,
    pregunta: "If you ___ attention, you wouldn't make mistakes.",
    opciones: ["pay", "paid", "would pay"],
    correcta: 1,
    explicacion:
      "Segunda condicional: If + pasado simple, would + infinitivo. Una situación irreal en el presente: no estás prestando atención ahora.",
    categoria: "Second Conditional",
  },
  // Q69
  {
    id: 17,
    pregunta: "If we leave now, we ___ arrive on time.",
    opciones: ["would", "will", "would have"],
    correcta: 1,
    explicacion:
      "Primera condicional: If + presente simple, will + infinitivo. Una posibilidad real sobre el futuro inmediato.",
    categoria: "First Conditional",
  },
  // Q73
  {
    id: 18,
    pregunta: "If I had more money, I ___ a new car.",
    opciones: ["buy", "will buy", "would buy"],
    correcta: 2,
    explicacion:
      "Segunda condicional: If + pasado simple, would + infinitivo. Una situación irreal en el presente: no tengo suficiente dinero.",
    categoria: "Second Conditional",
  },
  // Q77
  {
    id: 19,
    pregunta: "If you don't wear a coat, you ___ cold.",
    opciones: ["get", "would get", "got"],
    correcta: 0,
    explicacion:
      "Condicional cero/primera: Puede ser una verdad general (cero) o una advertencia (primera). 'You get cold' funciona como condicional cero para un hecho general.",
    categoria: "Zero Conditional",
  },
  // Q81
  {
    id: 20,
    pregunta: "If he had listened, he ___ in trouble now.",
    opciones: ["isn't", "wouldn't be", "won't be"],
    correcta: 1,
    explicacion:
      "Condicional mixto: If + past perfect, would + infinitivo (ahora). Una acción pasada con una consecuencia en el presente.",
    categoria: "Mixed Conditional",
  },
  // Q85
  {
    id: 21,
    pregunta: "If we ___ earlier, we wouldn't be late.",
    opciones: ["leave", "left", "had left"],
    correcta: 2,
    explicacion:
      "Condicional mixto: If + past perfect, would + infinitivo (ahora). Una acción pasada que afecta a una situación presente.",
    categoria: "Mixed Conditional",
  },
  // Q89
  {
    id: 22,
    pregunta: "If she calls, I ___ answer.",
    opciones: ["would", "will", "would have"],
    correcta: 1,
    explicacion:
      "Primera condicional: If + presente simple, will + infinitivo. Una posibilidad real en el futuro.",
    categoria: "First Conditional",
  },
  // Q93
  {
    id: 23,
    pregunta: "If they had taken a taxi, they ___ earlier.",
    opciones: ["arrive", "would arrive", "would have arrived"],
    correcta: 2,
    explicacion:
      "Tercera condicional: If + past perfect, would have + participio. No cogieron un taxi: es una situación irreal en el pasado.",
    categoria: "Third Conditional",
  },
  // Q97
  {
    id: 24,
    pregunta: "If you mix blue and yellow, you ___ green.",
    opciones: ["get", "would get", "got"],
    correcta: 0,
    explicacion:
      "Condicional cero: If + presente simple, presente simple. Es un hecho científico que siempre es verdad.",
    categoria: "Zero Conditional",
  },
  // Combined Q (additional)
  {
    id: 25,
    pregunta: "If we ___ earlier, we wouldn't be late.",
    opciones: ["left", "had left", "leave"],
    correcta: 1,
    explicacion:
      "Condicional mixto: If + past perfect, would + infinitivo (presente). La acción pasada de no haber salido antes causa el resultado presente de llegar tarde.",
    categoria: "Mixed Conditional",
  },
];
