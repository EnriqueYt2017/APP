import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  usuario:string=''

  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
    var x=localStorage.getItem("usuario")
    this.usuario=x ?? ''
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
