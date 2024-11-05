export interface Estudiante {
  id: string;
  nombre: string;
  apellido: string;
  email: string | null;
  rol: string;
  asistencia?: boolean;
  presente?: boolean;
  docId?: string;
}