import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Estudiante } from 'src/app/models/estudiante.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClaseService {
  private claseSeleccionada = new BehaviorSubject<any>(null);

  constructor(private firestore: AngularFirestore) {}

  setClaseSeleccionada(clase: any): void {
    this.claseSeleccionada.next(clase);
  }

  getClaseSeleccionada(): Observable<any> {
    return this.claseSeleccionada.asObservable();
  }

  obtenerClase(id: string): Observable<any> {
    return this.firestore.collection('clases').doc(id).valueChanges();
  }

  obtenerClases(): Observable<any[]> {
    return this.firestore.collection('clases').valueChanges();
  }

  // Registrar asistencia con un campo estudianteId único
  registrarAsistencia(claseCodigo: string, estudiante: Estudiante): Promise<void> {
    const asistencia = {
      /* estudianteId: estudiante.id, // ID único del estudiante */
      clase: claseCodigo,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      email: estudiante.email,
      rol: estudiante.rol,
      presente: true,
      fecha: new Date().toISOString(),
    };

    return this.firestore
      .collection('asistencias')
      .add(asistencia)
      .then(() => console.log('Asistencia registrada'))
      .catch((error: any) => console.error('Error registrando asistencia:', error));
  }

  // Eliminar asistencia basada en claseCodigo y estudianteId
  eliminarAsistencia(claseCodigo: string, estudianteId: string): void {
    this.firestore.collection('asistencias', (ref: any) =>
      ref.where('clase', '==', claseCodigo).where('estudianteId', '==', estudianteId)
    ).get().subscribe((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        this.firestore.collection('asistencias').doc(doc.id).delete()
          .then(() => console.log('Asistencia eliminada'))
          .catch((error: any) => console.error('Error eliminando asistencia:', error));
      });
    });
  }

  // Obtener asistencias filtradas por clase y estudianteId
  obtenerAsistencias(claseCodigo: string, estudianteId: string): Observable<any[]> {
    return this.firestore.collection('asistencias', (ref: CollectionReference) =>
      ref.where('clase', '==', claseCodigo).where('estudianteId', '==', estudianteId)
    ).valueChanges();
  }
  obtenerFechasDeAsistencia(claseId: string): Observable<string[]> {
    return this.firestore
      .collection('asistencias_por_fecha', (ref) =>
        ref.where('claseId', '==', claseId)
      )
      .valueChanges()
      .pipe(
        map((asistencias: any[]) =>
          asistencias.map((asistencia) => asistencia.fecha).filter((value, index, self) => self.indexOf(value) === index)
        )
      );
  }

  obtenerAsistenciaPorFecha(claseId: string, fecha: string): Observable<any[]> {
    return this.firestore
      .collection('lista-asistencias', (ref) =>
        ref.where('clase.id', '==', claseId).where('fecha', '==', fecha)
      )
      .valueChanges()
      .pipe(
        map((asistencias: any[]) =>
          asistencias.map((asistencia) => ({
            estudiantes: asistencia.estudiantes.map((estudiante: any) => ({
              nombre: estudiante.nombre,
              apellido: estudiante.apellido,
              presente: estudiante.presente,
            })),
          }))
        )
      );
  }

  obtenerAsistenciaPorClase(claseId: string): Observable<any[]> {
    return this.firestore
      .collection('lista-asistencias', (ref) =>
        ref.where('clase.id', '==', claseId)
      )
      .valueChanges()
      .pipe(
        map((asistencias: any[]) => {
          return asistencias.map((asistencia) => ({
            estudiantes: asistencia.estudiantes.map((estudiante: any) => ({
              nombre: estudiante.nombre,
              apellido: estudiante.apellido,
              presente: estudiante.presente,
              id: estudiante.uid,
            })),
          }))
        })
      );
  }

}