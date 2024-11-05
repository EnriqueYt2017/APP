import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { Estudiante } from 'src/app/models/estudiante.model';
import { ActivatedRoute } from '@angular/router';
import { ClaseService } from 'src/app/services/clase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importa AngularFirestore
import { NavController } from '@ionic/angular'; // Importa NavController
import { FirebaseService } from 'src/app/services/firebase.service';

interface Clase {
  id: any;
  nombre: any;
  codigo: any;
  profesor: any;
  hora: any;
  [key: string]: any; // Permite el acceso mediante índices de tipo cadena
}

@Component({
  selector: 'app-cursos-d',
  templateUrl: './cursos-d.page.html',
  styleUrls: ['./cursos-d.page.scss'],
})
export class CursosDPage implements OnInit {
  claseSeleccionada: string | null = '';
  estudiantes: Estudiante[] = [];
  id: string | null;
  class: Clase; // Usa la interfaz Clase

  constructor(
    private asistenciaService: AsistenciaService,
    private fs: FirebaseService,
    private route: ActivatedRoute,
    private clase: ClaseService,
    private firestore: AngularFirestore, // Inyecta AngularFirestore
    private navCtrl: NavController // Inyecta NavController
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerAsistencias();
  }

  obtenerAsistencias() {
    if (!this.id) return;
    this.clase.obtenerClase(this.id).subscribe(c => {
      this.class = { ...c, id: this.id }; // Asegura que el campo id esté presente
      this.asistenciaService
        .obtenerAsistencias(c.codigo)
        .subscribe((asistencias) => {
          this.estudiantes = asistencias.map((asistencia) => ({
            id: asistencia.uid, // Asegúrate de que el campo id esté presente
            nombre: asistencia.nombre,
            apellido: asistencia.apellido,
            email: asistencia.email,
            rol: asistencia.rol,
            presente: asistencia.presente
          }));
        });
    });
  }

  enviarAsistencia() {
    console.log('Asistencia enviada para la clase:', this.claseSeleccionada);
    if (!this.class || !this.class.id || !this.class.nombre || !this.class.codigo) {
      console.error('Datos de la clase incompletos:', this.class);
      return;
    }

    this.fs.getUsers().subscribe((estudiantes) => {
      const users = estudiantes.filter((estudiante) => estudiante.rol === 'alumno');
      const asistencias = users.map((estudiante) => ({
        uid: estudiante.id,
        nombre: estudiante.nombre,
        apellido: estudiante.apellido,
        email: estudiante.email,
        rol: estudiante.rol,
        presente: this.estudiantes.find((e) => e.email === estudiante.email)?.presente || false
      }));
      
      const claseData = {
        clase: {
          id: this.class.id,
          nombre: this.class.nombre,
          codigo: this.class.codigo,
          profesor: this.class.profesor,
          hora: this.class.hora,
          // Agrega otros campos relevantes aquí
        },
        estudiantes: asistencias,
        fecha: new Date().toISOString()
      };

      const requiredFields = ['id', 'nombre', 'codigo', 'profesor', 'hora'];
      // Agregar los datos a la colección 'lista-asistencias'
      this.firestore.collection('lista-asistencias').add(claseData).then(() => {
        this.navCtrl.navigateForward(['/detalle-estudiantes/' + claseData.clase.id]);
      }).catch(error => {
        console.error('Error al agregar documento a Firestore:', error);
      });

      this.asistenciaService.eliminarAsistencia(this.estudiantes.map(e => e.id));
    });
  }
}