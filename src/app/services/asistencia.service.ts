import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsistenciaService {
  constructor(private firestore: AngularFirestore) {}

  obtenerAsistencias(claseId: string): Observable<any[]> {
    return this.firestore
      .collection('asistencias', (ref) => ref.where('clase', '==', claseId))
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data: any = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { uid: id, ...data };
        }))
      );
  }

  eliminarAsistencia(alumnos: string[]): Promise<void> {
    const batch = this.firestore.firestore.batch();
    alumnos.forEach((alumno) => {
      const asistenciaRef = this.firestore.collection('asistencias').doc(alumno);
      batch.delete(asistenciaRef.ref);
    });
    return batch.commit();
  }
}