import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr-a',
  templateUrl: './qr-a.page.html',
  styleUrls: ['./qr-a.page.scss'],
})
export class QrAPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  asistencia(){
    this.navCtrl.navigateForward(['/asistencia-clases'])
  }


}
