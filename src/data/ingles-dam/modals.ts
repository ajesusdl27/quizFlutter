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
      "'Must' expresses strong obligation. The sentence implies it is necessary to finish before the bell rings.",
    categoria: "Modals – Obligation",
  },
  // Q5
  {
    id: 2,
    pregunta: "You ___ park here; it's forbidden.",
    opciones: ["shouldn't", "mustn't", "don't have to"],
    correcta: 1,
    explicacion:
      "'Mustn't' expresses prohibition. 'It's forbidden' confirms that parking is not allowed.",
    categoria: "Modals – Prohibition",
  },
  // Q9
  {
    id: 3,
    pregunta: "She ___ be at home; the lights are on.",
    opciones: ["can't", "must", "shouldn't"],
    correcta: 1,
    explicacion:
      "'Must' is used for logical deduction. The lights being on is strong evidence she is home.",
    categoria: "Modals – Deduction",
  },
  // Q13
  {
    id: 4,
    pregunta: "You ___ be careful with that machine.",
    opciones: ["should", "might", "can"],
    correcta: 0,
    explicacion:
      "'Should' is used for advice or recommendation. It advises caution when handling the machine.",
    categoria: "Modals – Advice",
  },
  // Q17
  {
    id: 5,
    pregunta: "He ___ speak English fluently.",
    opciones: ["must", "can", "shouldn't"],
    correcta: 1,
    explicacion:
      "'Can' expresses ability. The sentence describes his ability to speak English fluently.",
    categoria: "Modals – Ability",
  },
  // Q21
  {
    id: 6,
    pregunta: "You ___ be quiet in the library.",
    opciones: ["could", "might", "must"],
    correcta: 2,
    explicacion:
      "'Must' expresses obligation or a rule. Being quiet in the library is a general rule.",
    categoria: "Modals – Obligation",
  },
  // Q25
  {
    id: 7,
    pregunta: "He ___ come later; he's not sure.",
    opciones: ["must", "might", "can't"],
    correcta: 1,
    explicacion:
      "'Might' expresses possibility or uncertainty. 'He's not sure' confirms it is uncertain.",
    categoria: "Modals – Possibility",
  },
  // Q29
  {
    id: 8,
    pregunta: "You ___ use your phone during the exam.",
    opciones: ["mustn't", "don't have to", "might not"],
    correcta: 0,
    explicacion:
      "'Mustn't' expresses prohibition. Using a phone during an exam is strictly forbidden.",
    categoria: "Modals – Prohibition",
  },
  // Q33
  {
    id: 9,
    pregunta: "You ___ be tired after such a long trip.",
    opciones: ["must", "can't", "shouldn't"],
    correcta: 0,
    explicacion:
      "'Must' is used for logical deduction. A long trip naturally leads to tiredness.",
    categoria: "Modals – Deduction",
  },
  // Q37
  {
    id: 10,
    pregunta: "Students ___ wear uniforms at this school.",
    opciones: ["can", "have to", "might"],
    correcta: 1,
    explicacion:
      "'Have to' expresses external obligation. Schools that require uniforms impose this rule.",
    categoria: "Modals – Obligation",
  },
  // Q41
  {
    id: 11,
    pregunta: "You ___ touch that wire; it's dangerous.",
    opciones: ["must", "don't have to", "mustn't"],
    correcta: 2,
    explicacion:
      "'Mustn't' expresses prohibition. 'It's dangerous' means touching the wire is forbidden.",
    categoria: "Modals – Prohibition",
  },
  // Q45
  {
    id: 12,
    pregunta: "He ___ be joking; that can't be true.",
    opciones: ["must", "shouldn't", "can't"],
    correcta: 0,
    explicacion:
      "'Must' expresses a strong deduction. The speaker believes he is certainly joking.",
    categoria: "Modals – Deduction",
  },
  // Q50
  {
    id: 13,
    pregunta: "You ___ borrow my notes if you want.",
    opciones: ["have to", "may", "mustn't"],
    correcta: 1,
    explicacion:
      "'May' gives permission. The speaker is allowing the other person to borrow notes.",
    categoria: "Modals – Permission",
  },
  // Q51
  {
    id: 14,
    pregunta: "He ___ finish the project today.",
    opciones: ["might", "mustn't", "shouldn't"],
    correcta: 0,
    explicacion:
      "'Might' expresses possibility. It is possible but not certain that he will finish today.",
    categoria: "Modals – Possibility",
  },
  // Q55
  {
    id: 15,
    pregunta: "You ___ tell anyone; it's a secret.",
    opciones: ["must", "mustn't", "don't have to"],
    correcta: 1,
    explicacion:
      "'Mustn't' expresses prohibition. A secret must not be shared with anyone.",
    categoria: "Modals – Prohibition",
  },
  // Q59
  {
    id: 16,
    pregunta: "He ___ run very fast when he was young.",
    opciones: ["can", "could", "must"],
    correcta: 1,
    explicacion:
      "'Could' expresses past ability. He had the ability to run fast when he was young.",
    categoria: "Modals – Past Ability",
  },
  // Q63
  {
    id: 17,
    pregunta: "You ___ finish today; tomorrow is fine.",
    opciones: ["must", "mustn't", "don't have to"],
    correcta: 2,
    explicacion:
      "'Don't have to' expresses lack of obligation. It is not necessary to finish today.",
    categoria: "Modals – No Obligation",
  },
  // Q67
  {
    id: 18,
    pregunta: "They ___ be at work; it's Sunday.",
    opciones: ["must", "can't", "should"],
    correcta: 1,
    explicacion:
      "'Can't' expresses impossibility based on deduction. It is logically impossible they are at work on Sunday.",
    categoria: "Modals – Deduction",
  },
  // Q71
  {
    id: 19,
    pregunta: "You ___ interrupt when someone is speaking.",
    opciones: ["shouldn't", "can", "might"],
    correcta: 0,
    explicacion:
      "'Shouldn't' gives advice against doing something. Interrupting is considered rude.",
    categoria: "Modals – Advice",
  },
  // Q75
  {
    id: 20,
    pregunta: "He ___ be serious; nobody believes him.",
    opciones: ["must", "can't", "shouldn't"],
    correcta: 1,
    explicacion:
      "'Can't' expresses impossibility. The fact that nobody believes him suggests he cannot be serious.",
    categoria: "Modals – Deduction",
  },
  // Q79
  {
    id: 21,
    pregunta: "You ___ use a dictionary in the exam.",
    opciones: ["mustn't", "don't have to", "may"],
    correcta: 2,
    explicacion:
      "'May' gives permission. The sentence means you are allowed to use a dictionary.",
    categoria: "Modals – Permission",
  },
  // Q83
  {
    id: 22,
    pregunta: "She ___ speak to the teacher yesterday.",
    opciones: ["can", "had to", "must"],
    correcta: 1,
    explicacion:
      "'Had to' is the past form of 'must/have to' for obligation. She was obliged to speak to the teacher.",
    categoria: "Modals – Past Obligation",
  },
  // Q87
  {
    id: 23,
    pregunta: "You ___ open the window; it's cold.",
    opciones: ["must", "shouldn't", "have to"],
    correcta: 1,
    explicacion:
      "'Shouldn't' gives advice. Because it is cold, the advice is to not open the window.",
    categoria: "Modals – Advice",
  },
  // Q91
  {
    id: 24,
    pregunta: "You ___ finish the exam before leaving.",
    opciones: ["might", "have to", "can"],
    correcta: 1,
    explicacion:
      "'Have to' expresses obligation. You are required to finish the exam before you can leave.",
    categoria: "Modals – Obligation",
  },
  // Q95+100
  {
    id: 25,
    pregunta: "He ___ be exhausted after the journey.",
    opciones: ["must", "can't", "shouldn't"],
    correcta: 0,
    explicacion:
      "'Must' is used for strong deduction. After a long journey, being exhausted is a logical conclusion.",
    categoria: "Modals – Deduction",
  },
];
