import type { Pregunta } from '../types';

export const modalsInfo = {
  id: "modals",
  titulo: "Modal Verbs",
  descripcion:
    "Must, mustn't, can, could, should, might, may, have to, don't have to — obligation, permission, ability and deduction.",
  temas: ["Obligation", "Permission", "Ability", "Deduction", "Prohibition"],
  color: "from-blue-500 to-cyan-600",
  icono: "🔑",
};

export const preguntasModals: Pregunta[] = [
  // Q1
  {
    id: 1,
    pregunta: "You ___ finish this exercise before the bell rings.",
    opciones: ["might", "must", "could"],
    correcta: 1,
    explicacion:
      "'Must' expresa obligación fuerte. La frase implica que es necesario terminar antes de que suene el timbre.",
    categoria: "Modals – Obligation",
  },
  // Q5
  {
    id: 2,
    pregunta: "You ___ park here; it's forbidden.",
    opciones: ["shouldn't", "mustn't", "don't have to"],
    correcta: 1,
    explicacion:
      "'Mustn't' expresa prohibición. 'It's forbidden' confirma que aparcar está prohibido.",
    categoria: "Modals – Prohibition",
  },
  // Q9
  {
    id: 3,
    pregunta: "She ___ be at home; the lights are on.",
    opciones: ["can't", "must", "shouldn't"],
    correcta: 1,
    explicacion:
      "'Must' se usa para deducción lógica. Que las luces estén encendidas es una evidencia sólida de que está en casa.",
    categoria: "Modals – Deduction",
  },
  // Q13
  {
    id: 4,
    pregunta: "You ___ be careful with that machine.",
    opciones: ["should", "might", "can"],
    correcta: 0,
    explicacion:
      "'Should' se usa para dar consejos o recomendaciones. Aconseja tener cuidado al manejar la máquina.",
    categoria: "Modals – Advice",
  },
  // Q17
  {
    id: 5,
    pregunta: "He ___ speak English fluently.",
    opciones: ["must", "can", "shouldn't"],
    correcta: 1,
    explicacion:
      "'Can' expresa habilidad. La frase describe su capacidad para hablar inglés con fluidez.",
    categoria: "Modals – Ability",
  },
  // Q21
  {
    id: 6,
    pregunta: "You ___ be quiet in the library.",
    opciones: ["could", "might", "must"],
    correcta: 2,
    explicacion:
      "'Must' expresa obligación o una norma. Guardar silencio en la biblioteca es una regla general.",
    categoria: "Modals – Obligation",
  },
  // Q25
  {
    id: 7,
    pregunta: "He ___ come later; he's not sure.",
    opciones: ["must", "might", "can't"],
    correcta: 1,
    explicacion:
      "'Might' expresa posibilidad o incertidumbre. 'He's not sure' confirma que es algo incierto.",
    categoria: "Modals – Possibility",
  },
  // Q29
  {
    id: 8,
    pregunta: "You ___ use your phone during the exam.",
    opciones: ["mustn't", "don't have to", "might not"],
    correcta: 0,
    explicacion:
      "'Mustn't' expresa prohibición. Usar el móvil durante un examen está estrictamente prohibido.",
    categoria: "Modals – Prohibition",
  },
  // Q33
  {
    id: 9,
    pregunta: "You ___ be tired after such a long trip.",
    opciones: ["must", "can't", "shouldn't"],
    correcta: 0,
    explicacion:
      "'Must' se usa para deducción lógica. Un viaje largo lleva naturalmente al cansancio.",
    categoria: "Modals – Deduction",
  },
  // Q37
  {
    id: 10,
    pregunta: "Students ___ wear uniforms at this school.",
    opciones: ["can", "have to", "might"],
    correcta: 1,
    explicacion:
      "'Have to' expresa obligación externa. Los colegios que exigen uniforme imponen esta norma.",
    categoria: "Modals – Obligation",
  },
  // Q41
  {
    id: 11,
    pregunta: "You ___ touch that wire; it's dangerous.",
    opciones: ["must", "don't have to", "mustn't"],
    correcta: 2,
    explicacion:
      "'Mustn't' expresa prohibición. 'It's dangerous' significa que tocar el cable está prohibido.",
    categoria: "Modals – Prohibition",
  },
  // Q45
  {
    id: 12,
    pregunta: "He ___ be joking; that can't be true.",
    opciones: ["must", "shouldn't", "can't"],
    correcta: 0,
    explicacion:
      "'Must' expresa una deducción fuerte. El hablante cree que definitivamente está bromeando.",
    categoria: "Modals – Deduction",
  },
  // Q50
  {
    id: 13,
    pregunta: "You ___ borrow my notes if you want.",
    opciones: ["have to", "may", "mustn't"],
    correcta: 1,
    explicacion:
      "'May' da permiso. El hablante está permitiendo a la otra persona tomar prestados sus apuntes.",
    categoria: "Modals – Permission",
  },
  // Q51
  {
    id: 14,
    pregunta: "He ___ finish the project today.",
    opciones: ["might", "mustn't", "shouldn't"],
    correcta: 0,
    explicacion:
      "'Might' expresa posibilidad. Es posible, pero no seguro, que termine hoy.",
    categoria: "Modals – Possibility",
  },
  // Q55
  {
    id: 15,
    pregunta: "You ___ tell anyone; it's a secret.",
    opciones: ["must", "mustn't", "don't have to"],
    correcta: 1,
    explicacion:
      "'Mustn't' expresa prohibición. Un secreto no debe compartirse con nadie.",
    categoria: "Modals – Prohibition",
  },
  // Q59
  {
    id: 16,
    pregunta: "He ___ run very fast when he was young.",
    opciones: ["can", "could", "must"],
    correcta: 1,
    explicacion:
      "'Could' expresa habilidad en el pasado. Tenía la capacidad de correr rápido cuando era joven.",
    categoria: "Modals – Past Ability",
  },
  // Q63
  {
    id: 17,
    pregunta: "You ___ finish today; tomorrow is fine.",
    opciones: ["must", "mustn't", "don't have to"],
    correcta: 2,
    explicacion:
      "'Don't have to' expresa falta de obligación. No es necesario terminar hoy.",
    categoria: "Modals – No Obligation",
  },
  // Q67
  {
    id: 18,
    pregunta: "They ___ be at work; it's Sunday.",
    opciones: ["must", "can't", "should"],
    correcta: 1,
    explicacion:
      "'Can't' expresa imposibilidad basada en deducción. Es lógicamente imposible que estén trabajando un domingo.",
    categoria: "Modals – Deduction",
  },
  // Q71
  {
    id: 19,
    pregunta: "You ___ interrupt when someone is speaking.",
    opciones: ["shouldn't", "can", "might"],
    correcta: 0,
    explicacion:
      "'Shouldn't' da un consejo en contra de hacer algo. Interrumpir se considera una falta de educación.",
    categoria: "Modals – Advice",
  },
  // Q75
  {
    id: 20,
    pregunta: "He ___ be serious; nobody believes him.",
    opciones: ["must", "can't", "shouldn't"],
    correcta: 1,
    explicacion:
      "'Can't' expresa imposibilidad. El hecho de que nadie le crea sugiere que no puede estar hablando en serio.",
    categoria: "Modals – Deduction",
  },
  // Q79
  {
    id: 21,
    pregunta: "You ___ use a dictionary in the exam.",
    opciones: ["mustn't", "don't have to", "may"],
    correcta: 2,
    explicacion:
      "'May' da permiso. La frase significa que se te permite usar un diccionario.",
    categoria: "Modals – Permission",
  },
  // Q83
  {
    id: 22,
    pregunta: "She ___ speak to the teacher yesterday.",
    opciones: ["can", "had to", "must"],
    correcta: 1,
    explicacion:
      "'Had to' es la forma de pasado de 'must/have to' para obligación. Estaba obligada a hablar con el profesor.",
    categoria: "Modals – Past Obligation",
  },
  // Q87
  {
    id: 23,
    pregunta: "You ___ open the window; it's cold.",
    opciones: ["must", "shouldn't", "have to"],
    correcta: 1,
    explicacion:
      "'Shouldn't' da un consejo. Como hace frío, el consejo es no abrir la ventana.",
    categoria: "Modals – Advice",
  },
  // Q91
  {
    id: 24,
    pregunta: "You ___ finish the exam before leaving.",
    opciones: ["might", "have to", "can"],
    correcta: 1,
    explicacion:
      "'Have to' expresa obligación. Es obligatorio terminar el examen antes de poder marcharse.",
    categoria: "Modals – Obligation",
  },
  // Q95+100
  {
    id: 25,
    pregunta: "He ___ be exhausted after the journey.",
    opciones: ["must", "can't", "shouldn't"],
    correcta: 0,
    explicacion:
      "'Must' se usa para deducción fuerte. Después de un viaje largo, estar agotado es una conclusión lógica.",
    categoria: "Modals – Deduction",
  },
];
