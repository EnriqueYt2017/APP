import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

  @Component({
    selector: 'app-qr-d',
    templateUrl: './qr-d.page.html',
    styleUrls: ['./qr-d.page.scss'],
  })
  export class QrDPage  implements OnInit {
    minutes: number = 5;
    seconds: number = 0;
    interval: any;
  
    constructor(private navCtrl: NavController) {
      console.log('TimerComponent constructor');
    }
  
    ngOnInit() {
      this.startTimer();
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
      this.navCtrl.back(); // Vuelve a la página anterior
    }

    cerrar() {
      this.navCtrl.navigateForward(['/docente']) 
    }
  }