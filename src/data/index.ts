import type { Tema, Asignatura, Pregunta } from "./types";
import { asignaturas, obtenerAsignatura } from "./asignaturas";

// Imports de Desarrollo de Interfaces
import { preguntasUnidad3 } from "./desarrollo-interfaces/unidad3";
import { preguntasUnidad4 } from "./desarrollo-interfaces/unidad4";
import { preguntasUnidad5 } from "./desarrollo-interfaces/unidad5";
import { preguntasUnidad6 } from "./desarrollo-interfaces/unidad6";
import { preguntasUnidad7 } from "./desarrollo-interfaces/unidad7";
import { preguntasUnidad8 } from "./desarrollo-interfaces/unidad8";

// Imports de Acceso a Datos
import { preguntasPsp } from "./acceso-datos/psp";
import { preguntasHibernate, hibernateInfo } from "./acceso-datos/hibernate";
import { preguntasOrmJpa, ormJpaInfo } from "./acceso-datos/orm-jpa";

// Imports de SGE
import {
  preguntasAstroFundamentos,
  astroFundamentosInfo,
} from "./sge/astro-fundamentos";
import { preguntasAstroApuntes, astroApuntesInfo } from "./sge/astro-apuntes";
import {
  preguntasMcpSupabaseStripe,
  mcpSupabaseStripeInfo,
} from "./sge/mcp-supabase-stripe";
import {
  preguntasCrmAstroSupabaseStripe,
  crmAstroSupabaseStripeInfo,
} from "./sge/crm-astro-supabase-stripe";
import { preguntasSupabase, supabaseInfo } from "./sge/supabase";
import { preguntasStripe, stripeInfo } from "./sge/stripe";
import { preguntasCoolify, coolifyInfo } from "./sge/coolify";

// Imports de Empleabilidad
import { preguntasTema7, tema7Info } from "./empleabilidad/tema7";
import {
  preguntasTema7Cuentalo,
  tema7CuentaloInfo,
} from "./empleabilidad/tema7-cuentalo";

// Imports de Inglés DAM
import { preguntasModals, modalsInfo } from "./ingles-dam/modals";
import {
  preguntasPrepositions,
  prepositionsInfo,
} from "./ingles-dam/prepositions";
import {
  preguntasConditionals,
  conditionalsInfo,
} from "./ingles-dam/conditionals";
import { preguntasRelatives, relativesInfo } from "./ingles-dam/relatives";

// Imports de IA
import { preguntasTema2PythonIa, tema2PythonIaInfo } from "./ia/tema2-python-ia";

// Imports de PSP
import {
  bloque1FundamentosRedInfo,
  preguntasBloque1FundamentosRed,
} from "./psp/bloque-1-fundamentos-red";
import {
  bloque2PilaTcpIpInfo,
  preguntasBloque2PilaTcpIp,
} from "./psp/bloque-2-pila-tcp-ip";
import {
  bloque3JavaSocketsInfo,
  preguntasBloque3JavaSockets,
} from "./psp/bloque-3-java-sockets";

const preguntasUnidad8Firebase = preguntasUnidad8.filter(
  (pregunta) => pregunta.categoria === "Firebase",
);
const preguntasUnidad8Apis = preguntasUnidad8.filter(
  (pregunta) => pregunta.categoria !== "Firebase",
);

// ============================================================
// TEMAS POR ASIGNATURA
// ============================================================

