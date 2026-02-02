export interface Pregunta {
  id: number;
  pregunta: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
  categoria: string;
}

export interface UnidadInfo {
  id: string;
  titulo: string;
  descripcion: string;
  temas: string[];
  color: string;
  icono: string;
}
