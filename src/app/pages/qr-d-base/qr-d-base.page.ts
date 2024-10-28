import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr-d-base',
  templateUrl: './qr-d-base.page.html',
  styleUrls: ['./qr-d-base.page.scss'],
})
export class QrDBasePage implements OnInit {
  minutes: number = 5;
  seconds: number = 0;
  interval: any;

  constructor(private navCtrl: NavController) { 
    console.log('TimerComponent constructor');
  }

  ngOnInit() {
    this.startTimer();
    this.valorQR=JSON.stringify(this.valorQRJSON)
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          clearInterval(this.interval);
        }
      }
    }, 1000);
  }
  

  closeQR() {
    clearInterval(this.interval);
    this.navCtrl.back(); 
  }

  cerrar() {
    this.navCtrl.navigateForward(['/docente']) 
  }

  valorQR:string=''
  valorQRJSON= [
    { nombre: 'Bases de Datos', codigo: 'INF_0789' },
  ];

}
