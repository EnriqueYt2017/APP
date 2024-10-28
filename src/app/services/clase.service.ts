import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClaseService {
  private claseSeleccionada = new BehaviorSubject<any>(null); // Almacena la clase seleccionada

  constructor(private firestore: AngularFirestore) {}

  // Establece la clase seleccionada en el BehaviorSubject
  setClaseSeleccionada(clase: any) {
    this.claseSeleccionada.next(clase);
  }

  // Devuelve la clase seleccionada como observable para suscripción
  getClaseSeleccionada(): Observable<any> {
    return this.claseSeleccionada.asObservable();
  }

  // Obtiene todas las clases desde la colección 'clases'
  obtenerClases(): Observable<any[]> {
    return this.firestore.collection('clases').valueChanges();
  }

  // Guarda la asistencia en Firestore en la colección 'asistencias'
  registrarAsistencia(claseId: string, alumno: string): Promise<void> {
    const asistencia = {
      claseId,
      alumno,
      fecha: new Date().toISOString(), // Marca la fecha y hora de la asistencia
    };

    return this.firestore
      .collection('asistencias')
      .add(asistencia)
      .then(() => console.log('Asistencia registrada'))
      .catch((error) => console.error('Error registrando asistencia:', error));
  }
}