import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  usuario:string=''

  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
    var x=localStorage.getItem("usuario")
    this.usuario=x ?? ''
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
}
