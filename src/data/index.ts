import type { UnidadInfo } from './types';
import { preguntasUnidad3 } from './unidad3';
import { preguntasUnidad4 } from './unidad4';
import { preguntasUnidad5 } from './unidad5';
import { preguntasUnidad6 } from './unidad6';
import { preguntasUnidad7 } from './unidad7';
import { preguntasUnidad8 } from './unidad8';

export const unidades: UnidadInfo[] = [
  {
    id: 'unidad3',
    titulo: 'Introducción a Dart',
    descripcion: 'Fundamentos del lenguaje Dart: variables, tipos, funciones, POO y operadores.',
    temas: ['Variables y constantes', 'Tipos de datos', 'Funciones', 'POO', 'Operadores'],
    color: 'from-cyan-500 to-blue-600',
    icono: '🎯'
  },
  {
    id: 'unidad4',
    titulo: 'Flutter & Git Setup',
    descripcion: 'Instalación de Flutter, comandos CLI, control de versiones con Git y despliegue.',
    temas: ['Instalación', 'Comandos CLI', 'Git', 'Build y Deploy'],
    color: 'from-blue-500 to-indigo-600',
    icono: '⚙️'
  },
  {
    id: 'unidad5',
    titulo: 'Widgets en Flutter',
    descripcion: 'Widgets básicos, layouts, Stateless vs Stateful, ciclo de vida y composición.',
    temas: ['Widgets básicos', 'Layout', 'State', 'Ciclo de vida', 'Composición'],
    color: 'from-indigo-500 to-purple-600',
    icono: '🧩'
  },
  {
    id: 'unidad6',
    titulo: 'Interfaces y Arquitectura',
    descripcion: 'Interfaces naturales, gestos, animaciones, Clean Architecture y organización.',
    temas: ['Gestos', 'Animaciones', 'Arquitectura', 'Clean Architecture', 'Organización'],
    color: 'from-purple-500 to-pink-600',
    icono: '🏗️'
  },
  {
    id: 'unidad7',
    titulo: 'Navegación y Estado',
    descripcion: 'Navegación entre pantallas, gestión de estado con Provider y diseño responsive.',
    temas: ['Navegación', 'Routing', 'Estado', 'Provider', 'Responsive'],
    color: 'from-pink-500 to-rose-600',
    icono: '🧭'
  },
  {
    id: 'unidad8',
    titulo: 'APIs y Firebase',
    descripcion: 'Consumo de APIs REST, Firebase (Auth, Firestore), Riverpod y Freezed.',
    temas: ['APIs REST', 'Firebase Auth', 'Firestore', 'Riverpod', 'Freezed'],
    color: 'from-orange-500 to-red-600',
    icono: '🔥'
  }
];

export const preguntasPorUnidad = {
  unidad3: preguntasUnidad3,
  unidad4: preguntasUnidad4,
  unidad5: preguntasUnidad5,
  unidad6: preguntasUnidad6,
  unidad7: preguntasUnidad7,
  unidad8: preguntasUnidad8,
};

export function obtenerPreguntas(unidadId: string) {
  return preguntasPorUnidad[unidadId as keyof typeof preguntasPorUnidad] || [];
}

export function obtenerUnidad(unidadId: string) {
  return unidades.find(u => u.id === unidadId);
}

// Función para aleatorizar array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