// Temas de Desarrollo de Interfaces
const temasDesarrolloInterfaces: Tema[] = [
  {
    id: "unidad3",
    titulo: "Introducción a Dart",
    descripcion:
      "Fundamentos del lenguaje Dart: variables, tipos, funciones, POO y operadores.",
    temas: [
      "Variables y constantes",
      "Tipos de datos",
      "Funciones",
      "POO",
      "Operadores",
    ],
    color: "from-cyan-500 to-blue-600",
    icono: "🎯",
    asignaturaId: "desarrollo-interfaces",
  },
  {
    id: "unidad4",
    titulo: "Flutter & Git Setup",
    descripcion:
      "Instalación de Flutter, comandos CLI, control de versiones con Git y despliegue.",
    temas: ["Instalación", "Comandos CLI", "Git", "Build y Deploy"],
    color: "from-blue-500 to-indigo-600",
    icono: "⚙️",
    asignaturaId: "desarrollo-interfaces",
  },
  {
    id: "unidad5",
    titulo: "Widgets en Flutter",
    descripcion:
      "Widgets básicos, layouts, Stateless vs Stateful, ciclo de vida y composición.",
    temas: [
      "Widgets básicos",
      "Layout",
      "State",
      "Ciclo de vida",
      "Composición",
    ],
    color: "from-indigo-500 to-purple-600",
    icono: "🧩",
    asignaturaId: "desarrollo-interfaces",
  },
  {
    id: "unidad6",
    titulo: "Interfaces y Arquitectura",
    descripcion:
      "Interfaces naturales, gestos, animaciones, Clean Architecture y organización.",
    temas: [
      "Gestos",
      "Animaciones",
      "Arquitectura",
      "Clean Architecture",
      "Organización",
    ],
    color: "from-purple-500 to-pink-600",
    icono: "🏗️",
    asignaturaId: "desarrollo-interfaces",
  },
  {
    id: "unidad7",
    titulo: "Navegación y Estado",
    descripcion:
      "Navegación entre pantallas, gestión de estado con Provider y diseño responsive.",
    temas: ["Navegación", "Routing", "Estado", "Provider", "Responsive"],
    color: "from-pink-500 to-rose-600",
    icono: "🧭",
    asignaturaId: "desarrollo-interfaces",
  },
  {
    id: "unidad8-apis",
    titulo: "APIs",
    descripcion:
      "Consumo de APIs REST y organización de estado/modelos con Riverpod y Freezed.",
    temas: ["APIs REST", "Riverpod", "Freezed"],
    color: "from-orange-500 to-red-600",
    icono: "🌐",
    asignaturaId: "desarrollo-interfaces",
  },
  {
    id: "unidad8-firebase",
    titulo: "Firebase",
    descripcion:
      "Autenticación, Firestore y servicios backend de Firebase en Flutter.",
    temas: ["Firebase Auth", "Firestore", "Storage"],
    color: "from-orange-500 to-red-600",
    icono: "🔥",
    asignaturaId: "desarrollo-interfaces",
  },
];

// Temas de Acceso a Datos
const temasAccesoDatos: Tema[] = [
  {
    id: "psp",
    titulo: "Hibernate",
    descripcion:
      "ORM, JPA y Hibernate: mapeo, sesiones, consultas, relaciones y configuración.",
    temas: ["ORM y JDBC", "Arquitectura", "Mapeo", "HQL/JPQL", "Relaciones"],
    color: "from-emerald-500 to-teal-600",
    icono: "🧪",
    asignaturaId: "acceso-datos",
  },
  {
    ...hibernateInfo,
    asignaturaId: "acceso-datos",
  },
  {
    ...ormJpaInfo,
    asignaturaId: "acceso-datos",
  },
];

// Temas de SGE
const temasSGE: Tema[] = [
  {
    ...astroFundamentosInfo,
    asignaturaId: "sge",
  },
  {
    ...astroApuntesInfo,
    asignaturaId: "sge",
  },
  {
    ...mcpSupabaseStripeInfo,
    asignaturaId: "sge",
  },
  {
    ...crmAstroSupabaseStripeInfo,
    asignaturaId: "sge",
  },
  {
    ...supabaseInfo,
    asignaturaId: "sge",
  },
  {
    ...stripeInfo,
    asignaturaId: "sge",
  },
  {
    ...coolifyInfo,
    asignaturaId: "sge",
  },
];

// Temas de Empleabilidad
const temasEmpleabilidad: Tema[] = [
  {
    ...tema7Info,
    asignaturaId: "empleabilidad",
  },
  {
    ...tema7CuentaloInfo,
    asignaturaId: "empleabilidad",
  },
];

// Temas de Inglés DAM
const temasInglesDam: Tema[] = [
  {
    ...modalsInfo,
    asignaturaId: "ingles-dam",
  },
  {
    ...prepositionsInfo,
    asignaturaId: "ingles-dam",
  },
  {
    ...conditionalsInfo,
    asignaturaId: "ingles-dam",
  },
  {
    ...relativesInfo,
    asignaturaId: "ingles-dam",
  },
];

// Temas de IA
const temasIA: Tema[] = [
  {
    ...tema2PythonIaInfo,
    asignaturaId: "ia",
  },
];

// Temas de PSP
const temasPSP: Tema[] = [
  {
    ...bloque1FundamentosRedInfo,
    asignaturaId: "psp",
  },
  {
    ...bloque2PilaTcpIpInfo,
    asignaturaId: "psp",
  },
  {
    ...bloque3JavaSocketsInfo,
    asignaturaId: "psp",
  },
];

// ============================================================
// ESTRUCTURA JERÁRQUICA: TEMAS AGRUPADOS POR ASIGNATURA
// ============================================================

export const temasPorAsignatura: Record<string, Tema[]> = {
  "desarrollo-interfaces": temasDesarrolloInterfaces,
  "acceso-datos": temasAccesoDatos,
  psp: temasPSP,
  sge: temasSGE,
  "ingles-dam": temasInglesDam,
  empleabilidad: temasEmpleabilidad,
  ia: temasIA,
  multimedia: [],
  proyectos: [],
};

// ============================================================
// PREGUNTAS POR ASIGNATURA Y TEMA
// ============================================================

