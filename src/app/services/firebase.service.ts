import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {}

  
  agregarClases() {
    const clases = [
      { nombre: 'Introducción a la Programación', codigo: 'INF_0123' },
      { nombre: 'Estructuras de Datos', codigo: 'INF_0456' },
      { nombre: 'Bases de Datos', codigo: 'INF_0789' },
      { nombre: 'Desarrollo Web', codigo: 'INF_0987' }
    ];

    clases.forEach(clase => {
      this.firestore.collection('clases').add(clase)
        .then(() => console.log(`Clase ${clase.nombre} agregada`))
        .catch(error => console.error('Error al agregar clase: ', error));
    });
  }
}