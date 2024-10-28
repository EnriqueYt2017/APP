import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-lista-cur',
  templateUrl: './lista-cur.page.html',
  styleUrls: ['./lista-cur.page.scss'],
})
export class ListaCurPage implements OnInit {
  clases: any[] = [];

  constructor(
    private router: Router,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.cargarClases();
  }

  cargarClases() {
    this.firestore.collection('clases').snapshotChanges().subscribe((snapshot) => {
      this.clases = snapshot.map((doc) => ({
        id: doc.payload.doc.id,
        ...doc.payload.doc.data() as any,
      }));
      console.log('Clases cargadas:', this.clases);
    });
  }

  seleccionarClase(clase: any) {
    console.log('Clase seleccionada:', clase);
    localStorage.setItem('claseSeleccionada', JSON.stringify(clase));
    this.router.navigate(['/cursos-d']);
  }
}