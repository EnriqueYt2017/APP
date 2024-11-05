import { Component, OnInit } from '@angular/core';
import { ClaseService } from '../../services/clase.service';
import { FirebaseService } from '../../services/firebase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.page.html',
  styleUrls: ['./lista-cursos.page.scss'],
})
export class ListaCursosPage implements OnInit {
  cursos: any[] = [];

  constructor(
    private claseService: ClaseService,
    private firebaseService: FirebaseService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Cargar las clases desde Firestore
    this.firebaseService.obtenerClases().subscribe((clases) => {
      console.log(clases);
      this.cursos = clases; // Asignar las clases a la variable de cursos
    });

    // Agregar clases solo si no están inicializadas
    this.firebaseService.agregarClases();
  }

  generar(id: string) {
    this.navCtrl.navigateForward(['/informe-d/' + id]);
  }



}
