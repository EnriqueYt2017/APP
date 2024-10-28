import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Estudiante } from 'src/app/models/estudiante.model';

@Component({
  selector: 'app-cursos-d',
  templateUrl: './cursos-d.page.html',
  styleUrls: ['./cursos-d.page.scss'],
})
export class CursosDPage implements OnInit {
  claseSeleccionada: string | null = '';
  estudiantes: Estudiante[] = [];

  constructor(
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    
    this.claseSeleccionada = localStorage.getItem('claseSeleccionada');
    console.log('Clase seleccionada en ngOnInit:', this.claseSeleccionada);

    if (this.claseSeleccionada) {
      this.cargarAsistencias();
    }
  }

  cargarAsistencias() {
    console.log('Cargando asistencias para la clase:', this.claseSeleccionada);

    this.firestore.collection('asistencias', ref =>
      ref.where('clase', '==', this.claseSeleccionada)
    ).valueChanges().subscribe((asistencias: any[]) => {
      console.log('Asistencias obtenidas:', asistencias);

      const asistenciaUnica = asistencias.reduce((acc: any[], asistencia: any) => {
        if (!acc.some((a) => a.userId === asistencia.userId)) {
          acc.push(asistencia);
        }
        return acc;
      }, []);

      this.estudiantes = asistenciaUnica.map((asistencia: any) => ({
        id: asistencia.userId,
        nombre: asistencia.nombre,
        apellido: asistencia.apellido,
        email: asistencia.email || '',
        rol: 'alumno',
      }));

      console.log('Estudiantes sin duplicados:', this.estudiantes);
    });
  }

  enviarAsistencia() {
    console.log('Asistencia enviada para la clase:', this.claseSeleccionada);
  }

  eliminarEstudiante(id: string) {
    console.log(`Eliminando al estudiante con ID: ${id}`);

    this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !== id);

    this.firestore.collection('asistencias', ref =>
      ref.where('userId', '==', id).where('clase', '==', this.claseSeleccionada)
    ).get().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.firestore.collection('asistencias').doc(doc.id).delete()
          .then(() => {
            console.log(`Asistencia del estudiante con ID ${id} eliminada`);
          })
          .catch(error => {
            console.error("Error al eliminar la asistencia:", error);
          });
      });
    });
  }
}