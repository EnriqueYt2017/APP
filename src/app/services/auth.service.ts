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

  
  getEstudianteActual(): Observable<Estudiante | null> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
        
          return this.firestore.collection<Estudiante>('usuarios').doc(user.uid).valueChanges().pipe(
            map(estudiante => estudiante || null)
          );
        } else {
         
          return of(null);
        }
      })
    );
  }

  
  getLoggedInUser() {
    return this.afAuth.authState;
  }
}