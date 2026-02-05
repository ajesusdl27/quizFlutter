import type { Asignatura } from './types';

export const asignaturas: Asignatura[] = [
  {
    id: 'desarrollo-interfaces',
    nombre: 'Desarrollo de Interfaces',
    nombreCorto: 'DI',
    descripcion: 'Diseño y desarrollo de interfaces gráficas multiplataforma con Flutter y Dart.',
    color: 'from-cyan-500 to-blue-600',
    icono: '📱',
  },
  {
    id: 'acceso-datos',
    nombre: 'Acceso a Datos',
    nombreCorto: 'AD',
    descripcion: 'Gestión y persistencia de datos con bases de datos relacionales, ORM y APIs.',
    color: 'from-green-500 to-emerald-600',
    icono: '💾',
  },
  {
    id: 'psp',
    nombre: 'Programación de Servicios y Procesos',
    nombreCorto: 'PSP',
    descripcion: 'Programación multihilo, procesos, comunicaciones en red y servicios distribuidos.',
    color: 'from-purple-500 to-indigo-600',
    icono: '⚙️',
  },
  {
    id: 'sge',
    nombre: 'Sistema de Gestión Empresarial',
    nombreCorto: 'SGE',
    descripcion: 'Sistemas ERP, CRM y gestión empresarial aplicada.',
    color: 'from-pink-500 to-rose-600',
    icono: '🏢',
  },
  {
    id: 'ingles-dam',
    nombre: 'Inglés Adaptado a DAM',
    nombreCorto: 'Inglés',
    descripcion: 'Inglés técnico aplicado al desarrollo de aplicaciones multiplataforma.',
    color: 'from-blue-500 to-indigo-600',
    icono: '🌐',
  },
  {
    id: 'empleabilidad',
    nombre: 'Itinerario Personal para la Empleabilidad II',
    nombreCorto: 'Empleabilidad',
    descripcion: 'Habilidades profesionales, búsqueda de empleo y desarrollo de carrera.',
    color: 'from-amber-500 to-orange-600',
    icono: '💼',
  },
  {
    id: 'ia',
    nombre: 'Introducción a la Programación de IA',
    nombreCorto: 'IA',
    descripcion: 'Fundamentos de inteligencia artificial y machine learning aplicado.',
    color: 'from-violet-500 to-purple-600',
    icono: '🤖',
  },
  {
    id: 'multimedia',
    nombre: 'Programación Multimedia',
    nombreCorto: 'Multimedia',
    descripcion: 'Desarrollo de aplicaciones multimedia: audio, vídeo, gráficos y animación.',
    color: 'from-red-500 to-pink-600',
    icono: '🎬',
  },
  {
    id: 'proyectos',
    nombre: 'Proyectos',
    nombreCorto: 'Proyectos',
    descripcion: 'Planificación y desarrollo de proyectos integrales de desarrollo de software.',
    color: 'from-slate-500 to-gray-600',
    icono: '📊',
  },
];

// Helper para obtener asignatura por ID
export function obtenerAsignatura(id: string): Asignatura | undefined {
  return asignaturas.find(asig => asig.id === id);
}
