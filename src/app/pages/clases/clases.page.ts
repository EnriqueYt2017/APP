import { Component, OnInit } from '@angular/core';
import { ClaseService } from '../../services/clase.service';
import { FirebaseService } from '../../services/firebase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {
  cursos: any[] = []; // Almacena las clases obtenidas de Firebase

  constructor(
    private claseService: ClaseService,
    private firebaseService: FirebaseService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Cargar las clases desde Firestore
    this.firebaseService.obtenerClases().subscribe((clases) => {
      this.cursos = clases; // Asignar las clases a la variable de cursos
    });

    // Agregar clases solo si no están inicializadas
    this.firebaseService.agregarClases();
  }

  cursolista(curso: any) {
    console.log('Curso seleccionado:', curso); // Verifica que el curso se esté seleccionando correctamente
    this.navCtrl.navigateForward(`/detalle-estudiantes/${curso.id}`);
  }
}