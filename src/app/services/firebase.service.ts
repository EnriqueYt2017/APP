import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  // Método para agregar clases (solo usar una vez para inicializar)
  agregarClases() {
    const clases = [
      { nombre: 'Introducción a la Programación', codigo: 'INF_0123', profesor: 'Prof. Pérez', hora: '10:00 AM' },
      { nombre: 'Estructuras de Datos', codigo: 'INF_0456', profesor: 'Prof. García', hora: '12:00 PM' },
      { nombre: 'Bases de Datos', codigo: 'INF_0789', profesor: 'Prof. Sánchez', hora: '2:00 PM' },
      { nombre: 'Desarrollo Web', codigo: 'INF_0987', profesor: 'Prof. López', hora: '4:00 PM' }
    ];

    // Verificar si la colección ya contiene clases
    this.obtenerClases().subscribe(existingClasses => {
      if (existingClasses.length === 0) { // Solo agregar si no hay clases
        clases.forEach(clase => {
          this.firestore.collection('clases').add(clase)
            .then(() => console.log(`Clase ${clase.nombre} agregada`))
            .catch(error => console.error('Error al agregar clase: ', error));
        });
      } else {
        console.log('Las clases ya están inicializadas.');
      }
    });
  }

  // Método para obtener todas las clases desde Firebase
  obtenerClases() {
    return this.firestore.collection('clases').snapshotChanges().pipe(
      map(res => res.map(a => {
        const data: any = a.payload.doc.data()
        const id = a.payload.doc.id;
        return { id, ...data }
      }))
    );
  }
  guardarAsistenciaPorFecha(asistenciaData: any): Promise<void> {
    const { claseId, fecha, estudiantes } = asistenciaData;
  
    return this.firestore.collection('asistencias_por_fecha').add({
      claseId,
      fecha,
      estudiantes: estudiantes.map((est: any) => ({
        id: est.id,
        nombre: est.nombre,
        apellido: est.apellido,
      })),
    })
    .then(() => console.log('Asistencia guardada con éxito'))
    .catch((error) => {
      console.error('Error al guardar asistencia:', error);
      throw error;
    });
  }

  getUsers() {
    return this.firestore.collection('usuarios').snapshotChanges().pipe(
      map(res => res.map(a => {
        const data: any = a.payload.doc.data()
        const id = a.payload.doc.id;
        return { id, ...data }
      }))
    );
  }
}