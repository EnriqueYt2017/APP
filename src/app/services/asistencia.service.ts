import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { arrayUnion } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  constructor(private firestore: AngularFirestore) {}

  async marcarPresente(clase: string, estudianteId: string) {
    const claseRef = this.firestore.collection('clases').doc(clase);

    try {
      await claseRef.update({
        estudiantes: arrayUnion({
          id: estudianteId,
          asistencia: true
        })
      });
      console.log(`Asistencia registrada para el estudiante ${estudianteId} en la clase ${clase}.`);
    } catch (error) {
      console.error('Error al registrar la asistencia: ', error);
      throw error; 
    }
  }
}