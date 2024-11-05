import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

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

  listain() {
    this.navCtrl.navigateForward(['/lista-cursos'])
  }

  listacur() {
    this.navCtrl.navigateForward(['/lista-informe'])
  }

  cursolista() {
    this.navCtrl.navigateForward(['/lista-cur'])
  }

  clases() {
    this.navCtrl.navigateForward(['/clases'])
  }
}