const preguntasPorTema: Record<string, Record<string, Pregunta[]>> = {
  "desarrollo-interfaces": {
    unidad3: preguntasUnidad3,
    unidad4: preguntasUnidad4,
    unidad5: preguntasUnidad5,
    unidad6: preguntasUnidad6,
    unidad7: preguntasUnidad7,
    "unidad8-apis": preguntasUnidad8Apis,
    "unidad8-firebase": preguntasUnidad8Firebase,
  },
  "acceso-datos": {
    psp: preguntasPsp,
    hibernate: preguntasHibernate,
    "orm-jpa": preguntasOrmJpa,
  },
  psp: {
    "bloque-1-fundamentos-red": preguntasBloque1FundamentosRed,
    "bloque-2-pila-tcp-ip": preguntasBloque2PilaTcpIp,
    "bloque-3-java-sockets": preguntasBloque3JavaSockets,
  },
  sge: {
    "astro-fundamentos": preguntasAstroFundamentos,
    "astro-apuntes": preguntasAstroApuntes,
    "mcp-supabase-stripe": preguntasMcpSupabaseStripe,
    "crm-astro-supabase-stripe": preguntasCrmAstroSupabaseStripe,
    supabase: preguntasSupabase,
    stripe: preguntasStripe,
    coolify: preguntasCoolify,
  },
  empleabilidad: {
    tema7: preguntasTema7,
    "tema7-cuentalo": preguntasTema7Cuentalo,
  },
  "ingles-dam": {
    modals: preguntasModals,
    prepositions: preguntasPrepositions,
    conditionals: preguntasConditionals,
    relatives: preguntasRelatives,
  },
  ia: {
    "tema2-python-ia": preguntasTema2PythonIa,
  },
};

// ============================================================
// EXPORTS PRINCIPALES
// ============================================================

export { asignaturas };

// Lista plana de todos los temas (para compatibilidad)
export const todosLosTemas: Tema[] = [
  ...temasDesarrolloInterfaces,
  ...temasAccesoDatos,
  ...temasPSP,
];

// ============================================================
// HELPERS
// ============================================================

/**
 * Obtener información de una asignatura por su ID
 */
export function obtenerAsignaturaInfo(id: string): Asignatura | undefined {
  return obtenerAsignatura(id);
}

/**
 * Obtener un tema específico de una asignatura
 */
export function obtenerTema(
  asignaturaId: string,
  temaId: string,
): Tema | undefined {
  const temas = temasPorAsignatura[asignaturaId];
  return temas?.find((t) => t.id === temaId);
}

/**
 * Obtener preguntas de un tema específico
 */
export function obtenerPreguntasTema(
  asignaturaId: string,
  temaId: string,
): Pregunta[] {
  return preguntasPorTema[asignaturaId]?.[temaId] || [];
}

/**
 * Obtener todas las preguntas de una asignatura
 */
export function obtenerPreguntasAsignatura(asignaturaId: string): Pregunta[] {
  const temasDeLaAsignatura = preguntasPorTema[asignaturaId];
  if (!temasDeLaAsignatura) return [];

  return Object.values(temasDeLaAsignatura).flat();
}

/**
 * Obtener estadísticas de una asignatura
 */
export function obtenerEstadisticasAsignatura(asignaturaId: string) {
  const temas = temasPorAsignatura[asignaturaId] || [];
  const preguntas = obtenerPreguntasAsignatura(asignaturaId);

  return {
    numTemas: temas.length,
    numPreguntas: preguntas.length,
    temas,
  };
}

/**
 * Obtener estadísticas globales
 */
export function obtenerEstadisticasGlobales() {
  const totalAsignaturas = asignaturas.length;
  let totalTemas = 0;
  let totalPreguntas = 0;

  Object.keys(temasPorAsignatura).forEach((asignaturaId) => {
    const stats = obtenerEstadisticasAsignatura(asignaturaId);
    totalTemas += stats.numTemas;
    totalPreguntas += stats.numPreguntas;
  });

  return {
    totalAsignaturas,
    totalTemas,
    totalPreguntas,
  };
}

// Compatibilidad temporal con código antiguo
export function obtenerPreguntas(unidadId: string): Pregunta[] {
  // Intenta encontrar en desarrollo-interfaces primero
  if (preguntasPorTema["desarrollo-interfaces"]?.[unidadId]) {
    return preguntasPorTema["desarrollo-interfaces"][unidadId];
  }
  // Luego en acceso-datos
  if (preguntasPorTema["acceso-datos"]?.[unidadId]) {
    return preguntasPorTema["acceso-datos"][unidadId];
  }

  return [];
}

export function obtenerUnidad(unidadId: string): Tema | undefined {
  return todosLosTemas.find((t) => t.id === unidadId);
}

// ============================================================
// UTILIDADES
// ============================================================

/**
 * Función para aleatorizar array (Fisher-Yates shuffle)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
