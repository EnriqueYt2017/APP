import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',  // Cambia a 'app-docente' si es para docente
  templateUrl: './alumno.page.html', // o './docente.page.html'
  styleUrls: ['./alumno.page.scss'] // o './docente.page.scss'
})
export class AlumnoPage implements OnInit {  // O 'DocentePage'

  nombreUsuario: string = ''; // Almacena el nombre del usuario (Alumno/Docente)
  isMenuOpen: boolean = false; // Controla si el menú está abierto o cerrado

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Obtener el nombre del usuario desde localStorage
    const nombre = localStorage.getItem('usuario');
    this.nombreUsuario = nombre ? nombre : 'Usuario';
  }

  // Alternar entre mostrar y ocultar el menú desplegable
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Función para cerrar sesión
  logout() {
    localStorage.clear(); // Limpiar los datos del usuario
    this.navCtrl.navigateRoot(['/intro']); // Redirigir a la pantalla de introducción
  }

  // Navegar a las diferentes vistas (cursos, escáner, asistencia)
  curso(){
    this.navCtrl.navigateForward(['/cursos-a'])
  }

  escaner(){
    this.navCtrl.navigateForward(['/qr-a'])
  }

  asistencia(){
    this.navCtrl.navigateForward(['/asistencia'])
  }
}