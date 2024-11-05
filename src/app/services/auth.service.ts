import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Estudiante } from '../models/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  async getEstudianteActual(): Promise<Estudiante> {
    return new Promise(async (resolve, reject) => {
      this.afAuth.onAuthStateChanged(async user => {
        if (user?.uid) {
          const doc = await this.firestore.collection<Estudiante>('usuarios').doc(user?.uid).get().toPromise()
          if (doc?.exists) {
            const data = doc.data()
            if (data) resolve(data);
          }
        } else {
          reject('no se encontro el id del estudiante')
        }
      })
    })
  }

  
  getLoggedInUser() {
    return this.afAuth.authState;
  }
}