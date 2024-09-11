import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  repetir(){
    this.navCtrl.navigateForward(['/repetir-password'])
  }

}
