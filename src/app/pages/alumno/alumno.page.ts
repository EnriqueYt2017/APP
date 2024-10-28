import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno', 
  templateUrl: './alumno.page.html', 
  styleUrls: ['./alumno.page.scss'] 
})
export class AlumnoPage implements OnInit {  

  nombreUsuario: string = ''; 
  isMenuOpen: boolean = false; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  
    const nombre = localStorage.getItem('usuario');
    this.nombreUsuario = nombre ? nombre : 'Usuario';
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

 
  logout() {
    localStorage.clear(); 
    this.navCtrl.navigateRoot(['/intro']);
  }

 
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