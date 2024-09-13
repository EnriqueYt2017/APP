import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-repetir-password',
  templateUrl: './repetir-password.page.html',
  styleUrls: ['./repetir-password.page.scss'],
})
export class RepetirPasswordPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  inicio(){
    this.navCtrl.navigateForward(['/intro'])
  }

}
