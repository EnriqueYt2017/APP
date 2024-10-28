export interface Estudiante {
    id: string;
    nombre: string;
    apellido: string;
    email: string | null;
    rol: string;
    asistencia?: boolean; // O el tipo que corresponda
    presente?: boolean;    // Agregar esta propiedad
  }