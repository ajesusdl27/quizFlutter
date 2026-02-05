export interface Pregunta {
  id: number;
  pregunta: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
  categoria: string;
}

export interface Asignatura {
  id: string;  // slug-friendly: "desarrollo-interfaces", "acceso-datos", etc.
  nombre: string;  // "Desarrollo de Interfaces"
  nombreCorto: string;  // "DI"
  descripcion: string;
  color: string;  // Tailwind gradient classes
  icono: string;  // Emoji
}

export interface Tema {
  id: string;
  titulo: string;
  descripcion: string;
  temas: string[];  // Contenidos/topics del tema
  color: string;
  icono: string;
  asignaturaId: string;  // Referencia a Asignatura.id
}

// Compatibilidad temporal con código existente
export interface UnidadInfo extends Tema {}
